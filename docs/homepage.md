# Homepage

## Purpose

The homepage is the first version of the public learning entry point. It should immediately answer what the platform is, whether it is intended for Göttingen VWL learners, what the next useful action is, which learning areas are available, and how the platform handles trust.

The page must not imply official university affiliation, lecturer approval, semester alignment, or real course availability. It demonstrates the intended product structure with neutral fixture data until checked academic content exists.

## Section Order

The default public state represents a new learner and uses this order:

1. Concise value proposition
2. Primary start action
3. Learning-goal selector
4. Available pilot modules
5. How the system works
6. Trust and methodology
7. Footer

The returning learner fixture is available through `?fixture=returning` and uses this order:

1. Continue learning
2. Due review fixture, only when the fixture says review is due
3. Current module progress
4. Choose another learning goal
5. Available modules
6. Trust and methodology
7. Footer

## States

The default state is the only public homepage state. It assumes the learner has no saved progress and offers a direct start action.

The returning state is a development fixture. The preferred entry is the `?fixture=returning` query parameter, which progressively redirects to the noindex static fixture route at `/fixtures/homepage/returning/`. The static route keeps the returning preview readable without JavaScript, does not read from or write to browser storage, and is labelled as non-persistent preview data. Fixture routes share the canonical homepage URL and are marked `noindex, follow`.

## Fixture Implementation

Homepage fixture data lives in `src/fixtures/homepage.ts`, outside Astro content collections. It includes learning goals, neutral module previews, learning-process steps, a returning learner preview, and review-due preview data.

Neutral module titles are `Pilotmodul A`, `Pilotmodul B`, and `Pilotmodul C`. They are not academic topics and must not be treated as real Makroökonomik II content. Fixture routes may point to existing validation placeholders or public overview pages, but must stay honest about the absence of real academic material.

## Components

Homepage presentation is split into narrowly scoped Astro components:

- `HomepageIntro`
- `LearningGoalCard`
- `ModulePreviewCard`
- `ContinueLearning`
- `ReviewDue`
- `LearningProcess`
- `TrustSummary`
- `HomeSection`

The components reuse shared foundations such as `Button`, `Card`, `Callout`, `ProgressBar`, `SectionHeader`, `StatusLabel`, and `TextLink`.

## Data Separation

Site-wide identity remains in `src/config/site.ts`. Route normalization and canonical handling remain in `src/lib/routes.ts` and `src/lib/metadata.ts`. Academic content must later live in content collections, not in homepage components.

Fixture data must stay separate from presentation components and must be removable without changing component semantics.

## Status, CTAs, and Trust

Module status text must be visible and must not rely on colour alone. Planned content must not use disabled links. If a module is unavailable, the card explains the status and offers an available alternative elsewhere on the page.

Primary CTAs must be real links. The homepage must not include production UI controls for switching fixture states.

Trust copy must state that this is an independent student project, that official materials remain authoritative, that sources are required for published academic pages, and that official, adapted, and original material must be distinguished.

## Metadata

The default homepage title is `VWL Lernbegleiter Göttingen`.

The default homepage description is `Unabhängiger Lernbegleiter für Göttinger VWL-Studierende mit strukturierten Lernpfaden, Übungen und transparenter Quellenbasis.`

The canonical URL is the homepage without query parameters. Fixture query variants are not canonical duplicates.

## Accessibility and Mobile Requirements

The homepage must preserve one `h1`, logical section headings, keyboard-operable links and buttons, visible focus states, semantic HTML, and native navigation. Essential content and navigation must work without client-side JavaScript.

The layout must remain usable at 320 CSS pixels, 768 CSS pixels, and 1440 CSS pixels in light and dark colour schemes. Statuses, CTAs, and trust links must remain readable without hover-only information.

## Known Limitations

The homepage does not include real course content, real progress persistence, search, ZIP processing, account state, analytics, AI tutoring, community features, leaderboards, or cloud synchronisation.

The returning learner and review-due states are static previews only. They do not represent mastery and do not use page views as a mastery metric.

## Future Real Module Changes

When real module data is introduced, the fixture module previews should be replaced with source-checked content collection entries and explicit content states. Real topics must include academic metadata, source metadata, exercise provenance, and clear next-step logic.

Makroökonomik II is the pilot module scope, but actual topics, lecturer information, semester information, formulas, definitions, and exam alignment must only be added after source verification.

## Next Recommended Bounded Task

Create a generic module-page template using neutral fixture content and content-state metadata. Do not ingest real course material yet.
