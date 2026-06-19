# Mikroökonomik I Preferences Claim Evidence Pack

This is a sanitized claim and evidence pack. It records independently phrased claims, source locators, review needs, and transformation constraints only. It does not contain private filenames, local paths, copied slide text, formulas beyond minimal notation, exercise prompts, solutions, screenshots, checksums, lecturer names, email addresses, or original course files.

## Evidence-pack identity

- Evidence pack ID: `mikro1-preferences-claims`
- Related module audit: `mikro1-source-inventory`
- Pilot topic: `Preferences and indifference-curve basics`
- Evidence-pack status: `extracted`
- Review owner: `source-ingestion`
- Last updated: `2026-06-19`
- Public use status: not ready for drafting or publication

## Pilot-topic scope

The narrow defensible scope is preferences, preference relations, basic bundle notation, strict preference, weak preference, indifference, completeness, transitivity, ordinal ranking through utility representation, indifference curves, and basic indifference-curve properties when the assumptions are visible in the source range.

The source boundary is `mikro1-slides-11` p1-p11 for core claims, with p12-p15 used only as a dependency boundary for later marginal-rate-of-substitution work. `mikro1-cdf-06` is private visual support for future graph reconstruction only and was not executed.

The topic can support a later outline after verification, but it is not ready for prose drafting, exercises, graph implementation, or publication.

## Explicit exclusions

Excluded from this evidence pack:

- utility maximization
- budget constraints
- Lagrange methods
- demand derivation
- income effects and substitution effects
- revealed preference
- marginal rate of substitution except as a dependency note
- detailed utility-function families
- official, adapted, or original exercises
- graph component implementation

Convexity is included only as a conditional indifference-curve shape property because it appears inside the bounded source range. It must not be expanded into a later optimization topic here.

## Supporting source IDs

| Source ID                 | Role in pack                             | Rights status            | Use in this task                                      |
| ------------------------- | ---------------------------------------- | ------------------------ | ----------------------------------------------------- |
| `mikro1-slides-11`        | primary evidence for claims and locators | `private-reference-only` | private reference and sanitized locator mapping       |
| `mikro1-cdf-06`           | private visual-support candidate         | `unknown`                | static metadata only; no execution or code inspection |
| `mikro1-source-inventory` | repository structural audit context      | not a source file        | audit relationship and status context                 |

No source is eligible for redistribution from this pack.

## Source-locator map

| Locator ID            | Source ID          | Locator              | Evidence role                                             | Scope decision                              |
| --------------------- | ------------------ | -------------------- | --------------------------------------------------------- | ------------------------------------------- |
| `locator-pref-01`     | `mikro1-slides-11` | p1                   | lecture agenda and topic boundary                         | scope context only                          |
| `locator-pref-02`     | `mikro1-slides-11` | p2                   | preference relation, notation, core assumptions           | core scope                                  |
| `locator-pref-03`     | `mikro1-slides-11` | p3                   | completeness, transitivity, rationality relationship      | core scope                                  |
| `locator-pref-04`     | `mikro1-slides-11` | p4                   | utility representation and notation                       | core scope with formula verification needed |
| `locator-pref-05`     | `mikro1-slides-11` | p5                   | non-satiation and convexity assumptions                   | conditional scope                           |
| `locator-pref-06`     | `mikro1-slides-11` | p6                   | indifference-curve description and contour interpretation | core scope                                  |
| `locator-pref-07`     | `mikro1-slides-11` | p7                   | indifference-curve family in a two-good graph             | core graph scope                            |
| `locator-pref-08`     | `mikro1-slides-11` | p8                   | indifference-curve properties                             | conditional property scope                  |
| `locator-pref-09`     | `mikro1-slides-11` | p9                   | convexity graph illustration                              | conditional graph scope                     |
| `locator-pref-10`     | `mikro1-slides-11` | p10                  | ordinal utility and monotone transformations              | core scope with formula verification needed |
| `locator-pref-11`     | `mikro1-slides-11` | p11                  | ordinal-utility example structure                         | example structure only                      |
| `locator-pref-12`     | `mikro1-slides-11` | p12-p15              | marginal-rate-of-substitution material                    | dependency boundary only                    |
| `locator-pref-cdf-01` | `mikro1-cdf-06`    | static metadata only | indifference-curve visual-support candidate               | private reference only                      |

PDF viewer pages are used as locators. Printed slide numbers were not separately verified.

## Claim inventory

Claim readiness levels used in this pack:

- `located`: claim has a source locator but has not been transformed into final learner-facing content.
- `extracted`: claim is paraphrased in this pack and linked to a locator.
- `cross-checked`: claim has at least two independent evidence points or one clearly sufficient authoritative source reviewed for the claim.
- `conflict-open`: claim has an unresolved source or interpretation conflict.
- `external-verification-required`: claim needs an external authoritative check before drafting.
- `blocked`: claim must not be drafted until a named blocker is resolved.

| Claim ID        | Proposed claim                                                                                                                     | Source locator                       | Claim type         | Confidence | Evidence status       | Relationship to other claims                   | Conflict status                       | Publication relevance         | Reviewer note                                                    | Readiness                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------ | ---------- | --------------------- | ---------------------------------------------- | ------------------------------------- | ----------------------------- | ---------------------------------------------------------------- | ------------------------------ |
| `claim-pref-01` | A preference relation models how a consumer ranks pairs of consumption bundles.                                                    | `locator-pref-02`                    | definition         | high       | directly stated       | parent for notation claims                     | none found                            | core definition               | Needs independent prose later.                                   | extracted                      |
| `claim-pref-02` | The bounded source distinguishes strict preference, weak preference, and indifference as separate relations.                       | `locator-pref-02`                    | notation           | high       | directly stated       | depends on `claim-pref-01`                     | notation typography requires checking | core notation                 | Use canonical math notation only after symbol review.            | extracted                      |
| `claim-pref-03` | Completeness means the model can compare any two relevant bundles in a pairwise ranking.                                           | `locator-pref-03`                    | assumption         | high       | directly stated       | supports `claim-pref-07` and `claim-pref-13`   | none found                            | core assumption               | Scope should avoid overstating real psychology.                  | extracted                      |
| `claim-pref-04` | Transitivity states that weak preference rankings remain consistent across linked bundle comparisons.                              | `locator-pref-03`                    | assumption         | high       | directly stated       | supports `claim-pref-07` and `claim-pref-13`   | none found                            | core assumption               | Formal expression requires formula review before publication.    | extracted                      |
| `claim-pref-05` | The source treats completeness plus transitivity as the rationality condition for the preference model.                            | `locator-pref-03`                    | inference          | medium     | directly stated       | depends on `claim-pref-03` and `claim-pref-04` | possible terminology compression      | learner-facing caution        | Explain as model rationality, not a moral claim.                 | external-verification-required |
| `claim-pref-06` | A utility representation assigns utility values to bundles so that weak preference is represented by weakly higher utility.        | `locator-pref-04`                    | notation           | high       | directly stated       | supports ordinal-ranking claims                | formula notation requires review      | core bridge claim             | Needs formula and symbol check before page use.                  | external-verification-required |
| `claim-pref-07` | Utility is used here as an ordinal ranking device rather than as a meaningful cardinal measurement.                                | `locator-pref-10`                    | interpretation     | high       | directly stated       | depends on `claim-pref-06`                     | none found                            | core interpretation           | Good candidate for learner-facing warning.                       | extracted                      |
| `claim-pref-08` | Positive monotone transformations preserve the represented preference order and the indifference-curve family.                     | `locator-pref-10`, `locator-pref-11` | property           | high       | directly stated       | depends on `claim-pref-06` and `claim-pref-07` | formula details require review        | core ordinal-utility property | Use no example formulas until checked.                           | external-verification-required |
| `claim-pref-09` | Non-satiation is introduced as the assumption that more of each good raises utility in the modeled setting.                        | `locator-pref-05`                    | assumption         | high       | directly stated       | supports `claim-pref-12` and `claim-pref-14`   | conditionality risk                   | graph-property condition      | Must mention bads or satiation only after external verification. | external-verification-required |
| `claim-pref-10` | Convex preferences are introduced to justify a preference for mixtures between two equally ranked bundles.                         | `locator-pref-05`, `locator-pref-09` | assumption         | high       | visually demonstrated | supports `claim-pref-16`                       | none found                            | graph-property condition      | Formal inequality needs formula review before publication.       | external-verification-required |
| `claim-pref-11` | An indifference curve collects bundles that share the same utility level in the representation.                                    | `locator-pref-06`                    | definition         | high       | directly stated       | depends on `claim-pref-06`                     | none found                            | core definition               | Safe to paraphrase after source review.                          | extracted                      |
| `claim-pref-12` | Indifference curves can be interpreted as contour lines of a utility surface.                                                      | `locator-pref-06`, `locator-pref-07` | graph relationship | high       | visually demonstrated | supports graph specification                   | source figure has external citation   | graph explanation             | Future graph should be redrawn independently.                    | extracted                      |
| `claim-pref-13` | In the displayed two-good graph convention, curves farther from the origin represent higher utility.                               | `locator-pref-07`, `locator-pref-08` | graph relationship | medium     | directly stated       | depends on `claim-pref-09`                     | conditionality risk                   | graph explanation             | State as conditional, not universal.                             | external-verification-required |
| `claim-pref-14` | With non-satiation in the two-good setting, an indifference curve should not be positively sloped.                                 | `locator-pref-08`                    | property           | medium     | directly stated       | depends on `claim-pref-09`                     | exceptions require external check     | common-mistake prevention     | Must be drafted with conditions.                                 | external-verification-required |
| `claim-pref-15` | Indifference curves should not intersect under the stated preference-order assumptions.                                            | `locator-pref-08`                    | property           | medium     | directly stated       | depends on `claim-pref-03` and `claim-pref-04` | proof not supplied in source range    | graph rule                    | Needs proof or authoritative check before teaching.              | external-verification-required |
| `claim-pref-16` | Convexity of indifference curves is conditional on convex preferences.                                                             | `locator-pref-08`, `locator-pref-09` | property           | high       | directly stated       | depends on `claim-pref-10`                     | none found                            | graph-property condition      | Avoid presenting as universal.                                   | extracted                      |
| `claim-pref-17` | Marginal rate of substitution follows after the basic indifference-curve concept and should be treated as the next topic boundary. | `locator-pref-12`                    | dependency         | high       | directly stated       | follows `claim-pref-11`                        | none found                            | sequencing                    | Do not draft MRS in this topic.                                  | located                        |

No claim is marked `cross-checked` in this pack.

## Concept and definition inventory

| Concept ID        | Concept                           | Explicitly defined       | Source locator                                          | Alternative support | Notation used                                    | Notation varies             | Depends on assumptions                           | Learner-facing importance                         | Unresolved ambiguity                                           |
| ----------------- | --------------------------------- | ------------------------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------ | --------------------------- | ------------------------------------------------ | ------------------------------------------------- | -------------------------------------------------------------- |
| `concept-pref-01` | alternative or consumption bundle | partially                | `locator-pref-02`, `locator-pref-04`                    | none in this pack   | bundle letters and vector notation               | yes                         | no                                               | learners must know what is being ranked           | source names bundles but does not give a standalone definition |
| `concept-pref-02` | preference relation               | yes                      | `locator-pref-02`                                       | `locator-pref-03`   | weak-preference relation symbol                  | typography check needed     | completeness and transitivity later constrain it | central topic concept                             | exact glyph should be verified visually before final content   |
| `concept-pref-03` | strict preference                 | named, not fully defined | `locator-pref-02`, `locator-pref-03`                    | none in this pack   | strict-preference symbol                         | typography check needed     | no                                               | needed for comparisons                            | requires external authoritative definition before publication  |
| `concept-pref-04` | weak preference                   | named and used           | `locator-pref-02`, `locator-pref-03`, `locator-pref-04` | none in this pack   | weak-preference symbol                           | typography check needed     | no                                               | needed for assumptions and utility representation | formal definition should be externally checked                 |
| `concept-pref-05` | indifference                      | named and used           | `locator-pref-02`, `locator-pref-03`                    | `locator-pref-06`   | indifference symbol                              | no material variation found | no                                               | needed for curves                                 | exact relationship to equal utility should be stated carefully |
| `concept-pref-06` | indifference set                  | not explicitly named     | `locator-pref-06`                                       | none in this pack   | none committed                                   | not assessed                | utility representation                           | useful but not source-explicit                    | requires external verification or omission                     |
| `concept-pref-07` | indifference curve                | yes                      | `locator-pref-06`, `locator-pref-07`                    | `locator-pref-08`   | utility-level labels and two-good axes           | no material variation found | utility representation and graph assumptions     | central graph concept                             | source figure must not be reused                               |
| `concept-pref-08` | ordinal preference ranking        | yes                      | `locator-pref-10`, `locator-pref-11`                    | `locator-pref-04`   | utility functions and transformed utility labels | yes                         | utility representation                           | prevents cardinal interpretation mistakes         | example formulas need separate verification                    |
| `concept-pref-09` | completeness                      | yes                      | `locator-pref-03`                                       | `locator-pref-02`   | bundle letters                                   | no material variation found | no                                               | core rationality assumption                       | none for extraction                                            |
| `concept-pref-10` | transitivity                      | yes                      | `locator-pref-03`                                       | none in this pack   | bundle letters and weak-preference symbol        | no material variation found | no                                               | core consistency assumption                       | formal expression needs formula review                         |

## Notation inventory

| Notation ID        | Meaning                         | Source locator                                          | Committed notation             | Symbol definitions                             | Variation or ambiguity                     | Review need                                   |
| ------------------ | ------------------------------- | ------------------------------------------------------- | ------------------------------ | ---------------------------------------------- | ------------------------------------------ | --------------------------------------------- |
| `notation-pref-01` | generic bundles or alternatives | `locator-pref-02`, `locator-pref-03`                    | `a`, `b`, `c`                  | bundle labels used for comparisons             | no material variation found                | define as bundles in any future page          |
| `notation-pref-02` | consumption vector coordinates  | `locator-pref-04`, `locator-pref-06`, `locator-pref-07` | `x1`, `x2`, ..., `xn`          | quantities or dimensions of goods in a bundle  | subscripts require visual review           | define every subscript before publication     |
| `notation-pref-03` | strict preference               | `locator-pref-02`, `locator-pref-03`                    | `a \succ b`                    | bundle `a` is strictly preferred to bundle `b` | source glyph and text extraction differ    | verify exact glyph and final display notation |
| `notation-pref-04` | weak preference                 | `locator-pref-02`, `locator-pref-03`, `locator-pref-04` | `a \succeq b`                  | bundle `a` is weakly preferred to bundle `b`   | source glyph and text extraction differ    | verify exact glyph and final display notation |
| `notation-pref-05` | indifference                    | `locator-pref-02`, `locator-pref-03`                    | `a \sim b`                     | bundles `a` and `b` are indifferent            | low ambiguity                              | verify with final math rendering              |
| `notation-pref-06` | utility representation          | `locator-pref-04`, `locator-pref-10`                    | utility-function notation only | utility value assigned to a bundle or vector   | formula details excluded                   | full formula workflow required                |
| `notation-pref-07` | graph axes                      | `locator-pref-06`, `locator-pref-07`, `locator-pref-09` | `x1` and `x2` axes             | quantities of two goods or dimensions          | no material variation found                | define axes in graph alt text                 |
| `notation-pref-08` | utility level labels            | `locator-pref-07`, `locator-pref-09`, `locator-pref-14` | utility-level label            | constant utility level represented by a curve  | extracted text and visual label may differ | use accessible labels in future redraw        |

No OCR-only notation is approved for publication.

## Assumption inventory

| Assumption ID        | Assumption                      | Present   | Source locator                                          | Wording category               | Role in theory                                                 | Graph implication                      | Belongs in basic topic?                | Verification status                      |
| -------------------- | ------------------------------- | --------- | ------------------------------------------------------- | ------------------------------ | -------------------------------------------------------------- | -------------------------------------- | -------------------------------------- | ---------------------------------------- |
| `assumption-pref-01` | completeness                    | yes       | `locator-pref-02`, `locator-pref-03`                    | explicit assumption            | defines a comparable preference ordering                       | supports comparison of any two bundles | yes                                    | extracted; external check recommended    |
| `assumption-pref-02` | transitivity                    | yes       | `locator-pref-02`, `locator-pref-03`                    | explicit assumption            | imposes consistency on rankings                                | supports non-intersection reasoning    | yes                                    | extracted; proof external check required |
| `assumption-pref-03` | non-satiation or more-is-better | yes       | `locator-pref-05`, `locator-pref-08`                    | consumer-psychology assumption | gives positive marginal-value direction in the modeled setting | supports higher-curve and slope claims | yes, as conditional property support   | external verification required           |
| `assumption-pref-04` | convexity of preferences        | yes       | `locator-pref-05`, `locator-pref-08`, `locator-pref-09` | consumer-psychology assumption | governs preference for mixtures                                | supports convex curve shape            | yes, but only conditionally            | external verification required           |
| `assumption-pref-05` | differentiability               | yes       | `locator-pref-04`                                       | technical assumption           | enables utility-function methods used later                    | not needed for basic curve definition  | later topic or notation caveat         | external verification required           |
| `assumption-pref-06` | continuity                      | not found | not located                                             | absent from bounded source     | may matter for representation theorem                          | not assessed                           | no, unless external source requires it | unsupported in this pack                 |

## Indifference-curve property inventory

| Property ID        | Property                                                             | Source locator                       | Required assumptions                        | Graph implication                                               | Exceptions or limits                          | Universal or conditional                    | Confidence | Verification need                       |
| ------------------ | -------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------- | ---------- | --------------------------------------- |
| `property-pref-01` | curves represent equal utility levels                                | `locator-pref-06`, `locator-pref-07` | utility representation                      | a curve joins bundles at one utility level                      | depends on representation being valid         | conditional                                 | high       | verify final wording                    |
| `property-pref-02` | farther-out curves represent higher utility in the displayed setting | `locator-pref-07`, `locator-pref-08` | non-satiation and two-good graph convention | outward movement means higher represented utility               | may fail with bads or satiation               | conditional                                 | medium     | external verification mandatory         |
| `property-pref-03` | curves cannot be positively sloped in the displayed setting          | `locator-pref-08`                    | non-satiation                               | upward slope would conflict with more-is-better                 | conditional on goods and assumptions          | conditional                                 | medium     | external verification mandatory         |
| `property-pref-04` | curves cannot intersect                                              | `locator-pref-08`                    | completeness and transitivity               | one bundle cannot hold contradictory ranking relations          | proof not shown in source range               | conditional on preference-order assumptions | medium     | proof or authoritative check required   |
| `property-pref-05` | curves are convex when preferences are convex                        | `locator-pref-08`, `locator-pref-09` | convex preferences                          | mixtures lie in the more-preferred region relative to endpoints | not universal without convexity               | conditional                                 | high       | verify graph language                   |
| `property-pref-06` | indifference curves form a family in the two-good plane              | `locator-pref-07`                    | utility representation                      | multiple constant-utility curves can be shown together          | source does not prove complete representation | conditional                                 | medium     | external verification recommended       |
| `property-pref-07` | thinness of indifference curves                                      | not located                          | not established                             | not assessed                                                    | absent from bounded source                    | unsupported                                 | low        | do not draft unless externally verified |

## Graph inventory

| Graph ID        | Source locator    | Graph purpose                                                     | Axes                                | Objects displayed                                   | Labels                                | Assumptions encoded                | Movement or comparison shown               | Static reproduction sufficient | Future interaction value | Accessibility description requirements                              | Verification risks                                      | CDF relationship                                  |
| --------------- | ----------------- | ----------------------------------------------------------------- | ----------------------------------- | --------------------------------------------------- | ------------------------------------- | ---------------------------------- | ------------------------------------------ | ------------------------------ | ------------------------ | ------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------- |
| `graph-pref-01` | `locator-pref-06` | explain indifference curves as contour lines of a utility surface | goods dimensions and utility height | surface, cut, contour-like curve                    | goods and utility labels              | utility representation             | relation between utility surface and curve | yes                            | low                      | describe surface, equal-height slice, and projected curve           | source figure has external citation and must be redrawn | none confirmed                                    |
| `graph-pref-02` | `locator-pref-07` | show a family of indifference curves in a two-good plane          | `x1`, `x2`                          | two downward-shaped curves                          | utility-level labels                  | non-satiation implied by direction | higher versus lower curve comparison       | yes                            | medium                   | describe axes, two curves, and relative ranking                     | conditionality of higher curve needs review             | `mikro1-cdf-06` may support later visual behavior |
| `graph-pref-03` | `locator-pref-09` | illustrate convexity of indifference curves                       | `x1`, `x2`                          | curve, two bundles, connecting line, mixture bundle | bundle labels and utility-level label | convex preferences                 | mixture compared with endpoints            | yes                            | medium                   | describe endpoint bundles, chord, mixture point, and curve relation | formal convexity relation requires review               | none confirmed                                    |
| `graph-pref-04` | `locator-pref-12` | introduce marginal-rate-of-substitution geometry                  | `x1`, `x2`                          | curve and local movement markers                    | axis and movement labels              | constant utility along a curve     | local trade-off movement                   | yes for later topic            | medium                   | defer to later MRS page                                             | outside current topic scope                             | related CDF is not `mikro1-cdf-06` in this audit  |

No graph image is approved for reuse. Future public graphs should be independently redrawn with accessible text alternatives.

## Future graph-behaviour specification

| Behaviour ID        | Candidate behaviour                                | Underlying claim IDs                              | Required assumptions                        | Expected visual response                                                 | Invalid states                                         | Static fallback                                 | Unresolved modelling questions                              |
| ------------------- | -------------------------------------------------- | ------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------ | ----------------------------------------------- | ----------------------------------------------------------- |
| `behaviour-pref-01` | select two bundles on the same curve               | `claim-pref-11`, `claim-pref-12`                  | valid utility representation                | selected bundles remain on one curve and receive equal-level explanation | placing a point off-curve while calling it indifferent | static labelled curve with two points           | how to represent equality without implying cardinal utility |
| `behaviour-pref-02` | compare bundles on higher and lower curves         | `claim-pref-09`, `claim-pref-13`                  | non-satiation and two-good graph convention | selected bundle on outward curve is identified as more preferred         | using bads or satiation while keeping same conclusion  | two static curves with direction note           | whether external source should introduce exceptions         |
| `behaviour-pref-03` | demonstrate non-intersection                       | `claim-pref-03`, `claim-pref-04`, `claim-pref-15` | complete and transitive preferences         | intersecting curves are flagged as invalid under assumptions             | allowing two utility levels at same bundle             | static contradiction diagram after proof review | exact proof route for learner-facing page                   |
| `behaviour-pref-04` | demonstrate convexity conditionally                | `claim-pref-10`, `claim-pref-16`                  | convex preferences                          | mixture between indifferent bundles appears in preferred region          | showing convexity without naming assumption            | static curve, endpoints, and mixture point      | whether to include non-convex counterexample later          |
| `behaviour-pref-05` | show ordinal transformation preserves curve family | `claim-pref-07`, `claim-pref-08`                  | valid positive monotone transformation      | curves remain visually unchanged while labels may change                 | implying utility differences are meaningful            | paired static diagrams with same curves         | formula-level verification of examples                      |

These behaviours are specifications only. No component or interactive graph is implemented in this task.

## Example inventory

| Example ID        | Source locator    | Example type                           | Concepts demonstrated                                  | Fully worked | Distinctive source wording or data | Permitted use          | Replacement preference                                 | Independently verifiable           |
| ----------------- | ----------------- | -------------------------------------- | ------------------------------------------------------ | ------------ | ---------------------------------- | ---------------------- | ------------------------------------------------------ | ---------------------------------- |
| `example-pref-01` | `locator-pref-06` | visual interpretation example          | indifference curve as contour line                     | no           | external-source figure structure   | private reference only | independently redrawn diagram preferable               | partial after graph verification   |
| `example-pref-02` | `locator-pref-09` | graphical convexity example            | convex preferences and mixture bundles                 | partially    | source-specific labels and layout  | private reference only | independently created graph preferable                 | partial after assumption check     |
| `example-pref-03` | `locator-pref-11` | ordinal-utility transformation example | same preference order under transformed utility labels | partially    | source-specific function examples  | private reference only | independent replacement with checked formulas required | not yet; formula workflow required |
| `example-pref-04` | `locator-pref-12` | trade-off interpretation example       | marginal rate of substitution                          | partially    | outside current scope              | defer to later topic   | independent later MRS example required                 | not for this topic                 |

No source example should be copied into learner-facing content.

## Original-exercise design constraints

Future original exercises are permitted only after the target claims are source-checked, every required symbol is defined, and complete solutions are independently derived and second-checked.

| Exercise category ID | Future task category                                 | Target claim IDs                                  | Required prerequisites        | Permitted complexity | Graph requirement | Solution-verification method                               | Likely common errors                              | Ambiguity risk                    |
| -------------------- | ---------------------------------------------------- | ------------------------------------------------- | ----------------------------- | -------------------- | ----------------- | ---------------------------------------------------------- | ------------------------------------------------- | --------------------------------- |
| `exercise-pref-01`   | classify preference statements                       | `claim-pref-01`, `claim-pref-02`                  | bundle notation               | introductory         | none              | reviewer checks relation labels and definitions            | confusing strict and weak preference              | notation glyph ambiguity          |
| `exercise-pref-02`   | interpret strict, weak, and indifferent relations    | `claim-pref-02`, `claim-pref-03`, `claim-pref-04` | basic comparison notation     | introductory         | optional          | reviewer checks all relation cases                         | treating weak preference as strict preference     | high until notation is finalized  |
| `exercise-pref-03`   | check completeness or transitivity in small examples | `claim-pref-03`, `claim-pref-04`                  | relation notation             | standard             | none              | construct full ranking table and second-check implications | checking only one pair or one chain               | medium                            |
| `exercise-pref-04`   | identify bundles on the same indifference curve      | `claim-pref-11`, `claim-pref-12`                  | graph axes and curve meaning  | introductory         | static graph      | verify equal-level interpretation and alt text             | reading curve height as cardinal magnitude        | medium                            |
| `exercise-pref-05`   | compare higher and lower curves under assumptions    | `claim-pref-09`, `claim-pref-13`                  | non-satiation condition       | introductory         | static graph      | verify condition and ranking                               | ignoring more-is-better assumption                | high unless condition is explicit |
| `exercise-pref-06`   | recognise invalid curve intersections                | `claim-pref-03`, `claim-pref-04`, `claim-pref-15` | completeness and transitivity | standard             | static graph      | reviewer writes contradiction proof                        | saying curves never intersect without assumptions | medium                            |
| `exercise-pref-07`   | distinguish universal from conditional properties    | `claim-pref-13`, `claim-pref-14`, `claim-pref-16` | assumption inventory          | standard             | optional          | reviewer maps each property to assumptions                 | overgeneralising convexity or slope               | high                              |
| `exercise-pref-08`   | explain graph meaning in words                       | `claim-pref-11`, `claim-pref-12`, `claim-pref-13` | graph vocabulary              | introductory         | static graph      | compare explanation against claim map                      | using utility levels cardinally                   | medium                            |

No exercise prompt, answer, or solution is created in this task.

## Conflicts

| Conflict ID        | Source IDs                          | Locators                             | Nature of conflict                                                                                    | Substantive or presentational     | Provisional interpretation                                      | Confidence | Required resolution                                 | Publication blocked                       |
| ------------------ | ----------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------- | --------------------------------- | --------------------------------------------------------------- | ---------- | --------------------------------------------------- | ----------------------------------------- |
| `conflict-pref-01` | `mikro1-slides-11`                  | `locator-pref-02`, `locator-pref-03` | visual preference symbols are clearer than text extraction output                                     | presentational                    | use canonical display notation only after visual check          | high       | final notation review                               | yes for polished content                  |
| `conflict-pref-02` | `mikro1-slides-11`                  | `locator-pref-05`, `locator-pref-08` | convexity and non-satiation appear near utility-function material but are needed for curve properties | presentational                    | include as conditional assumptions, not as universal properties | high       | outline should separate definition from assumptions | no for outline; yes for publication       |
| `conflict-pref-03` | `mikro1-slides-11`, `mikro1-cdf-06` | `locator-pref-cdf-01`                | CDF relationship is known from structural audit, not from executed content                            | presentational and rights-related | use CDF only as private visual support                          | high       | decide replacement graph strategy                   | no for claim pack; yes for implementation |
| `conflict-pref-04` | `mikro1-slides-11`                  | `locator-pref-06`, `locator-pref-11` | a cited external figure and a source-specific example appear in the slides                            | rights-related                    | create independent replacement examples and graphs              | high       | rights and source review                            | yes for copying; no for claim extraction  |

No substantive academic contradiction was resolved in this task.

## External verification requirements

| Requirement ID   | Claim ID                                          | What must be verified                                                                  | Preferred source type                 | Mandatory before drafting | Course source remains primary for alignment |
| ---------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------- | ------------------------------------------- |
| `verify-pref-01` | `claim-pref-03`, `claim-pref-04`                  | standard definitions and formal notation for completeness and transitivity             | authoritative microeconomics textbook | yes                       | yes                                         |
| `verify-pref-02` | `claim-pref-06`, `claim-pref-08`                  | utility-representation notation and positive monotone transformation statement         | authoritative microeconomics textbook | yes                       | yes                                         |
| `verify-pref-03` | `claim-pref-09`, `claim-pref-13`, `claim-pref-14` | conditions under which more-is-better implies higher curves and non-positive slopes    | authoritative microeconomics textbook | yes                       | yes                                         |
| `verify-pref-04` | `claim-pref-15`                                   | proof or explanation for non-intersection of indifference curves                       | authoritative microeconomics textbook | yes                       | yes                                         |
| `verify-pref-05` | `claim-pref-16`                                   | convexity of indifference curves under convex preferences and possible exceptions      | authoritative microeconomics textbook | yes                       | yes                                         |
| `verify-pref-06` | `concept-pref-06`                                 | whether an indifference set should be introduced separately from an indifference curve | authoritative textbook or glossary    | no, if omitted            | yes                                         |
| `verify-pref-07` | `property-pref-07`                                | thinness or related curve-set property if desired                                      | authoritative textbook                | no, unless included       | yes                                         |

No external web research was performed in this task.

## Rights and transformation assessment

| Source ID                                     | Rights status            | Intended future use                                                                                            | Direct redistribution prohibited | Distinctive structure to avoid                            | Attribution need in future page                  |
| --------------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------- | ------------------------------------------------ |
| `mikro1-slides-11`                            | `private-reference-only` | paraphrased explanation, independently reconstructed graphs, original example design, original exercise design | yes                              | slide wording, examples, graph layout, figure assets      | yes, as source metadata if rights review permits |
| `mikro1-cdf-06`                               | `unknown`                | private reference for graph behaviour only                                                                     | yes                              | CDF interaction, code, visual assets, parameter structure | yes, if referenced after review                  |
| external textbook reference visible in source | `unknown`                | verification candidate only                                                                                    | yes                              | cited figure or example structure                         | yes, if independently consulted later            |

No final legal conclusion is made by this pack.

## Claim readiness

| Readiness level                  | Meaning in this pack                                               | Count |
| -------------------------------- | ------------------------------------------------------------------ | ----- |
| `located`                        | source locator identified, not extracted for use                   | 1     |
| `extracted`                      | paraphrased claim recorded and linked to source locator            | 8     |
| `cross-checked`                  | independently cross-checked and ready for source-reviewed drafting | 0     |
| `conflict-open`                  | unresolved conflict blocks use                                     | 0     |
| `external-verification-required` | external or formula/notation verification required before drafting | 8     |
| `blocked`                        | cannot proceed without new source material                         | 0     |

Claim extraction is complete for the bounded evidence pack. Source checking is not complete.

## Topic-stage readiness

| Stage                          | Readiness           | Reason                                                                                                  |
| ------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------- |
| lesson outlining               | conditionally ready | core claims, locators, notation risks, assumptions, and exclusions are mapped                           |
| prose drafting                 | not ready           | external verification, formula review, and notation review are still required                           |
| graph specification            | conditionally ready | graph purposes and behaviours are mapped, but graph claims need verification                            |
| original worked-example design | conditionally ready | source examples are structurally identified, but replacements must be independently created             |
| original exercise design       | conditionally ready | exercise categories are mapped, but no prompts or solutions may be written before verification          |
| source review                  | ready               | bounded claim pack identifies exact review targets                                                      |
| publication                    | not ready           | rights review, source checking, exercise checking, graph verification, and editorial review remain open |

## Drafting blockers

- No claim is cross-checked.
- Preference notation requires final visual and rendering review.
- Utility representation and monotone transformation claims require formula workflow.
- Conditional graph properties require external verification before learner-facing prose.
- CDF material is unsupported for direct use and must not be executed or reused.
- No official or adapted exercises are available.
- Original exercises need complete solutions and second review before creation.
- Rights status remains `private-reference-only` or `unknown`.

## Recommended next task

Perform source review for this evidence pack against an authoritative microeconomics source, then update only the claim readiness and conflict records. Do not draft the lesson until the core definitions, notation, assumptions, ordinal-utility statements, and conditional indifference-curve properties are cross-checked.

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
- Blockers: external source verification, formula workflow, notation review, rights review, graph replacement strategy, and exercise verification

The pack status is `extracted`, while the repository audit status remains `structurally-mapped` for validator compatibility and module-level conservatism.

## Private-Source Location Reference

- Private collection key: `external-course-materials/mikro1`
- Private inspection scope: bounded source records only
- Raw notes status: retained outside Git

No private source path is recorded in this repository audit.

## Sanitised File Inventory

| Sanitized source ID | Source type    | File category | Count represented | Rights status            | Source verification | Notes                                           |
| ------------------- | -------------- | ------------- | ----------------- | ------------------------ | ------------------- | ----------------------------------------------- |
| `mikro1-slides-11`  | lecture slides | PDF           | 1 file            | `private-reference-only` | `located`           | Primary source for extracted preference claims. |
| `mikro1-cdf-06`     | unknown        | CDF           | 1 file            | `unknown`                | `located`           | Static metadata only; not executed.             |

## Source Classification

`mikro1-slides-11` is a lecture-slide source for preference representation and indifference curves. `mikro1-cdf-06` is an unsupported legacy visualization or model file that may support later private graph-behaviour checking but cannot be used directly.

## Semester Or Version Evidence

Semester evidence remains retained in the private audit layer and is not approved for public display in this pack.

## Lecturer Or Author Evidence

Lecturer or author evidence remains retained in the private audit layer and is not approved for public display in this pack.

## Proposed Topic Structure

The proposed topic structure is:

1. preference relation and bundles
2. strict, weak, and indifferent relations
3. completeness and transitivity
4. utility as ordinal representation
5. indifference curves as equal-level sets
6. conditional properties of indifference curves
7. next-step boundary to marginal rate of substitution

## Exercise And Solution Mapping

No exercises or solutions are extracted or created in this task. Future original exercises should use the constraints in `Original-exercise design constraints` and must wait for source checking and solution verification.

## Formula And Definition Inventory

Definitions and notation are inventoried in `Concept and definition inventory` and `Notation inventory`. Formula-level claims are not approved; they require the formula workflow before publication.

## Graph And Figure Inventory

Graph evidence is inventoried in `Graph inventory` and `Future graph-behaviour specification`. No graph is reproduced, redrawn, or implemented in this task.

## Source Conflicts

Conflict records are listed in `Conflicts`. No substantive academic conflict was resolved in this task.

## Missing Material

- external authoritative verification for core definitions and conditional properties
- final notation review
- formula-level verification
- rights review
- original graph replacement plan
- original exercise solutions and second review

## Copyright And Publication Assessment

All source use remains private-reference-only or unknown. Future public content must be paraphrased, independently structured, source-traceable, and reviewed before publication.

## Candidate First Topic

The bounded candidate remains `Preferences and indifference-curve basics`. It is conditionally ready for source review and lesson outlining, not drafting or publication.

## Content Transformation Plan

Transform this pack into learner-facing content only after external verification and rights review. Future content must use independent prose, independently redrawn accessible graphs, and original exercises with checked solutions.

## Verification Requirements

Verification requirements are listed in `External verification requirements`. They must be completed before any lesson draft is created.

## Open Questions

- Which authoritative external source should be used for cross-checking?
- Should indifference sets be introduced separately or omitted from the first topic?
- How much ordinal-utility notation belongs in the first topic before utility-function details?
- Which graph properties should be deferred to a later topic?
- What exact display notation should be standardized for future content?

## Publication Blockers

- rights review is incomplete
- no claim is cross-checked
- no formula is verified
- graph properties remain conditional and externally unverified
- CDF material is unsupported for direct use
- no exercise is source-checked or solution-checked

## Audit Decision

Continue to source review. Do not draft, publish, create topic records, create exercises, or implement graphs from this pack yet.

## Review History

| Date         | Reviewer           | Change                                                                | Result                |
| ------------ | ------------------ | --------------------------------------------------------------------- | --------------------- |
| `2026-06-19` | `source-ingestion` | Created sanitized claim evidence pack for preferences and curves.     | `extracted`           |
| `2026-06-19` | `source-ingestion` | Recorded validation-compatible audit status and publication blockers. | `structurally-mapped` |
