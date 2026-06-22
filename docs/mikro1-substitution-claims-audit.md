# Mikro I Substitution Claims Audit

## Scope And Source Hierarchy

This is a non-production academic audit for the bounded unit **substitution elasticity and homothetic utility functions**. Course notation is controlled by `M1-SUB-LECTURE-01`; Oregon State University's open _Intermediate Microeconomics_, Module 2, is the authoritative external cross-check for ordinal utility, monotone transformations, marginal utility, and MRS terminology. The course source controls notation where the two differ.

## Verified Claims

| Claim ID       | Claim                                                                                                                                                                      | Course evidence   | External evidence                                                                                                                                     | Restrictions and implementation suitability                                                                                                           |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `claim-sub-01` | Course GRS is the absolute indifference-curve slope and equals `u_{x_1}/u_{x_2}`.                                                                                          | lecture pp. 4, 6  | [OSU Module 2](https://open.oregonstate.education/intermediatemicroeconomics/chapter/module-2/) derives a signed MRS/slope from marginal utilities.   | Use course label and positive ratio. Require differentiability, an interior point, and `u_{x_2} \ne 0`; exclude kinks and boundaries.                 |
| `claim-sub-02` | Elasticity is a proportional-response measure; course substitution elasticity uses `x_2/x_1` over GRS.                                                                     | lecture pp. 3-6   | [OSU Module 5](https://open.oregonstate.education/intermediatemicroeconomics/chapter/module-5/) verifies derivative-times-ratio elasticity structure. | Ratios and logarithms require positive quantities and GRS. Do not treat reciprocal conventions as identical without explicitly inverting the measure. |
| `claim-sub-03` | The course CES representation has `\rho<1` and constant substitution elasticity `1/(1-\rho)`.                                                                              | lecture p. 8      | external CES-specific verification remains required                                                                                                   | Conditionally usable only for course-aligned notation and original symbolic work after a CES-specific source review.                                  |
| `claim-sub-04` | Utility is ordinal; strictly increasing transformations preserve ranking.                                                                                                  | lecture pp. 11-12 | [OSU Module 2](https://open.oregonstate.education/intermediatemicroeconomics/chapter/module-2/)                                                       | A property of a representation, not cardinal welfare. Do not claim that every transformation preserves linear homogeneity.                            |
| `claim-sub-05` | A linearly homogeneous representation satisfies `F(\lambda x)=\lambda F(x)` for `\lambda>0`; a homothetic representation may be a positive monotone transformation of one. | lecture pp. 11-12 | external formal characterization remains required                                                                                                     | Keep as conditional; distinguish representation properties from preference properties.                                                                |

## Formula And Notation Registry

| Formula ID       | Formula                                           | Definitions and restrictions                                                                              | Evaluation status                                              |
| ---------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `formula-sub-02` | `GRS=\left                                        | dx_2/dx_1\right                                                                                           | =u*{x_1}/u*{x_2}`                                              | `x_i` are quantities; `u_{x_i}` is the partial derivative. Differentiable interior curve; positive ratio and nonzero `u_{x_2}` required. | structured symbolic only |
| `formula-sub-03` | `\sigma=d\ln(x_2/x_1)/d\ln(u_{x_1}/u_{x_2})`      | Positive quantity and GRS ratios; locally differentiable relation.                                        | exclude from deterministic grading pending external CES review |
| `formula-sub-04` | `u=[\alpha x_1^\rho+(1-\alpha)x_2^\rho]^{1/\rho}` | Course states `\rho<1`; weighting, positivity, and domain restrictions require CES-specific verification. | not production-ready                                           |
| `formula-sub-05` | `\sigma=1/(1-\rho)`                               | Course parameterization; `\rho=0` is a limiting, not direct, case for the displayed expression.           | not production-ready                                           |
| `formula-sub-06` | `F(\lambda x_1,\lambda x_2)=\lambda F(x_1,x_2)`   | `\lambda>0`; degree-one homogeneity of a representation.                                                  | self-review only until formal review                           |

## Derivation Review

Holding utility fixed gives `du=u_{x_1}dx_1+u_{x_2}dx_2=0`, so the signed slope is `dx_2/dx_1=-u_{x_1}/u_{x_2}` when `u_{x_2}\ne0`; the course GRS is its absolute value. For the displayed CES form, direct differentiation gives marginal utilities proportional to `x_i^{\rho-1}` and hence a GRS proportional to `(x_1/x_2)^{\rho-1}`. Log differentiation therefore yields `d\ln(x_2/x_1)/d\ln(GRS)=1/(1-\rho)`, subject to the stated positivity and differentiability restrictions. Degree-one homogeneity follows by factoring `\lambda^\rho` inside the CES bracket for `\lambda>0`.

Perfect substitutes, Cobb-Douglas, and perfect complements are **not** included as direct course-supported CES cases in this audit. The course treats `\rho=0` as a limiting special case; no learner-facing limiting-case claim is approved until an external CES source checks exact convergence and transformation qualifications.

## Misconceptions

- `mis-sub-01`: GRS equals the signed slope. Correction: the course defines GRS as the absolute slope.
- `mis-sub-02`: the GRS ratio may be inverted without changing the elasticity. Correction: orientation must be fixed before interpretation.
- `mis-sub-03`: ordinal utility differences are measurable welfare differences. Correction: transformations preserving order represent the same ranking.
- `mis-sub-04`: homotheticity means every increasing transformation is linearly homogeneous. Correction: the properties must be separated.

## Rights And Readiness

Private course materials: internal factual verification only. Oregon State material: external factual cross-check with citation; do not copy examples, figures, or prose. Future exercises, diagrams, values, and feedback must be original.

**Status: Conditionally ready.** Learner-facing development may eventually cover the course GRS convention, elasticity orientation, and ordinal/homothetic distinction using original material. CES calculations, limiting cases, canonical preference forms, and any signed-MRS instruction remain excluded until CES-specific authoritative verification and a rights-reviewed exercise specification are complete.
