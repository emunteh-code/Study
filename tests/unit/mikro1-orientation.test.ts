import { describe, expect, it } from "vitest";

import {
  mikro1PreferenceOrientation,
  mikro1SubstitutionOrientation,
  mikro1TopicOrientations,
} from "../../src/data/mikro1-orientation";
import { approvedMikro1PreferenceExerciseIds } from "../../src/lib/mikro1-preferences-practice";
import { authorizedMikro1SubstitutionExerciseIds } from "../../src/lib/mikro1-substitution-practice";
import {
  validateMikro1TopicOrientation,
  type Mikro1TopicOrientation,
} from "../../src/lib/mikro1-orientation";

function cloneOrientation(
  orientation: Mikro1TopicOrientation,
): Mikro1TopicOrientation {
  return structuredClone(orientation);
}

describe("Mikro I topic orientation records", () => {
  it("validates the implemented topic orientations against approved exercises", () => {
    expect(
      validateMikro1TopicOrientation(
        mikro1PreferenceOrientation,
        approvedMikro1PreferenceExerciseIds,
      ),
    ).toEqual([]);
    expect(
      validateMikro1TopicOrientation(
        mikro1SubstitutionOrientation,
        authorizedMikro1SubstitutionExerciseIds,
      ),
    ).toEqual([]);
  });

  it("maps every learning objective to at least one existing exercise", () => {
    for (const orientation of mikro1TopicOrientations) {
      const mappedObjectives = new Set(
        orientation.exerciseMappings.map((mapping) => mapping.objectiveId),
      );
      expect(
        orientation.learningObjectives.every((objective) =>
          mappedObjectives.has(objective.id),
        ),
      ).toBe(true);
    }
  });

  it("rejects unknown objective and exercise references", () => {
    const invalidObjective = cloneOrientation(mikro1PreferenceOrientation);
    invalidObjective.exerciseMappings[0]!.objectiveId = "pref-lo-missing";
    expect(
      validateMikro1TopicOrientation(
        invalidObjective,
        approvedMikro1PreferenceExerciseIds,
      ),
    ).toContain(
      "preferences: mapping references unknown objective pref-lo-missing.",
    );

    const invalidExercise = cloneOrientation(mikro1SubstitutionOrientation);
    invalidExercise.exerciseMappings[0]!.exerciseId = "sub-practice-04";
    expect(
      validateMikro1TopicOrientation(
        invalidExercise,
        authorizedMikro1SubstitutionExerciseIds,
      ),
    ).toContain(
      "substitution: mapping references unknown exercise sub-practice-04.",
    );
  });

  it("rejects invalid source references and vague objectives", () => {
    const unknownSource = cloneOrientation(mikro1PreferenceOrientation);
    unknownSource.learningObjectives[0]!.sourceReferenceIds = ["missing"];
    expect(
      validateMikro1TopicOrientation(
        unknownSource,
        approvedMikro1PreferenceExerciseIds,
      ),
    ).toContain(
      "preferences: learning objective pref-lo-01 references unknown source missing.",
    );

    const vagueObjective = cloneOrientation(mikro1SubstitutionOrientation);
    vagueObjective.learningObjectives[0]!.text = "understand substitution";
    expect(
      validateMikro1TopicOrientation(
        vagueObjective,
        authorizedMikro1SubstitutionExerciseIds,
      ),
    ).toContain(
      "substitution: learning objective sub-lo-01 needs an observable action verb.",
    );
  });

  it("keeps orientation records free of evaluator answers and solution metadata", () => {
    const serialized = JSON.stringify(mikro1TopicOrientations);
    for (const hiddenKey of [
      "correctOption",
      "acceptedAnswer",
      "canonicalValue",
      "tolerance",
      "solutionMetadata",
      "evaluationMetadata",
      "modelSolution",
    ])
      expect(serialized).not.toContain(hiddenKey);
  });
});
