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

| Route                                                                       | Course and topic ownership                                      | Release status | Academic-source status | Content status | Interaction status | Design status | Accessibility status | Responsive status | Test status                                                        | Blockers                                                                                                                                        |
| --------------------------------------------------------------------------- | --------------------------------------------------------------- | -------------- | ---------------------- | -------------- | ------------------ | ------------- | -------------------- | ----------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                                                                         | Platform entry                                                  | in-progress    | not-started            | in-progress    | release-ready      | in-progress   | in-progress          | in-progress       | release-ready                                                      | Student journeys lead to fixture and future-scope areas rather than a released course.                                                          |
| `/lernen/`                                                                  | Course discovery                                                | in-progress    | in-progress            | in-progress    | release-ready      | in-progress   | in-progress          | in-progress       | release-ready                                                      | Mikroökonomik I is discoverable; final human review and publication approval remain pending.                                                    |
| `/lernen/pilot-modul/` and child topic                                      | Technical fixture                                               | future-scope   | not-started            | future-scope   | release-ready      | release-ready | release-ready        | release-ready     | Must not be represented as a real course.                          |
| `/ueben/`                                                                   | Practice discovery                                              | in-progress    | in-progress            | in-progress    | release-ready      | in-progress   | in-progress          | in-progress       | release-ready                                                      | The two review-ready Mikro I practice routes are discoverable; broader practice catalogue remains future-scope.                                 |
| `/ueben/mikrooekonomik-1/praeferenzrelationen/`                             | Mikroökonomik I, preference relations                           | in-progress    | in-progress            | in-progress    | release-ready      | in-progress   | release-ready        | release-ready     | release-ready                                                      | Source-traceable orientation and practice are implemented; full lesson content, human review, and publication approval remain pending.          |
| `/ueben/mikrooekonomik-1/substitutionseffekt/`                              | Mikroökonomik I, substitution elasticity and homothetic utility | in-progress    | in-progress            | in-progress    | release-ready      | in-progress   | release-ready        | release-ready     | release-ready                                                      | Source-traceable orientation and restricted practice are implemented; broader CES scope, human review, and publication approval remain pending. |
| `/probeklausuren/`                                                          | Exam transfer                                                   | future-scope   | blocked                | future-scope   | release-ready      | release-ready | release-ready        | release-ready     | release-ready                                                      | No verified original or officially licensed mock exams.                                                                                         |
| `/fortschritt/`                                                             | Learning orientation                                            | future-scope   | not-started            | future-scope   | release-ready      | release-ready | release-ready        | release-ready     | release-ready                                                      | Local completion and review product policy has not been approved across courses.                                                                |
| `/suche/`                                                                   | Search                                                          | future-scope   | not-started            | future-scope   | release-ready      | release-ready | release-ready        | release-ready     | release-ready                                                      | No released content index exists.                                                                                                               |
| `/methodik/`                                                                | Product methodology                                             | in-progress    | not-started            | in-progress    | release-ready      | release-ready | release-ready        | release-ready     | release-ready                                                      | Needs final student-facing methodology prose consistent with the product specification.                                                         |
| `/quellen/`                                                                 | Source transparency                                             | blocked        | blocked                | blocked        | release-ready      | release-ready | release-ready        | release-ready     | release-ready                                                      | Publication-safe source and rights presentation is not approved.                                                                                |
| `/ueber-das-portal/`                                                        | Product transparency                                            | in-progress    | not-started            | in-progress    | release-ready      | release-ready | release-ready        | release-ready     | release-ready                                                      | Must stay clear that the platform is independent and still in development.                                                                      |
| `/fehler-melden/`, `/datenschutz/`, `/impressum/`, `/404`                   | Supporting routes                                               | in-progress    | not-started            | in-progress    | release-ready      | release-ready | release-ready        | release-ready     | Legal and contact content requires an owner review before release. |
| `/dev/components/`, `/fixtures/homepage/returning/`, `/ueben/pilot-modul/*` | Development fixtures                                            | future-scope   | not-started            | future-scope   | release-ready      | release-ready | release-ready        | release-ready     | Must remain noindex and outside student release navigation.        |

## Course and Topic Ownership

| Course                    | Topics represented in the repository                                 | Current release status | Source status                                                                                                                                                                             |
| ------------------------- | -------------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mikroökonomik I           | Preference relations; substitution elasticity and homothetic utility | in-progress            | Private course material is reference-only. Approved audit records support bounded orientation and original practice implementation; human review and publication approval remain pending. |
| All other course archives | No student-facing course implementation                              | future-scope           | not-started                                                                                                                                                                               |

## Completed Commits

| Commit    | Scope                                                   | Status        |
| --------- | ------------------------------------------------------- | ------------- |
| `d414ade` | Private substitution evaluator foundation               | release-ready |
| `50fb108` | Substitution practice route and progressive enhancement | release-ready |
| `1f35b81` | Substitution self-review workflow                       | release-ready |
| `aa11405` | Mikro I course discovery journey                        | release-ready |

## Release-Critical Blockers

1. `docs/content-audits/mikro1-preferences-rights-review.md` requires human academic traceability, originality, accessibility, editorial, asset-specific rights, and final publication review before learner-facing publication.
2. `docs/content-audits/mikro1-preferences-outline.md` marks the preference lesson as not ready for lesson drafting or publication.
3. `docs/mikro1-substitution-readiness.md` marks the substitution practice scope as conditionally ready pending independent model-solution and rights review.
4. Full lesson content is not yet implemented for either Mikro I topic; current pages provide source-traceable orientation plus practice only.

## Exact Next Highest-Priority Milestone

`in-progress`: validate and commit the source-traceable instructional-orientation milestone for the two existing Mikroökonomik I practice sets. The next command is:

```sh
cd /Users/enowmunteh/Documents/Study
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run validate
```

The next implementation milestone is to add source-status pages or release-review records that can support a publication decision without exposing private course materials.

## Last Audit

- Date: 2026-06-23
- Working tree at audit start: clean
- Course material inspected: `/Users/enowmunteh/Documents/Study-Course-Materials/Mikroökonomik I.zip` and the private Mikro I inventory.
- Private materials remain outside Git and are not production assets.

## 2026-06-23 Implementation Correction

Pending human review is not an implementation blocker. The controlling dimensions are:

| Dimension                       | Status      |
| ------------------------------- | ----------- |
| Implementation                  | in-progress |
| Automated academic verification | in-progress |
| Human review                    | in-progress |
| Publication approval            | not-started |

The active milestone is a review-ready Mikroökonomik I journey: `/lernen/` to
`/lernen/mikrooekonomik-1/`, then to the two implemented practice routes.
Human review and publication approval remain recorded as pending without
preventing this implementation work.

## Current Uncommitted Milestone

- Implementation: source-traceable instructional orientation is being added to
  `/lernen/mikrooekonomik-1/`, `/ueben/mikrooekonomik-1/praeferenzrelationen/`,
  and `/ueben/mikrooekonomik-1/substitutionseffekt/`. The orientation separates
  prerequisites, observable objectives, exercise coverage, workflow guidance,
  next steps, and source records from evaluator metadata.
- Instructional-orientation implementation status: in-progress.
- Source-traceability status: in-progress.
- Automated academic verification status: in-progress.
- Human academic review status: in-progress.
- Publication approval status: not-started.
- Exact next command after this milestone is committed:

```sh
cd /Users/enowmunteh/Documents/Study
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run validate
```

- Exact next implementation milestone: add route-level source traceability and
  complete the instructional orientation of the two Mikro I practice topics.
