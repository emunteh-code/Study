# Mikroökonomik I Preferences Claim Evidence Pack

This is a sanitized claim and evidence pack. It records independently phrased claims, source locators, review results, and transformation constraints only. It does not contain private filenames, local paths, copied source text, formulas beyond minimal notation, exercise prompts, solutions, screenshots, checksums, lecturer names, email addresses, or original course files.

## Evidence-pack identity

- Evidence pack ID: `mikro1-preferences-claims`
- Related module audit: `mikro1-source-inventory`
- Pilot topic: `Preferences and indifference-curve basics`
- Evidence-pack status: `ready-for-outline`
- Review owner: `source-ingestion`
- Last updated: `2026-06-19`
- Public use status: ready for a narrowly scoped source-backed outline; not ready for drafting or publication

The relation-and-rationality review is complete for the bounded source-backed outline. The approved MIT OpenCourseWare PDFs directly verify the core relation definitions and rationality axioms; the strict-preference/indifference incompatibility is recorded as a derivation from those definitions. Remaining utility, graph, formula, rights, and exercise checks still block drafting and publication.

## Pilot-topic scope

The bounded scope remains preferences, preference relations, basic bundle notation, strict preference, weak preference, indifference, completeness, transitivity, ordinal ranking through utility representation, indifference curves, and basic indifference-curve properties when their assumptions are visible in the reviewed source range.

The course-source boundary is `mikro1-slides-11` p1-p11 for core claims, with p12-p15 used only as a dependency boundary for later marginal-rate-of-substitution work. `mikro1-cdf-06` remains private visual support for future graph reconstruction only and was not executed.

The reviewed private reading boundary adds one authoritative textbook extract and one assigned academic supplement. The separately approved MIT OpenCourseWare sources close the basic preference-relation, completeness, transitivity, notation, and derived strict-preference/indifference incompatibility gap; they do not verify every remaining utility or graph claim.

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

| Source ID                 | Role in pack                                        | Rights status            | Use in this task                                                                      |
| ------------------------- | --------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------- |
| `mikro1-slides-11`        | primary course evidence for claims and locators     | `private-reference-only` | private reference and sanitized locator mapping                                       |
| `mikro1-reading-02`       | principal authoritative textbook cross-check source | `private-reference-only` | source review for utility, indifference curves, convexity, and MRS                    |
| `mikro1-reading-06`       | assigned academic supplement                        | `private-reference-only` | secondary support for ordinal-utility interpretation only                             |
| `mikro1-cdf-06`           | private visual-support candidate                    | `unknown`                | static metadata only; no execution or code inspection                                 |
| `mit-ocw-14-121-01`       | approved authoritative relation source              | public PDF reference     | direct verification of binary relation, notation, derivations, and rationality axioms |
| `mit-ocw-14-123-01`       | approved authoritative corroborating source         | public PDF reference     | direct verification of relation, notation, definitions, and terminology difference    |
| `mikro1-source-inventory` | repository structural audit context                 | not a source file        | audit relationship and status context                                                 |

No source is eligible for redistribution from this pack.

## Reviewed authoritative-source identity

| Review source ID   | Sanitized source ID | Source kind                  | Safe bibliographic identity                                                                                                         | Review role                   | Review limitation                                                                                  |
| ------------------ | ------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------- |
| `review-source-01` | `mikro1-reading-02` | textbook extract             | Breyer, Mikroökonomik, 6th edition, consumer-theory extract                                                                         | principal review              | starts after the basic preference-relation definitions; strongest for utility and curve properties |
| `review-source-02` | `mikro1-reading-06` | assigned academic supplement | course-assigned utility-change supplement                                                                                           | secondary review              | supports ordinal utility only; not an independent general textbook source                          |
| `review-source-03` | `mit-ocw-14-121-01` | MIT OCW lecture slides       | MIT 14.121, _Microeconomic Theory I_, Fall 2015, “Lectures 1–2: Choice, Preference, and Utility,” Alexander Wolitzky and Alan Olivi | primary relation review       | direct PDF review; notation and printed slide numbers visually checked                             |
| `review-source-04` | `mit-ocw-14-123-01` | MIT OCW lecture notes        | MIT 14.123, _Microeconomic Theory III_, Spring 2015, Chapter 1, “Theory of Choice,” Muhamet Yildiz                                  | corroborating relation review | direct PDF review; its term “preference relation” includes completeness and transitivity           |

The review used the two approved MIT OpenCourseWare PDF resources directly. No source PDF is stored in the repository, and the audit uses concise paraphrases plus minimal formal notation only.

Approved direct PDF resources:

- `mit-ocw-14-121-01`: <https://ocw.mit.edu/courses/14-121-microeconomic-theory-i-fall-2015/b89cf6eb8d2118d015d4e41278ede14a_MIT14_121F15_1S.pdf>
- `mit-ocw-14-123-01`: <https://ocw.mit.edu/courses/14-123-microeconomic-theory-iii-spring-2015/a03ee2dcc7d1729d563f9333b4526586_MIT14_123S15_Chap1.pdf>

## Targeted relation-source search

The targeted review previously exhausted the private reading inventory. This task then inspected the two approved MIT OpenCourseWare PDFs directly and used their page and printed-page markers for claim-level verification.

| Search target                                      | Best private source found | Result                                                                                  | Audit decision                                                            |
| -------------------------------------------------- | ------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| formal preference-relation definition              | `mikro1-slides-11` p2     | `mit-ocw-14-121-01`, PDF p7 / printed slide 7; `mit-ocw-14-123-01`, PDF p2 / printed p2 | verify binary-relation framing and document terminology difference        |
| strict, weak, and indifference notation            | `mikro1-slides-11` p2     | `mit-ocw-14-121-01`, PDF p7 / printed slide 7; `mit-ocw-14-123-01`, PDF p3 / printed p3 | preserve matching course notation and record weak preference as primitive |
| completeness definition                            | `mikro1-slides-11` p3     | `mit-ocw-14-121-01`, PDF p8 / printed slide 8; `mit-ocw-14-123-01`, PDF p2 / printed p2 | source-checked formal disjunction                                         |
| transitivity definition                            | `mikro1-slides-11` p3     | `mit-ocw-14-121-01`, PDF p8 / printed slide 8; `mit-ocw-14-123-01`, PDF p2 / printed p2 | source-checked weak-preference implication                                |
| strict-preference and indifference incompatibility | `mikro1-slides-11` p8     | derived from the approved PDFs’ definitions on the locators above                       | include only as a labeled derivation, not as a direct quotation           |

This targeted search does not change the previously reviewed utility, graph, example, or exercise records except where relation definitions are dependencies.

## Source-locator map

| Locator ID            | Source ID           | Locator                                         | Evidence role                                                                                                        | Scope decision                                            |
| --------------------- | ------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `locator-pref-01`     | `mikro1-slides-11`  | p1                                              | lecture agenda and topic boundary                                                                                    | scope context only                                        |
| `locator-pref-02`     | `mikro1-slides-11`  | p2                                              | preference relation, notation, core assumptions                                                                      | core course scope                                         |
| `locator-pref-03`     | `mikro1-slides-11`  | p3                                              | completeness, transitivity, rationality relationship                                                                 | core course scope                                         |
| `locator-pref-04`     | `mikro1-slides-11`  | p4                                              | utility representation and notation                                                                                  | core course scope with review gap                         |
| `locator-pref-05`     | `mikro1-slides-11`  | p5                                              | non-satiation and convexity assumptions                                                                              | conditional course scope                                  |
| `locator-pref-06`     | `mikro1-slides-11`  | p6                                              | indifference-curve description and contour interpretation                                                            | core course scope                                         |
| `locator-pref-07`     | `mikro1-slides-11`  | p7                                              | indifference-curve family in a two-good graph                                                                        | core graph scope                                          |
| `locator-pref-08`     | `mikro1-slides-11`  | p8                                              | indifference-curve properties                                                                                        | conditional property scope                                |
| `locator-pref-09`     | `mikro1-slides-11`  | p9                                              | convexity graph illustration                                                                                         | conditional graph scope                                   |
| `locator-pref-10`     | `mikro1-slides-11`  | p10                                             | ordinal utility and monotone transformations                                                                         | course scope with partial review                          |
| `locator-pref-11`     | `mikro1-slides-11`  | p11                                             | ordinal-utility example structure                                                                                    | example structure only                                    |
| `locator-pref-12`     | `mikro1-slides-11`  | p12-p15                                         | marginal-rate-of-substitution material                                                                               | dependency boundary only                                  |
| `locator-review-01`   | `mikro1-reading-02` | PDF p1                                          | marginal-rate-of-substitution boundary and indifference-curve slope                                                  | confirms later-topic boundary and curve-slope context     |
| `locator-review-02`   | `mikro1-reading-02` | PDF p1-p2                                       | preference or utility function, quasiconcavity, convex curves                                                        | conditional support for utility and convexity claims      |
| `locator-review-03`   | `mikro1-reading-02` | PDF p4-p5                                       | fixed utility level and indifference-curve tangency context                                                          | support for equal-level indifference-curve interpretation |
| `locator-review-04`   | `mikro1-reading-06` | PDF p1                                          | ordinal interpretation of utility                                                                                    | secondary support for ordinal-utility claim               |
| `locator-mit-121-01`  | `mit-ocw-14-121-01` | PDF p7; printed slide 7                         | preference relation as a binary relation; weak relation is primitive; strict preference and indifference definitions | direct relation and notation verification                 |
| `locator-mit-121-02`  | `mit-ocw-14-121-01` | PDF p8; printed slide 8                         | rationality definition; completeness and transitivity                                                                | direct axiom verification                                 |
| `locator-mit-123-01`  | `mit-ocw-14-123-01` | PDF p2; printed p2; section 1.3; Definition 1.2 | relation, completeness, transitivity, and its preference-relation terminology                                        | direct corroboration and terminology comparison           |
| `locator-mit-123-02`  | `mit-ocw-14-123-01` | PDF p3; printed p3; section 1.4                 | strict preference and indifference definitions; meanings of the symbols                                              | direct derivation and notation corroboration              |
| `locator-pref-cdf-01` | `mikro1-cdf-06`     | static metadata only                            | indifference-curve visual-support candidate                                                                          | private reference only                                    |

The MIT locators record both the PDF page and the page or slide number printed in that PDF. The relevant MIT 14.121 PDF pages 7 and 8 have matching printed slide numbers; the MIT 14.123 PDF pages 2 and 3 have matching printed page numbers.

## Claim inventory

Claim review results used in this pack:

- `confirmed`: reviewed source directly supports the claim for the bounded topic.
- `confirmed-derived`: the approved source directly supports the premises and the audit records a complete, bounded derivation.
- `confirmed-with-condition`: reviewed source supports the claim only under a named scope, assumption, or sequencing limit.
- `course-specific`: the course source supports the claim, but the reviewed authoritative reading does not independently verify it.
- `notation-difference`: the source review found a notation or presentation difference that must be handled explicitly.
- `scope-adjustment-required`: the claim may remain in the broader evidence pack but must be excluded from a source-backed outline unless a named source gap is closed.
- `unsupported`: the available reviewed sources do not support the proposed claim.
- `blocked`: the claim cannot proceed because the source cannot be inspected or the evidence is unusable.

| Claim ID        | Proposed claim                                                                                                                                                               | Course locator                       | Review locator                             | Review result              | Condition or difference                                                                                                                                                                                                                            | Readiness                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------ | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `claim-pref-01` | A preference relation models how a consumer ranks pairs of consumption bundles.                                                                                              | `locator-pref-02`                    | `locator-mit-121-01`, `locator-mit-123-01` | `confirmed`                | 14.121 treats weak preference as a general binary relation on alternatives; 14.123 calls only complete and transitive relations preference relations. The audit follows the 14.121 distinction between a general relation and a rational relation. | `cross-checked`                  |
| `claim-pref-02` | The bounded source distinguishes strict preference, weak preference, and indifference as separate relations.                                                                 | `locator-pref-02`                    | `locator-mit-121-01`, `locator-mit-123-02` | `confirmed`                | course and both MIT PDFs use `≽` for weak preference, `≻` for strict preference, and `∼` for indifference; weak preference is primitive and the latter two are derived                                                                             | `cross-checked`                  |
| `claim-pref-03` | Completeness means the model can compare any two relevant bundles in a pairwise ranking.                                                                                     | `locator-pref-03`                    | `locator-mit-121-02`, `locator-mit-123-01` | `confirmed`                | direct source form: for every `x` and `y`, `x ≽ y` or `y ≽ x`; it is an axiom imposed on the weak relation, not a property of every relation                                                                                                       | `cross-checked`                  |
| `claim-pref-04` | Transitivity states that weak preference rankings remain consistent across linked bundle comparisons.                                                                        | `locator-pref-03`                    | `locator-mit-121-02`, `locator-mit-123-01` | `confirmed`                | direct source form: if `x ≽ y` and `y ≽ z`, then `x ≽ z`; it is an axiom imposed on the weak relation, not a property of every relation                                                                                                            | `cross-checked`                  |
| `claim-pref-05` | The source treats completeness plus transitivity as the rationality condition for the preference model.                                                                      | `locator-pref-03`                    | `locator-mit-121-02`                       | `confirmed`                | 14.121 defines a relation as rational only when both axioms hold; 14.123 uses "preference relation" for that same complete-and-transitive class                                                                                                    | `cross-checked`                  |
| `claim-pref-06` | A utility representation assigns utility values to bundles so that weak preference is represented by weakly higher utility.                                                  | `locator-pref-04`                    | `locator-review-02`                        | `confirmed-with-condition` | safe as course-aligned bridge; do not present a full representation theorem                                                                                                                                                                        | `conditional`                    |
| `claim-pref-07` | Utility is used here as an ordinal ranking device rather than as a meaningful cardinal measurement.                                                                          | `locator-pref-10`                    | `locator-review-04`, `locator-review-02`   | `confirmed`                | use as learner-facing warning after notation review                                                                                                                                                                                                | `cross-checked`                  |
| `claim-pref-08` | Positive monotone transformations preserve the represented preference order and the indifference-curve family.                                                               | `locator-pref-10`, `locator-pref-11` | none located                               | `course-specific`          | ordinal utility is supported, but the transformation statement still needs formula review                                                                                                                                                          | `external-verification-required` |
| `claim-pref-09` | Non-satiation is introduced as the assumption that more of each good raises utility in the modeled setting.                                                                  | `locator-pref-05`                    | none located                               | `course-specific`          | reviewed extract does not establish the basic more-is-better assumption                                                                                                                                                                            | `external-verification-required` |
| `claim-pref-10` | Convex preferences are introduced to justify a preference for mixtures between two equally ranked bundles.                                                                   | `locator-pref-05`, `locator-pref-09` | `locator-review-02`                        | `confirmed-with-condition` | safe only as an assumption or graph-property condition, not as a universal property                                                                                                                                                                | `conditional`                    |
| `claim-pref-11` | An indifference curve collects bundles that share the same utility level in the representation.                                                                              | `locator-pref-06`                    | `locator-review-03`                        | `confirmed`                | source supports fixed-level curve interpretation                                                                                                                                                                                                   | `cross-checked`                  |
| `claim-pref-12` | Indifference curves can be interpreted as contour lines of a utility surface.                                                                                                | `locator-pref-06`, `locator-pref-07` | none located                               | `course-specific`          | source figure must be replaced; contour interpretation needs independent verification                                                                                                                                                              | `external-verification-required` |
| `claim-pref-13` | In the displayed two-good graph convention, curves farther from the origin represent higher utility.                                                                         | `locator-pref-07`, `locator-pref-08` | `locator-review-03`                        | `confirmed-with-condition` | safe only in the two-good goods setting with the relevant monotonicity condition                                                                                                                                                                   | `conditional`                    |
| `claim-pref-14` | With non-satiation in the two-good setting, an indifference curve should not be positively sloped.                                                                           | `locator-pref-08`                    | `locator-review-01`                        | `confirmed-with-condition` | reviewed extract supports slope/MRS context; exception handling still needs verification                                                                                                                                                           | `conditional`                    |
| `claim-pref-15` | Strict preference and indifference cannot both hold for the same ordered pair; the curve claim is usable only when curves represent distinct indifference classes or levels. | `locator-pref-08`                    | `locator-mit-121-01`, `locator-mit-123-02` | `confirmed-derived`        | derived from the direct definitions: `x ≻ y` requires `x ≽ y` and not `y ≽ x`, while `x ∼ y` requires both directions. This is a relation-level result, not a general geometric proof absent the curve-representation condition.                   | `cross-checked`                  |
| `claim-pref-16` | Convexity of indifference curves is conditional on convex preferences.                                                                                                       | `locator-pref-08`, `locator-pref-09` | `locator-review-02`                        | `confirmed-with-condition` | safe only as a conditional property                                                                                                                                                                                                                | `conditional`                    |
| `claim-pref-17` | Marginal rate of substitution follows after the basic indifference-curve concept and should be treated as the next topic boundary.                                           | `locator-pref-12`                    | `locator-review-01`                        | `confirmed`                | keep as dependency boundary; do not draft MRS here                                                                                                                                                                                                 | `cross-checked`                  |

Review totals:

- Authoritative or assigned academic review sources used: 4
- Claims confirmed: 8
- Claims confirmed by derivation: 1
- Claims confirmed with conditions: 5
- Course-specific claims still requiring verification: 3
- Notation differences found: 0
- Terminology differences documented: 1
- Scope adjustments required: 0
- Unsupported claims: 0
- Blocked claims: 0

## Concept and definition inventory

| Concept ID        | Concept                           | Course-source status | Review-source status                     | Final scope decision                                                                                                    | Readiness       |
| ----------------- | --------------------------------- | -------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------- |
| `concept-pref-01` | alternative or consumption bundle | partially located    | verified as a generic alternative domain | use generic alternatives in source-backed outline; course-specific consumption-bundle wording remains alignment context | `cross-checked` |
| `concept-pref-02` | preference relation               | located              | directly verified                        | include with explicit distinction between a general binary relation and a rational relation                             | `cross-checked` |
| `concept-pref-03` | strict preference                 | located              | directly verified                        | include as derived from weak preference, not as a primitive relation                                                    | `cross-checked` |
| `concept-pref-04` | weak preference                   | located              | directly verified                        | include as the primitive relation used for the axioms                                                                   | `cross-checked` |
| `concept-pref-05` | indifference                      | located              | directly verified                        | include as derived from weak preference                                                                                 | `cross-checked` |
| `concept-pref-06` | indifference set                  | not explicitly named | not needed in reviewed source            | omit from version-one outline unless a later source justifies it                                                        | `omitted`       |
| `concept-pref-07` | indifference curve                | located              | verified for fixed-level use             | include as core graph concept after notation caveat                                                                     | `cross-checked` |
| `concept-pref-08` | ordinal preference ranking        | located              | verified                                 | include as core interpretation warning after formula notation review                                                    | `cross-checked` |
| `concept-pref-09` | completeness                      | located              | directly verified                        | include as an axiom; do not attribute it to every relation                                                              | `cross-checked` |
| `concept-pref-10` | transitivity                      | located              | directly verified                        | include as an axiom; do not attribute it to every relation                                                              | `cross-checked` |

Definitions resolved for source-backed outline: 8 of 10 concepts. Relation definitions located in the course source: 5 of 5 targeted relation concepts. Relation definitions independently verified by the approved MIT PDFs: 5 of 5 targeted relation concepts. One optional concept is omitted from the first scope. The remaining unresolved concepts do not block a narrowly scoped relation-and-rationality outline.

## Targeted relation-definition review

| Review ID            | Claim or concept ID                 | Course locator    | Authoritative-source locator               | Logical structure recorded in course source                                             | Notation     | Dependency                                        | Agreement status                                                | Final recommended interpretation                                                                   | Unresolved issue                                                                           |
| -------------------- | ----------------------------------- | ----------------- | ------------------------------------------ | --------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `relation-review-01` | `claim-pref-01`, `concept-pref-02`  | `locator-pref-02` | `locator-mit-121-01`, `locator-mit-123-01` | relation over consumption bundles or alternatives; course uses pairwise bundle ordering | `≿`          | weak relation is primitive in 14.121              | course notation agrees; terminology differs between MIT sources | use 14.121’s general binary-relation framing and reserve rationality for the axiom-satisfying case | 14.123’s narrower naming convention must remain documented                                 |
| `relation-review-02` | `claim-pref-02`, `concept-pref-03`  | `locator-pref-02` | `locator-mit-121-01`, `locator-mit-123-02` | strict preference is named separately in the course source                              | `≻`          | derived from weak preference                      | notation agrees                                                 | define by `x ≻ y` iff `x ≽ y` and not `y ≽ x`                                                      | none within the bounded definition                                                         |
| `relation-review-03` | `claim-pref-02`, `concept-pref-04`  | `locator-pref-02` | `locator-mit-121-01`, `locator-mit-123-02` | weak preference is the displayed preference relation used in later axiom notation       | `≿`          | primitive relation and parent relation for axioms | notation agrees                                                 | preserve course symbol and make its primitive role explicit                                        | none within the bounded definition                                                         |
| `relation-review-04` | `claim-pref-02`, `concept-pref-05`  | `locator-pref-02` | `locator-mit-121-01`, `locator-mit-123-02` | indifference is named as separate relation in course notation                           | `~`          | derived from weak preference                      | notation agrees                                                 | define by `x ∼ y` iff both `x ≽ y` and `y ≽ x`                                                     | none within the bounded definition                                                         |
| `relation-review-05` | `claim-pref-03`, `concept-pref-09`  | `locator-pref-03` | `locator-mit-121-02`, `locator-mit-123-01` | course gives pairwise comparability                                                     | `≻`, `~`     | completeness axiom on weak preference             | formal MIT notation agrees                                      | record `x ≽ y` or `y ≽ x` for every pair; do not call every relation complete                      | course’s strict-or-indifferent presentation is not used as a replacement formal definition |
| `relation-review-06` | `claim-pref-04`, `concept-pref-10`  | `locator-pref-03` | `locator-mit-121-02`, `locator-mit-123-01` | course gives a weak-preference chain implication                                        | `≿`          | transitivity axiom on weak preference             | notation agrees                                                 | record the three-alternative implication; do not infer it for arbitrary relations                  | strict and indifference transitivity are noted by 14.121 only after rationality            |
| `relation-review-07` | `claim-pref-15`, `property-pref-04` | `locator-pref-08` | `locator-mit-121-01`, `locator-mit-123-02` | course states non-intersection of indifference curves                                   | curve labels | derives from strict and indifference definitions  | relation-level derivation agrees with course direction          | include only the labeled incompatibility derivation plus the curve-representation condition        | no direct MIT geometric curve statement was identified                                     |

## Notation inventory

| Notation item                  | Course source              | Course symbol   | Unicode rendering | Later LaTeX rendering | Reviewed source                            | Equivalence and ambiguity decision                                                         | Readiness                        |
| ------------------------------ | -------------------------- | --------------- | ----------------- | --------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------ | -------------------------------- |
| strict preference relation     | `locator-pref-02`          | `≻`             | unambiguous       | `\succ`               | `locator-mit-121-01`, `locator-mit-123-02` | exact notation agreement; derived from weak preference                                     | `cross-checked`                  |
| weak preference relation       | `locator-pref-02`-`03`     | `≿`             | unambiguous       | `\succeq`             | `locator-mit-121-01`, `locator-mit-123-02` | exact notation agreement; primitive relation in the MIT definitions                        | `cross-checked`                  |
| indifference relation          | `locator-pref-02`          | `~`             | potentially broad | `\sim`                | `locator-mit-121-01`, `locator-mit-123-02` | exact notation agreement; define it explicitly rather than using bare tilde                | `cross-checked`                  |
| alternatives or bundles        | `locator-pref-02`-`03`     | `a`, `b`, `c`   | unambiguous       | `a`, `b`, `c`         | not matched directly                       | use as generic bundle labels only after domain statement is verified                       | `external-verification-required` |
| ordered vector notation        | `locator-pref-04`          | `(x_1,...,x_n)` | unambiguous       | `(x_1,\ldots,x_n)`    | `locator-review-02`                        | safe only for utility-function bridge; not needed for relation-definition outline yet      | `conditional`                    |
| utility or preference function | `locator-pref-04`, p10-p11 | `u`, `v`, `U`   | unambiguous       | source-specific       | `locator-review-02`, `locator-review-03`   | reviewed extract uses function framing; do not use to replace unresolved relation notation | `conditional`                    |
| utility level labels           | `locator-pref-06`-`07`     | curve labels    | unambiguous       | source-specific       | `locator-review-03`                        | relation source gap is closed; retain the existing utility-representation condition        | `conditional`                    |
| MRS notation                   | `locator-pref-12`          | source-specific | unassessed        | source-specific       | `locator-review-01`                        | outside topic boundary                                                                     | `located`                        |

Notation policy: preserve the course notation `≻`, `≿`, and `~`. It matches both approved MIT PDFs. Use `≿` as the primitive weak-preference relation; introduce `≻` and `∼` only through their verified definitions.

Notation records visually resolved: 4 targeted records. Notation records independently verified: 3 relation symbols; the generic bundle labels remain course-context notation rather than a formal MIT symbol match.

## Assumption inventory

| Assumption ID        | Assumption         | Course locator                       | Review locator                             | Review result              | Scope decision                                                     |
| -------------------- | ------------------ | ------------------------------------ | ------------------------------------------ | -------------------------- | ------------------------------------------------------------------ |
| `assumption-pref-01` | completeness       | `locator-pref-03`                    | `locator-mit-121-02`, `locator-mit-123-01` | `confirmed`                | required core axiom; source-backed relation outline may include it |
| `assumption-pref-02` | transitivity       | `locator-pref-03`                    | `locator-mit-121-02`, `locator-mit-123-01` | `confirmed`                | required core axiom; source-backed relation outline may include it |
| `assumption-pref-03` | non-satiation      | `locator-pref-05`, `locator-pref-08` | none located                               | `course-specific`          | use only as conditional graph assumption after verification        |
| `assumption-pref-04` | convex preferences | `locator-pref-05`, `locator-pref-09` | `locator-review-02`                        | `confirmed-with-condition` | graph-property assumption only                                     |
| `assumption-pref-05` | continuity         | not located as standalone claim      | not located                                | `unsupported`              | omit from first topic                                              |
| `assumption-pref-06` | differentiability  | later utility/MRS context            | `locator-review-01`                        | `confirmed-with-condition` | later-topic dependency only; do not include in the first outline   |

Assumptions resolved for a source-backed first outline: 2 core assumptions. Conditional graph assumptions resolved: 2. Omitted assumptions: 1.

## Completeness review

| Review ID                | Claim ID        | Course locator    | Authoritative-source locator               | Domain recorded                                      | Logical statement status                                                    | Relation to indifference                                       | Reflexivity status                                               | Final readiness |
| ------------------------ | --------------- | ----------------- | ------------------------------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------- | --------------- |
| `completeness-review-01` | `claim-pref-03` | `locator-pref-03` | `locator-mit-121-02`, `locator-mit-123-01` | pairs of alternatives; course frames them as bundles | both MIT PDFs directly state the weak-preference disjunction for every pair | indifference is derived separately from mutual weak preference | follows from completeness when `x = y`; not separately used here | `cross-checked` |

Completeness status: independently verified. It is an axiom on the weak relation; it must not be attributed to every relation before rationality or the 14.123 terminology convention is made explicit.

## Transitivity review

| Review ID                | Claim ID        | Course locator    | Authoritative-source locator               | Relation reviewed   | Logical statement status                                                       | Strict or indifference transitivity status                                                               | Final readiness |
| ------------------------ | --------------- | ----------------- | ------------------------------------------ | ------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- | --------------- |
| `transitivity-review-01` | `claim-pref-04` | `locator-pref-03` | `locator-mit-121-02`, `locator-mit-123-01` | weak preference `≿` | both MIT PDFs directly state the three-alternative weak-preference implication | 14.121 says strict preference and indifference are also transitive only if the weak relation is rational | `cross-checked` |

Transitivity status: weak-preference transitivity is independently verified. Do not collapse weak-preference, strict-preference, and indifference transitivity: 14.121 conditions the latter result on rationality.

## Logical dependency map

| Dependency ID        | Parent claim or concept                    | Dependent claim or concept                                     | Logical necessity                                                                                        | Source support                                              | Confidence | Belongs in pilot outline |
| -------------------- | ------------------------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ---------- | ------------------------ |
| `dependency-pref-01` | weak preference relation `concept-pref-04` | strict preference `concept-pref-03`                            | strict preference is derived by adding the absence of the reverse weak relation                          | direct definitions in both MIT PDFs                         | high       | yes                      |
| `dependency-pref-02` | weak preference relation `concept-pref-04` | indifference `concept-pref-05`                                 | indifference is derived by requiring both weak-relation directions                                       | direct definitions in both MIT PDFs                         | high       | yes                      |
| `dependency-pref-03` | preference relation `claim-pref-01`        | completeness `claim-pref-03`                                   | completeness constrains pairwise comparability of the weak relation                                      | direct definitions in both MIT PDFs                         | high       | yes                      |
| `dependency-pref-04` | weak preference `concept-pref-04`          | transitivity `claim-pref-04`                                   | transitivity constrains linked weak-preference comparisons                                               | direct definitions in both MIT PDFs                         | high       | yes                      |
| `dependency-pref-05` | completeness and transitivity              | rationality `claim-pref-05`                                    | 14.121 names the jointly axiom-satisfying relation rational; 14.123 uses preference-relation terminology | direct 14.121 definition; 14.123 terminology comparison     | high       | yes                      |
| `dependency-pref-06` | utility representation `claim-pref-06`     | indifference curve `claim-pref-11`                             | equal utility level defines curve membership                                                             | course-located and partly reviewed                          | high       | yes, after relation gap  |
| `dependency-pref-07` | weak preference definitions                | strict-preference/indifference incompatibility `claim-pref-15` | simultaneous strict preference and indifference requires both the reverse weak relation and its negation | direct premises in both MIT PDFs; complete audit derivation | high       | yes, as derived result   |
| `dependency-pref-08` | ordinal ranking `claim-pref-07`            | indifference-curve comparison                                  | ranking interpretation prevents cardinal reading                                                         | previously reviewed                                         | high       | yes, after relation gap  |

Dependency records created: 8. Graphical intuition is not treated as proof.

## Non-intersection review

| Review ID                   | Claim ID        | Course locator    | Authoritative-source locator               | Course support level                                  | Required assumptions or definitions                                                                                                                           | Review decision                                                                                         |
| --------------------------- | --------------- | ----------------- | ------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `nonintersection-review-01` | `claim-pref-15` | `locator-pref-08` | `locator-mit-121-01`, `locator-mit-123-02` | course statement; MIT definitions supply the premises | weak preference plus the derived strict-preference and indifference relations; geometric curve use additionally needs distinct indifference classes or levels | include as a derived relation-level result; do not present it as a direct MIT geometric-curve statement |

Proof skeleton, not learner prose:

1. Direct source premises: `x ≻ y` means `x ≽ y` and not `y ≽ x`; `x ∼ y` means `x ≽ y` and `y ≽ x`.
2. Assume both `x ≻ y` and `x ∼ y` for the same ordered pair.
3. Strict preference supplies not `y ≽ x`.
4. Indifference supplies `y ≽ x`.
5. The conjunction requires both `y ≽ x` and not `y ≽ x`, a contradiction.

Non-intersection status: the relation-level incompatibility is verified by derivation from the approved sources’ definitions. A geometric no-intersection statement remains conditional on curves representing distinct indifference classes or utility levels; no direct MIT geometric proof was identified.

## Conditional property review

| Property ID        | Property                                                                                 | Review result              | Condition that must appear in future content                                                        | Source gap remaining                              |
| ------------------ | ---------------------------------------------------------------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `property-pref-01` | an indifference curve represents equal utility level                                     | `confirmed`                | valid ordinal utility representation                                                                | relation-notation bridge still needs verification |
| `property-pref-02` | higher curves represent preferred bundles in the graph                                   | `confirmed-with-condition` | two-good goods setting and more-is-better condition                                                 | non-satiation source gap remains                  |
| `property-pref-03` | downward or non-positive slope under non-satiation                                       | `confirmed-with-condition` | goods setting; exception cases must not be overgeneralized                                          | exception handling remains                        |
| `property-pref-04` | strict preference and indifference do not overlap; curve non-intersection is conditional | `confirmed-derived`        | state the relation derivation and add the distinct-indifference-class or level condition for curves | no direct MIT geometric proof located             |
| `property-pref-05` | convexity toward the origin                                                              | `confirmed-with-condition` | convex preferences only                                                                             | non-convex counterexample omitted                 |
| `property-pref-06` | contour-line interpretation of a utility surface                                         | `course-specific`          | independently redrawn graph and verified contour-language source                                    | visual source replacement remains                 |
| `property-pref-07` | thinness or related curve-set property                                                   | `unsupported`              | none                                                                                                | omit from first topic                             |

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

| Exercise category ID | Future task category                                      | Target claim IDs                                  | Current status | Required before creation                                                                  |
| -------------------- | --------------------------------------------------------- | ------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------- |
| `exercise-pref-01`   | classify preference statements                            | `claim-pref-01`, `claim-pref-02`                  | not ready      | independently derived and second-checked solution required                                |
| `exercise-pref-02`   | interpret strict, weak, and indifferent relations         | `claim-pref-02`, `claim-pref-03`, `claim-pref-04` | not ready      | independently derived and second-checked solution required                                |
| `exercise-pref-03`   | check completeness or transitivity in small examples      | `claim-pref-03`, `claim-pref-04`                  | not ready      | independently derived and second-checked solution required                                |
| `exercise-pref-04`   | identify bundles on the same indifference curve           | `claim-pref-11`, `claim-pref-12`                  | not ready      | contour interpretation and graph replacement plan                                         |
| `exercise-pref-05`   | compare higher and lower curves under assumptions         | `claim-pref-09`, `claim-pref-13`                  | not ready      | non-satiation verification and source-backed graph conditions                             |
| `exercise-pref-06`   | recognise incompatible strict preference and indifference | `claim-pref-02`, `claim-pref-15`                  | not ready      | use only the verified relation derivation; independently derive and second-check solution |
| `exercise-pref-07`   | distinguish universal from conditional properties         | `claim-pref-13`, `claim-pref-14`, `claim-pref-16` | not ready      | conditions and exceptions verified                                                        |
| `exercise-pref-08`   | explain graph meaning in words                            | `claim-pref-11`, `claim-pref-12`, `claim-pref-13` | not ready      | graph meaning and ordinal warning verified together                                       |

No exercise prompt, answer, or solution is created in this task.

## Conflicts

| Conflict ID        | Source IDs                                                   | Locators                                                                            | Nature of conflict or gap                                                                                              | Status   | Required resolution                                                                           | Publication blocked                                      |
| ------------------ | ------------------------------------------------------------ | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `conflict-pref-01` | `mikro1-slides-11`, `mit-ocw-14-121-01`, `mit-ocw-14-123-01` | `locator-pref-02`, `locator-mit-121-01`, `locator-mit-123-01`, `locator-mit-123-02` | course and MIT notation agree; MIT sources differ only in whether the label preference relation presupposes the axioms | resolved | use the 14.121 general-relation/rational-relation distinction and document 14.123 terminology | no for source-backed outline                             |
| `conflict-pref-02` | `mikro1-slides-11`, `mikro1-reading-02`                      | `locator-pref-05`, `locator-review-02`                                              | convexity appears near later utility material but belongs here only as a conditional property                          | resolved | keep convexity conditional and do not present it as universal                                 | no for review; yes for publication                       |
| `conflict-pref-03` | `mikro1-slides-11`, `mikro1-cdf-06`                          | `locator-pref-cdf-01`                                                               | CDF relationship is known from structural audit, not from executed content                                             | open     | decide replacement graph strategy without executing or reusing CDF                            | yes for implementation                                   |
| `conflict-pref-04` | `mikro1-slides-11`                                           | `locator-pref-06`, `locator-pref-11`                                                | cited or source-specific visual/example structures appear in the course source                                         | open     | create independent replacement examples and graphs                                            | yes for copying; no for private review                   |
| `conflict-pref-05` | `mikro1-slides-11`, approved MIT sources                     | `locator-pref-02`, `locator-pref-03`, MIT relation locators                         | basic preference and axiom definitions are now sourced; the course uses bundle context while MIT states alternatives   | resolved | retain course bundles as context and MIT alternatives as the formal domain                    | no for source-backed outline                             |
| `conflict-pref-06` | `mikro1-slides-11`, approved MIT sources                     | `locator-pref-08`, `locator-mit-121-01`, `locator-mit-123-02`                       | strict preference and indifference incompatibility is derivable; direct geometric curve proof is not located           | resolved | label the derivation and retain the curve-representation condition                            | no for relation outline; yes for unqualified graph claim |

Targeted conflicts resolved: 3. Targeted conflicts narrowed: 0. Targeted conflicts remaining: 0. One terminology divergence is documented, but no notation mismatch or substantive academic contradiction remains for the bounded relation-and-rationality scope.

## External verification requirements

| Requirement ID   | Claim ID                                                                            | What must be verified                                                                  | Review result from this task                              | Mandatory before outline                                    | Course source remains primary for alignment |
| ---------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------- |
| `verify-pref-01` | `claim-pref-01`, `claim-pref-02`, `claim-pref-03`, `claim-pref-04`, `claim-pref-05` | standard relation definitions, formal notation, axioms, and rationality distinction    | resolved with direct MIT PDF locators                     | no                                                          | yes                                         |
| `verify-pref-02` | `claim-pref-06`, `claim-pref-08`                                                    | utility-representation notation and positive monotone transformation statement         | partly resolved                                           | yes                                                         | yes                                         |
| `verify-pref-03` | `claim-pref-09`, `claim-pref-13`, `claim-pref-14`                                   | conditions under which more-is-better implies higher curves and non-positive slopes    | partly resolved                                           | yes                                                         | yes                                         |
| `verify-pref-04` | `claim-pref-15`                                                                     | derivation of strict-preference/indifference incompatibility; curve condition          | resolved as derived result; no direct MIT geometric proof | no for relation outline; yes for an unqualified graph claim | yes                                         |
| `verify-pref-05` | `claim-pref-16`                                                                     | convexity of indifference curves under convex preferences and possible exceptions      | partly resolved                                           | no, if kept conditional                                     | yes                                         |
| `verify-pref-06` | `concept-pref-06`                                                                   | whether an indifference set should be introduced separately from an indifference curve | no longer required if omitted                             | no                                                          | yes                                         |
| `verify-pref-07` | `property-pref-07`                                                                  | thinness or related curve-set property if desired                                      | no longer required if omitted                             | no                                                          | yes                                         |

External verification items fully resolved: 2. External verification items partly resolved: 3. External verification items still required for included scope: 0 for the bounded relation-and-rationality outline. External verification items required only for unqualified graph or formula claims: 2. External verification items no longer required for the first topic: 2. Direct MIT PDF research was performed in this task.

## Rights and transformation assessment

| Source ID           | Rights status            | Intended future use                                                                                            | Direct redistribution prohibited | Distinctive structure to avoid                                     |
| ------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------ |
| `mikro1-slides-11`  | `private-reference-only` | paraphrased explanation, independently reconstructed graphs, original example design, original exercise design | yes                              | slide wording, examples, graph layout, figure assets               |
| `mikro1-reading-02` | `private-reference-only` | source verification and private reference for reviewed claims                                                  | yes                              | textbook wording, examples, graph layout                           |
| `mikro1-reading-06` | `private-reference-only` | secondary source verification for ordinal-utility warning                                                      | yes                              | supplement wording and derivation structure                        |
| `mikro1-cdf-06`     | `unknown`                | private reference for graph behaviour only                                                                     | yes                              | CDF interaction, code, visual assets, parameter structure          |
| `mit-ocw-14-121-01` | public PDF reference     | claim verification by concise paraphrase, metadata, locator, and minimal formal notation                       | yes                              | slide wording, layout, examples, and full slide reproduction       |
| `mit-ocw-14-123-01` | public PDF reference     | claim verification by concise paraphrase, metadata, locator, and minimal formal notation                       | yes                              | lecture-note wording, layout, examples, and full note reproduction |

No final legal conclusion is made by this pack.

## Claim readiness

| Readiness level                  | Meaning in this pack                                                     | Count |
| -------------------------------- | ------------------------------------------------------------------------ | ----- |
| `cross-checked`                  | reviewed source supports the claim for bounded future drafting           | 9     |
| `conditional`                    | reviewed source supports the claim only under named conditions           | 5     |
| `external-verification-required` | course source supports the claim, but source gap or notation gap remains | 3     |
| `confirmed-derived`              | source-supported premises and a complete bounded derivation are recorded | 1     |
| `blocked`                        | cannot proceed because evidence is unusable                              | 0     |

The remaining `external-verification-required` claims concern utility transformation, non-satiation, and contour interpretation rather than the relation-and-rationality core. Claim extraction is complete for the bounded evidence pack. Source checking is sufficient for a narrowly scoped source-backed outline, not for drafting or publication.

## Topic-stage readiness

| Stage                          | Readiness                           | Reason                                                                                                                                                                                                |
| ------------------------------ | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| source review                  | complete for bounded relation scope | approved MIT PDFs directly verify relation definitions, notation, rationality axioms, and the derived incompatibility                                                                                 |
| source-backed lesson outlining | ready with scope limits             | may outline alternatives, weak preference, derived strict preference and indifference, completeness, transitivity, rationality, and the labeled derivation; defer unverified formula and graph claims |
| prose drafting                 | not ready                           | source-backed outline readiness does not complete formula, graph, rights, editorial, or exercise review                                                                                               |
| graph specification            | conditionally ready                 | graph purposes and several curve claims are reviewed conditionally, but core assumptions remain open                                                                                                  |
| original worked-example design | not ready                           | source examples are private-reference-only and replacements depend on verified claims                                                                                                                 |
| original exercise design       | not ready                           | exercises need verified definitions, checked solutions, and provenance records                                                                                                                        |
| exercise review                | not ready                           | no exercise prompt, answer, or solution is source-checked                                                                                                                                             |
| publication                    | not ready                           | rights review, source checking, exercise checking, graph verification, and editorial review remain open                                                                                               |

## Drafting blockers

- The utility-representation bridge is only conditionally verified and must not become a full representation theorem.
- Positive monotone transformations require formula workflow before learner-facing use.
- Non-satiation and higher-curve statements remain conditional and need exception handling.
- An unqualified geometric non-intersection claim still needs a direct source or a separate complete geometric proof; the approved relation-level derivation is narrower.
- CDF material is unsupported for direct use and must not be executed or reused.
- No official or adapted exercises are available.
- Original exercises need complete solutions and second review before creation.
- Rights status remains `private-reference-only` or `unknown`.

## Recommended next task

Create a source-backed outline for the verified relation-and-rationality subset only. Keep utility transformations, non-satiation, unqualified geometric non-intersection, contour interpretation, graphs, exercises, and learner prose out of that bounded task.

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

`mikro1-slides-11` is the course-source range for preference representation and indifference curves. The targeted review confirmed that it is also the only private source located for relation notation, completeness, transitivity, and non-intersection. `mikro1-reading-02` is a reviewed textbook extract that supports utility, indifference-curve, convexity, and MRS-boundary claims but not the basic preference-relation axioms. `mikro1-reading-06` is reviewed only for ordinal utility. `mikro1-cdf-06` is an unsupported legacy visualization or model file that may support later private graph-behaviour checking but cannot be used directly.

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
6. conditional properties of indifference curves; use only the labeled derived relation result for strict preference and indifference
7. next-step boundary to marginal rate of substitution

Items 1 through 3 are approved for a narrowly scoped source-backed outline. The strict-preference/indifference incompatibility may appear only as the labeled derivation in this pack. An unqualified geometric non-intersection claim remains outside the first outline unless a separate proof or direct source is verified.

## Exercise And Solution Mapping

No exercises or solutions are extracted or created in this task. Future original exercises should use the constraints in `Original-exercise design constraints` and must wait for source checking and solution verification.

## Formula And Definition Inventory

Definitions and notation are inventoried in `Concept and definition inventory` and `Notation inventory`. Formula-level claims are not approved; they require the formula workflow before publication.

## Graph And Figure Inventory

Graph evidence is inventoried in `Graph inventory` and `Future graph-behaviour specification`. No graph is reproduced, redrawn, or implemented in this task.

## Source Conflicts

Conflict records are listed in `Conflicts`. Convexity remains conditional. The three targeted relation, notation, and non-intersection conflicts are resolved for the bounded relation-and-rationality scope; one terminology difference is documented.

## Missing Material

- direct source or separate proof for an unqualified geometric non-intersection claim
- formula-level verification
- rights review
- original graph replacement plan
- original exercise solutions and second review

## Copyright And Publication Assessment

All source use remains private-reference-only or unknown. Future public content must be paraphrased, independently structured, source-traceable, and reviewed before publication.

## Candidate First Topic

The bounded candidate remains `Preferences and indifference-curve basics`. A future source-backed outline may include alternatives, preference relation, weak preference, derived strict preference and indifference, completeness, transitivity, rationality, and the labeled relation-level derivation. Utility transformation, unqualified geometric non-intersection, and graph claims remain outside that bounded outline.

## Content Transformation Plan

Transform this pack into learner-facing content only after formula workflow, graph review, rights review, and exercise checking are complete. Future content must use independent prose, independently redrawn accessible graphs, and original exercises with checked solutions.

## Verification Requirements

Verification requirements are listed in `External verification requirements`. Relation notation, completeness, and transitivity are complete for the bounded outline. An unqualified geometric non-intersection claim must remain excluded or receive separate verification.

## Open Questions

- How should the first topic avoid utility-maximization material while still explaining indifference curves?
- Should a later source review add a direct geometric no-intersection proof, or keep that graph property outside the first topic?

## Publication Blockers

- rights review is incomplete
- no formula is verified
- graph properties remain conditional
- CDF material is unsupported for direct use
- no exercise is source-checked or solution-checked

## Audit Decision

Keep this pack in `ready-for-outline` evidence-pack status. A narrowly scoped source-backed relation-and-rationality outline is permitted. Do not draft, publish, create topic records, create exercises, or implement graphs from this pack yet.

## Review History

| Date         | Reviewer           | Change                                                                                         | Result                  |
| ------------ | ------------------ | ---------------------------------------------------------------------------------------------- | ----------------------- |
| `2026-06-19` | `source-ingestion` | Created sanitized claim evidence pack for preferences and curves.                              | `extracted`             |
| `2026-06-19` | `source-ingestion` | Recorded validation-compatible audit status and publication blockers.                          | `structurally-mapped`   |
| `2026-06-19` | `source-ingestion` | Reviewed available private authoritative and assigned readings for selected preference claims. | `verification-required` |
| `2026-06-19` | `source-ingestion` | Performed targeted relation, axiom, notation, and non-intersection review.                     | `verification-required` |
