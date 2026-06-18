# Design System

This document defines the first design-system foundation for the independent Study learning platform. It supports the product promise that students should always know what to learn next without making the platform look official, decorative, or marketing-led.

## Principles

- Calm academic utility comes before visual novelty.
- Interfaces should feel structured, reliable, contemporary, and approachable.
- Components must support semantic HTML, static generation, and progressive enhancement.
- Public learning content must remain useful without client-side JavaScript.
- Academic content belongs in content files and schemas, not inside presentation components.
- Fixture content in development examples is neutral and must not be treated as published academic material.

## Token Categories

Tokens are centralized in `src/styles/global.css`.

Token categories:

- Color: canvas, surface, text, border, link, focus, selection, and status colors.
- Typography: system font stacks, compact type steps, and readable line heights.
- Spacing: 2, 4, 8, 12, 16, 24, 32, 48, and 64 pixel-equivalent steps.
- Layout: page width, content measure, reading measure, and narrow layout width.
- Shape: 4px and 8px radii only.
- Motion: short duration and easing tokens, disabled under reduced motion.
- Elevation: three restrained shadow levels, used only as enhancement.

Raw color values should appear only in central token definitions or documented technical exceptions such as white text on solid action buttons and print styles.

## Semantic Color Usage

Use color to support hierarchy, never as the only carrier of meaning.

- `--color-canvas`: page background.
- `--color-surface`: cards, panels, and component surfaces.
- `--color-surface-raised`: quiet inset areas such as code or formula displays.
- `--color-text` and `--color-heading`: primary readable content.
- `--color-text-muted`: metadata and secondary explanations.
- `--color-link` and `--color-link-hover`: navigational affordances.
- `--color-focus`: focus-visible outline.
- Status colors: information, success, warning, danger, and note states.

Status components must include visible text. Badges are decorative category labels and must not replace meaningful status labels.

## Typography

The platform uses system fonts only. Headings should be clear and restrained. Hero-scale typography is not part of this foundation because version one prioritizes functional learning entry points and topic pages.

Body copy should stay near the reading measure. Metadata can be compact but should remain readable and no smaller than the defined small text step.

## Spacing And Layout

Spacing uses the documented 2/4/8/12/16/24/32/48/64 scale.

Primary layout containers:

- `ContentContainer`: page-level constrained content.
- `ReadingContainer`: long-form learning content.
- `page-shell`: existing layout shell used by the base layout.

Components should not depend on large shadows, background images, oversized heroes, or decorative animation. Removing shadows must not break usability or hierarchy.

## Component Inventory

Foundational components:

- `Button`
- `TextLink`
- `Card`
- `Badge`
- `Callout`
- `ProgressBar`
- `MetadataList`
- `Breadcrumbs`
- `PageHeader`
- `SectionHeader`
- `EmptyState`
- `StatusLabel`
- `ContentContainer`
- `ReadingContainer`
- `VisuallyHidden`

Learning components:

- `LearningObjectives`
- `DefinitionBlock`
- `FormulaBlock`
- `WorkedExample`
- `CommonMistake`
- `ExamTip`
- `PracticePrompt`
- `SolutionDisclosure`
- `SourceReference`
- `NextStep`

## Usage Rules

- Use `Button` with `href` only for navigation and without `disabled`.
- Use `Button` without `href` for actions; disabled state is allowed only for real buttons.
- Use native links for ordinary navigation. Do not create disabled links.
- Use `Card` for repeated items, focused summaries, and navigation cards with one primary link.
- Do not nest interactive controls inside clickable cards.
- Use `StatusLabel` for meaningful states such as published, in review, planned, or archived.
- Use `Badge` only for category labels such as Lernen, Übung, or Quelle.
- Use native `<details>` through `SolutionDisclosure` for solution reveal behavior.
- Use native `<progress>` through `ProgressBar`; do not imply mastery from page views alone.
- Use `Breadcrumbs` with real ancestor links and `aria-current="page"` on the current item.
- Use `PageHeader` and `SectionHeader` to preserve logical heading order instead of styling headings by visual size alone.

## Accessibility

The foundation targets WCAG 2.2 AA.

Requirements:

- Keyboard access for all interactive controls.
- Native HTML before ARIA.
- Skip link on every layout page.
- Visible focus states.
- Logical heading hierarchy.
- Adequate contrast.
- Reduced-motion support.
- Forced-colors support.
- No clickable `div` or `span` controls.
- No custom listboxes for ordinary navigation.
- No hover-only essential information.
- Usability at 320 CSS pixels.
- Practical 44 by 44 pixel targets where possible.

Color combinations that need later automated contrast testing:

- Link and hover colors on both canvas and surface.
- Status text on all status backgrounds in light and dark mode.
- Focus outline on dark surfaces and status backgrounds.
- Muted metadata text on surface and raised surface.
- Danger button text and background in both color schemes.

Do not claim final contrast compliance from visual inspection alone.

## Light And Dark Behavior

The default mode is light. Dark mode follows `prefers-color-scheme`; there is no toggle in this foundation.

Both modes must preserve:

- text hierarchy
- surface distinction
- visible borders
- visible focus states
- status semantics with text labels

Component behavior and content must be identical in both modes.

## Forbidden Patterns

Do not introduce:

- gradients
- glassmorphism
- neon styling
- decorative illustrations
- large background images
- excessive shadows
- oversized marketing heroes
- decorative animation
- excessive radii
- icon-only unlabeled controls
- color-only status
- disabled links
- inaccessible custom controls
- React, Vue, Svelte, Tailwind, component libraries, or external design systems without explicit justification

## Authoring Examples

Navigation action:

```astro
<Button href="/Study/lernen/">Lernen starten</Button>
```

Action button:

```astro
<Button type="button" variant="secondary">Auswahl prüfen</Button>
```

Status plus category:

```astro
<Badge label="Quelle" />
<StatusLabel label="In Prüfung" tone="warning" />
```

Native solution disclosure:

```astro
<SolutionDisclosure>
  <p>Die Lösung bleibt ohne JavaScript erreichbar.</p>
</SolutionDisclosure>
```

## Development Showcase

The route `/dev/components/` demonstrates all foundation and learning components with neutral fixture content. It is marked `noindex, nofollow`, is not linked from public navigation, and exists for visual inspection and browser tests.

## Deferred Components

Deferred until product routes or content require them:

- global public navigation
- module navigation
- topic previous/next navigation
- search result cards
- practice answer inputs
- review queue controls
- local-storage health messages
- formula rendering with a math engine
- table wrappers for dense academic data

## Known Limitations

- The showcase uses neutral fixture content only.
- There is no final homepage, module route, topic route, search, or progress implementation.
- Formula display is plain text and does not use KaTeX or MathML yet.
- Contrast has not received a full automated matrix audit.
- No component screenshots are committed.

## Next Task

Build a reusable site shell and public navigation architecture. Do not build the final homepage or ingest course content in that task.
