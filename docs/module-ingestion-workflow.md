# Module Ingestion Workflow

This guide explains how a future academic module becomes part of the reusable
Study platform architecture. The goal is to add modules from source-grounded
data, not to rebuild the application structure for every subject.

Mikroökonomik I is the first implementation module. Other modules are not yet
academically implemented.

## Representation

Reusable platform files:

- `src/learning/model.ts` defines modules, units, sessions, dependency
  connections, source references, instructional capabilities, practice mappings,
  and availability states.
- `src/learning/validation.ts` validates module graphs, routes, objectives,
  source paths, availability claims, and capability-specific requirements.
- `src/learning/registry.ts` exposes registered public modules.
- `src/learning/routing.ts` centralizes reusable learning and practice route
  conventions.
- `src/components/learning/ModuleOverview.astro` renders module overviews from
  module data.
- `src/components/learning/SessionArchitecture.astro` renders session pages from
  session data.

Module-specific data should live under `src/data/modules/<module-slug>/`.
Mikroökonomik I currently uses:

- `src/data/modules/mikrooekonomik-1/module.ts`

## Workflow

1. Collect and audit source material.
2. Extract concepts and skills.
3. Create the dependency graph.
4. Divide the graph into coherent sessions.
5. Define measurable learning objectives.
6. Define module-specific instructional requirements.
7. Map exam-task families.
8. Map existing practice routes or specify planned practice.
9. Validate the module architecture.
10. Register the module in `src/learning/registry.ts`.
11. Implement one complete reference session.
12. Expand session by session.
13. Perform human academic review.
14. Approve publication.

## Files Normally Modified

For a new ordinary module, expect to add or edit:

- `src/data/modules/<module-slug>/module.ts`
- `src/learning/registry.ts`
- focused unit tests for the module data
- focused browser tests if the module becomes public
- relevant audit files in `docs/`

You should not need to duplicate the catalogue, module overview renderer,
session renderer, dependency display, route helpers, or validation logic.

## Source Material To Module Architecture

Use source material to define:

- module identity and honest availability;
- conceptual units;
- focused learning sessions;
- prerequisite and future-session dependencies;
- measurable objectives using observable verbs;
- source references with repository-relative paths;
- instructional capabilities needed by the subject;
- exam-task families;
- misconception targets;
- mastery evidence;
- practice mappings.

Do not store all academic content as one large Markdown string. Use structured
fields for concepts, objectives, requirements, practice mappings, source
records, and availability. Lesson prose can still be implemented separately once
the architecture says what the session must teach.

## Capabilities

Instructional capabilities are discriminated unions. Use only the capabilities
the session actually needs.

Examples:

- economics sessions may use definitions, formulas, derivations, graphs,
  worked examples, active recall, and exam strategy;
- mathematics sessions may use proofs and derivations;
- accounting sessions may use calculation procedures;
- law sessions may use case analysis and legal reasoning;
- language sessions may use language production and pronunciation.

Do not add speculative capabilities unless a foreseeable academic module needs
them.

## Practice Mapping

Practice mappings identify:

- the practice route;
- the session IDs supported by the practice;
- the objective IDs supported by the practice;
- availability.

Practice content, evaluators, hidden answers, self-review behavior, completion
semantics, and feedback remain in their existing bounded implementation files.
Do not duplicate or alter approved practice merely to fit the architecture.

## Validation

Run at least:

```sh
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run format
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run typecheck
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run lint
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run test
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run audit:content
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run build
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run validate
PATH="/opt/homebrew/opt/node@24/bin:$PATH" npm run test:e2e
git diff --check --no-ext-diff
```

The validation layer rejects:

- duplicate module IDs or slugs;
- duplicate unit or session IDs;
- duplicate session slugs within a module;
- unknown unit membership;
- invalid prerequisite or future-session references;
- self-dependencies;
- dependency cycles;
- missing dependency explanations;
- objectives without observable verbs;
- unsafe source paths such as absolute paths, `file://`, or external URLs;
- invalid practice mappings;
- available lesson claims without instructional requirements;
- capability-specific omissions such as formulas without variable definitions
  or case-analysis requirements without issue and rule fields.

## False Completion Claims

Avoid these mistakes:

- Do not mark unsupported or incomplete sessions as published.
- Do not expose private source files or local absolute paths.
- Do not publish fixture modules as real courses.
- Do not imply official university affiliation or lecturer approval.
- Do not claim a lesson exists because the session architecture exists.
- Do not treat practice completion as correctness, mastery, or a grade.

The reusable platform architecture exists. Mikroökonomik I is the first
implementation. Other modules are future work until their sources, sessions,
practice, and human review are complete.
