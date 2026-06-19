import { describe, expect, it } from "vitest";

import {
  mikro1PreferencesPracticeExercises,
  staticMikro1PreferencesPracticeExercises,
} from "../../src/data/mikro1-preferences-practice";
import {
  approvedMikro1PreferenceExerciseIds,
  validateMikro1PreferenceExercises,
  type Mikro1PreferenceExercise,
} from "../../src/lib/mikro1-preferences-practice";

function cloneExercises(): Mikro1PreferenceExercise[] {
  return structuredClone(mikro1PreferencesPracticeExercises);
}

describe("Mikro I preference practice production data", () => {
  it("contains exactly the independently approved twelve exercises", () => {
    expect(mikro1PreferencesPracticeExercises).toHaveLength(12);
    expect(
      mikro1PreferencesPracticeExercises.map((exercise) => exercise.id),
    ).toEqual(approvedMikro1PreferenceExerciseIds);
    expect(
      validateMikro1PreferenceExercises(mikro1PreferencesPracticeExercises),
    ).toEqual([]);
  });

  it("keeps hidden evaluation, feedback, solution, and audit metadata out of static presentations", () => {
    for (const exercise of staticMikro1PreferencesPracticeExercises) {
      expect(exercise).not.toHaveProperty("evaluationMetadata");
      expect(exercise).not.toHaveProperty("feedbackMetadata");
      expect(exercise).not.toHaveProperty("solutionMetadata");
      expect(exercise).not.toHaveProperty("audit");
      expect(exercise).not.toHaveProperty("claimIds");
    }
  });

  it("rejects missing versions, duplicate IDs, and unexpected exercise IDs", () => {
    const versionless = cloneExercises();
    versionless[0]!.version = 0;
    expect(validateMikro1PreferenceExercises(versionless)).toContain(
      "pref-practice-01: version must be a positive integer.",
    );

    const duplicated = cloneExercises();
    duplicated[1]!.id = duplicated[0]!.id;
    expect(validateMikro1PreferenceExercises(duplicated)).toContain(
      "Exercise IDs must be unique.",
    );

    const unexpected = cloneExercises();
    (unexpected[0] as { id: string }).id = "pref-practice-13";
    expect(validateMikro1PreferenceExercises(unexpected)).toContain(
      "Unsupported exercise ID: pref-practice-13.",
    );
  });

  it("rejects malformed learner-visible content and selection metadata", () => {
    const malformedHtml = cloneExercises();
    malformedHtml[0]!.learnerVisibleContent.prompt = [
      "<strong>Unsafe</strong>",
    ];
    expect(validateMikro1PreferenceExercises(malformedHtml)).toContain(
      "pref-practice-01: learner-visible HTML is not supported.",
    );

    const incorrectSelectionMetadata = cloneExercises();
    incorrectSelectionMetadata[1]!.evaluationMetadata.correctOptionIds = [
      "a",
      "b",
    ];
    expect(
      validateMikro1PreferenceExercises(incorrectSelectionMetadata),
    ).toContain(
      "pref-practice-02: selection exercises need exactly one correct hidden option ID.",
    );
  });

  it("rejects invalid or conflicting relation data", () => {
    const outsideDomain = cloneExercises();
    outsideDomain[4]!.relationData!.orderedPairs[0]!.from = "outside";
    expect(validateMikro1PreferenceExercises(outsideDomain)).toContain(
      "pref-practice-05: relation pair contains an alternative outside its domain.",
    );

    const conflictingPair = cloneExercises();
    conflictingPair[4]!.relationData!.orderedPairs.push({
      from: "x",
      to: "y",
      status: "does-not-hold",
      display: false,
    });
    expect(validateMikro1PreferenceExercises(conflictingPair)).toContain(
      "pref-practice-05: duplicate relation pair has conflicting statuses.",
    );

    const reversedPair = cloneExercises();
    reversedPair[4]!.relationData!.orderedPairs[1]!.from = "z";
    expect(validateMikro1PreferenceExercises(reversedPair)).toContain(
      "pref-practice-05: relation pairs differ from the approved ordered pairs.",
    );
  });

  it("keeps derivation steps stable and uniquely identified", () => {
    const invalidSteps = cloneExercises();
    invalidSteps[11]!.derivationSteps![1]!.id = "assumption";
    expect(validateMikro1PreferenceExercises(invalidSteps)).toContain(
      "pref-practice-12: derivation steps with unique IDs are required.",
    );
  });
});
