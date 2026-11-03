# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: employers and technical leaders evaluating Alexander Zagaynov's experience, results, and CV. Confirmed by the owner.

## Product Purpose

A personal engineering website that helps visitors understand the owner's professional experience, inspect selected work, and access the CV or contact links.

## Positioning

Lead software engineer with experience across enterprise modernization, fintech, cloud integrations, production support, and local-first software. Use only claims already published in the existing CV and website; no invented metrics or client endorsements.

## Capabilities and Constraints

Existing Astro static site on Cloudflare Workers. The requested redesign prioritizes the personal homepage. Develop and review locally. Preserve CV and LaterTabs routes and working contact links. UI and documentation are English. No staging, commits, pushes, or publication without explicit instruction.

## Brand Commitments

Owner: Alexander Zagaynov. A replacement visual direction is authorized for the personal homepage. No new binding palette or typography preference has been specified.

## Evidence on Hand

Professional experience and results: `src/components/CvHtml.astro`. Existing homepage: `src/pages/index.astro`. Contact and profile destinations: `src/lib/links.ts`. LaterTabs imagery and screenshots: `public/assets/`. CV PDF path is owned by `src/lib/links.ts`. Do not invent testimonials, project outcomes, availability, or employment claims.

## Product Principles

- Help a technical hiring decision through concrete evidence.
- Keep the CV and contact routes easy to discover.
- Keep public factual claims faithful to their existing sources.
- Make the page readable and usable on desktop and mobile.
