# Multi-stage Dockerfile for Next.js powered by Bun
# 1) Dependencies
FROM oven/bun:1-alpine AS deps
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# 2) Builder
FROM oven/bun:1-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN bun run db:generate
RUN bun run build

# 3) Runner - minimal production runtime
FROM oven/bun:1-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

USER nextjs

CMD ["bun", "server.js"]
