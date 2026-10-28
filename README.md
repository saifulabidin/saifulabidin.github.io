# Saiful Abidin - Personal Portfolio Website

Production-grade personal portfolio and interactive web platform engineered with Next.js App Router, TypeScript, React Three Fiber, Tailwind CSS, Prisma ORM, and the Bun runtime. Deployed natively on Vercel with support for self-hosted containerized deployment via Docker and Caddy.

Live URL: [https://sabidzpro.is-a.dev](https://sabidzpro.is-a.dev)

## Architecture & Technology Stack

- Runtime and Package Manager: Bun (v1.3.x)
- Framework: Next.js (v14.x App Router, Standalone Output)
- Language: TypeScript 5
- User Interface: React 18, Tailwind CSS, Framer Motion, Motion, Swiper
- 3D Graphics and Physics: Three.js, React Three Fiber (@react-three/fiber), React Three Drei (@react-three/drei), Rapier Physics (@react-three/rapier), MeshLine
- Persistence Layer: Prisma ORM v6 with Prisma Postgres / Vercel Postgres
- Authentication: NextAuth.js v5 (Beta) with GitHub OAuth provider
- Object Storage: Vercel Blob
- Integration: Google Maps JavaScript API via secure server-side proxy
- Production Hosting: Vercel (Serverless and Static Edge)
- Alternative Hosting: Multi-stage Docker container with Bun runtime behind Caddy reverse proxy

## Directory Structure

```text
├── app/                  # Next.js App Router routes, layouts, and components
│   ├── api/              # API Route Handlers (auth, maps proxy, CRUD)
│   ├── components/       # Modular UI components (3D lanyard, sections, forms)
│   ├── constants/        # SEO metadata, schemas, structured data, static items
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root HTML layout with JSON-LD schema injections
│   ├── page.tsx          # Main landing page composition
│   ├── robots.ts         # Automated robots.txt generation
│   └── sitemap.ts        # Automated XML sitemap generation
├── lib/                  # Shared utilities and Prisma client singleton
├── prisma/               # Database schema definition and seed scripts
├── public/               # Static assets, fonts, icons, project imagery
├── scripts/              # Automation and SEO auditing shell scripts
├── tests/                # Smoke tests and container verification suites
├── Caddyfile             # Reverse proxy configuration with automatic HTTPS
├── Dockerfile            # Multi-stage container definition using oven/bun
├── docker-compose.yml    # Service composition for containerized deployment
├── next.config.js        # Next.js compiler and header configuration
├── package.json          # Project manifest and task automation
├── tsconfig.json         # TypeScript compiler configurations
├── bun.lock              # Bun deterministic lockfile
├── GITHUB.md             # Repository maintenance and contribution protocol
└── LICENSE.md            # Licensing terms and conditions
```

## Environment Variables

Copy `.env.example` to `.env` and populate the required parameters:

```bash
cp .env.example .env
```

| Variable | Description | Scope |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL of the website for SEO and sitemap generation | Public (Client & Server) |
| `NODE_ENV` | Application environment state (`development` or `production`) | Server |
| `POSTGRES_PRISMA_URL` | Connection string for Prisma Postgres database | Server |
| `AUTH_SECRET` | Secret key used to encrypt NextAuth session tokens | Server |
| `AUTH_GITHUB_ID` | GitHub OAuth application client identifier | Server |
| `AUTH_GITHUB_SECRET` | GitHub OAuth application client secret | Server |
| `BLOB_READ_WRITE_TOKEN` | Read/write API token for Vercel Blob storage | Server |
| `GOOGLE_MAPS_API_KEY` | Server-side Google Maps API key proxied by `/api/maps` | Server |
| `CADDY_EMAIL` | Administrator email for automatic Let's Encrypt TLS certificates | Docker only |

## Getting Started

### Prerequisites

- Bun v1.2.0 or higher
- Git

### Installation and Local Execution

1. Clone the repository:

```bash
git clone https://github.com/saifulabidin/saifulabidin.github.io.git
cd saifulabidin.github.io
```

2. Install dependencies:

```bash
bun install
```

3. Generate Prisma client bindings:

```bash
bun run db:generate
```

4. Launch the local development server:

```bash
bun dev
```

The application will be accessible at `http://localhost:3000`.

### Database Workflow

- Synchronize Prisma schema with the target database:

```bash
bun run db:push
```

- Execute migrations:

```bash
bun run db:migrate
```

- Seed sample projects and initial data:

```bash
bun run db:seed
```

## Production Deployment

### Vercel (Primary Platform)

This project is optimized for deployment on Vercel:

1. Import the repository into the Vercel Dashboard.
2. Vercel automatically detects `bun.lock` and executes builds using Bun.
3. Configure the environment variables listed above in the Vercel Project Settings.
4. Attach Prisma Postgres and Vercel Blob storage instances from the Vercel Storage tab.
5. Deployments trigger automatically on pushes to the `main` branch.

### Self-Hosted Docker Deployment (Alternative)

For hosting on VPS environments:

```bash
# Build and start services in detached mode
bun run compose:up

# View running container status
docker compose ps

# Stop services
bun run compose:down
```

The Dockerfile uses `oven/bun:1-alpine` across multi-stage build layers to maintain a minimal container attack surface and fast startup times.

## Quality Assurance & Verification

- Lint codebase against Next.js and ESLint standards:

```bash
bun run lint
```

- Run Docker end-to-end container verification test:

```bash
bun run test:docker
```

- Execute SEO and metadata compliance verification:

```bash
bun run seo:check
```

- Generate bundle performance analysis:

```bash
bun run analyze
```

## Security Posture

- Sensitive credentials (Google Maps API keys, database credentials) are stored server-side and never exposed to the client bundle.
- State-changing administration endpoints require authenticated session tokens verified through GitHub OAuth.
- Strict HTTP response headers are enforced at the edge:
  - `X-Frame-Options: SAMEORIGIN`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: origin-when-cross-origin`
  - `X-DNS-Prefetch-Control: on`
- Public static assets are served with isolated sandbox content-security policies for SVG rendering.

## Contributing and Governance

Review [GITHUB.md](file:///home/sabidzpro/Documents/project/saifulabidin.github.io/GITHUB.md) for branch strategy, commit conventions, and vulnerability disclosure protocols.

## License

This project is licensed under the MIT License. See [LICENSE.md](file:///home/sabidzpro/Documents/project/saifulabidin.github.io/LICENSE.md) for terms.
