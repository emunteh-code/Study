import { describe, expect, it } from "vitest";

import {
  deriveQuestionCount,
  getAdjacentQuestionActions,
  getPracticeSetDurationMinutes,
  getRecommendedPracticeAction,
  guidedPracticeSet,
  isSupportedQuestionType,
  practiceOverviewFixture,
  provenanceLabels,
  topicPracticeSet,
  validateCompleteSolution,
  validateHintOrdering,
  validatePracticeQuestion,
  validatePracticeSet,
  validateStructuredCalculationSymbols,
  type PracticeSetViewModel,
} from "../../src/fixtures/practice";

describe("practice fixture sets", () => {
  it("orders questions explicitly by stable ID", () => {
    expect(guidedPracticeSet.questionOrder).toEqual([
      "question-alpha-01",
      "question-alpha-02",
    ]);
    expect(topicPracticeSet.questionOrder).toEqual([
      "question-alpha-03",
      "question-alpha-04",
    ]);
  });

  it("derives count and duration from ordered fixture questions", () => {
    expect(deriveQuestionCount(guidedPracticeSet)).toBe(2);
    expect(getPracticeSetDurationMinutes(guidedPracticeSet)).toBe(10);
    expect(deriveQuestionCount(topicPracticeSet)).toBe(2);
    expect(getPracticeSetDurationMinutes(topicPracticeSet)).toBe(9);
  });

  it("selects previous and next question links without absent targets", () => {
    expect(
      getAdjacentQuestionActions(guidedPracticeSet, "question-alpha-01"),
    ).toEqual({
      previous: undefined,
      next: {
        label: "Nächste Frage",
        href: "/ueben/pilot-modul/gefuehrte-uebung-alpha/#question-alpha-02",
      },
    });
    expect(
      getAdjacentQuestionActions(guidedPracticeSet, "question-alpha-02").next,
    ).toBeUndefined();
  });

  it("does not promote planned or archived sets as next actions", () => {
    const plannedSet: PracticeSetViewModel = {
      ...guidedPracticeSet,
      contentState: "planned",
      nextRecommendedAction: {
        label: "Geplante Übung öffnen",
        href: "/ueben/pilot-modul/planned/",
      },
    };

    expect(getRecommendedPracticeAction(plannedSet)).toEqual({
      label: "Weitere Übungsarten ansehen",
      href: "/ueben/pilot-modul/",
    });
  });

  it("maps provenance labels explicitly", () => {
    expect(provenanceLabels.official).toBe("Offiziell");
    expect(provenanceLabels.adapted).toBe("Angepasst");
    expect(provenanceLabels.original).toBe("Original");
  });

  it("validates supported question types", () => {
    expect(isSupportedQuestionType("single-choice")).toBe(true);
    expect(isSupportedQuestionType("graph-interpretation")).toBe(true);
    expect(isSupportedQuestionType("drag-drop")).toBe(false);
  });

  it("requires complete solutions and ordered hints", () => {
    for (const question of guidedPracticeSet.questions) {
      expect(validateCompleteSolution(question)).toBe(true);
      expect(validateHintOrdering(question)).toBe(true);
      expect(validatePracticeQuestion(question)).toBe(true);
    }
  });

  it("validates symbol definitions for structured calculations", () => {
    const structured = guidedPracticeSet.questions.find(
      (question) => question.questionType === "structured-calculation",
    );

    expect(structured).toBeDefined();
    expect(validateStructuredCalculationSymbols(structured!)).toBe(true);
  });

  it("validates fixture practice sets and overview availability", () => {
    expect(validatePracticeSet(guidedPracticeSet)).toBe(true);
    expect(validatePracticeSet(topicPracticeSet)).toBe(true);
    expect(
      practiceOverviewFixture.options.map((option) => option.status),
    ).toEqual(["available", "available", "planned", "planned"]);
  });
});
