# Mikro I Substitution: Implementation-Authoritative Specification

This file is authoritative for implementation. Authorized stable IDs are `sub-practice-01`, `02`, `03`, `08`, `09`, `10`, `11`, and `12`; `04` through `07` are excluded. Stable IDs must not change. No answer form, distractor, feedback, or guidance may be invented beyond this file. Any earlier summary conflict is resolved here.

## Display Mapping And Shared Rules

Display exercises 1-8 map respectively to stable IDs `01`, `02`, `03`, `08`, `09`, `10`, `11`, `12`. All items use original wording and `rights-cleared-original` status. Deterministic completion follows a complete submission; self-review completion follows successful comparison opening. Every retained item requires semantic labels, native controls, visible focus, keyboard operation, and no-JavaScript-readable prompts without dynamic answer checks or progress claims.

Numeric grammar: trim outer whitespace; accept ASCII integers, terminating decimals with `.` and one simple `a/b` fraction with optional spaces around `/`; optional leading `+`; no comma, exponent notation, arithmetic expressions, or other tokens. Fractions need nonzero denominator. Parse as a finite number and compare with tolerance `1e-9`.

## Deterministic Exercises

### `sub-practice-01` - Display 1: Read The Course GRS

- **Objective:** Distinguish the signed indifference-curve slope from positive `GRS_12`.
- **Claims/formulas:** `claim-sub-01`; `formula-sub-02`.
- **Prompt:** “At an interior differentiable bundle with `u_x2 != 0`, the signed slope at fixed utility is `dx_2/dx_1=-u_x1/u_x2`. The course defines positive `GRS_12=u_x1/u_x2`. Which expression is `GRS_12`?”
- **Response:** radio field `grs-expression`: `positive-ratio` “`u_x1/u_x2`”, `signed-slope` “`-u_x1/u_x2`”, `inverse-ratio` “`u_x2/u_x1`”, `elasticity` “`1/(1-rho)`”. Accepted ID: `positive-ratio`.
- **Rules/feedback:** required one known ID; absent is incomplete, unknown is malformed, all other IDs incorrect, no partial credit. Incomplete: “Select one expression.” Malformed: “Choose one listed expression.” Incorrect: “Keep the signed slope separate from the course’s positive GRS.” Correct: “Correct: the course GRS is the positive marginal-utility ratio.”
- **Solution:** The signed slope has a minus sign; taking the course’s positive GRS gives `u_x1/u_x2`.
- **Misconceptions/status:** `mis-sub-01`; `production-approved-deterministic`.

### `sub-practice-02` - Display 2: Orient The GRS Ratio

- **Objective:** Identify the numerator in `GRS_12=u_x1/u_x2`.
- **Claims/formulas:** `claim-sub-01`; `formula-sub-02`.
- **Prompt:** “For the course convention `GRS_12=u_x1/u_x2`, which term is in the numerator?”
- **Response:** radio `numerator`: `ux1` “`u_x1`”, `ux2` “`u_x2`”, `difference` “`u_x1-u_x2`”, `signed-slope` “the signed slope”. Accepted ID: `ux1`.
- **Rules/feedback:** one known ID required; no partial credit. Incomplete: “Select one term.” Malformed: “Choose one listed term.” Incorrect: “The first subscript identifies the numerator in `GRS_12`.” Correct: “Correct: `u_x1` is the numerator.”
- **Solution:** The label fixes the order: good 1’s marginal utility divided by good 2’s.
- **Misconceptions/status:** `mis-sub-02`; `production-approved-deterministic`.

### `sub-practice-03` - Display 3: Check Local GRS Assumptions

- **Objective:** Select the assumptions required for the local course GRS statement.
- **Claims/formulas:** `claim-sub-01`; `formula-sub-02`.
- **Prompt:** “Select every condition used when interpreting `GRS_12=u_x1/u_x2` as the positive local rate at fixed utility.”
- **Response:** checkbox field `conditions`: `interior` “The bundle is interior with positive quantities.”, `differentiable` “The utility representation is locally differentiable.”, `fixed-utility` “The geometric slope is taken holding utility fixed.”, `nonzero-denominator` “`u_x2` is not zero.”, `positive-ratio` “The stated marginal-utility ratio is positive.”, `budget` “A budget constraint is given.”, `zero-bundle` “At least one good equals zero.” Accepted set is exactly the first five IDs.
- **Rules/feedback:** no selection incomplete; duplicate/unknown malformed; any missing or extra known ID incorrect; no partial credit. Incomplete: “Select the conditions used by the local statement.” Malformed: “Use only the listed conditions once.” Incorrect: “Check interiority, local differentiability, fixed utility, a nonzero denominator, and the positive-ratio interpretation.” Correct: “Correct: the selected conditions support the stated local course convention.”
- **Solution:** The first five conditions make the derivative-based positive ratio interpretable; budget and zero-bundle are not required and conflict with the bounded scope.
- **Misconceptions/status:** `mis-sub-10`; `production-approved-deterministic`.

### `sub-practice-08` - Display 4: Convert Rho To Sigma

- **Objective:** Calculate substitution elasticity from `rho`.
- **Claims/formulas:** `claim-sub-03`; `formula-sub-05`.
- **Prompt:** “For the course CES parameterization, `rho=1/2` and `sigma=1/(1-rho)`. Enter `sigma` as an integer, terminating decimal, or simple fraction.”
- **Response:** numeric text `sigma`. Canonical value `2`; literal forms `2`, `2.0`, `2.00`, `+2`, `2/1` accepted. Fractions and decimals under shared grammar accepted iff parsed value is within tolerance.
- **Rules/feedback:** empty incomplete; failed grammar malformed; finite parsed values not within tolerance incorrect; no partial credit. Incomplete: “Enter one value for sigma.” Malformed: “Use an integer, dot decimal, or one simple fraction.” Incorrect: “Apply `1/(1-rho)`; sigma is not `1-rho`.” Correct: “Correct: substituting `rho=1/2` gives sigma 2.”
- **Solution:** `1/(1-1/2)=1/(1/2)=2`; inverse check: `1-1/2=1/2`.
- **Misconceptions/status:** `mis-sub-04`; `production-approved-deterministic`.

### `sub-practice-09` - Display 5: Convert Sigma To Rho

- **Objective:** Recover `rho` from finite positive `sigma`.
- **Claims/formulas:** `claim-sub-03`; `formula-sub-05`.
- **Prompt:** “For finite positive `sigma=4`, use `rho=1-1/sigma`. Enter rho as a dot decimal or simple fraction.”
- **Response:** numeric text `rho`. Canonical `0.75`; accepted `3/4`, `6/8`, `0.75`, `0.750`, `+0.75`; reject `1 - 1/4`, decimal comma, exponent notation, and other expressions.
- **Rules/feedback:** shared numeric validation; no partial credit. Incomplete: “Enter one value for rho.” Malformed: “Use a dot decimal or one simple fraction, not an expression.” Incorrect: “Subtract the reciprocal of sigma from 1; do not subtract sigma itself.” Correct: “Correct: rho is 3/4.”
- **Solution:** `1-1/4=3/4=0.75`; forward check: `1/(1-3/4)=4`.
- **Misconceptions/status:** `mis-sub-04`; `production-approved-deterministic`.

### `sub-practice-10` - Display 6: Identify Degree-One Homogeneity

- **Objective:** Identify the degree-one homogeneity identity without equating it with homothetic preferences.
- **Claims/formulas:** `claim-sub-05`; `formula-sub-06`.
- **Prompt:** “For the displayed CES representation and `t>0`, which identity states degree-one homogeneity of this representation?”
- **Response:** radio `homogeneity-identity`: `degree-one` “`u(tx_1,tx_2)=t u(x_1,x_2)`”, `degree-zero` “`u(tx_1,tx_2)=u(x_1,x_2)`”, `degree-two` “`u(tx_1,tx_2)=t^2u(x_1,x_2)`”, `all-transforms` “Every strictly increasing transformation keeps degree one.” Accepted ID `degree-one`.
- **Rules/feedback:** one known ID required; no partial credit. Incomplete: “Select one identity.” Malformed: “Choose one listed identity.” Incorrect: “Degree one multiplies the representation by `t`; a transformation need not preserve that degree.” Correct: “Correct: the displayed representation is degree-one homogeneous.”
- **Solution:** Factor `t^rho` inside the CES bracket; the outer exponent yields `t`.
- **Misconceptions/status:** `mis-sub-04`; `production-approved-deterministic`.

## Self-Review Exercises

### `sub-practice-11` - Display 7: Representation And Preferences

- **Objective:** Explain the difference between a degree-one representation and homothetic preferences.
- **Claims/formulas:** `claim-sub-04`, `claim-sub-05`; `formula-sub-06`.
- **Prompt:** “Explain the three distinctions requested below. Alternative precise wording is valid.” Textareas: `representation-property` “What does degree-one homogeneity describe?”, `preference-property` “What does homotheticity describe?”, `transformation-effect` “What can a strictly increasing transformation preserve, and what need it not preserve?”
- **Contract:** all fields non-whitespace; button “Compare with model guidance”; blocked feedback “Complete all three responses before comparing.” Headings: “Your responses” and “Model guidance”. Guidance: degree one is a property of a chosen representation; homotheticity describes preferences; a strictly increasing transformation preserves represented preference ordering but need not preserve degree-one homogeneity. Alternative wording note: “Equivalent precise reasoning can be valid.” Revision: “Revise your responses and compare again.” Close label “Close comparison”; restore focus to comparison button; reopening allowed. No learner text storage; comparison opening completes the item. Status `production-approved-self-review`.

### `sub-practice-12` - Display 8: Qualify CES Limits

- **Objective:** Explain the three CES limits without treating endpoints as ordinary substitutions.
- **Claims/formulas:** `claim-sub-03`; `formula-sub-05`.
- **Prompt:** “For each limit, state endpoint status, resulting form or preference interpretation, and sigma behavior. Alternative precise wording is valid.” Textareas: `linear-limit`, `cobb-douglas-limit`, `minimum-limit`.
- **Contract:** same self-review interaction contract as `11`. Guidance: `rho->1` is an excluded-endpoint weighted-linear limit with perfect-substitutes preferences and `sigma->infinity`; `rho->0` cannot be substituted directly into the displayed form and yields a Cobb-Douglas preference limit only after normalization or a monotonic transformation, with `sigma->1`; `rho->-infinity` for fixed positive weights and positive bundles has pointwise minimum limit, perfect-complements preferences, `sigma->0`, and is not a finite parameter. Status `production-approved-self-review`.

## Completeness And Final Readiness

Every retained entry has title, objective, claims/formulas, assumptions, bounded response schema, answer or comparison guidance, feedback, completion trigger, accessibility, and rights status. Second review found no duplicate correct option, omitted accepted numeric form under the stated grammar, or self-review completion before comparison. **Implementation ready for restricted scope.** Implementation is authorized only for the eight IDs above. Excluded: `04`-`07`, broader CES arithmetic/derivations, optimization, boundary work, graph interaction, unrestricted symbolic input, and automatic prose grading.
