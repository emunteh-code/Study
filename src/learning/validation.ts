import type {
  InstructionalRequirement,
  LearningSession,
  PracticeMapping,
  SourceReference,
  StudyModule,
} from "./model";

const OBSERVABLE_VERBS = new Set([
  "identify",
  "distinguish",
  "classify",
  "derive",
  "calculate",
  "interpret",
  "justify",
  "explain",
  "check",
  "compare",
  "apply",
  "diagnose",
  "construct",
  "evaluate",
  "state",
]);

function hasObservableVerb(text: string): boolean {
  const normalized = text.toLowerCase();
  return [...OBSERVABLE_VERBS].some((verb) =>
    normalized.startsWith(`${verb} `),
  );
}

function hasUniqueValues(values: readonly string[]): boolean {
  return new Set(values).size === values.length;
}

function isRepositoryRelativeSourcePath(path: string): boolean {
  return (
    !path.startsWith("/") &&
    !path.startsWith("file://") &&
    !/^[a-z][a-z0-9+.-]*:\/\//i.test(path)
  );
}

function hasCycle(
  sessionIds: ReadonlySet<string>,
  prerequisitesBySession: ReadonlyMap<string, readonly string[]>,
): boolean {
  const visiting = new Set<string>();
  const visited = new Set<string>();

  function visit(sessionId: string): boolean {
    if (visited.has(sessionId)) return false;
    if (visiting.has(sessionId)) return true;
    visiting.add(sessionId);
    for (const prerequisiteId of prerequisitesBySession.get(sessionId) ?? []) {
      if (!sessionIds.has(prerequisiteId)) continue;
      if (visit(prerequisiteId)) return true;
    }
    visiting.delete(sessionId);
    visited.add(sessionId);
    return false;
  }

  return [...sessionIds].some((sessionId) => visit(sessionId));
}

function validateSourceRecords(
  context: string,
  sourceRecords: readonly SourceReference[],
): string[] {
  const errors: string[] = [];
  const sourceIds = sourceRecords.map(({ id }) => id);
  if (!hasUniqueValues(sourceIds))
    errors.push(`${context}: source record IDs must be unique.`);
  for (const source of sourceRecords) {
    if (!source.id.trim() || !source.title.trim() || !source.path.trim()) {
      errors.push(`${context}: source records require id, title, and path.`);
    }
    if (!isRepositoryRelativeSourcePath(source.path)) {
      errors.push(
        `${context}: source ${source.id} must use a repository-relative path.`,
      );
    }
  }
  return errors;
}

function validateInstructionalRequirement(
  context: string,
  requirement: InstructionalRequirement,
): string[] {
  const errors: string[] = [];
  if (!requirement.id.trim() || !requirement.title.trim()) {
    errors.push(`${context}: instructional requirements need id and title.`);
  }
  if (!requirement.description.trim()) {
    errors.push(`${context}: requirement ${requirement.id} needs a purpose.`);
  }

  if (requirement.kind === "formula") {
    if (!requirement.variableDefinitions.length) {
      errors.push(
        `${context}: formula requirement ${requirement.id} must define variables.`,
      );
    }
  }
  if (requirement.kind === "graph") {
    if (!requirement.axes.length || !requirement.interpretation.trim()) {
      errors.push(
        `${context}: graph requirement ${requirement.id} needs axes and interpretation.`,
      );
    }
  }
  if (requirement.kind === "case-analysis") {
    if (!requirement.issue.trim() || !requirement.rule.trim()) {
      errors.push(
        `${context}: case-analysis requirement ${requirement.id} needs issue and rule fields.`,
      );
    }
  }
  if (requirement.kind === "language-production") {
    if (!requirement.targetSkill.trim()) {
      errors.push(
        `${context}: language-production requirement ${requirement.id} needs a target skill.`,
      );
    }
  }

  return errors;
}

function validatePracticeMapping(
  context: string,
  mapping: PracticeMapping,
  sessionIds: ReadonlySet<string>,
  objectiveIds: ReadonlySet<string>,
): string[] {
  const errors: string[] = [];
  if (
    !mapping.id.trim() ||
    !mapping.practiceRoute.startsWith("/") ||
    !mapping.practiceTitle.trim()
  ) {
    errors.push(`${context}: practice mapping ${mapping.id} is incomplete.`);
  }
  for (const sessionId of mapping.sessionIds) {
    if (!sessionIds.has(sessionId)) {
      errors.push(
        `${context}: practice mapping ${mapping.id} references unknown session ${sessionId}.`,
      );
    }
  }
  for (const objectiveId of mapping.objectiveIds) {
    if (!objectiveIds.has(objectiveId)) {
      errors.push(
        `${context}: practice mapping ${mapping.id} references unknown objective ${objectiveId}.`,
      );
    }
  }
  return errors;
}

export function getSessionsInDependencyOrder(
  module: StudyModule,
): LearningSession[] {
  return [...module.sessions].sort((left, right) => {
    if (left.sequence !== right.sequence) return left.sequence - right.sequence;
    return left.slug.localeCompare(right.slug);
  });
}

export function validateStudyModule(module: StudyModule): string[] {
  const errors: string[] = [];
  const context = module.id || "module";

  if (!module.id.trim() || !module.slug.trim() || !module.title.trim()) {
    errors.push(`${context}: module id, slug, and title are required.`);
  }
  if (!module.description.trim() || !module.subjectArea.trim()) {
    errors.push(
      `${context}: module description and subject area are required.`,
    );
  }

  errors.push(...validateSourceRecords(context, module.sourceRecords));

  const unitIds = module.units.map(({ id }) => id);
  const sessionIds = module.sessions.map(({ id }) => id);
  const sessionSlugs = module.sessions.map(({ slug }) => slug);
  const unitIdSet = new Set(unitIds);
  const sessionIdSet = new Set(sessionIds);
  const objectiveIds = new Set(
    module.sessions.flatMap(({ learningObjectives }) =>
      learningObjectives.map(({ id }) => id),
    ),
  );

  if (!hasUniqueValues(unitIds))
    errors.push(`${context}: unit IDs must be unique.`);
  if (!hasUniqueValues(sessionIds))
    errors.push(`${context}: session IDs must be unique.`);
  if (!hasUniqueValues(sessionSlugs))
    errors.push(`${context}: session slugs must be unique within the module.`);

  for (const unit of module.units) {
    if (!unit.title.trim() || !unit.purpose.trim()) {
      errors.push(`${context}: unit ${unit.id} needs title and purpose.`);
    }
    for (const sessionId of unit.sessionIds) {
      if (!sessionIdSet.has(sessionId)) {
        errors.push(
          `${context}: unit ${unit.id} references unknown session ${sessionId}.`,
        );
      }
    }
  }

  const prerequisitesBySession = new Map<string, readonly string[]>();
  for (const session of module.sessions) {
    const sessionContext = `${context}:${session.id}`;
    prerequisitesBySession.set(session.id, session.prerequisiteSessionIds);

    if (!unitIdSet.has(session.unitId)) {
      errors.push(
        `${sessionContext}: session references unknown unit ${session.unitId}.`,
      );
    }
    if (!session.whyThisSessionExists.trim()) {
      errors.push(`${sessionContext}: session needs a purpose statement.`);
    }
    if (session.prerequisiteSessionIds.includes(session.id)) {
      errors.push(`${sessionContext}: session cannot depend on itself.`);
    }
    for (const prerequisiteId of session.prerequisiteSessionIds) {
      if (!sessionIdSet.has(prerequisiteId)) {
        errors.push(
          `${sessionContext}: unknown prerequisite session ${prerequisiteId}.`,
        );
      }
    }
    for (const futureId of session.futureSessionIds) {
      if (!sessionIdSet.has(futureId)) {
        errors.push(`${sessionContext}: unknown future session ${futureId}.`);
      }
    }
    for (const connection of session.dependencyConnections) {
      if (
        !sessionIdSet.has(connection.fromSessionId) ||
        !sessionIdSet.has(connection.toSessionId)
      ) {
        errors.push(
          `${sessionContext}: dependency connection uses unknown IDs.`,
        );
      }
      if (connection.fromSessionId === connection.toSessionId) {
        errors.push(
          `${sessionContext}: dependency connection cannot be a loop.`,
        );
      }
      if (!connection.explanation.trim()) {
        errors.push(
          `${sessionContext}: dependency connection needs explanation.`,
        );
      }
    }

    const sessionSourceIds = new Set(session.sourceRecords.map(({ id }) => id));
    errors.push(
      ...validateSourceRecords(sessionContext, session.sourceRecords),
    );
    for (const objective of session.learningObjectives) {
      if (!objective.id.trim() || !objective.text.trim()) {
        errors.push(`${sessionContext}: objective text is required.`);
      }
      if (!hasObservableVerb(objective.text)) {
        errors.push(
          `${sessionContext}: objective ${objective.id} needs an observable verb.`,
        );
      }
      if (!objective.sourceReferenceIds.length) {
        errors.push(
          `${sessionContext}: objective ${objective.id} needs sources.`,
        );
      }
      for (const sourceId of objective.sourceReferenceIds) {
        if (!sessionSourceIds.has(sourceId)) {
          errors.push(
            `${sessionContext}: objective ${objective.id} references unknown source ${sourceId}.`,
          );
        }
      }
    }

    for (const requirement of session.instructionalRequirements) {
      errors.push(
        ...validateInstructionalRequirement(sessionContext, requirement),
      );
    }
    for (const taskFamily of session.examTaskFamilies) {
      if (!taskFamily.title.trim() || !taskFamily.description.trim()) {
        errors.push(`${sessionContext}: exam task families need descriptions.`);
      }
    }
    for (const mistake of session.commonMistakes) {
      if (!mistake.description.trim()) {
        errors.push(
          `${sessionContext}: misconception descriptions are required.`,
        );
      }
    }
    for (const criterion of session.masteryCriteria) {
      if (!criterion.description.trim() || !criterion.evidence.trim()) {
        errors.push(`${sessionContext}: mastery criteria need evidence.`);
      }
    }

    if (
      session.availability.lesson === "available" &&
      !session.instructionalRequirements.length
    ) {
      errors.push(
        `${sessionContext}: available lesson sessions need instructional requirements.`,
      );
    }
  }

  if (hasCycle(sessionIdSet, prerequisitesBySession)) {
    errors.push(`${context}: dependency graph must not contain cycles.`);
  }

  for (const mapping of module.sessions.flatMap(
    ({ practiceMappings }) => practiceMappings,
  )) {
    errors.push(
      ...validatePracticeMapping(context, mapping, sessionIdSet, objectiveIds),
    );
  }

  return errors;
}

export function validateStudyModules(
  modules: readonly StudyModule[],
): string[] {
  const errors: string[] = [];
  const moduleIds = modules.map(({ id }) => id);
  const moduleSlugs = modules.map(({ slug }) => slug);
  if (!hasUniqueValues(moduleIds)) errors.push("Module IDs must be unique.");
  if (!hasUniqueValues(moduleSlugs))
    errors.push("Module slugs must be unique.");
  for (const module of modules) {
    errors.push(...validateStudyModule(module));
  }
  return errors;
}
