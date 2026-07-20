# CLAUDE.md

This file gives Claude Code context about the project.

## Project Overview

- Project name: Eason Site
- One-line description: Personal / studio website (portfolio, intro, contact) for Eason.
- Tech stack: React + Vite + TypeScript

> Note: the project is not yet scaffolded — there's no `package.json` or `src/` yet. The commands and structure below are the intended setup; run the scaffolding step first (`npm create vite@latest . -- --template react-ts`) before these commands will work.

## Common Commands

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Run tests
npm test

# Build
npm run build

# Lint / format
npm run lint
```

## Directory Structure

```
src/            components, pages, and app logic
src/components/ reusable UI components
src/pages/      top-level page components
public/         static assets served as-is
```

## Code Style

- TypeScript, function components with hooks (no class components).
- ESLint + Prettier for formatting; run `npm run lint` before committing.
- Prefer functional, declarative patterns; keep components small and single-purpose.

## Architecture Notes

- Single-page site, client-rendered via Vite (no SSR/server framework).
- Follow the `frontend-design` skill for visual/design decisions and the `vercel-react-best-practices` skill for React performance patterns — both are installed under `.claude/skills/`.

## Testing Strategy

- Not yet set up. When added, prefer Vitest + React Testing Library, with tests colocated next to components (`Component.test.tsx`).

## Notes / Restrictions

- This is a small personal site — avoid over-engineering (no unnecessary state management libraries, routing frameworks, etc. unless the site grows to need them).
- Never force-push without explicit confirmation.
