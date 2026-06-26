export type Mikro1TopicId = "preferences" | "substitution";

export type Mikro1TopicExerciseMode = "deterministic" | "self-review";

export interface Mikro1SourceReference {
  id: string;
  title: string;
  path: string;
  status: "source-backed" | "implementation-spec" | "readiness-record";
}

export interface Mikro1LearningObjective {
  id: string;
  text: string;
  sourceReferenceIds: readonly string[];
}

export interface Mikro1ObjectiveExerciseMapping {
  objectiveId: string;
  exerciseId: string;
  mode: Mikro1TopicExerciseMode;
}

export interface Mikro1TopicOrientation {
  id: Mikro1TopicId;
  title: string;
  shortIntroduction: string;
  prerequisites: readonly string[];
  notationAndTerminology: readonly string[];
  workflow: {
    before: string;
    during: string;
    after: string;
  };
  nextStep: string;
  sourceReferences: readonly Mikro1SourceReference[];
  learningObjectives: readonly Mikro1LearningObjective[];
  exerciseMappings: readonly Mikro1ObjectiveExerciseMapping[];
}

const observableVerbs = new Set([
  "identify",
  "distinguish",
  "classify",
  "derive",
  "calculate",
  "interpret",
  "justify",
  "explain",
  "check",
]);

function hasObservableVerb(text: string): boolean {
  const normalized = text.toLowerCase();
  return [...observableVerbs].some((verb) => normalized.startsWith(`${verb} `));
}

export function validateMikro1TopicOrientation(
  orientation: Mikro1TopicOrientation,
  exerciseIds: readonly string[],
): string[] {
  const errors: string[] = [];
  const context = orientation.id;
  const exerciseIdSet = new Set(exerciseIds);
  const sourceIds = new Set(orientation.sourceReferences.map(({ id }) => id));
  const objectiveIds = new Set(
    orientation.learningObjectives.map(({ id }) => id),
  );

  if (!orientation.title.trim())
    errors.push(`${context}: topic title is required.`);
  if (!orientation.shortIntroduction.trim())
    errors.push(`${context}: short introduction is required.`);
  if (!orientation.prerequisites.length)
    errors.push(`${context}: prerequisite guidance is required.`);
  if (!orientation.notationAndTerminology.length)
    errors.push(`${context}: notation or terminology guidance is required.`);
  if (
    !orientation.workflow.before.trim() ||
    !orientation.workflow.during.trim() ||
    !orientation.workflow.after.trim()
  )
    errors.push(`${context}: complete workflow guidance is required.`);
  if (!orientation.nextStep.trim())
    errors.push(`${context}: next-step guidance is required.`);

  if (sourceIds.size !== orientation.sourceReferences.length)
    errors.push(`${context}: source reference IDs must be unique.`);
  for (const source of orientation.sourceReferences) {
    if (
      !source.id.trim() ||
      !source.title.trim() ||
      !source.path.trim() ||
      !source.path.startsWith("docs/")
    )
      errors.push(`${context}: source references need repository doc paths.`);
  }

  if (objectiveIds.size !== orientation.learningObjectives.length)
    errors.push(`${context}: learning objective IDs must be unique.`);
  for (const objective of orientation.learningObjectives) {
    if (!objective.id.trim() || !objective.text.trim())
      errors.push(`${context}: learning objective text is required.`);
    if (!hasObservableVerb(objective.text))
      errors.push(
        `${context}: learning objective ${objective.id} needs an observable action verb.`,
      );
    if (!objective.sourceReferenceIds.length)
      errors.push(
        `${context}: learning objective ${objective.id} needs a source reference.`,
      );
    for (const sourceId of objective.sourceReferenceIds) {
      if (!sourceIds.has(sourceId))
        errors.push(
          `${context}: learning objective ${objective.id} references unknown source ${sourceId}.`,
        );
    }
  }

  const mappedObjectiveIds = new Set<string>();
  const mappingKeys = new Set<string>();
  for (const mapping of orientation.exerciseMappings) {
    const key = `${mapping.objectiveId}:${mapping.exerciseId}`;
    if (mappingKeys.has(key))
      errors.push(
        `${context}: duplicate objective-to-exercise mapping ${key}.`,
      );
    mappingKeys.add(key);
    if (!objectiveIds.has(mapping.objectiveId))
      errors.push(
        `${context}: mapping references unknown objective ${mapping.objectiveId}.`,
      );
    else mappedObjectiveIds.add(mapping.objectiveId);
    if (!exerciseIdSet.has(mapping.exerciseId))
      errors.push(
        `${context}: mapping references unknown exercise ${mapping.exerciseId}.`,
      );
    if (mapping.mode !== "deterministic" && mapping.mode !== "self-review")
      errors.push(`${context}: mapping mode is unsupported.`);
  }

  for (const objectiveId of objectiveIds) {
    if (!mappedObjectiveIds.has(objectiveId))
      errors.push(
        `${context}: learning objective ${objectiveId} has no practice coverage.`,
      );
  }

  return errors;
}
