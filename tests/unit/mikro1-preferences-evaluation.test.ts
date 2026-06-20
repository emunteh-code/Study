import { describe, expect, it } from "vitest";

import { mikro1PreferencesPracticeExercises } from "../../src/data/mikro1-preferences-practice";
import { mikro1PreferenceEvaluator } from "../../src/lib/mikro1-preferences-evaluation";
import {
  evaluableMikro1PreferenceExerciseIds,
  type Mikro1PreferenceExercise,
} from "../../src/lib/mikro1-preferences-practice";

function exercise(id: string): Mikro1PreferenceExercise {
  const record = mikro1PreferencesPracticeExercises.find(
    (candidate) => candidate.id === id,
  );

  if (!record) {
    throw new Error(`Missing test exercise: ${id}`);
  }

  return record;
}

describe("Mikro I preference evaluator", () => {
  it("evaluates the four approved selections from stable option IDs", () => {
    const expectedSelections = {
      "pref-practice-02": "b",
      "pref-practice-03": "false",
      "pref-practice-06": "c",
      "pref-practice-09": "false",
    } as const;

    for (const [id, selectedOptionId] of Object.entries(expectedSelections)) {
      expect(
        mikro1PreferenceEvaluator.evaluate(exercise(id), {
          selectedOptionId,
          requiredFieldsComplete: true,
        }),
      ).toMatchObject({
        status: "correct",
        feedback: { heading: "Correct" },
      });
    }
  });

  it("returns conceptual feedback for an incorrect selection on each scoped exercise", () => {
    const incorrectSelections = {
      "pref-practice-02": "a",
      "pref-practice-03": "true",
      "pref-practice-06": "a",
      "pref-practice-09": "true",
    } as const;

    for (const [id, selectedOptionId] of Object.entries(incorrectSelections)) {
      const result = mikro1PreferenceEvaluator.evaluate(exercise(id), {
        selectedOptionId,
        requiredFieldsComplete: true,
      });

      expect(result.status).toBe("incorrect");
      expect(result.feedback.heading).toBe("Not yet correct");
      expect(result.feedback.explanation).not.toContain("Solution");
    }
  });

  it("fails incomplete submissions before assessing an answer", () => {
    for (const id of evaluableMikro1PreferenceExerciseIds) {
      expect(
        mikro1PreferenceEvaluator.evaluate(exercise(id), {
          selectedOptionId: "not-an-approved-option",
          requiredFieldsComplete: false,
        }),
      ).toEqual({
        status: "incomplete",
        feedback: {
          heading: "Incomplete response",
          explanation:
            "Complete each required response before checking your answer.",
        },
      });
    }
  });

  it("returns the same result for repeated evaluation of the same response", () => {
    const response = {
      selectedOptionId: "c",
      requiredFieldsComplete: true,
    };

    expect(
      mikro1PreferenceEvaluator.evaluate(
        exercise("pref-practice-06"),
        response,
      ),
    ).toEqual(
      mikro1PreferenceEvaluator.evaluate(
        exercise("pref-practice-06"),
        response,
      ),
    );
  });

  it("does not provide an evaluator for unscoped exercises", () => {
    expect(() =>
      mikro1PreferenceEvaluator.evaluate(exercise("pref-practice-01"), {
        selectedOptionId: "a",
        requiredFieldsComplete: true,
      }),
    ).toThrow("No evaluator is available for pref-practice-01.");
  });
});
