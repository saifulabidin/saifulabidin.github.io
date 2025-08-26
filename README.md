# Saiful Abidin Portfolio

Production-ready Next.js app with Docker and Caddy reverse proxy.

## Quick start (VPS)

1. Install Docker & Docker Compose
2. Clone repo and set env

```powershell
# On your VPS
git clone https://github.com/saifulabidin/saifulabidin.github.io.git
cd saifulabidin.github.io
copy .env.example .env
# Edit .env and set GOOGLE_MAPS_API_KEY and CADDY_EMAIL

# Build & run
docker compose up -d --build
```

Your site will be available at https://sabidzpro.my.id with automatic HTTPS.

## Environment variables

- NEXT_PUBLIC_SITE_URL: Base URL for SEO and sitemap
- GOOGLE_MAPS_API_KEY: Server-side API key used by `/api/maps` proxy
- CADDY_EMAIL: Email for Let's Encrypt

## Local development

```powershell
npm install
npm run dev
```

## Tests

Run the Docker smoke test locally (requires Docker):

```powershell
npm run test:docker
```

## SEO

- Robots: `app/robots.ts`
- Sitemap: `app/sitemap.ts`
- Rich metadata in `app/layout.tsx`

## Notes

- The Docker image uses Next.js `standalone` output for minimal size.
- Caddy handles TLS and reverse proxy on ports 80/443.
