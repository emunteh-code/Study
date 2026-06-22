import { describe, expect, it } from "vitest";
import { mikro1SubstitutionPracticeExercises } from "../../src/data/mikro1-substitution-practice";
import { assertValidMikro1SubstitutionExercises } from "../../src/lib/mikro1-substitution-practice";

describe("Mikro I substitution static practice data", () => {
  it("contains the authorized IDs in approved display order", () => {
    expect(mikro1SubstitutionPracticeExercises.map((item) => item.id)).toEqual([
      "sub-practice-01",
      "sub-practice-02",
      "sub-practice-03",
      "sub-practice-08",
      "sub-practice-09",
      "sub-practice-10",
      "sub-practice-11",
      "sub-practice-12",
    ]);
    expect(
      mikro1SubstitutionPracticeExercises.map((item) => item.displayNumber),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("rejects invalid IDs, duplicate displays, and malformed static structures", () => {
    const clone = structuredClone(
      mikro1SubstitutionPracticeExercises,
    ) as typeof mikro1SubstitutionPracticeExercises;
    (clone[0] as { id: string }).id = "sub-practice-04";
    expect(() => assertValidMikro1SubstitutionExercises(clone)).toThrow();
    const duplicate = structuredClone(
      mikro1SubstitutionPracticeExercises,
    ) as typeof mikro1SubstitutionPracticeExercises;
    (duplicate[1] as { displayNumber: number }).displayNumber = 1;
    expect(() => assertValidMikro1SubstitutionExercises(duplicate)).toThrow();
  });

  it("keeps hidden evaluator and comparison metadata out of static data", () => {
    const serialized = JSON.stringify(mikro1SubstitutionPracticeExercises);
    for (const key of [
      "correctOption",
      "acceptedAnswer",
      "canonicalValue",
      "tolerance",
      "evaluator",
      "modelSolution",
      "guidance",
      "claimIds",
      "formulaIds",
    ])
      expect(serialized).not.toContain(key);
  });
});
