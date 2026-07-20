# CLAUDE.md

This file gives Claude Code context about the project.

## Project Overview

- Project name: Eason Site
- One-line description: Eason Chen's personal site — a dark "mission control" themed single-pager (hero node-graph, skills, experience log, certifications, contact) built from his resume.
- Tech stack: React 19 + Vite + TypeScript, Framer Motion, CSS Modules

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
src/components/  one folder per section (Hero, Skills, Experience, Certifications,
                 Contact, Footer, StatusReadout, AgentFocus, Interests), each with
                 a .tsx and a co-located .module.css
src/data/        typed content (skills.ts, experience.ts, certifications.ts,
                 agentFocus.ts) — resume facts live here, not in components
src/hooks/       useReducedMotion (prefers-reduced-motion gate threaded as a prop
                 through every animated component)
src/styles/      tokens.css (design tokens as CSS custom properties) + global.css
public/          static assets served as-is
```

## Code Style

- TypeScript, function components with hooks (no class components).
- ESLint + Prettier for formatting; run `npm run lint` before committing.
- Prefer functional, declarative patterns; keep components small and single-purpose.

## Architecture Notes

- Single-page site, client-rendered via Vite (no SSR/server framework).
- Design tokens (color, type scale, spacing, easing) live in `src/styles/tokens.css` as CSS custom properties — reference these instead of hardcoding values.
- Motion is done via Framer Motion; every animated component takes a `reducedMotion: boolean` prop from `useReducedMotion` and must degrade to static/instant when true.
- Installed skills (`.claude/skills/`), consult before making related changes:
  - `frontend-design` — visual/design decisions
  - `vercel-react-best-practices` — React performance patterns
  - `react-patterns`, `react-testing`, `react-performance` — from affaan-m/ECC
  - `web-design-guidelines` — Vercel Labs Web Interface Guidelines compliance checklist

## Testing Strategy

- Not yet set up (no test runner installed). When added, use Vitest + React Testing Library per the `react-testing` skill, with tests colocated next to components (`Component.test.tsx`).

## Notes / Restrictions

- This is a small personal site — avoid over-engineering (no unnecessary state management libraries, routing frameworks, etc. unless the site grows to need them).
- Never force-push without explicit confirmation.
