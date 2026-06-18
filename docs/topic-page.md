# Topic Page

## Purpose

The topic page is the standard lesson template for the learning loop:

Understand -> Guided practice -> Independent practice -> Exam transfer -> Review

The current route uses neutral fixture content only. It demonstrates structure, navigation, status communication, practice disclosure, and source metadata without adding real course content.

## Section Order

The fixture topic page uses this order:

1. Topic header
2. Fixture warning
3. Table of contents
4. Learning objectives
5. Prerequisites
6. Intuitive introduction
7. Core explanation
8. Formal structure
9. Worked example
10. Common mistakes
11. Guided practice
12. Independent practice
13. Exam transfer
14. Self-check
15. Review prompts
16. Sources and review metadata
17. Previous and next navigation
18. Recommended next action

## Mandatory Sections

Every rendered topic page must support:

- topic header
- learning objectives
- prerequisites
- intuitive introduction
- core explanation
- at least one formal-content section
- at least one worked example
- common mistakes
- guided practice
- independent practice
- exam recognition or transfer
- self-check
- review prompts
- sources and review metadata
- previous and next navigation
- recommended next action

## Conditional Sections

Formal content may contain definitions, formulas, models, graphs, legal structures, or decision frameworks. A topic should not force a formula or graph when it is not relevant.

The fixture demonstrates one definition and one technical formula-like structure. Both are clearly labelled as fixture material.

## View Model Structure

The fixture view model lives in `src/fixtures/topic-page.ts`. It contains only data needed by the topic template:

- stable topic, module, and module-version IDs
- route slug and module slug
- title, summary, order, and estimated time
- content, publication, review, source-verification, and provenance states
- learning objectives and prerequisites
- table-of-contents entries
- introduction, explanation, formal structures, examples, mistakes, practice, transfer, self-check, review, sources, navigation, and next action

It does not mirror the full content schema. Real academic content should later come from Astro content collections.

## Fixture Strategy

The fixture topic is:

- topic ID: `topic-alpha`
- module ID: `pilot-module`
- module version ID: `pilot-module-version-alpha`
- topic slug: `beispielthema-alpha`
- title: `Beispielthema Alpha`

The fixture uses neutral objects, technical process language, and the expression `a + b = c`. It contains no real economics concepts, lecturer information, semester information, exam alignment, academic formulas, or academic sources.

## In-Page Navigation

`TopicTableOfContents` renders a semantic navigation block labelled `Inhalt dieser Lektion`.

Rules:

- entries use real fragment links
- IDs are stable lowercase ASCII where possible
- only existing sections are linked
- no scroll tracking is implemented
- no `aria-current` is used for scroll position
- links remain usable without JavaScript

## MDX Readiness

Future MDX topics should keep durable metadata in front matter:

- IDs
- slugs
- module relationships
- order
- publication, content, review, source, and provenance states
- previous and next topic relationships
- recommended next action
- source references

The MDX body should contain learner-facing explanation and imported learning components such as objectives, definitions, formulas, worked examples, practice prompts, solution disclosures, and source references.

Stable heading IDs should be authored explicitly instead of derived from titles. Source references in the body should point to structured source metadata rather than inventing citations inline.

Fixture data can later be replaced by collection entries and generated view models without changing the public page structure.

## Learning-Objective Rules

Objectives must begin with concrete action verbs and avoid vague statements such as "das Thema verstehen". Fixture objectives remain neutral and use stable objective IDs.

## Prerequisite Rules

Prerequisites support:

- no prerequisites
- required previous topic
- recommended background
- prerequisite objective references
- links to prerequisite material when available

The fixture states that no fachliche Vorkenntnisse are required.

## Definition And Formula Rules

Definitions must include:

- stable definition ID
- term
- formal definition
- plain-language explanation
- optional source
- optional common confusion

Formula or formal-structure blocks must include:

- stable ID
- name
- plain-text expression
- purpose
- defined symbols
- assumptions
- common misuse
- source or source-status note

Every displayed symbol must be defined. The fixture formula is not an economics formula.

## Example Rules

Worked examples should show task, given information, target, method, steps, result, interpretation, common wrong approach, and optional extension.

The main worked example must be readable without disclosure controls.

## Guided Versus Independent Practice

Guided practice may include step-by-step prompts, hints, a native details-based solution, reasoning, common-error feedback, and a next action.

Independent practice should not show scaffolding first. It may include a hint disclosure and solution disclosure, but it must not imply answer submission, saved attempts, scoring, or persistence.

## Exam-Recognition Rules

Exam-recognition sections must distinguish structure from real exam claims. The fixture label is:

`Technische Vorschau der späteren Klausurerkennungsstruktur`

No genuine exam pattern is claimed.

## Self-Check Behaviour

Self-check is static content. It does not store state, calculate mastery, or use fake scoring. The fixture uses a plain checklist-style list rather than persistent controls.

## Review-Prompt Behaviour

Review prompts use stable IDs and may expose future eligibility metadata. They do not schedule review items, write local storage, or claim that a review item was created.

## Source And Provenance Behaviour

The source summary shows:

- content state
- review state
- last reviewed date
- source-verification status
- exercise provenance
- Methodik, Quellen, and Fehler-melden links

For the fixture, no academic source applies because the page contains only neutral technical example data.

## Content-State Presentation

Raw enum values must not be shown without context. `src/fixtures/topic-page.ts` maps content states to German labels and precise explanations.

The fixture uses `structurally-complete`, not `published`.

## Previous And Next Navigation

The navigation supports previous topic, next topic, back to module, and recommended next action.

Planned or archived content must not become the primary recommendation. The fixture shows `Beispielthema Beta` as planned without a fake link.

## Accessibility

The topic page must preserve:

- one `h1`
- logical headings
- semantic breadcrumbs
- semantic table of contents
- visible focus states
- native details and summary for solutions
- no disabled links
- no hover-only essential information
- no JavaScript dependency for reading or navigation
- no horizontal overflow at 320 CSS pixels

## Mobile Behaviour

At 320 CSS pixels, topic metadata wraps, actions stack, tables and formulas remain contained, practice blocks stay readable, and the table of contents wraps into multiple lines.

## Print Behaviour

Print styles hide global navigation and the in-page table of contents, keep the lesson title and content sections, preserve source metadata, keep details content readable where supported, avoid background fills, and display useful link destinations.

## Transition To Real Course Content

Before real course content replaces this fixture:

- every academic claim must be source-traceable
- formulas must define all variables
- official, adapted, and original exercises must be distinguished
- lecturer, semester, and exam alignment must be verified before display
- real topics must use content collections instead of fixture files
- no topic may be marked published until source and exercise checks are complete

## Known Limitations

The topic page does not implement persistent progress, answer submission, scoring, saved attempts, search, review scheduling, KaTeX, MathML, real sources, real formulas, real topics, or real exam claims.

## Next Recommended Bounded Task

Build the reusable practice-question and solution flow using neutral fixtures. Do not ingest real course content yet.
