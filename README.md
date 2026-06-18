# Study

Independent learning platform for B.Sc. Volkswirtschaftslehre students at Georg-August-Universität Göttingen.

This is not an official university platform. It must not imply official affiliation, lecturer approval, semester alignment, or exam alignment unless that information is explicitly sourced and current.

## Status

The repository currently contains the product constitution, product specification, information architecture, content-schema specification, design-system foundation, public site shell, final homepage structure with neutral fixture data, neutral fixture module-page and topic-page templates, a neutral fixture practice flow, and a minimum Astro foundation. It does not contain real course content.

## Prerequisites

- Node.js 24 LTS
- npm 11 or newer

This repository is standardized on Node.js 24 LTS. Do not use Node.js 25 for development; the odd-numbered release has shown unreliable Astro and TypeScript validation behavior in this project.

If your shell supports version files, use:

```sh
nvm use
```

or activate Node 24 with your existing version manager. With Homebrew, ensure `node@24` is first on `PATH`.

## Installation

```sh
npm ci
```

## Development

```sh
npm run dev
npm run build
npm run preview
```

## Validation

```sh
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run validate
```

`npm run validate` intentionally excludes Playwright because browser installation and browser execution can be heavier than the normal validation loop. Run browser tests separately:

```sh
npm run test:e2e
npm run test:e2e:ui
```

To diagnose runtime mismatches, check:

```sh
node --version
npm --version
which node
which npm
```

If Chromium is not installed for Playwright, run:

```sh
npx playwright install chromium
```

## Repository Structure

```text
docs/                 Product and technical documentation
public/               Static public assets
src/components/       Shared Astro components
src/content/          Future Astro content collections
src/fixtures/         Neutral development fixtures
src/layouts/          Shared page layouts
src/lib/              Pure utilities
src/pages/            Astro routes
src/styles/           Global CSS
src/types/            Shared TypeScript types
tests/unit/           Vitest unit tests
tests/e2e/            Playwright browser tests
```

The development-only component showcase is available at `/dev/components/` when running the site. It is not linked from public navigation and contains neutral fixture content only.

## Content Integrity

Every published academic claim must be traceable to a source. Official, adapted, and original materials must be clearly distinguished. Original exercises must never be presented as official exam questions.

## Private Source Materials

Private source materials, course ZIP files, restricted PDFs, and unverified course exports must not be committed. Keep them outside the repository or inside ignored directories such as `private-sources/`, `course-materials/`, or `source-materials/`.
