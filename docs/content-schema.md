# Content Schema

This document defines the validated content and learning-state model for version one of the independent learning platform. It is a documentation-only specification for future Astro content collections and local learner-state handling.

The platform is not an official university platform. This schema must not encourage invented lecturer, semester, exam, source, formula, solution, or course-alignment information.

## 1. Schema principles

The schema must support:

- stable identifiers when titles change
- lowercase ASCII URL slugs
- German user-facing titles and text
- multiple semester versions
- current, archived, and superseded content
- source traceability
- separate content and review states
- clear provenance for exercises and exams
- static content generation
- future Astro content collections
- future schema validation
- essential content without JavaScript
- local progress tracking without mixing learner state into academic content files

Academic content, editorial metadata, and learner-state data must remain separate:

- Academic content describes concepts, explanations, examples, exercises, and exams.
- Editorial metadata describes source status, review state, publication state, provenance, and trust.
- Learner-state data describes one browser's local progress, attempts, bookmarks, and recommendations.

Do not design a database or account system for version one.

## 2. Entity specification format

Each content entity is defined by:

- Purpose
- Storage location
- Fields
- Relationships
- Body or generated-data placement
- User-facing behavior
- Change-after-publication rules

Field tables use these columns:

| Column | Meaning |
| --- | --- |
| Field | Stable field name for future schema implementation |
| Type | Intended primitive, object, enum, or array type |
| Req | Required status: yes, no, or conditional |
| Validation | Main validation rule |
| Example | Neutral fixture value |
| Placement | front matter, MDX body, structured data, generated data, or local state |
| User-facing | Whether the value may be shown to learners |
| Change after publication | Whether edits are allowed after publication |

## 3. Status enums

### Content state

| Value | Definition |
| --- | --- |
| `planned` | Content is intentionally listed but not written. It must not be shown as available learning content. |
| `drafting` | Content is being written and must not be treated as reliable or published. |
| `structurally-complete` | Required sections exist, but source and exercise checks may still be missing. |
| `source-checked` | Academic claims and source references have been checked. |
| `exercise-checked` | Exercises, solutions, and provenance have been checked. |
| `published` | Content is public and has passed required review. |
| `archived` | Content is retained for historical use and is not the default current version. |

### Source-verification state

| Value | Definition |
| --- | --- |
| `unverified` | Source has been named or imported but not located or checked. |
| `located` | Source location is known but claims have not been verified against it. |
| `checked` | Source has been checked against the referenced content. |
| `superseded` | Source has been replaced or is no longer current for the relevant content. |

### Provenance state

| Value | Definition |
| --- | --- |
| `official` | Material is explicitly official and may be used only with verified legal/source status. |
| `adapted` | Material is based on a source but modified; changes must be disclosed. |
| `original` | Material was created for the platform and must never be presented as official. |

### Additional enums

| Enum | Values | Definitions |
| --- | --- | --- |
| Publication visibility | `hidden`, `listed`, `public`, `withdrawn` | Hidden is unavailable, listed appears as status only, public is navigable, withdrawn explains removal. |
| Semester status | `current`, `archived`, `superseded`, `unknown` | Current is the default version, archived is historical, superseded has a replacement, unknown is not verified. |
| Review status | `not-reviewed`, `in-review`, `changes-requested`, `approved`, `expired` | Approved is required for publication; expired means review is too old for current trust needs. |
| Question difficulty | `introductory`, `standard`, `advanced`, `exam-transfer` | Difficulty describes task demand, not learner ability. |
| Question type | `single-choice`, `multiple-choice`, `numeric-response`, `short-text`, `structured-calculation`, `ordering`, `matching`, `graph-interpretation`, `open-response` | Interface support may be phased; schema can represent all types. |
| Practice mode | `guided-practice`, `topic-practice`, `mixed-practice`, `timed-exam-practice`, `mistake-review`, `due-review` | Matches the information architecture practice modes. |
| Mock-exam mode | `timed`, `untimed`, `review-only` | Timed simulates time pressure, untimed supports learning, review-only exposes solutions without attempt. |
| Progress state | `not-started`, `started`, `in-progress`, `completed`, `reset`, `unavailable` | Completed requires defined completion evidence; unavailable means the state cannot be read safely. |
| Review-item state | `due`, `upcoming`, `completed`, `suspended`, `reset` | Defines review queue behavior only, not a spaced-repetition algorithm. |
| Recommendation reason | `continue-last`, `review-due`, `next-topic`, `prerequisite-gap`, `practice-needed`, `mistake-review`, `exam-prep`, `fallback-start` | Explains why an action is recommended. |
| Source type | `lecture-slides`, `exercise-sheet`, `official-solution`, `syllabus`, `textbook`, `journal-article`, `statute`, `court-decision`, `dataset`, `official-web-source`, `instructor-announcement`, `original-platform-material` | Describes source category. |
| Relationship type | `contains`, `requires`, `supports`, `supersedes`, `replaces`, `adapts`, `cites`, `assesses`, `reviews`, `redirects-to` | Describes cross-entity links. |

Avoid ambiguous values such as `done`, `active`, or `complete` unless they are replaced by one of the precise values above.

## 4. Identifier strategy

IDs must not depend solely on titles or array position.

| Concept | Definition | Example |
| --- | --- | --- |
| Stable ID | Durable identifier used for relationships and learner state | `topic-alpha` |
| Route slug | Lowercase ASCII URL segment; may change with redirects | `topic-alpha` |
| Display title | German learner-facing title | `Thema Alpha` |
| Source identifier | Durable source ID independent of file path or title | `source-alpha` |
| Version identifier | Durable ID for semester or content version | `module-version-alpha-2026` |

Stable ID conventions:

- Modules: `module-[neutral-name]`, for example `module-pilot`
- Module versions: `module-version-[module]-[version]`, for example `module-version-pilot-2026`
- Topics: `topic-[neutral-name]`, for example `topic-alpha`
- Learning objectives: `objective-[topic]-[number]`, for example `objective-alpha-01`
- Questions: `question-[neutral-name]-[number]`, for example `question-alpha-01`
- Practice sets: `practice-set-[neutral-name]`, for example `practice-set-alpha`
- Mock exams: `mock-exam-[neutral-name]`, for example `mock-exam-alpha`
- Sources: `source-[neutral-name]`, for example `source-alpha`
- Review items: `review-item-[content-id]-[kind]`, for example `review-item-topic-alpha-definition`

IDs should be lowercase ASCII, unique within their namespace, and stable across title changes. Route slugs must be unique within their parent route.

## 5. Content entities

### 5.1 Module

Purpose: represents a durable learning module independent of semester-specific details.

Storage location: future `src/content/modules/[module-id].yaml` or `.json`.

Relationships: has many module versions, topics through versions, sources through versions.

Body placement: structured data only; no MDX body required.

User-facing behavior: title, summary, coverage, and search metadata are visible.

Change-after-publication: stable ID should not change; route slug changes require redirect records.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique module ID | `module-pilot` | structured data | no | no |
| `slug` | string | yes | lowercase ASCII, unique | `pilot-module` | structured data | yes, in URL | yes with redirect |
| `title` | string | yes | German display title | `Pilotmodul` | structured data | yes | yes |
| `shortTitle` | string | no | concise German label | `Pilot` | structured data | yes | yes |
| `summary` | string | yes | no invented claims | `Ein neutrales Pilotmodul.` | structured data | yes | yes |
| `discipline` | string | yes | controlled or documented value | `Volkswirtschaftslehre` | structured data | yes | yes |
| `degreeProgramme` | string | yes | learner-facing programme context | `B.Sc. Volkswirtschaftslehre` | structured data | yes | yes |
| `institutionContext` | string | yes | context, not affiliation claim | `Georg-August-Universität Göttingen` | structured data | yes | yes |
| `officialAffiliationDisclaimer` | string | yes | must state independence | `Kein offizielles Universitätsangebot.` | structured data | yes | yes |
| `availableVersions` | string[] | yes | module-version IDs exist | `["module-version-pilot-2026"]` | generated data | no | yes |
| `currentVersion` | string | no | must reference current version | `module-version-pilot-2026` | structured data | no | yes |
| `contentCoverage` | object | yes | honest coverage summary | `{ "topics": 0, "status": "planned" }` | generated data | yes | yes |
| `availableLearningModes` | enum[] | yes | practice modes | `["guided-practice"]` | structured data | yes | yes |
| `visualMetadata` | object | no | nonessential only | `{ "accent": "neutral" }` | structured data | no | yes |
| `publicationStatus` | enum | yes | publication visibility | `listed` | structured data | yes | yes |
| `searchMetadata` | object | yes | keywords, aliases | `{ "keywords": ["pilot"] }` | structured data | no | yes |

Do not hard-code lecturer or semester information at the base module level.

### 5.2 Module version

Purpose: represents a semester or version-specific expression of a module.

Storage location: future `src/content/module-versions/[module-version-id].yaml`.

Relationships: belongs to one module, orders topics, references source set, may supersede another version.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique module-version ID | `module-version-pilot-2026` | structured data | no | no |
| `moduleId` | string | yes | existing module | `module-pilot` | structured data | no | no |
| `semesterLabel` | string | conditional | only when known | `Fixture Semester` | structured data | yes | yes |
| `semesterStart` | date | no | ISO date if known | `2026-04-01` | structured data | yes | yes |
| `semesterEnd` | date | no | after start | `2026-09-30` | structured data | yes | yes |
| `semesterStatus` | enum | yes | current/archived/superseded/unknown | `unknown` | structured data | yes | yes |
| `lecturerOrAuthor` | string | no | only when verified | `Verified Author Role` | structured data | yes | yes |
| `sourceSet` | string[] | yes | source IDs exist | `["source-alpha"]` | structured data | yes | yes |
| `topicOrder` | string[] | yes | topic IDs exist | `["topic-alpha"]` | structured data | yes | yes |
| `assessmentMetadata` | object | no | only verified | `{ "verified": false }` | structured data | yes | yes |
| `reviewStatus` | enum | yes | review status | `in-review` | structured data | yes | yes |
| `lastReviewedDate` | date | no | ISO date | `2026-06-01` | structured data | yes | yes |
| `supersededBy` | string | no | module-version ID | `module-version-pilot-2027` | structured data | yes | yes |
| `publicationStatus` | enum | yes | visibility | `listed` | structured data | yes | yes |

### 5.3 Topic

Purpose: standard learning page that supports Understand → Guided practice → Independent practice → Exam transfer → Review.

Storage location: future `src/content/topics/[topic-id].mdx`.

Relationships: belongs to one or more module versions, references objectives, prerequisites, sources, practice, review prompts, and supersession records.

Front matter contains metadata and relationships. MDX body contains learner-facing explanation and structured sections.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique topic ID | `topic-alpha` | front matter | no | no |
| `moduleIds` | string[] | yes | module IDs exist | `["module-pilot"]` | front matter | no | no |
| `moduleVersionIds` | string[] | yes | version IDs exist | `["module-version-pilot-2026"]` | front matter | no | yes |
| `slug` | string | yes | lowercase ASCII | `topic-alpha` | front matter | yes, in URL | yes with redirect |
| `title` | string | yes | German title | `Thema Alpha` | front matter | yes | yes |
| `summary` | string | yes | concise and sourced if academic | `Neutrales Beispielthema.` | front matter | yes | yes |
| `order` | number | conditional | per module version or path | `10` | front matter | no | yes |
| `estimatedLearningTimeMinutes` | number | no | positive integer | `25` | front matter | yes | yes |
| `learningObjectiveIds` | string[] | yes | objective IDs exist | `["objective-alpha-01"]` | front matter | yes | yes |
| `prerequisiteIds` | string[] | no | prerequisite IDs exist | `["prerequisite-alpha"]` | front matter | yes | yes |
| `publicationState` | enum | yes | visibility | `listed` | front matter | yes | yes |
| `contentState` | enum | yes | content state | `drafting` | front matter | yes | yes |
| `reviewState` | enum | yes | review status | `not-reviewed` | front matter | yes | yes |
| `sourceRefs` | object[] | yes | source and locator IDs | `[{ "sourceId": "source-alpha" }]` | front matter | yes | yes |
| `previousTopicId` | string | no | existing topic | `topic-before-alpha` | front matter | yes | yes |
| `nextTopicId` | string | no | existing topic | `topic-beta` | front matter | yes | yes |
| `recommendedNextAction` | object | yes | route or content ID plus reason | `{ "reason": "next-topic" }` | front matter | yes | yes |
| `searchTerms` | string[] | no | German terms and aliases | `["alpha"]` | front matter | no | yes |
| `archival` | object | no | status and replacement | `{ "status": "current" }` | front matter | yes | yes |

Standard topic MDX body must support:

1. Intuitive introduction
2. Core explanation
3. Definitions
4. Formula, model, graph, legal structure, or decision framework
5. Worked examples
6. Common mistakes
7. Guided practice
8. Independent practice
9. Exam recognition
10. Self-check
11. Review prompts
12. Sources
13. Next step

Do not force a formula or graph when pedagogically irrelevant.

### 5.4 Learning objective

Purpose: precise learner-facing competency attached to topics and questions.

Storage location: embedded structured data in topic front matter or future `src/content/objectives/` if reused broadly.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique objective ID | `objective-alpha-01` | structured data | no | no |
| `statement` | string | yes | uses specific competency verb | `Du kannst ein neutrales Konzept einordnen.` | structured data | yes | yes |
| `competencyVerb` | string | yes | avoid vague "understand" | `einordnen` | structured data | yes | yes |
| `topicId` | string | yes | existing topic | `topic-alpha` | structured data | no | yes |
| `questionIds` | string[] | no | existing questions | `["question-alpha-01"]` | generated data | no | yes |
| `assessmentLevel` | string | yes | defined rubric value | `introductory` | structured data | yes | yes |
| `prerequisiteObjectiveIds` | string[] | no | existing objectives | `[]` | structured data | yes | yes |
| `publicationState` | enum | yes | visibility | `listed` | structured data | yes | yes |

Avoid vague objectives such as "understand the topic."

### 5.5 Prerequisite

Purpose: describes required prior knowledge or objective dependencies.

Storage location: topic front matter or structured data file.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique prerequisite ID | `prerequisite-alpha` | structured data | no | no |
| `label` | string | yes | German label | `Vorwissen Alpha` | structured data | yes | yes |
| `type` | enum | yes | `topic`, `objective`, `concept`, `external` | `objective` | structured data | yes | yes |
| `targetId` | string | conditional | required for internal refs | `objective-alpha-01` | structured data | yes | yes |
| `description` | string | no | concise | `Neutrales Vorwissen.` | structured data | yes | yes |

### 5.6 Definition

Purpose: source-traceable term definition used in topics, search, and review.

Storage location: topic MDX body for local definitions or structured data for reusable definitions.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique definition ID | `definition-alpha` | front matter or structured data | no | no |
| `term` | string | yes | German term | `Begriff Alpha` | MDX body or structured data | yes | yes |
| `definition` | string | yes | source-traceable | `Eine neutrale Beispieldefinition.` | MDX body or structured data | yes | yes |
| `plainLanguageExplanation` | string | yes | learner-facing | `Kurz erklärt: Alpha ist ein Platzhalter.` | MDX body | yes | yes |
| `sourceRef` | object | yes | checked source for publication | `{ "sourceId": "source-alpha" }` | structured data | yes | yes |
| `topicId` | string | yes | existing topic | `topic-alpha` | structured data | no | yes |
| `objectiveIds` | string[] | no | existing objectives | `["objective-alpha-01"]` | structured data | no | yes |
| `aliases` | string[] | no | searchable synonyms | `["Alpha-Begriff"]` | structured data | yes | yes |
| `commonConfusion` | string | no | source or editorial note | `Nicht mit Beta verwechseln.` | MDX body | yes | yes |
| `reviewEligible` | boolean | yes | explicit | `true` | structured data | no | yes |

### 5.7 Formula

Purpose: validated mathematical or symbolic expression with defined variables.

Storage location: topic MDX body with structured metadata, or structured data when reused.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique formula ID | `formula-alpha` | structured data | no | no |
| `name` | string | yes | German name | `Formel Alpha` | MDX body | yes | yes |
| `latex` | string | yes | valid LaTeX string | `A = B + C` | MDX body | yes | yes |
| `purpose` | string | yes | plain-language purpose | `Beschreibt eine neutrale Beziehung.` | MDX body | yes | yes |
| `variables` | object[] | yes | every symbol defined | `[{ "symbol": "A", "meaning": "Alpha" }]` | structured data | yes | yes |
| `units` | object[] | no | where applicable | `[]` | structured data | yes | yes |
| `assumptions` | string[] | yes | may be empty only if justified | `["Fixture assumption"]` | structured data | yes | yes |
| `domainRestrictions` | string[] | no | mathematical domain | `["B >= 0"]` | structured data | yes | yes |
| `sourceRefs` | object[] | yes | checked for publication | `[{ "sourceId": "source-alpha" }]` | structured data | yes | yes |
| `objectiveIds` | string[] | no | related objectives | `["objective-alpha-01"]` | structured data | no | yes |
| `commonMisuse` | string | no | learner-facing warning | `Nicht ohne Annahmen verwenden.` | MDX body | yes | yes |
| `derivationRef` | string | no | content/source ID | `topic-alpha` | structured data | yes | yes |

Every symbol in a published formula must be defined or explicitly declared standard in context.

### 5.8 Model

Purpose: describes a structured academic model, framework, or conceptual system.

Storage location: topic MDX body with structured metadata.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique model ID | `model-alpha` | structured data | no | no |
| `name` | string | yes | German name | `Modell Alpha` | MDX body | yes | yes |
| `purpose` | string | yes | learner-facing | `Ordnet neutrale Elemente.` | MDX body | yes | yes |
| `assumptions` | string[] | yes | explicit list | `["Fixture assumption"]` | structured data | yes | yes |
| `components` | object[] | yes | named parts | `[{ "id": "part-a", "label": "Teil A" }]` | structured data | yes | yes |
| `sourceRefs` | object[] | yes | source refs | `[{ "sourceId": "source-alpha" }]` | structured data | yes | yes |
| `topicId` | string | yes | existing topic | `topic-alpha` | structured data | no | yes |

### 5.9 Graph or diagram

Purpose: represents a visual academic explanation without embedding learner state.

Storage location: structured metadata plus image/code asset reference when future assets exist.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique graph ID | `diagram-alpha` | structured data | no | no |
| `title` | string | yes | German title | `Diagramm Alpha` | MDX body | yes | yes |
| `description` | string | yes | accessible description | `Neutrales Diagramm.` | MDX body | yes | yes |
| `altText` | string | yes | meaningful alternative | `Schematische Alpha-Struktur.` | structured data | yes | yes |
| `sourceRefs` | object[] | conditional | required if academic claim | `[{ "sourceId": "source-alpha" }]` | structured data | yes | yes |
| `relatedFormulaIds` | string[] | no | existing formulas | `["formula-alpha"]` | structured data | yes | yes |

### 5.10 Worked example

Purpose: step-by-step demonstration of applying a concept.

Storage location: topic MDX body, with metadata in structured blocks.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique example ID | `example-alpha` | structured data | no | no |
| `title` | string | yes | German title | `Beispiel Alpha` | MDX body | yes | yes |
| `problemStatement` | string | yes | no invented official claim | `Neutrale Aufgabenstellung.` | MDX body | yes | yes |
| `givenInformation` | object[] | yes | explicit givens | `[{ "label": "A", "value": "1" }]` | MDX body | yes | yes |
| `target` | string | yes | desired result | `Bestimme den neutralen Zielwert.` | MDX body | yes | yes |
| `chosenMethod` | string | yes | method name | `Fixture method` | MDX body | yes | yes |
| `steps` | object[] | yes | ordered solution steps | `[{ "step": 1, "text": "Setze ein." }]` | MDX body | yes | yes |
| `result` | string | yes | final result | `A = 1` | MDX body | yes | yes |
| `interpretation` | string | yes | learner-facing meaning | `Das Ergebnis ist ein Platzhalter.` | MDX body | yes | yes |
| `objectiveIds` | string[] | yes | existing objectives | `["objective-alpha-01"]` | structured data | no | yes |
| `sourceOrProvenance` | object | yes | source or original label | `{ "provenance": "original" }` | structured data | yes | yes |
| `commonWrongApproach` | string | no | learner-facing | `Ein häufiger Fehler ist ...` | MDX body | yes | yes |
| `extension` | string | no | optional challenge | `Variante mit B.` | MDX body | yes | yes |

### 5.11 Common mistake

Purpose: documents recurring errors and links them to correction guidance.

Storage location: topic MDX body or structured data.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique mistake ID | `mistake-alpha` | structured data | no | no |
| `description` | string | yes | learner-facing | `Alpha wird mit Beta verwechselt.` | MDX body | yes | yes |
| `whyItHappens` | string | no | explanatory | `Die Begriffe klingen ähnlich.` | MDX body | yes | yes |
| `correction` | string | yes | actionable correction | `Prüfe zuerst die Definition.` | MDX body | yes | yes |
| `relatedIds` | string[] | yes | topic/objective/question IDs | `["topic-alpha"]` | structured data | yes | yes |

### 5.12 Exam-recognition note

Purpose: explains how a topic may be recognized in exam-style tasks without inventing exam alignment.

Storage location: topic MDX body.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique note ID | `exam-note-alpha` | structured data | no | no |
| `topicId` | string | yes | existing topic | `topic-alpha` | structured data | no | yes |
| `recognitionCue` | string | yes | no invented exam claim | `Achte auf neutrale Signalwörter.` | MDX body | yes | yes |
| `transferGuidance` | string | yes | actionable | `Ordne zuerst die Begriffe zu.` | MDX body | yes | yes |
| `sourceRefs` | object[] | conditional | required if source-based | `[]` | structured data | yes | yes |

### 5.13 Review prompt

Purpose: prompt used for later review.

Storage location: topic front matter or structured data.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique prompt ID | `review-prompt-alpha` | structured data | no | no |
| `prompt` | string | yes | learner-facing | `Erkläre Alpha in einem Satz.` | structured data | yes | yes |
| `answerGuidance` | string | no | source-checked if academic | `Nenne die Kerneigenschaft.` | structured data | yes | yes |
| `relatedContentIds` | string[] | yes | existing IDs | `["definition-alpha"]` | structured data | no | yes |
| `reviewEligible` | boolean | yes | explicit | `true` | structured data | no | yes |

### 5.14 Practice question

Purpose: represents a learner task with provenance, solution, and review metadata.

Storage location: future `src/content/questions/[question-id].yaml` for structured questions; MDX allowed only for rich prompts or solutions.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique question ID | `question-alpha-01` | structured data | no | no |
| `provenance` | enum | yes | official/adapted/original | `original` | structured data | yes | yes |
| `sourceLocatorId` | string | conditional | required for official/adapted | `locator-alpha` | structured data | yes | yes |
| `moduleId` | string | yes | existing module | `module-pilot` | structured data | no | no |
| `topicIds` | string[] | yes | existing topics | `["topic-alpha"]` | structured data | yes | yes |
| `objectiveIds` | string[] | yes | existing objectives | `["objective-alpha-01"]` | structured data | yes | yes |
| `questionType` | enum | yes | defined type | `numeric-response` | structured data | yes | yes |
| `difficulty` | enum | yes | defined difficulty | `introductory` | structured data | yes | yes |
| `prompt` | string | yes | learner-facing | `Berechne einen neutralen Wert.` | structured data or MDX | yes | yes |
| `dataOrAssumptions` | object[] | no | explicit assumptions | `[{ "name": "A", "value": 1 }]` | structured data | yes | yes |
| `answerFormat` | object | yes | expected response shape | `{ "type": "number" }` | structured data | yes | yes |
| `hints` | object[] | no | ordered hints | `[{ "level": 1, "text": "Starte mit A." }]` | structured data | yes | yes |
| `solution` | object | yes | complete solution or status | `{ "status": "available" }` | structured data or MDX | yes | yes |
| `reasoning` | string | yes | explanatory reasoning | `Neutrale Begründung.` | structured data or MDX | yes | yes |
| `commonErrors` | string[] | no | mistake IDs or text | `["mistake-alpha"]` | structured data | yes | yes |
| `feedbackRules` | object[] | no | response feedback | `[]` | structured data | yes | yes |
| `estimatedTimeMinutes` | number | no | positive integer | `5` | structured data | yes | yes |
| `reviewEligible` | boolean | yes | explicit | `true` | structured data | no | yes |
| `publicationStatus` | enum | yes | visibility | `hidden` | structured data | yes | yes |
| `contentState` | enum | yes | content state | `drafting` | structured data | yes | yes |
| `reviewStatus` | enum | yes | review status | `not-reviewed` | structured data | yes | yes |

Supported question types: single choice, multiple choice, numeric response, short text, structured calculation, ordering, matching, graph interpretation, and open response. The schema may represent all types before every type has a first-interface implementation.

### 5.15 Practice set

Purpose: bounded collection of questions for one practice mode.

Storage location: future `src/content/practice-sets/[practice-set-id].yaml`.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique set ID | `practice-set-alpha` | structured data | no | no |
| `title` | string | yes | German title | `Übung Alpha` | structured data | yes | yes |
| `moduleId` | string | yes | existing module | `module-pilot` | structured data | yes | no |
| `topicScope` | string[] | yes | topic IDs or filters | `["topic-alpha"]` | structured data | yes | yes |
| `practiceMode` | enum | yes | practice mode | `guided-practice` | structured data | yes | yes |
| `questionList` | object | yes | explicit IDs or generation filters | `{ "type": "explicit", "ids": ["question-alpha-01"] }` | structured data | no | yes |
| `difficultyDistribution` | object | no | counts or proportions | `{ "introductory": 1 }` | structured data | yes | yes |
| `estimatedDurationMinutes` | number | no | positive integer | `15` | structured data | yes | yes |
| `completionCriteria` | object | yes | measurable | `{ "attemptAll": true }` | structured data | yes | yes |
| `progressEffects` | object | yes | dimensions updated | `{ "recordsAttempts": true }` | structured data | no | yes |
| `recommendationRules` | object[] | no | reasons and conditions | `[{ "reason": "practice-needed" }]` | structured data | no | yes |
| `publicationStatus` | enum | yes | visibility | `hidden` | structured data | yes | yes |
| `sourceProvenanceSummary` | object | yes | official/adapted/original counts | `{ "original": 1 }` | generated data | yes | yes |

Question IDs are explicitly listed when a fixed ordered set is required. Filters may generate a set when the pedagogical goal is a changing mix by topic, objective, difficulty, provenance, or review state.

### 5.16 Mock exam

Purpose: exam-style activity with strict provenance and legal publication status.

Storage location: future `src/content/exams/[mock-exam-id].yaml`.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique exam ID | `mock-exam-alpha` | structured data | no | no |
| `title` | string | yes | German title | `Originale Probeklausur Alpha` | structured data | yes | yes |
| `moduleVersionId` | string | yes | existing version | `module-version-pilot-2026` | structured data | yes | no |
| `provenance` | enum | yes | official/adapted/original | `original` | structured data | yes | yes |
| `sourceInfo` | object | conditional | required for official/adapted | `{ "sourceId": "source-alpha" }` | structured data | yes | yes |
| `legalPublicationStatus` | enum | yes | `verified`, `not-verified`, `restricted`, `not-publishable` | `not-verified` | structured data | yes | yes |
| `timeLimitMinutes` | number | no | positive integer | `90` | structured data | yes | yes |
| `totalPoints` | number | no | sum check if points exist | `100` | structured data | yes | yes |
| `sections` | object[] | yes | ordered sections | `[{ "id": "section-alpha" }]` | structured data | yes | yes |
| `orderedQuestionIds` | string[] | yes | existing questions | `["question-alpha-01"]` | structured data | yes | yes |
| `instructions` | string | yes | learner-facing | `Bearbeite die Aufgaben.` | structured data or MDX | yes | yes |
| `permittedAids` | string[] | conditional | only when verified | `[]` | structured data | yes | yes |
| `gradingRules` | object | no | verified or original | `{ "type": "fixture" }` | structured data | yes | yes |
| `solutionAvailability` | enum | yes | `none`, `outline`, `full` | `outline` | structured data | yes | yes |
| `weakTopicMapping` | object[] | no | question-to-topic links | `[{ "questionId": "question-alpha-01", "topicId": "topic-alpha" }]` | structured data | no | yes |
| `publicationStatus` | enum | yes | visibility | `hidden` | structured data | yes | yes |
| `contentState` | enum | yes | content state | `drafting` | structured data | yes | yes |
| `reviewStatus` | enum | yes | review status | `not-reviewed` | structured data | yes | yes |

Do not assume official exams can be published.

### 5.17 Source

Purpose: stable record for academic, legal, dataset, web, or original platform sources.

Storage location: future `src/content/sources/[source-id].yaml`.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique source ID | `source-alpha` | structured data | no | no |
| `sourceType` | enum | yes | source type | `original-platform-material` | structured data | yes | yes |
| `title` | string | yes | source title | `Quelle Alpha` | structured data | yes | yes |
| `authorOrLecturer` | string | no | only explicit | `Platform author role` | structured data | yes | yes |
| `institutionOrPublisher` | string | no | explicit only | `Fixture publisher` | structured data | yes | yes |
| `semester` | string | no | when applicable and verified | `Fixture Semester` | structured data | yes | yes |
| `edition` | string | no | explicit only | `1` | structured data | yes | yes |
| `publicationDate` | date | no | ISO date if known | `2026-01-01` | structured data | yes | yes |
| `fileOrExternalRef` | string | conditional | file path or URL if available | `sources/source-alpha.pdf` | structured data | yes | yes |
| `accessRestrictions` | string | no | legal/access note | `Nicht öffentlich.` | structured data | yes | yes |
| `copyrightOrReuseNote` | string | yes | reuse constraints | `Nur als Metadatenreferenz.` | structured data | yes | yes |
| `verificationStatus` | enum | yes | source verification | `located` | structured data | yes | yes |
| `supersessionStatus` | enum | no | source status | `checked` | structured data | yes | yes |
| `checksumOrFileIdentity` | string | no | checksum or strategy | `sha256:fixture` | structured data | no | yes |
| `notes` | string | no | editorial notes | `Neutral fixture source.` | structured data | yes | yes |

### 5.18 Source locator

Purpose: precise pointer into a source.

Storage location: embedded in source records or future `src/content/source-locators/[locator-id].yaml`.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique locator ID | `locator-alpha` | structured data | no | no |
| `sourceId` | string | yes | existing source | `source-alpha` | structured data | yes | no |
| `locatorType` | enum | yes | precise type | `pdf-page` | structured data | yes | yes |
| `value` | string | yes | locator value | `3` | structured data | yes | yes |
| `viewerPdfPage` | number | conditional | distinguish viewer page | `3` | structured data | yes | yes |
| `printedPage` | string | no | printed page label | `1` | structured data | yes | yes |
| `note` | string | no | context | `Fixture locator.` | structured data | yes | yes |

Supported locator types: PDF page, printed page, slide number, chapter, section, paragraph, exercise number, statute section, table, figure, timestamp, and reliable URL fragment.

### 5.19 Editorial review record

Purpose: records editorial checks separately from academic content.

Storage location: future `src/content/reviews/[review-id].yaml`.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique review ID | `review-alpha` | structured data | no | no |
| `contentId` | string | yes | existing content | `topic-alpha` | structured data | yes | no |
| `reviewerIdentityOrRole` | string | yes | person or role | `editorial-reviewer` | structured data | yes | yes |
| `reviewType` | enum | yes | review type | `publication-review` | structured data | yes | no |
| `date` | date | yes | ISO date | `2026-06-01` | structured data | yes | yes |
| `sourceSetChecked` | string[] | no | source IDs | `["source-alpha"]` | structured data | yes | yes |
| `result` | enum | yes | review status | `approved` | structured data | yes | yes |
| `issuesFound` | string[] | no | issue summaries | `[]` | structured data | yes | yes |
| `unresolvedConcerns` | string[] | no | concerns | `[]` | structured data | yes | yes |
| `nextReviewDate` | date | no | ISO date | `2026-12-01` | structured data | yes | yes |
| `supersedingReviewRecord` | string | no | review ID | `review-beta` | structured data | yes | yes |

Review types: structural review, source verification, formula verification, exercise verification, accessibility review, and publication review.

### 5.20 Error report reference

Purpose: connects reported issues to content and source records without storing sensitive learner data in content.

Storage location: future structured data or issue tracker export, not academic MDX.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique reference ID | `error-report-alpha` | structured data | no | no |
| `reportedContentId` | string | yes | content ID | `topic-alpha` | structured data | yes | no |
| `category` | enum | yes | `academic`, `source`, `technical`, `accessibility` | `academic` | structured data | yes | yes |
| `status` | enum | yes | `open`, `triaged`, `resolved`, `wont-fix` | `open` | structured data | yes | yes |
| `linkedReviewId` | string | no | review ID | `review-alpha` | structured data | yes | yes |

### 5.21 Search document

Purpose: generated representation for search.

Storage location: generated data only, derived from content collections.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `contentId` | string | yes | existing content ID | `topic-alpha` | generated data | no | generated |
| `route` | string | yes | valid route | `/lernen/pilot-module/topic-alpha/` | generated data | yes | generated |
| `title` | string | yes | display title | `Thema Alpha` | generated data | yes | generated |
| `contentType` | enum | yes | entity type | `topic` | generated data | yes | generated |
| `moduleId` | string | no | module ID | `module-pilot` | generated data | yes | generated |
| `topicId` | string | no | topic ID | `topic-alpha` | generated data | yes | generated |
| `semesterStatus` | enum | no | current/archive status | `unknown` | generated data | yes | generated |
| `publicationStatus` | enum | yes | only public by default | `public` | generated data | yes | generated |
| `reviewStatus` | enum | yes | review status | `approved` | generated data | yes | generated |
| `keywords` | string[] | no | search terms | `["alpha"]` | generated data | no | generated |
| `aliases` | string[] | no | synonyms | `["Alpha-Begriff"]` | generated data | no | generated |
| `summary` | string | yes | result summary | `Neutrales Beispielthema.` | generated data | yes | generated |
| `searchableBody` | string | no | extracted text | `Neutraler Text.` | generated data | no | generated |
| `formulaTextRepresentation` | string | no | plain text formula | `A equals B plus C` | generated data | yes | generated |
| `sourceTitle` | string | no | source title | `Quelle Alpha` | generated data | yes | generated |
| `rankingWeight` | number | yes | bounded number | `1` | generated data | no | generated |

Only published content should be included by default. Archived content may be included when useful, must be labeled archived, and should rank below current content.

### 5.22 Redirect or supersession record

Purpose: preserves old routes and ID relationships after slug changes, archiving, or supersession.

Storage location: future `src/content/redirects/[record-id].yaml` or TypeScript route config generated from content.

| Field | Type | Req | Validation | Example | Placement | User-facing | Change after publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `id` | string | yes | unique record ID | `redirect-alpha` | structured data | no | no |
| `fromRoute` | string | conditional | old route | `/lernen/pilot/old-topic/` | structured data | no | no |
| `fromContentId` | string | no | old content ID | `topic-old-alpha` | structured data | no | no |
| `toRoute` | string | conditional | new route | `/lernen/pilot-module/topic-alpha/` | structured data | yes | yes |
| `toContentId` | string | conditional | replacement ID | `topic-alpha` | structured data | yes | yes |
| `relationshipType` | enum | yes | redirects-to/supersedes/replaces | `redirects-to` | structured data | yes | yes |
| `reason` | string | yes | concise reason | `Slug changed.` | structured data | yes | yes |
| `effectiveDate` | date | yes | ISO date | `2026-06-01` | structured data | yes | yes |

## 6. Learner-state entities

Learner-state data is local in version one and must not be stored inside MDX or academic content files. Every local-state entity must include `schemaVersion`, timestamps, safe defaults, and defensive behavior when referenced content is removed, archived, or superseded.

| Entity | Stable key | Associated content ID | Timestamps | Completion/correctness/attempts | Migration behavior | Safe default | Removed, archived, or superseded content |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Learner profile preferences | `profile-preferences` | none | created/updated | none | add defaults for new fields | no preferences | unaffected |
| Lesson progress | `lesson-progress:[topicId]` | topic ID | started/updated/completed | progress state and completed sections | map topic IDs through redirects | not-started | mark unavailable and recommend replacement |
| Question attempt | `question-attempt:[questionId]:[attemptId]` | question ID | started/submitted | correctness, answer summary, hints used | preserve if question ID exists | no attempts | keep historical summary; exclude from default recommendations if removed |
| Practice-set attempt | `practice-set-attempt:[setId]:[attemptId]` | practice-set ID | started/completed | question attempts and completion state | map set IDs if redirected | no attempts | show archived attempt and link alternatives |
| Mock-exam attempt | `mock-exam-attempt:[examId]:[attemptId]` | mock-exam ID | started/submitted | mode, score, weak topics | map exam ID if redirected | no attempts | keep result as historical if safe |
| Review item | `review-item:[reviewItemId]` | source content ID | created/due/completed | review-item state | map content IDs where possible | no item | suspend and point to replacement if available |
| Last activity | `last-activity` | content ID | updated | route and action | validate route/content exists | no activity | fall back to module or `/lernen/` |
| Bookmark | `bookmark:[contentId]` | content ID | created/updated | none | map content IDs where possible | no bookmarks | label archived or unavailable |
| Recommendation state | `recommendation-state` | content IDs | generated/updated | reason and target | regenerate after schema change | fallback-start | avoid archived default unless no alternative |
| Local-state metadata | `local-state-metadata` | none | created/updated | schema version and storage health | run migrations in order | current schema, empty records | flag stale references |

Local-state fields should include:

- `schemaVersion`: string
- `createdAt`: ISO timestamp
- `updatedAt`: ISO timestamp
- `contentId`: nullable string where applicable
- `state`: precise enum value
- `attemptHistory`: array where applicable
- `correctness`: object where applicable
- `migrationNotes`: optional string array

If local storage is unavailable or corrupted, the safe default is stateless navigation with no false progress.

## 7. Versioning model

One module across multiple semesters:

- Base module stores stable identity and general context.
- Module versions store semester-specific ordering, source sets, review status, and verified lecturer or assessment metadata.

Shared topics across semester versions:

- A topic may belong to multiple module versions when its academic content is unchanged.
- Version-specific ordering belongs to the module version, not only the topic.

Changed topic ordering:

- Update module-version `topicOrder` when the topic content is unchanged.
- Do not duplicate topics solely because order changed.

Revised definitions or formulas:

- Update in place for typo fixes, formatting, clarified wording, and non-substantive corrections.
- Create a new version or supersession record when meaning, source basis, formula, assumptions, or conclusions change.

Superseded sources:

- Mark source verification as `superseded`.
- Add replacement source when known.
- Recheck affected content before keeping it current.

Archived exercises:

- Mark question or practice-set visibility and content state appropriately.
- Keep historical learner attempts if safe, but do not recommend archived content by default.

Redirects from old routes:

- Create redirect records whenever a public route slug changes or content is merged.
- Preserve stable IDs when only route slugs or titles change.

Learner progress attached to superseded content:

- Keep the record as historical.
- Map to replacement content if a clear relationship exists.
- Avoid presenting superseded completion as current mastery without explanation.

Content should be updated in place for corrections that do not alter academic meaning, receive a new version for substantive academic changes, be archived when retained for history, be superseded when replaced by a newer content item, and receive a redirect when a public route changes.

Lecturer or semester changes do not automatically require full duplication; duplicate only when content, source set, assessment alignment, or learning path actually differs.

## 8. File and directory strategy

Do not create this structure yet. Future Astro content may use:

```text
src/content/modules/
src/content/module-versions/
src/content/topics/
src/content/questions/
src/content/practice-sets/
src/content/exams/
src/content/sources/
src/content/reviews/
src/content/redirects/
```

Recommended storage:

| Content type | Storage style | Rationale |
| --- | --- | --- |
| Modules | YAML or JSON data | Durable identity and metadata, no prose body needed |
| Module versions | YAML or JSON data | Version relationships and topic ordering |
| Topics | MDX files | Rich learner-facing explanations with structured front matter |
| Learning objectives | Topic front matter or data | Usually tied to topics, may be promoted if reused |
| Definitions | MDX or data | Use data when reused or reviewable independently |
| Formulas | MDX plus structured metadata | Needs display text and validation metadata |
| Models | MDX plus structured metadata | Rich explanation plus source links |
| Graphs or diagrams | Structured metadata plus asset refs | Accessibility and source metadata |
| Worked examples | MDX | Step-by-step learner content |
| Questions | YAML or JSON, MDX for rich content | Structured validation and answer rules |
| Practice sets | YAML or JSON | Collections and generation rules |
| Mock exams | YAML or JSON, optional MDX instructions | Ordered exam metadata |
| Sources and locators | YAML or JSON | Precise references and verification status |
| Reviews | YAML or JSON | Editorial audit trail |
| Search documents | Generated index | Derived from published content |
| Learner state | Browser local storage | Never committed academic content |

Generated indexes should include search documents, content relationship maps, source coverage reports, and route maps.

## 9. Example fixtures

These fixtures are neutral and non-academic.

### Module

```yaml
id: module-pilot
slug: pilot-module
title: Pilotmodul
shortTitle: Pilot
summary: Neutrales Modul fuer Schema-Tests.
discipline: Volkswirtschaftslehre
degreeProgramme: B.Sc. Volkswirtschaftslehre
institutionContext: Georg-August-Universitaet Goettingen
officialAffiliationDisclaimer: Kein offizielles Universitaetsangebot.
availableVersions:
  - module-version-pilot-2026
currentVersion: module-version-pilot-2026
contentCoverage:
  topics: 1
  status: planned
availableLearningModes:
  - guided-practice
publicationStatus: listed
searchMetadata:
  keywords:
    - pilot
```

### Module version

```yaml
id: module-version-pilot-2026
moduleId: module-pilot
semesterLabel: Fixture Semester
semesterStatus: unknown
sourceSet:
  - source-alpha
topicOrder:
  - topic-alpha
reviewStatus: in-review
publicationStatus: listed
```

### Topic

```yaml
id: topic-alpha
moduleIds:
  - module-pilot
moduleVersionIds:
  - module-version-pilot-2026
slug: topic-alpha
title: Thema Alpha
summary: Neutrales Beispielthema.
order: 10
estimatedLearningTimeMinutes: 25
learningObjectiveIds:
  - objective-alpha-01
publicationState: hidden
contentState: drafting
reviewState: not-reviewed
sourceRefs:
  - sourceId: source-alpha
recommendedNextAction:
  reason: next-topic
  targetId: topic-alpha
searchTerms:
  - alpha
```

### Learning objective

```yaml
id: objective-alpha-01
statement: Du kannst ein neutrales Konzept einordnen.
competencyVerb: einordnen
topicId: topic-alpha
assessmentLevel: introductory
prerequisiteObjectiveIds: []
publicationState: hidden
```

### Formula

```yaml
id: formula-alpha
name: Formel Alpha
latex: A = B + C
purpose: Beschreibt eine neutrale Beispielbeziehung.
variables:
  - symbol: A
    meaning: Alpha-Wert
  - symbol: B
    meaning: Beta-Wert
  - symbol: C
    meaning: Gamma-Wert
units: []
assumptions:
  - Neutrale Fixture-Annahme.
domainRestrictions: []
sourceRefs:
  - sourceId: source-alpha
relatedLearningObjectives:
  - objective-alpha-01
```

### Definition

```yaml
id: definition-alpha
term: Begriff Alpha
definition: Eine neutrale Beispieldefinition.
plainLanguageExplanation: Alpha ist ein Platzhalterbegriff.
sourceRef:
  sourceId: source-alpha
topicId: topic-alpha
relatedLearningObjectives:
  - objective-alpha-01
aliases:
  - Alpha-Begriff
reviewPromptEligibility: true
```

### Practice question

```yaml
id: question-alpha-01
provenance: original
module: module-pilot
topic:
  - topic-alpha
learningObjectives:
  - objective-alpha-01
questionType: numeric-response
difficulty: introductory
prompt: Berechne den neutralen Beispielwert.
dataOrAssumptions:
  - name: A
    value: 1
answerFormat:
  type: number
hints:
  - level: 1
    text: Nutze die gegebenen Werte.
solution:
  status: available
  text: Der neutrale Beispielwert ist 1.
reasoning: Die Antwort folgt direkt aus der Fixture-Angabe.
commonErrors: []
estimatedTimeMinutes: 3
reviewEligibility: true
publicationStatus: hidden
contentState: drafting
reviewStatus: not-reviewed
```

### Practice set

```yaml
id: practice-set-alpha
title: Uebung Alpha
module: module-pilot
topicScope:
  - topic-alpha
practiceMode: guided-practice
questionList:
  type: explicit
  ids:
    - question-alpha-01
difficultyDistribution:
  introductory: 1
estimatedDurationMinutes: 10
completionCriteria:
  attemptAll: true
progressEffects:
  recordsAttempts: true
recommendationRules:
  - reason: practice-needed
publicationStatus: hidden
sourceProvenanceSummary:
  original: 1
```

### Original mock exam

```yaml
id: mock-exam-alpha
title: Originale Probeklausur Alpha
moduleVersion: module-version-pilot-2026
provenance: original
legalPublicationStatus: not-verified
timeLimitMinutes: 30
totalPoints: 10
sections:
  - id: section-alpha
    title: Abschnitt Alpha
orderedQuestions:
  - question-alpha-01
instructions: Bearbeite die neutralen Beispielaufgaben.
permittedAids: []
gradingRules:
  type: original-fixture
solutionAvailability: outline
weakTopicMapping:
  - questionId: question-alpha-01
    topicId: topic-alpha
publicationStatus: hidden
contentState: drafting
reviewStatus: not-reviewed
```

### Source

```yaml
id: source-alpha
sourceType: original-platform-material
title: Quelle Alpha
authorOrLecturer: Platform author role
institutionOrPublisher: Fixture publisher
verificationStatus: located
copyrightOrReuseNote: Neutrales Fixture-Material.
notes: Keine realen akademischen Angaben.
```

### Source locator

```yaml
id: locator-alpha
sourceId: source-alpha
locatorType: pdf-page
value: "3"
viewerPdfPage: 3
printedPage: "1"
note: Neutraler Locator.
```

### Review record

```yaml
id: review-alpha
contentId: topic-alpha
reviewerIdentityOrRole: editorial-reviewer
reviewType: publication-review
date: 2026-06-01
sourceSetChecked:
  - source-alpha
result: changes-requested
issuesFound:
  - Fixture requires source check before publication.
unresolvedConcerns:
  - No academic content supplied.
nextReviewDate: 2026-07-01
```

### Learner progress record

```json
{
  "schemaVersion": "1.0.0",
  "key": "lesson-progress:topic-alpha",
  "contentId": "topic-alpha",
  "state": "in-progress",
  "completedSections": ["intuitive-introduction"],
  "createdAt": "2026-06-01T10:00:00.000Z",
  "updatedAt": "2026-06-01T10:10:00.000Z",
  "migrationNotes": []
}
```

### Review item

```json
{
  "schemaVersion": "1.0.0",
  "key": "review-item:topic-alpha-definition",
  "reviewItemId": "review-item-topic-alpha-definition",
  "contentId": "definition-alpha",
  "state": "due",
  "createdAt": "2026-06-01T10:00:00.000Z",
  "updatedAt": "2026-06-01T10:00:00.000Z",
  "dueAt": "2026-06-02T10:00:00.000Z",
  "attemptHistory": []
}
```

## 10. Validation rules

### Schema-level validation

- Required fields must exist and have the declared type.
- Enums must use only documented values.
- Stable IDs must be unique across their entity namespace.
- Route slugs must be lowercase ASCII and unique within their parent route.
- Dates must use ISO format.
- Arrays that represent ordered content must not rely on array position as the only identity.
- Unknown fields should fail validation during early development unless explicitly allowed for migration.

### Build-time relationship validation

- A published topic must reference a published module version.
- A published topic must have at least one checked source.
- Official or adapted questions require source locators.
- Original questions must not claim official provenance.
- A published formula must define all symbols.
- A practice set may reference only available questions.
- A mock exam total must equal the sum of its question points where points exist.
- Archived content cannot be recommended as the default next action.
- Superseded content must identify its replacement when one exists.
- Published content must have a completed publication review.
- Current module versions must not reference superseded sources without an explicit reason.

### Editorial validation

- Every published academic claim must be traceable to a source.
- Every formula must define variables and assumptions.
- Source conflicts must be documented.
- Official, adapted, and original material must be distinguishable.
- Original exercises must never be presented as official exam questions.
- Lecturer, semester, exam, and course-alignment metadata must remain absent unless verified.

### Runtime defensive handling

- If local storage is unavailable, show stateless learning paths.
- If local storage is corrupted, ignore unsafe data and offer reset.
- If referenced content is removed, archived, or superseded, preserve safe historical state and recommend current alternatives.
- If generated search data is unavailable, navigation must still expose published content.

## 11. Schema evolution and migration

Schema versioning:

- Content schemas should use semantic schema versions such as `1.0.0`.
- Learner-state records must include `schemaVersion`.
- Generated indexes should include the source content schema version.

Backward-compatible additions:

- Optional fields may be added with safe defaults.
- New enum values require documentation and rendering fallback before use.

Breaking changes:

- Renaming fields, changing ID behavior, or changing required relationships is breaking.
- Breaking changes require migration notes and validation updates.

Content migrations:

- Should be scripted when implementation exists.
- Must preserve stable IDs whenever content identity is unchanged.
- Must create redirect or supersession records for public route changes.

Learner-state migrations:

- Must be defensive and reversible where possible.
- Must ignore unknown or unsafe records rather than blocking public content.
- Should record migration notes in local-state metadata.

Deprecation periods:

- Public routes should retain redirects when feasible.
- Superseded content should identify replacements when available.

Validation failure handling:

- Published builds should fail for source, formula, provenance, and relationship violations.
- Draft content may fail publication checks but must not be included as public content.

Rollback strategy:

- Keep prior content and redirect records available until replacement content validates.
- Do not delete learner-state mappings while public redirects depend on them.

Treatment of unknown fields:

- Content unknown fields should fail strict validation unless explicitly allowed.
- Local-state unknown fields should be ignored during read and preserved only if safe.

Treatment of stale local-state references:

- Mark as unavailable, archived, or superseded.
- Offer replacement content when a redirect or supersession record exists.
- Never present stale completion as current mastery without explanation.

## 12. Privacy and local state

- Academic content is public.
- Learner state is local in version one.
- No sensitive personal information should be required.
- Progress data must not be silently transmitted.
- Analytics are outside the initial schema unless separately approved.
- Local-state reset and export may be added later.
- Storage limitations must be communicated to users.

Learner state should remain useful but nonessential. Public learning content, navigation, sources, and search fallback must remain available without local storage.

## 13. Confirmed schema decisions

- Academic content, editorial metadata, and learner-state data are separate.
- Stable IDs are separate from route slugs and display titles.
- Base modules do not store lecturer or semester information.
- Module versions store semester-specific metadata only when verified.
- Topics use MDX for learner-facing bodies and front matter for relationships and states.
- Questions, practice sets, exams, sources, reviews, redirects, and generated search documents are structured data.
- Learner state is local-only in version one.
- No database or account system is part of this schema.

## 14. Unresolved schema decisions

- Final folder and file naming conventions for multi-file topic assets.
- Whether reusable definitions and formulas live in their own collections from the start.
- Exact difficulty rubric labels beyond the initial enum definitions.
- Whether search indexes are generated at build time only or enhanced client-side.
- Exact review-expiration policy by content type.
- How route redirects are implemented in the eventual Astro app.

## 15. Risks

- Overly flexible schema fields could allow unsourced academic claims.
- Overly strict required fields could pressure authors to invent content.
- Local learner-state references may become stale after content migrations.
- Search quality depends on consistent metadata and generated text extraction.
- Official/adapted provenance mistakes could mislead users or create legal risk.
- Formula validation will require implementation support beyond front matter checks.

## 16. Decisions deferred until Astro scaffolding

- Exact `src/content.config.ts` syntax.
- Exact Zod implementation details.
- Final generated search index format.
- Build-time validation command names.
- Route generation implementation.
- Redirect implementation mechanics.

## 17. Decisions deferred until the Makroökonomik II pilot

- Actual module-version metadata.
- Actual topic list and ordering.
- Real source sets and source locators.
- Actual question difficulty calibration.
- Actual formula, model, and graph requirements.
- Review cadence for pilot content.

## 18. Required validation utilities for implementation

Future implementation should include utilities to validate:

- unique stable IDs by namespace
- lowercase ASCII slugs
- module-version topic references
- topic source coverage
- formula symbol definitions
- official/adapted source locator requirements
- practice-set question availability
- mock-exam point totals
- publication review completion
- archived and superseded recommendation rules
- generated search document completeness
- stale local-state reference handling

## 19. Implications for future `src/content.config.ts`

The future `src/content.config.ts` should:

- define separate collections for modules, module versions, topics, questions, practice sets, exams, sources, reviews, and redirects
- use strict TypeScript-compatible validation
- encode all documented enums
- validate stable IDs, slugs, publication states, review states, provenance, and source references
- keep MDX content bodies separate from structured content metadata
- avoid learner-state schemas in content collections
- provide generated-data hooks or scripts for search documents and relationship maps
- fail public builds when published academic content lacks required source and review metadata

The first implementation should scaffold Astro and content collections only after this specification is accepted.
