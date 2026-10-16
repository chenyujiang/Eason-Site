# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers in New Zealand filling Senior or Lead Frontend roles. They are deciding whether Eason is worth an interview, usually in a short first pass from a CV link or LinkedIn, sometimes followed by a deeper read before the interview.

Eason is looking for full-time Senior/Lead Frontend positions.

## Product Purpose

A personal site that gets Eason to interview. The profile page shows seniority and scope at a glance. The notes pages (System Design, Frontend System Design, AI Workflow) show how he thinks, as evidence behind the profile's claims.

Success: a hiring manager leaves knowing his level, his AI-augmented way of working, and how to contact him, and the notes hold up under a technical reader's scrutiny.

## Positioning

- 10+ years of New Zealand experience delivering e-commerce and enterprise web applications.
- Sole senior frontend engineer who owns frontend and technical architecture end to end: coding standards, decisions such as the AngularJS to React + TypeScript migration, direct work with project managers.
- Uses AI as an engineering multiplier: custom Claude Code workflows, multi-agent designs, MCP integrations.
- Uses AI to move into adjacent domains fast, for example delivering Power BI semantic models and DAX reporting with no formal BI background.

## Operating Context

- Visitors arrive from a CV, LinkedIn or a direct link, on desktop or phone.
- Deep links to a notes section (`#/<page>/<section-id>`) get shared on their own.
- Contact happens off-site: email, LinkedIn or GitHub.

## Capabilities and Constraints

- Routes: profile (`#/`), System Design, Frontend System Design, AI Workflow.
- Resume content lives as typed data in `src/data/`; components hold no content.
- Notes text is paraphrased, never copied verbatim from a source. Pages do not cite sources, so text must not refer to them ("the book", "the guide").
- The Frontend System Design page covers principles only, with no interview-prep content.
- The phone number must not be shown publicly on the site. Public contact channels are email, LinkedIn and GitHub.

## Brand Commitments

- Name: Eason Chen. Title line: Senior Frontend Developer · AI-Augmented Engineering.
- Voice: first person, plain and factual, claims backed by specifics.

## Evidence on Hand

- Resume facts: `src/data/profile.ts`, `experience.ts`, `platforms.ts`, `skills.ts`, `credentials.ts`.
- Certifications: Microsoft (Dynamics 365 Business Central Developer Associate, PL-900); Anthropic (7 certificates of completion).
- Education: Master's, Computer and Information Sciences, AUT; BSc, Computer Software Engineering, APU/APIIT.
- The notes pages themselves.

Absent, and must not be fabricated: project screenshots, testimonials or references, client logos, metrics not already in the resume data, and a portrait photo.

## Product Principles

1. Seniority is legible in the first screen: role, years, scope and contact without scrolling for them.
2. Every claim on the profile is specific and traceable to real work; no inflated or invented proof.
3. The notes are the depth layer: accurate, paraphrased, and worth a technical reader's time.
4. The AI-augmented angle is shown through how the work is done, not asserted as a buzzword.
5. Stay a small, fast personal site; no machinery the content does not need.
