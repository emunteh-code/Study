# Practice Visual And Interaction Specification

## Reference Route

The Mikroökonomik I preference-relations practice route is the reference implementation for the platform practice shell. It is a calm, academic working surface rather than a dashboard or a sequence of decorative cards.

## Audit Findings

- The previous equal-weight exercise cards made a long set difficult to scan and offered no route-level exercise map.
- Completion information was technically available but lacked a distinct, compact surface.
- Response, feedback, and comparison material needed stronger local separation while preserving the learner response in view.
- Narrow screens needed predictable stacking and scrollable relation tables rather than compressed mathematical notation.

## Measurable Design Language

- System sans-serif text; monospace only for compact notation and sequence markers.
- Body text remains within the existing 68ch content measure; the practice page remains within 74ch.
- Use the established 2/4/8/12/16/24/32/48/64 spacing scale, 4px and 8px radii, and one restrained elevation level.
- Use semantic token colours only. Completion, feedback, and comparison always have text and structure in addition to colour.
- Controls retain practical 44px minimum height, native semantics, and the global 3px focus outline.
- No gradients, glass effects, decorative imagery, or gamification.

## Page Hierarchy

1. Course and topic context in the route header.
2. Title and bounded learning purpose.
3. Browser-only local completion summary, distinct from correctness.
4. A linked exercise map using stable exercise IDs.
5. Notation and working instructions.
6. Sequential exercise shells.

The reset action stays inside the compact completion summary. It is intentionally secondary and requires confirmation.

## Exercise Shell Contract

Every exercise presents: position, type/difficulty, prompt, supporting relation data, response, primary action, feedback, comparison material, and local completion state where enabled. The prompt precedes controls. Feedback remains adjacent to the action. Comparison uses its own bordered working surface and leaves learner responses visible.

## Interaction States

Neutral, hover, focus-visible, active, disabled, incomplete, invalid, incorrect, partially correct, correct, comparison available, comparison open, and locally completed are distinguished through native control state, text, borders, surfaces, and live feedback. Local completion means a qualifying attempt or comparison only; it never means correct, mastered, or graded.

## Responsive And Accessibility Requirements

At 1440px, 1024px, 768px, and 390px: no horizontal page overflow, controlled reading measure, full-width actions when constrained, scrollable relation tables, and logical comparison stacking. Keyboard focus remains visible; headings, labels, group labels, live regions, reduced-motion behavior, and no-JavaScript readability remain unchanged. The no-JavaScript view deliberately hides stored-progress controls.

## Reusable Versus Specific

The spacing, semantic-token usage, response hierarchy, feedback placement, and comparison surface form reusable practice-system guidance. The exercise map, academic labels, relation tables, and preference-specific content remain route-specific.
