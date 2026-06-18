export type AvailabilityState =
  | "available"
  | "in-review"
  | "planned"
  | "archived";
export type PublicationStatus =
  | "fixture-preview"
  | "partially-available"
  | "under-review"
  | "archived";
export type ReviewStatus =
  | "technical-fixture"
  | "not-reviewed"
  | "in-review"
  | "checked";
export type ProgressState =
  | "not-started"
  | "in-progress"
  | "review-due"
  | "not-available";

export interface ModuleAction {
  label: string;
  href: string;
}

export interface ModuleProgressDimension {
  id: string;
  label: string;
  value: number;
  max?: number;
  visibleText: string;
}

export interface ContinueLearningPreview {
  topicTitle: string;
  currentStep: string;
  nextAction: string;
  estimatedTime: string;
  reason: string;
  primaryAction: ModuleAction;
  secondaryAction: ModuleAction;
}

export interface ModuleTopicItemViewModel {
  id: string;
  order: number;
  title: string;
  learnerOutcome: string;
  estimatedTime: string;
  availability: AvailabilityState;
  contentState: string;
  reviewState: ReviewStatus;
  progressState?: ProgressState;
  progressText?: string;
  prerequisiteNote: string;
  primaryAction?: ModuleAction;
  alternativeAction?: ModuleAction;
  recommended?: boolean;
  statusExplanation?: string;
}

export interface PracticeOptionViewModel {
  id: string;
  title: string;
  availability: AvailabilityState;
  description: string;
  action?: ModuleAction;
}

export interface ReferenceOptionViewModel {
  id: string;
  title: string;
  availability: AvailabilityState;
  description: string;
}

export interface ModulePageViewModel {
  moduleId: string;
  versionId: string;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  category: string;
  versionLabel: string;
  versionStatus: string;
  publicationStatus: PublicationStatus;
  reviewStatus: ReviewStatus;
  lastReviewedDate: string;
  independentProjectContext: string;
  contentCoverageNote: string;
  learningModes: string[];
  topics: ModuleTopicItemViewModel[];
  practiceLinks: PracticeOptionViewModel[];
  mockExamStatus: AvailabilityState;
  mockExamDescription: string;
  formulaAndReferenceAvailability: ReferenceOptionViewModel[];
  sourceSummary: string;
  sourceSetStatus: string;
  contentReviewState: string;
  exerciseReviewState: string;
  errorReportRoute: string;
  recommendedNextAction: ModuleAction;
  secondaryAction: ModuleAction;
  progress?: {
    label: string;
    note: string;
    dimensions: ModuleProgressDimension[];
    continueLearning: ContinueLearningPreview;
  };
}

export const availabilityLabels: Record<AvailabilityState, string> = {
  available: "Verfügbar",
  "in-review": "In Prüfung",
  planned: "Geplant",
  archived: "Archiviert",
};

export const availabilityTones: Record<
  AvailabilityState,
  "success" | "warning" | "info" | "note"
> = {
  available: "success",
  "in-review": "warning",
  planned: "info",
  archived: "note",
};

export const pilotModuleFixture: ModulePageViewModel = {
  moduleId: "pilot-module",
  versionId: "pilot-module-version-alpha",
  slug: "pilot-modul",
  title: "Pilotmodul A",
  shortTitle: "Pilotmodul",
  summary:
    "Ein neutraler technischer Modul-Dashboard-Prototyp für Lernpfad, Fortschrittsvorschau, Übungsstatus und Quellenkommunikation.",
  category: "Technisches Modul-Fixture",
  versionLabel: "Fixture-Version Alpha",
  versionStatus: "Technische Vorschau ohne Semesterbezug",
  publicationStatus: "fixture-preview",
  reviewStatus: "technical-fixture",
  lastReviewedDate: "2026-06-18",
  independentProjectContext:
    "Unabhängiges Studentenprojekt. Diese Vorschau ist kein offizielles Universitätsangebot und enthält keine echten Kursinhalte.",
  contentCoverageNote:
    "Diese Vorschau zeigt die geplante Modulstruktur. Es sind noch keine echten Kursinhalte veröffentlicht.",
  learningModes: [
    "Verstehen",
    "Geführte Übung",
    "Selbstständige Übung",
    "Klausurtransfer",
    "Wiederholung",
  ],
  recommendedNextAction: {
    label: "Lernen fortsetzen",
    href: "/lernen/pilot-modul/beispielthema-alpha/",
  },
  secondaryAction: {
    label: "Alle Themen ansehen",
    href: "#lernpfad",
  },
  topics: [
    {
      id: "pilot-topic-alpha",
      order: 1,
      title: "Beispielthema Alpha",
      learnerOutcome:
        "Du erkennst, wie ein verfügbarer Themenplatzhalter im Lernpfad geöffnet wird.",
      estimatedTime: "12 Minuten",
      availability: "available",
      contentState: "published fixture",
      reviewState: "technical-fixture",
      progressState: "in-progress",
      progressText: "Abschnitt 3 von 8 in der Vorschau",
      prerequisiteNote: "Kein fachlicher Einstieg erforderlich.",
      primaryAction: {
        label: "Weiterlernen",
        href: "/lernen/pilot-modul/beispielthema-alpha/",
      },
      recommended: true,
    },
    {
      id: "pilot-topic-beta",
      order: 2,
      title: "Beispielthema Beta",
      learnerOutcome:
        "Du siehst, wie ein fachlich noch zu prüfender Abschnitt angekündigt wird.",
      estimatedTime: "15 Minuten",
      availability: "in-review",
      contentState: "structural fixture",
      reviewState: "in-review",
      progressState: "not-available",
      prerequisiteNote: "Wird erst nach fachlicher Prüfung empfohlen.",
      alternativeAction: {
        label: "Verfügbare Themen ansehen",
        href: "#lernpfad",
      },
      statusExplanation: "Dieser Abschnitt wird noch fachlich geprüft.",
    },
    {
      id: "pilot-topic-gamma",
      order: 3,
      title: "Beispielthema Gamma",
      learnerOutcome:
        "Du erkennst, wie geplante Inhalte ohne Scheinaktion dargestellt werden.",
      estimatedTime: "Noch offen",
      availability: "planned",
      contentState: "planned",
      reviewState: "not-reviewed",
      progressState: "not-available",
      prerequisiteNote: "Noch keine Voraussetzung definiert.",
      statusExplanation: "Für eine spätere Version geplant.",
    },
    {
      id: "pilot-topic-delta",
      order: 4,
      title: "Beispielthema Delta",
      learnerOutcome:
        "Du siehst, wie archivierte Fixture-Einträge sichtbar, aber nicht empfohlen bleiben.",
      estimatedTime: "Archiviert",
      availability: "archived",
      contentState: "archived",
      reviewState: "technical-fixture",
      progressState: "not-available",
      prerequisiteNote:
        "Archivierter Fixture-Eintrag, nicht Teil des nächsten Schritts.",
      statusExplanation:
        "Archiviert, weil er nur die Darstellung ersetzter Inhalte demonstriert.",
    },
  ],
  practiceLinks: [
    {
      id: "guided-practice",
      title: "Geführte Übungen",
      availability: "available",
      description:
        "Bearbeite Aufgaben mit Hinweisen und schrittweisen Lösungen.",
      action: {
        label: "Geführte Übungen öffnen",
        href: "/ueben/pilot-modul/",
      },
    },
    {
      id: "topic-practice",
      title: "Themenübungen",
      availability: "in-review",
      description: "Gezielte Aufgaben zu einzelnen Lernzielen.",
    },
    {
      id: "mixed-practice",
      title: "Gemischte Übung",
      availability: "planned",
      description: "Aufgaben aus mehreren Themen in einer gemeinsamen Einheit.",
    },
  ],
  mockExamStatus: "planned",
  mockExamDescription:
    "Probeklausuren werden erst veröffentlicht, wenn Aufgaben, Punkteverteilung und Lösungen vollständig geprüft sind.",
  formulaAndReferenceAvailability: [
    {
      id: "formula-overview",
      title: "Formelübersicht",
      availability: "planned",
      description: "Geplant als Ergänzung zum Lernpfad, ohne echte Formeln.",
    },
    {
      id: "terms-overview",
      title: "Begriffsübersicht",
      availability: "in-review",
      description: "Strukturvorschau ohne akademische Definitionen.",
    },
    {
      id: "graphs-overview",
      title: "Graphenübersicht",
      availability: "planned",
      description: "Geplant als spätere Referenz ohne echte Graphen.",
    },
  ],
  sourceSummary:
    "Technisches Fixture-Quellenset: 0 reale akademische Quellen veröffentlicht.",
  sourceSetStatus: "Fixture-Status, keine echten Quellenangaben",
  contentReviewState: "Struktur geprüft, akademische Inhalte nicht vorhanden",
  exerciseReviewState: "Keine echten Übungen veröffentlicht",
  errorReportRoute: "/fehler-melden/",
  progress: {
    label: "Fixture-Fortschritt",
    note: "Previewdaten ohne Speicherung, ohne Seitenaufruf-Metrik und ohne Mastery-Wertung.",
    dimensions: [
      {
        id: "sections",
        label: "Abschnitte",
        value: 3,
        max: 8,
        visibleText: "3 von 8 Abschnitten bearbeitet",
      },
      {
        id: "guided-practice",
        label: "Geführte Übungen",
        value: 2,
        visibleText: "2 geführte Übungen abgeschlossen",
      },
      {
        id: "independent-practice",
        label: "Selbstständige Aufgaben",
        value: 1,
        visibleText: "1 selbstständige Aufgabe versucht",
      },
      {
        id: "review-due",
        label: "Wiederholungen",
        value: 2,
        visibleText: "2 Wiederholungen fällig",
      },
    ],
    continueLearning: {
      topicTitle: "Beispielthema Alpha",
      currentStep: "Abschnitt 3 von 8",
      nextAction: "Geführtes Beispiel bearbeiten",
      estimatedTime: "12 Minuten",
      reason:
        "Dieser Schritt folgt auf die begonnene Fixture-Struktur und zeigt, wie ein klarer nächster Lernschritt später aussehen soll.",
      primaryAction: {
        label: "Lernen fortsetzen",
        href: "/lernen/pilot-modul/beispielthema-alpha/",
      },
      secondaryAction: {
        label: "Themenübersicht öffnen",
        href: "#lernpfad",
      },
    },
  },
};

export function getOrderedTopics(
  module: ModulePageViewModel,
): ModuleTopicItemViewModel[] {
  return [...module.topics].sort((a, b) => a.order - b.order);
}

export function getAvailableTopics(
  module: ModulePageViewModel,
): ModuleTopicItemViewModel[] {
  return getOrderedTopics(module).filter(
    (topic) => topic.availability === "available",
  );
}

export function getRecommendedNextTopic(
  module: ModulePageViewModel,
): ModuleTopicItemViewModel | undefined {
  return getOrderedTopics(module).find(
    (topic) => topic.recommended && topic.availability === "available",
  );
}

export function getTopicStatusLabel(state: AvailabilityState): string {
  return availabilityLabels[state];
}

export function validateModulePageViewModel(
  module: ModulePageViewModel,
): boolean {
  const recommended = getRecommendedNextTopic(module);

  return Boolean(
    module.moduleId &&
    module.versionId &&
    module.slug &&
    module.title &&
    module.recommendedNextAction.href &&
    recommended &&
    recommended.primaryAction,
  );
}
