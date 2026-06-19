# Mikroökonomik I Preference Relations Practice Set 01

This is an internal, audit-stage specification for a small original practice set. It is not production lesson prose, an MDX file, a public exercise bank, or a publication decision. Every item is limited to the verified preference-relations and rationality subset.

## 1. Scope and prerequisites

- Practice-set ID: `mikro1-preferences-practice-set-01`
- Exercise provenance: `original`
- Academic scope: `claim-pref-01`, `claim-pref-02`, `claim-pref-03`, `claim-pref-04`, `claim-pref-05`, and the derived `claim-pref-15` only.
- Required prior knowledge: alternatives may be compared in an ordered pair; `x ≽ y` is the primitive weak-preference relation; strict preference and indifference are derived relations.
- Source basis: `docs/content-audits/mikro1-preferences-claims.md`, `docs/content-audits/mikro1-source-inventory.md`, `docs/content-audits/mikro1-preferences-outline.md`, and `docs/content-audits/mikro1-preferences-rights-review.md`.

The set covers only reading `≽`, `≻`, and `∼`; weak preference; strict preference; indifference; completeness; transitivity; rationality as completeness plus transitivity; and the derived incompatibility of strict preference and indifference for the same ordered pair.

The set excludes utility, representations, geometry, indifference curves, monotonicity, convexity, continuity, local nonsatiation, budget sets, optimisation, demand, numerical utility, graphs, psychological claims about consumers, and geometric non-intersection.

## 2. Exercise-design rules

1. Use only `x ≽ y`, `x ≻ y`, and `x ∼ y` for relations, preserving the left-to-right ordered direction.
2. Treat `≽` as primitive. Define `x ≻ y` by `x ≽ y` and not `y ≽ x`; define `x ∼ y` by both `x ≽ y` and `y ≽ x`.
3. Test completeness by inspecting every unordered pair of distinct alternatives. At least one direction is enough; both directions are allowed and imply indifference under the verified definition. Completeness does not require exactly one direction.
4. Test transitivity only for weak-preference chains: if `x ≽ y` and `y ≽ z`, require `x ≽ z`. The absence of a chain is not a failure.
5. Test rationality in two separate steps: completeness, then transitivity. Use the technical label only when both hold.
6. Every relation table states its domain and whether reflexive comparisons are included. A listed relation is known to hold; an omitted relation is known not to hold only when the prompt says that the list is exhaustive.
7. The final derivation is a relation-level result. It must not invoke curves, geometry, utility, or a behavioural interpretation.

## 3. Originality declaration and review method

All prompts, relation tables, distractors, explanations, and solution sequences below were constructed for this set. They do not reproduce or adapt MIT OCW, private course, textbook, examination, or solution-manual exercises. Standard symbols and the minimal verified formal definitions are used as academic content, not copied expression.

Review method for each item:

1. Map the item to its claim IDs and source locators in the evidence pack.
2. Independently derive the expected answer from those claims.
3. Check that the prompt contains no excluded topic, source-shaped wording, or implied official alignment.
4. Check that a learner can answer from the stated domain and relation information alone.
5. Conduct a second independent solution check before production use.

## 4. Learning-objective map

| Objective ID | Learner can                                                                                     | Claim IDs                        | Exercises                                                  |
| ------------ | ----------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------- |
| `lo-pref-01` | read the direction and meaning of `≽`, `≻`, and `∼` without adding unstated reverse comparisons | `claim-pref-01`, `claim-pref-02` | `pref-practice-01`, `pref-practice-02`                     |
| `lo-pref-02` | distinguish primitive weak preference from derived strict preference and indifference           | `claim-pref-02`                  | `pref-practice-03`, `pref-practice-04`                     |
| `lo-pref-03` | test completeness over all distinct pairs in an explicit domain                                 | `claim-pref-03`                  | `pref-practice-05`, `pref-practice-06`                     |
| `lo-pref-04` | test weak-preference transitivity through every applicable chain                                | `claim-pref-04`                  | `pref-practice-07`, `pref-practice-08`                     |
| `lo-pref-05` | classify rationality only after separately checking completeness and transitivity               | `claim-pref-05`                  | `pref-practice-09`, `pref-practice-10`, `pref-practice-11` |
| `lo-pref-06` | derive why strict preference and indifference cannot both hold for the same ordered pair        | `claim-pref-15`                  | `pref-practice-12`                                         |

## 5. Exercise set

The sequence progresses from recognition (`01`-`04`) to application (`05`-`10`) to transfer (`11`-`12`).

### `pref-practice-01`: Read a weak comparison

- Learning objective: `lo-pref-01`
- Claim IDs: `claim-pref-01`, `claim-pref-02`
- Prerequisites: none
- Format: short answer
- Difficulty: `foundation`
- Prompt: What does `x ≽ y` state? State only what follows from this displayed relation.
- Expected answer: `x` is weakly preferred to `y`; it does not by itself state whether `y ≽ x` holds.
- Full solution and reasoning: see `pref-practice-01` in Section 6.
- Common wrong answer: “`x` is strictly preferred to `y`.”
- Misconception diagnosed: weak preference rules out the reverse comparison.
- Originality note: a newly written symbol-reading prompt using only standard notation.
- Source dependency note: direct definition and primitive-relation framing from `claim-pref-01` and `claim-pref-02`; see `locator-mit-121-01`.
- Implementation notes: present as one text input with an accessible sample answer after submission; do not require symbol entry.

### `pref-practice-02`: Read the derived relations

- Learning objective: `lo-pref-01`
- Claim IDs: `claim-pref-02`
- Prerequisites: `pref-practice-01`
- Format: multiple choice with explanation
- Difficulty: `foundation`
- Prompt: Which statement is correct?

  A. `x ≻ y` means `x ≽ y` and `y ≽ x`.

  B. `x ∼ y` means `x ≽ y` and `y ≽ x`.

  C. `x ∼ y` means that neither `x ≽ y` nor `y ≽ x` holds.

  D. `x ≻ y` means only that `x ≽ y` holds.

- Expected answer: B.
- Full solution and reasoning: see `pref-practice-02` in Section 6.
- Common wrong answer: A.
- Misconception diagnosed: strict preference and indifference have their conditions reversed.
- Originality note: original distractors test the verified conditions rather than reproduce a source question.
- Source dependency note: direct derived-relation definitions in `claim-pref-02`; see `locator-mit-121-01` and `locator-mit-123-02`.
- Implementation notes: use native radio buttons and reveal the explanation in the same document flow.

### `pref-practice-03`: Classify a stated pair

- Learning objective: `lo-pref-02`
- Claim IDs: `claim-pref-02`
- Prerequisites: `pref-practice-01`, `pref-practice-02`
- Format: true or false with justification
- Difficulty: `foundation`
- Prompt: True or false: if both `x ≽ y` and `y ≽ x` hold, then `x ≻ y` holds. Justify in one or two sentences.
- Expected answer: False. The two weak comparisons establish `x ∼ y`; strict preference would additionally require that `y ≽ x` does not hold.
- Full solution and reasoning: see `pref-practice-03` in Section 6.
- Common wrong answer: True, because `x ≽ y` is read as strict preference.
- Misconception diagnosed: weak preference is confused with strict preference.
- Originality note: original classification statement with an independently constructed contrast.
- Source dependency note: direct definitions in `claim-pref-02`; see `locator-mit-121-01`.
- Implementation notes: use a native true/false radio group followed by an optional text area for reasoning.

### `pref-practice-04`: Match conditions to relations

- Learning objective: `lo-pref-02`
- Claim IDs: `claim-pref-02`
- Prerequisites: `pref-practice-01` through `pref-practice-03`
- Format: definition matching
- Difficulty: `foundation`
- Prompt: Match each condition to the relation it defines.

  1. `x ≽ y` and not `y ≽ x`

  2. `x ≽ y` and `y ≽ x`

  3. the primitive relation used for pairwise comparison

  Relations: `x ≻ y`, `x ∼ y`, `x ≽ y`.

- Expected answer: 1 -> `x ≻ y`; 2 -> `x ∼ y`; 3 -> `x ≽ y`.
- Full solution and reasoning: see `pref-practice-04` in Section 6.
- Common wrong answer: 1 -> `x ∼ y`.
- Misconception diagnosed: indifference is inferred from a single weak comparison or from the wrong reverse condition.
- Originality note: original matching structure and ordering.
- Source dependency note: direct definitions in `claim-pref-02`; see `locator-mit-121-01` and `locator-mit-123-02`.
- Implementation notes: use a keyboard-operable native select per condition rather than drag-and-drop.

### `pref-practice-05`: Check a complete relation

- Learning objective: `lo-pref-03`
- Claim IDs: `claim-pref-03`
- Prerequisites: `pref-practice-01` through `pref-practice-04`
- Format: relation table, short answer
- Difficulty: `intermediate`
- Prompt: The domain is `{x, y, z}`. The following exhaustive list gives all weak comparisons between distinct alternatives that hold: `x ≽ y`, `y ≽ x`, `x ≽ z`, `z ≽ y`. All reflexive comparisons are included but omitted from the display. Is the relation complete over this domain? List the unordered pairs you checked.
- Expected answer: Yes. The distinct unordered pairs are `{x, y}`, `{x, z}`, and `{y, z}`. They have at least one stated direction: both for `{x, y}`, `x ≽ z` for `{x, z}`, and `z ≽ y` for `{y, z}`.
- Full solution and reasoning: see `pref-practice-05` in Section 6.
- Common wrong answer: No, because both directions hold for `{x, y}`.
- Misconception diagnosed: completeness requires exactly one comparison direction.
- Originality note: original domain and exhaustive relation list.
- Source dependency note: direct completeness definition in `claim-pref-03`; see `locator-mit-121-02` and `locator-mit-123-01`.
- Implementation notes: show the domain before the table; provide three labelled pair rows and a free-text conclusion.

### `pref-practice-06`: Identify an incomplete relation

- Learning objective: `lo-pref-03`
- Claim IDs: `claim-pref-03`
- Prerequisites: `pref-practice-05`
- Format: relation table, multiple choice with justification
- Difficulty: `intermediate`
- Prompt: The domain is `{x, y, z}`. The following exhaustive list gives all weak comparisons between distinct alternatives that hold: `x ≽ y`, `z ≽ y`. All reflexive comparisons are included but omitted from the display. Which conclusion is supported?

  A. Complete, because every alternative appears in a comparison.

  B. Complete, because neither pair has both directions.

  C. Not complete, because neither `x ≽ z` nor `z ≽ x` holds.

  D. Not transitive, because `x ≽ z` is missing.

- Expected answer: C.
- Full solution and reasoning: see `pref-practice-06` in Section 6.
- Common wrong answer: D.
- Misconception diagnosed: a missing comparison for completeness is confused with a missing conclusion from an actual transitivity chain.
- Originality note: original exhaustive table and distractors.
- Source dependency note: direct completeness definition in `claim-pref-03`; see `locator-mit-121-02`.
- Implementation notes: include the word “exhaustive” in visible text and provide a text field for the chosen pair.

### `pref-practice-07`: Check transitivity through all chains

- Learning objective: `lo-pref-04`
- Claim IDs: `claim-pref-04`
- Prerequisites: `pref-practice-05`
- Format: relation table, short answer
- Difficulty: `intermediate`
- Prompt: The domain is `{x, y, z}`. The relation contains every reflexive comparison and exactly these non-reflexive weak comparisons: `x ≽ y`, `y ≽ z`, `x ≽ z`. Is it transitive? Identify every non-reflexive two-step chain and its required conclusion.
- Expected answer: Yes. The only non-reflexive two-step chain is `x ≽ y` and `y ≽ z`; its required conclusion `x ≽ z` is present. No other non-reflexive two-step chain is available, so no further conclusion is required.
- Full solution and reasoning: see `pref-practice-07` in Section 6.
- Common wrong answer: No, because `z ≽ x` is absent.
- Misconception diagnosed: the absence of a reverse relation is treated as a transitivity failure without a chain.
- Originality note: original relation table created for the chain check.
- Source dependency note: direct weak-preference transitivity axiom in `claim-pref-04`; see `locator-mit-121-02` and `locator-mit-123-01`.
- Implementation notes: offer an accessible table with columns for first premise, second premise, and conclusion; allow “no additional chain.”

### `pref-practice-08`: Find a transitivity violation

- Learning objective: `lo-pref-04`
- Claim IDs: `claim-pref-04`
- Prerequisites: `pref-practice-07`
- Format: relation table, short answer
- Difficulty: `intermediate`
- Prompt: The domain is `{x, y, z}`. The relation contains every reflexive comparison and exactly these non-reflexive weak comparisons: `x ≽ y`, `y ≽ z`. Is it transitive? Give a concrete violating triple.
- Expected answer: No. For the triple `(x, y, z)`, `x ≽ y` and `y ≽ z` hold, but the exhaustive list says `x ≽ z` does not hold. This violates weak-preference transitivity.
- Full solution and reasoning: see `pref-practice-08` in Section 6.
- Common wrong answer: “Not complete, therefore not transitive.”
- Misconception diagnosed: completeness and transitivity are treated as the same condition.
- Originality note: original minimal relation example and requested triple.
- Source dependency note: direct weak-preference transitivity axiom in `claim-pref-04`; see `locator-mit-121-02`.
- Implementation notes: require a triple selection with native selects plus a text explanation; do not ask learners to infer omitted relations where the list is not stated exhaustive.

### `pref-practice-09`: Separate the two rationality checks

- Learning objective: `lo-pref-05`
- Claim IDs: `claim-pref-03`, `claim-pref-04`, `claim-pref-05`
- Prerequisites: `pref-practice-05` through `pref-practice-08`
- Format: true or false with justification
- Difficulty: `intermediate`
- Prompt: True or false: a relation is rational whenever it is complete. Justify by naming the additional condition, if any.
- Expected answer: False. Under the verified 14.121 framing, a relation is rational only when it is both complete and transitive. Completeness alone does not establish transitivity.
- Full solution and reasoning: see `pref-practice-09` in Section 6.
- Common wrong answer: True, because all pairs can be compared.
- Misconception diagnosed: technical rationality is reduced to comparability alone.
- Originality note: original statement that tests the conjunction without using a source example.
- Source dependency note: direct completeness, transitivity, and rationality claims `claim-pref-03` through `claim-pref-05`; see `locator-mit-121-02`.
- Implementation notes: use native radio buttons and a short justification input; show “technical sense” in the feedback, not as a claim about ordinary behaviour.

### `pref-practice-10`: Classify a relation on both axioms

- Learning objective: `lo-pref-05`
- Claim IDs: `claim-pref-03`, `claim-pref-04`, `claim-pref-05`
- Prerequisites: `pref-practice-05` through `pref-practice-09`
- Format: relation table, multiple choice with reasoning
- Difficulty: `intermediate`
- Prompt: The domain is `{x, y, z}`. The relation contains every reflexive comparison and exactly these non-reflexive weak comparisons: `x ≽ y`, `y ≽ x`, `x ≽ z`, `z ≽ x`, `y ≽ z`, `z ≽ y`. Which classification is correct?

  A. Complete and transitive; therefore rational.

  B. Complete but not transitive; therefore not rational.

  C. Transitive but not complete; therefore not rational.

  D. Neither complete nor transitive.

- Expected answer: A. Each distinct pair has at least one direction, so the relation is complete. Because both directions hold for every pair, any weak-preference chain has its required endpoint comparison; it is transitive. Therefore it is rational in the verified technical sense.
- Full solution and reasoning: see `pref-practice-10` in Section 6.
- Common wrong answer: B, because the learner assumes mutual comparisons create a contradiction.
- Misconception diagnosed: indifference-like mutual comparison is treated as incompatible with transitivity or completeness.
- Originality note: original exhaustive relation table with a complete bidirectional structure.
- Source dependency note: direct axioms and rationality definition in `claim-pref-03` through `claim-pref-05`; see `locator-mit-121-02`.
- Implementation notes: require separate “complete?” and “transitive?” controls before the final classification; native radio buttons are sufficient.

### `pref-practice-11`: Diagnose an overconfident classification

- Learning objective: `lo-pref-05`
- Claim IDs: `claim-pref-03`, `claim-pref-04`, `claim-pref-05`
- Prerequisites: `pref-practice-05` through `pref-practice-10`
- Format: error diagnosis
- Difficulty: `transfer`
- Prompt: The domain is `{x, y, z}`. The relation contains every reflexive comparison and exactly these non-reflexive weak comparisons: `x ≽ y`, `y ≽ z`, `x ≽ z`, `z ≽ x`, `z ≽ y`. A learner writes: “The relation is rational because every distinct pair is comparable.” Diagnose the conclusion. State whether completeness holds, whether transitivity holds, and the smallest repair to the learner’s reasoning.
- Expected answer: The conclusion is incorrect. Completeness holds: `{x, y}` has `x ≽ y`, `{x, z}` has both directions, and `{y, z}` has both directions. Transitivity fails because `y ≽ z` and `z ≽ x` hold while `y ≽ x` does not hold in the exhaustive list. The repair is to test transitivity separately before applying the technical rationality label.
- Full solution and reasoning: see `pref-practice-11` in Section 6.
- Common wrong answer: “The relation is not complete because `y ≽ x` is missing.”
- Misconception diagnosed: insufficient or reversed evidence is confused with a demonstrated failure, and rationality is assigned after only one axiom.
- Originality note: original relation structure, learner statement, and diagnosis task.
- Source dependency note: direct axioms and rationality definition in `claim-pref-03` through `claim-pref-05`; see `locator-mit-121-02` and `locator-mit-123-01`.
- Implementation notes: present the learner statement as quoted learner work, not as a claim by the platform; provide three labelled response areas: completeness, transitivity, repair.

### `pref-practice-12`: Derive the incompatibility

- Learning objective: `lo-pref-06`
- Claim IDs: `claim-pref-02`, `claim-pref-15`
- Prerequisites: `pref-practice-02` through `pref-practice-04`
- Format: formal derivation
- Difficulty: `transfer`
- Prompt: Prove that `x ≻ y` and `x ∼ y` cannot both hold for the same ordered pair. Use only these definitions:

  `x ≻ y` if and only if `x ≽ y` and not `y ≽ x`.

  `x ∼ y` if and only if `x ≽ y` and `y ≽ x`.

- Expected answer: a derivation ending in the contradiction between `y ≽ x` and not `y ≽ x`.
- Full solution and reasoning: see `pref-practice-12` in Section 6.
- Common wrong answer: an argument about intersecting curves or an appeal to transitivity.
- Misconception diagnosed: the relation-level derivation is replaced by excluded geometry or an irrelevant axiom.
- Originality note: original proof prompt based only on the verified definitions and the audit’s required contradiction structure.
- Source dependency note: `claim-pref-15` is a derived result from the directly verified definitions in `claim-pref-02`; premises use `locator-mit-121-01` and `locator-mit-123-02`.
- Implementation notes: provide a numbered proof editor or ordered text fields; do not require mathematical handwriting or drag-and-drop.

## 6. Fully worked solutions

### `pref-practice-01`

`x ≽ y` states that `x` is weakly preferred to `y`. The displayed relation alone does not establish `y ≽ x`, so it does not establish indifference; it also does not establish strict preference. The wrong strict reading adds the unverified condition that `y ≽ x` does not hold.

### `pref-practice-02`

**Correct answer: B.** `x ∼ y` is defined by both `x ≽ y` and `y ≽ x`. A states the condition for strict preference incorrectly: it supplies the reverse comparison rather than its negation. C confuses indifference with lack of comparability. D omits the necessary “not `y ≽ x`” condition for strict preference.

### `pref-practice-03`

**False.** Both `x ≽ y` and `y ≽ x` are exactly the conditions for `x ∼ y`. For `x ≻ y`, the first comparison is needed, but the reverse comparison must not hold. Here it does hold, so the strict conclusion is unavailable.

### `pref-practice-04`

1 maps to `x ≻ y`: weak preference holds in the stated direction and the reverse does not.

2 maps to `x ∼ y`: weak preference holds in both directions.

3 maps to `x ≽ y`: it is the primitive relation from which the other two are derived.

The key distinction is that the derived relations add conditions to the primitive weak relation; they are not interchangeable labels.

### `pref-practice-05`

**Complete.** Check all unordered pairs of distinct alternatives:

| Pair     | Stated direction or directions | Completeness condition met? |
| -------- | ------------------------------ | --------------------------- |
| `{x, y}` | `x ≽ y` and `y ≽ x`            | yes                         |
| `{x, z}` | `x ≽ z`                        | yes                         |
| `{y, z}` | `z ≽ y`                        | yes                         |

Every pair has at least one comparison direction. The two directions for `{x, y}` are permitted; by the derived definition they establish `x ∼ y`, rather than contradicting completeness.

### `pref-practice-06`

**Correct answer: C.** The pair `{x, z}` has no weak comparison in either direction, because the list is exhaustive. That directly violates completeness. A is insufficient because appearing somewhere is not the same as being comparable with every other alternative. B mistakes “at least one” for “exactly one.” D is unsupported: no chain `x ≽ ?` and `? ≽ z` has been supplied, so the missing `x ≽ z` is not a demonstrated transitivity failure.

### `pref-practice-07`

**Transitive.** The non-reflexive chain is:

| First premise | Second premise | Required conclusion | Present? |
| ------------- | -------------- | ------------------- | -------- |
| `x ≽ y`       | `y ≽ z`        | `x ≽ z`             | yes      |

There is no comparison beginning with `z` and no comparison into `x` that would form another non-reflexive two-step chain. Missing reverse comparisons do not matter without applicable premises.

### `pref-practice-08`

**Not transitive.** Use the concrete triple `(x, y, z)`:

1. `x ≽ y` holds.
2. `y ≽ z` holds.
3. Transitivity would require `x ≽ z`.
4. The list is exhaustive and does not include `x ≽ z`.

Therefore weak-preference transitivity fails. This conclusion comes from a specific failed chain, not merely from the relation’s completeness status.

### `pref-practice-09`

**False.** Completeness says every pair can be compared in at least one weak-preference direction. Rationality in the verified technical framing requires both completeness and transitivity. A complete relation can still fail a required weak-preference chain, so completeness alone is insufficient.

### `pref-practice-10`

**Correct answer: A.** For completeness, every distinct pair has both comparison directions. For transitivity, take any chain `a ≽ b` and `b ≽ c` over the displayed domain: the endpoint relation `a ≽ c` is also present because every ordered pair is present. The relation therefore satisfies completeness and transitivity, hence is rational in the specified technical sense. Mutual comparisons are not a contradiction; they support indifference for the corresponding pair.

### `pref-practice-11`

The learner has completed only the completeness part of the test.

**Completeness:** yes.

| Pair     | Available direction or directions |
| -------- | --------------------------------- |
| `{x, y}` | `x ≽ y`                           |
| `{x, z}` | `x ≽ z`, `z ≽ x`                  |
| `{y, z}` | `y ≽ z`, `z ≽ y`                  |

**Transitivity:** no. `y ≽ z` and `z ≽ x` are present, so transitivity requires `y ≽ x`. The list is exhaustive and does not contain `y ≽ x`; the triple `(y, z, x)` is a concrete violation.

**Repair:** retain the completeness observation, then test each applicable weak-preference chain. Because transitivity fails, the relation is not rational in the technical sense. The missing `y ≽ x` is evidence of failure here only because the two required premises are actually present.

### `pref-practice-12`

This is a **derived result**, not a direct quotation.

1. Assume for contradiction that both `x ≻ y` and `x ∼ y` hold.
2. From `x ≻ y`, the strict-preference definition gives `x ≽ y` and not `y ≽ x`.
3. From `x ∼ y`, the indifference definition gives `x ≽ y` and `y ≽ x`.
4. Steps 2 and 3 require both `y ≽ x` and not `y ≽ x`.
5. This is a contradiction. Therefore `x ≻ y` and `x ∼ y` cannot both hold for the same ordered pair.

Transitivity is not needed, and no conclusion about curves or geometry follows from this bounded derivation.

## 7. Misconception diagnostics

| Diagnostic ID | Misconception                                                     | Exercises that expose it | Correct repair                                               |
| ------------- | ----------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------ |
| `mis-pref-01` | weak preference is read as strict preference                      | `01`, `03`, `04`         | preserve the reverse-comparison question                     |
| `mis-pref-02` | indifference means missing information                            | `02`, `04`               | require both weak-comparison directions                      |
| `mis-pref-03` | comparability means strict preference                             | `05`, `06`               | completeness needs at least one direction; both are allowed  |
| `mis-pref-04` | completeness and transitivity are the same test                   | `06`, `08`, `09`, `11`   | inspect pairs for completeness and chains for transitivity   |
| `mis-pref-05` | rational is an ordinary behavioural or moral label                | `09`, `10`, `11`         | apply the technical conjunction only                         |
| `mis-pref-06` | relation direction can be reversed without changing meaning       | `01`, `05`, `07`, `11`   | retain the ordered left-to-right pair                        |
| `mis-pref-07` | a missing relation alone proves transitivity failure              | `06`, `07`, `11`         | identify an actual two-step chain and missing endpoint       |
| `mis-pref-08` | the strict/indifference conflict is directly sourced or geometric | `12`                     | label it derived from definitions and show the contradiction |

## 8. Difficulty and dependency review

| Difficulty     | Required count | Exercises | Dependency review                                                           |
| -------------- | -------------- | --------- | --------------------------------------------------------------------------- |
| `foundation`   | 4              | `01`-`04` | recognition of notation and definitions only                                |
| `intermediate` | 6              | `05`-`10` | applies pair checks, chain checks, and two-axiom classification             |
| `transfer`     | 2              | `11`-`12` | `11` combines completeness and transitivity; `12` derives the contradiction |

The distribution is 4 foundation, 6 intermediate, and 2 transfer items. `pref-practice-12` is the final transfer item. No item depends on a utility representation, graph, or unverified claim.

## 9. Academic verification review

| Exercise | Academic gate                                        | Claim status | Verification result                                  | Independent solution check |
| -------- | ---------------------------------------------------- | ------------ | ---------------------------------------------------- | -------------------------- |
| `01`     | weak relation read without added conditions          | direct       | supported by `claim-pref-01`, `claim-pref-02`        | complete                   |
| `02`     | derived strict and indifference conditions           | direct       | supported by `claim-pref-02`                         | complete                   |
| `03`     | mutual weak preference classified correctly          | direct       | supported by `claim-pref-02`                         | complete                   |
| `04`     | primitive and derived relations matched              | direct       | supported by `claim-pref-02`                         | complete                   |
| `05`     | all distinct unordered pairs checked                 | direct       | supported by `claim-pref-03`                         | complete                   |
| `06`     | missing pair distinguished from missing chain        | direct       | supported by `claim-pref-03`                         | complete                   |
| `07`     | every applicable weak chain checked                  | direct       | supported by `claim-pref-04`                         | complete                   |
| `08`     | concrete violating weak-preference triple supplied   | direct       | supported by `claim-pref-04`                         | complete                   |
| `09`     | completeness and transitivity required jointly       | direct       | supported by `claim-pref-05`                         | complete                   |
| `10`     | both axioms checked before classification            | direct       | supported by `claim-pref-03` through `claim-pref-05` | complete                   |
| `11`     | complete relation separately tested for transitivity | direct       | supported by `claim-pref-03` through `claim-pref-05` | complete                   |
| `12`     | contradiction derived from definitions only          | derived      | supported by `claim-pref-15` and its direct premises | complete                   |

Direct-source items rely on the approved MIT locators documented in the claims pack: `locator-mit-121-01`, `locator-mit-121-02`, `locator-mit-123-01`, and `locator-mit-123-02`. The terminology convention follows the 14.121 framing: a general weak relation is not called rational unless it satisfies both axioms.

## 10. Rights and originality review

| Exercise range | Provenance             | Source-expression use                                       | Rights result                                           | Required production check                                               |
| -------------- | ---------------------- | ----------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------- |
| `01`-`11`      | original               | standard symbols and independently phrased definitions only | acceptable for bounded drafting under the rights review | second reviewer checks source-distance and solution independence        |
| `12`           | original derived proof | minimal formal definitions, labelled as derivation          | acceptable for bounded drafting under the rights review | second reviewer confirms no source proof wording or geometric expansion |

No source PDF, course exercise, private material, source figure, or source solution is included. MIT material remains verification-only. The set must not be represented as official university, lecturer, MIT, or course material.

## 11. Accessibility and wording review

| Exercise range   | Accessibility gate                                                                     | Wording gate                                                           | Result                           |
| ---------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------- |
| `01`, `03`, `09` | answerable with native radio or text controls                                          | no ordinary-language meaning of rationality implied                    | ready for bounded implementation |
| `02`, `06`, `10` | native radio groups; answer choices remain visible in reading order                    | each distractor changes one verified condition only                    | ready for bounded implementation |
| `04`             | keyboard-operable native selects, not drag-and-drop                                    | condition and relation labels are explicit                             | ready for bounded implementation |
| `05`-`08`, `11`  | explicit domain, exhaustive-list status, and reflexive-comparison status precede table | missing evidence is not called a failure without the stated conditions | ready for bounded implementation |
| `12`             | numbered text fields or an ordered text response; no handwriting requirement           | derived status and exact scope are explicit                            | ready for bounded implementation |

Production must preserve semantic headings, logical reading order, keyboard operation, visible focus, adequate contrast, and usability at 320 CSS pixels. Essential feedback must not depend on colour, hover, or client-side JavaScript.

## 12. Implementation requirements

No production implementation is created by this audit. When a bounded implementation task begins, each item must keep its stable exercise ID and use its stated production format:

| Exercise         | Likely production format   | Required support                                   | Current gap                                     |
| ---------------- | -------------------------- | -------------------------------------------------- | ----------------------------------------------- |
| `01`             | short-answer check         | sample-answer comparison or manual reveal          | feedback behaviour not designed                 |
| `02`, `06`, `10` | multiple choice            | native radio-group feedback and explanation        | scoring policy not designed                     |
| `03`, `09`       | true/false plus reasoning  | native radio group and optional text input         | reasoning review policy not designed            |
| `04`             | matching                   | native selects with labelled options               | response-state design not designed              |
| `05`, `07`, `08` | relation-table analysis    | semantic table and labelled answer fields          | table component and checking logic not designed |
| `11`             | structured error diagnosis | three labelled responses and detailed reveal       | support for partial feedback not designed       |
| `12`             | formal derivation          | ordered accessible inputs and complete model proof | validation and feedback design not designed     |

Implementation must use shared components, progressive enhancement, semantic HTML, and safe browser-storage handling. It must not add accounts, cloud synchronisation, AI tutoring, gamification, or JavaScript-dependent navigation.

## 13. Remaining blockers

- A second human reviewer has not yet independently checked the final written item set against the verified claims.
- Production interaction, feedback, persistence, scoring, and review scheduling are not designed.
- No production accessibility review or 320 CSS-pixel test has occurred.
- This audit does not clear publication; it clears only a bounded original-practice implementation task.
- The source inventory remains the authority for broader topic boundaries and any later source-state changes.

## 14. Readiness decision

**Result: `ready-for-bounded-implementation`.**

All 12 items are within the verified claim set; every direct item has an inspectable audit citation; the one derived item shows the complete contradiction; relation tables state domain, exhaustiveness, and reflexive-comparison treatment; the required difficulty distribution is satisfied; and no source material is copied or adapted. Production remains gated on the second-review, interaction, accessibility, and publication checks listed above.

## Audit Identity

- Audit ID: `mikro1-preferences-practice-set-01`
- Audit status: `topic-selected`
- Review owner: `exercise-design`
- Last updated: `2026-06-19`

## Module Identity

- Module ID: `module-mikro1-candidate`
- Module title: `Mikroökonomik I`
- Institution context: `Georg-August-Universität Göttingen`
- Official affiliation: `Independent platform, not an official university offer`

## Audit Scope

This audit specifies original practice and solution material for the verified preference-relations and rationality subset. It does not expand the source-backed outline or create a learner-facing page.

## Audit Status

- Current state: `topic-selected`
- Previous state: `source-checked`
- Next valid state: `ready-for-drafting`
- Blockers: second-review, implementation, accessibility, and publication checks

## Private-Source Location Reference

- Private collection key: `external-course-materials/mikro1`
- Private-source use: none in this set; the private audit remains alignment-only

## Sanitised File Inventory

| Source ID           | Source type            | File category | Rights status             | Source verification | Exercise provenance | Notes                                                |
| ------------------- | ---------------------- | ------------- | ------------------------- | ------------------- | ------------------- | ---------------------------------------------------- |
| `mit-ocw-14-121-01` | MIT OCW lecture slides | public PDF    | `licence-review-required` | `checked`           | `not-applicable`    | verification only; no expression or exercises reused |
| `mit-ocw-14-123-01` | MIT OCW lecture notes  | public PDF    | `licence-review-required` | `checked`           | `not-applicable`    | verification only; terminology comparison only       |

## Source Classification

The MIT sources are authoritative verification sources for the formal claims. This practice set is original platform material that uses the verified audit layer, not source exercises or source wording.

## Semester Or Version Evidence

No current-semester, course-semester, or lecturer alignment is asserted. MIT terms identify source documents only; they do not establish alignment with a current local offering.

## Lecturer Or Author Evidence

MIT authors and course instructors are bibliographic metadata in the claims pack only. This set asserts no author approval, lecturer approval, or institutional endorsement.

## Proposed Topic Structure

The practice set maps to the verified outline sections for weak preference, strict preference, indifference, completeness, transitivity, rationality, and the derived incompatibility result. It introduces no further topic group.

## Exercise And Solution Mapping

All twelve exercises are `original`, have a written expected answer and full solution in this file, and require a second independent review before production. `pref-practice-12` is explicitly `derived`; all other items apply direct source-backed claims.

## Formula And Definition Inventory

| Definition ID                 | Use in set                                         | Claim status | Variable status                                     | Review status |
| ----------------------------- | -------------------------------------------------- | ------------ | --------------------------------------------------- | ------------- |
| `def-pref-weak`               | primitive `x ≽ y`                                  | direct       | `x`, `y` are alternatives in the stated domain      | checked       |
| `def-pref-strict`             | `x ≻ y` iff `x ≽ y` and not `y ≽ x`                | direct       | `x`, `y` are alternatives in the stated domain      | checked       |
| `def-pref-indifference`       | `x ∼ y` iff `x ≽ y` and `y ≽ x`                    | direct       | `x`, `y` are alternatives in the stated domain      | checked       |
| `def-pref-completeness`       | at least one weak direction for each distinct pair | direct       | alternatives are stated by each table domain        | checked       |
| `def-pref-transitivity`       | weak-preference chain implication                  | direct       | `x`, `y`, `z` are alternatives in the stated domain | checked       |
| `result-pref-incompatibility` | strict preference and indifference conflict        | derived      | same ordered pair `x`, `y`                          | checked       |

## Graph And Figure Inventory

No graph, figure, diagram, screenshot, or visual is used or required. Graph work remains outside scope.

## Source Conflicts

| Conflict ID                    | Source IDs                               | Issue                                                       | Chosen interpretation                                                             | Status                           |
| ------------------------------ | ---------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------- |
| `conflict-pref-terminology-01` | `mit-ocw-14-121-01`, `mit-ocw-14-123-01` | 14.123 uses “preference relation” more narrowly than 14.121 | follow 14.121: rationality is a property imposed by completeness and transitivity | documented, no exercise conflict |

## Missing Material

Missing before production: second-review record, interaction and feedback design, accessibility test evidence, progress and review integration, and final publication review.

## Copyright And Publication Assessment

Intended source usage is `Original platform material`. The questions, relation tables, solutions, and explanations are original and do not reproduce MIT or private materials. The rights review permits bounded original drafting but not source reproduction, adaptation, or publication without the remaining checks.

## Candidate First Topic

Candidate: `Preferences and rationality: relation definitions and axioms`. The candidate is sufficient for a bounded original-practice implementation task, but not for publication.

## Content Transformation Plan

Carry stable exercise IDs and original wording into a future practice format; retain claim IDs as internal traceability metadata; keep MIT and private material out of learner-facing assets; and subject every production solution and feedback explanation to second review.

## Verification Requirements

Before production use:

1. Independently re-solve all twelve items and record the reviewer.
2. Confirm each rendered item retains its claim IDs, prerequisites, difficulty, and originality note.
3. Test all relation tables for domain clarity, exhaustive-list wording, pair coverage, and chain coverage.
4. Test keyboard-only operation, native controls, feedback reading order, focus states, and 320 CSS-pixel layout.
5. Confirm no source PDF, private material, quotation, visual, or adapted exercise enters the change.

## Open Questions

- What bounded review-evidence model should record item completion and confidence without treating page views as mastery?
- What feedback granularity is appropriate for short answers and derivations in version one without AI tutoring?

## Publication Blockers

- no learner-facing implementation exists
- no recorded second independent exercise review exists
- no production accessibility validation exists
- no publication-level editorial and rights review exists

## Audit Decision

Ready for bounded implementation of original practice interactions after the named second-review and production checks. Not ready for publication.

## Review History

| Date         | Reviewer          | Change                                                                                                            | Result                             |
| ------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `2026-06-19` | `exercise-design` | Created a 12-item original practice set and worked solutions within the verified relation-and-rationality subset. | `ready-for-bounded-implementation` |
