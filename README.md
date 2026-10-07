# Eason Site

Eason Chen's personal site, styled as a light "annotated drafting sheet". It has three pages:

- **Profile** (`#/`): built from his resume. Hero, the three platforms he built from the ground up, experience, skills, certifications and education, and contact details.
- **System Design** (`#/system-design`): scaling a system from one server to millions of users. A sticky architecture diagram adds components as you scroll through each step.
- **Frontend System Design** (`#/frontend-system-design`): why frontend architecture matters and its core principles: rendering, state, data, performance, scale, reliability.
- **AI Workflow** (`#/ai-workflow`): the idea-to-shipped-code loop I use with coding agents, in plain language.

## Stack

React 19 + Vite + TypeScript, Framer Motion for animation, CSS Modules for styling, self-hosted fonts via `@fontsource` (Bricolage Grotesque, IBM Plex Sans, IBM Plex Mono). Routing is a small hash router, so no server rewrite rules are needed.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build     # production build (tsc -b && vite build)
npm run lint      # eslint
npm run preview   # preview the production build
```

See `CLAUDE.md` for project structure, architecture notes, and installed Claude Code skills.
