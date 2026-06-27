import { mikrooekonomik1Module } from "../data/modules/mikrooekonomik-1/module";
import type { LearningSession, StudyModule } from "./model";
import {
  getSessionsInDependencyOrder,
  validateStudyModules,
} from "./validation";

export const registeredModules = [
  mikrooekonomik1Module,
] as const satisfies readonly StudyModule[];

const registryErrors = validateStudyModules(registeredModules);

if (registryErrors.length > 0) {
  throw new Error(
    `Learning module registry is invalid:\n${registryErrors.join("\n")}`,
  );
}

export function getRegisteredModules(): StudyModule[] {
  return [...registeredModules].sort(
    (left, right) => left.displayOrder - right.displayOrder,
  );
}

export function getPublicLearningModules(): StudyModule[] {
  return getRegisteredModules().filter(
    ({ availability }) => availability.architecture === "available",
  );
}

export function getModuleBySlug(slug: string): StudyModule | undefined {
  return registeredModules.find((module) => module.slug === slug);
}

export function getRequiredModuleBySlug(slug: string): StudyModule {
  const module = getModuleBySlug(slug);
  if (!module) throw new Error(`Unknown learning module slug: ${slug}`);
  return module;
}

export function getSessionBySlug(
  module: StudyModule,
  slug: string,
): LearningSession | undefined {
  return module.sessions.find((session) => session.slug === slug);
}

export function getRequiredSessionBySlug(
  module: StudyModule,
  slug: string,
): LearningSession {
  const session = getSessionBySlug(module, slug);
  if (!session) {
    throw new Error(`Unknown session slug for ${module.id}: ${slug}`);
  }
  return session;
}

export function getModuleSessionsInOrder(
  module: StudyModule,
): LearningSession[] {
  return getSessionsInDependencyOrder(module);
}
