export const approvedMikro1PreferenceExerciseIds = [
  "pref-practice-01",
  "pref-practice-02",
  "pref-practice-03",
  "pref-practice-04",
  "pref-practice-05",
  "pref-practice-06",
  "pref-practice-07",
  "pref-practice-08",
  "pref-practice-09",
  "pref-practice-10",
  "pref-practice-11",
  "pref-practice-12",
] as const;

export type Mikro1PreferenceExerciseId =
  (typeof approvedMikro1PreferenceExerciseIds)[number];

export const evaluableMikro1PreferenceExerciseIds = [
  "pref-practice-02",
  "pref-practice-03",
  "pref-practice-06",
  "pref-practice-09",
] as const;

export type EvaluableMikro1PreferenceExerciseId =
  (typeof evaluableMikro1PreferenceExerciseIds)[number];

export const supportedMikro1PracticeInteractionTypes = [
  "single-choice",
  "true-false-with-justification",
  "structured-short-answer",
  "relation-table-analysis",
  "classification",
  "error-diagnosis",
  "ordered-derivation",
  "open-response-with-model-solution",
] as const;

export type Mikro1PracticeInteractionType =
  (typeof supportedMikro1PracticeInteractionTypes)[number];
export type Mikro1PracticeDifficulty =
  | "foundational"
  | "intermediate"
  | "transfer";
export type RelationPairStatus = "holds" | "does-not-hold" | "not-supplied";
export type ReflexivePairTreatment =
  | "included-not-listed"
  | "listed"
  | "not-supplied";
export type RelationListingScope = "exhaustive" | "partial";

export interface PracticeOption {
  id: string;
  label: string;
}

export interface TextResponseField {
  id: string;
  kind: "text" | "textarea";
  label: string;
  description?: string;
  required: boolean;
}

export interface ChoiceResponseField {
  id: string;
  kind: "radio" | "select";
  label: string;
  options: PracticeOption[];
  required: boolean;
}

export type PracticeResponseField = TextResponseField | ChoiceResponseField;

export interface ResponseDefinition {
  fields: PracticeResponseField[];
  responseSummary: string;
}

export interface RelationPair {
  from: string;
  to: string;
  status: RelationPairStatus;
  display: boolean;
}

export interface RelationData {
  domain: string[];
  orderedPairs: RelationPair[];
  nonReflexiveListing: RelationListingScope;
  reflexivePairTreatment: ReflexivePairTreatment;
  accessibleDescription: string;
}

export interface DerivationStep {
  id: string;
  label: string;
  prompt: string;
}

export interface LearnerVisibleContent {
  prompt: string[];
  instructions: string[];
  learnerClaim?: string;
}

export interface EvaluationMetadata {
  correctOptionIds?: string[];
  acceptedAnswerStructure: string[];
  approvedRelationPairKeys?: string[];
}

export interface FeedbackMetadata {
  misconceptionIds: string[];
  conceptualFocus: string;
  correctExplanation?: string;
  incorrectExplanation?: string;
}

export interface SolutionMetadata {
  summary: string;
  steps: string[];
}

export interface AccessibilityMetadata {
  notation: Array<{ symbol: "≽" | "≻" | "∼"; text: string }>;
  responseDescription: string;
}

export interface AuditMetadata {
  provenance: "original";
  sourceVerificationState: "checked";
  reviewStatus: "approved";
  implementationNotes: string[];
}

export interface Mikro1PreferenceExercise {
  id: Mikro1PreferenceExerciseId;
  version: number;
  status: "approved" | "unavailable";
  title: string;
  interactionType: Mikro1PracticeInteractionType;
  claimIds: string[];
  difficulty: Mikro1PracticeDifficulty;
  prerequisites: string[];
  misconceptionIds: string[];
  learnerVisibleContent: LearnerVisibleContent;
  responseDefinition: ResponseDefinition;
  options?: PracticeOption[];
  relationData?: RelationData;
  derivationSteps?: DerivationStep[];
  evaluationMetadata: EvaluationMetadata;
  feedbackMetadata: FeedbackMetadata;
  solutionMetadata: SolutionMetadata;
  accessibility: AccessibilityMetadata;
  implementationNotes: string[];
  audit: AuditMetadata;
}

export interface StaticMikro1PreferenceExercise {
  id: Mikro1PreferenceExerciseId;
  version: number;
  status: "approved" | "unavailable";
  title: string;
  interactionType: Mikro1PracticeInteractionType;
  difficulty: Mikro1PracticeDifficulty;
  learnerVisibleContent: LearnerVisibleContent;
  responseDefinition: ResponseDefinition;
  options?: PracticeOption[];
  relationData?: RelationData;
  derivationSteps?: DerivationStep[];
  accessibility: AccessibilityMetadata;
  evaluationAvailable: boolean;
}

const approvedClaimIds = new Set([
  "claim-pref-01",
  "claim-pref-02",
  "claim-pref-03",
  "claim-pref-04",
  "claim-pref-05",
  "claim-pref-15",
]);
const supportedDifficulties = new Set<Mikro1PracticeDifficulty>([
  "foundational",
  "intermediate",
  "transfer",
]);
const pairStatuses = new Set<RelationPairStatus>([
  "holds",
  "does-not-hold",
  "not-supplied",
]);
const interactionTypes = new Set<string>(
  supportedMikro1PracticeInteractionTypes,
);

function containsUnsupportedHtml(value: string): boolean {
  return /<\/?[a-z][^>]*>/i.test(value);
}

function pairKey(pair: Pick<RelationPair, "from" | "to">): string {
  return `${pair.from}:${pair.to}`;
}

function hasUniqueIds(items: Array<{ id: string }>): boolean {
  return new Set(items.map((item) => item.id)).size === items.length;
}

function isSelectionExercise(exercise: Mikro1PreferenceExercise): boolean {
  return (
    exercise.interactionType === "single-choice" ||
    exercise.interactionType === "true-false-with-justification"
  );
}

export function isEvaluableMikro1PreferenceExercise(
  exerciseId: Mikro1PreferenceExerciseId,
): exerciseId is EvaluableMikro1PreferenceExerciseId {
  return evaluableMikro1PreferenceExerciseIds.includes(
    exerciseId as EvaluableMikro1PreferenceExerciseId,
  );
}

export function validateMikro1PreferenceExercises(
  exercises: Mikro1PreferenceExercise[],
): string[] {
  const errors: string[] = [];
  const ids = exercises.map((exercise) => exercise.id);

  if (exercises.length !== approvedMikro1PreferenceExerciseIds.length) {
    errors.push(
      "The production practice set must contain exactly 12 exercises.",
    );
  }

  if (new Set(ids).size !== ids.length) {
    errors.push("Exercise IDs must be unique.");
  }

  for (const approvedId of approvedMikro1PreferenceExerciseIds) {
    if (!ids.includes(approvedId)) {
      errors.push(`Missing approved exercise ID: ${approvedId}.`);
    }
  }

  for (const exercise of exercises) {
    if (!approvedMikro1PreferenceExerciseIds.includes(exercise.id)) {
      errors.push(`Unsupported exercise ID: ${exercise.id}.`);
    }

    if (!Number.isInteger(exercise.version) || exercise.version < 1) {
      errors.push(`${exercise.id}: version must be a positive integer.`);
    }

    if (exercise.status !== "approved") {
      errors.push(`${exercise.id}: production exercise must be approved.`);
    }

    if (!interactionTypes.has(exercise.interactionType)) {
      errors.push(`${exercise.id}: unsupported interaction type.`);
    }

    if (!supportedDifficulties.has(exercise.difficulty)) {
      errors.push(`${exercise.id}: invalid difficulty.`);
    }

    if (
      exercise.claimIds.length === 0 ||
      exercise.claimIds.some((claimId) => !approvedClaimIds.has(claimId))
    ) {
      errors.push(`${exercise.id}: contains an invalid claim ID.`);
    }

    if (
      exercise.learnerVisibleContent.prompt.length === 0 ||
      exercise.learnerVisibleContent.instructions.length === 0 ||
      exercise.responseDefinition.fields.length === 0
    ) {
      errors.push(
        `${exercise.id}: prompt, instructions, and response fields are required.`,
      );
    }

    const visibleStrings = [
      exercise.title,
      ...exercise.learnerVisibleContent.prompt,
      ...exercise.learnerVisibleContent.instructions,
      ...exercise.responseDefinition.fields.map((field) => field.label),
    ];

    if (visibleStrings.some(containsUnsupportedHtml)) {
      errors.push(`${exercise.id}: learner-visible HTML is not supported.`);
    }

    if (
      !exercise.solutionMetadata.summary ||
      exercise.solutionMetadata.steps.length === 0
    ) {
      errors.push(`${exercise.id}: solution metadata is required.`);
    }

    if (
      exercise.accessibility.notation.length === 0 ||
      !exercise.accessibility.responseDescription
    ) {
      errors.push(`${exercise.id}: accessibility text is required.`);
    }

    for (const field of exercise.responseDefinition.fields) {
      if (field.kind === "radio" || field.kind === "select") {
        if (field.options.length === 0 || !hasUniqueIds(field.options)) {
          errors.push(`${exercise.id}: response options must have unique IDs.`);
        }
      }
    }

    if (exercise.options && !hasUniqueIds(exercise.options)) {
      errors.push(`${exercise.id}: top-level options must have unique IDs.`);
    }

    if (isSelectionExercise(exercise)) {
      const correctOptionIds =
        exercise.evaluationMetadata.correctOptionIds ?? [];
      if (correctOptionIds.length !== 1) {
        errors.push(
          `${exercise.id}: selection exercises need exactly one correct hidden option ID.`,
        );
      }
    }

    if (isEvaluableMikro1PreferenceExercise(exercise.id)) {
      if (
        !exercise.feedbackMetadata.correctExplanation ||
        !exercise.feedbackMetadata.incorrectExplanation
      ) {
        errors.push(
          `${exercise.id}: evaluable exercises need approved correct and incorrect feedback.`,
        );
      }
    }

    if (exercise.relationData) {
      validateRelationData(exercise, errors);
    }

    if (exercise.interactionType === "ordered-derivation") {
      if (
        !exercise.derivationSteps ||
        !hasUniqueIds(exercise.derivationSteps)
      ) {
        errors.push(
          `${exercise.id}: derivation steps with unique IDs are required.`,
        );
      }
    }
  }

  return errors;
}

function validateRelationData(
  exercise: Mikro1PreferenceExercise,
  errors: string[],
): void {
  const relationData = exercise.relationData;

  if (!relationData) {
    return;
  }

  if (
    relationData.domain.length < 2 ||
    new Set(relationData.domain).size !== relationData.domain.length
  ) {
    errors.push(
      `${exercise.id}: relation domain must contain unique alternatives.`,
    );
  }

  if (
    !relationData.nonReflexiveListing ||
    !relationData.reflexivePairTreatment
  ) {
    errors.push(
      `${exercise.id}: relation exhaustiveness and reflexive treatment are required.`,
    );
  }

  const seenPairs = new Map<string, RelationPairStatus>();

  for (const pair of relationData.orderedPairs) {
    if (
      !relationData.domain.includes(pair.from) ||
      !relationData.domain.includes(pair.to)
    ) {
      errors.push(
        `${exercise.id}: relation pair contains an alternative outside its domain.`,
      );
    }

    if (!pairStatuses.has(pair.status)) {
      errors.push(`${exercise.id}: relation pair status is invalid.`);
    }

    const key = pairKey(pair);
    const previousStatus = seenPairs.get(key);

    if (previousStatus && previousStatus !== pair.status) {
      errors.push(
        `${exercise.id}: duplicate relation pair has conflicting statuses.`,
      );
    } else if (previousStatus) {
      errors.push(`${exercise.id}: duplicate relation pair is not allowed.`);
    }

    seenPairs.set(key, pair.status);
  }

  const approvedPairKeys = exercise.evaluationMetadata.approvedRelationPairKeys;

  if (!approvedPairKeys || approvedPairKeys.length === 0) {
    errors.push(`${exercise.id}: approved relation-pair keys are required.`);
  } else if (
    approvedPairKeys.length !== seenPairs.size ||
    approvedPairKeys.some((key) => !seenPairs.has(key))
  ) {
    errors.push(
      `${exercise.id}: relation pairs differ from the approved ordered pairs.`,
    );
  }
}

export function assertValidMikro1PreferenceExercises(
  exercises: Mikro1PreferenceExercise[],
): void {
  const errors = validateMikro1PreferenceExercises(exercises);

  if (errors.length > 0) {
    throw new Error(
      `Invalid Mikro I preference practice data:\n${errors.join("\n")}`,
    );
  }
}

export function toStaticMikro1PreferenceExercise(
  exercise: Mikro1PreferenceExercise,
): StaticMikro1PreferenceExercise {
  return {
    id: exercise.id,
    version: exercise.version,
    status: exercise.status,
    title: exercise.title,
    interactionType: exercise.interactionType,
    difficulty: exercise.difficulty,
    learnerVisibleContent: exercise.learnerVisibleContent,
    responseDefinition: exercise.responseDefinition,
    ...(exercise.options ? { options: exercise.options } : {}),
    ...(exercise.relationData ? { relationData: exercise.relationData } : {}),
    ...(exercise.derivationSteps
      ? { derivationSteps: exercise.derivationSteps }
      : {}),
    accessibility: exercise.accessibility,
    evaluationAvailable: isEvaluableMikro1PreferenceExercise(exercise.id),
  };
}
