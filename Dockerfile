# Multi-stage Dockerfile for Next.js (Node 20)
# 1) Builder
FROM node:20-alpine AS deps
WORKDIR /app

# Install OS deps for sharp/optional native modules
RUN apk add --no-cache libc6-compat

# Copy manifests first for better caching
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Install deps (prefer npm if lockfile present)
RUN if [ -f package-lock.json ]; then npm ci; \
    elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile; \
    else npm i; fi

# 2) Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Ensure production build
ENV NODE_ENV=production
# Increase memory limit for building
ENV NODE_OPTIONS="--max-old-space-size=1024"

RUN npm run build

# 3) Runner - minimal image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Install curl for healthcheck
RUN apk add --no-cache curl

# Copy standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose port and set env for Next
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
EXPOSE 3000

USER nextjs

# Start the server
CMD ["node", "server.js"]