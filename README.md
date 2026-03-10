# DevPulse Demo

DevPulse Demo is a polished, lightweight multi-page marketing website for a fictional B2B SaaS product focused on engineering analytics and software insights.

This repository is intentionally designed for a **2026 AI-assisted developer workflow demo** (Linear/Claude style), while staying clean and credible for real-world presentation.

## Project overview

DevPulse positions itself as a platform that helps engineering and product teams:
- connect release activity to business outcomes,
- improve landing page conversion,
- align product, growth, and engineering decisions with shared metrics.

Included routes:
- `/`
- `/features`
- `/pricing`
- `/customers`
- `/about`
- `/contact`

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **ESLint**
- **Prettier**
- **Vitest**
- **React Testing Library**

## Local setup

### Prerequisites
- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

- Dev server:
  ```bash
  npm run dev
  ```
- Production build:
  ```bash
  npm run build
  ```
- Lint:
  ```bash
  npm run lint
  ```
- Tests:
  ```bash
  npm run test
  ```

## Project structure

```text
app/
  about/
  contact/
  customers/
  features/
  pricing/
  globals.css
  layout.tsx
  page.tsx
components/
  layout/
  sections/
  ui/
data/
  marketing.ts
  site.ts
__tests__/
  contact.test.tsx
  home.test.tsx
  navbar.test.tsx
  pricing.test.tsx
.claude/
  skills/linear-pr/SKILL.md
CLAUDE.md
```

## Notes for AI-assisted workflow demos

- The app is intentionally scoped to show realistic UI work, tests, and docs in a small reviewable diff.
- Repository-level and personal Claude guidance files are included to support repeatable team workflows.
- The project is suitable for local demos and future Vercel deployment.
