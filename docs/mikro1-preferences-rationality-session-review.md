# Mikro I Rational Preference Relations Session Review

## Purpose

This record documents the implementation boundary for the focused session at
`/lernen/mikrooekonomik-1/rationale-praeferenzrelationen/`.

The session is original instructional material. It synthesizes the already
implemented completeness and transitivity sessions and does not reproduce
private course prose, MIT PDF prose, official exercises, or hidden evaluator
metadata.

## Source Boundary

| Source record                                                                   | Use in session                                                                                            | Boundary                                                                                                                      |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `docs/content-audits/mikro1-preferences-claims.md`                              | Supports `claim-pref-03`, `claim-pref-04`, `claim-pref-05`, relation reviews, and terminology boundaries. | Use rationality only as the technical conjunction of completeness and transitivity.                                           |
| `docs/content-audits/mikro1-preferences-outline.md`                             | Supports the rational preference relation section and rationality-classification exercise architecture.   | Do not expand into utility representation, optimization, demand, welfare, or behavioral claims.                               |
| `docs/content-audits/mikro1-preferences-practice-set-01-implementation-spec.md` | Supports the existing rationality practice mapping and implementation boundaries.                         | Do not change evaluator behavior, accepted answers, self-review behavior, completion semantics, or hidden-answer protections. |

## Implemented Scope

- Rational preference relation as completeness plus transitivity.
- Retrieval bridge from the completeness and transitivity sessions.
- Four property combinations in an accessible matrix.
- Systematic classification algorithm.
- Full-credit answer structure.
- Technical versus everyday rationality boundary.
- Worked synthesis examples and guided practice.
- Practice handoff to `pref-practice-09`, `pref-practice-10`, and
  `pref-practice-11`.

## Excluded Scope

- Utility representation and representation theorems.
- Continuity, monotonicity, convexity, consumer optimization, demand, welfare,
  and substitution topics.
- Psychological, moral, intelligence, selfishness, realism, or behavioral
  economics claims.
- Cumulative preference testing beyond the bounded rationality session.
- Any change to existing evaluators, accepted answers, or completion logic.

## Human Review Checklist

- [ ] Source fidelity: every academic claim stays within the verified
      preference-relation and rationality subset.
- [ ] Correctness of the conjunction definition: rationality is complete AND
      transitive, never either-or.
- [ ] Completeness recap accuracy: pairwise comparability is compactly and
      correctly recalled.
- [ ] Transitivity recap accuracy: chain closure is compactly and correctly
      recalled.
- [ ] Property-matrix correctness: all four rows are mathematically valid and
      clearly classified.
- [ ] Example classification: every worked example separates completeness,
      transitivity, and combined rationality.
- [ ] Counterexample validity: constructed examples fail exactly the intended
      condition.
- [ ] Formal terminology: weak preference, indifference, incomparability, and
      rationality are not conflated.
- [ ] Distinction from everyday rationality: no psychological, moral, optimal,
      welfare, or behavioral claim is implied.
- [ ] Practice mapping: `pref-practice-09`, `pref-practice-10`, and
      `pref-practice-11` are mapped with accurate limitations.
- [ ] Exam relevance: definition, matrix, classification, construction,
      proof-style, and multiple-choice trap families are represented.
- [ ] Cognitive load: prior sessions are activated through retrieval, not fully
      duplicated.
- [ ] Unsupported claims: no utility representation, optimization, demand, or
      substitution content is introduced.

## Current Status

`complete-session` implementation is ready for automated validation and human
academic review. Human review and publication approval are not complete.
