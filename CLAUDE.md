# CLAUDE.md

This file gives Claude Code context about the project.

## Project Overview

- Project name: Eason Site
- One-line description: Eason Chen's personal site — a light "annotated drafting sheet" theme (grid paper, navy ink, cobalt accent, yellow highlighter marks). A profile page built from his resume plus study-notes pages (System Design, Frontend System Design).
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
src/pages/       one file per route: HomePage (profile), SystemDesignPage and
                 FrontendDesignPage (lazy-loaded study notes)
src/components/  one folder per component, each with a .tsx and a co-located
                 .module.css. Notes/ holds the shared notes layout + block renderer;
                 ScaleDiagram/ is the step-by-step architecture SVG
src/data/        typed content — resume facts (profile, platforms, experience,
                 skills, credentials) and notes content (systemDesign,
                 frontendDesign, using the Block model in notes.ts). Content lives
                 here, not in components
src/hooks/       useReducedMotion, useHashRoute, useActiveSection, useScrollToSection
src/routes.ts    route table + hrefFor() link builder
src/styles/      tokens.css (design tokens as CSS custom properties) + global.css
public/          static assets served as-is
```

## Code Style

- TypeScript, function components with hooks (no class components).
- ESLint + Prettier for formatting; run `npm run lint` before committing.
- Prefer functional, declarative patterns; keep components small and single-purpose.

## Architecture Notes

- Client-rendered via Vite (no SSR/server framework).
- Routing is a tiny hash router (`useHashRoute`), not a library: `#/`, `#/system-design`, `#/frontend-system-design`, with deep links to sections as `#/<page>/<section-id>`. Hashes that don't start with `#/` (e.g. the skip link) leave the route alone. Hash routing means no server rewrite rules are needed. Add a page by adding it to `routes.ts`, `TITLES` in `App.tsx`, and a lazy import.
- Notes text supports `==phrase==` for a highlighter mark (rendered by `Marked`). Notes content must be paraphrased, never copied verbatim from the source book/site.
- Fonts are self-hosted via @fontsource: Bricolage Grotesque (display), IBM Plex Sans (body), IBM Plex Mono (labels/data).
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
