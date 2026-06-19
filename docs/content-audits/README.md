# Content Audits

This directory contains the public, sanitized audit layer for source ingestion. It must help reviewers decide whether material is ready to become learning content without committing private course files, copyrighted excerpts, personal paths, or sensitive metadata.

The private audit layer belongs outside the repository in the external course-material directory described by `docs/source-ingestion.md`. It may contain original filenames, local paths, personal annotations, restricted material descriptions, copyright concerns, unpublished exam details, raw checksums, and conversion notes. Those records must not be copied into Git.

## What May Be Committed

Committed audit files may contain:

- sanitized source IDs
- non-sensitive file categories and source types
- structural topic mappings
- audit, rights, and verification states
- publication eligibility notes
- unresolved issues
- selected source locators that do not expose private paths or raw copyrighted content

Committed audit files must not contain raw source excerpts, private filenames that reveal people or confidential course details, student names, email addresses, local paths, archive contents copied verbatim, screenshots, OCR output, or unpublished exam details.

## Naming

Audit files use lowercase ASCII filenames with hyphens, for example `makro2-source-inventory.md`. The filename should identify the module and audit purpose, not a private archive name. Sanitized source IDs use the same lowercase style with a stable numeric suffix, for example `makro2-slides-01`.

Sanitized source IDs must:

- remain stable if a private file is renamed
- avoid personal paths, student names, emails, tokens, and confidential filenames
- map to private records outside Git
- be unique within the audit

## Lifecycle

Audit status is separate from content publication state. Valid audit states are:

| State                 | Definition                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------- |
| `not-started`         | The audit file exists but inventory work has not started.                                                  |
| `inventory-created`   | A private inventory exists and sanitized entries have been started.                                        |
| `classified`          | Source types, file categories, and high-risk items have been classified.                                   |
| `structurally-mapped` | Source material has been mapped to possible topics, exercises, formulas, definitions, graphs, and figures. |
| `rights-reviewed`     | Rights and reuse constraints have been manually reviewed at an audit level.                                |
| `source-checked`      | Academic claims and locators have been checked against the source set.                                     |
| `topic-selected`      | One bounded candidate topic has been selected for drafting.                                                |
| `ready-for-drafting`  | The candidate topic has enough verified, legally usable material to start a separate drafting task.        |
| `blocked`             | Work cannot continue until a named issue is resolved.                                                      |
| `archived`            | The audit is retained for history and no longer active.                                                    |

Valid forward transitions:

| From                  | May Move To                                      |
| --------------------- | ------------------------------------------------ |
| `not-started`         | `inventory-created`, `blocked`, `archived`       |
| `inventory-created`   | `classified`, `blocked`, `archived`              |
| `classified`          | `structurally-mapped`, `blocked`, `archived`     |
| `structurally-mapped` | `rights-reviewed`, `blocked`, `archived`         |
| `rights-reviewed`     | `source-checked`, `blocked`, `archived`          |
| `source-checked`      | `topic-selected`, `blocked`, `archived`          |
| `topic-selected`      | `ready-for-drafting`, `blocked`, `archived`      |
| `ready-for-drafting`  | `blocked`, `archived`                            |
| `blocked`             | the previous documented active state, `archived` |
| `archived`            | no normal forward transition                     |

`inventory-created` must not move directly to `ready-for-drafting`. Avoid vague states such as `done`.

## Rights Status

Rights status is separate from source verification. A source can be academically checked and still be legally unsuitable for redistribution.

Valid rights states are:

- `unknown`
- `private-reference-only`
- `quotation-permitted`
- `adaptation-permitted`
- `public-redistribution-permitted`
- `prohibited`
- `requires-permission`

Audits must not make final legal determinations about specific course material. Use cautious manual review, record uncertainty, and block publication when rights are unclear.

## Source Usage

Use one of these source-usage categories for each planned use:

- Reference only
- Short quotation
- Adaptation
- Redistribution
- Original platform material

Paraphrasing does not remove source obligations. Adapted and original platform material must never be presented as official university material.

## Required Sections

New audit files should start from `_template.md` and keep every section. If a section is not applicable yet, state `Not assessed yet` and explain the blocker.

Publication decisions must consider source verification, exercise provenance, formula review, rights status, accessibility impact, and unresolved conflicts. Technically complete content is not publishable until the audit gate is satisfied.

## Validation

Run the repository audit validation before committing:

```sh
npm run audit:content
```

The command checks only committed audit documents under this directory. It must not access private course directories, external ZIP files, or user documents.
