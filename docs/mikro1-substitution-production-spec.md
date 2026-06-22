# Mikro I Substitution: Restricted Production Specification

## Scope And Decisions

Retained deterministic IDs: `sub-practice-01`, `02`, `03`, `08`, `09`, `10`. Retained self-review IDs: `11`, `12`. Rejected IDs remain `04` through `07` because no production-safe CES arithmetic or symbolic-derivation contract was approved.

All retained material is original. Rights status for every retained item is **cleared for original implementation**: factual sources verify mathematics only; prompts, options, values, feedback, and guidance must be project-authored.

## Deterministic Items

| ID                | Final prompt and response                                                                                                                                                                                                       | Answer contract and completion                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `sub-practice-01` | “At an interior differentiable bundle, `dx_2/dx_1                                                                                                                                                                               | u=Ubar=-u_x1/u_x2`. The course defines `GRS_12=u_x1/u_x2>0`. Which is the course GRS?” Choice: positive ratio; signed slope; inverse ratio; elasticity. | Choice ID `positive-ratio` only. Complete on one known option; malformed/unknown invalid; incorrect otherwise; no partial credit. |
| `sub-practice-02` | “For `GRS_12`, which marginal utility is the numerator?” Choice: `u_x1`; `u_x2`; their difference; neither.                                                                                                                     | Choice ID `ux1` only. The prompt fixes good order and blocks signed-MRS ambiguity.                                                                      |
| `sub-practice-03` | “Select every condition required before using the local derivative formula for course GRS.” Choices: interior positive bundle; local differentiability; `u_x2 != 0`; a budget constraint; zero consumption.                     | Required option-set `{interior,differentiable,nonzero-denominator}`; exact set only.                                                                    |
| `sub-practice-08` | “With `rho=1/2`, compute `sigma=1/(1-rho)`. Enter an exact fraction or terminating decimal.”                                                                                                                                    | Numeric field `sigma`; accept `2`, `2.0`, `2.00`, optional leading `+`; trim whitespace; tolerance `1e-9`.                                              |
| `sub-practice-09` | “With finite positive `sigma=4`, compute `rho=1-1/sigma`. Enter an exact fraction or terminating decimal.”                                                                                                                      | Numeric field `rho`; accept `3/4`, `0.75`, `0.750`, optional `+`; bounded fraction parser only; tolerance `1e-9`.                                       |
| `sub-practice-10` | “For the displayed course CES representation, `t>0`. Which identity states degree-one homogeneity?” Choice: `u(tx_1,tx_2)=t u(x_1,x_2)`; `u(tx)=u(x)`; `u(tx)=t^2u(x)`; every increasing transformation preserves the identity. | Choice ID `degree-one` only.                                                                                                                            |

All deterministic items use `incorrect`, `incomplete`, `malformed`, and `correct` feedback categories. Completion follows a structurally complete submission regardless of correctness. Feedback names the missing condition, convention, or conversion issue without revealing unrelated answers.

## Self-Review Items

`sub-practice-11` asks the learner to distinguish a degree-one homogeneous representation from homothetic preferences and to explain why a strictly increasing transformation may preserve preferences without preserving degree-one homogeneity. Required text fields: `representation-property`, `preference-property`, `transformation-effect`.

`sub-practice-12` asks the learner to classify the `rho -> 1`, `rho -> 0`, and `rho -> -infinity` statements as qualified limits, explicitly naming endpoint status, result, and `sigma` behavior. Required text fields: `linear-limit`, `cobb-douglas-limit`, `minimum-limit`.

Both comparisons open only after all required fields contain non-whitespace text; learner answers remain visible, comparison is reopenable, focus returns to the opening control on close, and completion occurs only when comparison opens. No prose correctness, score, or stored answer text is permitted.

## Model Solutions And Review

For `08`, `1/(1-1/2)=2`; inverse substitution gives `1-1/2=1/2`. For `09`, `1-1/4=3/4`; forward substitution gives `1/(1-3/4)=4`. These were independently checked by direct substitution. Common errors are `sigma=1-rho`, `rho=1-sigma`, and treating GRS as elasticity.

Second adversarial review: no retained choice distractor is correct under the stated course convention; numeric fields have bounded accepted forms; self-review is used for all nuanced prose and limit qualifications. The retained eight-item sequence covers convention, domain, conversion, representation property, and conceptual synthesis.

## Readiness

**Conditionally ready.** Eight exercises are fully specified for a restricted implementation: six deterministic and two self-review. Implementation remains limited to these IDs and contracts. Excluded: `04`-`07`, CES numeric utility/marginal-utility/GRS derivations, optimization, boundaries, graphs, arbitrary symbolic input, and automatic free-text grading.
