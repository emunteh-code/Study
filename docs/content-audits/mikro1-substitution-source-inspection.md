# Mikroökonomik I Substitution And Homothetic Utility: Source Inspection

This sanitized record is based on read-only inspection of private course materials outside the repository. It contains no private filenames, paths, copied exercise wording, figures, or source prose.

## Audit Identity

- Audit ID: `mikro1-substitution-source-inspection`
- Audit status: `structurally-mapped`
- Review owner: `source-ingestion`
- Last updated: `2026-06-22`

## Topic Boundary

The inspected next lecture unit is **substitution elasticity and homothetic utility functions**. It begins with elasticity and the marginal-rate-of-substitution relationship, then covers substitution elasticity, CES utility, and homotheticity. The same lecture subsequently begins graphical consumer optimization; that optimization material is deferred because it starts a distinct budget-set and choice problem.

Included: substitution elasticity, the marginal-utility ratio used as GRS, CES as a constant-elasticity family, linear homogeneity, homothetic utility, and the ordinal interpretation relevant to positive monotone transformations.

Deferred: budget constraints, graphical household optimum, tangency conditions, demand derivation, price and income changes, and Slutsky decomposition.

Prerequisites: the existing preference-relations unit, two-good bundle notation, indifference curves, and the course’s weak-preference notation.

## Sanitized Document Inventory And Roles

| Sanitized ID        | Role                        | Evidence                               | Verification                                           | Rights use                                                |
| ------------------- | --------------------------- | -------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |
| `M1-SUB-LECTURE-01` | primary lecture source      | 20-slide third lecture unit            | directly inspected                                     | internal factual, notation, and formula verification only |
| `M1-SUB-LECTURE-00` | prerequisite lecture source | prior preference/utility lecture       | previously inspected through existing preference audit | internal verification only                                |
| `M1-SUB-CDF-01`     | supplementary visual source | indifference-curve interaction         | present but not executed                               | not usable for reproduction                               |
| `M1-SUB-CDF-02`     | supplementary visual source | homothetic-utility interaction         | present but not executed                               | not usable for reproduction                               |
| `M1-SUB-CDF-03`     | supplementary visual source | substitution-rate interaction          | present but not executed                               | not usable for reproduction                               |
| `M1-SUB-TEXT-01`    | required-textbook reference | assigned chapters named by the lecture | edition and accessible copy not inspected              | external verification still required                      |

No directly associated tutorial sheet, official exercise sheet, or official solution was confirmed in the inspected material for this bounded unit. Exam-style and supplemental material exists in the private collection but remains unverified for provenance and solution status.

## Course Notation And Formula Findings

| Formula ID       | Sanitized formula                                                                            | Restrictions and interpretation                                                                                                                      | Course locator            |
| ---------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| `formula-sub-01` | `\varepsilon_{A,B}=\frac{d(A)/A}{d(B)/B}`                                                    | elasticity is a proportional response; requires nonzero reference values where the ratio is used                                                     | lecture pp. 3-4           |
| `formula-sub-02` | `GRS=\left                                                                                   | \frac{dx_2}{dx_1}\right                                                                                                                              | =\frac{u*{x_1}}{u*{x_2}}` | course uses GRS as the **absolute value** of the indifference-curve slope and orders the ratio as marginal utility of good 1 over good 2; derivative relationship presumes a differentiable utility representation and nonzero denominator | lecture pp. 4, 6 |
| `formula-sub-03` | `\sigma=\frac{d(x_2/x_1)/(x_2/x_1)}{d(GRS)/GRS}=\frac{d\ln(x_2/x_1)}{d\ln(u_{x_1}/u_{x_2})}` | substitution elasticity compares proportional changes; requires positive ratios/log arguments and differentiable local relationship                  | lecture pp. 4, 6          |
| `formula-sub-04` | `u(x_1,x_2)=[\alpha x_1^\rho+(1-\alpha)x_2^\rho]^{1/\rho}`                                   | CES form is presented with `\rho<1`; the `\rho=0` display is treated as a limiting special case rather than direct substitution into this expression | lecture p. 8              |
| `formula-sub-05` | `\sigma=\frac{1}{1-\rho}`                                                                    | applies to the displayed CES family, subject to the stated special-case caveat                                                                       | lecture p. 8              |
| `formula-sub-06` | `F(\lambda x_1,\lambda x_2)=\lambda F(x_1,x_2),\ \lambda>0`                                  | definition of linear homogeneity for the two-good function in this unit                                                                              | lecture p. 11             |

The course calls the marginal-rate measure `GRS`; future learner-facing material must not silently replace it with a signed slope or invert the ratio. The negative signed slope is not asserted by this source-layer record because the inspected source defines the absolute value.

## Diagram And Exercise Findings

The lecture contains indifference-curve plots for curvature and homotheticity. They communicate two-good axes, curve curvature, origin rays, and constant slope along a ray for the homothetic illustration. Source figures must not be reused. Any later diagram must be original, use labelled axes and a full text alternative, and state the assumptions governing the claimed curve behavior.

The lecture includes one worked calculation pattern for a two-good multiplicative utility representation and one CES parameter relationship. These are usable only as internal verification patterns; future prompts, values, diagrams, feedback, and solution prose must be original.

## Rights And Consistency Review

Private lecture, supplementary interaction, and exam-style sources are usable for factual and notation verification only. They are not evidence of permission to reproduce wording, figures, exercises, or solutions. The CDF files remain unexecuted and unavailable as production assets.

No notation conflict was found within the primary lecture: GRS is consistently the positive marginal-utility ratio and absolute curve slope. The major implementation risk is scope: consumer optimization begins in the same deck but requires a separate evidence pack.

## Readiness Decision

**Source layer conditionally ready.** The bounded substitution-elasticity and homothetic-utility source layer is inspectable, its notation is recoverable, and its topic boundary is established. A full claims audit may proceed for `formula-sub-01` through `formula-sub-06` only.

Excluded until separately verified: general utility representation theorems, monotone-transformation formulas beyond the course’s qualitative homothetic statement, canonical preference forms beyond CES, MRS sign conventions not expressed as the course’s absolute GRS, consumer optimization, and all source-derived exercises or solutions.

Required external review: an authoritative textbook or open university source for formal conditions, limiting cases, and any claim beyond the inspected lecture’s stated scope.

## Module Identity

- Module ID: `module-mikro1-candidate`
- Module title: `Mikroökonomik I`
- Official affiliation: Independent platform, not an official university offer.

## Audit Scope

Read-only private-source inspection for the bounded next lecture unit only.

## Audit Status

- Current state: `structurally-mapped`
- Next valid state: `rights-reviewed`
- Blockers: external formula verification and source-rights review.

## Private-Source Location Reference

- Private collection key: `external-course-materials/mikro1`

## Sanitised File Inventory

See Sanitized Document Inventory above.

## Source Classification

Primary lecture source, private supplementary interactions, and an uninspected textbook reference are distinguished above.

## Semester Or Version Evidence

Version evidence was visible in the private lecture metadata; it is retained outside Git.

## Lecturer Or Author Evidence

Author evidence was visible in private lecture metadata; it is not reproduced here.

## Proposed Topic Structure

The bounded topic structure is substitution elasticity and homothetic utility functions; optimization is deferred.

## Exercise And Solution Mapping

No approved exercise or solution source was confirmed for publication-oriented reuse.

## Formula And Definition Inventory

See Course Notation And Formula Findings above.

## Graph And Figure Inventory

See Diagram And Exercise Findings above.

## Source Conflicts

No within-lecture notation conflict was found. The signed-slope convention remains intentionally unasserted.

## Missing Material

Authoritative external verification, rights review, and approved exercise/solution evidence remain missing.

## Copyright And Publication Assessment

Rights status: `private-reference-only`. Direct source reproduction is not approved.

## Candidate First Topic

Not selected for production; the source layer is only conditionally ready for a claims audit.

## Content Transformation Plan

Future content must use original explanations, values, diagrams, prompts, feedback, and solutions derived from verified mathematics.

## Verification Requirements

Verify formal conditions, limiting cases, rights, and any later exercise design with an authoritative external source.

## Open Questions

Whether the required textbook edition and official exercise/solution materials establish additional allowable scope.

## Publication Blockers

No rights-reviewed or source-checked learner-facing claims package exists.

## Audit Decision

Continue classification and external verification; do not draft production content.

## Review History

| Date         | Reviewer           | Change                              | Result                |
| ------------ | ------------------ | ----------------------------------- | --------------------- |
| `2026-06-22` | `source-ingestion` | Read-only private source inspection | `structurally-mapped` |
