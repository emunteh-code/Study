# Student-Facing Release Status

## Purpose

This ledger is the continuing release inventory for student-visible routes. It
records release readiness, academic-source boundaries, and the next bounded
milestone. It does not turn internal audit material into published academic
content.

## Status Vocabulary

Only these statuses are used below: `not-started`, `in-progress`, `blocked`,
`release-ready`, `future-scope`.

## Route Inventory

| Route                                                                       | Course and topic ownership                                      | Release status | Academic-source status | Content status | Interaction status | Design status | Accessibility status | Responsive status | Test status                                                        | Blockers                                                                                                                                                                                         |
| --------------------------------------------------------------------------- | --------------------------------------------------------------- | -------------- | ---------------------- | -------------- | ------------------ | ------------- | -------------------- | ----------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/`                                                                         | Platform entry                                                  | in-progress    | not-started            | in-progress    | release-ready      | in-progress   | in-progress          | in-progress       | release-ready                                                      | Student journeys lead to fixture and future-scope areas rather than a released course.                                                                                                           |
| `/lernen/`                                                                  | Course discovery                                                | blocked        | blocked                | blocked        | release-ready      | in-progress   | in-progress          | in-progress       | release-ready                                                      | Only a neutral fixture module is visible; no released course overview exists.                                                                                                                    |
| `/lernen/pilot-modul/` and child topic                                      | Technical fixture                                               | future-scope   | not-started            | future-scope   | release-ready      | release-ready | release-ready        | release-ready     | Must not be represented as a real course.                          |
| `/ueben/`                                                                   | Practice discovery                                              | blocked        | blocked                | blocked        | release-ready      | in-progress   | in-progress          | in-progress       | release-ready                                                      | It states that no practice sets are published while Mikro I practice routes are not discoverable here.                                                                                           |
| `/ueben/mikrooekonomik-1/praeferenzrelationen/`                             | Mikroökonomik I, preference relations                           | blocked        | blocked                | blocked        | release-ready      | in-progress   | release-ready        | release-ready     | release-ready                                                      | Existing interactive practice is original, but its governing outline and rights review explicitly prohibit publication until final academic, originality, accessibility, and publication review. |
| `/ueben/mikrooekonomik-1/substitutionseffekt/`                              | Mikroökonomik I, substitution elasticity and homothetic utility | blocked        | blocked                | blocked        | release-ready      | in-progress   | release-ready        | release-ready     | release-ready                                                      | The readiness record remains conditionally ready and requires independent model-solution and rights review before a complete practice route may be released.                                     |
| `/probeklausuren/`                                                          | Exam transfer                                                   | future-scope   | blocked                | future-scope   | release-ready      | release-ready | release-ready        | release-ready     | release-ready                                                      | No verified original or officially licensed mock exams.                                                                                                                                          |
| `/fortschritt/`                                                             | Learning orientation                                            | future-scope   | not-started            | future-scope   | release-ready      | release-ready | release-ready        | release-ready     | release-ready                                                      | Local completion and review product policy has not been approved across courses.                                                                                                                 |
| `/suche/`                                                                   | Search                                                          | future-scope   | not-started            | future-scope   | release-ready      | release-ready | release-ready        | release-ready     | release-ready                                                      | No released content index exists.                                                                                                                                                                |
| `/methodik/`                                                                | Product methodology                                             | in-progress    | not-started            | in-progress    | release-ready      | release-ready | release-ready        | release-ready     | release-ready                                                      | Needs final student-facing methodology prose consistent with the product specification.                                                                                                          |
| `/quellen/`                                                                 | Source transparency                                             | blocked        | blocked                | blocked        | release-ready      | release-ready | release-ready        | release-ready     | release-ready                                                      | Publication-safe source and rights presentation is not approved.                                                                                                                                 |
| `/ueber-das-portal/`                                                        | Product transparency                                            | in-progress    | not-started            | in-progress    | release-ready      | release-ready | release-ready        | release-ready     | release-ready                                                      | Must stay clear that the platform is independent and still in development.                                                                                                                       |
| `/fehler-melden/`, `/datenschutz/`, `/impressum/`, `/404`                   | Supporting routes                                               | in-progress    | not-started            | in-progress    | release-ready      | release-ready | release-ready        | release-ready     | Legal and contact content requires an owner review before release. |
| `/dev/components/`, `/fixtures/homepage/returning/`, `/ueben/pilot-modul/*` | Development fixtures                                            | future-scope   | not-started            | future-scope   | release-ready      | release-ready | release-ready        | release-ready     | Must remain noindex and outside student release navigation.        |

## Course and Topic Ownership

| Course                    | Topics represented in the repository                                 | Current release status | Source status                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Mikroökonomik I           | Preference relations; substitution elasticity and homothetic utility | blocked                | Private course material is reference-only. The approved audit records permit original drafting architecture, not publication. |
| All other course archives | No student-facing course implementation                              | future-scope           | not-started                                                                                                                   |

## Completed Commits

| Commit    | Scope                                                   | Status        |
| --------- | ------------------------------------------------------- | ------------- |
| `d414ade` | Private substitution evaluator foundation               | release-ready |
| `50fb108` | Substitution practice route and progressive enhancement | release-ready |
| `1f35b81` | Substitution self-review workflow                       | release-ready |

## Release-Critical Blockers

1. `docs/content-audits/mikro1-preferences-rights-review.md` requires human academic traceability, originality, accessibility, editorial, asset-specific rights, and final publication review before learner-facing publication.
2. `docs/content-audits/mikro1-preferences-outline.md` marks the preference lesson as not ready for lesson drafting or publication.
3. `docs/mikro1-substitution-readiness.md` marks the substitution practice scope as conditionally ready pending independent model-solution and rights review.
4. No released course overview links students from `/lernen/` or `/ueben/` to an academically cleared course journey.

## Exact Next Highest-Priority Milestone

`blocked`: obtain a documented human academic-and-rights release decision for the two existing Mikroökonomik I practice sets, including final originality/source-similarity review and explicit authorization to publish original learner-facing prose and exercises. After that decision, the next command is:

```sh
cd /Users/enowmunteh/Documents/Study
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run validate
```

The next implementation milestone is to replace the neutral `/lernen/` and `/ueben/` fixture/placeholder journey with a clearly labelled Mikroökonomik I course overview that links only to academically cleared topics.

## Last Audit

- Date: 2026-06-23
- Working tree at audit start: clean
- Course material inspected: `/Users/enowmunteh/Documents/Study-Course-Materials/Mikroökonomik I.zip` and the private Mikro I inventory.
- Private materials remain outside Git and are not production assets.
