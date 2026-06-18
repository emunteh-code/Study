# Module Page

## Purpose

The module page is a guided learning dashboard. It answers what the module is, which fixture version it represents, what is available, what is planned or under review, and what the learner should do next.

The current implementation uses neutral fixture data only. It must not imply official university affiliation, lecturer approval, semester alignment, exam alignment, or real course availability.

## Section Order

The fixture module page uses this order:

1. Module header and actions
2. Coverage notice
3. Continue-learning panel
4. Fixture progress summary
5. Learning path
6. Practice options
7. Mock-exam status
8. Formula and reference availability
9. Learning modes
10. Source and review summary

## View-Model Structure

The module-page view model lives in `src/fixtures/module-page.ts` and contains only data needed to render the page:

- stable module and version IDs
- route slug
- display and short titles
- summary
- version label and version status
- publication and review status
- last reviewed date for the technical fixture
- independent-project context
- content coverage note
- learning modes
- topic list
- practice options
- mock-exam status
- formula and reference availability
- source and review summary
- error-report route
- recommended next action
- optional fixture progress

The view model does not mirror the full content schema. Real academic content should later come from Astro content collections.

## Fixture Strategy

The fixture module is:

- module ID: `pilot-module`
- module slug: `pilot-modul`
- title: `Pilotmodul A`
- version ID: `pilot-module-version-alpha`
- version label: `Fixture-Version Alpha`

Topic titles are neutral placeholders: `Beispielthema Alpha`, `Beispielthema Beta`, `Beispielthema Gamma`, and `Beispielthema Delta`.

The fixture contains no real economics concepts, formulas, lecturer details, semester details, exam formats, source titles, or academic claims.

## Progress Dimensions

Progress is shown as separate fixture dimensions:

- sections
- guided exercises
- independent tasks
- due reviews

The preview does not use persistence, page views, or a mastery score. Real progress data can replace the fixture object later without changing the rendering structure.

## Continuation Logic

The continuation panel points to the recommended available fixture topic. The recommendation is selected only from available topics and must not select planned or archived topics.

The fixture explains why the next step is recommended without urgency, rewards, streaks, or gamification language.

## Learning Path Structure

The learning path is an ordered semantic list. Each item includes:

- stable topic ID
- order
- title
- learner outcome
- estimated time
- availability state
- content state
- review state
- progress state when fixture data exists
- prerequisite note
- primary or alternative action
- recommended marker where applicable

## Topic State Behaviour

Available topics include one real link. In-review topics do not look fully available and offer an alternative link where useful. Planned topics show that they are planned for a later version and do not render fake actions. Archived topics are visibly labelled and are not recommended as the next step.

Unavailable content must not use disabled links.

## Practice Availability

The fixture practice section shows:

- `Geführte Übungen`: available, linking to a noindex placeholder route
- `Themenübungen`: in review, no fake functional CTA
- `Gemischte Übung`: planned, no fake functional CTA

No practice-question interaction is implemented.

## Mock-Exam Behaviour

The mock-exam section is planned. It links only to the general `Probeklausuren` page and does not imply that a fixture mock exam exists.

## Source and Review Communication

The trust section states that published content must show sources and review status. The fixture source count is explicitly technical and does not claim real academic sources.

Links go to Methodik, Quellen, and Fehler melden.

## Module Coverage Rules

Fixture coverage must be stated honestly: the page demonstrates planned module structure and contains no real course content.

Future real modules should support coverage wording for fully available, partially available, under review, and archived states. Percent completeness should only be used when based on explicit content inventory.

## Route Behaviour

The fixture module route is `/lernen/pilot-modul/`. It is `noindex, nofollow`, has a canonical URL for the same route, and marks the global `Lernen` navigation item as current.

The available fixture topic route is `/lernen/pilot-modul/beispielthema-alpha/`. It is a noindex generic topic-page fixture with neutral technical content only.

The previous shell-validation learning route was removed to avoid duplicate fixture learning routes.

## Metadata

Fixture module and topic pages use accurate titles, neutral descriptions, explicit `noindex, nofollow`, and base-path-safe canonical URLs.

Future real module pages may become indexable only when they contain published, source-checked academic content.

## Accessibility

The module page must preserve one `h1`, logical heading hierarchy, semantic breadcrumbs, an ordered learning path, visible status text, accessible progress text, descriptive links, visible focus states, no disabled links, no hover-only information, and usability without JavaScript.

## Mobile Behaviour

At 320 CSS pixels, header actions stack, metadata wraps, progress dimensions remain readable, topic rows become vertical, practice cards stack, and breadcrumbs remain usable. Wider widths preserve reading width and avoid overly dense dashboard layouts.

## Transition To Real Content

When real module data is introduced, fixture data should be replaced by content collection records with source, review, publication, and exercise provenance metadata. Components should continue to receive a view model so presentation remains separate from academic content.

## Known Limitations

The page does not implement real course modules, real topics, persistence, search, question answering, review scheduling, mock exams, real formulas, or reference pages.

## Next Recommended Task

Build the reusable practice-question and solution flow using neutral fixtures. Do not ingest real course material yet.
