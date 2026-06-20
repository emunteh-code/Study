import type {
  EvaluableMikro1PreferenceExerciseId,
  Mikro1PreferenceExercise,
} from "./mikro1-preferences-practice";

export type Mikro1PreferenceEvaluationStatus =
  | "correct"
  | "incorrect"
  | "fully-correct"
  | "partially-correct"
  | "fully-incorrect"
  | "incomplete";

export interface Mikro1PreferenceSelectionResponse {
  kind: "selection";
  selectedOptionId?: string;
  requiredFieldsComplete: boolean;
}

export interface Mikro1PreferenceClassificationAnswer {
  itemId: string;
  classificationId: string;
}

export interface Mikro1PreferenceClassificationResponse {
  kind: "classification";
  classifications: Mikro1PreferenceClassificationAnswer[];
  requiredFieldsComplete: boolean;
}

export type Mikro1PreferenceEvaluationResponse =
  | Mikro1PreferenceSelectionResponse
  | Mikro1PreferenceClassificationResponse;

export interface Mikro1PreferenceEvaluationFeedback {
  heading: string;
  explanation: string;
}

export interface Mikro1PreferenceEvaluationResult {
  status: Mikro1PreferenceEvaluationStatus;
  feedback: Mikro1PreferenceEvaluationFeedback;
}

export interface Mikro1PreferenceEvaluator {
  evaluate(
    exercise: Mikro1PreferenceExercise,
    response: Mikro1PreferenceEvaluationResponse,
  ): Mikro1PreferenceEvaluationResult;
}

const incompleteFeedback: Mikro1PreferenceEvaluationFeedback = {
  heading: "Incomplete response",
  explanation: "Complete each required response before checking your answer.",
};

const invalidClassificationFeedback: Mikro1PreferenceEvaluationFeedback = {
  heading: "Incomplete or invalid response",
  explanation:
    "Complete every required classification using an available category before checking your answer.",
};

function isExpectedExercise(
  exercise: Mikro1PreferenceExercise,
): exercise is Mikro1PreferenceExercise & {
  id: EvaluableMikro1PreferenceExerciseId;
} {
  return [
    "pref-practice-02",
    "pref-practice-03",
    "pref-practice-04",
    "pref-practice-06",
    "pref-practice-09",
  ].includes(exercise.id);
}

function evaluateSelection(
  exercise: Mikro1PreferenceExercise,
  response: Mikro1PreferenceSelectionResponse,
): Mikro1PreferenceEvaluationResult {
  if (!response.requiredFieldsComplete || !response.selectedOptionId) {
    return { status: "incomplete", feedback: incompleteFeedback };
  }

  const correctOptionId = exercise.evaluationMetadata.correctOptionIds?.[0];
  const feedback = exercise.feedbackMetadata;

  if (
    !correctOptionId ||
    !feedback.correctExplanation ||
    !feedback.incorrectExplanation
  ) {
    throw new Error(`Evaluation metadata is unavailable for ${exercise.id}.`);
  }

  if (response.selectedOptionId === correctOptionId) {
    return {
      status: "correct",
      feedback: {
        heading: "Correct",
        explanation: feedback.correctExplanation,
      },
    };
  }

  return {
    status: "incorrect",
    feedback: {
      heading: "Not yet correct",
      explanation: feedback.incorrectExplanation,
    },
  };
}

function evaluateClassification(
  exercise: Mikro1PreferenceExercise,
  response: Mikro1PreferenceClassificationResponse,
): Mikro1PreferenceEvaluationResult {
  const mappings = exercise.evaluationMetadata.classificationMappings;
  const feedback = exercise.feedbackMetadata;

  if (
    !mappings ||
    mappings.length === 0 ||
    !feedback.correctExplanation ||
    !feedback.partialExplanation ||
    !feedback.incorrectExplanation
  ) {
    throw new Error(`Evaluation metadata is unavailable for ${exercise.id}.`);
  }

  const expectedItems = new Map(
    mappings.map((mapping) => [mapping.itemId, mapping.classificationId]),
  );
  const submittedItems = new Set<string>();
  const fields = new Map(
    exercise.responseDefinition.fields.map((field) => [field.id, field]),
  );

  if (
    !response.requiredFieldsComplete ||
    response.classifications.length !== expectedItems.size ||
    response.classifications.some(({ itemId, classificationId }) => {
      const field = fields.get(itemId);

      if (!field || field.kind !== "select" || submittedItems.has(itemId)) {
        return true;
      }

      submittedItems.add(itemId);
      return !field.options.some((option) => option.id === classificationId);
    }) ||
    submittedItems.size !== expectedItems.size ||
    [...submittedItems].some((itemId) => !expectedItems.has(itemId))
  ) {
    return { status: "incomplete", feedback: invalidClassificationFeedback };
  }

  const correctCount = response.classifications.filter(
    ({ itemId, classificationId }) =>
      expectedItems.get(itemId) === classificationId,
  ).length;
  const total = expectedItems.size;

  if (correctCount === total) {
    return {
      status: "fully-correct",
      feedback: {
        heading: "Correct",
        explanation: feedback.correctExplanation,
      },
    };
  }

  if (correctCount === 0) {
    return {
      status: "fully-incorrect",
      feedback: {
        heading: "Not yet correct",
        explanation: feedback.incorrectExplanation,
      },
    };
  }

  return {
    status: "partially-correct",
    feedback: {
      heading: "Partially correct",
      explanation: `${correctCount} of ${total} classifications are correct. ${feedback.partialExplanation}`,
    },
  };
}

export const mikro1PreferenceEvaluator: Mikro1PreferenceEvaluator = {
  evaluate(exercise, response) {
    if (!isExpectedExercise(exercise)) {
      throw new Error(`No evaluator is available for ${exercise.id}.`);
    }

    if (
      exercise.interactionType === "classification" &&
      exercise.id === "pref-practice-04"
    ) {
      return response.kind === "classification"
        ? evaluateClassification(exercise, response)
        : { status: "incomplete", feedback: invalidClassificationFeedback };
    }

    if (
      (exercise.interactionType === "single-choice" ||
        exercise.interactionType === "true-false-with-justification") &&
      response.kind === "selection"
    ) {
      return evaluateSelection(exercise, response);
    }

    return { status: "incomplete", feedback: incompleteFeedback };
  },
};
