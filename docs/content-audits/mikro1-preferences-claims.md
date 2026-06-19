# Mikroökonomik I Preferences Claim Evidence Pack

This is a sanitized claim and evidence pack. It records independently phrased claims, source locators, review results, and transformation constraints only. It does not contain private filenames, local paths, copied source text, formulas beyond minimal notation, exercise prompts, solutions, screenshots, checksums, lecturer names, email addresses, or original course files.

## Evidence-pack identity

- Evidence pack ID: `mikro1-preferences-claims`
- Related module audit: `mikro1-source-inventory`
- Pilot topic: `Preferences and indifference-curve basics`
- Evidence-pack status: `verification-required`
- Review owner: `source-ingestion`
- Last updated: `2026-06-19`
- Public use status: not ready for drafting or publication

The source review is complete for the currently available bounded private sources. The evidence pack is not `ready-for-outline` because the available authoritative reading supports utility and indifference-curve material but does not sufficiently verify the core preference-relation definitions and axioms needed for a source-backed first lesson outline.

## Pilot-topic scope

The bounded scope remains preferences, preference relations, basic bundle notation, strict preference, weak preference, indifference, completeness, transitivity, ordinal ranking through utility representation, indifference curves, and basic indifference-curve properties when their assumptions are visible in the reviewed source range.

The course-source boundary is `mikro1-slides-11` p1-p11 for core claims, with p12-p15 used only as a dependency boundary for later marginal-rate-of-substitution work. `mikro1-cdf-06` remains private visual support for future graph reconstruction only and was not executed.

The reviewed private reading boundary adds one authoritative textbook extract and one assigned academic supplement. These sources support several claims but do not close the source gap for basic preference relation, completeness, transitivity, and the non-intersection proof.

## Explicit exclusions

Excluded from this evidence pack:

- utility maximization as a learner-facing topic
- budget constraints
- Lagrange methods
- demand derivation
- income effects and substitution effects
- revealed preference
- marginal rate of substitution except as a dependency note
- detailed utility-function families
- official, adapted, or original exercises
- graph component implementation

Convexity is included only as a conditional indifference-curve shape property. It must not be expanded into a later optimization topic here.

## Supporting source IDs

| Source ID                 | Role in pack                                        | Rights status            | Use in this task                                                   |
| ------------------------- | --------------------------------------------------- | ------------------------ | ------------------------------------------------------------------ |
| `mikro1-slides-11`        | primary course evidence for claims and locators     | `private-reference-only` | private reference and sanitized locator mapping                    |
| `mikro1-reading-02`       | principal authoritative textbook cross-check source | `private-reference-only` | source review for utility, indifference curves, convexity, and MRS |
| `mikro1-reading-06`       | assigned academic supplement                        | `private-reference-only` | secondary support for ordinal-utility interpretation only          |
| `mikro1-cdf-06`           | private visual-support candidate                    | `unknown`                | static metadata only; no execution or code inspection              |
| `mikro1-source-inventory` | repository structural audit context                 | not a source file        | audit relationship and status context                              |

No source is eligible for redistribution from this pack.

## Reviewed authoritative-source identity

| Review source ID   | Sanitized source ID | Source kind                  | Safe bibliographic identity                                 | Review role      | Review limitation                                                                                  |
| ------------------ | ------------------- | ---------------------------- | ----------------------------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------- |
| `review-source-01` | `mikro1-reading-02` | textbook extract             | Breyer, Mikroökonomik, 6th edition, consumer-theory extract | principal review | starts after the basic preference-relation definitions; strongest for utility and curve properties |
| `review-source-02` | `mikro1-reading-06` | assigned academic supplement | course-assigned utility-change supplement                   | secondary review | supports ordinal utility only; not an independent general textbook source                          |

The review did not use websites and did not copy private source wording into the repository.

## Source-locator map

| Locator ID            | Source ID           | Locator              | Evidence role                                                       | Scope decision                                            |
| --------------------- | ------------------- | -------------------- | ------------------------------------------------------------------- | --------------------------------------------------------- |
| `locator-pref-01`     | `mikro1-slides-11`  | p1                   | lecture agenda and topic boundary                                   | scope context only                                        |
| `locator-pref-02`     | `mikro1-slides-11`  | p2                   | preference relation, notation, core assumptions                     | core course scope                                         |
| `locator-pref-03`     | `mikro1-slides-11`  | p3                   | completeness, transitivity, rationality relationship                | core course scope                                         |
| `locator-pref-04`     | `mikro1-slides-11`  | p4                   | utility representation and notation                                 | core course scope with review gap                         |
| `locator-pref-05`     | `mikro1-slides-11`  | p5                   | non-satiation and convexity assumptions                             | conditional course scope                                  |
| `locator-pref-06`     | `mikro1-slides-11`  | p6                   | indifference-curve description and contour interpretation           | core course scope                                         |
| `locator-pref-07`     | `mikro1-slides-11`  | p7                   | indifference-curve family in a two-good graph                       | core graph scope                                          |
| `locator-pref-08`     | `mikro1-slides-11`  | p8                   | indifference-curve properties                                       | conditional property scope                                |
| `locator-pref-09`     | `mikro1-slides-11`  | p9                   | convexity graph illustration                                        | conditional graph scope                                   |
| `locator-pref-10`     | `mikro1-slides-11`  | p10                  | ordinal utility and monotone transformations                        | course scope with partial review                          |
| `locator-pref-11`     | `mikro1-slides-11`  | p11                  | ordinal-utility example structure                                   | example structure only                                    |
| `locator-pref-12`     | `mikro1-slides-11`  | p12-p15              | marginal-rate-of-substitution material                              | dependency boundary only                                  |
| `locator-review-01`   | `mikro1-reading-02` | PDF p1               | marginal-rate-of-substitution boundary and indifference-curve slope | confirms later-topic boundary and curve-slope context     |
| `locator-review-02`   | `mikro1-reading-02` | PDF p1-p2            | preference or utility function, quasiconcavity, convex curves       | conditional support for utility and convexity claims      |
| `locator-review-03`   | `mikro1-reading-02` | PDF p4-p5            | fixed utility level and indifference-curve tangency context         | support for equal-level indifference-curve interpretation |
| `locator-review-04`   | `mikro1-reading-06` | PDF p1               | ordinal interpretation of utility                                   | secondary support for ordinal-utility claim               |
| `locator-pref-cdf-01` | `mikro1-cdf-06`     | static metadata only | indifference-curve visual-support candidate                         | private reference only                                    |

PDF viewer pages are used as locators. Printed slide numbers were not separately verified.

## Claim inventory

Claim review results used in this pack:

- `confirmed`: reviewed source directly supports the claim for the bounded topic.
- `confirmed-with-condition`: reviewed source supports the claim only under a named scope, assumption, or sequencing limit.
- `course-specific`: the course source supports the claim, but the reviewed authoritative reading does not independently verify it.
- `notation-difference`: the source review found a notation or presentation difference that must be handled explicitly.
- `unsupported`: the available reviewed sources do not support the proposed claim.
- `blocked`: the claim cannot proceed because the source cannot be inspected or the evidence is unusable.

| Claim ID        | Proposed claim                                                                                                                     | Course locator                       | Review locator                           | Review result              | Condition or difference                                                                                      | Readiness                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| `claim-pref-01` | A preference relation models how a consumer ranks pairs of consumption bundles.                                                    | `locator-pref-02`                    | none located                             | `course-specific`          | needs an authoritative source that starts with basic preference relations                                    | `external-verification-required` |
| `claim-pref-02` | The bounded source distinguishes strict preference, weak preference, and indifference as separate relations.                       | `locator-pref-02`                    | `locator-review-02`                      | `notation-difference`      | reviewed textbook extract uses utility or preference-function framing, not the same relation-symbol sequence | `external-verification-required` |
| `claim-pref-03` | Completeness means the model can compare any two relevant bundles in a pairwise ranking.                                           | `locator-pref-03`                    | none located                             | `course-specific`          | basic axiom not covered in reviewed extract                                                                  | `external-verification-required` |
| `claim-pref-04` | Transitivity states that weak preference rankings remain consistent across linked bundle comparisons.                              | `locator-pref-03`                    | none located                             | `course-specific`          | basic axiom not covered in reviewed extract                                                                  | `external-verification-required` |
| `claim-pref-05` | The source treats completeness plus transitivity as the rationality condition for the preference model.                            | `locator-pref-03`                    | none located                             | `course-specific`          | course terminology needs independent textbook check                                                          | `external-verification-required` |
| `claim-pref-06` | A utility representation assigns utility values to bundles so that weak preference is represented by weakly higher utility.        | `locator-pref-04`                    | `locator-review-02`                      | `confirmed-with-condition` | safe as course-aligned bridge; do not present a full representation theorem                                  | `conditional`                    |
| `claim-pref-07` | Utility is used here as an ordinal ranking device rather than as a meaningful cardinal measurement.                                | `locator-pref-10`                    | `locator-review-04`, `locator-review-02` | `confirmed`                | use as learner-facing warning after notation review                                                          | `cross-checked`                  |
| `claim-pref-08` | Positive monotone transformations preserve the represented preference order and the indifference-curve family.                     | `locator-pref-10`, `locator-pref-11` | none located                             | `course-specific`          | ordinal utility is supported, but the transformation statement still needs formula review                    | `external-verification-required` |
| `claim-pref-09` | Non-satiation is introduced as the assumption that more of each good raises utility in the modeled setting.                        | `locator-pref-05`                    | none located                             | `course-specific`          | reviewed extract does not establish the basic more-is-better assumption                                      | `external-verification-required` |
| `claim-pref-10` | Convex preferences are introduced to justify a preference for mixtures between two equally ranked bundles.                         | `locator-pref-05`, `locator-pref-09` | `locator-review-02`                      | `confirmed-with-condition` | safe only as an assumption or graph-property condition, not as a universal property                          | `conditional`                    |
| `claim-pref-11` | An indifference curve collects bundles that share the same utility level in the representation.                                    | `locator-pref-06`                    | `locator-review-03`                      | `confirmed`                | source supports fixed-level curve interpretation                                                             | `cross-checked`                  |
| `claim-pref-12` | Indifference curves can be interpreted as contour lines of a utility surface.                                                      | `locator-pref-06`, `locator-pref-07` | none located                             | `course-specific`          | source figure must be replaced; contour interpretation needs independent verification                        | `external-verification-required` |
| `claim-pref-13` | In the displayed two-good graph convention, curves farther from the origin represent higher utility.                               | `locator-pref-07`, `locator-pref-08` | `locator-review-03`                      | `confirmed-with-condition` | safe only in the two-good goods setting with the relevant monotonicity condition                             | `conditional`                    |
| `claim-pref-14` | With non-satiation in the two-good setting, an indifference curve should not be positively sloped.                                 | `locator-pref-08`                    | `locator-review-01`                      | `confirmed-with-condition` | reviewed extract supports slope/MRS context; exception handling still needs verification                     | `conditional`                    |
| `claim-pref-15` | Indifference curves should not intersect under the stated preference-order assumptions.                                            | `locator-pref-08`                    | none located                             | `course-specific`          | proof or authoritative explanation not found in reviewed reading                                             | `external-verification-required` |
| `claim-pref-16` | Convexity of indifference curves is conditional on convex preferences.                                                             | `locator-pref-08`, `locator-pref-09` | `locator-review-02`                      | `confirmed-with-condition` | safe only as a conditional property                                                                          | `conditional`                    |
| `claim-pref-17` | Marginal rate of substitution follows after the basic indifference-curve concept and should be treated as the next topic boundary. | `locator-pref-12`                    | `locator-review-01`                      | `confirmed`                | keep as dependency boundary; do not draft MRS here                                                           | `cross-checked`                  |

Review totals:

- Authoritative or assigned academic review sources used: 2
- Claims confirmed: 3
- Claims confirmed with conditions: 5
- Course-specific claims still requiring verification: 8
- Notation differences found: 1
- Unsupported claims: 0
- Blocked claims: 0

## Concept and definition inventory

| Concept ID        | Concept                           | Course-source status | Review-source status              | Final scope decision                                                          | Readiness                        |
| ----------------- | --------------------------------- | -------------------- | --------------------------------- | ----------------------------------------------------------------------------- | -------------------------------- |
| `concept-pref-01` | alternative or consumption bundle | partially located    | not separately verified           | include only after bundle notation is source-checked                          | `external-verification-required` |
| `concept-pref-02` | preference relation               | located              | not independently verified        | keep as planned core concept; do not draft yet                                | `external-verification-required` |
| `concept-pref-03` | strict preference                 | located              | notation differs or absent        | keep as planned notation item; do not draft until notation source is verified | `external-verification-required` |
| `concept-pref-04` | weak preference                   | located              | notation differs or absent        | keep as planned notation item; do not draft until notation source is verified | `external-verification-required` |
| `concept-pref-05` | indifference                      | located              | indirectly supported by curve use | include only after relation notation is verified                              | `external-verification-required` |
| `concept-pref-06` | indifference set                  | not explicitly named | not needed in reviewed source     | omit from version-one outline unless a later source justifies it              | `omitted`                        |
| `concept-pref-07` | indifference curve                | located              | verified for fixed-level use      | include as core graph concept after notation caveat                           | `cross-checked`                  |
| `concept-pref-08` | ordinal preference ranking        | located              | verified                          | include as core interpretation warning after formula notation review          | `cross-checked`                  |
| `concept-pref-09` | completeness                      | located              | not independently verified        | keep as required axiom; do not draft until source gap is closed               | `external-verification-required` |
| `concept-pref-10` | transitivity                      | located              | not independently verified        | keep as required axiom; do not draft until source gap is closed               | `external-verification-required` |

Definitions resolved for source-backed outline: 2 of 10 concepts. One optional concept is omitted from the first scope. The unresolved concepts are foundational enough to block a source-backed outline.

## Notation inventory

| Notation item                  | Course source              | Reviewed source                          | Difference found                       | Decision                                                                |
| ------------------------------ | -------------------------- | ---------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------- |
| strict preference relation     | `locator-pref-02`          | not matched directly                     | course uses relation notation          | verify with another textbook source before drafting                     |
| weak preference relation       | `locator-pref-02`-`03`     | not matched directly                     | course uses relation notation          | verify with another textbook source before drafting                     |
| indifference relation          | `locator-pref-02`          | indirectly through curves                | relation symbol not matched directly   | verify with another textbook source before drafting                     |
| utility or preference function | `locator-pref-04`, p10-p11 | `locator-review-02`, `locator-review-03` | reviewed extract uses function framing | safe only for ordinal bridge and curve context                          |
| utility level labels           | `locator-pref-06`-`07`     | `locator-review-03`                      | no material conflict                   | may be used in a future graph spec after source-backed outline is ready |
| MRS notation                   | `locator-pref-12`          | `locator-review-01`                      | outside topic boundary                 | record only as next-step dependency                                     |

Notation differences resolved: 0. Notation differences documented: 1. The difference is presentational rather than a substantive contradiction, but it still blocks learner-facing prose until the relation notation is verified.

## Assumption inventory

| Assumption ID        | Assumption         | Course locator                       | Review locator      | Review result              | Scope decision                                                   |
| -------------------- | ------------------ | ------------------------------------ | ------------------- | -------------------------- | ---------------------------------------------------------------- |
| `assumption-pref-01` | completeness       | `locator-pref-03`                    | none located        | `course-specific`          | required core assumption; source gap blocks outline              |
| `assumption-pref-02` | transitivity       | `locator-pref-03`                    | none located        | `course-specific`          | required core assumption; source gap blocks outline              |
| `assumption-pref-03` | non-satiation      | `locator-pref-05`, `locator-pref-08` | none located        | `course-specific`          | use only as conditional graph assumption after verification      |
| `assumption-pref-04` | convex preferences | `locator-pref-05`, `locator-pref-09` | `locator-review-02` | `confirmed-with-condition` | graph-property assumption only                                   |
| `assumption-pref-05` | continuity         | not located as standalone claim      | not located         | `unsupported`              | omit from first topic                                            |
| `assumption-pref-06` | differentiability  | later utility/MRS context            | `locator-review-01` | `confirmed-with-condition` | later-topic dependency only; do not include in the first outline |

Assumptions resolved for a source-backed first outline: 0 core assumptions. Conditional graph assumptions resolved: 2. Omitted assumptions: 1.

## Conditional property review

| Property ID        | Property                                                   | Review result              | Condition that must appear in future content                     | Source gap remaining                              |
| ------------------ | ---------------------------------------------------------- | -------------------------- | ---------------------------------------------------------------- | ------------------------------------------------- |
| `property-pref-01` | an indifference curve represents equal utility level       | `confirmed`                | valid ordinal utility representation                             | relation-notation bridge still needs verification |
| `property-pref-02` | higher curves represent preferred bundles in the graph     | `confirmed-with-condition` | two-good goods setting and more-is-better condition              | non-satiation source gap remains                  |
| `property-pref-03` | downward or non-positive slope under non-satiation         | `confirmed-with-condition` | goods setting; exception cases must not be overgeneralized       | exception handling remains                        |
| `property-pref-04` | curves do not intersect under preference-order assumptions | `course-specific`          | completeness and transitivity proof must be verified             | authoritative proof still required                |
| `property-pref-05` | convexity toward the origin                                | `confirmed-with-condition` | convex preferences only                                          | non-convex counterexample omitted                 |
| `property-pref-06` | contour-line interpretation of a utility surface           | `course-specific`          | independently redrawn graph and verified contour-language source | visual source replacement remains                 |
| `property-pref-07` | thinness or related curve-set property                     | `unsupported`              | none                                                             | omit from first topic                             |

Conditional properties resolved: 3 conditionally plus 1 directly. Conditional properties still requiring external verification: 2. Unsupported properties retained for omission only: 1.

## Graph inventory

| Graph ID        | Course locator    | Intended learning role                                            | Review locator      | Review result              | Required conditions                       | Public reuse decision                           |
| --------------- | ----------------- | ----------------------------------------------------------------- | ------------------- | -------------------------- | ----------------------------------------- | ----------------------------------------------- |
| `graph-pref-01` | `locator-pref-06` | explain indifference curves as contour lines of a utility surface | none located        | `course-specific`          | utility-surface interpretation            | redraw independently only after verification    |
| `graph-pref-02` | `locator-pref-07` | show a family of indifference curves in a two-good plane          | `locator-review-03` | `confirmed-with-condition` | goods setting and ordinal utility warning | redraw independently after source gap is closed |
| `graph-pref-03` | `locator-pref-09` | illustrate convexity of indifference curves                       | `locator-review-02` | `confirmed-with-condition` | convex preferences only                   | redraw independently after source gap is closed |
| `graph-pref-04` | `locator-pref-12` | introduce marginal-rate-of-substitution geometry as next topic    | `locator-review-01` | `confirmed`                | later-topic boundary                      | defer; do not include in first topic            |

Graph records reviewed: 4. Graph records ready for implementation: 0. No graph image is approved for reuse. Future public graphs should be independently redrawn with accessible text alternatives after the source-backed outline gap is closed.

## Future graph-behaviour specification

| Behaviour ID        | Candidate behaviour                                | Underlying claim IDs                              | Current review status         | Required assumptions                        | Static fallback                                 | Unresolved modelling questions                        |
| ------------------- | -------------------------------------------------- | ------------------------------------------------- | ----------------------------- | ------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------- |
| `behaviour-pref-01` | select two bundles on the same curve               | `claim-pref-11`, `claim-pref-12`                  | partial                       | valid utility representation                | static labelled curve with two points           | how to explain equal level without cardinal utility   |
| `behaviour-pref-02` | compare bundles on higher and lower curves         | `claim-pref-09`, `claim-pref-13`                  | partial                       | non-satiation and two-good graph convention | two static curves with direction note           | exception handling for bads or satiation              |
| `behaviour-pref-03` | demonstrate non-intersection                       | `claim-pref-03`, `claim-pref-04`, `claim-pref-15` | not ready                     | complete and transitive preferences         | static contradiction diagram after proof review | proof route for learner-facing page                   |
| `behaviour-pref-04` | demonstrate convexity conditionally                | `claim-pref-10`, `claim-pref-16`                  | conditionally source-reviewed | convex preferences                          | static curve, endpoints, and mixture point      | whether to include non-convex counterexample later    |
| `behaviour-pref-05` | show ordinal transformation preserves curve family | `claim-pref-07`, `claim-pref-08`                  | partial                       | valid positive monotone transformation      | paired static diagrams with same curves         | formula-level verification of transformation examples |

These behaviours are specifications only. No component or interactive graph is implemented in this task.

## Example inventory

| Example ID        | Source locator    | Example type                           | Review result              | Permitted use          | Replacement requirement                                 |
| ----------------- | ----------------- | -------------------------------------- | -------------------------- | ---------------------- | ------------------------------------------------------- |
| `example-pref-01` | `locator-pref-06` | visual interpretation example          | `course-specific`          | private reference only | independently redrawn diagram after source verification |
| `example-pref-02` | `locator-pref-09` | graphical convexity example            | `confirmed-with-condition` | private reference only | original graph and explanation                          |
| `example-pref-03` | `locator-pref-11` | ordinal-utility transformation example | `course-specific`          | private reference only | independent formula example after formula workflow      |
| `example-pref-04` | `locator-pref-12` | trade-off interpretation example       | `confirmed` as boundary    | defer to later topic   | independent later MRS example                           |

No source example should be copied into learner-facing content.

## Original-exercise design constraints

Future original exercises are permitted only after the target claims are source-checked, every required symbol is defined, and complete solutions are independently derived and second-checked.

| Exercise category ID | Future task category                                 | Target claim IDs                                  | Current status | Required before creation                                      |
| -------------------- | ---------------------------------------------------- | ------------------------------------------------- | -------------- | ------------------------------------------------------------- |
| `exercise-pref-01`   | classify preference statements                       | `claim-pref-01`, `claim-pref-02`                  | not ready      | relation definitions and notation verification                |
| `exercise-pref-02`   | interpret strict, weak, and indifferent relations    | `claim-pref-02`, `claim-pref-03`, `claim-pref-04` | not ready      | relation notation, completeness, and transitivity source gap  |
| `exercise-pref-03`   | check completeness or transitivity in small examples | `claim-pref-03`, `claim-pref-04`                  | not ready      | authoritative axiom definitions and solution review           |
| `exercise-pref-04`   | identify bundles on the same indifference curve      | `claim-pref-11`, `claim-pref-12`                  | not ready      | contour interpretation and graph replacement plan             |
| `exercise-pref-05`   | compare higher and lower curves under assumptions    | `claim-pref-09`, `claim-pref-13`                  | not ready      | non-satiation verification and source-backed graph conditions |
| `exercise-pref-06`   | recognise invalid curve intersections                | `claim-pref-03`, `claim-pref-04`, `claim-pref-15` | not ready      | non-intersection proof and axiom source gap                   |
| `exercise-pref-07`   | distinguish universal from conditional properties    | `claim-pref-13`, `claim-pref-14`, `claim-pref-16` | not ready      | conditions and exceptions verified                            |
| `exercise-pref-08`   | explain graph meaning in words                       | `claim-pref-11`, `claim-pref-12`, `claim-pref-13` | not ready      | graph meaning and ordinal warning verified together           |

No exercise prompt, answer, or solution is created in this task.

## Conflicts

| Conflict ID        | Source IDs                                    | Locators                               | Nature of conflict or gap                                                                       | Status   | Required resolution                                                | Publication blocked                    |
| ------------------ | --------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ | -------------------------------------- |
| `conflict-pref-01` | `mikro1-slides-11`, `mikro1-reading-02`       | `locator-pref-02`, `locator-review-02` | course relation notation is not matched directly in the reviewed textbook extract               | open     | find or approve an authoritative source covering relation notation | yes for outline and prose              |
| `conflict-pref-02` | `mikro1-slides-11`, `mikro1-reading-02`       | `locator-pref-05`, `locator-review-02` | convexity appears near later utility material but belongs here only as a conditional property   | resolved | keep convexity conditional and do not present it as universal      | no for review; yes for publication     |
| `conflict-pref-03` | `mikro1-slides-11`, `mikro1-cdf-06`           | `locator-pref-cdf-01`                  | CDF relationship is known from structural audit, not from executed content                      | open     | decide replacement graph strategy without executing or reusing CDF | yes for implementation                 |
| `conflict-pref-04` | `mikro1-slides-11`                            | `locator-pref-06`, `locator-pref-11`   | cited or source-specific visual/example structures appear in the course source                  | open     | create independent replacement examples and graphs                 | yes for copying; no for private review |
| `conflict-pref-05` | `mikro1-slides-11`, reviewed private readings | `locator-pref-02`, `locator-pref-03`   | reviewed authoritative source begins after the basic preference-relation definitions and axioms | open     | obtain an authoritative source for basic preferences and axioms    | yes for source-backed outline          |

Conflicts resolved: 1. Conflicts remaining: 4. No substantive academic contradiction was found; the main issue is incomplete source coverage and notation mismatch.

## External verification requirements

| Requirement ID   | Claim ID                                          | What must be verified                                                                  | Review result from this task  | Mandatory before outline | Course source remains primary for alignment |
| ---------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------- | ------------------------ | ------------------------------------------- |
| `verify-pref-01` | `claim-pref-03`, `claim-pref-04`                  | standard definitions and formal notation for completeness and transitivity             | still required                | yes                      | yes                                         |
| `verify-pref-02` | `claim-pref-06`, `claim-pref-08`                  | utility-representation notation and positive monotone transformation statement         | partly resolved               | yes                      | yes                                         |
| `verify-pref-03` | `claim-pref-09`, `claim-pref-13`, `claim-pref-14` | conditions under which more-is-better implies higher curves and non-positive slopes    | partly resolved               | yes                      | yes                                         |
| `verify-pref-04` | `claim-pref-15`                                   | proof or explanation for non-intersection of indifference curves                       | still required                | yes                      | yes                                         |
| `verify-pref-05` | `claim-pref-16`                                   | convexity of indifference curves under convex preferences and possible exceptions      | partly resolved               | no, if kept conditional  | yes                                         |
| `verify-pref-06` | `concept-pref-06`                                 | whether an indifference set should be introduced separately from an indifference curve | no longer required if omitted | no                       | yes                                         |
| `verify-pref-07` | `property-pref-07`                                | thinness or related curve-set property if desired                                      | no longer required if omitted | no                       | yes                                         |

External verification items fully resolved: 0. External verification items partly resolved: 3. External verification items still required: 2. External verification items no longer required for the first topic: 2. No external web research was performed in this task.

## Rights and transformation assessment

| Source ID           | Rights status            | Intended future use                                                                                            | Direct redistribution prohibited | Distinctive structure to avoid                            |
| ------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------- |
| `mikro1-slides-11`  | `private-reference-only` | paraphrased explanation, independently reconstructed graphs, original example design, original exercise design | yes                              | slide wording, examples, graph layout, figure assets      |
| `mikro1-reading-02` | `private-reference-only` | source verification and private reference for reviewed claims                                                  | yes                              | textbook wording, examples, graph layout                  |
| `mikro1-reading-06` | `private-reference-only` | secondary source verification for ordinal-utility warning                                                      | yes                              | supplement wording and derivation structure               |
| `mikro1-cdf-06`     | `unknown`                | private reference for graph behaviour only                                                                     | yes                              | CDF interaction, code, visual assets, parameter structure |

No final legal conclusion is made by this pack.

## Claim readiness

| Readiness level                  | Meaning in this pack                                                     | Count |
| -------------------------------- | ------------------------------------------------------------------------ | ----- |
| `cross-checked`                  | reviewed source supports the claim for bounded future drafting           | 3     |
| `conditional`                    | reviewed source supports the claim only under named conditions           | 5     |
| `external-verification-required` | course source supports the claim, but source gap or notation gap remains | 9     |
| `blocked`                        | cannot proceed because evidence is unusable                              | 0     |

The count of `external-verification-required` includes the notation-difference claim. Claim extraction is complete for the bounded evidence pack. Source checking is partial and blocks a source-backed outline.

## Topic-stage readiness

| Stage                          | Readiness           | Reason                                                                                                  |
| ------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------- |
| source review                  | partially complete  | reviewed available private readings; core relation and axiom source gap remains                         |
| source-backed lesson outlining | not ready           | basic preference-relation definitions, completeness, transitivity, and notation are not verified        |
| prose drafting                 | not ready           | outline is not source-backed and formula/notation review remains open                                   |
| graph specification            | conditionally ready | graph purposes and several curve claims are reviewed conditionally, but core assumptions remain open    |
| original worked-example design | not ready           | source examples are private-reference-only and replacements depend on verified claims                   |
| original exercise design       | not ready           | exercises need verified definitions, checked solutions, and provenance records                          |
| exercise review                | not ready           | no exercise prompt, answer, or solution is source-checked                                               |
| publication                    | not ready           | rights review, source checking, exercise checking, graph verification, and editorial review remain open |

## Drafting blockers

- Core relation notation is not independently verified.
- Completeness and transitivity are course-specific in this pack and need authoritative verification.
- The utility-representation bridge is only conditionally verified and must not become a full representation theorem.
- Positive monotone transformations require formula workflow before learner-facing use.
- Non-satiation and higher-curve statements remain conditional and need exception handling.
- Non-intersection of indifference curves still needs an authoritative proof or explanation.
- CDF material is unsupported for direct use and must not be executed or reused.
- No official or adapted exercises are available.
- Original exercises need complete solutions and second review before creation.
- Rights status remains `private-reference-only` or `unknown`.

## Recommended next task

Find, approve, or inspect an authoritative microeconomics source that covers basic preference relations, strict and weak preference, indifference, completeness, transitivity, and non-intersection of indifference curves. Then update only this evidence pack's relation-notation, definition, axiom, and conflict records.

Do not create a source-backed outline yet because the evidence pack is not `ready-for-outline`.

## Audit Identity

- Audit ID: `mikro1-preferences-claims`
- Audit status: `structurally-mapped`
- Review owner: `source-ingestion`
- Last updated: `2026-06-19`

## Module Identity

- Module ID: `module-mikro1-candidate`
- Module title: `Mikroökonomik I`
- Institution context: `Georg-August-Universität Göttingen`
- Official affiliation: `Independent platform, not an official university offer`

## Audit Scope

This audit file covers a bounded claim-level evidence pack for the pilot topic `Preferences and indifference-curve basics`. It does not draft learner-facing content, create topic files, create practice records, or publish academic material.

## Audit Status

- Current state: `structurally-mapped`
- Previous state: `structurally-mapped`
- Next valid state: `rights-reviewed`
- Blockers: relation-source verification, formula workflow, notation review, rights review, graph replacement strategy, and exercise verification

The pack status is `verification-required`, while the repository audit status remains `structurally-mapped` for validator compatibility and module-level conservatism.

## Private-Source Location Reference

- Private collection key: `external-course-materials/mikro1`
- Private inspection scope: bounded source records only
- Raw notes status: retained outside Git

No private source path is recorded in this repository audit.

## Sanitised File Inventory

| Sanitized source ID | Source type    | File category | Count represented | Rights status            | Source verification | Notes                                                  |
| ------------------- | -------------- | ------------- | ----------------- | ------------------------ | ------------------- | ------------------------------------------------------ |
| `mikro1-slides-11`  | lecture slides | PDF           | 1 file            | `private-reference-only` | `located`           | Primary course source for extracted preference claims. |
| `mikro1-reading-02` | reading        | PDF           | 1 file            | `private-reference-only` | `checked`           | Principal textbook review source for selected claims.  |
| `mikro1-reading-06` | reading        | PDF           | 1 file            | `private-reference-only` | `checked`           | Secondary ordinal-utility review source.               |
| `mikro1-cdf-06`     | unknown        | CDF           | 1 file            | `unknown`                | `located`           | Static metadata only; not executed.                    |

## Source Classification

`mikro1-slides-11` is the course-source range for preference representation and indifference curves. `mikro1-reading-02` is a reviewed textbook extract that supports utility, indifference-curve, convexity, and MRS-boundary claims but not the basic preference-relation axioms. `mikro1-reading-06` is reviewed only for ordinal utility. `mikro1-cdf-06` is an unsupported legacy visualization or model file that may support later private graph-behaviour checking but cannot be used directly.

## Semester Or Version Evidence

Semester evidence remains retained in the private audit layer and is not approved for public display in this pack.

## Lecturer Or Author Evidence

Lecturer or author evidence remains retained in the private audit layer and is not approved for public display in this pack.

## Proposed Topic Structure

The proposed topic structure remains provisional:

1. preference relation and bundles
2. strict, weak, and indifferent relations
3. completeness and transitivity
4. utility as ordinal representation
5. indifference curves as equal-level curves
6. conditional properties of indifference curves
7. next-step boundary to marginal rate of substitution

This structure is not approved for source-backed outlining until the source gaps in items 1 through 3 are closed.

## Exercise And Solution Mapping

No exercises or solutions are extracted or created in this task. Future original exercises should use the constraints in `Original-exercise design constraints` and must wait for source checking and solution verification.

## Formula And Definition Inventory

Definitions and notation are inventoried in `Concept and definition inventory` and `Notation inventory`. Formula-level claims are not approved; they require the formula workflow before publication.

## Graph And Figure Inventory

Graph evidence is inventoried in `Graph inventory` and `Future graph-behaviour specification`. No graph is reproduced, redrawn, or implemented in this task.

## Source Conflicts

Conflict records are listed in `Conflicts`. One scope conflict was resolved by keeping convexity conditional. Four source-coverage, notation, rights, or implementation conflicts remain open.

## Missing Material

- authoritative source coverage for preference relation, strict preference, weak preference, indifference, completeness, and transitivity
- authoritative proof or explanation for non-intersection of indifference curves
- final notation review
- formula-level verification
- rights review
- original graph replacement plan
- original exercise solutions and second review

## Copyright And Publication Assessment

All source use remains private-reference-only or unknown. Future public content must be paraphrased, independently structured, source-traceable, and reviewed before publication.

## Candidate First Topic

The bounded candidate remains `Preferences and indifference-curve basics`. It is not ready for source-backed outlining because foundational definitions and assumptions are not independently verified.

## Content Transformation Plan

Transform this pack into learner-facing content only after the relation-source gap, notation review, formula workflow, and rights review are complete. Future content must use independent prose, independently redrawn accessible graphs, and original exercises with checked solutions.

## Verification Requirements

Verification requirements are listed in `External verification requirements`. Requirements for relation notation, completeness, transitivity, and non-intersection must be completed before any lesson outline is created.

## Open Questions

- Which authoritative source should be used for basic preference relations and axioms?
- Should the course relation notation or a textbook-standard notation become the platform default?
- How should the first topic avoid utility-maximization material while still explaining indifference curves?
- Which conditional graph properties should be deferred to a later topic?

## Publication Blockers

- rights review is incomplete
- source-backed outline status is not achieved
- core relation and axiom definitions are not independently verified
- no formula is verified
- graph properties remain conditional
- CDF material is unsupported for direct use
- no exercise is source-checked or solution-checked

## Audit Decision

Keep this pack in `verification-required` evidence-pack status. Do not draft, publish, create topic records, create exercises, or implement graphs from this pack yet.

## Review History

| Date         | Reviewer           | Change                                                                                         | Result                  |
| ------------ | ------------------ | ---------------------------------------------------------------------------------------------- | ----------------------- |
| `2026-06-19` | `source-ingestion` | Created sanitized claim evidence pack for preferences and curves.                              | `extracted`             |
| `2026-06-19` | `source-ingestion` | Recorded validation-compatible audit status and publication blockers.                          | `structurally-mapped`   |
| `2026-06-19` | `source-ingestion` | Reviewed available private authoritative and assigned readings for selected preference claims. | `verification-required` |
