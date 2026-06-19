# Mikroökonomik I Preference Relations Practice Set 01: Implementation Specification

This is a production implementation specification for the independently approved twelve-item preference-relations practice set. It defines a bounded formative activity. It does not implement components, MDX, routes, storage, styles, or analytics.

## 1. Purpose and scope

The future activity must let a learner read, answer, retry, self-review, and navigate the twelve approved exercises while preserving their independently reviewed academic meaning. It covers response collection, deterministic evaluation where defensible, model-solution self-review where automatic evaluation would be academically unsafe, item navigation, session-local progress, accessibility behaviour, and bounded tests.

It does not define a full Mikroökonomik I lesson, a site-wide assessment engine, accounts, authentication, cross-device sync, university-credit grading, adaptive learning, AI feedback, leaderboards, certificates, instructor dashboards, long-term analytics, or publication readiness.

## 2. Source-of-truth hierarchy

1. `mikro1-preferences-practice-set-01.md`: approved prompts, answers, solutions, claim IDs, misconceptions, and item-level instructional demand.
2. `mikro1-preferences-practice-set-01-review.md`: independent approval, correction record, formal relation checks, and implementation risks.
3. `mikro1-preferences-claims.md`: verified definitions, notation, scope limits, and source locators.
4. `mikro1-preferences-outline.md`: bounded topic sequence and terminology convention.
5. `mikro1-preferences-rights-review.md`: originality, source-reuse, and publication controls.

When a presentation decision conflicts with an approved prompt, solution, or relation direction, the approved exercise material wins. A future implementation may clarify instructions but must not alter the answer, claim scope, required comparison direction, or cognitive demand without a new academic review.

## 3. Exercise inventory

| ID   | Internal label              | Approved format                    | Claim IDs        | Difficulty   | Response type                                    | Evaluation type                                     | Feedback type                               | Retry / reveal                                    | Persistence                         | Accessibility risk                                  | Production representation                           |
| ---- | --------------------------- | ---------------------------------- | ---------------- | ------------ | ------------------------------------------------ | --------------------------------------------------- | ------------------------------------------- | ------------------------------------------------- | ----------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `01` | read weak comparison        | short answer                       | `01`, `02`       | foundation   | two-part structured short answer                 | checklist plus learner self-review                  | model answer and misconception note         | unlimited; reveal after submit or explicit choice | flags only                          | symbol text alternative; no exact string matching   | labelled text fields plus self-review checklist     |
| `02` | read derived relations      | multiple choice                    | `02`             | foundation   | single choice                                    | stable option ID                                    | result, rationale for all options, solution | unlimited; reveal after first submission          | outcome and reveal flags            | native radio group                                  | single-choice form                                  |
| `03` | classify stated pair        | true/false with justification      | `02`             | foundation   | truth value plus justification                   | truth value by stable ID; justification self-review | result plus derived-definition explanation  | unlimited; reveal after submit                    | outcome and self-review flag        | grouped controls and text field                     | true-false-with-justification                       |
| `04` | match definitions           | matching                           | `02`             | foundation   | three mappings                                   | each mapping by stable relation ID                  | per-mapping feedback and solution           | unlimited; reveal after submit                    | mapping outcome and reveal flags    | avoid drag-and-drop                                 | classification with native selects                  |
| `05` | check completeness          | relation-table short answer        | `03`             | intermediate | three pair assessments plus conclusion           | structured pair checklist and conclusion            | pair-level feedback and solution            | unlimited; reveal after submit                    | completion and reveal flags         | table semantics; ordered directions                 | relation-table-analysis                             |
| `06` | identify incompleteness     | multiple choice with justification | `03`             | intermediate | single choice plus justification                 | stable option ID; justification self-review         | option rationale and solution               | unlimited; reveal after submit                    | outcome and self-review flag        | exhaustive-list wording must precede options        | single-choice with optional reasoning               |
| `07` | check transitivity          | relation-table short answer        | `04`             | intermediate | conclusion plus chain statement                  | structured chain fields                             | chain feedback and solution                 | unlimited; reveal after submit                    | completion and reveal flags         | reflexive-chain explanation and table reading order | relation-table-analysis                             |
| `08` | find violation              | relation-table short answer        | `04`             | intermediate | transitivity classification plus ordered triple  | stable classification and ordered triple fields     | classification/triple feedback and solution | unlimited; reveal after submit                    | outcome and reveal flags            | ordered triple must be textual                      | relation-table-analysis                             |
| `09` | separate rationality checks | true/false with justification      | `03`, `04`, `05` | intermediate | truth value plus justification                   | truth value by stable ID; justification self-review | axiom-conjunction explanation               | unlimited; reveal after submit                    | outcome and self-review flag        | technical meaning of rationality                    | true-false-with-justification                       |
| `10` | classify both axioms        | relation-table multiple choice     | `03`, `04`, `05` | intermediate | completeness, transitivity, final classification | each dimension by stable ID                         | dimension feedback, then solution           | unlimited; reveal after submit                    | dimension outcomes and reveal flags | do not let final label bypass dimensions            | classification with relation-data summary           |
| `11` | diagnose classification     | error diagnosis                    | `03`, `04`, `05` | transfer     | completeness, transitivity, triple, repair       | structured fields plus self-review for repair       | dimension feedback and model repair         | unlimited; reveal after submit                    | outcomes and self-review flag       | three clearly labelled response regions             | error-diagnosis form                                |
| `12` | derive incompatibility      | formal derivation                  | `02`, `15`       | transfer     | ordered five-part derivation                     | learner self-review against stable logical steps    | model proof and derived-result note         | unlimited; reveal after submit or explicit choice | completion and reveal flags         | symbols and logical order need text alternatives    | ordered-derivation with text fields and model proof |

`01` through `12` retain their stable IDs. In the claim-ID column, shortened numbers refer to `claim-pref-01` through `claim-pref-05` and `claim-pref-15`.

## 4. Interaction types

- `single-choice`: `02`, `06`; use one native radio group and a submit button.
- `true-false-with-justification`: `03`, `09`; use a native true/false radio group plus a separate optional-but-required-for-completion reasoning field.
- `classification`: `04`, `10`; evaluate each required classification dimension independently.
- `relation-table-analysis`: `05`, `07`, `08`; show explicit domain and relation data before response fields, retaining all required pair or chain work.
- `error-diagnosis`: `11`; use separately labelled completeness, transitivity, violating-triple, and repair fields.
- `ordered-derivation`: `12`; provide five labelled logical-step fields rather than forcing a drag-and-drop ordering. This preserves derivation demand and allows equivalent wording.
- `open-response-with-model-solution`: self-review portions of `01`, `03`, `05`, `06`, `07`, `09`, `11`, and `12`.

No interaction may automatically submit when an option receives focus. Native controls are preferred over custom widgets. The activity must use explicit action buttons for submit, retry, show hint, show solution, reset response, and continue.

## 5. Exercise data model

Each exercise requires a versioned structured object. Learner-visible content must be separated from evaluation metadata, feedback metadata, and audit metadata. The initial rendered learner-visible object must not contain the expected answer, distractor rationales, or full solution. In a static formative activity those assets cannot be confidential, but they must not be bundled into initial visible markup or initial hydration props merely for convenience.

```ts
type PracticeExercise = {
  id: string;
  version: number;
  status: "approved" | "unavailable";
  title: string;
  prompt: RichTextBlock[];
  instructions: string[];
  responseType: ControlledInteractionType;
  options?: Array<{ id: string; label: RichTextBlock[] }>;
  relationData?: RelationData;
  expectedAnswer: EvaluationMetadata;
  acceptedAnswerStructure: AcceptedAnswerStructure;
  feedback: FeedbackMetadata;
  hints: Hint[];
  solution: SolutionMetadata;
  claimIds: string[];
  difficulty: "foundation" | "intermediate" | "transfer";
  prerequisites: string[];
  misconceptionIds: string[];
  accessibilityText: AccessibilityText;
  implementationNotes: string[];
  audit: AuditMetadata;
};
```

Learner-visible fields are `title`, `prompt`, `instructions`, visible option labels, `relationData.display`, hints after request, accessibility text, and navigation labels. Evaluation metadata contains stable correct option IDs, expected pair or chain structures, accepted step requirements, and no rendered HTML. Feedback metadata contains concept and misconception mappings. Audit metadata contains claim IDs, source-verification state, provenance, review version, and internal implementation notes.

`RelationData` must include `domain`, `reflexivePairs` as `included`, `omitted`, or `not-supplied`, `nonReflexiveListing` as `exhaustive` or `partial`, ordered relation entries, and a learner-visible textual summary. The evaluator must represent relation status separately as `holds`, `does-not-hold`, or `not-supplied`.

## 6. Shared interaction state model

Use a composite state, not one overloaded status string:

```ts
type AttemptPhase =
  | "not-started"
  | "in-progress"
  | "response-entered"
  | "submitted"
  | "retrying"
  | "completed"
  | "unavailable"
  | "evaluation-error";

type EvaluationOutcome =
  | "not-evaluated"
  | "correct"
  | "partially-correct"
  | "incorrect"
  | "self-review-required";

type VisibilityState = {
  feedbackVisible: boolean;
  solutionVisible: boolean;
  hintIdsVisible: string[];
};
```

`not-started`, `in-progress`, `response-entered`, `submitted`, `retrying`, `completed`, `unavailable`, and `evaluation-error` are mutually exclusive phases. `correct`, `partially-correct`, and `incorrect` are mutually exclusive outcomes and may occur only after `submitted`. `feedback-visible` and `solution-visible` coexist with a submitted or completed phase; a revealed solution is not an outcome. `self-review-required` is used for open-response portions and must not become `correct` solely because a solution was revealed.

Allowed transitions:

| From                                  | Action                              | To                               | Learner view and announcement                                    |
| ------------------------------------- | ----------------------------------- | -------------------------------- | ---------------------------------------------------------------- |
| `not-started`                         | focus or begin                      | `in-progress`                    | prompt and required fields; no live announcement                 |
| `in-progress`                         | enter any response                  | `response-entered`               | draft retained; no result announced                              |
| `response-entered`                    | valid explicit submit               | `submitted` plus outcome         | result in polite live region; focus remains on submit button     |
| `submitted`                           | open feedback                       | same phase plus feedback visible | feedback heading becomes available; announce concise status once |
| `submitted`                           | retry                               | `retrying`, then `in-progress`   | previous response remains visible until learner resets it        |
| `submitted` or `in-progress`          | reveal solution                     | same phase plus solution visible | announce “model solution shown”; never announce correct          |
| `submitted` with required review done | mark complete                       | `completed`                      | completion summary announced politely                            |
| any active phase                      | invalid data or evaluator exception | `evaluation-error`               | alert with unavailable evaluation and retry/reload guidance      |

Prohibited transitions: `unavailable` or `evaluation-error` must never yield a correctness result; `solution-visible` must never directly yield `correct`; `not-started` must not become `completed`; and a final rationality label must not become correct when a required completeness or transitivity dimension is incorrect.

## 7. Exercise-specific state requirements

| Exercises | Required fields                                         | Automatic outcome                                   | Partial outcome                                          | Completion condition                                                                 |
| --------- | ------------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `01`      | meaning field; reverse-relation field                   | none; `self-review-required`                        | none                                                     | submit both fields, then compare with model and explicitly mark self-review complete |
| `02`      | one option ID                                           | correct or incorrect                                | none                                                     | valid submit; correct or solution/self-review completion                             |
| `03`      | truth value; justification                              | truth value only                                    | none                                                     | submit both; mark justification self-reviewed before completion                      |
| `04`      | three mapping IDs                                       | correct/incorrect by all mappings                   | defensible per-mapping feedback only                     | all mappings submitted; retry or solution review                                     |
| `05`      | three pair assessments; completeness conclusion         | correct/incorrect by all required checks            | defensible if some pair assessments are correct          | all required fields submitted and feedback read or solution reviewed                 |
| `06`      | one option ID; justification                            | option correct/incorrect                            | none                                                     | submit both; justification self-review for completion                                |
| `07`      | transitivity conclusion; chain premises and endpoint    | correct/incorrect if structure matches              | defensible if conclusion is correct but chain incomplete | required structured fields submitted and feedback read or solution reviewed          |
| `08`      | transitivity conclusion; ordered triple                 | correct/incorrect if both match                     | defensible if classification correct but triple invalid  | all fields submitted and feedback read or solution reviewed                          |
| `09`      | truth value; justification                              | truth value only                                    | none                                                     | submit both and self-review justification                                            |
| `10`      | completeness, transitivity, rationality classification  | correct only if all three dimensions are correct    | defensible per dimension; no numeric score               | all dimensions submitted and feedback read or solution reviewed                      |
| `11`      | completeness, transitivity, ordered triple, repair text | structured dimensions evaluated; repair self-review | defensible for structured dimensions only                | submit all fields and self-review repair                                             |
| `12`      | five labelled derivation fields                         | none; `self-review-required`                        | none                                                     | submit all steps, reveal or compare with model, mark self-review complete            |

The activity may show partial feedback but must not display a formal partial score. “Completed through self-review” is distinct from “independently correct.”

## 8. Submission and evaluation rules

Submission is enabled only when all required fields for the current interaction are nonblank and structurally valid. Learners may edit any response before submitting. After submission, responses remain visible but are read-only until the learner chooses Retry or Reset response. Enter must not submit a multiline text area; in a single-line field it may submit only when the field is valid and an explicit adjacent submit button is present. Space and Enter retain native radio and button behaviour. Accidental submission is prevented by explicit submit buttons and validation summaries, never by auto-submission.

Blank submission: show an inline error summary and field-level text errors, move focus to the summary only when submission was requested, and preserve all entered data. Incomplete multi-part responses: name each missing field and do not evaluate the complete response.

Evaluation rules:

- Single choice and true/false use stable option IDs, never visible text. Exactly one option may be approved. Do not randomise `02`, `06`, or `10` because their approved distractor order is part of the reviewed exercise.
- `04` evaluates all three mappings by stable relation IDs.
- `05` evaluates every unordered pair separately; both directions are accepted where supplied and are only called indifference through the verified derived definition.
- `07` and `08` evaluate ordered relation pairs and triples in the displayed direction. A missing entry is false only where `relationData.nonReflexiveListing` is `exhaustive`.
- `10` evaluates completeness, transitivity, and final rationality separately. A correct final label cannot compensate for a wrong axiom assessment.
- `11` evaluates completeness, transitivity, and the ordered violating triple separately. The repair explanation is self-reviewed against the approved model; no claimed semantic auto-grading is permitted.
- `01`, written justifications, and `12` use bounded required-element checklists plus self-review. Equivalent wording is acceptable; reversed direction, omitted reverse condition, or absent contradiction are not.

If evaluation metadata is missing or invalid, evaluation must fail closed: render `unavailable` or `evaluation-error`, do not guess, and do not mark the learner incorrect.

## 9. Feedback model

Use four distinct layers:

1. **Immediate result:** “Correct,” “Not yet correct,” “Incomplete,” or “Submitted for self-review.” Never say the learner understands, is intelligent, or has failed.
2. **Conceptual explanation:** name the relevant verified definition or axiom and the decisive step, for example the reverse weak comparison or an actual two-step chain.
3. **Misconception-specific correction:** use only documented `mis-pref-*` IDs. Where multiple causes fit, say “This answer may be treating…” rather than diagnosing the learner.
4. **Full worked solution:** hidden initially; retain the approved solution’s whole reasoning, not merely the final answer.

Immediate result is a concise polite live-region update. Conceptual feedback is associated with the submitted field group using headings and `aria-describedby` or an explicit feedback region. Misconception feedback appears only when a response maps unambiguously to one documented misconception; otherwise show neutral corrective feedback.

## 10. Retry and reveal behaviour

All exercises permit unlimited retries without penalty. Previous responses remain visible when feedback opens and when Retry begins; Reset response is a separate, confirmed action that clears only the current item. Options must not reset automatically.

| Control            | Availability                                              | Effect                                                             | Progress effect                                             |
| ------------------ | --------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------- |
| Show hint          | before or after submission                                | opens one approved hint at a time                                  | records hint-opened, never reduces completion               |
| Show feedback      | after valid submit                                        | exposes immediate and conceptual feedback                          | none by itself                                              |
| Retry              | after submission                                          | reopens editable fields and preserves prior response until changed | retains attempt history as a count only                     |
| Show full solution | after a valid submit or explicit confirm-to-reveal action | shows complete approved solution                                   | sets `solutionRevealed`; never correct                      |
| Reset response     | while active                                              | clears current response after confirmation                         | does not erase completed history unless set reset is chosen |
| Continue           | after completion or explicit skip                         | moves to next stable item ID                                       | updates current item only                                   |

Completion after a solution reveal is `completed-through-self-review`, never `answered-correctly`. Skipped is a separate item record and must not be represented as incorrect.

## 11. Progress and completion model

The practice-set summary must show separate fields:

- `completedItems`
- `independentlyCorrectItems` for defensibly auto-evaluated correct responses only
- `completedThroughModelSolutionReview`
- `skippedItems`
- `itemsToRevisit` (incorrect, partial, skipped, or solution-revealed)
- `currentItemId`
- `totalItems` (`12`)

Item completion means: automatically evaluated items have a valid submission and feedback read, or the learner has completed an explicit model-solution self-review; open-response and derivation items require self-review confirmation. A practice set is complete when every item is completed or explicitly skipped. It must not be reduced to a percentage score or page-view metric.

## 12. Persistence boundaries

Use **session-local progress through `sessionStorage`**, with an in-memory fallback. This preserves activity progress across reloads in the same browser tab without accounts, cross-device synchronisation, or a server-side learning record.

Persist only: practice-set ID, schema version, exercise versions, current item ID, completion category, outcome category where automatic evaluation is defensible, hint IDs opened, solution-revealed flag, skip flag, and attempt count. Do not persist free-text answers, justifications, repair prose, or derivation text.

- Storage key: a namespaced key derived from immutable practice-set ID and storage schema version.
- Retention: current tab session only; browser session behaviour is the practical expiry boundary.
- Reset: a visible Reset practice progress action clears only this key after confirmation.
- Version mismatch: discard prior session record and begin at the first item with an explanatory notice; never merge unknown item schemas.
- Storage unavailable or corrupted: clear the bad record, continue in memory, announce that progress will not survive reload, and do not block practice.
- Privacy: no account, identifier, free-text response, or server transmission is involved. Browser-local progress is not secure grading data and is not suitable for certification.

## 13. Accessibility requirements

The bounded flow targets WCAG 2.2 AA and must use semantic headings, form labels, native fieldsets and legends for grouped options, real buttons, visible focus, sufficient contrast, logical reading order, zoom/reflow support, clear text errors, practical 44 by 44 CSS-pixel action targets, reduced-motion support for any added animation, and no colour-only correctness signal.

Correct, incomplete, and not-yet-correct status must have visible text and an appropriately scoped live-region announcement. Relation tables require captions, headers, and a textual summary. At 200% and 400% zoom, all controls, feedback, relation context, and actions must remain reachable without loss of information or a two-dimensional drag interaction.

Mathematical symbols require accessible text:

| Symbol | Required text alternative  |
| ------ | -------------------------- |
| `≽`    | “is weakly preferred to”   |
| `≻`    | “is strictly preferred to” |
| `∼`    | “is indifferent to”        |

At first use, visible instructions must provide the textual meaning. Expressions such as `x ≽ y` should be announced as “x is weakly preferred to y” without redundant duplicate speech.

## 14. Keyboard interaction requirements

- Tab and Shift+Tab follow document order through item navigation, fields, feedback controls, and solution controls.
- Native radio groups retain browser arrow-key behaviour; no custom override.
- Space and Enter activate native buttons and selected radio controls according to browser behaviour.
- Enter never submits while a multiline text area has focus.
- Escape closes only a future dismissible overlay; the initial bounded design should avoid modal overlays.
- After submission, focus remains on the Submit button. A polite live-region announcement communicates the result, and the next tab stop reaches feedback controls.
- Submission must not move focus to the next item. Continue is a separate action.
- Returning from progress navigation places focus on the item heading, announces position such as “Item 5 of 12,” and restores no unsaved free text.

## 15. Screen-reader requirements

- Every input has an accessible name, instructions, required state, and any error association.
- Grouped choices use `fieldset` and `legend`; option labels include text equivalents for mathematical notation.
- A relation-table caption identifies the domain and whether the non-reflexive listing is exhaustive. Row and column headers remain programmatically associated.
- A textual ordered-list summary of relation entries accompanies any table; it is the fallback when the table becomes horizontally constrained.
- Use one polite live region for normal result and progress updates; use an assertive announcement only for blocking data or evaluation errors.
- Feedback heading and text must be associated with the submitted response group without repeatedly re-announcing the entire prompt.
- Hidden solutions must not be reachable in the accessibility tree until the learner opens the native disclosure or activates Show full solution.
- Current item and set progress are announced concisely after deliberate navigation, not on every keystroke.

## 16. Responsive and mobile requirements

At 320 CSS pixels, tablet widths, desktop widths, 200% zoom, and 400% zoom, one-column question flow is the default. Long labels and accessibility-expanded mathematical text may wrap; controls must not shrink their target area or overlap feedback.

Relation tables must not require precise horizontal dragging. When their full grid cannot fit, render the accompanying textual relation summary first or make the table horizontally scrollable with a visible caption, preserved headers, keyboard-reachable cells, and the same textual summary. Mathematical expressions must wrap or use block presentation instead of clipping.

## 17. Error and recovery states

| Condition                                      | Learner behaviour                                                      | Recovery                                                                                |
| ---------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| malformed exercise data                        | show item unavailable, not an incorrect result                         | report a local validation error and offer next available item or return to set overview |
| missing expected answer, feedback, or solution | fail closed as unavailable                                             | do not evaluate; offer error-report path                                                |
| evaluation exception                           | retain entered response; show evaluation error                         | retry evaluation or continue without a result; never infer correctness                  |
| unavailable or corrupted storage               | continue in memory                                                     | announce that reload will reset progress; reset bad record safely                       |
| version mismatch                               | discard incompatible local session state                               | start the current exercise version with explanation                                     |
| hydration or rendering failure                 | retain server-rendered prompt and model-solution access where possible | show no false interactive state; provide static solution/review path                    |
| unsupported interaction type                   | mark item unavailable                                                  | log validation failure; do not substitute a different academic task                     |

## 18. Analytics and telemetry boundaries

No analytics is included in the first bounded implementation unless an existing privacy-reviewed event system is explicitly adopted later. Optional future aggregate event names are `practice_started`, `item_submitted`, `hint_opened`, `solution_revealed`, and `practice_completed`.

Never send free-text responses, derivation text, exact learner reasoning, identifying data, inferred learner profiles, hidden scoring profiles, or university-credit records. Analytics must not control feedback, evaluation, completion, or availability.

## 19. Security and privacy considerations

Treat all learner text as untrusted plain text: escape it on render, execute none of it, and never render it as Markdown or HTML. Keep evaluation metadata out of initial visible state where feasible, but do not claim security from a client-side formative activity. Local storage may be modified by the learner and must never be treated as trusted assessment evidence.

Use schema validation for exercise data, versioned storage records, safe reset paths, and no remote submission. Do not expose hidden answer data in a way that turns initial page inspection into the normal solution path; where client-side evaluation makes answer data technically discoverable, retain the formative, non-certifying boundary and provide a clear model-solution path instead.

## 20. Testing strategy

**Data validation tests** must verify unique stable IDs, version presence, valid claim IDs, supported interaction type, one approved single-choice answer, approved distractor rationale, required feedback and solution, valid ordered relation entries, valid derivation step IDs, valid difficulty, no unsupported HTML, and separation of learner-visible from evaluator-only fields.

**Evaluation unit tests** must cover correct, incorrect, incomplete, and reset responses; reversed ordered pairs; mutual weak preference; completeness allowing both directions; missing-information handling; transitivity violation detection; rationality requiring both axioms; solution reveal never counting as correct; and open-response paths without exact-string dependence.

**Component tests** must cover initial state, required-field errors, explicit submission, feedback rendering, retry, reveal, reset, native keyboard operation, accessible labels, live-region output, hidden-solution behaviour, relation-table caption/header semantics, and the in-memory storage fallback.

**E2E tests** must cover completing an automatically evaluated item, retrying an incorrect answer, revealing a solution, completing an open-response self-review, visiting all twelve items, restoring session progress, resetting progress, keyboard-only completion, relation-table behaviour at a narrow viewport, JavaScript failure fallback where supported, and no critical accessibility violation in the bounded flow. Do not rely only on snapshots.

## 21. Component-capability assessment

| Capability                            | Assessment                                  | Evidence inspected                                                                                                      | Required next action                                                                    |
| ------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| static prompt and metadata rendering  | existing and reusable                       | `src/components/practice/QuestionCard.astro`                                                                            | adapt data model, not fixture wording                                                   |
| single-choice response                | existing but requires extension             | `QuestionCard.astro` renders an ordered “Papier-Auswahlliste,” not inputs                                               | add a scoped native radio-group interaction                                             |
| true/false response                   | missing                                     | `QuestionCard.astro` has no forms or submit controls                                                                    | add scoped fieldset/legend interaction                                                  |
| short answer and open response        | missing                                     | no input or textarea in practice components                                                                             | add labelled form controls and self-review path                                         |
| expandable hints and solution         | existing and reusable for static disclosure | `src/components/learning/SolutionDisclosure.astro` is native `<details>`; `QuestionCard.astro` uses details for hints   | extend visibility-state and feedback association without changing the approved solution |
| relation-table display and evaluation | missing                                     | `QuestionCard.astro` uses lists and definition lists; no relation-table component exists                                | add semantic relation-table/list-summary component and evaluator                        |
| ordered derivation response           | missing                                     | `QuestionSolution.steps` is display-only in fixture and `QuestionCard.astro`                                            | add structured step-response component without drag-and-drop                            |
| action buttons                        | existing and reusable                       | `src/components/foundation/Button.astro` provides real button or link and prohibits disabled links                      | use for submit/reset/retry/reveal only with correct native form semantics               |
| error callout                         | existing but requires extension             | `src/components/foundation/Callout.astro` provides static `role="note"`                                                 | add form error summary and live status region; do not reuse a note as an alert          |
| local progress                        | missing                                     | fixtures state no saved attempts; `PracticeSetPage.astro` states no forms or storage                                    | implement scoped sessionStorage adapter with in-memory fallback                         |
| status announcements                  | missing                                     | inspected practice and foundation components expose no `aria-live` region                                               | add one bounded polite status component and assertive error path                        |
| base focus and responsive styles      | existing and reusable                       | `src/styles/global.css` provides `:focus-visible`, control font inheritance, table base styles, and mobile action rules | verify activity-specific focus, table, and zoom behaviour                               |

The existing practice components are static fixture preview components. They are not an evaluator and should not be repurposed by exposing fixture `isExpected` values to learner-facing client state.

The first bounded implementation uses these production paths:

- data contract and validator: `src/lib/mikro1-preferences-practice.ts`
- approved exercise records: `src/data/mikro1-preferences-practice.ts`
- static renderer: `src/components/practice/StaticPracticeExercise.astro`, `src/components/practice/StaticPracticeResponseField.astro`, and `src/components/practice/StaticPracticeSet.astro`
- production integration: `src/pages/ueben/mikrooekonomik-1/praeferenzrelationen/index.astro`

This slice intentionally omits evaluation, feedback, solution reveal, retries, persistence, progress, and analytics.

## 22. Implementation sequence

1. Define validated, versioned exercise data objects with a learner/evaluator metadata boundary.
2. Add static rendering for the twelve prompt types and accessible relation summaries.
3. Implement native single-choice and true/false evaluation for `02`, `03`, `06`, and `09`.
4. Implement structured classification for `04` and dimensional rationality classification for `10`.
5. Implement relation-table display and evaluation for `05`, `07`, and `08`.
6. Implement structured error diagnosis for `11`.
7. Implement model-solution self-review for `01`, all justifications, and `12`.
8. Add shared feedback, retry, reveal, reset, and unavailable states.
9. Add session-local progress with versioning, reset, and in-memory fallback.
10. Add data, evaluation, component, accessibility, and E2E tests.
11. Integrate the twelve approved items in one bounded production location after the preceding contracts pass.

Each step is a separate bounded change. No step authorises an unrelated assessment framework or a broader lesson implementation.

## 23. Known risks and blockers

- Client-side formative evaluation cannot provide secure answer confidentiality or trusted grading; do not claim otherwise.
- Open text, repair, and derivation responses must remain self-review or structured-checklist interactions until a separate approved evaluator exists.
- The existing practice preview has no interactive form, state, relation-table, live-region, or persistence capability.
- Relation-table rendering must preserve domain, exhaustive-list status, reflexive-pair status, and ordered direction on narrow screens.
- The approved solutions must be copied faithfully into a future solution layer without source-shaped additions or academic expansion.
- Production accessibility, test evidence, and publication readiness remain separate gates.

## 24. Bounded implementation readiness decision

**Result: `ready-for-bounded-implementation`.**

All twelve independently approved exercises map to feasible interaction types without changing academic meaning. Automatic evaluation is constrained to defensible structured responses; open responses use self-review rather than brittle semantic grading. States, feedback, retries, progress, session-local persistence, safe failure behaviour, accessibility requirements, current component gaps, tests, and staged implementation work are defined. This approves only a future bounded implementation task, not the implementation, lesson, site-wide engine, or publication.

## Audit Identity

- Audit ID: `mikro1-preferences-practice-set-01-implementation-spec`
- Audit status: `ready-for-drafting`
- Review owner: `implementation-design`
- Last updated: `2026-06-19`

## Module Identity

- Module ID: `module-mikro1-candidate`
- Module title: `Mikroökonomik I`
- Institution context: `Georg-August-Universität Göttingen`
- Official affiliation: `Independent platform, not an official university offer`

## Audit Scope

Implementation design for the reviewed twelve-item practice set only. No production artefact is added by this specification.

## Audit Status

- Current state: `ready-for-drafting`
- Previous state: `topic-selected`
- Next valid state: `blocked` or `archived`
- Blockers: production implementation, test evidence, and publication review are outside this document

## Private-Source Location Reference

- Private collection key: `external-course-materials/mikro1`
- Private-source use: none; this specification relies only on the committed sanitized audit layer

## Sanitised File Inventory

| Source ID           | Source type            | File category | Rights status             | Source verification | Exercise provenance | Notes                                                           |
| ------------------- | ---------------------- | ------------- | ------------------------- | ------------------- | ------------------- | --------------------------------------------------------------- |
| `mit-ocw-14-121-01` | MIT OCW lecture slides | public PDF    | `licence-review-required` | `checked`           | `not-applicable`    | verified claims only; no content reproduction planned           |
| `mit-ocw-14-123-01` | MIT OCW lecture notes  | public PDF    | `licence-review-required` | `checked`           | `not-applicable`    | terminology corroboration only; no content reproduction planned |

## Source Classification

The approved sources remain verification-only. The future activity uses independently authored exercise content, approved solutions, and original interface work.

## Semester Or Version Evidence

No current semester, lecturer alignment, or official course alignment is asserted. Exercise and storage versions are technical content versions, not university-course versions.

## Lecturer Or Author Evidence

No source author or lecturer approval is implied by this implementation specification.

## Proposed Topic Structure

The activity retains the approved progression from notation and definitions through completeness, transitivity, rationality, error diagnosis, and the derived incompatibility proof.

## Exercise And Solution Mapping

The inventory in Section 3 maps every approved exercise to a response type, bounded evaluator, feedback, retry, reveal, persistence, accessibility, and production representation. Stable exercise IDs and provenance `original` remain mandatory.

## Formula And Definition Inventory

Only the verified weak-preference, strict-preference, indifference, completeness, transitivity, rationality, and derived incompatibility definitions are used. Variables remain alternatives in the stated domain. No utility, graph, optimisation, or other excluded formula enters the implementation.

## Graph And Figure Inventory

No graph, figure, screenshot, or source visual is needed or approved for this activity.

## Source Conflicts

The existing terminology difference is retained: use the 14.121 framing, in which completeness and transitivity jointly support the technical rationality classification. No new source conflict is introduced.

## Missing Material

Missing before implementation: validated production data objects, interaction components, evaluator code, session adapter, accessibility test evidence, and reviewed production wording. Missing before publication: final editorial, accessibility, rights, and publication review.

## Copyright And Publication Assessment

The specification permits only original interface and approved original exercise material. It does not clear source reproduction, adaptation, source PDFs, private materials, quotations, or final publication.

## Candidate First Topic

Candidate: `Preferences and rationality: relation definitions and axioms`. The practice set is ready for a bounded implementation task under this specification.

## Content Transformation Plan

Transform the approved audit exercise data into separate learner-visible, evaluator-only, feedback, and audit metadata objects. Retain stable IDs, claim IDs, source boundaries, original provenance, and approved reasoning; do not transmit private or source material to the client.

## Verification Requirements

Before implementation completion, satisfy the four testing layers in Section 20, verify all state transitions and storage failure paths, compare rendered content with the approved practice set, and confirm that no solution reveal is recorded as correctness.

## Open Questions

- Which narrow, reviewable data schema location best fits the existing Astro content-collection design?
- Can evaluator metadata be loaded only on explicit submission without adding an unnecessary client dependency or new server requirement?

## Publication Blockers

- no production activity exists
- no implementation-level accessibility or responsive evidence exists
- no evaluator, storage, or data-validation implementation exists
- no final publication review has occurred

## Audit Decision

Ready for a bounded implementation task for this twelve-item practice set only. Not approval for production release, grading, wider assessment infrastructure, or publication.

## Review History

| Date         | Reviewer                | Change                                                                                                                                                           | Result                             |
| ------------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `2026-06-19` | `implementation-design` | Defined bounded data, state, evaluation, feedback, persistence, accessibility, component-gap, and test requirements for the independently approved practice set. | `ready-for-bounded-implementation` |
