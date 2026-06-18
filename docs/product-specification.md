# Product Specification

This document defines version one of the independent learning platform for B.Sc. Volkswirtschaftslehre students at Georg-August-Universität Göttingen.

The platform is not an official university platform and must not imply official university affiliation, endorsement, lecturer alignment, or semester alignment.

## 1. Product problem

B.Sc. Volkswirtschaftslehre students often have access to many materials but still lack a clear answer to the practical question: what should I learn next?

Version one must solve the navigation, sequencing, and trust problem before expanding into advanced features. Students should be able to start, continue, practice, review, and prepare for exams without needing to infer a learning path from disconnected PDFs, notes, or module pages.

The platform must turn learning content into a structured path with visible next actions, explicit source metadata, and practice that supports exam transfer.

## 2. Target audience

The primary audience is B.Sc. Volkswirtschaftslehre students at Georg-August-Universität Göttingen.

The platform should serve students who:

- are new to a module and need a first starting point
- are returning to a topic after a gap
- need guided practice before solving tasks independently
- are preparing for a specific exam
- need to identify what to review
- are searching for a concept, model, formula, or definition
- want to distinguish current material from archived material

## 3. Primary jobs to be done

The platform must support these primary jobs:

- Help me know where to begin.
- Help me continue from where I stopped.
- Help me understand a concept intuitively and formally.
- Help me practice with support before practicing alone.
- Help me recognize how a topic appears in exam-style tasks.
- Help me review material before I forget it.
- Help me find a specific concept, definition, model, or formula.
- Help me trust whether material is sourced, checked, current, archived, official, adapted, or original.

## 4. Product promise

The product promise is:

“Students should always know what to learn next.”

Every major page, learning state, and practice flow must provide a clear next action. A student should never reach the end of a published learning unit without knowing whether to continue, practice, review, search, or switch goals.

## 5. User states

Version one must support these user states:

- New visitor: needs a fast explanation of the platform and a direct path into the first useful lesson.
- Returning learner: needs to resume the most relevant unfinished or next recommended learning item in one interaction.
- Learner with review items due: needs due review surfaced before browsing or starting new material.
- Learner preparing for a specific exam: needs topic-to-exam transfer, practice, and review organized around exam readiness.
- Learner searching for a specific concept: needs reliable search results that surface topics, definitions, formulas, models, and practice items.
- Learner who does not know where to begin: needs a guided start based on module, goal, or recommended first step.

Where local browser storage is unavailable or corrupted, the platform must degrade safely and still provide useful navigation and learning paths.

## 6. Core learning loop

The required learning loop is:

Understand → Guided practice → Independent practice → Exam transfer → Review

Each topic page should eventually map to this loop:

- Understand: learning objectives, intuitive explanation, formal explanation, definitions, formulas or models, and worked examples.
- Guided practice: scaffolded tasks with hints, checks, and explanation.
- Independent practice: tasks that require the learner to solve without immediate step-by-step support.
- Exam transfer: recognition of how the concept, model, or formula appears in exam-style contexts.
- Review: prompts, recall tasks, and spaced review recommendations.

Version one must make the current loop stage visible enough that learners understand whether they are learning, practicing, transferring, or reviewing.

## 7. Primary navigation

Global navigation must contain:

- Lernen
- Üben
- Probeklausuren
- Fortschritt
- Suche

Essential navigation must work without client-side JavaScript. Navigation items must use semantic links, clear labels, visible focus states, and accessible active-page indication.

The navigation should prioritize learning and practice over marketing. It must not fragment modules into unrelated mini-sites.

## 8. Homepage architecture

The homepage must prioritize:

1. Continue learning
2. Start a learning session
3. Review due material
4. Select a learning goal
5. Browse modules
6. Trust and methodology

The homepage should adapt to known and unknown users:

- If progress data is available, surface the strongest resume action first.
- If review items are due, surface review prominently.
- If no progress data is available, offer a direct start and a guided way to choose a module or goal.
- If browser storage fails, avoid broken states and provide stateless module and topic navigation.

The homepage must not use an oversized marketing hero. It should be a functional learning entry point.

## 9. Module-page architecture

Each module page must explain what the module contains, how its topics are structured, and what the learner should do next.

Module pages should include:

- module name
- module status
- current or archived material status
- source and review metadata summary
- recommended next topic or learning path
- topic list grouped by learning sequence or goal
- practice entry points
- exam-transfer entry points where available
- review entry points where available
- clear distinction between planned, drafting, checked, published, and archived content

Makroökonomik II is the pilot module for version one. The specification must not define actual Makroökonomik II topics yet, and must not invent lecturer, semester, or course information.

## 10. Topic-page architecture

Every published topic page must provide:

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
- source and review metadata
- a clear next step

Every formula must define all variables. Every academic claim must be traceable to a source. Official, adapted, and original content must be clearly distinguished.

Topic pages must use stable IDs independent of titles so links, progress, review items, and search references do not break when titles change.

## 11. Practice architecture

Practice must support both guided and independent work.

Guided practice should include:

- clear task prompts
- hints or staged support where appropriate
- worked-example connections
- feedback that explains reasoning
- source and provenance metadata

Independent practice should include:

- tasks without immediate scaffolding
- solutions or solution outlines only when source-checked or clearly marked as original
- difficulty or readiness signals where available
- exam-transfer connections where available

Exercise provenance must use these states:

- official
- adapted
- original

Original exercises must never be presented as official exam questions.

## 12. Progress model

Progress must not use page views as the sole mastery metric.

Version one may use local browser storage for lightweight progress, but the platform must remain useful without it. Storage must be handled defensively when unavailable, blocked, cleared, or corrupted.

Progress should distinguish:

- viewed or opened content
- completed guided practice
- completed independent practice
- completed exam-transfer practice
- review prompts completed
- learner confidence or self-check state where appropriate
- due review items
- next recommended action

The progress model should help learners decide what to do next, not merely display completion percentages.

## 13. Review model

Review must reinforce recall, recognition, and exam transfer.

Review items should be generated from:

- completed topics
- definitions
- formulas or models
- worked examples
- missed or difficult practice items
- exam-recognition prompts

Review must surface due material clearly for returning learners. Review should support a learner who has little time by offering a bounded review session with a clear stopping point and next action.

## 14. Search requirements

Search must help learners find:

- modules
- topics
- concepts
- definitions
- formulas
- models
- worked examples
- practice items
- exam-recognition material
- source information

Every published topic must be reachable through navigation or search.

Search results should show enough context for trust and orientation, including module, content type, content status, and source or review metadata where relevant.

Search must not require client-side JavaScript for the only path to essential public content. If enhanced search uses JavaScript, a static or navigation-based fallback must remain available.

## 15. Source and trust model

Every published academic page must expose source and review metadata.

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

The platform must clearly distinguish:

- official material
- adapted material
- original material
- current material
- archived material
- checked material
- unverified or superseded material

No invented citations, formulas, definitions, solutions, lecturer alignment, semester alignment, or course information may be added. Source conflicts must be documented.

## 16. Mobile requirements

Version one must work at 320 CSS pixels.

Mobile requirements include:

- readable topic pages without horizontal scrolling
- usable global navigation
- visible current location
- practical 44 by 44 pixel targets where possible
- no hover-only essential information
- tables, formulas, and models that remain readable or provide accessible alternatives
- clear next actions without relying on sidebars
- keyboard and screen-reader operability on small viewports

Mobile layouts must prioritize learning continuity, practice actions, and review due items over decorative presentation.

## 17. Accessibility requirements

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

Core flows must be operable with keyboard only. Essential navigation must work without JavaScript.

## 18. Non-goals

Version one must not include:

- accounts
- cloud synchronisation
- AI tutor
- leaderboards
- community features
- social features
- advanced gamification

Additional non-goals:

- official university platform behavior or branding
- copied old website architecture
- unrelated mini-sites for individual modules
- a PDF catalogue as the primary experience
- JavaScript-dependent basic navigation

## 19. Pilot-module scope

Makroökonomik II is the pilot module for version one.

Pilot scope includes:

- defining the module-page structure
- defining topic-page structure
- defining practice and review patterns
- defining source and trust metadata
- validating navigation, search, progress, and accessibility requirements against one module shell

Pilot scope does not include:

- defining actual Makroökonomik II topics in this document
- inventing lecturer information
- inventing semester information
- inventing course alignment
- presenting original exercises as official exam questions

## 20. Product success criteria

Version one is successful when:

- a new user can start a lesson within two interactions
- a returning learner can resume in one interaction
- every published topic is reachable through navigation or search
- essential navigation works without JavaScript
- every topic provides a clear next action
- every published academic page has source and review metadata
- layouts work at 320 CSS pixels
- core flows are operable with keyboard only
- Makroökonomik II can serve as the pilot module without invented lecturer, semester, or course information
- progress recommendations use meaningful learning evidence beyond page views alone
- unavailable or corrupted browser storage does not block public learning content
