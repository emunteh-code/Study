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

export interface Mikro1PreferenceRelationTableEntry {
  positionId: string;
  answerId: string;
}

export interface Mikro1PreferenceRelationTableResponse {
  kind: "relation-table";
  entries: Mikro1PreferenceRelationTableEntry[];
  requiredFieldsComplete: boolean;
}

export interface Mikro1PreferenceTransitivityChainEntry {
  positionId: string;
  answerId: string;
}

export interface Mikro1PreferenceTransitivityChainResponse {
  kind: "transitivity-chain";
  entries: Mikro1PreferenceTransitivityChainEntry[];
  requiredFieldsComplete: boolean;
}

export type Mikro1PreferenceEvaluationResponse =
  | Mikro1PreferenceSelectionResponse
  | Mikro1PreferenceClassificationResponse
  | Mikro1PreferenceRelationTableResponse
  | Mikro1PreferenceTransitivityChainResponse;

export interface Mikro1PreferenceEvaluationFeedback {
  heading: string;
  explanation: string;
}

export interface Mikro1PreferenceEvaluationResult {
  status: Mikro1PreferenceEvaluationStatus;
  feedback: Mikro1PreferenceEvaluationFeedback;
  correctCount?: number;
  totalPositions?: number;
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

const invalidStructuredFeedback: Mikro1PreferenceEvaluationFeedback = {
  heading: "Incomplete or invalid response",
  explanation:
    "Complete every required response using an available option before checking your answer.",
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
    "pref-practice-05",
    "pref-practice-06",
    "pref-practice-07",
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
    return { status: "incomplete", feedback: invalidStructuredFeedback };
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

function evaluateRelationTable(
  exercise: Mikro1PreferenceExercise,
  response: Mikro1PreferenceRelationTableResponse,
): Mikro1PreferenceEvaluationResult {
  const mappings = exercise.evaluationMetadata.relationTableMappings;
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

  const expectedAnswers = new Map(
    mappings.map((mapping) => [mapping.positionId, mapping.answerId]),
  );
  const responseFields = new Map(
    exercise.responseDefinition.fields.map((field) => [field.id, field]),
  );
  const submittedPositions = new Set<string>();

  if (
    !response.requiredFieldsComplete ||
    response.entries.length !== expectedAnswers.size ||
    response.entries.some(({ positionId, answerId }) => {
      const field = responseFields.get(positionId);

      if (
        !field ||
        (field.kind !== "select" && field.kind !== "radio") ||
        submittedPositions.has(positionId)
      ) {
        return true;
      }

      submittedPositions.add(positionId);
      return !field.options.some((option) => option.id === answerId);
    }) ||
    submittedPositions.size !== expectedAnswers.size ||
    [...submittedPositions].some(
      (positionId) => !expectedAnswers.has(positionId),
    )
  ) {
    return { status: "incomplete", feedback: invalidStructuredFeedback };
  }

  const correctCount = response.entries.filter(
    ({ positionId, answerId }) => expectedAnswers.get(positionId) === answerId,
  ).length;
  const totalPositions = expectedAnswers.size;

  // Aggregate counts prevent feedback from becoming a cell-by-cell answer oracle.
  if (correctCount === totalPositions) {
    return {
      status: "fully-correct",
      feedback: {
        heading: "Correct",
        explanation: feedback.correctExplanation,
      },
      correctCount,
      totalPositions,
    };
  }

  if (correctCount === 0) {
    return {
      status: "fully-incorrect",
      feedback: {
        heading: "Not yet correct",
        explanation: feedback.incorrectExplanation,
      },
      correctCount,
      totalPositions,
    };
  }

  return {
    status: "partially-correct",
    feedback: {
      heading: "Partially correct",
      explanation: `${correctCount} of ${totalPositions} responses are correct. ${feedback.partialExplanation}`,
    },
    correctCount,
    totalPositions,
  };
}

function parseWeakRelation(value: string): { from: string; to: string } | null {
  const match = /^\s*([a-z])\s*≽\s*([a-z])\s*$/u.exec(value);

  return match ? { from: match[1]!, to: match[2]! } : null;
}

function evaluateTransitivityChain(
  exercise: Mikro1PreferenceExercise,
  response: Mikro1PreferenceTransitivityChainResponse,
): Mikro1PreferenceEvaluationResult {
  const chain = exercise.evaluationMetadata.transitivityChain;
  const feedback = exercise.feedbackMetadata;

  if (
    !chain ||
    !exercise.relationData ||
    !feedback.correctExplanation ||
    !feedback.incorrectExplanation
  ) {
    throw new Error(`Evaluation metadata is unavailable for ${exercise.id}.`);
  }

  const expectedRelations = new Map(
    chain.relations.map((relation) => [
      relation.positionId,
      `${relation.from}:${relation.to}`,
    ]),
  );
  const expectedPositionIds = new Set([
    chain.classification.positionId,
    ...expectedRelations.keys(),
  ]);
  const responseFields = new Map(
    exercise.responseDefinition.fields.map((field) => [field.id, field]),
  );
  const submittedEntries = new Map<string, string>();

  if (
    !response.requiredFieldsComplete ||
    response.entries.length !== expectedPositionIds.size ||
    response.entries.some(({ positionId, answerId }) => {
      const field = responseFields.get(positionId);

      if (!field || submittedEntries.has(positionId)) {
        return true;
      }

      if (positionId === chain.classification.positionId) {
        if (
          field.kind !== "radio" ||
          !field.options.some((option) => option.id === answerId)
        ) {
          return true;
        }
      } else {
        const relation = parseWeakRelation(answerId);

        if (
          field.kind !== "text" ||
          !relation ||
          !exercise.relationData?.domain.includes(relation.from) ||
          !exercise.relationData?.domain.includes(relation.to)
        ) {
          return true;
        }
      }

      submittedEntries.set(positionId, answerId);
      return false;
    }) ||
    submittedEntries.size !== expectedPositionIds.size ||
    [...submittedEntries.keys()].some(
      (positionId) => !expectedPositionIds.has(positionId),
    )
  ) {
    return { status: "incomplete", feedback: invalidStructuredFeedback };
  }

  const classificationMatches =
    submittedEntries.get(chain.classification.positionId) ===
    chain.classification.answerId;
  const relationsMatch = chain.relations.every((relation) => {
    const submittedRelation = parseWeakRelation(
      submittedEntries.get(relation.positionId) ?? "",
    );

    return (
      submittedRelation?.from === relation.from &&
      submittedRelation.to === relation.to
    );
  });

  // The chain is one logical claim, so field-level partial credit is not valid.
  if (!classificationMatches || !relationsMatch) {
    return {
      status: "fully-incorrect",
      feedback: {
        heading: "Not yet correct",
        explanation: feedback.incorrectExplanation,
      },
    };
  }

  return {
    status: "fully-correct",
    feedback: {
      heading: "Correct",
      explanation: feedback.correctExplanation,
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
        : { status: "incomplete", feedback: invalidStructuredFeedback };
    }

    if (
      exercise.interactionType === "relation-table-analysis" &&
      exercise.id === "pref-practice-05"
    ) {
      return response.kind === "relation-table"
        ? evaluateRelationTable(exercise, response)
        : { status: "incomplete", feedback: invalidStructuredFeedback };
    }

    if (
      exercise.interactionType === "relation-table-analysis" &&
      exercise.id === "pref-practice-07"
    ) {
      return response.kind === "transitivity-chain"
        ? evaluateTransitivityChain(exercise, response)
        : { status: "incomplete", feedback: invalidStructuredFeedback };
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
