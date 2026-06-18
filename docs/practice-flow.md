# Practice Flow

## Purpose

The practice flow demonstrates how learners will move from a task prompt to hints, a complete solution, explanatory feedback, self-assessment, and a next action.

The current implementation is a technical fixture only. It contains no real course content, no official exercises, no adapted exercises, no source locators, no lecturer or semester information, and no exam claims.

## Route Structure

The neutral fixture routes are:

- `/ueben/pilot-modul/`: module practice overview
- `/ueben/pilot-modul/gefuehrte-uebung-alpha/`: guided practice fixture
- `/ueben/pilot-modul/themenuebung-alpha/`: topic-practice fixture

All three routes are marked `noindex, nofollow`, use base-path-safe links, and keep `Üben` active in global navigation.

## Fixture Strategy

Fixture data lives in `src/fixtures/practice.ts`.

The fixture uses stable technical IDs:

- practice set IDs: `guided-practice-alpha`, `topic-practice-alpha`
- question IDs: `question-alpha-01`, `question-alpha-02`, `question-alpha-03`, `question-alpha-04`
- objective IDs: `objective-alpha-01`, `objective-alpha-02`, `objective-alpha-03`
- topic ID: `topic-alpha`

The fixture is TypeScript-only and intentionally outside Astro content collections. It is not production academic content and should be excluded from future production search indexes.

## Practice-Set View Model

The practice-set view model contains only rendering data:

- stable set ID and slug
- module ID and module slug
- topic scope
- title and summary
- practice mode
- estimated duration
- question count
- difficulty distribution
- provenance summary
- explicit question order
- instructions
- completion guidance
- next recommended action
- publication, content, review, and source-verification states

It does not store attempts, scores, saved answers, mastery, review schedules, or learner history.

## Question View Model

The question view model supports:

- stable question ID
- stable practice-set ID
- module ID
- topic ID
- learning-objective IDs
- question label
- question type
- difficulty
- estimated time
- provenance
- source-verification state
- prompt
- context
- provided data
- answer instructions
- choices where applicable
- progressive hints
- complete solution
- solution steps
- final answer
- reasoning
- interpretation
- common mistakes
- explanatory feedback
- transfer prompt
- review eligibility
- publication, content, and review states
- next action

It deliberately does not mirror every theoretical content-schema field.

## Supported Question Types

The typed contract supports:

- single choice
- multiple choice
- numeric response
- short text
- structured calculation
- ordering
- matching
- graph interpretation
- open response

## Implemented Fixture Types

The current fixtures demonstrate:

- single choice as a paper-style choice list
- structured calculation with defined symbols
- numeric response as a paper-first prompt
- open response with expected core points, model answer guidance, acceptable variations, common omissions, and self-check guidance

The single-choice fixture does not render radio buttons because there is no submission or saved state. A paper-style choice list is more honest for the static version.

## Deferred Question Types

Multiple choice, short text, ordering, matching, and graph interpretation are represented in the type contract but do not have full interface fixtures yet.

Drag-and-drop is explicitly deferred. Ordinary ordering and matching should first be implemented as accessible static or form-based patterns before any enhanced interaction is considered.

## Static Interaction Model

The first version uses:

- native links for navigation
- native `<details>` and `<summary>` for hints
- native `<details>` and `<summary>` for complete solutions
- semantic lists and definition lists for choices, data, and symbol definitions

There is no answer checking, form submission, client-side state, local storage, score, saved attempt, or review scheduling.

## Hint Behaviour

Each question supports ordered hints. Hint labels are descriptive, such as `Hinweis 1 öffnen` and `Hinweis 2 öffnen`.

Hints remain hidden initially, become available without JavaScript, and are not recorded. Later hints can be more explicit but must not reveal the full final answer immediately.

## Solution Behaviour

Every fixture question has a complete solution. The disclosure summary is `Vollständige Lösung anzeigen`.

Solutions include method, steps, intermediate results, final answer, reasoning, interpretation, common wrong method, why the wrong method fails, and optional transfer notes.

## Feedback Rules

Feedback is explanatory rather than personalised because no answer is submitted.

Allowed language includes:

- `Ein häufiger Fehler ist ...`
- `Prüfe, ob ...`
- `Die vollständige Lösung verwendet ...`

The flow must not use pass/fail language, points, saved-attempt language, or personalised correctness claims.

## Self-Assessment Rules

The static self-assessment is a semantic list:

- Ohne Hilfe gelöst
- Mit Hinweis gelöst
- Lösung benötigt
- Noch unsicher

The list is guidance only. It is not saved, does not calculate mastery, and does not present formal grading.

## Provenance Rules

Every fixture question is labelled `original`.

The visible fixture label is:

`Technische Originalaufgabe für die Interface-Vorschau. Keine offizielle Kurs- oder Klausuraufgabe.`

Source verification is `unverified`, content state is `structurally-complete`, review state is `in-review`, and no source locator is fabricated.

## Topic And Module Integration

The fixture topic page links guided practice to `/ueben/pilot-modul/gefuehrte-uebung-alpha/` and independent practice to `/ueben/pilot-modul/themenuebung-alpha/`.

The fixture module page links available guided and topic practice to the real fixture practice routes. Planned practice modes remain non-interactive.

## MDX Readiness

Future real questions should place durable metadata in structured front matter or data files:

- IDs
- slugs
- module, topic, and learning-objective relationships
- question type
- difficulty
- provenance
- source locators for official or adapted material
- publication, content, review, and source-verification states
- ordered hint metadata
- ordered solution-step metadata
- choice metadata
- review eligibility

Rich prompts, detailed explanations, hints, and solution prose may live in MDX bodies when structure alone is insufficient.

Question components should be exposed to MDX as rendering components that receive validated view-model data. Real questions should replace fixture data through generated view models from content collections, not by copying fixture prose into production content.

## Accessibility

The flow uses native HTML before ARIA, one `h1` per page, semantic breadcrumbs, visible focus states, text status labels, no clickable `div` or `span` controls, no disabled links, and no hover-only essential information.

The practice pages must remain operable without JavaScript and usable at 320 CSS pixels.

## Mobile Behaviour

Practice metadata, data lists, choices, hints, solutions, and navigation stack at narrow widths. Long prompt data wraps, and formula-like text remains contained.

## Print Behaviour

Print styles keep prompts, provided data, answer instructions, provenance, solutions, and source metadata visible in logical order. Global navigation and nonessential navigation are hidden.

This is not a worksheet generator.

## Transition To Persistent Attempts Later

Future persistence may add local attempt records, hint-use records, confidence checks, and review scheduling. That work must remain defensive when browser storage is unavailable or corrupted.

Persistent attempts must not be added to academic content files and must not require accounts or cloud synchronisation in version one.

## Known Limitations

The current flow does not implement answer submission, correctness checking, saved attempts, scoring history, review scheduling, search, analytics, AI tutoring, accounts, community features, or cloud synchronisation.

The fixture uses technical arithmetic and abstract explanation only. It is not a substitute for source-checked academic exercises.

## Next Recommended Task

Design the private-source audit workflow and course-material ingestion safeguards before any real course materials are processed.
