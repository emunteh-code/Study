# Source Ingestion Safeguards

This workflow defines how private course files can be inspected and transformed into publishable learning content without placing private material in Git. It is a safeguard process, not a request to ingest real sources now.

The platform is independent. Nothing in this workflow may imply official university affiliation, lecturer approval, semester alignment, or exam alignment unless that claim is explicitly verified and publishable.

## External Source Directory

Private source material belongs outside the repository under:

```text
~/Documents/Study-Course-Materials/
  makro2/
    archives/
    extracted/
    inventory/
    notes/
    temporary/
  mathematik/
  mikro/
  statistik/
  recht/
```

Folder purposes:

- `archives/`: original ZIP files or other source bundles.
- `extracted/`: isolated extraction directories created after archive safety checks.
- `inventory/`: private raw inventories, original filenames, checksums, and file notes.
- `notes/`: private observations, copyright concerns, and reviewer notes.
- `temporary/`: disposable conversion or inspection output.

Do not create this directory automatically. Do not assume any files exist there.

## Ingestion Stages

Use this sequence for any future source set:

1. Private source storage
2. Archive inspection
3. File inventory
4. Source classification
5. Copyright and publication assessment
6. Structural content mapping
7. Academic claim extraction
8. Source-location recording
9. Conflict detection
10. Topic selection
11. Draft transformation
12. Source verification
13. Exercise verification
14. Editorial review
15. Publication decision

Each stage must be recorded either in the private audit layer or in the sanitized repository audit layer.

## Repository Policy

Private source files must never be committed unless all of these are true:

- rights are verified
- the file is intentionally part of the public site
- the destination is an approved public-assets path
- provenance and reuse are documented
- the publication review passes

The following stay outside Git by default:

- ZIP archives and nested archives
- lecturer slides
- exercise sheets
- official solutions
- unpublished exams
- course announcements
- textbook scans
- private notes
- converted PDFs
- temporary extracted files
- source screenshots
- OCR output
- raw exports

The `.gitignore` file blocks common private-source directories and archive formats. This does not remove already tracked files. Before committing, use:

```sh
git status --short
git diff --cached --name-only
git check-ignore -v <path>
git ls-files
```

## Public And Private Audit Layers

The private layer may contain original filenames, local paths, personal annotations, restricted material descriptions, copyright concerns, unpublished exam details, raw file hashes, and conversion notes. Keep it outside Git.

The repository layer may contain only sanitized source IDs, non-sensitive metadata, source types, structural topic mapping, verification states, rights status, publication eligibility, unresolved issues, and selected source locators. It must not contain raw copyrighted content.

Repository audit files live in `docs/content-audits/` and must pass:

```sh
npm run audit:content
```

## Audit Status Model

Valid audit states are:

- `not-started`
- `inventory-created`
- `classified`
- `structurally-mapped`
- `rights-reviewed`
- `source-checked`
- `topic-selected`
- `ready-for-drafting`
- `blocked`
- `archived`

Valid transitions are documented in `docs/content-audits/README.md`. Do not jump from `inventory-created` directly to `ready-for-drafting`; classification, structural mapping, rights review, and source checks must happen first.

## Rights Status

Rights status values are:

- `unknown`
- `private-reference-only`
- `quotation-permitted`
- `adaptation-permitted`
- `public-redistribution-permitted`
- `prohibited`
- `requires-permission`

Rights status is separate from source verification. A source can be academically verified and still be legally nonredistributable. Do not make legal determinations about specific course materials in the repository; record uncertainty and require manual review.

## Source Usage Categories

Use one category for each planned use:

- Reference only
- Short quotation
- Adaptation
- Redistribution
- Original platform material

Paraphrasing does not erase source obligations. Adapted material must disclose its basis. Original platform exercises must never be presented as official exam questions.

## Sanitized Source IDs

Use IDs such as:

- `makro2-slides-01`
- `makro2-exercises-01`
- `makro2-solutions-01`
- `makro2-syllabus-01`

IDs must be stable, lowercase ASCII, independent of titles, and safe to commit. They must not include personal paths, student names, email addresses, tokens, or confidential filenames. Maintain the mapping to private records outside Git.

## File Inventory Model

The private inventory may record:

- sanitized ID
- private filename
- file type
- size
- optional SHA-256 checksum
- page or slide count
- source type
- module
- suspected or confirmed semester
- lecturer or author evidence
- language
- solution relation
- duplicate or supersession relation
- rights status
- verification status
- extraction status
- parsing status
- notes

Private names and paths stay in the private layer unless explicitly safe. SHA-256 checksums are useful for duplicate or version identity, not for cryptographic guarantees. Do not publish checksums if they are sensitive.

## Archive Safety

Before extracting an archive:

- list entries without extraction
- reject absolute paths
- reject `../` traversal
- detect nested archives
- flag suspicious executables and scripts
- check expected uncompressed size
- check file count
- check password-protection status
- avoid overwrites
- extract only to a new isolated directory outside the repository
- never extract into the repository root
- never execute extracted files

Treat archive bombs as a practical risk. Archive utilities in this repository may validate path lists, but they must not extract real archives.

Allowed source formats include PDF, PPTX, DOCX, XLSX, CSV, TXT, Markdown, images, and ZIP archives. High-risk unsupported formats include executables, scripts, macros, disk images, installers, unknown binary formats, password-protected archives, and nested archives requiring execution. Office macros must never be executed.

## Source Processing Order

Use the least invasive source processing path:

1. metadata extraction
2. native text extraction
3. structural inspection
4. visual inspection
5. manual verification
6. OCR as a last resort

Do not use OCR when native text is available. OCR output is evidence to verify, not publishable authority. Tables, graphs, equations, layouts, and visual figures require visual inspection.

## Claim Extraction

Every extracted academic claim should record:

- claim ID
- proposed statement
- source ID
- exact locator
- confidence
- whether the claim is direct, adapted, inferred, or original
- verification status
- conflicts
- publication destination
- reviewer notes

Claims need source relationships unless they are original platform explanations. Inferences must be marked as inferences.

## Formula Workflow

For each formula:

1. locate the formula in a source
2. record the exact locator
3. transcribe it manually
4. define all symbols
5. check signs, exponents, subscripts, superscripts, and units
6. compare an authoritative source when needed
7. record assumptions and restrictions
8. validate worked examples
9. record review status
10. approve only after verification

Do not publish OCR-only formulas.

## Exercise Workflow

Every exercise record must include:

- provenance: `official`, `adapted`, or `original`
- source locator when applicable
- complete solution
- independent verification
- common errors
- objective mapping
- difficulty
- rights status
- review status

Official solutions are not automatically correct. Adapted changes must be disclosed. Original exercises must not be presented as official.

## Conflict Handling

Conflicts may arise between slides, exercise sheets, solutions, textbooks, statutes, instructor announcements, or semester versions. Record:

- conflicting source IDs
- locators
- nature of the conflict
- likely cause
- chosen interpretation if any
- confidence
- reviewer
- unresolved status
- learner-facing disclosure if relevant

Do not silently choose a source.

## Candidate Topic Selection

Select a candidate topic only when:

- source coverage is complete enough
- claims can be independently verified
- exercises and solutions exist or original exercises can be created
- rights permit transformation
- implementation dependencies are limited
- the scope is representative and manageable
- the topic is important for the learning path
- the current template can support it
- no critical conflict blocks publication

Do not select the first topic alphabetically unless it also satisfies these criteria.

## Publication Gate

Learning content is publishable only when:

- sources are checked
- formulas, definitions, and exercises are verified
- provenance is complete
- rights status permits the planned use
- source locators exist
- content-state requirements are met
- accessibility and navigation checks pass
- no critical unresolved issue remains
- review history is recorded

Technically complete content is not publishable by itself.

## Repository Audit Utilities

The repository includes pure TypeScript helpers in `src/lib/content-audit.ts` and a repository-only validation script at `scripts/validate-content-audits.mjs`.

The helpers validate audit IDs, sanitized source IDs, audit-state transitions, rights states, unsafe archive entry paths, source-file extensions, unsupported file types, path leaks, email leaks, required template sections, and raw binary files in the audit directory.

The script checks only files under `docs/content-audits/`. It must not scan arbitrary user files, external private directories, local ZIPs, or course material.

## Failure Handling

If private material is staged but not committed:

1. unstage it
2. confirm the ignore rule
3. remove the worktree copy only if it is safe and backed up elsewhere
4. re-run `git status --short`

If private material is committed but not pushed:

1. stop work
2. remove the private material from the commit
3. amend or reset safely after confirming scope
4. verify history before continuing

If private material is pushed:

1. stop publication
2. treat the material as exposed
3. remove it from current branches
4. assess whether history rewriting is required
5. rotate exposed credentials if any
6. seek repository administrator help

Do not automatically rewrite shared history.

## First Makroökonomik II Source Inventory Procedure

Do not perform these steps until a separate task explicitly starts source inventory work.

1. Place the ZIP in `~/Documents/Study-Course-Materials/makro2/archives/`.
2. Confirm the repository working tree is clean.
3. Confirm the ZIP is outside the repository.
4. List archive entries without extraction.
5. Run archive safety checks.
6. Extract to a new directory under the external `makro2/extracted/` folder.
7. Create a private raw inventory.
8. Create sanitized source IDs.
9. Create `docs/content-audits/makro2-source-inventory.md`.
10. Record only safe metadata in the repository audit.
11. Do not transform content yet.
12. Review the inventory.
13. Select one candidate topic.
14. Create a separate topic-drafting task.

The first inventory should end with a reviewed audit record, not with published learning content.

## Known Limitations

This repository does not implement archive extraction, OCR, native document parsing, legal review automation, source-location storage for real course files, or academic claim publication. The current safeguards are validation and documentation tools for a future manual workflow.
