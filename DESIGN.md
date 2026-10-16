---
name: Eason Site
description: A senior frontend developer's profile and notes, drawn as an annotated drafting sheet.
colors:
  drafting-cobalt: "#2747d6"
  cobalt-tint: "#e4e9fb"
  highlighter-yellow: "#ffe45c"
  highlighter-tint: "#fffbe0"
  navy-ink: "#15233f"
  ink-soft: "#4a5670"
  drafting-film: "#edf1f5"
  sheet: "#ffffff"
  rule: "#d3dbe5"
  rule-strong: "#b4c0cf"
  grid-line: "rgba(39, 71, 214, 0.055)"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(3.2rem, 1.9rem + 5vw, 6rem)"
    fontWeight: 750
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 1.4rem + 1.8vw, 2.7rem)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque Variable, IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.05rem + 0.5vw, 1.4rem)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(1.12rem, 1.02rem + 0.5vw, 1.36rem)"
    fontWeight: 500
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(0.98rem, 0.93rem + 0.25vw, 1.06rem)"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(0.86rem, 0.82rem + 0.2vw, 0.94rem)"
    fontWeight: 400
  label:
    fontFamily: "IBM Plex Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "clamp(0.74rem, 0.7rem + 0.2vw, 0.82rem)"
    fontWeight: 500
    letterSpacing: "0.06em"
rounded:
  sm: "3px"
  md: "6px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "1rem"
  "4": "1.5rem"
  "5": "2.5rem"
  "6": "4rem"
  "7": "6rem"
components:
  button:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1.5rem"
    height: "2.75rem"
  button-hover:
    backgroundColor: "{colors.highlighter-tint}"
  sheet-card:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.md}"
  callout:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.5rem"
  callout-label:
    backgroundColor: "{colors.highlighter-yellow}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.label}"
  header-link:
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.sm}"
    padding: "0.4rem 0.7rem"
  header-link-active:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.navy-ink}"
  rail-link:
    textColor: "{colors.ink-soft}"
    typography: "{typography.small}"
  rail-link-active:
    textColor: "{colors.navy-ink}"
---

# Design System: Eason Site

## Overview

**Creative North Star: "The Annotated Drafting Sheet"**

The site is an engineer's working sheet laid on drafting film. A faint cobalt grid covers the page. White sheets are pinned on top for the content that needs a surface. The reader's eye is guided the way a reviewer marks up a drawing: navy ink for the text, a cobalt pen for structure and links, and a yellow highlighter for the few phrases that matter most.

The mood is precise, calm and working-grade. Density is moderate: generous vertical rhythm between sections, tight and orderly inside them. Expression lives in the details: the highlighter stroke, mono labels, heavy ink rules on section tops, hand-drawn line icons and the step-by-step architecture diagram. It does not come from color fields, gradients or ornament.

The system is light only. Dark mode, gradients and soft, heavily rounded cards are rejected.

**Key Characteristics:**
- Drafting-film grid background (24px cells) under every page.
- Navy ink text, cobalt as the single pen color, yellow highlighter as the signature mark.
- White sheets with a 1px rule and a barely-there shadow, small corners (3–6px).
- Mono uppercase labels for metadata, captions and section numbers.
- Heavy 1.5px ink rules mark the top of major lists and sections.

## Colors

A cool, near-monochrome drafting palette with one pen color and one highlighter.

### Primary
- **Drafting Cobalt** (`drafting-cobalt`): links, focus rings, mono labels, active nav markers, timeline dashes, the hero surname and diagram frames. It is the pen that draws structure.
- **Cobalt Tint** (`cobalt-tint`): quiet fills behind grouped regions: the scale diagram's frames and the Platforms module blocks.

### Secondary
- **Highlighter Yellow** (`highlighter-yellow`): the `==mark==` highlighter stroke, callout labels, the monogram, text selection and the newly added box in the scale diagram.
- **Highlighter Tint** (`highlighter-tint`): hover fill on buttons and the active AI Workflow stage background.

### Neutral
- **Navy Ink** (`navy-ink`): all primary text, headings, heavy rules and button borders.
- **Ink Soft** (`ink-soft`): secondary text, intros, bullets, inactive nav links.
- **Drafting Film** (`drafting-film`): the page background under the grid.
- **Sheet** (`sheet`): white content surfaces.
- **Rule / Rule Strong** (`rule`, `rule-strong`): hairline dividers, sheet borders, nav rails, slash separators.
- **Grid Line** (`grid-line`): the 24px drafting grid.

### Named Rules
**The One Pen Rule.** Cobalt is the only accent ink. No second hue for links, labels or states.

**The Highlighter Is a Mark Rule.** Yellow marks a phrase or a label; it never fills a large area. A tinted surface may not hold `==marks==`, because they would wash out.

## Typography

**Display Font:** Bricolage Grotesque Variable (with IBM Plex Sans, system-ui)
**Body Font:** IBM Plex Sans (with system-ui)
**Label/Mono Font:** IBM Plex Mono (with SFMono-Regular, Consolas)

**Character:** A characterful grotesque for headings over a sober engineering sans, with mono for anything that reads like an annotation or measurement.

### Hierarchy
- **Display** (750, fluid up to 6rem, line-height 0.92, -0.04em): the hero name only. The surname drops to weight 300 in cobalt.
- **Headline** (650, fluid ~1.8–2.7rem, 1.15): section and page titles.
- **Title** (650, fluid ~1.15–1.4rem, 1.15): company names, sub-sections.
- **Lead** (500, fluid ~1.12–1.36rem): the hero role line and first summary paragraph.
- **Body** (400, fluid ~0.98–1.06rem, 1.65): running text, held to 60–68ch.
- **Small** (400, fluid ~0.86–0.94rem): nav links, skill lists, callout text.
- **Label** (mono 500, fluid ~0.74–0.82rem, 0.06em, uppercase): metadata, captions, periods, section numbers, callout labels.

### Named Rules
**The Annotation Rule.** If it reads like a note in a margin (a date, a count, a category), it is set in mono. Prose is never mono.

**The No Kicker Rule.** No eyebrow labels above headings. A heading stands on its own; context goes in the intro paragraph below it.

## Layout

Content sits in a centered container (max 74rem, 1.5rem side padding). Spacing follows a 7-step scale from 0.25rem to 6rem; sections are separated by 4rem and headers sit 2.5rem above their content.

Layout is mobile-first with breakpoints at 640, 900, 1000 and 1100px:
- Skills grow from one to two to three columns.
- Experience entries split into a sticky 17rem meta column and a content column from 900px.
- The profile's fixed side rail and the notes' table-of-contents rail appear from 1100px; below that, notes use a collapsible mobile TOC.
- Under 560px the header wraps to two rows and nav labels shorten.

Under coarse pointers, interactive rows grow to a 44px minimum tap height.

## Elevation & Depth

Almost flat. Depth is one step: the drafting film is the ground and white sheets lie on it, defined by a 1px rule and a very soft shadow. Nothing else lifts. State is shown with color, rules and fills, never by raising an element.

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 1px 0 rgba(21, 35, 63, 0.04), 0 8px 24px -16px rgba(21, 35, 63, 0.25)`): every pinned white sheet.

### Named Rules
**The Pinned Sheet Rule.** One elevation only. A sheet is either on the film or it is part of the film.

## Shapes

Small, technical corners: 3px for buttons, callouts, focus rings and the diagram; 6px for sheets and grouped grids. Borders are hairlines (1px) in the rule colors. A heavier 1.5px navy rule tops major lists and marks button outlines and the monogram ring. Dashed cobalt strokes outline grouped regions in diagrams.

## Components

### Buttons
Plain and tool-like.
- **Shape:** small corners (3px), 1.5px navy outline, white fill.
- **Default:** navy text, weight 500, 0.5rem × 1.5rem padding, 44px minimum height.
- **Hover / Focus:** fill turns highlighter tint; focus shows the 2px cobalt ring offset 3px.

### Cards / Containers
- **Corner Style:** 6px.
- **Background:** white sheet on drafting film.
- **Shadow Strategy:** the single sheet shadow (see Elevation).
- **Border:** 1px rule.
- **Internal Padding:** 1.5rem. Grouped grids (Skills) use 1px rule gutters instead of gaps.

### Callouts
- White fill, 1px strong rule, 3px corners, small text.
- The label is a mono uppercase tag on a highlighter-yellow block. No colored side stripe.

### Navigation
- **Header:** sticky, translucent drafting film with blur and a bottom rule. Links are small, ink-soft; hover and current page take a white fill, and the current page adds a 2px cobalt underline.
- **Rails (profile and notes TOC):** a 1px strong rule on the left; the current item turns navy, weight 500, with a 2px cobalt marker on the rail.

### Lists and Timeline
Experience opens with a heavy navy rule; entries are divided by hairlines. Bullets are short cobalt dashes, not dots. Skills lists are inline, separated by thin slashes in the strong rule color.

### Scale Diagram (signature)
An inline SVG architecture drawing on its own finer 16px grid. Boxes are white with 1.25px navy strokes; the newly introduced box fills highlighter yellow. Edges and arrowheads are ink-soft; groups are dashed cobalt frames on a cobalt tint.

### Icons
Line icons drawn on a 16-unit grid with one 1.5px stroke in `currentColor`, sized to 1em. No unicode glyphs or icon fonts.

## Do's and Don'ts

### Do:
- **Do** keep the drafting grid on every page background.
- **Do** use cobalt as the single accent and the highlighter for at most a few phrases per section.
- **Do** set dates, periods, counts and categories in mono uppercase labels with 0.06em tracking.
- **Do** put content that needs a surface on a white sheet with a 1px rule and the sheet shadow.
- **Do** honour reduced motion: entrances and the highlighter draw degrade to static.

### Don't:
- **Don't** add a dark mode.
- **Don't** use colour gradients for fills or backgrounds; gradients only build the hard-edged grid lines and highlighter stroke.
- **Don't** use soft, heavily rounded cards; corners stay at 3–6px.
- **Don't** put eyebrow kickers above headings.
- **Don't** add colored side stripes wider than 1px to cards or callouts.
- **Don't** fill large areas with highlighter yellow.
