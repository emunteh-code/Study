export type HomepageFixtureMode = "new" | "returning";
export type ModuleFixtureStatus = "verfügbar" | "in Prüfung" | "geplant";

export interface LearningGoalFixture {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

export interface ModuleFixture {
  id: string;
  title: string;
  summary: string;
  status: ModuleFixtureStatus;
  formats: string[];
  href?: string;
  actionLabel?: string;
  recommended?: boolean;
  note: string;
}

export interface ReturningLearnerFixture {
  moduleTitle: string;
  topicTitle: string;
  progressValue: number;
  progressMax: number;
  progressLabel: string;
  nextStep: string;
  continueHref: string;
  alternateHref: string;
}

export interface DueReviewFixture {
  isDue: boolean;
  count: number;
  href: string;
}

export interface LearningProcessStepFixture {
  id: string;
  title: string;
  description: string;
}

export const learningGoals: LearningGoalFixture[] = [
  {
    id: "understand-topic",
    title: "Thema verstehen",
    description:
      "Klare Erklärungen, Definitionen, Modelle und geführte Beispiele.",
    ctaLabel: "Thema auswählen",
    href: "/lernen/",
  },
  {
    id: "practice-tasks",
    title: "Aufgaben üben",
    description:
      "Bearbeite Aufgaben mit Hinweisen, vollständigen Lösungen und Fehlererklärungen.",
    ctaLabel: "Aufgaben starten",
    href: "/ueben/",
  },
  {
    id: "exam-transfer",
    title: "Klausur vorbereiten",
    description:
      "Trainiere mit gemischten Aufgaben und später mit klausurnahen Probeklausuren.",
    ctaLabel: "Prüfungstraining öffnen",
    href: "/probeklausuren/",
  },
];

export const homepageModules: ModuleFixture[] = [
  {
    id: "pilot-module-a",
    title: "Pilotmodul A",
    summary:
      "Ein neutraler Vorschaubereich für den späteren Makroökonomik-II-Pilotpfad.",
    status: "verfügbar",
    formats: ["Lernpfad", "Übungsmodus", "Quellenstatus"],
    href: "/lernen/pilot-modul/",
    actionLabel: "Pilotmodul A öffnen",
    recommended: true,
    note: "Fixture-Inhalt zur Prüfung der Navigation, keine echten Kursinhalte.",
  },
  {
    id: "pilot-module-b",
    title: "Pilotmodul B",
    summary:
      "Ein Platzhalter für einen weiteren Lernbereich, der vor Veröffentlichung geprüft werden müsste.",
    status: "in Prüfung",
    formats: ["Strukturvorschau", "Prüfhinweise"],
    href: "/lernen/",
    actionLabel: "Lernbereiche ansehen",
    note: "Noch nicht als akademischer Lernbereich veröffentlicht.",
  },
  {
    id: "pilot-module-c",
    title: "Pilotmodul C",
    summary:
      "Ein geplanter Bereich, der noch keine geprüfte Struktur oder Aufgaben enthält.",
    status: "geplant",
    formats: ["Planungsstatus"],
    note: "Geplante Inhalte bleiben erreichbar beschrieben statt als deaktivierter Link.",
  },
];

export const returningLearnerFixture: ReturningLearnerFixture = {
  moduleTitle: "Pilotmodul A",
  topicTitle: "Beispielthema Alpha",
  progressValue: 3,
  progressMax: 8,
  progressLabel: "3 von 8 Abschnitten bearbeitet",
  nextStep:
    "Als Nächstes folgt eine geführte Übung in der statischen Vorschau.",
  continueHref: "/lernen/pilot-modul/",
  alternateHref: "/lernen/",
};

export const dueReviewFixture: DueReviewFixture = {
  isDue: true,
  count: 2,
  href: "/fortschritt/",
};

export const learningProcessSteps: LearningProcessStepFixture[] = [
  {
    id: "understand",
    title: "Verstehen",
    description:
      "Beginne mit der Intuition hinter Begriffen, Modellen und Formeln.",
  },
  {
    id: "guided-practice",
    title: "Mit Anleitung üben",
    description:
      "Bearbeite Beispiele mit Hinweisen, Zwischenschritten und Lösungen.",
  },
  {
    id: "independent-practice",
    title: "Selbstständig lösen",
    description: "Prüfe, ob du Aufgaben ohne direkte Anleitung lösen kannst.",
  },
  {
    id: "exam-transfer",
    title: "Auf die Klausur übertragen",
    description:
      "Erkenne Aufgabentypen und übertrage das Wissen auf Prüfungsformate.",
  },
  {
    id: "review",
    title: "Später wiederholen",
    description:
      "Wiederhole fällige Inhalte, bevor sie aus dem Gedächtnis rutschen.",
  },
];

export function parseHomepageFixtureMode(
  value: string | null | undefined,
): HomepageFixtureMode {
  return value === "returning" ? "returning" : "new";
}

export function isReturningHomepageFixture(mode: HomepageFixtureMode): boolean {
  return mode === "returning";
}
