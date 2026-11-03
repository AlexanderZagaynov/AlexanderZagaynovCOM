---
name: Alexander Zagaynov — Homepage
description: Engineering dossier on warm paper with forest ink and inspectable evidence.
colors:
  paper: "#f7f5ef"
  ink: "#202c26"
  muted: "#526056"
  rule: "#ccd0c5"
  forest: "#335c45"
  forest-hover: "#274a36"
  white: "#ffffff"
  evidence: "#e5eadf"
  evidence-border: "#c8cfc3"
  evidence-text: "#4b5e4d"
  evidence-rule: "#b8c3b3"
  preview: "#e8ece8"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(40px, 4.3vw, 64px)"
    fontWeight: 650
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(28px, 3vw, 38px)"
    fontWeight: 600
    lineHeight: 1.65
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.65
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Public Sans Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Public Sans Variable, sans-serif"
    fontSize: "14px"
    fontWeight: 550
    lineHeight: 1.65
  button:
    fontFamily: "Public Sans Variable, sans-serif"
    fontSize: "14px"
    fontWeight: 600
rounded:
  control: "0.25rem"
  screenshot: "12px"
spacing:
  compact: "12px"
  paragraph: "16px"
  group: "24px"
  column-compact: "36px"
  section-compact: "40px"
  section: "48px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.forest-hover}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.evidence}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.evidence-border}"
    textColor: "{colors.ink}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  navigation:
    textColor: "{colors.ink}"
  evidence-index:
    backgroundColor: "{colors.evidence}"
    textColor: "{colors.ink}"
    padding: "30px 32px 8px"
  experience-row:
    textColor: "{colors.muted}"
    padding: "36px 0 40px"
---

# Design System: Alexander Zagaynov — Homepage

## Overview

**Creative North Star: "Engineering dossier"**

Engineering dossier: warm paper, forest ink, measured typography, and open ruled rows. The system gives professional evidence enough structure to scan without turning each fact into a floating card.

This reference applies only to the homepage rendered by `src/layouts/HomeLayout.astro`. The CV and LaterTabs routes retain independent styles. The source of truth is `src/styles/home.css`; the approved surface composition lives in [.impeccable/surfaces/src-pages-index-astro.md](.impeccable/surfaces/src-pages-index-astro.md).

**Key Characteristics:**
- Warm neutral canvas with a restrained forest accent.
- Manrope headings paired with Public Sans reading text.
- Open ruled evidence, compact controls, and native anchor navigation.

## Colors

A warm paper canvas and deep green ink support one muted forest accent. The frontmatter owns exact values; theme roles unused by this surface are intentionally omitted.

### Primary

- **Forest:** primary CV action, identity mark, link hover, focus, list markers, and the evidence rule.
- **Forest hover:** darker primary action state, with white text retained.

### Neutral

- **Paper / Ink / Muted:** page canvas, primary text, and supporting prose.
- **Rule:** open section and career separators.
- **Evidence / Evidence border:** evidence field and secondary CV action states.
- **Evidence text / Evidence rule:** compact supporting text and separators within the evidence field.
- **White:** text on the forest primary action.
- **Preview:** the real product screenshot's surrounding field.

**The Evidence Field Rule.** Use the pale green field to group linked professional evidence; keep career entries on the paper canvas, separated by rules.

## Typography

**Display Font:** Manrope Variable, sans-serif fallback.
**Body Font:** Public Sans Variable, sans-serif fallback.

Both families are self-hosted through Fontsource imports in `HomeLayout.astro`; their packages retain the font licenses. There is no distinct mono role. Headings use tight tracking and balanced wrapping; prose stays open and direct.

### Hierarchy

The frontmatter records the reusable desktop roles. The introduction uses the display role; section headings use headline; career contribution headings use title. Reading text uses body, with career prose at (15px), introduction prose at (17px), and supporting metadata at (12–14px). Evidence headings use (27px / 1.25), company headings (21px / 650), and project headings (38px / 600). The evidence headline and summary use their own compact line heights, not the body default.

At the narrow breakpoint, display changes to `clamp(36px, 6vw, 48px)` with an (18ch) maximum; introduction prose becomes (16px), career contribution headings (19px), company headings (20px), and project headings (32px). Career prose is capped at (74ch), general supporting copy at (65ch), introduction copy at (47ch).

**The Two Voices Rule.** Use Manrope for headings and the identity mark; use Public Sans for prose, metadata, navigation, and actions.

## Layout

The desktop container is `min(1240px, calc(100% - 112px))`. At the (1050px) maximum-width breakpoint it uses `calc(100% - 64px)`; at (760px), `calc(100% - 40px)`. Intro, career, and project columns collapse to one column at the latter breakpoint. Navigation wraps into a full-width row; no hidden menu is introduced.

Desktop major sections use open vertical padding, while the recorded spacing tokens cover recurring paragraph, grouping, and compact-section steps. Desktop career and project grids use (70px) gaps, reduced to (36px) and then (24px), with the narrow project gap (30px). Preserve source-specific spacing rather than forcing every measurement onto a new scale.

## Elevation & Depth

The document is flat and uses tinted fields and thin rules for grouping. The actual product screenshot alone has `0 14px 32px rgb(32 44 38 / 12%)`. Buttons have no intended depth; the daisyUI theme sets depth to zero.

**The Screenshot Lift Rule.** Reserve the soft shadow for the actual product screenshot; editorial rows and evidence fields remain flat.

## Shapes

Editorial containers are square and open. Compact controls use the control radius; the product screenshot uses the screenshot radius. Section boundaries and evidence rows use (1px) rules. Direction arrows are inline (18px) SVG strokes, not text glyphs.

## Components

### Buttons

Compact, explicit CV actions: forest with white text for primary; pale evidence fill and border for secondary. Both use (22px) inline padding, a (22px) content gap, and the frontmatter's control height and radius. Hover changes the fill; focus uses a forest (3px) outline offset by (5px). State color transitions take (160ms ease-out).

### Links and Navigation

Text actions are underlined with a (0.24em) underline offset and (10px) arrow gap. Navigation is unboxed, regular case, (14px), with (24px) gaps and a (44px) minimum target height; footer navigation is (12px). Hover turns forest. The skip link appears on focus.

### Evidence Index

A flat tinted field with a short forest rule and stacked ruled links. Each link contains company, contribution, and compact detail; its down-right SVG shifts (2px, 2px) on hover. The rule expands once over (700ms), with text always visible. Native anchors lead to career entries, whose `:target` state adds a translucent evidence tint. Reduced motion disables the animation, transitions, and smooth scrolling.

### Career Rows and Product Preview

Career rows pair context with contribution prose and native bullet lists, bounded by top rules. The product preview uses the preview field and a centered, constrained screenshot with the sole soft shadow. No input, chip, modal, or general-purpose card is established by this homepage.

## Do's and Don'ts

### Do:
- **Do** reuse the homepage tokens and preserve the separate CV and LaterTabs styling boundaries.
- **Do** keep actions readable, with visible focus and at least the existing 44px link or 48px button target height.
- **Do** use real product imagery and record its provenance.
- **Do** preserve native anchors and honor reduced motion.

### Don't:
- **Don't** apply this homepage system to the CV or LaterTabs routes without a separate decision.
- **Don't** replace open ruled rows with a repeated floating-card treatment.
- **Don't** use the product screenshot shadow on ordinary text containers.
