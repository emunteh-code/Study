export type TopicContentState =
  | "planned"
  | "drafting"
  | "structurally-complete"
  | "source-checked"
  | "exercise-checked"
  | "published"
  | "archived";
export type TopicPublicationState =
  | "hidden"
  | "listed"
  | "public"
  | "withdrawn";
export type TopicReviewState =
  | "not-reviewed"
  | "in-review"
  | "changes-requested"
  | "approved"
  | "expired";
export type SourceVerificationState =
  | "unverified"
  | "located"
  | "checked"
  | "superseded";
export type ExerciseProvenanceState = "official" | "adapted" | "original";
export type TopicDifficulty = "Einstieg" | "Standard" | "Transfer";

export interface TopicAction {
  label: string;
  href: string;
  explanation?: string;
}

export interface TopicTableOfContentsEntry {
  id: string;
  label: string;
}

export interface TopicLearningObjective {
  id: string;
  text: string;
}

export interface TopicPrerequisite {
  id: string;
  label: string;
  description: string;
  href?: string;
  objectiveIds?: string[];
}

export interface TopicTextSection {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
  callout?: {
    title: string;
    text: string;
  };
}

export interface TopicDefinition {
  id: string;
  term: string;
  formalDefinition: string;
  plainLanguageExplanation: string;
  relatedObjectiveIds: string[];
  source?: string;
  commonConfusion?: string;
}

export interface TopicFormula {
  id: string;
  name: string;
  expression: string;
  purpose: string;
  symbols: {
    symbol: string;
    meaning: string;
  }[];
  assumptions: string[];
  commonMisuse: string;
  sourceStatus?: string;
}

export interface TopicWorkedExample {
  id: string;
  title: string;
  task: string;
  given: string[];
  target: string;
  method: string;
  steps: string[];
  result: string;
  interpretation: string;
  commonWrongApproach: string;
  extension?: string;
}

export interface TopicCommonMistake {
  id: string;
  title: string;
  mistake: string;
  whyWrong: string;
  correction: string;
  recognition: string;
}

export interface TopicGuidedPractice {
  id: string;
  title: string;
  prompt: string;
  objective: string;
  steps: string[];
  hints: string[];
  solution: string[];
  commonErrorFeedback: string;
  nextAction: TopicAction;
}

export interface TopicIndependentPractice {
  id: string;
  title: string;
  prompt: string;
  estimatedTime: string;
  difficulty: TopicDifficulty;
  hint: string;
  solution: string[];
  transferQuestion?: string;
  storageNote: string;
}

export interface TopicExamRecognition {
  id: string;
  title: string;
  previewLabel: string;
  recognitionCue: string;
  expectedAction: string;
  commonTrap: string;
  timeManagementNote: string;
  provenanceStatus: string;
}

export interface TopicSelfCheckItem {
  id: string;
  text: string;
}

export interface TopicReviewPrompt {
  id: string;
  prompt: string;
  eligibleForFutureReview: boolean;
}

export interface TopicSourceSummary {
  id: string;
  fixtureWarning: string;
  contentState: TopicContentState;
  reviewState: TopicReviewState;
  lastReviewedDate?: string;
  sourceVerificationState: SourceVerificationState;
  exerciseProvenanceState: ExerciseProvenanceState;
  notes: string[];
}

export interface TopicNeighbor {
  id: string;
  title: string;
  state: "available" | "planned" | "archived";
  href?: string;
  explanation: string;
}

export interface TopicPageViewModel {
  topicId: string;
  moduleId: string;
  moduleVersionId: string;
  slug: string;
  moduleSlug: string;
  moduleTitle: string;
  title: string;
  shortSummary: string;
  topicOrder: number;
  topicCount: number;
  estimatedLearningTime: string;
  contentState: TopicContentState;
  publicationState: TopicPublicationState;
  reviewState: TopicReviewState;
  lastReviewedDate?: string;
  learningObjectives: TopicLearningObjective[];
  prerequisites: TopicPrerequisite[];
  tableOfContents: TopicTableOfContentsEntry[];
  intuitiveIntroduction: string[];
  coreExplanationSections: TopicTextSection[];
  definitions: TopicDefinition[];
  formulas: TopicFormula[];
  workedExamples: TopicWorkedExample[];
  commonMistakes: TopicCommonMistake[];
  guidedPractice: TopicGuidedPractice;
  independentPractice: TopicIndependentPractice;
  examRecognition: TopicExamRecognition;
  selfCheckItems: TopicSelfCheckItem[];
  reviewPrompts: TopicReviewPrompt[];
  sourceSummary: TopicSourceSummary;
  previousTopic?: TopicNeighbor;
  nextTopic?: TopicNeighbor;
  recommendedNextAction: TopicAction;
  secondaryAction?: TopicAction;
  errorReportRoute: string;
}

export const topicContentStateLabels: Record<
  TopicContentState,
  {
    label: string;
    explanation: string;
    tone: "info" | "success" | "warning" | "note";
  }
> = {
  planned: {
    label: "Geplant",
    explanation: "Dieser Inhalt ist vorgesehen, aber noch nicht ausgearbeitet.",
    tone: "info",
  },
  drafting: {
    label: "In Bearbeitung",
    explanation: "Der Inhalt wird erstellt und ist noch nicht verlässlich.",
    tone: "warning",
  },
  "structurally-complete": {
    label: "Strukturell vollständig",
    explanation:
      "Alle Pflichtabschnitte sind als Struktur vorhanden; fachliche Quellen- und Übungsprüfung stehen noch aus.",
    tone: "warning",
  },
  "source-checked": {
    label: "Quellen geprüft",
    explanation: "Akademische Aussagen wurden gegen Quellen geprüft.",
    tone: "success",
  },
  "exercise-checked": {
    label: "Übungen geprüft",
    explanation: "Übungen, Lösungen und Provenienz wurden geprüft.",
    tone: "success",
  },
  published: {
    label: "Veröffentlicht",
    explanation:
      "Der Inhalt hat die erforderliche Veröffentlichungskontrolle bestanden.",
    tone: "success",
  },
  archived: {
    label: "Archiviert",
    explanation: "Der Inhalt bleibt sichtbar, ist aber nicht der Standardpfad.",
    tone: "note",
  },
};

export const reviewStateLabels: Record<TopicReviewState, string> = {
  "not-reviewed": "Nicht geprüft",
  "in-review": "In Prüfung",
  "changes-requested": "Änderungen angefordert",
  approved: "Freigegeben",
  expired: "Prüfung veraltet",
};

export const sourceVerificationLabels: Record<SourceVerificationState, string> =
  {
    unverified: "Keine akademische Quelle geprüft",
    located: "Quelle gefunden",
    checked: "Quelle geprüft",
    superseded: "Quelle ersetzt",
  };

export const exerciseProvenanceLabels: Record<ExerciseProvenanceState, string> =
  {
    official: "Offiziell",
    adapted: "Angepasst",
    original: "Original",
  };

export const mandatoryTopicSectionIds = [
  "lernziele",
  "voraussetzungen",
  "intuition",
  "erklaerung",
  "formale-struktur",
  "beispiel",
  "haeufige-fehler",
  "gefuehrte-uebung",
  "selbststaendige-uebung",
  "klausurtransfer",
  "selbstcheck",
  "wiederholung",
  "quellen-pruefstand",
  "navigation",
  "naechster-schritt",
] as const;

const ASCII_ID_PATTERN = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;

export const pilotTopicFixture: TopicPageViewModel = {
  topicId: "topic-alpha",
  moduleId: "pilot-module",
  moduleVersionId: "pilot-module-version-alpha",
  slug: "beispielthema-alpha",
  moduleSlug: "pilot-modul",
  moduleTitle: "Pilotmodul A",
  title: "Beispielthema Alpha",
  shortSummary:
    "Eine neutrale technische Vorschau, die Aufbau, Lernschritte, Übungsformen und Quellenkommunikation einer späteren Lektion zeigt.",
  topicOrder: 1,
  topicCount: 4,
  estimatedLearningTime: "18 Minuten",
  contentState: "structurally-complete",
  publicationState: "listed",
  reviewState: "in-review",
  lastReviewedDate: "2026-06-18",
  learningObjectives: [
    {
      id: "objective-topic-alpha-01",
      text: "die Bestandteile eines abstrakten Beispiels benennen",
    },
    {
      id: "objective-topic-alpha-02",
      text: "eine einfache Regel auf einen neuen Fall anwenden",
    },
    {
      id: "objective-topic-alpha-03",
      text: "einen typischen Denkfehler im Ablauf erkennen",
    },
  ],
  prerequisites: [
    {
      id: "prerequisite-topic-alpha-none",
      label: "Keine fachlichen Vorkenntnisse",
      description:
        "Für diese technische Vorschau sind keine fachlichen Vorkenntnisse erforderlich.",
    },
  ],
  tableOfContents: [],
  intuitiveIntroduction: [
    "Diese Seite zeigt, wie eine spätere Lektion aufgebaut sein soll. Sie verwendet neutrale Beispieldaten, damit die Seitengestaltung geprüft werden kann, ohne echte Kursinhalte zu erfinden.",
    "Die Lektion beginnt mit Ziel, Vorwissen und einer einfachen Idee. Danach folgt eine präzisere Erklärung mit Definition, formaler Struktur und einem vollständig gelösten Beispiel.",
    "Am Ende stehen geführte Übung, selbstständige Übung, Transferstruktur, Wiederholung und ein klarer nächster Schritt. Es wird nichts gespeichert und kein Lernfortschritt behauptet.",
  ],
  coreExplanationSections: [
    {
      id: "erklaerung",
      heading: "Kernidee der technischen Vorschau",
      paragraphs: [
        "Ein späteres Thema soll nicht nur Text sammeln, sondern Lernhandlungen in einer festen Reihenfolge anbieten.",
        "Die neutrale Beispielregel arbeitet mit Eingabe A und Eingabe B. Aus beiden entsteht Ergebnis C. Das ist nur eine technische Strukturprobe.",
      ],
      list: [
        "Zuerst wird geklärt, was erreicht werden soll.",
        "Dann wird die Regel mit Begriffen und einer formalen Struktur beschrieben.",
        "Anschließend wird die Anwendung erst geführt und dann selbstständig geübt.",
      ],
      callout: {
        title: "Fixture-Hinweis",
        text: "Alle Begriffe und Werte auf dieser Seite sind neutrale technische Beispieldaten.",
      },
    },
  ],
  definitions: [
    {
      id: "definition-input-value",
      term: "Eingabewert",
      formalDefinition:
        "Ein Wert, der einer festgelegten Regel übergeben wird.",
      plainLanguageExplanation:
        "Er ist der Ausgangspunkt des technischen Beispiels.",
      relatedObjectiveIds: ["objective-topic-alpha-01"],
      source: "Technisches Fixture, keine akademische Quelle",
      commonConfusion:
        "Nicht mit dem Ergebnis verwechseln: Ein Eingabewert steht vor der Anwendung der Regel.",
    },
  ],
  formulas: [
    {
      id: "formula-fixture-sum",
      name: "Technische Fixture-Formel",
      expression: "a + b = c",
      purpose:
        "Die Formel zeigt nur, wie ein formaler Block mit definierten Symbolen dargestellt wird.",
      symbols: [
        { symbol: "a", meaning: "erster neutraler Eingabewert" },
        { symbol: "b", meaning: "zweiter neutraler Eingabewert" },
        { symbol: "c", meaning: "Ergebnis nach Anwendung der Beispielregel" },
      ],
      assumptions: [
        "Alle Werte sind neutrale Beispielwerte.",
        "Die Regel ist nur eine technische Vorschau und keine Fachformel.",
      ],
      commonMisuse:
        "Die Darstellung darf nicht als fachliche Formel gelesen werden.",
      sourceStatus: "Keine akademische Quelle, da technische Fixture-Struktur",
    },
  ],
  workedExamples: [
    {
      id: "worked-example-alpha",
      title: "Vollständiges technisches Beispiel",
      task: "Wende die neutrale Regel auf die Werte a = 2 und b = 3 an.",
      given: ["a = 2", "b = 3", "Regel: a + b = c"],
      target:
        "Bestimme c und beschreibe kurz, was c in diesem Fixture bedeutet.",
      method:
        "Setze die beiden Eingabewerte in die technische Fixture-Regel ein.",
      steps: [
        "Notiere die Regel: a + b = c.",
        "Setze a = 2 und b = 3 ein.",
        "Rechne 2 + 3 = 5.",
        "Ordne das Ergebnis als c = 5 ein.",
      ],
      result: "c = 5",
      interpretation:
        "Das Ergebnis ist der Ausgabewert der neutralen Beispielregel.",
      commonWrongApproach:
        "Ein häufiger Fehler wäre, c als neuen Eingabewert zu behandeln und die Regel dadurch doppelt anzuwenden.",
      extension:
        "Prüfe danach mit anderen neutralen Zahlen, ob du die Rollen von a, b und c weiterhin unterscheiden kannst.",
    },
  ],
  commonMistakes: [
    {
      id: "mistake-input-output",
      title: "Eingabe und Ergebnis verwechseln",
      mistake: "Das Ergebnis c wird wie ein weiterer Eingabewert behandelt.",
      whyWrong:
        "Dann wird die Richtung der Regel vertauscht und der Ablauf verliert seine klare Reihenfolge.",
      correction:
        "Bestimme zuerst c aus a und b. Nutze c danach nur als Ergebnis der Regel.",
      recognition:
        "Prüfe, ob du vor dem Rechnen sagen kannst, welche Werte gegeben sind und welcher Wert gesucht ist.",
    },
    {
      id: "mistake-skip-step",
      title: "Zwischenschritt auslassen",
      mistake: "Die Regel wird nicht notiert, bevor Werte eingesetzt werden.",
      whyWrong:
        "Ohne sichtbare Regel ist schwer erkennbar, ob die Werte richtig verwendet wurden.",
      correction:
        "Schreibe erst die Regel auf, setze dann die Werte ein und notiere zuletzt das Ergebnis.",
      recognition:
        "Wenn eine Lösung nur aus einer Zahl besteht, fehlt wahrscheinlich ein prüfbarer Zwischenschritt.",
    },
  ],
  guidedPractice: {
    id: "guided-practice-alpha",
    title: "Geführte Übung",
    prompt: "Nutze die technische Fixture-Regel für a = 4 und b = 1.",
    objective:
      "Du übst, die Rollen von Eingabe, Regel und Ergebnis sauber zu trennen.",
    steps: [
      "Benenne zuerst die beiden Eingabewerte.",
      "Schreibe die Regel in einer eigenen Zeile auf.",
      "Setze die Werte ein.",
      "Berechne das Ergebnis und beschreibe seine Rolle.",
    ],
    hints: [
      "Die Eingabewerte stehen links in der Regel.",
      "Das Ergebnis ist der Wert, der nach dem Gleichheitszeichen benannt wird.",
    ],
    solution: [
      "Die Eingabewerte sind a = 4 und b = 1.",
      "Die Regel lautet a + b = c.",
      "Eingesetzt ergibt das 4 + 1 = c.",
      "Daraus folgt c = 5. c ist das Ergebnis der technischen Beispielregel.",
    ],
    commonErrorFeedback:
      "Wenn du mit c weitergerechnet hast, prüfe noch einmal, ob c wirklich gegeben war oder erst bestimmt werden sollte.",
    nextAction: {
      label: "Geführte Übung öffnen",
      href: "/ueben/pilot-modul/gefuehrte-uebung-alpha/",
    },
  },
  independentPractice: {
    id: "independent-practice-alpha",
    title: "Selbstständige Übung",
    prompt:
      "Wende die Regel auf zwei selbst gewählte neutrale Eingabewerte an und erkläre die drei Rollen a, b und c.",
    estimatedTime: "4 Minuten",
    difficulty: "Einstieg",
    hint: "Wähle kleine Zahlen, damit die Rollen wichtiger bleiben als die Rechnung.",
    solution: [
      "Eine mögliche Lösung ist a = 6 und b = 2.",
      "Mit a + b = c ergibt sich 6 + 2 = 8.",
      "a und b sind Eingabewerte; c = 8 ist das Ergebnis der Regel.",
    ],
    transferQuestion:
      "Wie würdest du erkennen, dass eine Aufgabe zuerst die Eingabewerte und dann das Ergebnis verlangt?",
    storageNote:
      "Diese Vorschau speichert keine Antwort, keinen Versuch und keinen Fortschritt.",
  },
  examRecognition: {
    id: "exam-recognition-alpha",
    title: "Klausurtransfer-Struktur",
    previewLabel: "Technische Vorschau der späteren Klausurerkennungsstruktur",
    recognitionCue:
      "Eine Aufgabenstellung nennt gegebene Werte und fragt nach einem Ergebnis.",
    expectedAction:
      "Gegebene Werte markieren, passende Regel notieren, Ergebnis berechnen und kurz einordnen.",
    commonTrap:
      "Nicht aus der Ergebnisvariable eine zusätzliche Eingabe machen.",
    timeManagementNote:
      "Bei einfachen Strukturaufgaben zuerst die Rollen klären, damit die Rechnung nicht unnötig wiederholt wird.",
    provenanceStatus:
      "Originale technische Fixture-Struktur, keine echte Klausurbehauptung.",
  },
  selfCheckItems: [
    {
      id: "self-check-components",
      text: "Ich kann die Bestandteile des abstrakten Beispiels benennen.",
    },
    {
      id: "self-check-rule",
      text: "Ich kann die Regel ohne Anleitung anwenden.",
    },
    {
      id: "self-check-mistake",
      text: "Ich erkenne den dargestellten Denkfehler.",
    },
  ],
  reviewPrompts: [
    {
      id: "review-input-output",
      prompt: "Erkläre den Unterschied zwischen Eingabe und Ergebnis.",
      eligibleForFutureReview: true,
    },
    {
      id: "review-rule",
      prompt: "Beschreibe die Beispielregel ohne auf die Formel zu schauen.",
      eligibleForFutureReview: true,
    },
    {
      id: "review-common-error",
      prompt: "Nenne den häufigsten Fehler im Ablauf.",
      eligibleForFutureReview: true,
    },
  ],
  sourceSummary: {
    id: "source-summary-alpha",
    fixtureWarning:
      "Diese Seite enthält ausschließlich neutrale technische Beispieldaten zur Prüfung der Seitengestaltung. Sie ist kein Lerninhalt.",
    contentState: "structurally-complete",
    reviewState: "in-review",
    lastReviewedDate: "2026-06-18",
    sourceVerificationState: "unverified",
    exerciseProvenanceState: "original",
    notes: [
      "Keine akademische Quelle ist erforderlich, weil keine akademische Aussage gemacht wird.",
      "Formel, Definition und Übungen sind technische Fixture-Elemente.",
      "Reale Inhalte dürfen diese Fixture erst ersetzen, wenn Quellen, Formeln und Lösungen geprüft sind.",
    ],
  },
  nextTopic: {
    id: "topic-beta",
    title: "Beispielthema Beta",
    state: "planned",
    explanation:
      "Geplant, aber noch nicht als sinnvolles Fixture-Ziel verfügbar.",
  },
  recommendedNextAction: {
    label: "Geführte Übung bearbeiten",
    href: "/ueben/pilot-modul/gefuehrte-uebung-alpha/",
    explanation:
      "Nach der Erklärung ist die geführte Übung der nächste sinnvolle Schritt.",
  },
  secondaryAction: {
    label: "Zum Lernpfad",
    href: "/lernen/pilot-modul/#lernpfad",
  },
  errorReportRoute: "/fehler-melden/",
};

export function isStableSectionId(id: string): boolean {
  return ASCII_ID_PATTERN.test(id);
}

export function buildTopicTableOfContents(
  topic: TopicPageViewModel,
): TopicTableOfContentsEntry[] {
  const entries: TopicTableOfContentsEntry[] = [
    { id: "lernziele", label: "Lernziele" },
    { id: "voraussetzungen", label: "Vorwissen" },
    { id: "intuition", label: "Intuition" },
    { id: "erklaerung", label: "Erklärung" },
  ];

  if (topic.definitions.length > 0 || topic.formulas.length > 0) {
    entries.push({ id: "formale-struktur", label: "Formale Struktur" });
  }

  if (topic.workedExamples.length > 0) {
    entries.push({ id: "beispiel", label: "Beispiel" });
  }

  entries.push(
    { id: "haeufige-fehler", label: "Häufige Fehler" },
    { id: "gefuehrte-uebung", label: "Geführte Übung" },
    { id: "selbststaendige-uebung", label: "Selbstständige Übung" },
    { id: "klausurtransfer", label: "Klausurtransfer" },
    { id: "selbstcheck", label: "Selbstcheck" },
    { id: "wiederholung", label: "Wiederholung" },
    { id: "quellen-pruefstand", label: "Quellen und Prüfstand" },
    { id: "navigation", label: "Vorheriges und nächstes Thema" },
    { id: "naechster-schritt", label: "Nächster Schritt" },
  );

  return entries.filter((entry) => isStableSectionId(entry.id));
}

pilotTopicFixture.tableOfContents =
  buildTopicTableOfContents(pilotTopicFixture);

export function getTopicContentStatePresentation(state: TopicContentState): {
  label: string;
  explanation: string;
  tone: "info" | "success" | "warning" | "note";
} {
  return topicContentStateLabels[state];
}

export function getRecommendedTopicAction(
  topic: TopicPageViewModel,
): TopicAction {
  const next = topic.nextTopic;

  if (next?.state === "available" && next.href) {
    return {
      label: `Weiter zu ${next.title}`,
      href: next.href,
      explanation: next.explanation,
    };
  }

  return topic.recommendedNextAction;
}

export function getTopicNavigation(topic: TopicPageViewModel): {
  previous: TopicNeighbor | undefined;
  next: TopicNeighbor | undefined;
  backToModule: TopicAction;
} {
  return {
    previous: topic.previousTopic,
    next: topic.nextTopic,
    backToModule: {
      label: "Zurück zu Pilotmodul A",
      href: `/lernen/${topic.moduleSlug}/`,
    },
  };
}

export function validateMandatoryTopicSections(
  topic: TopicPageViewModel,
): boolean {
  const ids = new Set(topic.tableOfContents.map((entry) => entry.id));

  return mandatoryTopicSectionIds.every((id) => ids.has(id));
}

export function validateTopicPageViewModel(topic: TopicPageViewModel): boolean {
  return Boolean(
    topic.topicId === "topic-alpha" &&
    topic.moduleId === "pilot-module" &&
    topic.moduleVersionId === "pilot-module-version-alpha" &&
    topic.slug === "beispielthema-alpha" &&
    topic.learningObjectives.length > 0 &&
    topic.prerequisites.length > 0 &&
    topic.intuitiveIntroduction.length >= 2 &&
    topic.coreExplanationSections.length > 0 &&
    (topic.definitions.length > 0 || topic.formulas.length > 0) &&
    topic.workedExamples.length > 0 &&
    topic.commonMistakes.length >= 2 &&
    topic.selfCheckItems.length > 0 &&
    topic.reviewPrompts.length > 0 &&
    topic.sourceSummary.contentState === topic.contentState &&
    topic.contentState !== "published" &&
    validateMandatoryTopicSections(topic),
  );
}
