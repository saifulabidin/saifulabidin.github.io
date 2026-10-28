# Contributing to Saiful Abidin Portfolio

Thank you for your interest in contributing to the personal portfolio and software platform of Saiful Abidin.

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) and [Security Policy](SECURITY.md) before submitting contributions.

## Development Workflow

1. **Fork and Clone**:
   ```bash
   git clone https://github.com/saifulabidin/saifulabidin.github.io.git
   cd saifulabidin.github.io
   ```

2. **Branch Naming**:
   - `feat/<feature-name>`: New features or UI components
   - `fix/<bug-name>`: Bug fixes and defect corrections
   - `refactor/<scope>`: Code quality and architectural refactoring
   - `docs/<scope>`: Documentation updates
   - `chore/<task>`: Tooling, dependency, or configuration maintenance

3. **Install Dependencies**:
   Use Bun runtime exclusively:
   ```bash
   bun install
   ```

4. **Environment Setup**:
   ```bash
   cp .env.example .env
   bun run db:generate
   ```

5. **Commit Standards**:
   Follow Conventional Commits: `<type>(<scope>): <subject>` (e.g., `feat(seo): add agentic browsing llms.txt discovery`). Emojis are strictly forbidden.

6. **Validation Pipeline**:
   Ensure all checks pass cleanly before opening a pull request:
   ```bash
   bun run lint
   bun run build
   ```

7. **Submit a Pull Request**:
   - Provide a clear, technical description of changes.
   - Reference any relevant issues.
   - Vercel Preview Deployments will automatically build your PR for visual inspection.

See [GITHUB.md](GITHUB.md) for full branch architecture and repository governance.
