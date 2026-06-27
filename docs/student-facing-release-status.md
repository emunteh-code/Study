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
| `/lernen/mikrooekonomik-1/vollstaendigkeit/`                                | Mikroökonomik I, preference-relation completeness               | in-progress    | in-progress            | release-ready  | release-ready      | in-progress   | in-progress          | in-progress       | in-progress                                                        | Complete source-grounded session is implemented; human academic review and publication approval remain pending.                                 |
| `/lernen/mikrooekonomik-1/transitivitaet/`                                  | Mikroökonomik I, preference-relation transitivity               | in-progress    | in-progress            | release-ready  | release-ready      | in-progress   | in-progress          | release-ready     | release-ready                                                      | Complete source-grounded session is implemented; human academic review and publication approval remain pending.                                 |
| `/lernen/mikrooekonomik-1/<other-session>/`                                 | Mikroökonomik I session architecture                            | in-progress    | in-progress            | in-progress    | release-ready      | in-progress   | in-progress          | in-progress       | in-progress                                                        | Other session pages are architecture, orientation, or practice mappings, not complete lessons unless explicitly marked.                         |
| `/ueben/mikrooekonomik-1/praeferenzrelationen/`                             | Mikroökonomik I, preference relations                           | in-progress    | in-progress            | release-ready  | release-ready      | release-ready | release-ready        | release-ready     | release-ready                                                      | Complete instructional vertical slice is implemented; human academic review and publication approval remain pending.                            |
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
| `cafa856` | Mikro I source-traceable topic orientation              | release-ready |
| `a8f2aba` | Reusable dependency-based learning architecture         | release-ready |
| `ec69f47` | Focused completeness learning session                   | release-ready |
| `86540f4` | Focused transitivity learning session                   | release-ready |

## Release-Critical Blockers

1. `docs/content-audits/mikro1-preferences-rights-review.md` requires human academic traceability, originality, accessibility, editorial, asset-specific rights, and final publication review before learner-facing publication.
2. `docs/content-audits/mikro1-preferences-outline.md` marks the preference lesson as not ready for lesson drafting or publication.
3. `docs/mikro1-substitution-readiness.md` marks the substitution practice scope as conditionally ready pending independent model-solution and rights review.
4. Full lesson content is not yet implemented for substitution or the remaining preference-relation sessions; completeness and transitivity now have focused complete sessions pending human review.

## Exact Next Highest-Priority Milestone

`in-progress`: extend student-facing instructional depth on top of the reusable dependency-based architecture. The next command is:

```sh
cd /Users/enowmunteh/Documents/Study
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run validate
```

The next implementation milestone is to validate and publish the Transitivität complete-session implementation, then continue with the next bounded source-grounded learning session.

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

## Latest Completed Milestone

- Implementation: source-traceable instructional orientation was added to
  `/lernen/mikrooekonomik-1/`, `/ueben/mikrooekonomik-1/praeferenzrelationen/`,
  and `/ueben/mikrooekonomik-1/substitutionseffekt/`. The orientation separates
  prerequisites, observable objectives, exercise coverage, workflow guidance,
  next steps, and source records from evaluator metadata.
- Instructional-orientation implementation status: release-ready.
- Source-traceability status: in-progress.
- Automated academic verification status: release-ready.
- Human academic review status: in-progress.
- Publication approval status: not-started.
- Exact next command:

```sh
cd /Users/enowmunteh/Documents/Study
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run validate
```

- Exact next implementation milestone: add a coherent end-to-end learning
  slice for `/ueben/mikrooekonomik-1/substitutionseffekt/`, not additional
  source-status pages or release dashboards.

## 2026-06-27 Student-Facing Priority Update

The active priority is visible student learning value, not additional
publication infrastructure. Work on source-status pages, publication metadata,
release dashboards, and similar scaffolding is stopped until a later explicit
milestone.

Latest student-facing milestone:

- Route: `/ueben/mikrooekonomik-1/praeferenzrelationen/`
- Course and topic ownership: Mikroökonomik I, preference relations
- Release status: in-progress
- Academic-source status: in-progress
- Content status: release-ready
- Interaction status: release-ready
- Design status: release-ready
- Accessibility status: release-ready
- Responsive status: release-ready
- Test status: release-ready
- Blockers: human academic review and publication approval remain pending.
- Exact next command:

```sh
cd /Users/enowmunteh/Documents/Study
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run validate
```

- Exact next highest-priority milestone: implement the same end-to-end
  instructional depth for `/ueben/mikrooekonomik-1/substitutionseffekt/`.

## 2026-06-27 Reusable Architecture Update

Current milestone:

- Reusable platform structure: release-ready
- Mikroökonomik I migration to shared model: release-ready
- Module registry: release-ready
- Generic module overview renderer: release-ready
- Generic session architecture renderer: release-ready
- Second non-economics fixture: release-ready
- Future module-ingestion guide: release-ready
- Practice evaluator migration: future-scope; existing evaluators remain
  intentionally untouched.
- Completed commit: `a8f2aba`
- Blockers: none for the reusable architecture milestone. Human academic review
  and publication approval remain separate release blockers.
- Exact next command:

```sh
cd /Users/enowmunteh/Documents/Study
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run validate
```

- Exact next highest-priority milestone: add the next focused source-grounded
  `/lernen/` session using the complete-session block contract. Transitivität
  is the closest follow-on because the graph now routes learners from
  Vollständigkeit to Transitivität.

## 2026-06-27 Focused Completeness Session Update

Current milestone:

- Route: `/lernen/mikrooekonomik-1/vollstaendigkeit/`
- Course and topic ownership: Mikroökonomik I, preference-relation
  completeness
- Release status: in-progress
- Academic-source status: in-progress
- Content status: release-ready
- Interaction status: release-ready
- Design status: in-progress
- Accessibility status: in-progress
- Responsive status: in-progress
- Test status: release-ready
- Blockers: human academic review and publication approval remain pending.
- Completed commit: `ec69f47`
- Exact next command:

```sh
cd /Users/enowmunteh/Documents/Study
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run validate
```

- Exact next highest-priority milestone: implement the next focused
  source-grounded session for `/lernen/mikrooekonomik-1/transitivitaet/`.

## 2026-06-27 Focused Transitivity Session Update

Current milestone:

- Route: `/lernen/mikrooekonomik-1/transitivitaet/`
- Course and topic ownership: Mikroökonomik I, preference-relation
  transitivity
- Release status: in-progress
- Academic-source status: in-progress
- Content status: release-ready
- Interaction status: release-ready
- Design status: in-progress
- Accessibility status: in-progress
- Responsive status: in-progress
- Test status: release-ready
- Blockers: human academic review and publication approval remain pending.
- Completed commit: `86540f4`
- Exact next command:

```sh
cd /Users/enowmunteh/Documents/Study
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run validate
```

- Exact next highest-priority milestone: implement the next bounded
  source-grounded learning session for
  `/lernen/mikrooekonomik-1/rationale-praeferenzrelationen/`, using the same
  complete-session contract and keeping rationality technical rather than
  psychological.
