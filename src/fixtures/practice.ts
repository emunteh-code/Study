export type PracticeContentState =
  | "planned"
  | "drafting"
  | "structurally-complete"
  | "source-checked"
  | "exercise-checked"
  | "published"
  | "archived";
export type PracticePublicationState =
  | "hidden"
  | "listed"
  | "public"
  | "withdrawn";
export type PracticeReviewState =
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
export type QuestionDifficulty =
  | "introductory"
  | "standard"
  | "advanced"
  | "exam-transfer";
export type QuestionType =
  | "single-choice"
  | "multiple-choice"
  | "numeric-response"
  | "short-text"
  | "structured-calculation"
  | "ordering"
  | "matching"
  | "graph-interpretation"
  | "open-response";
export type PracticeMode =
  | "guided-practice"
  | "topic-practice"
  | "mixed-practice"
  | "timed-exam-practice"
  | "mistake-review"
  | "due-review";
export type PracticeAvailability = "available" | "planned" | "archived";

export interface PracticeAction {
  label: string;
  href: string;
  explanation?: string;
}

export interface PracticeObjective {
  id: string;
  statement: string;
}

export interface PracticeChoice {
  id: string;
  label: string;
  explanation: string;
  isExpected: boolean;
}

export interface PracticeDataItem {
  label: string;
  value: string;
}

export interface SymbolDefinition {
  symbol: string;
  meaning: string;
}

export interface SolutionStep {
  id: string;
  label: string;
  text: string;
}

export interface CommonMistakeFeedback {
  id: string;
  mistake: string;
  whyItFails: string;
  correctiveAction: string;
}

export interface QuestionSolution {
  method: string;
  steps: SolutionStep[];
  intermediateResults: string[];
  finalAnswer: string;
  reasoning: string;
  interpretation: string;
  commonWrongMethod: string;
  whyWrongMethodFails: string;
  transferNote?: string;
  expectedCorePoints?: string[];
  acceptableVariations?: string[];
  commonOmissions?: string[];
}

export interface PracticeQuestionViewModel {
  id: string;
  practiceSetId: string;
  moduleId: string;
  topicId: string;
  objectiveIds: string[];
  label: string;
  questionType: QuestionType;
  difficulty: QuestionDifficulty;
  estimatedTime: string;
  provenance: ExerciseProvenanceState;
  sourceVerificationState: SourceVerificationState;
  prompt: string;
  context: string[];
  dataProvided: PracticeDataItem[];
  answerInstructions: string;
  choices?: PracticeChoice[];
  hints: { id: string; label: string; text: string }[];
  solution: QuestionSolution;
  feedbackExplanations: string[];
  transferPrompt: string;
  reviewEligible: boolean;
  publicationState: PracticePublicationState;
  contentState: PracticeContentState;
  reviewState: PracticeReviewState;
  nextAction: PracticeAction;
  tolerance?: string;
  expectedUnit?: string;
  symbols?: SymbolDefinition[];
  position?: number;
}

export interface PracticeSetViewModel {
  id: string;
  slug: string;
  moduleId: string;
  moduleSlug: string;
  moduleTitle: string;
  topicScope: string[];
  topicTitle: string;
  title: string;
  summary: string;
  practiceMode: PracticeMode;
  estimatedDuration: string;
  questionCount: number;
  difficultyDistribution: Partial<Record<QuestionDifficulty, number>>;
  provenanceSummary: Partial<Record<ExerciseProvenanceState, number>>;
  questions: PracticeQuestionViewModel[];
  questionOrder: string[];
  instructions: string[];
  completionGuidance: string;
  nextRecommendedAction: PracticeAction;
  publicationState: PracticePublicationState;
  contentState: PracticeContentState;
  reviewState: PracticeReviewState;
  sourceVerificationState: SourceVerificationState;
}

export interface PracticeOverviewOption {
  id: string;
  title: string;
  status: PracticeAvailability;
  description: string;
  action?: PracticeAction;
}

export interface PracticeOverviewViewModel {
  moduleId: string;
  moduleSlug: string;
  moduleTitle: string;
  title: string;
  summary: string;
  fixtureNotice: string;
  provenanceExplanation: string;
  recommendedFirstPractice: PracticeAction;
  moduleLearningPathAction: PracticeAction;
  methodologyAction: PracticeAction;
  errorReportAction: PracticeAction;
  options: PracticeOverviewOption[];
}

export const questionTypeLabels: Record<QuestionType, string> = {
  "single-choice": "Single Choice",
  "multiple-choice": "Multiple Choice",
  "numeric-response": "Numerische Antwort",
  "short-text": "Kurztext",
  "structured-calculation": "Strukturierte Rechnung",
  ordering: "Reihenfolge",
  matching: "Zuordnung",
  "graph-interpretation": "Graphinterpretation",
  "open-response": "Offene Antwort",
};

export const difficultyLabels: Record<QuestionDifficulty, string> = {
  introductory: "Einstieg",
  standard: "Standard",
  advanced: "Fortgeschritten",
  "exam-transfer": "Transfer",
};

export const practiceModeLabels: Record<PracticeMode, string> = {
  "guided-practice": "Geführte Übung",
  "topic-practice": "Themenübung",
  "mixed-practice": "Gemischte Übung",
  "timed-exam-practice": "Zeittraining",
  "mistake-review": "Fehlerwiederholung",
  "due-review": "Fällige Wiederholung",
};

export const provenanceLabels: Record<ExerciseProvenanceState, string> = {
  official: "Offiziell",
  adapted: "Angepasst",
  original: "Original",
};

export const sourceVerificationLabels: Record<SourceVerificationState, string> =
  {
    unverified: "Ungeprüft",
    located: "Gefunden",
    checked: "Geprüft",
    superseded: "Ersetzt",
  };

export const contentStateLabels: Record<PracticeContentState, string> = {
  planned: "Geplant",
  drafting: "In Bearbeitung",
  "structurally-complete": "Strukturell vollständig",
  "source-checked": "Quellen geprüft",
  "exercise-checked": "Übungen geprüft",
  published: "Veröffentlicht",
  archived: "Archiviert",
};

export const reviewStateLabels: Record<PracticeReviewState, string> = {
  "not-reviewed": "Nicht geprüft",
  "in-review": "In Prüfung",
  "changes-requested": "Änderungen angefordert",
  approved: "Freigegeben",
  expired: "Prüfung veraltet",
};

export const supportedQuestionTypes: QuestionType[] = [
  "single-choice",
  "multiple-choice",
  "numeric-response",
  "short-text",
  "structured-calculation",
  "ordering",
  "matching",
  "graph-interpretation",
  "open-response",
];

const guidedQuestions: PracticeQuestionViewModel[] = [
  {
    id: "question-alpha-01",
    practiceSetId: "guided-practice-alpha",
    moduleId: "pilot-module",
    topicId: "topic-alpha",
    objectiveIds: ["objective-alpha-01"],
    label: "Frage Alpha 01",
    questionType: "single-choice",
    difficulty: "introductory",
    estimatedTime: "4 Minuten",
    provenance: "original",
    sourceVerificationState: "unverified",
    prompt:
      "Welche Beschreibung passt am besten zu einem Ablauf, bei dem zuerst zwei Eingaben benannt und danach ein Ergebnis bestimmt wird?",
    context: [
      "Diese Aufgabe ist eine technische Klassifikationsfrage ohne fachliche Bedeutung.",
      "Es wird keine Auswahl gespeichert und keine Antwort automatisch geprüft.",
    ],
    dataProvided: [
      { label: "Schritt 1", value: "Eingabe A benennen" },
      { label: "Schritt 2", value: "Eingabe B benennen" },
      { label: "Schritt 3", value: "Ergebnis C bestimmen" },
    ],
    answerInstructions:
      "Wähle auf Papier die passendste Option und öffne danach bei Bedarf Hinweise oder die vollständige Lösung.",
    choices: [
      {
        id: "choice-alpha-01-a",
        label: "Ein geordneter Drei-Schritt-Ablauf",
        explanation:
          "Diese Option passt, weil die Eingaben vor dem Ergebnis geklärt werden.",
        isExpected: true,
      },
      {
        id: "choice-alpha-01-b",
        label: "Ein Ergebnis ohne vorherige Eingaben",
        explanation:
          "Diese Option passt nicht, weil die Eingaben im Ablauf ausdrücklich genannt werden.",
        isExpected: false,
      },
      {
        id: "choice-alpha-01-c",
        label: "Eine Wiederholung ohne neues Ergebnis",
        explanation:
          "Diese Option passt nicht, weil der Ablauf auf ein bestimmtes Ergebnis zielt.",
        isExpected: false,
      },
    ],
    hints: [
      {
        id: "hint-alpha-01-01",
        label: "Hinweis 1 öffnen",
        text: "Achte darauf, ob zuerst Voraussetzungen geklärt werden.",
      },
      {
        id: "hint-alpha-01-02",
        label: "Hinweis 2 öffnen",
        text: "Die passendste Option beschreibt die Reihenfolge der Schritte, nicht nur das Ergebnis.",
      },
    ],
    solution: {
      method: "Ablaufbestandteile vergleichen",
      steps: [
        {
          id: "solution-alpha-01-step-01",
          label: "Eingaben prüfen",
          text: "Der Ablauf nennt zwei Eingaben vor dem Ergebnis.",
        },
        {
          id: "solution-alpha-01-step-02",
          label: "Ziel prüfen",
          text: "Das Ziel ist ein Ergebnis C, das erst nach den Eingaben bestimmt wird.",
        },
        {
          id: "solution-alpha-01-step-03",
          label: "Optionen vergleichen",
          text: "Nur die erste Option beschreibt diese geordnete Struktur vollständig.",
        },
      ],
      intermediateResults: ["Eingaben: A und B", "Gesuchtes Ergebnis: C"],
      finalAnswer: "Passend ist: Ein geordneter Drei-Schritt-Ablauf.",
      reasoning:
        "Die erwartete Antwort benennt die Struktur des Prompts, ohne zusätzliche fachliche Annahmen einzuführen.",
      interpretation:
        "Die Aufgabe prüft, ob du eine neutrale Aufgabenstruktur einordnen kannst.",
      commonWrongMethod:
        "Nur auf das Wort Ergebnis achten und die Eingaben ignorieren.",
      whyWrongMethodFails:
        "Dann geht verloren, dass die Aufgabe ausdrücklich eine Reihenfolge vorgibt.",
      transferNote:
        "Übertrage die Methode später, indem du zuerst gegebene Elemente und gesuchte Elemente markierst.",
    },
    feedbackExplanations: [
      "Die vollständige Lösung verwendet die Reihenfolge der Angaben.",
      "Ein häufiger Fehler ist, nur die letzte Zeile der Aufgabe zu lesen.",
    ],
    transferPrompt:
      "Wie würdest du in einer neuen Aufgabe markieren, was gegeben und was gesucht ist?",
    reviewEligible: true,
    publicationState: "listed",
    contentState: "structurally-complete",
    reviewState: "in-review",
    nextAction: {
      label: "Weiter zu Frage Alpha 02",
      href: "/ueben/pilot-modul/gefuehrte-uebung-alpha/#question-alpha-02",
    },
    position: 1,
  },
  {
    id: "question-alpha-02",
    practiceSetId: "guided-practice-alpha",
    moduleId: "pilot-module",
    topicId: "topic-alpha",
    objectiveIds: ["objective-alpha-02"],
    label: "Frage Alpha 02",
    questionType: "structured-calculation",
    difficulty: "introductory",
    estimatedTime: "6 Minuten",
    provenance: "original",
    sourceVerificationState: "unverified",
    prompt:
      "Bestimme mit der neutralen Regel a + b = c den Wert c für a = 4 und b = 3.",
    context: [
      "Diese Aufgabe demonstriert eine strukturierte Rechnung mit definierten Symbolen.",
      "Alle Werte sind technische Fixture-Werte.",
    ],
    dataProvided: [
      { label: "a", value: "4" },
      { label: "b", value: "3" },
      { label: "Regel", value: "a + b = c" },
    ],
    answerInstructions:
      "Notiere zuerst die gegebenen Werte, dann die Regel, dann die Einsetzung und zuletzt die Interpretation.",
    symbols: [
      { symbol: "a", meaning: "erster neutraler Eingabewert" },
      { symbol: "b", meaning: "zweiter neutraler Eingabewert" },
      { symbol: "c", meaning: "Ergebnis der neutralen Beispielregel" },
    ],
    hints: [
      {
        id: "hint-alpha-02-01",
        label: "Hinweis 1 öffnen",
        text: "Beginne mit einer Zeile für die gegebenen Werte.",
      },
      {
        id: "hint-alpha-02-02",
        label: "Hinweis 2 öffnen",
        text: "Nach dem Einsetzen steht 4 + 3 = c.",
      },
    ],
    solution: {
      method: "Gegebene Werte, Regel, Einsetzung, Rechnung, Deutung",
      steps: [
        {
          id: "solution-alpha-02-step-01",
          label: "Gegebene Werte",
          text: "Gegeben sind a = 4 und b = 3.",
        },
        {
          id: "solution-alpha-02-step-02",
          label: "Regel wählen",
          text: "Die technische Regel lautet a + b = c.",
        },
        {
          id: "solution-alpha-02-step-03",
          label: "Einsetzen",
          text: "Setze die Werte ein: 4 + 3 = c.",
        },
        {
          id: "solution-alpha-02-step-04",
          label: "Rechnen",
          text: "4 + 3 = 7, also c = 7.",
        },
        {
          id: "solution-alpha-02-step-05",
          label: "Interpretieren",
          text: "c ist das Ergebnis der neutralen Beispielregel.",
        },
      ],
      intermediateResults: ["4 + 3 = c", "7 = c"],
      finalAnswer: "c = 7",
      reasoning:
        "Die Rechnung folgt direkt aus der angegebenen neutralen Regel und den bereitgestellten Werten.",
      interpretation: "Der Wert 7 ist ein technisches Ergebnis ohne Fachbezug.",
      commonWrongMethod: "c als gegeben behandeln und zusätzlich einsetzen.",
      whyWrongMethodFails:
        "c ist in dieser Aufgabe gesucht. Es darf nicht als weiterer Eingabewert verwendet werden.",
      transferNote:
        "Bei späteren Aufgaben zuerst klären, welche Symbole gegeben und welche gesucht sind.",
    },
    feedbackExplanations: [
      "Ein häufiger Fehler ist, die Rollen der Symbole nicht sichtbar zu notieren.",
      "Prüfe, ob alle angezeigten Symbole in deiner Lösung definiert sind.",
    ],
    transferPrompt:
      "Welche Zeile deiner Lösung zeigt eindeutig, welche Regel du verwendet hast?",
    reviewEligible: true,
    publicationState: "listed",
    contentState: "structurally-complete",
    reviewState: "in-review",
    nextAction: {
      label: "Übung abschließen",
      href: "/ueben/pilot-modul/gefuehrte-uebung-alpha/#abschluss",
    },
    position: 2,
  },
];

const topicPracticeQuestions: PracticeQuestionViewModel[] = [
  {
    id: "question-alpha-03",
    practiceSetId: "topic-practice-alpha",
    moduleId: "pilot-module",
    topicId: "topic-alpha",
    objectiveIds: ["objective-alpha-02"],
    label: "Frage Alpha 03",
    questionType: "numeric-response",
    difficulty: "standard",
    estimatedTime: "4 Minuten",
    provenance: "original",
    sourceVerificationState: "unverified",
    prompt: "Berechne den neutralen Ausgabewert c, wenn a = 8 und b = 5 gilt.",
    context: ["Nutze dieselbe neutrale Regel wie im Beispielthema."],
    dataProvided: [
      { label: "a", value: "8" },
      { label: "b", value: "5" },
      { label: "Regel", value: "a + b = c" },
    ],
    answerInstructions:
      "Bearbeite die Aufgabe auf Papier. Es gibt kein Eingabefeld, keine Validierung und keine gespeicherte Antwort.",
    expectedUnit: "neutrale Einheiten",
    tolerance: "Keine Toleranz erforderlich, da ganzzahlige Fixture-Rechnung.",
    symbols: [
      { symbol: "a", meaning: "erster neutraler Eingabewert" },
      { symbol: "b", meaning: "zweiter neutraler Eingabewert" },
      { symbol: "c", meaning: "neutraler Ausgabewert" },
    ],
    hints: [
      {
        id: "hint-alpha-03-01",
        label: "Hinweis 1 öffnen",
        text: "Setze zuerst beide Werte in die Regel ein.",
      },
      {
        id: "hint-alpha-03-02",
        label: "Hinweis 2 öffnen",
        text: "Die Zwischenzeile lautet 8 + 5 = c.",
      },
    ],
    solution: {
      method: "Einfache Einsetzung",
      steps: [
        {
          id: "solution-alpha-03-step-01",
          label: "Regel notieren",
          text: "a + b = c.",
        },
        {
          id: "solution-alpha-03-step-02",
          label: "Werte einsetzen",
          text: "8 + 5 = c.",
        },
        {
          id: "solution-alpha-03-step-03",
          label: "Berechnen",
          text: "8 + 5 = 13.",
        },
      ],
      intermediateResults: ["8 + 5 = c"],
      finalAnswer: "c = 13 neutrale Einheiten",
      reasoning: "Die verlangte Ausgabe entsteht durch Addition der Eingaben.",
      interpretation:
        "Das Ergebnis ist nur ein neutraler Ausgabewert der technischen Vorschau.",
      commonWrongMethod: "Nur einen Eingabewert übernehmen.",
      whyWrongMethodFails:
        "Die Regel verlangt beide Eingabewerte. Eine einzelne Zahl erfüllt die Aufgabe nicht.",
    },
    feedbackExplanations: [
      "Prüfe, ob du beide bereitgestellten Werte verwendet hast.",
      "Die vollständige Lösung zeigt eine Zwischenzeile vor dem Ergebnis.",
    ],
    transferPrompt:
      "Wie würdest du deine Lösung prüfen, wenn größere Zahlen gegeben wären?",
    reviewEligible: true,
    publicationState: "listed",
    contentState: "structurally-complete",
    reviewState: "in-review",
    nextAction: {
      label: "Weiter zu Frage Alpha 04",
      href: "/ueben/pilot-modul/themenuebung-alpha/#question-alpha-04",
    },
    position: 1,
  },
  {
    id: "question-alpha-04",
    practiceSetId: "topic-practice-alpha",
    moduleId: "pilot-module",
    topicId: "topic-alpha",
    objectiveIds: ["objective-alpha-03"],
    label: "Frage Alpha 04",
    questionType: "open-response",
    difficulty: "standard",
    estimatedTime: "5 Minuten",
    provenance: "original",
    sourceVerificationState: "unverified",
    prompt:
      "Erkläre kurz, warum es hilfreich ist, gegebene Werte und gesuchte Werte vor dem Rechnen zu trennen.",
    context: [
      "Diese offene Antwort wird nicht automatisch bewertet.",
      "Vergleiche deine Erklärung nach dem Bearbeiten mit der Musterantwort.",
    ],
    dataProvided: [],
    answerInstructions:
      "Schreibe zwei bis drei Sätze auf Papier und prüfe danach die Musterlösung.",
    hints: [
      {
        id: "hint-alpha-04-01",
        label: "Hinweis 1 öffnen",
        text: "Denke an die Rollen von a, b und c.",
      },
      {
        id: "hint-alpha-04-02",
        label: "Hinweis 2 öffnen",
        text: "Eine gute Antwort nennt Klarheit, Fehlervermeidung und den nächsten Rechenschritt.",
      },
    ],
    solution: {
      method: "Begründung mit Kernpunkten",
      steps: [
        {
          id: "solution-alpha-04-step-01",
          label: "Kernpunkt bestimmen",
          text: "Gegebene Werte sind der Startpunkt, gesuchte Werte sind das Ziel.",
        },
        {
          id: "solution-alpha-04-step-02",
          label: "Nutzen erklären",
          text: "Die Trennung macht sichtbar, welche Regel angewendet werden muss.",
        },
      ],
      intermediateResults: ["Gegeben: a und b", "Gesucht: c"],
      finalAnswer:
        "Die Trennung verhindert, dass gesuchte Werte wie Eingaben behandelt werden.",
      reasoning:
        "Eine klare Rollenverteilung reduziert Rechenfehler und macht die Methode prüfbar.",
      interpretation:
        "Die Antwort ist qualitativ; wichtig sind die genannten Kernpunkte, nicht ein fester Wortlaut.",
      commonWrongMethod: "Nur sagen, dass die Rechnung dadurch schneller wird.",
      whyWrongMethodFails:
        "Schnelligkeit allein erklärt nicht, warum die Lösung methodisch nachvollziehbar wird.",
      expectedCorePoints: [
        "Gegebene Werte und gesuchte Werte haben unterschiedliche Rollen.",
        "Die Trennung hilft, die passende Regel anzuwenden.",
        "Die Trennung macht Fehler leichter erkennbar.",
      ],
      acceptableVariations: [
        "Andere Formulierungen sind möglich, wenn die Rollen und der Nutzen klar bleiben.",
      ],
      commonOmissions: [
        "Die gesuchte Größe wird nicht genannt.",
        "Der Nutzen für die Fehlerprüfung fehlt.",
      ],
    },
    feedbackExplanations: [
      "Prüfe, ob deine Antwort sowohl die Rollen als auch den Nutzen benennt.",
      "Ein häufiger Fehler ist eine reine Rechenbeschreibung ohne Begründung.",
    ],
    transferPrompt:
      "Welche Signalwörter helfen dir später, gegebene und gesuchte Werte zu unterscheiden?",
    reviewEligible: true,
    publicationState: "listed",
    contentState: "structurally-complete",
    reviewState: "in-review",
    nextAction: {
      label: "Übung abschließen",
      href: "/ueben/pilot-modul/themenuebung-alpha/#abschluss",
    },
    position: 2,
  },
];

export const guidedPracticeSet: PracticeSetViewModel = {
  id: "guided-practice-alpha",
  slug: "gefuehrte-uebung-alpha",
  moduleId: "pilot-module",
  moduleSlug: "pilot-modul",
  moduleTitle: "Pilotmodul A",
  topicScope: ["topic-alpha"],
  topicTitle: "Beispielthema Alpha",
  title: "Geführte Übung Alpha",
  summary:
    "Bearbeite technische Beispielaufgaben mit progressiven Hinweisen und vollständigen Lösungen.",
  practiceMode: "guided-practice",
  estimatedDuration: "10 Minuten",
  questionCount: guidedQuestions.length,
  difficultyDistribution: { introductory: 2 },
  provenanceSummary: { original: guidedQuestions.length },
  questions: guidedQuestions,
  questionOrder: guidedQuestions.map((question) => question.id),
  instructions: [
    "Lies zuerst die Aufgabenstellung und die verknüpften Lernziele.",
    "Bearbeite die Frage auf Papier oder im Kopf.",
    "Öffne Hinweise nur bei Bedarf und die vollständige Lösung erst danach.",
    "Vergleiche deine Methode mit der erwarteten Methode.",
  ],
  completionGuidance:
    "Du hast das Ende dieser technischen Übungsvorschau erreicht.",
  nextRecommendedAction: {
    label: "Themenübung Alpha öffnen",
    href: "/ueben/pilot-modul/themenuebung-alpha/",
    explanation:
      "Nach der geführten Vorschau ist die unabhängigere Themenübung der nächste statische Schritt.",
  },
  publicationState: "listed",
  contentState: "structurally-complete",
  reviewState: "in-review",
  sourceVerificationState: "unverified",
};

export const topicPracticeSet: PracticeSetViewModel = {
  id: "topic-practice-alpha",
  slug: "themenuebung-alpha",
  moduleId: "pilot-module",
  moduleSlug: "pilot-modul",
  moduleTitle: "Pilotmodul A",
  topicScope: ["topic-alpha"],
  topicTitle: "Beispielthema Alpha",
  title: "Themenübung Alpha",
  summary:
    "Bearbeite neutrale Aufgaben zunächst ohne schrittweise Führung und prüfe anschließend die Lösung.",
  practiceMode: "topic-practice",
  estimatedDuration: "9 Minuten",
  questionCount: topicPracticeQuestions.length,
  difficultyDistribution: { standard: 2 },
  provenanceSummary: { original: topicPracticeQuestions.length },
  questions: topicPracticeQuestions,
  questionOrder: topicPracticeQuestions.map((question) => question.id),
  instructions: [
    "Bearbeite die Aufgaben zunächst ohne Hinweise.",
    "Nutze Hinweise nur, wenn du nicht weiterkommst.",
    "Die Musterlösung erklärt Methode, Ergebnis und typische Auslassungen.",
  ],
  completionGuidance:
    "Du hast das Ende dieser technischen Übungsvorschau erreicht.",
  nextRecommendedAction: {
    label: "Zurück zum Thema",
    href: "/lernen/pilot-modul/beispielthema-alpha/",
    explanation:
      "Nach der statischen Themenübung kannst du die Erklärungen und Fehlerhinweise erneut prüfen.",
  },
  publicationState: "listed",
  contentState: "structurally-complete",
  reviewState: "in-review",
  sourceVerificationState: "unverified",
};

export const practiceSets = [guidedPracticeSet, topicPracticeSet] as const;

export const practiceOverviewFixture: PracticeOverviewViewModel = {
  moduleId: "pilot-module",
  moduleSlug: "pilot-modul",
  moduleTitle: "Pilotmodul A",
  title: "Üben in Pilotmodul A",
  summary:
    "Technische Vorschau für statische Übungssets mit Hinweisen, Lösungen und Provenienzangaben.",
  fixtureNotice:
    "Diese Übungsseiten enthalten nur neutrale technische Originalaufgaben für die Interface-Vorschau. Es sind keine offiziellen Kurs- oder Klausuraufgaben.",
  provenanceExplanation:
    "Alle verfügbaren Fixture-Aufgaben sind als Original gekennzeichnet, ungeprüft und nicht als akademisches Material veröffentlicht.",
  recommendedFirstPractice: {
    label: "Geführte Übung öffnen",
    href: "/ueben/pilot-modul/gefuehrte-uebung-alpha/",
  },
  moduleLearningPathAction: {
    label: "Zurück zum Lernpfad",
    href: "/lernen/pilot-modul/",
  },
  methodologyAction: {
    label: "Methodik ansehen",
    href: "/methodik/",
  },
  errorReportAction: {
    label: "Fehler melden",
    href: "/fehler-melden/",
  },
  options: [
    {
      id: "guided-practice-alpha",
      title: "Geführte Übung Alpha",
      status: "available",
      description:
        "Bearbeite eine technische Beispielaufgabe mit schrittweisen Hinweisen und vollständiger Lösung.",
      action: {
        label: "Geführte Übung öffnen",
        href: "/ueben/pilot-modul/gefuehrte-uebung-alpha/",
      },
    },
    {
      id: "topic-practice-alpha",
      title: "Themenübung Alpha",
      status: "available",
      description:
        "Bearbeite neutrale Aufgaben zunächst ohne schrittweise Führung.",
      action: {
        label: "Themenübung öffnen",
        href: "/ueben/pilot-modul/themenuebung-alpha/",
      },
    },
    {
      id: "mixed-practice-alpha",
      title: "Gemischte Übung",
      status: "planned",
      description: "Mehrere Fragetypen aus verschiedenen Themenbereichen.",
    },
    {
      id: "timed-practice-alpha",
      title: "Zeittraining",
      status: "planned",
      description: "Bearbeitung unter einer festgelegten Zeitgrenze.",
    },
  ],
};

export function getPracticeSetBySlug(
  slug: string,
): PracticeSetViewModel | undefined {
  return practiceSets.find((set) => set.slug === slug);
}

export function getQuestionPosition(
  set: PracticeSetViewModel,
  questionId: string,
): number {
  return set.questionOrder.indexOf(questionId) + 1;
}

export function getAdjacentQuestionActions(
  set: PracticeSetViewModel,
  questionId: string,
): {
  previous: PracticeAction | undefined;
  next: PracticeAction | undefined;
} {
  const index = set.questionOrder.indexOf(questionId);
  const previousId = index > 0 ? set.questionOrder[index - 1] : undefined;
  const nextId =
    index >= 0 && index < set.questionOrder.length - 1
      ? set.questionOrder[index + 1]
      : undefined;

  return {
    previous: previousId
      ? {
          label: "Vorherige Frage",
          href: `/ueben/${set.moduleSlug}/${set.slug}/#${previousId}`,
        }
      : undefined,
    next: nextId
      ? {
          label: "Nächste Frage",
          href: `/ueben/${set.moduleSlug}/${set.slug}/#${nextId}`,
        }
      : undefined,
  };
}

export function getPracticeSetDurationMinutes(
  set: PracticeSetViewModel,
): number {
  return set.questions.reduce((total, question) => {
    const minutes = Number.parseInt(question.estimatedTime, 10);
    return total + (Number.isNaN(minutes) ? 0 : minutes);
  }, 0);
}

export function deriveQuestionCount(set: PracticeSetViewModel): number {
  return set.questionOrder.length;
}

export function isSupportedQuestionType(type: string): type is QuestionType {
  return supportedQuestionTypes.includes(type as QuestionType);
}

export function getRecommendedPracticeAction(
  set: PracticeSetViewModel,
): PracticeAction {
  if (
    set.nextRecommendedAction.href.includes("planned") ||
    set.contentState === "planned" ||
    set.contentState === "archived"
  ) {
    return {
      label: "Weitere Übungsarten ansehen",
      href: "/ueben/pilot-modul/",
    };
  }

  return set.nextRecommendedAction;
}

export function validateCompleteSolution(
  question: PracticeQuestionViewModel,
): boolean {
  return Boolean(
    question.solution.method &&
    question.solution.steps.length > 0 &&
    question.solution.finalAnswer &&
    question.solution.reasoning &&
    question.solution.interpretation &&
    question.solution.commonWrongMethod &&
    question.solution.whyWrongMethodFails,
  );
}

export function validateHintOrdering(
  question: PracticeQuestionViewModel,
): boolean {
  return question.hints.every((hint, index) =>
    hint.label.startsWith(`Hinweis ${index + 1}`),
  );
}

export function validateStructuredCalculationSymbols(
  question: PracticeQuestionViewModel,
): boolean {
  if (question.questionType !== "structured-calculation") {
    return true;
  }

  const expressionSymbols = new Set(
    question.dataProvided.flatMap((item) =>
      item.label.length === 1
        ? [item.label]
        : Array.from(item.value.matchAll(/\b[a-z]\b/g), (match) => match[0]),
    ),
  );
  const definedSymbols = new Set(
    question.symbols?.map((symbol) => symbol.symbol) ?? [],
  );

  return Array.from(expressionSymbols).every((symbol) =>
    definedSymbols.has(symbol),
  );
}

export function validatePracticeQuestion(
  question: PracticeQuestionViewModel,
): boolean {
  return Boolean(
    question.id &&
    question.practiceSetId &&
    question.moduleId === "pilot-module" &&
    question.topicId === "topic-alpha" &&
    isSupportedQuestionType(question.questionType) &&
    question.provenance === "original" &&
    question.sourceVerificationState === "unverified" &&
    validateCompleteSolution(question) &&
    validateHintOrdering(question) &&
    validateStructuredCalculationSymbols(question),
  );
}

export function validatePracticeSet(set: PracticeSetViewModel): boolean {
  return Boolean(
    set.id &&
    set.moduleId === "pilot-module" &&
    set.topicScope.includes("topic-alpha") &&
    set.questionCount === deriveQuestionCount(set) &&
    set.questions.length === set.questionOrder.length &&
    set.questionOrder.every((id) =>
      set.questions.some((question) => question.id === id),
    ) &&
    set.questions.every(validatePracticeQuestion),
  );
}
