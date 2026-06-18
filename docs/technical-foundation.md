# Technical Foundation

This document records the minimum production-ready Astro foundation for the learning platform. It does not define final product UI, real course content, search, progress tracking, or deployment automation.

## Dependency choices

- Node.js 24 LTS is the supported development runtime. Node.js 25 is not used because the odd-numbered release has shown unreliable Astro and TypeScript validation behavior in this project.
- Dependencies are installed from the lockfile with `npm ci`.
- Astro provides static site generation, file-based routing, and future content collections.
- `@astrojs/mdx` enables MDX topic bodies without adding a component framework.
- TypeScript is configured strictly for future schema and application code.
- ESLint and Prettier provide code quality and formatting checks.
- `prettier-plugin-astro` formats Astro files.
- Vitest covers pure utilities.
- Playwright covers browser smoke tests.
- `@axe-core/playwright` provides accessibility smoke checks.

No React, Vue, Svelte, Tailwind, component framework, external design system, analytics, AI features, accounts, cloud synchronization, gamification, or community functionality is included.

## Runtime setup

Use Node.js 24 LTS with npm 11 or newer.

The repository includes `.nvmrc` and `.node-version` with `24` so common version managers can activate the correct runtime. With Homebrew, install `node@24` and put its `bin` directory before the default Homebrew `node` on `PATH`.

Useful diagnostics:

```sh
node --version
npm --version
which node
which npm
npm config get prefix
```

Validation commands:

```sh
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run validate
npm run test:e2e
```

## Astro configuration

Astro is configured for static output with no server adapter. MDX support is enabled through `@astrojs/mdx`.

The configured site is:

```text
https://emunteh-code.github.io
```

The configured base path is:

```text
/Study
```

This base path is required for GitHub Pages project deployment under `emunteh-code/Study`. Internal links in authored pages should account for the base path until route helpers are introduced.

## Trailing-slash decision

`trailingSlash` is set to `always`.

This keeps generated static routes directory-oriented, which is a deliberate fit for GitHub Pages and static learning content. Future route helpers should preserve this convention.

## Content collection implementation

`src/content.config.ts` defines initial strict collections for:

- modules
- module versions
- topics
- questions
- practice sets
- exams
- sources
- reviews

The first scaffold validates stable IDs, lowercase ASCII slugs, publication visibility, content states, review states, source-verification states, provenance, practice modes, question types, difficulty, and source types.

The schemas deliberately avoid learner-state fields. Learner progress, attempts, bookmarks, and recommendations belong in local browser storage later, not in academic content files.

## Deliberately deferred schema fields

The implementation does not yet cover every theoretical field from `docs/content-schema.md`. Deferred fields include:

- reusable definition and formula collections
- graph or diagram metadata collections
- source locator collection
- redirect or supersession collection
- generated search documents
- cross-collection relationship validation
- formula symbol validation
- mock-exam point-total validation
- local learner-state migrations

These are deferred so the scaffold remains strict enough to guide future work without forcing fabricated academic fixtures.

## Testing architecture

Vitest tests pure utilities in `tests/unit/`.

Playwright tests in `tests/e2e/` verify:

- root page loading
- main heading presence
- skip-link behavior
- basic accessibility through axe
- no horizontal overflow at 320 CSS pixels
- usability with JavaScript disabled

Playwright is excluded from `npm run validate` because installing and running browsers is heavier than the normal local validation loop. It remains available through `npm run test:e2e`.

## No-JavaScript baseline

The current root page is static HTML and CSS. The skip link, layout, text, and footer do not require client-side JavaScript. Future navigation and public learning content must preserve this baseline.

## Known limitations

- The root page is temporary and not the final homepage.
- There is no final navigation system yet.
- There are no real modules, topics, questions, sources, or exams.
- There is no search implementation.
- There is no progress or review scheduling implementation.
- Cross-collection validation is not implemented beyond individual Zod schemas.
- Deployment automation is intentionally absent.

## Next recommended task

Build a foundational design system and component showcase with semantic, accessible Astro components. Do not build the final homepage or ingest real course content in that task.
