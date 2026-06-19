# Mikroökonomik I Preference Relations Outline

This is a source-backed instructional outline for a bounded subset of the Mikroökonomik I preference topic. It is not production lesson prose, a public topic record, an exercise bank, or a publication decision.

## Scope statement

Included only:

- alternatives and the comparison problem
- preference relation and weak preference
- strict preference as derived from weak preference
- indifference as derived from weak preference
- completeness and transitivity as axioms on the relation
- rational preference relation as the technical conjunction of completeness and transitivity
- the derived incompatibility of strict preference and indifference for the same ordered pair

The outline uses the 14.121 distinction: a weak-preference relation is a binary relation on a defined domain, and it is rational only when it satisfies completeness and transitivity. The narrower 14.123 terminology is recorded as a source-language difference, not adopted as a reason to treat every relation as rational.

## Explicit exclusions

This outline excludes utility functions, utility representation, continuity, monotonicity, convexity, local nonsatiation, indifference-curve geometry, budget sets, consumer optimisation, demand, formulas beyond the verified relation definitions, and any unqualified geometric non-intersection claim.

No source exercise, source example, graph, private course file, or source PDF is reproduced or committed.

## Source basis

| Source ID           | Inspectable source                                                                                                                                                                                                                                                                  | Verified audit locators used                                                                                                   | Bounded use                                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| `mit-ocw-14-121-01` | MIT OpenCourseWare, 14.121 _Microeconomic Theory I_, Fall 2015, “Lectures 1-2: Choice, Preference, and Utility,” Alexander Wolitzky and Alan Olivi. [PDF](https://ocw.mit.edu/courses/14-121-microeconomic-theory-i-fall-2015/b89cf6eb8d2118d015d4e41278ede14a_MIT14_121F15_1S.pdf) | `locator-mit-121-01` (PDF p7, printed slide 7); `locator-mit-121-02` (PDF p8, printed slide 8)                                 | primary source for the binary relation, derived relations, completeness, transitivity, and technical rationality |
| `mit-ocw-14-123-01` | MIT OpenCourseWare, 14.123 _Microeconomic Theory III_, Spring 2015, Chapter 1, “Theory of Choice,” Muhamet Yildiz. [PDF](https://ocw.mit.edu/courses/14-123-microeconomic-theory-iii-spring-2015/a03ee2dcc7d1729d563f9333b4526586_MIT14_123S15_Chap1.pdf)                           | `locator-mit-123-01` (PDF p2, printed p2, section 1.3, Definition 1.2); `locator-mit-123-02` (PDF p3, printed p3, section 1.4) | corroboration of definitions and notation; terminology comparison                                                |

Source use is `Reference only`. The outline paraphrases the verified records and uses only minimal formal notation necessary to distinguish the definitions.

## Dependency map

| Order | Outline dependency                  | Required earlier knowledge                     | Audit support                                                                  |
| ----- | ----------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------ |
| 1     | alternatives and ordered comparison | none                                           | `concept-pref-01`, `claim-pref-01`; `locator-mit-121-01`                       |
| 2     | weak preference relation            | alternatives and ordered comparison            | `concept-pref-02`, `concept-pref-04`, `claim-pref-01`; `locator-mit-121-01`    |
| 3     | strict preference                   | weak preference                                | `concept-pref-03`, `claim-pref-02`; `locator-mit-121-01`, `locator-mit-123-02` |
| 4     | indifference                        | weak preference                                | `concept-pref-05`, `claim-pref-02`; `locator-mit-121-01`, `locator-mit-123-02` |
| 5     | completeness                        | weak preference and its domain                 | `concept-pref-09`, `claim-pref-03`; `locator-mit-121-02`, `locator-mit-123-01` |
| 6     | transitivity                        | weak preference and three ordered comparisons  | `concept-pref-10`, `claim-pref-04`; `locator-mit-121-02`, `locator-mit-123-01` |
| 7     | rationality                         | completeness and transitivity                  | `claim-pref-05`; `locator-mit-121-02`                                          |
| 8     | incompatibility derivation          | strict preference and indifference definitions | `claim-pref-15`; `locator-mit-121-01`, `locator-mit-123-02`                    |

The dependency order is intentional: strict preference and indifference are not introduced as primitive relations, and rationality follows rather than precedes its two axioms.

## Notation table

| Symbol        | Meaning in this outline                                       | Introduction rule                                                               | Audit basis                                                                    |
| ------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `x`, `y`, `z` | alternatives in the domain over which the relation is defined | introduce as labels before any comparison                                       | `concept-pref-01`; `locator-mit-121-01`                                        |
| `x ≽ y`       | `x` is weakly preferred to `y`                                | introduce before strict preference, indifference, completeness, or transitivity | `concept-pref-04`, `claim-pref-02`; `locator-mit-121-01`                       |
| `x ≻ y`       | `x` is strictly preferred to `y`                              | introduce only after its definition from `≽`                                    | `concept-pref-03`, `claim-pref-02`; `locator-mit-121-01`, `locator-mit-123-02` |
| `x ∼ y`       | `x` and `y` are indifferent                                   | introduce only after its definition from `≽`                                    | `concept-pref-05`, `claim-pref-02`; `locator-mit-121-01`, `locator-mit-123-02` |
| `not`         | logical negation in the strict-preference definition          | explain in words before using it formally                                       | `claim-pref-02`; `locator-mit-121-01`, `locator-mit-123-02`                    |

Use `≽`, `≻`, and `∼` consistently. Do not switch to `⪰`, alternative strict-preference symbols, or an undefined bare tilde. Comparisons are ordered: `x ≽ y` is not the same statement as `y ≽ x`. In particular, `x ≽ y` alone does not imply that `y` is not weakly preferred to `x`.

## Claim-to-section traceability

| Outline section | Claim or concept ID                                                      | Formal claim or role                                              | Source reference                           | Status                            |
| --------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------ | --------------------------------- |
| 1-3             | `claim-pref-01`, `concept-pref-01`, `concept-pref-02`, `concept-pref-04` | relation domain and primitive weak relation                       | `locator-mit-121-01`, `locator-mit-123-01` | directly source-backed            |
| 4-5             | `claim-pref-02`, `concept-pref-03`, `concept-pref-05`                    | strict preference and indifference definitions                    | `locator-mit-121-01`, `locator-mit-123-02` | directly source-backed            |
| 6               | `claim-pref-03`, `concept-pref-09`                                       | completeness axiom                                                | `locator-mit-121-02`, `locator-mit-123-01` | directly source-backed            |
| 7               | `claim-pref-04`, `concept-pref-10`                                       | transitivity axiom                                                | `locator-mit-121-02`, `locator-mit-123-01` | directly source-backed            |
| 8               | `claim-pref-05`                                                          | rationality as completeness plus transitivity                     | `locator-mit-121-02`                       | directly source-backed            |
| 9               | `claim-pref-15`                                                          | strict preference and indifference incompatibility                | `locator-mit-121-01`, `locator-mit-123-02` | derived from verified definitions |
| 10              | `claim-pref-01` through `claim-pref-05`, `claim-pref-15`                 | recognition and application prompts instantiate prior definitions | corresponding section citations            | pedagogical explanation           |

Constructed examples below instantiate verified definitions only. They do not make additional claims about consumer behaviour, utility, geometry, or optimisation.

## Section-by-section instructional architecture

### 1. Choice objects and the comparison problem

- **Instructional purpose:** Establish what can be compared and why comparison direction matters.
- **Prerequisite knowledge:** None.
- **Exact concept or claim taught:** Alternatives form the domain of the relation; the outline uses an ordered comparison such as `x` compared with `y`.
- **Notation introduced:** `x`, `y`, and the phrase “ordered comparison.”
- **Plain-language interpretation:** The model starts with possible alternatives and asks how one alternative is ranked relative to another.
- **Formal definition:** A relation is defined on a domain of alternatives; the later statement `x ≽ y` has a direction from `x` to `y`.
- **Minimal constructed example:** Let `x` and `y` be two alternatives in the same defined domain; `x ≽ y` and `y ≽ x` are separate possible statements.
- **Minimal non-example or misconception:** Treating `{x, y}` as an unordered pair and assuming that a statement about `x` relative to `y` automatically says the reverse.
- **Dependency on earlier sections:** None.
- **Source citation:** `claim-pref-01`, `concept-pref-01`; `locator-mit-121-01`, `locator-mit-123-01`.
- **Content status:** Directly source-backed for the domain and relation framing; the constructed example is pedagogical explanation.
- **Intended exercise type:** Symbol-reading.
- **Completion criterion:** Learner identifies the compared alternatives and the direction of a displayed comparison.

### 2. The primitive preference relation

- **Instructional purpose:** Establish weak preference as the relation from which later relations are defined.
- **Prerequisite knowledge:** Section 1.
- **Exact concept or claim taught:** The approved 14.121 source treats weak preference as a binary relation on the domain; not every such relation is rational.
- **Notation introduced:** `x ≽ y`.
- **Plain-language interpretation:** `x ≽ y` says that `x` is at least as good as `y` in the model.
- **Formal definition:** `≽` is the primitive weak-preference relation defined on the relevant alternatives.
- **Minimal constructed example:** If `x ≽ y`, the model records a weak comparison from `x` to `y`.
- **Minimal non-example or misconception:** Inferring `not y ≽ x` from `x ≽ y` alone; that extra negation is not part of weak preference.
- **Dependency on earlier sections:** Uses the alternatives and ordered comparison from Section 1.
- **Source citation:** `claim-pref-01`, `claim-pref-02`, `concept-pref-04`; `locator-mit-121-01`.
- **Content status:** Directly source-backed; the example and misconception wording are pedagogical explanation.
- **Intended exercise type:** Symbol-reading and relation classification.
- **Completion criterion:** Learner reads `x ≽ y` without adding either strictness or a reverse comparison.

### 3. Weak preference

- **Instructional purpose:** Consolidate the meaning and limits of the primitive relation before deriving other relations.
- **Prerequisite knowledge:** Sections 1-2.
- **Exact concept or claim taught:** Weak preference is not strict preference and does not rule out reverse weak preference.
- **Notation introduced:** Reinforce `x ≽ y`; no new symbol.
- **Plain-language interpretation:** The model allows `x` to be at least as good as `y` while leaving open whether the reverse relation also holds.
- **Formal definition:** `x ≽ y` is the primitive weak-preference statement; no additional condition is implied by that statement alone.
- **Minimal constructed example:** Both `x ≽ y` and `y ≽ x` may hold at the same time.
- **Minimal non-example or misconception:** Reading `x ≽ y` as “`x` is definitely better than `y`.”
- **Dependency on earlier sections:** Applies the primitive relation from Section 2 to an ordered pair from Section 1.
- **Source citation:** `claim-pref-02`, `concept-pref-04`; `locator-mit-121-01`, `locator-mit-123-02`.
- **Content status:** Directly source-backed for notation and relation role; pedagogical explanation for the contrast example.
- **Intended exercise type:** Definition matching and error diagnosis.
- **Completion criterion:** Learner can state that `x ≽ y` alone is compatible with `y ≽ x`.

### 4. Strict preference as a derived relation

- **Instructional purpose:** Show how strict preference adds a condition to weak preference rather than introducing a new primitive relation.
- **Prerequisite knowledge:** Sections 1-3, including logical negation.
- **Exact concept or claim taught:** Strict preference is derived from weak preference.
- **Notation introduced:** `x ≻ y` and `not` in the formal definition.
- **Plain-language interpretation:** `x` is strictly preferred to `y` when `x` is weakly preferred to `y` and the reverse weak comparison does not hold.
- **Formal definition:** `x ≻ y` if and only if `x ≽ y` and not `y ≽ x`.
- **Minimal constructed example:** If `x ≽ y` holds and `y ≽ x` does not hold, classify the ordered pair as `x ≻ y`.
- **Minimal non-example or misconception:** Calling `x ≽ y` strict when the status of `y ≽ x` is unknown.
- **Dependency on earlier sections:** Uses primitive weak preference from Sections 2-3 and the ordered direction from Section 1.
- **Source citation:** `claim-pref-02`, `concept-pref-03`; `locator-mit-121-01`, `locator-mit-123-02`.
- **Content status:** Directly source-backed; constructed classification is pedagogical explanation.
- **Intended exercise type:** Relation classification.
- **Completion criterion:** Learner reconstructs the two-part definition and rejects strictness when the reverse relation is not ruled out.

### 5. Indifference as a derived relation

- **Instructional purpose:** Distinguish mutual weak preference from strict preference.
- **Prerequisite knowledge:** Sections 1-3.
- **Exact concept or claim taught:** Indifference is derived from weak preference in both directions.
- **Notation introduced:** `x ∼ y`.
- **Plain-language interpretation:** The model treats `x` and `y` as equally ranked when each is weakly preferred to the other.
- **Formal definition:** `x ∼ y` if and only if `x ≽ y` and `y ≽ x`.
- **Minimal constructed example:** If both `x ≽ y` and `y ≽ x` hold, classify the ordered comparison as `x ∼ y`.
- **Minimal non-example or misconception:** Treating the absence of a known strict comparison as sufficient for indifference; indifference requires both weak comparisons.
- **Dependency on earlier sections:** Uses weak preference from Sections 2-3 and ordered comparisons from Section 1.
- **Source citation:** `claim-pref-02`, `concept-pref-05`; `locator-mit-121-01`, `locator-mit-123-02`.
- **Content status:** Directly source-backed; constructed classification is pedagogical explanation.
- **Intended exercise type:** Definition matching and relation classification.
- **Completion criterion:** Learner states and applies both conditions for `x ∼ y`.

### 6. Completeness

- **Instructional purpose:** Introduce comparability as a model axiom rather than a psychological claim.
- **Prerequisite knowledge:** Sections 1-3.
- **Exact concept or claim taught:** Completeness requires every pair of alternatives in the defined domain to be comparable by the weak relation.
- **Notation introduced:** Reuse `x ≽ y` and `y ≽ x`; introduce the logical “or.”
- **Plain-language interpretation:** For every pair in the model’s domain, at least one weak comparison is available. This does not mean a consumer always knows exactly what they want.
- **Formal definition:** For every `x` and `y` in the domain, `x ≽ y` or `y ≽ x`.
- **Minimal constructed example:** A relation on `{x, y}` is complete when it includes at least one of `x ≽ y` or `y ≽ x`.
- **Minimal non-example or misconception:** A relation that contains neither direction for a pair is incomplete; saying completeness automatically makes rankings consistent across three alternatives is also incorrect.
- **Dependency on earlier sections:** Uses weak preference and the domain from Sections 1-3.
- **Source citation:** `claim-pref-03`, `concept-pref-09`; `locator-mit-121-02`, `locator-mit-123-01`.
- **Content status:** Directly source-backed; examples and misconception wording are pedagogical explanation.
- **Intended exercise type:** Completeness check.
- **Completion criterion:** Learner checks every relevant pair and identifies a missing comparison without making a transitivity claim.

### 7. Transitivity

- **Instructional purpose:** Introduce consistency across linked weak comparisons as a separate model axiom.
- **Prerequisite knowledge:** Sections 1-3 and the ordered comparisons `x ≽ y` and `y ≽ z`.
- **Exact concept or claim taught:** Transitivity constrains weak-preference chains; it is not automatically true of real human behaviour.
- **Notation introduced:** `z` and the implication phrase “if ... then ...”.
- **Plain-language interpretation:** If the model ranks `x` at least as high as `y` and `y` at least as high as `z`, it must also rank `x` at least as high as `z`.
- **Formal definition:** For every `x`, `y`, and `z` in the domain, if `x ≽ y` and `y ≽ z`, then `x ≽ z`.
- **Minimal constructed example:** A relation containing `x ≽ y` and `y ≽ z` must include `x ≽ z` to satisfy transitivity.
- **Minimal non-example or misconception:** Calling a relation transitive merely because every pair is comparable; completeness does not imply transitivity.
- **Dependency on earlier sections:** Uses the weak relation from Sections 2-3 and a three-alternative chain.
- **Source citation:** `claim-pref-04`, `concept-pref-10`; `locator-mit-121-02`, `locator-mit-123-01`.
- **Content status:** Directly source-backed; examples and misconception wording are pedagogical explanation.
- **Intended exercise type:** Transitivity check and error diagnosis.
- **Completion criterion:** Learner identifies the required conclusion of a weak-preference chain and keeps transitivity separate from completeness.

### 8. Rational preference relation

- **Instructional purpose:** Give rationality its technical model-specific meaning.
- **Prerequisite knowledge:** Sections 6-7.
- **Exact concept or claim taught:** A weak-preference relation is rational when it satisfies both completeness and transitivity.
- **Notation introduced:** No new relation symbol; reuse `≽`.
- **Plain-language interpretation:** “Rational” is a technical label for the two axioms in this model. It does not mean morally correct, intelligent, or psychologically realistic behaviour.
- **Formal definition:** A relation is rational if it is complete and transitive.
- **Minimal constructed example:** A relation that passes a pairwise-comparability check and every relevant weak-preference-chain check is rational in this technical sense.
- **Minimal non-example or misconception:** A complete relation with a failed chain is not rational; a transitive relation with an incomparable pair is not rational. Neither axiom implies the other.
- **Dependency on earlier sections:** Combines Sections 6 and 7 only.
- **Source citation:** `claim-pref-05`; `locator-mit-121-02`. Terminology difference: `locator-mit-123-01` uses “preference relation” for the complete-and-transitive class.
- **Content status:** Directly source-backed; examples and warnings are pedagogical explanation.
- **Intended exercise type:** Rationality classification.
- **Completion criterion:** Learner evaluates completeness and transitivity separately before assigning the technical rationality label.

### 9. Relationship between strict preference and indifference

- **Instructional purpose:** Consolidate the logical difference between the two derived relations without introducing geometry.
- **Prerequisite knowledge:** Sections 4-5.
- **Exact concept or claim taught:** Strict preference and indifference cannot both hold for the same ordered pair.
- **Notation introduced:** Reuse `≻`, `∼`, and `≽`; no new symbol.
- **Plain-language interpretation:** The strict-preference definition rejects the reverse weak comparison, while indifference requires it.
- **Formal definition:** This section uses the prior definitions rather than a new primitive definition.
- **Minimal constructed example:** Assume both `x ≻ y` and `x ∼ y`. The first supplies not `y ≽ x`; the second supplies `y ≽ x`; the assumptions conflict.
- **Minimal non-example or misconception:** Calling this a theorem about indifference-curve geometry or using it to assert an unqualified curve non-intersection claim.
- **Dependency on earlier sections:** Requires strict preference from Section 4 and indifference from Section 5.
- **Source citation:** `claim-pref-15`; premises from `locator-mit-121-01` and `locator-mit-123-02`.
- **Content status:** Derived from verified definitions. The example is the complete bounded derivation recorded in the audit, not a directly quoted source claim.
- **Intended exercise type:** Derivation exercise and error diagnosis.
- **Completion criterion:** Learner identifies the contradictory pair `y ≽ x` and not `y ≽ x` and labels the result as a derivation.

### 10. Recognition and application exercises

- **Instructional purpose:** Plan learner evidence across recognition, formal definition use, and technical classification without creating a final exercise bank.
- **Prerequisite knowledge:** Sections 1-9.
- **Exact concept or claim taught:** No new theoretical claim; this section applies the verified definitions and axioms.
- **Notation introduced:** None; reuse only previously defined notation.
- **Plain-language interpretation:** Learners demonstrate that they can read symbols, check a relation against each axiom, and explain a classification.
- **Formal definition:** None introduced.
- **Minimal constructed example:** A future prompt may provide a small relation and ask whether a named ordered comparison is weak, strict, or indifferent under stated facts.
- **Minimal non-example or misconception:** Asking learners to infer utility, geometry, or optimisation content that the outline excludes.
- **Dependency on earlier sections:** All prior sections.
- **Source citation:** `claim-pref-01` through `claim-pref-05` and `claim-pref-15`; use the cited source records from Sections 1-9.
- **Content status:** Pedagogical explanation. Each future item must be original, source-scoped, independently solved, and second-checked before use.
- **Intended exercise type:** The eight exercise types in the exercise architecture below.
- **Completion criterion:** Learner produces an explanation that identifies the applicable definition or axiom and distinguishes unsupported inferences.

## Exercise architecture

| Exercise type              | Skill tested                                     | Expected reasoning steps                                                            | Common incorrect answer                                           | Misconception diagnosed                                            | Minimum future items |
| -------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------ | -------------------- |
| Symbol-reading             | read direction and meaning of `≽`, `≻`, and `∼`  | identify left and right alternatives; state the defined relation only               | reads `x ≽ y` as strict preference                                | assumes weak preference rules out the reverse comparison           | 3                    |
| Definition matching        | match each relation to its conditions            | identify primitive or derived status; match the required weak comparisons           | matches indifference with one weak comparison                     | indifference requires both directions                              | 3                    |
| Relation classification    | classify stated comparison facts                 | test strict and indifference definitions separately                                 | labels both strict and indifferent                                | derived relations are not interchangeable                          | 4                    |
| Completeness checks        | test pairwise comparability in the stated domain | inspect every pair; find whether at least one weak direction exists                 | checks only one convenient pair                                   | completeness concerns every pair in the domain                     | 3                    |
| Transitivity checks        | test weak-preference chains                      | locate `x ≽ y` and `y ≽ z`; check for `x ≽ z`                                       | treats a complete relation as automatically transitive            | completeness and transitivity are independent axioms               | 3                    |
| Rationality classification | apply both axioms                                | test completeness; test transitivity; then classify                                 | calls a relation rational after passing only one axiom            | rationality is the technical conjunction of both axioms            | 3                    |
| Error diagnosis            | identify and repair an invalid inference         | name the relevant definition or axiom; state the missing or contradictory condition | calls a behavioural statement “irrational” in a moral sense       | technical rationality is not a moral or psychological judgement    | 3                    |
| Derivation exercise        | derive incompatibility of `x ≻ y` and `x ∼ y`    | write each definition; isolate `y ≽ x` and not `y ≽ x`; state contradiction         | invokes curve geometry or transitivity instead of the definitions | the result is relation-level and follows directly from definitions | 1                    |

No final exercise items or solutions are created here. Every future exercise must use the provenance state `original`, avoid source wording, and receive complete independent solution and second-review checks.

## Known limitations

- The outline is intentionally limited to the verified relation-and-rationality subset.
- `claim-pref-15` supports a relation-level derivation only; it does not support an unqualified geometric non-intersection statement.
- The 14.123 source uses “preference relation” for the complete-and-transitive class, while the outline follows the 14.121 distinction between a general relation and a rational relation.
- Rights, formula, graph, exercise, and publication review remain incomplete.

## Implementation readiness checklist

| Check                                | Result | Basis                                                                                                      |
| ------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------- |
| all included claims verified         | yes    | `claim-pref-01` through `claim-pref-05` are directly verified; `claim-pref-15` is verified as a derivation |
| notation consistent                  | yes    | only `≽`, `≻`, and `∼` are used under the verified notation policy                                         |
| all prerequisites covered            | yes    | dependency map and section order introduce alternatives and weak preference first                          |
| dependency order valid               | yes    | derived relations precede axioms; axioms precede rationality; derivation follows its premises              |
| examples confined to verified theory | yes    | all examples are constructed instantiations of included definitions or axioms                              |
| misconceptions explicitly addressed  | yes    | each instructional section names a bounded non-example or misconception                                    |
| exercise objectives mapped           | yes    | eight required exercise types are specified with reasoning and misconception targets                       |
| source references inspectable        | yes    | every substantive claim maps to audit identifiers, PDF locators, and direct MIT PDF links                  |
| excluded topics kept out             | yes    | exclusions are explicit and no utility, geometry, graph, or optimisation claim is included                 |
| ready for lesson drafting            | no     | the audit permits an outline only; rights, exercise, formula, graph, and publication gates remain open     |

## Audit Identity

- Audit ID: `mikro1-preferences-outline`
- Audit status: `structurally-mapped`
- Review owner: `source-ingestion`
- Last updated: `2026-06-19`

## Module Identity

- Module ID: `module-mikro1-candidate`
- Module title: `Mikroökonomik I`
- Institution context: `Georg-August-Universität Göttingen`
- Official affiliation: `Independent platform, not an official university offer`

## Audit Scope

This document converts the approved evidence-pack subset into instructional sequencing and exercise architecture only. It does not expand the source set or decide publication eligibility.

## Audit Status

- Current state: `structurally-mapped`
- Previous state: `structurally-mapped`
- Next valid state: `rights-reviewed`
- Blockers: rights review, original-exercise solution review, formula and graph review, and publication review

## Private-Source Location Reference

- Private collection key: `external-course-materials/mikro1`
- Private-source use in this outline: alignment context only; no private material is reproduced

## Sanitised File Inventory

| Source ID           | Source type    | File category | Rights status            | Source verification | Intended use                                                |
| ------------------- | -------------- | ------------- | ------------------------ | ------------------- | ----------------------------------------------------------- |
| `mit-ocw-14-121-01` | lecture slides | public PDF    | `unknown`                | `checked`           | reference only for verified claims                          |
| `mit-ocw-14-123-01` | lecture notes  | public PDF    | `unknown`                | `checked`           | reference only for corroboration and terminology comparison |
| `mikro1-slides-11`  | course slides  | private PDF   | `private-reference-only` | `located`           | private alignment context only                              |

## Source Classification

The MIT sources are the authoritative claim basis. The private course source supplies only bounded alignment context and is not reproduced. All future learner-facing text must be independently written.

## Semester Or Version Evidence

No course-semester alignment is asserted. MIT terms identify the source documents only.

## Lecturer Or Author Evidence

MIT source authors are recorded only as bibliographic metadata. No lecturer alignment is asserted for the independent platform.

## Proposed Topic Structure

The ten instructional sections above are the proposed structure for the verified subset. Utility, geometry, and optimisation remain outside it.

## Exercise And Solution Mapping

The exercise architecture plans original future exercise types only. No source exercise, solution, official item, adapted item, or final exercise bank is created.

## Formula And Definition Inventory

The included formal definitions are `x ≻ y` iff `x ≽ y` and not `y ≽ x`; `x ∼ y` iff `x ≽ y` and `y ≽ x`; completeness; and transitivity. Each is traceable in the claim-to-section table. No formula workflow or utility formula is included.

## Graph And Figure Inventory

Not assessed for implementation. No graph, figure, curve, or geometric property is included.

## Source Conflicts

The audit documents one terminology difference: 14.121 distinguishes a general relation from a rational relation, while 14.123 uses “preference relation” for the complete-and-transitive class. This outline follows 14.121 and records the difference; no notation conflict remains.

## Missing Material

Missing before lesson drafting or publication: rights review, original exercise solutions and second review, formula workflow for excluded utility material, graph review, and a direct source or separate proof for any later unqualified geometric non-intersection claim.

## Copyright And Publication Assessment

Rights status is not fully reviewed. Intended use is reference only, concise paraphrase, minimal formal notation, and original future platform material. This outline is not eligible for publication as learning content.

## Candidate First Topic

Candidate: `Preferences and rationality: relation definitions and axioms`. It is selected only as a bounded source-backed outline, not as a ready-to-draft or publishable topic.

## Content Transformation Plan

Future work may convert this outline into original learning content only after the documented rights, exercise, and publication gates are complete. It must preserve the dependency order, use the approved notation, and avoid copying source structure or examples.

## Verification Requirements

Before any lesson drafting, verify rights for intended source use, create and second-check original exercises, complete relevant editorial review, and preserve the source citations and exclusions in this outline.

## Open Questions

- Can the rights and publication review clear original learner-facing prose that cites the approved MIT sources?
- Which bounded original examples and exercises can be independently derived and second-checked without expanding the source-backed scope?

## Publication Blockers

- rights review is incomplete
- original exercise items and checked solutions do not exist
- no publication-state review has occurred
- unqualified geometric non-intersection remains unsupported

## Audit Decision

Continue with bounded outline review only. Do not draft or publish a lesson from this document until the implementation readiness checklist can answer yes to lesson-drafting readiness.

## Review History

| Date         | Reviewer           | Change                                                                                                        | Result                |
| ------------ | ------------------ | ------------------------------------------------------------------------------------------------------------- | --------------------- |
| `2026-06-19` | `source-ingestion` | Created the source-backed instructional outline for the verified preference-relations and rationality subset. | `structurally-mapped` |
