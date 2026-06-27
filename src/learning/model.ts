export type AvailabilityState =
  | "available"
  | "in-review"
  | "planned"
  | "blocked"
  | "archived";

export type ArchitectureAvailability = "available" | "in-review" | "planned";

export type LessonAvailability = "available" | "in-review" | "planned";

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
  availability: PracticeAvailability;
}

export interface ReviewState {
  status: "not-started" | "in-review" | "checked" | "blocked";
  note: string;
}

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
