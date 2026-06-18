# Site Shell

This document defines the reusable public site shell for the independent VWL Lernbegleiter. The shell is infrastructure only: it does not define the final homepage, real module dashboards, topic pages, search logic, progress tracking, or academic content.

## Shell Architecture

The public shell is implemented through `src/layouts/BaseLayout.astro`.

It provides:

- skip link
- semantic site header
- brand identity
- public navigation
- native mobile navigation
- main content region with `id="main-content"`
- optional breadcrumbs
- semantic footer
- independent-project disclaimer
- document metadata
- base-path-safe internal links

The shell must remain usable without client-side JavaScript.

## Site Configuration

Stable non-academic site data lives in `src/config/site.ts`.

The configuration includes:

- site name and short name
- descriptor
- default description
- language
- configured site URL
- GitHub Pages base path
- repository identity
- university-context wording
- independent-project disclaimer
- primary navigation
- footer navigation
- error-reporting route

Do not store academic module content, lecturer data, semester data, source claims, formulas, or topic metadata in this configuration.

## Route Helper

Internal route handling lives in `src/lib/routes.ts`.

Rules:

- author internal links as root-relative routes such as `/lernen/`
- generate public paths with `toBasePath()`
- preserve query strings and fragments
- leave absolute URLs unchanged
- normalize duplicate slashes
- avoid duplicate `/Study` prefixes
- treat `/` as `/Study/`
- keep behavior safe for static generation and unit tests

The helper is intentionally small and should not become a router abstraction.

## Base-Path Handling

The Astro configuration uses:

```text
site: https://emunteh-code.github.io
base: /Study
trailingSlash: always
```

All internal links in reusable components should use the route helper or a component that already uses it. Do not hard-code `/Study` repeatedly in page templates.

## Header Behavior

`src/components/shell/SiteHeader.astro` provides:

- brand link to `/`
- descriptor text where space permits
- desktop navigation in `<nav aria-label="Hauptnavigation">`
- current route indication with `aria-current="page"`
- no official university branding

Desktop navigation is directly visible above the mobile breakpoint.

## Mobile Navigation

The mobile pattern uses native `<details>` and `<summary>`.

Rules:

- visible summary label: `Menü`
- no JavaScript dependency
- keyboard operable
- links remain ordinary anchors
- current route is marked
- menu does not trap focus
- no animated drawer
- desktop and mobile navigation are not visible at the same breakpoint

## Active-Route Logic

`isRouteCurrent()` implements active state.

Rules:

- `/` requires exact root match
- section routes match nested descendants
- `/lernen/pilot-modul/` marks `Lernen`
- `/ueben/example/` marks `Üben`
- development routes do not mark public navigation
- query strings and fragments do not affect matching
- logic runs during static rendering without browser APIs

## Footer Structure

`src/components/shell/SiteFooter.astro` provides:

- site identity
- independent-project disclaimer
- current year generated at build time
- project links
- privacy and legal links

The footer does not include social links, newsletter forms, analytics, or marketing copy.

## Metadata Conventions

Title pattern:

- default: `VWL Lernbegleiter`
- pages: `[Page title] | VWL Lernbegleiter`

Descriptions should be concise and specific, normally under about 160 characters.

Robots defaults:

- ordinary public placeholders: `index, follow`
- development pages: `noindex, nofollow`
- legal placeholders and local-progress pages before launch: `noindex, follow`

Open Graph defaults:

- title follows the resolved page title
- description follows the page description
- type defaults to `website`
- URL follows the canonical URL

Archived content rules:

- archived public content should remain indexable only when it has user value
- archived pages must visibly identify archived state
- archived content must not be recommended as the default next action

Unpublished content rules:

- unpublished content should generally be hidden or noindexed
- placeholder pages must state that content is unavailable
- unavailable content must not be represented as disabled links

Legal placeholder rules:

- legal placeholders are `noindex, follow`
- do not invent names, addresses, legal roles, privacy claims, or contact data
- complete legal information is required before public launch

## Canonical URL Construction

Canonical URLs use the configured `siteUrl` plus the base-path-safe route.

Example:

```text
/lernen/ -> https://emunteh-code.github.io/Study/lernen/
```

The final production domain is not separately known yet, so the configured Astro site URL remains the canonical base.

## Breadcrumb Integration

`BaseLayout` accepts explicit breadcrumb data. Breadcrumbs are not auto-generated from URLs.

Rules:

- no breadcrumbs on the homepage
- breadcrumbs absent when not supplied
- current item uses `aria-current="page"`
- ancestor links use the route helper
- long labels must wrap at 320 CSS pixels
- page templates retain control over labels and hierarchy

## Placeholder-Route Policy

The current public route placeholders exist to validate shell behavior and navigation.

They must:

- contain one `h1`
- state their development status honestly
- avoid real academic content
- avoid fake legal or privacy claims
- avoid fake search or progress interfaces
- include a useful next link where possible

The nested `/lernen/pilot-modul/` route is a non-academic fixture module page only. It is `noindex, nofollow`, must not imply real course coverage, and must stay clearly separated from published academic content until source-checked module content exists.

## Known Limitations

- The root page is not the final homepage.
- There are no real modules, topics, exercises, sources, or exams.
- Search and progress are placeholders only.
- Legal and privacy pages are incomplete before launch.
- The production domain is assumed from Astro config.
- Full color contrast matrix testing is still deferred.

## Deferred Decisions

- Final homepage information structure.
- Real module navigation.
- Search implementation strategy.
- Local progress storage and recovery messages.
- Legal ownership and public contact details.
- Archived-content presentation details.

## Next Task

Build the final homepage information structure using fixture module data. Do not ingest real course content yet.
