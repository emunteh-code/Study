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
      (id) =>
        id !== "pref-practice-04" &&
        id !== "pref-practice-05" &&
        id !== "pref-practice-07" &&
        id !== "pref-practice-08" &&
        id !== "pref-practice-10",
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
            "Complete every required response using an available option before checking your answer.",
        },
      });
    }
  });

  it("evaluates the relation table independent of response-entry order", () => {
    const response = {
      kind: "relation-table" as const,
      requiredFieldsComplete: true,
      entries: [
        { positionId: "complete", answerId: "yes" },
        { positionId: "pair-yz", answerId: "z-y" },
        { positionId: "pair-xy", answerId: "both" },
        { positionId: "pair-xz", answerId: "x-z" },
      ],
    };

    const result = mikro1PreferenceEvaluator.evaluate(
      exercise("pref-practice-05"),
      response,
    );

    expect(result).toMatchObject({
      status: "fully-correct",
      feedback: { heading: "Correct" },
      correctCount: 4,
      totalPositions: 4,
    });
    expect(result).toEqual(
      mikro1PreferenceEvaluator.evaluate(
        exercise("pref-practice-05"),
        response,
      ),
    );
  });

  it("distinguishes partial and fully incorrect relation-table responses", () => {
    expect(
      mikro1PreferenceEvaluator.evaluate(exercise("pref-practice-05"), {
        kind: "relation-table",
        requiredFieldsComplete: true,
        entries: [
          { positionId: "pair-xy", answerId: "both" },
          { positionId: "pair-xz", answerId: "z-x" },
          { positionId: "pair-yz", answerId: "y-z" },
          { positionId: "complete", answerId: "no" },
        ],
      }),
    ).toMatchObject({
      status: "partially-correct",
      feedback: {
        heading: "Partially correct",
        explanation: expect.stringContaining("1 of 4 responses are correct."),
      },
      correctCount: 1,
      totalPositions: 4,
    });

    expect(
      mikro1PreferenceEvaluator.evaluate(exercise("pref-practice-05"), {
        kind: "relation-table",
        requiredFieldsComplete: true,
        entries: [
          { positionId: "pair-xy", answerId: "x-y" },
          { positionId: "pair-xz", answerId: "z-x" },
          { positionId: "pair-yz", answerId: "y-z" },
          { positionId: "complete", answerId: "no" },
        ],
      }),
    ).toMatchObject({
      status: "fully-incorrect",
      feedback: { heading: "Not yet correct" },
      correctCount: 0,
      totalPositions: 4,
    });
  });

  it("rejects malformed relation-table entries without evaluating them", () => {
    const invalidResponses = [
      {
        kind: "relation-table" as const,
        requiredFieldsComplete: false,
        entries: [],
      },
      {
        kind: "relation-table" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "pair-xy", answerId: "both" },
          { positionId: "pair-xz", answerId: "x-z" },
          { positionId: "pair-yz", answerId: "z-y" },
        ],
      },
      {
        kind: "relation-table" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "pair-xy", answerId: "both" },
          { positionId: "pair-xy", answerId: "both" },
          { positionId: "pair-yz", answerId: "z-y" },
          { positionId: "complete", answerId: "yes" },
        ],
      },
      {
        kind: "relation-table" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "unknown", answerId: "both" },
          { positionId: "pair-xz", answerId: "x-z" },
          { positionId: "pair-yz", answerId: "z-y" },
          { positionId: "complete", answerId: "yes" },
        ],
      },
      {
        kind: "relation-table" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "pair-xy", answerId: "unknown" },
          { positionId: "pair-xz", answerId: "x-z" },
          { positionId: "pair-yz", answerId: "z-y" },
          { positionId: "complete", answerId: "yes" },
        ],
      },
      {
        kind: "relation-table" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "pair-xy", answerId: "both" },
          { positionId: "pair-xz", answerId: "x-z" },
          { positionId: "pair-yz", answerId: "z-y" },
          { positionId: "complete", answerId: "yes" },
          { positionId: "extra", answerId: "yes" },
        ],
      },
    ];

    for (const response of invalidResponses) {
      expect(
        mikro1PreferenceEvaluator.evaluate(
          exercise("pref-practice-05"),
          response,
        ),
      ).toEqual({
        status: "incomplete",
        feedback: {
          heading: "Incomplete or invalid response",
          explanation:
            "Complete every required response using an available option before checking your answer.",
        },
      });
    }
  });

  it("does not expose relation-table answer positions through feedback", () => {
    const result = mikro1PreferenceEvaluator.evaluate(
      exercise("pref-practice-05"),
      {
        kind: "relation-table",
        requiredFieldsComplete: true,
        entries: [
          { positionId: "pair-xy", answerId: "both" },
          { positionId: "pair-xz", answerId: "z-x" },
          { positionId: "pair-yz", answerId: "y-z" },
          { positionId: "complete", answerId: "no" },
        ],
      },
    );

    expect(result).not.toHaveProperty("entries");
    expect(result).not.toHaveProperty("mappings");
    expect(JSON.stringify(result)).not.toContain("pair-xy");
  });

  it("evaluates the reviewed transitivity chain independently of entry order", () => {
    const response = {
      kind: "transitivity-chain" as const,
      requiredFieldsComplete: true,
      entries: [
        { positionId: "conclusion", answerId: "x ≽ z" },
        { positionId: "transitive", answerId: "yes" },
        { positionId: "second-premise", answerId: "y ≽ z" },
        { positionId: "first-premise", answerId: "x ≽ y" },
      ],
    };

    expect(
      mikro1PreferenceEvaluator.evaluate(
        exercise("pref-practice-07"),
        response,
      ),
    ).toMatchObject({
      status: "fully-correct",
      feedback: { heading: "Correct" },
    });
    expect(
      mikro1PreferenceEvaluator.evaluate(
        exercise("pref-practice-07"),
        response,
      ),
    ).toEqual(
      mikro1PreferenceEvaluator.evaluate(
        exercise("pref-practice-07"),
        response,
      ),
    );
  });

  it("treats a directionally incorrect but valid chain as one incorrect logical claim", () => {
    const result = mikro1PreferenceEvaluator.evaluate(
      exercise("pref-practice-07"),
      {
        kind: "transitivity-chain",
        requiredFieldsComplete: true,
        entries: [
          { positionId: "transitive", answerId: "yes" },
          { positionId: "first-premise", answerId: "y ≽ x" },
          { positionId: "second-premise", answerId: "y ≽ z" },
          { positionId: "conclusion", answerId: "x ≽ z" },
        ],
      },
    );

    expect(result).toMatchObject({
      status: "fully-incorrect",
      feedback: { heading: "Not yet correct" },
    });
    expect(result).not.toHaveProperty("correctCount");
  });

  it("rejects incomplete or malformed transitivity-chain responses", () => {
    const invalidResponses = [
      {
        kind: "transitivity-chain" as const,
        requiredFieldsComplete: false,
        entries: [],
      },
      {
        kind: "transitivity-chain" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "transitive", answerId: "yes" },
          { positionId: "first-premise", answerId: "x ≽ y" },
          { positionId: "second-premise", answerId: "y ≽ z" },
        ],
      },
      {
        kind: "transitivity-chain" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "transitive", answerId: "yes" },
          { positionId: "first-premise", answerId: "x ≽ y" },
          { positionId: "first-premise", answerId: "x ≽ y" },
          { positionId: "conclusion", answerId: "x ≽ z" },
        ],
      },
      {
        kind: "transitivity-chain" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "transitive", answerId: "yes" },
          { positionId: "unknown", answerId: "x ≽ y" },
          { positionId: "second-premise", answerId: "y ≽ z" },
          { positionId: "conclusion", answerId: "x ≽ z" },
        ],
      },
      {
        kind: "transitivity-chain" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "transitive", answerId: "yes" },
          { positionId: "first-premise", answerId: "q ≽ y" },
          { positionId: "second-premise", answerId: "y ≽ z" },
          { positionId: "conclusion", answerId: "x ≽ z" },
        ],
      },
      {
        kind: "transitivity-chain" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "transitive", answerId: "yes" },
          { positionId: "first-premise", answerId: "x ≽ y" },
          { positionId: "second-premise", answerId: "y ≽ z" },
          { positionId: "conclusion", answerId: "x ≽ z" },
          { positionId: "extra", answerId: "x ≽ z" },
        ],
      },
    ];

    for (const response of invalidResponses) {
      expect(
        mikro1PreferenceEvaluator.evaluate(
          exercise("pref-practice-07"),
          response,
        ),
      ).toMatchObject({
        status: "incomplete",
        feedback: { heading: "Incomplete or invalid response" },
      });
    }
  });

  it("evaluates the directed transitivity violation independent of response order", () => {
    const response = {
      kind: "transitivity-violation" as const,
      requiredFieldsComplete: true,
      entries: [
        { positionId: "last", answerId: "z" },
        { positionId: "transitive", answerId: "no" },
        { positionId: "first", answerId: "x" },
        { positionId: "middle", answerId: "y" },
      ],
    };

    expect(
      mikro1PreferenceEvaluator.evaluate(
        exercise("pref-practice-08"),
        response,
      ),
    ).toMatchObject({
      status: "fully-correct",
      feedback: { heading: "Correct" },
    });
    expect(
      mikro1PreferenceEvaluator.evaluate(
        exercise("pref-practice-08"),
        response,
      ),
    ).toEqual(
      mikro1PreferenceEvaluator.evaluate(
        exercise("pref-practice-08"),
        response,
      ),
    );
  });

  it("treats a valid but wrong transitivity witness as one incorrect logical claim without answer leakage", () => {
    const result = mikro1PreferenceEvaluator.evaluate(
      exercise("pref-practice-08"),
      {
        kind: "transitivity-violation",
        requiredFieldsComplete: true,
        entries: [
          { positionId: "transitive", answerId: "no" },
          { positionId: "first", answerId: "y" },
          { positionId: "middle", answerId: "x" },
          { positionId: "last", answerId: "z" },
        ],
      },
    );

    expect(result).toMatchObject({
      status: "fully-incorrect",
      feedback: { heading: "Not yet correct" },
    });
    expect(result).not.toHaveProperty("correctCount");
    expect(result.feedback.explanation).not.toContain("x, y, z");
  });

  it("rejects incomplete, duplicated, unknown, extra, and invalid transitivity-violation entries", () => {
    const invalidResponses = [
      {
        kind: "transitivity-violation" as const,
        requiredFieldsComplete: false,
        entries: [],
      },
      {
        kind: "transitivity-violation" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "transitive", answerId: "no" },
          { positionId: "first", answerId: "x" },
          { positionId: "middle", answerId: "y" },
        ],
      },
      {
        kind: "transitivity-violation" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "transitive", answerId: "no" },
          { positionId: "first", answerId: "x" },
          { positionId: "first", answerId: "x" },
          { positionId: "last", answerId: "z" },
        ],
      },
      {
        kind: "transitivity-violation" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "transitive", answerId: "unknown" },
          { positionId: "first", answerId: "x" },
          { positionId: "middle", answerId: "y" },
          { positionId: "last", answerId: "z" },
        ],
      },
      {
        kind: "transitivity-violation" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "transitive", answerId: "no" },
          { positionId: "unknown", answerId: "x" },
          { positionId: "middle", answerId: "y" },
          { positionId: "last", answerId: "z" },
        ],
      },
      {
        kind: "transitivity-violation" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "transitive", answerId: "no" },
          { positionId: "first", answerId: "x" },
          { positionId: "middle", answerId: "y" },
          { positionId: "last", answerId: "z" },
          { positionId: "extra", answerId: "z" },
        ],
      },
    ];

    for (const response of invalidResponses) {
      expect(
        mikro1PreferenceEvaluator.evaluate(
          exercise("pref-practice-08"),
          response,
        ),
      ).toMatchObject({
        status: "incomplete",
        feedback: { heading: "Incomplete or invalid response" },
      });
    }
  });

  it("evaluates the approved rationality classification independent of response order", () => {
    const response = {
      kind: "rationality-classification" as const,
      requiredFieldsComplete: true,
      entries: [
        { positionId: "classification", answerId: "a" },
        { positionId: "transitive", answerId: "yes" },
        { positionId: "complete", answerId: "yes" },
      ],
    };

    expect(
      mikro1PreferenceEvaluator.evaluate(
        exercise("pref-practice-10"),
        response,
      ),
    ).toMatchObject({
      status: "fully-correct",
      feedback: { heading: "Correct" },
    });
    expect(
      mikro1PreferenceEvaluator.evaluate(
        exercise("pref-practice-10"),
        response,
      ),
    ).toEqual(
      mikro1PreferenceEvaluator.evaluate(
        exercise("pref-practice-10"),
        response,
      ),
    );
  });

  it("treats a valid but wrong rationality classification as one incorrect claim without answer leakage", () => {
    const result = mikro1PreferenceEvaluator.evaluate(
      exercise("pref-practice-10"),
      {
        kind: "rationality-classification",
        requiredFieldsComplete: true,
        entries: [
          { positionId: "complete", answerId: "yes" },
          { positionId: "transitive", answerId: "no" },
          { positionId: "classification", answerId: "b" },
        ],
      },
    );

    expect(result).toMatchObject({
      status: "fully-incorrect",
      feedback: { heading: "Not yet correct" },
    });
    expect(result).not.toHaveProperty("correctCount");
    expect(result.feedback.explanation).not.toContain("classification: a");
  });

  it("rejects incomplete, duplicate, unknown, extra, and invalid rationality-classification entries", () => {
    const invalidResponses = [
      {
        kind: "rationality-classification" as const,
        requiredFieldsComplete: false,
        entries: [],
      },
      {
        kind: "rationality-classification" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "complete", answerId: "yes" },
          { positionId: "transitive", answerId: "yes" },
        ],
      },
      {
        kind: "rationality-classification" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "complete", answerId: "yes" },
          { positionId: "complete", answerId: "yes" },
          { positionId: "classification", answerId: "a" },
        ],
      },
      {
        kind: "rationality-classification" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "complete", answerId: "unknown" },
          { positionId: "transitive", answerId: "yes" },
          { positionId: "classification", answerId: "a" },
        ],
      },
      {
        kind: "rationality-classification" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "complete", answerId: "yes" },
          { positionId: "unknown", answerId: "yes" },
          { positionId: "classification", answerId: "a" },
        ],
      },
      {
        kind: "rationality-classification" as const,
        requiredFieldsComplete: true,
        entries: [
          { positionId: "complete", answerId: "yes" },
          { positionId: "transitive", answerId: "yes" },
          { positionId: "classification", answerId: "a" },
          { positionId: "extra", answerId: "yes" },
        ],
      },
    ];

    for (const response of invalidResponses) {
      expect(
        mikro1PreferenceEvaluator.evaluate(
          exercise("pref-practice-10"),
          response,
        ),
      ).toMatchObject({
        status: "incomplete",
        feedback: { heading: "Incomplete or invalid response" },
      });
    }
  });
});
