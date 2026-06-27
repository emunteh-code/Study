export type AvailabilityState =
  | "available"
  | "in-review"
  | "planned"
  | "blocked"
  | "archived";

export type ArchitectureAvailability = "available" | "in-review" | "planned";

export type LessonAvailability =
  | "available"
  | "complete-session"
  | "partial-session"
  | "orientation-available"
  | "architecture-only"
  | "practice-available"
  | "in-review"
  | "planned";

export type PracticeAvailability = "available" | "in-review" | "planned";

export interface ModuleAvailability {
  architecture: ArchitectureAvailability;
  lessons: LessonAvailability;
  practice: PracticeAvailability;
  sourceStatus: AvailabilityState;
}

export interface SessionAvailability {
  architecture: ArchitectureAvailability;
  lesson: LessonAvailability;
  practice: PracticeAvailability;
  sourceStatus: AvailabilityState;
}

export type SourceStatus =
  | "source-backed"
  | "implementation-spec"
  | "readiness-record"
  | "planned"
  | "blocked";

export interface SourceReference {
  id: string;
  title: string;
  path: string;
  status: SourceStatus;
}

export interface Concept {
  id: string;
  label: string;
  description: string;
}

export interface LearningObjective {
  id: string;
  text: string;
  sourceReferenceIds: readonly string[];
}

export interface DependencyConnection {
  fromSessionId: string;
  toSessionId: string;
  explanation: string;
}

export interface DefinitionRequirement {
  kind: "definition";
  id: string;
  title: string;
  description: string;
  conceptIds: readonly string[];
}

export interface MentalModelRequirement {
  kind: "mental-model";
  id: string;
  title: string;
  description: string;
  conceptIds: readonly string[];
}

export interface FormulaRequirement {
  kind: "formula";
  id: string;
  title: string;
  description: string;
  variableDefinitions: readonly string[];
}

export interface DerivationRequirement {
  kind: "derivation";
  id: string;
  title: string;
  description: string;
}

export interface GraphRequirement {
  kind: "graph";
  id: string;
  title: string;
  description: string;
  axes: readonly string[];
  interpretation: string;
}

export interface ProofRequirement {
  kind: "proof";
  id: string;
  title: string;
  description: string;
}

export interface CalculationProcedureRequirement {
  kind: "calculation-procedure";
  id: string;
  title: string;
  description: string;
  steps: readonly string[];
}

export interface CaseAnalysisRequirement {
  kind: "case-analysis";
  id: string;
  title: string;
  description: string;
  issue: string;
  rule: string;
}

export interface LegalReasoningRequirement {
  kind: "legal-reasoning";
  id: string;
  title: string;
  description: string;
  reasoningMode: string;
}

export interface LanguageProductionRequirement {
  kind: "language-production";
  id: string;
  title: string;
  description: string;
  targetSkill: string;
}

export interface PronunciationRequirement {
  kind: "pronunciation";
  id: string;
  title: string;
  description: string;
  targetSoundOrPattern: string;
}

export interface WorkedExampleRequirement {
  kind: "worked-example";
  id: string;
  title: string;
  description: string;
}

export interface ActiveRecallRequirement {
  kind: "active-recall";
  id: string;
  title: string;
  description: string;
}

export interface ExamStrategyRequirement {
  kind: "exam-strategy";
  id: string;
  title: string;
  description: string;
  taskFamilyIds: readonly string[];
}

export type InstructionalRequirement =
  | DefinitionRequirement
  | MentalModelRequirement
  | FormulaRequirement
  | DerivationRequirement
  | GraphRequirement
  | ProofRequirement
  | CalculationProcedureRequirement
  | CaseAnalysisRequirement
  | LegalReasoningRequirement
  | LanguageProductionRequirement
  | PronunciationRequirement
  | WorkedExampleRequirement
  | ActiveRecallRequirement
  | ExamStrategyRequirement;

export interface ExamTaskFamily {
  id: string;
  title: string;
  description: string;
}

export interface MisconceptionTarget {
  id: string;
  description: string;
}

export interface MasteryCriterion {
  id: string;
  description: string;
  evidence: string;
}

export interface PracticeMapping {
  id: string;
  practiceRoute: string;
  practiceTitle: string;
  sessionIds: readonly string[];
  objectiveIds: readonly string[];
  exerciseIds?: readonly string[];
  limitations?: readonly string[];
  availability: PracticeAvailability;
}

export interface ReviewState {
  status: "not-started" | "in-review" | "checked" | "blocked";
  note: string;
}

export type LessonBlockKind =
  | "why-exists"
  | "unlocks"
  | "prerequisites"
  | "objectives"
  | "dependency-position"
  | "big-picture"
  | "intuition"
  | "definition"
  | "classification-matrix"
  | "assumptions"
  | "symbols"
  | "concept-build"
  | "reasoning"
  | "connections"
  | "worked-example"
  | "guided-practice"
  | "misconception"
  | "exam-thinking"
  | "active-recall"
  | "feynman-test"
  | "interleaving"
  | "cheat-sheet"
  | "mastery-check"
  | "remediation"
  | "practice-handoff";

export interface BaseLessonBlock<K extends LessonBlockKind = LessonBlockKind> {
  id: string;
  kind: K;
  title: string;
  body: readonly string[];
  sourceReferenceIds?: readonly string[];
  objectiveIds?: readonly string[];
}

export interface WorkedExampleBlock extends BaseLessonBlock<"worked-example"> {
  kind: "worked-example";
  level: "foundational" | "intermediate" | "exam-style";
  problem: string;
  testedConcept: string;
  solutionSteps: readonly string[];
  reasoning: string;
  interpretation: string;
  commonWrongApproach?: string;
}

export interface GuidedPracticeHint {
  id: string;
  label: string;
  body: string;
}

export interface GuidedPracticeBlock extends BaseLessonBlock<"guided-practice"> {
  kind: "guided-practice";
  prompt: string;
  hints: readonly GuidedPracticeHint[];
  fullExplanation: string;
}

export interface ClassificationMatrixRow {
  id: string;
  complete: string;
  transitive: string;
  classification: string;
  example: string;
  reason: string;
  examTrap: string;
}

export interface ClassificationMatrixBlock extends BaseLessonBlock<"classification-matrix"> {
  kind: "classification-matrix";
  columns: readonly [string, string, string];
  rows: readonly ClassificationMatrixRow[];
}

export interface MisconceptionBlock extends BaseLessonBlock<"misconception"> {
  kind: "misconception";
  whyPlausible: string;
  correction: string;
}

export interface ExamThinkingBlock extends BaseLessonBlock<"exam-thinking"> {
  kind: "exam-thinking";
  taskFamilyId: string;
  testedConcept: string;
  examinerReasoning: readonly string[];
}

export interface ActiveRecallBlock extends BaseLessonBlock<"active-recall"> {
  kind: "active-recall";
  prompts: readonly string[];
}

export interface FeynmanTestBlock extends BaseLessonBlock<"feynman-test"> {
  kind: "feynman-test";
  prompts: readonly string[];
}

export interface InterleavingBlock extends BaseLessonBlock<"interleaving"> {
  kind: "interleaving";
  comparisons: readonly string[];
}

export interface CheatSheetBlock extends BaseLessonBlock<"cheat-sheet"> {
  kind: "cheat-sheet";
  entries: readonly { term: string; description: string }[];
}

export interface MasteryCheckBlock extends BaseLessonBlock<"mastery-check"> {
  kind: "mastery-check";
  checks: readonly { observable: string; evidence: string }[];
}

export interface PracticeHandoffBlock extends BaseLessonBlock<"practice-handoff"> {
  kind: "practice-handoff";
  practiceRoute: string;
  exerciseIds: readonly string[];
  limitations: readonly string[];
}

export type LessonBlock =
  | BaseLessonBlock<
      | "why-exists"
      | "unlocks"
      | "prerequisites"
      | "objectives"
      | "dependency-position"
      | "big-picture"
      | "intuition"
      | "definition"
      | "assumptions"
      | "symbols"
      | "concept-build"
      | "reasoning"
      | "connections"
      | "remediation"
    >
  | ClassificationMatrixBlock
  | WorkedExampleBlock
  | GuidedPracticeBlock
  | MisconceptionBlock
  | ExamThinkingBlock
  | ActiveRecallBlock
  | FeynmanTestBlock
  | InterleavingBlock
  | CheatSheetBlock
  | MasteryCheckBlock
  | PracticeHandoffBlock;

export interface LearningUnit {
  id: string;
  title: string;
  purpose: string;
  sessionIds: readonly string[];
}

export interface LearningSession {
  id: string;
  slug: string;
  title: string;
  unitId: string;
  sequence: number;
  whyThisSessionExists: string;
  concepts: readonly Concept[];
  learningObjectives: readonly LearningObjective[];
  prerequisiteSessionIds: readonly string[];
  futureSessionIds: readonly string[];
  dependencyConnections: readonly DependencyConnection[];
  instructionalRequirements: readonly InstructionalRequirement[];
  examTaskFamilies: readonly ExamTaskFamily[];
  commonMistakes: readonly MisconceptionTarget[];
  masteryCriteria: readonly MasteryCriterion[];
  sourceRecords: readonly SourceReference[];
  practiceMappings: readonly PracticeMapping[];
  lessonBlocks?: readonly LessonBlock[];
  availability: SessionAvailability;
  reviewState?: ReviewState;
}

export interface StudyModule {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  subjectArea: string;
  displayOrder: number;
  units: readonly LearningUnit[];
  sessions: readonly LearningSession[];
  sourceRecords: readonly SourceReference[];
  availability: ModuleAvailability;
}
