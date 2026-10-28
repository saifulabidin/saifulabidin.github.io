# Security Policy

## Supported Versions

Only the latest release running on the `main` branch is actively supported with security patches and vulnerability remediation.

| Version | Supported | Notes |
| --- | --- | --- |
| Next.js 14.x / App Router | Yes | Active production release |
| Bun 1.2.x+ | Yes | Runtime and package engine |
| Node.js 18.x / 20.x | Partial | Legacy container fallback |
| < 14.0.0 | No | End of Life |

## Reporting a Vulnerability

If you discover a security vulnerability, authentication bypass, data exposure risk, or injection flaw within this codebase or the hosted environment:

1. **Do NOT disclose publicly**: Never open a public GitHub Issue, Pull Request, or public discussion regarding an unpatched vulnerability.
2. **Contact Privately**: Send full technical details to the maintainer via email:
   - Primary: `contact@sabidzpro.is-a.dev`
   - Secondary: `sabidzpro@gmail.com`
3. **Include Reproducible Details**:
   - Attack vector description and vulnerability classification (OWASP Top 10 category).
   - Step-by-step reproduction instructions or a minimal Proof of Concept (PoC).
   - Potential impact assessment (confidentiality, integrity, availability).
   - Suggested remediation or patch if known.

## Response SLA

- **Acknowledgment**: Within 24-48 hours of report receipt.
- **Triage & Assessment**: Within 72 hours with severity classification (CVSS base score).
- **Remediation & Patch**: Deployment of fix to `main` branch and production edge within 7 business days for high/critical vulnerabilities.
- **Public Disclosure**: Coordinated disclosure after the patch has been verified and deployed to production.

## Security Architecture & Best Practices

- **Strict Environment Isolation**: API keys, OAuth client secrets, and database credentials (`AUTH_SECRET`, `POSTGRES_PRISMA_URL`, `BLOB_READ_WRITE_TOKEN`) are kept exclusively in server-side runtime environments and never exposed to the client bundle.
- **Zero-Key Location Embedding**: Maps are rendered via sandboxed Google Maps Embed iframe with `referrerPolicy="strict-origin-when-cross-origin"`, completely eliminating client-side API key exposure.
- **API Boundary Protection**: State-changing endpoints enforce session verification with NextAuth.js. Client requests undergo schema validation and rate limiting.
- **Secure Edge Headers**:
  - `X-Frame-Options: SAMEORIGIN` prevents clickjacking.
  - `X-Content-Type-Options: nosniff` mitigates MIME-confusion attacks.
  - `Referrer-Policy: origin-when-cross-origin` controls referrer leakage.
  - Strict Content-Security-Policy headers for SVG and user-uploaded media.
- **Dependency Auditing**: Automated dependency scanning via `bun audit` and CI pipeline verification.
