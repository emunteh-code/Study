# Mikro I Substitution Exercise Readiness

## Authority And Weighted Limit

The generalized-mean reference is N. Sheldon, [_The Generalized Mean_](https://e1-cause.science.psu.edu/cause/research/literature/generalized-mean), _Teaching Statistics_ 26(1), 2004. It records the generalized/power-mean framework; the project also records the following independent two-good proof for the exact course normalization.

Let `m=min{x_1,x_2}`, with `0<alpha<1` and `x_1,x_2>0`. If `x_1<x_2`, write `r=x_2/m>1`. Then

`u_rho=m[alpha+(1-alpha)r^rho]^(1/rho)`.

As `rho -> -infinity`, the bracket tends to `alpha`; since `alpha>0` is fixed, `alpha^(1/rho)->1`. Thus the limit is `m`. The `x_2<x_1` case is identical with the fixed minimum weight `1-alpha`. If `x_1=x_2=m`, the bracket is exactly `m^rho`, so the value is exactly `m` for every finite admissible `rho`. Therefore the pointwise functional limit is `min{x_1,x_2}` on the strictly positive domain. Fixed positive weights disappear. `rho=-infinity` is a limit, not a finite parameter value, and `sigma=1/(1-rho)->0`.

For finite negative `rho`, the displayed negative-power representation is treated as interior-only. The minimum has a continuous extension to nonnegative bundles; that does not validate finite-parameter derivatives, GRS, logarithms, or elasticity at zero.

## Definitive Limit Table

| Regime             | Classification                                                                                                            | Approved wording                                                              | Excluded wording                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `rho -> 1`         | excluded endpoint; weighted-linear functional limit; `sigma -> infinity`                                                  | represented preferences approach weighted perfect substitutes                 | `rho=1` is an ordinary course parameter                                             |
| `rho -> 0`         | excluded direct substitution; Cobb-Douglas preference limit after normalization or monotonic transformation; `sigma -> 1` | represented preferences approach Cobb-Douglas                                 | unqualified convergence of displayed utility levels                                 |
| `rho -> -infinity` | pointwise functional limit on positive bundles; continuous minimum extension; `sigma -> 0`                                | fixed positive weights disappear and preferences approach perfect complements | a weighted minimum for this normalization, or finite-parameter boundary derivatives |

## Formula Registry

| ID               | Formula                                                                     | Exact use                                                   |
| ---------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `formula-sub-04` | `u=[alpha x_1^rho+(1-alpha)x_2^rho]^(1/rho)`                                | interior CES: `0<alpha<1`, `x_i>0`, `rho<1`, `rho!=0`       |
| `formula-sub-07` | `u_x1=alpha x_1^(rho-1)S^(1/rho-1)`, `u_x2=(1-alpha)x_2^(rho-1)S^(1/rho-1)` | `S=alpha x_1^rho+(1-alpha)x_2^rho`; exact structured fields |
| `formula-sub-08` | `GRS_12=alpha/(1-alpha)(x_1/x_2)^(rho-1)`                                   | positive course GRS; reject inverted orientation            |
| `formula-sub-05` | `sigma=1/(1-rho)` and `rho=1-1/sigma`                                       | require finite positive `sigma`                             |
| `formula-sub-09` | `u(tx)=t u(x)`                                                              | `t>0`, interior domain closure                              |

## Original Exercise Blueprint

All prompts, values, distractors, feedback, and solution prose must be original. Deterministic items use structured fields; incomplete inputs are ungraded, malformed inputs are invalid, and no item uses partial credit.

| ID                | Objective and response                                                                     | Evaluation and completion                                     |
| ----------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| `sub-practice-01` | distinguish signed slope from positive GRS; choice                                         | exact option; submit complete response                        |
| `sub-practice-02` | identify GRS ratio orientation; choice                                                     | exact option; reject inverse distractor                       |
| `sub-practice-03` | identify interior derivative assumptions; multi-choice                                     | all required conditions selected                              |
| `sub-practice-04` | evaluate CES at an interior original bundle; numeric                                       | exact rational value; decimals accepted at explicit tolerance |
| `sub-practice-05` | calculate two marginal utilities; two numeric fields                                       | exact fractions/decimals; all fields required                 |
| `sub-practice-06` | calculate course GRS; numeric ratio                                                        | exact ratio or decimal; orientation fixed                     |
| `sub-practice-07` | diagnose inverted GRS; classification plus corrected ratio                                 | structured exact fields                                       |
| `sub-practice-08` | calculate `sigma` from `rho`; numeric                                                      | exact fraction/decimal; reject excluded `rho`                 |
| `sub-practice-09` | recover `rho` from positive finite `sigma`; numeric                                        | exact fraction/decimal                                        |
| `sub-practice-10` | verify degree-one homogeneity; structured coefficient fields                               | exact symbolic coefficients, no CAS parsing                   |
| `sub-practice-11` | distinguish homogeneous representation from homothetic preferences; choice and explanation | self-review after required fields complete                    |
| `sub-practice-12` | classify three CES limits and restrictions; table fields                                   | self-review; comparison opens only when complete              |

## Misconceptions And Rights

Coverage includes signed slope versus GRS, inverted marginal-utility ratio, reversed goods ratio, GRS versus elasticity, direct `rho=0` substitution, treating limits as ordinary parameters, homogeneity versus homotheticity, transformation loss of degree-one homogeneity, constant elasticity versus constant GRS, and ignored interior restrictions.

Course, Oregon State, ETH, and generalized-mean sources are factual verification only. Direct exercise, figure, wording, or solution reproduction is prohibited; future diagrams must be original and accessible.

## Readiness Decision

**Conditionally ready.** A complete practice route is not yet authorized: the 12-item blueprint still requires an independent model-solution audit and rights review. The approved future scope is interior CES arithmetic, course GRS orientation, finite positive elasticity conversion, degree-one homogeneity, and constrained conceptual self-review. Excluded: consumer optimization, boundary derivatives, unrestricted symbolic and free-text grading, copied materials, and graph interaction.
