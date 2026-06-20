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
          kind: "selection",
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
        kind: "selection",
        selectedOptionId,
        requiredFieldsComplete: true,
      });

      expect(result.status).toBe("incorrect");
      expect(result.feedback.heading).toBe("Not yet correct");
      expect(result.feedback.explanation).not.toContain("Solution");
    }
  });

  it("fails incomplete submissions before assessing an answer", () => {
    for (const id of evaluableMikro1PreferenceExerciseIds.filter(
      (id) => id !== "pref-practice-04",
    )) {
      expect(
        mikro1PreferenceEvaluator.evaluate(exercise(id), {
          kind: "selection",
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
      kind: "selection" as const,
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
        kind: "selection",
        selectedOptionId: "a",
        requiredFieldsComplete: true,
      }),
    ).toThrow("No evaluator is available for pref-practice-01.");
  });

  it("evaluates every required classification as fully correct independent of order", () => {
    const response = {
      kind: "classification" as const,
      requiredFieldsComplete: true,
      classifications: [
        { itemId: "weak", classificationId: "weak" },
        { itemId: "strict", classificationId: "strict" },
        { itemId: "indifference", classificationId: "indifference" },
      ],
    };

    expect(
      mikro1PreferenceEvaluator.evaluate(
        exercise("pref-practice-04"),
        response,
      ),
    ).toMatchObject({
      status: "fully-correct",
      feedback: { heading: "Correct" },
    });
    expect(
      mikro1PreferenceEvaluator.evaluate(
        exercise("pref-practice-04"),
        response,
      ),
    ).toEqual(
      mikro1PreferenceEvaluator.evaluate(
        exercise("pref-practice-04"),
        response,
      ),
    );
  });

  it("distinguishes partially and fully incorrect classification mappings", () => {
    expect(
      mikro1PreferenceEvaluator.evaluate(exercise("pref-practice-04"), {
        kind: "classification",
        requiredFieldsComplete: true,
        classifications: [
          { itemId: "strict", classificationId: "strict" },
          { itemId: "indifference", classificationId: "weak" },
          { itemId: "weak", classificationId: "strict" },
        ],
      }),
    ).toMatchObject({
      status: "partially-correct",
      feedback: {
        heading: "Partially correct",
        explanation: expect.stringContaining(
          "1 of 3 classifications are correct.",
        ),
      },
    });

    expect(
      mikro1PreferenceEvaluator.evaluate(exercise("pref-practice-04"), {
        kind: "classification",
        requiredFieldsComplete: true,
        classifications: [
          { itemId: "strict", classificationId: "weak" },
          { itemId: "indifference", classificationId: "strict" },
          { itemId: "weak", classificationId: "indifference" },
        ],
      }),
    ).toMatchObject({
      status: "fully-incorrect",
      feedback: { heading: "Not yet correct" },
    });
  });

  it("returns one structural result for incomplete or invalid classifications", () => {
    const invalidResponses = [
      {
        kind: "classification" as const,
        requiredFieldsComplete: false,
        classifications: [],
      },
      {
        kind: "classification" as const,
        requiredFieldsComplete: true,
        classifications: [
          { itemId: "strict", classificationId: "strict" },
          { itemId: "indifference", classificationId: "indifference" },
        ],
      },
      {
        kind: "classification" as const,
        requiredFieldsComplete: true,
        classifications: [
          { itemId: "strict", classificationId: "strict" },
          { itemId: "strict", classificationId: "strict" },
          { itemId: "weak", classificationId: "weak" },
        ],
      },
      {
        kind: "classification" as const,
        requiredFieldsComplete: true,
        classifications: [
          { itemId: "unknown", classificationId: "strict" },
          { itemId: "indifference", classificationId: "indifference" },
          { itemId: "weak", classificationId: "weak" },
        ],
      },
      {
        kind: "classification" as const,
        requiredFieldsComplete: true,
        classifications: [
          { itemId: "strict", classificationId: "unknown" },
          { itemId: "indifference", classificationId: "indifference" },
          { itemId: "weak", classificationId: "weak" },
        ],
      },
    ];

    for (const response of invalidResponses) {
      expect(
        mikro1PreferenceEvaluator.evaluate(
          exercise("pref-practice-04"),
          response,
        ),
      ).toEqual({
        status: "incomplete",
        feedback: {
          heading: "Incomplete or invalid response",
          explanation:
            "Complete every required classification using an available category before checking your answer.",
        },
      });
    }
  });
});
