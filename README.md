# alexander-zagaynov.com

Personal website built with [Astro](https://astro.build) and deployed as static assets on [Cloudflare Workers](https://developers.cloudflare.com/workers/) (with a small worker for canonical-host redirects).

## Prerequisites

- [Node.js](https://nodejs.org/) v20+ (developed with v24)
- [pnpm](https://pnpm.io/) v11 (the exact version is pinned via the `packageManager` field in [package.json](package.json); with Corepack enabled, `pnpm` will automatically use the right version)

## Getting started

Install dependencies:

```bash
pnpm install
```

Start the local dev server (with hot reload) at `http://localhost:4321`:

```bash
pnpm dev
```

## Available scripts

| Command         | Description                                              |
| --------------- | --------------------------------------------------------- |
| `pnpm dev`      | Start the Astro dev server                                 |
| `pnpm check`    | Run Astro's type/content checks                            |
| `pnpm build`    | Run `pnpm check` and build the static site into `dist/`     |
| `pnpm preview`  | Preview the production build locally                        |

## Project structure

```
src/
  worker.js          # Cloudflare Worker entry point (canonical-host redirect + static asset serving)
  components/        # Reusable Astro components
  layouts/            # Page layouts
  pages/              # File-based routes
  styles/             # Global CSS
public/               # Static assets copied as-is (icons, CV, screenshots, etc.)
```

## Deployment

The site is deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/), configured in [wrangler.jsonc](wrangler.jsonc). It serves the built `dist/` directory as static assets, running `src/worker.js` first to redirect the non-canonical hostname.

Cloudflare is connected directly to this GitHub repository and automatically builds and deploys on every push — no manual deploy step is required.
