import type { LearningSession, StudyModule } from "./model";

export function moduleLearningRoute(module: Pick<StudyModule, "slug">): string {
  return `/lernen/${module.slug}/`;
}

export function modulePracticeRoute(module: Pick<StudyModule, "slug">): string {
  return `/ueben/${module.slug}/`;
}

export function sessionLearningRoute(
  module: Pick<StudyModule, "slug">,
  session: Pick<LearningSession, "slug">,
): string {
  return `/lernen/${module.slug}/${session.slug}/`;
}
