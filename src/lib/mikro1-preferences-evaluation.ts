import type {
  EvaluableMikro1PreferenceExerciseId,
  Mikro1PreferenceExercise,
} from "./mikro1-preferences-practice";

export type Mikro1PreferenceEvaluationStatus =
  | "correct"
  | "incorrect"
  | "incomplete";

export interface Mikro1PreferenceEvaluationResponse {
  selectedOptionId?: string;
  requiredFieldsComplete: boolean;
}

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

function isExpectedExercise(
  exercise: Mikro1PreferenceExercise,
): exercise is Mikro1PreferenceExercise & {
  id: EvaluableMikro1PreferenceExerciseId;
} {
  return [
    "pref-practice-02",
    "pref-practice-03",
    "pref-practice-06",
    "pref-practice-09",
  ].includes(exercise.id);
}

export const mikro1PreferenceEvaluator: Mikro1PreferenceEvaluator = {
  evaluate(exercise, response) {
    if (!isExpectedExercise(exercise)) {
      throw new Error(`No evaluator is available for ${exercise.id}.`);
    }

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
  },
};
