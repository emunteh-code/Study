# AGENTS.md

This repository is for an independent learning platform for B.Sc. Volkswirtschaftslehre students at Georg-August-Universitaet Goettingen.

It is not an official university platform. Do not imply official university affiliation, endorsement, lecturer approval, or semester alignment unless that status is explicitly sourced and current.

The central product promise is:

"Students should always know what to learn next."

Every future Codex task in this repository must end with:

1. Changed files
2. Commands run
3. Validation results
4. Implementation assumptions
5. Academic assumptions
6. Unresolved issues
7. Recommended next bounded task

## 1. Product purpose

The platform helps B.Sc. Volkswirtschaftslehre students understand what to learn, practice, review, and transfer to exams next.

The product must prioritize clear learning progression over content volume. Public learning content should be statically generated, easy to navigate, and useful without requiring accounts, cloud sync, AI tutoring, community features, or gamification in version one.

The platform must not become a PDF catalogue. PDFs may support learning where appropriate, but the main experience must be structured, accessible, source-traceable web learning content.

## 2. Target users

The primary users are B.Sc. Volkswirtschaftslehre students at Georg-August-Universitaet Goettingen who want practical guidance through module topics, exercises, review, and exam preparation.

The platform should support students who are:

- starting a topic for the first time
- returning after a gap
- preparing for tutorials, assignments, or exams
- trying to identify weak areas
- reviewing archived or previous-semester material

The platform must clearly distinguish current semester material from archived semester material.

## 3. Learning model

The required learning cycle is:

Understand -> Guided practice -> Independent practice -> Exam transfer -> Review

Every topic should eventually contain:

- learning objectives
- intuitive explanation
- formal explanation
- definitions
- formulas or models
- worked examples
- guided practice
- independent practice
- exam recognition
- review prompts
- sources
- a clear next step

Progress and mastery must not use page views as the sole mastery metric. Future progress logic should consider meaningful learning evidence such as completed practice, review performance, confidence checks, exam-transfer tasks, spaced review, and source-checked exercise completion.

Content states are:

- planned
- drafting
- structurally-complete
- source-checked
- exercise-checked
- published
- archived

Source-verification states are:

- unverified
- located
- checked
- superseded

Exercise-provenance states are:

- official
- adapted
- original

## 4. Technical principles

The future platform must use:

- Astro
- strict TypeScript
- MDX
- Astro content collections
- semantic HTML
- progressive enhancement
- static generation for public learning content
- essential navigation without client-side JavaScript
- JavaScript only for necessary interaction
- academic content separated from presentation components
- shared components across modules
- stable IDs independent of titles
- safe handling of unavailable or corrupted browser storage
- minimal dependencies

React, Vue, or Svelte must not be used unless explicitly justified for a bounded need that cannot be met cleanly with Astro, MDX, semantic HTML, and small progressive-enhancement scripts.

Prefer durable information architecture over unrelated mini-sites for each module. Shared layouts, content schemas, navigation patterns, and learning components should keep modules coherent while allowing module-specific academic content.

## 5. Accessibility requirements

The platform must target WCAG 2.2 AA.

Accessibility requirements include:

- keyboard accessibility
- native HTML before ARIA
- skip links
- visible focus states
- logical heading hierarchy
- adequate colour contrast
- reduced-motion support
- no clickable divs or spans
- no custom listboxes for ordinary navigation
- no hover-only essential information
- usability at 320 CSS pixels
- practical 44 by 44 pixel targets where possible

Interactive controls must be usable with keyboard, pointer, touch, and assistive technologies. Basic navigation must not depend on client-side JavaScript.

## 6. Content integrity requirements

Every published academic claim must be traceable to a source.

Official, adapted, and original content must be clearly distinguished. Original exercises must never be presented as official exam questions.

The platform must not contain:

- invented citations
- invented formulas
- invented definitions
- invented solutions
- invented lecturer alignment
- invented semester alignment
- unverified formulas or solutions presented as checked

Every formula must define all variables. Source conflicts must be documented. Current and archived semester material must remain distinguishable.

No academic content should be treated as published until it has appropriate content, source-verification, and exercise-provenance states.

## 7. Code-quality requirements

Code must be simple, typed, and maintainable.

Requirements include:

- strict TypeScript configuration
- small, focused components
- shared components across modules
- content schemas that make academic integrity states explicit
- stable IDs that do not change when titles change
- content separated from presentation components
- minimal dependencies
- no copied architecture from the old website
- defensive handling of missing, unavailable, or corrupted browser storage
- no disabled links for unavailable content

Unavailable content should be represented with honest status, clear next steps, or omitted navigation targets rather than inaccessible disabled links.

## 8. Testing requirements

Testing should match the risk of the change.

Future implementation work should include appropriate validation for:

- TypeScript correctness
- Astro builds
- content collection schemas
- stable ID behavior
- navigation without client-side JavaScript
- safe browser-storage failure handling
- accessibility basics such as keyboard paths, headings, focus states, and contrast
- content-state, source-verification-state, and exercise-provenance-state handling

Academic content validation must include source checks and exercise checks before content is marked as published.

## 9. Prohibited implementation choices

Do not implement:

- a PDF catalogue as the primary platform
- unrelated mini-sites for each module
- page views as the sole progress metric
- JavaScript-dependent basic navigation
- implied official university affiliation
- invented academic material
- unverified formulas or solutions presented as reliable
- accounts in version one
- cloud synchronisation in version one
- AI tutoring in version one
- community features
- leaderboards
- gamification
- inaccessible custom controls
- glassmorphism
- excessive gradients
- oversized marketing heroes
- disabled links for unavailable content
- copied old website architecture

## 10. Definition of done

A future task is done only when:

- the change supports the product promise that students should always know what to learn next
- the learning cycle remains visible in the affected content or workflow
- public learning content can be statically generated where applicable
- essential navigation works without client-side JavaScript
- semantic HTML and accessibility requirements are respected
- academic content remains separated from presentation components
- content integrity states are preserved or improved
- formulas define all variables
- official, adapted, and original materials are clearly distinguished
- no prohibited implementation choice has been introduced
- relevant checks have been run and reported
- implementation assumptions and academic assumptions are explicitly stated
- unresolved issues and the next bounded task are identified
