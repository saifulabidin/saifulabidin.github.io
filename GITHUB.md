# GitHub Repository Governance & Contributing Guidelines

This document outlines branch management, contribution protocols, security standards, and CI/CD operations for the public repository [saifulabidin.github.io](https://github.com/saifulabidin/saifulabidin.github.io).

## Branch Architecture

The repository enforces a structured Git workflow:

- `main`: Production branch. Every commit or merge into `main` automatically triggers a production deployment on Vercel. Direct pushes to `main` should be restricted.
- `dev`: Active integration branch for combining staging features before production releases.
- Topic Branches:
  - `feat/<feature-name>`: Implementation of new functional capabilities.
  - `fix/<issue-name>`: Targeted corrections of defects or bugs.
  - `refactor/<scope-name>`: Codebase cleanup, performance optimization, or dependency migration without changing public interfaces.
  - `chore/<task-name>`: Routine maintenance, configuration adjustments, or documentation updates.

## Commit Standards

All commits must follow the Conventional Commits specification. Messages must be clear, concise, and in the imperative mood. Emojis in commit headers and descriptions are strictly prohibited.

Format: `<type>(<scope>): <short description>`

Allowed Types:
- `feat`: Addition of a new capability or user-facing feature.
- `fix`: Resolution of a bug or unexpected behavior.
- `refactor`: Code reorganization without introducing new features or bug fixes.
- `perf`: Code modification focused on performance or memory optimization.
- `docs`: Documentation changes only.
- `test`: Addition or modification of test suites.
- `chore`: Tooling, build configuration, or dependency updates.

Examples:
- `feat(projects): add category filter for fullstack items`
- `fix(sitemap): resolve image property typing in route entries`
- `refactor(build): migrate package management and dockerfile to bun`

## Pull Request Protocol

1. Fork or branch off from `dev` or `main`.
2. Ensure dependencies are resolved strictly with Bun:
   ```bash
   bun install
   ```
3. Verify that the application builds and passes all linting checks before opening a pull request:
   ```bash
   bun run lint
   bun run build
   ```
4. Never commit `.env` or files containing secrets, API keys, or database credentials.
5. Provide a technical description of changes in the pull request description, citing relevant issue numbers.

## Continuous Integration & Deployment (Vercel)

- Preview Deployments: Opening a pull request generates an isolated Vercel Preview Deployment for visual inspection and regression testing.
- Production Deployments: Merges to `main` trigger an automated build via Vercel using `bun install` and `bun run build`.

## Security & Vulnerability Reporting

If you identify a security vulnerability, sensitive data leakage, or potential attack vector in this repository:

1. Do NOT open a public issue on GitHub.
2. Report the vulnerability privately to the maintainer via email at `contact@sabidzpro.is-a.dev` or `syaiful.osd@yahoo.com`.
3. Provide full reproduction steps, affected routes or components, and proof of concept if applicable.
4. Allow reasonable time for remediation before any public disclosure.
