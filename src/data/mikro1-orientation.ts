import {
  approvedMikro1PreferenceExerciseIds,
  type Mikro1PreferenceExerciseId,
} from "../lib/mikro1-preferences-practice";
import {
  authorizedMikro1SubstitutionExerciseIds,
  type Mikro1SubstitutionExerciseId,
} from "../lib/mikro1-substitution-practice";
import {
  validateMikro1TopicOrientation,
  type Mikro1TopicOrientation,
} from "../lib/mikro1-orientation";

export const mikro1PreferenceOrientation = {
  id: "preferences",
  title: "Präferenzrelationen",
  shortIntroduction:
    "Dieser Einstieg ordnet die vorhandenen Übungen zu Präferenzrelationen ein. Er ersetzt keine vollständige Lektion, sondern macht sichtbar, welche Begriffe und Axiome im Übungsset geprüft werden.",
  prerequisites: [
    "Du solltest mit einfachen Aussagen über Alternativen wie x, y und z arbeiten können.",
    "Du brauchst noch keine Nutzenfunktion, Budgetgerade oder Optimierungsrechnung.",
  ],
  notationAndTerminology: [
    "Die schwache Präferenzrelation ist die primitive Relation in diesem Übungsset.",
    "Strikte Präferenz und Indifferenz werden aus der schwachen Präferenzrelation gelesen.",
    "Vollständigkeit und Transitivität sind Axiome auf der Relation; sie gelten nicht automatisch für jede Relation.",
  ],
  workflow: {
    before:
      "Beginne, wenn du gerichtete Vergleiche wie x ≽ y von der Gegenrichtung y ≽ x unterscheiden kannst.",
    during:
      "Bearbeite strukturierte Aufgaben über die Antwortfelder. Bei Selbstkontrollaufgaben formulierst du zuerst selbst, bevor du die Vergleichshinweise öffnest.",
    after:
      "Abgeschlossen bedeutet hier bearbeitet oder mit Modellhinweisen verglichen, nicht richtig, bewertet oder gemeistert.",
  },
  nextStep:
    "Wenn du die Relationen sicher klassifizierst, fahre mit Substitutionselastizität und homothetischen Nutzenfunktionen fort.",
  sourceReferences: [
    {
      id: "pref-claims",
      title: "Mikroökonomik I Preferences Claim Evidence Pack",
      path: "docs/content-audits/mikro1-preferences-claims.md",
      status: "source-backed",
    },
    {
      id: "pref-outline",
      title: "Mikroökonomik I Preference Relations Outline",
      path: "docs/content-audits/mikro1-preferences-outline.md",
      status: "source-backed",
    },
    {
      id: "pref-implementation-spec",
      title: "Preference practice implementation specification",
      path: "docs/content-audits/mikro1-preferences-practice-set-01-implementation-spec.md",
      status: "implementation-spec",
    },
  ],
  learningObjectives: [
    {
      id: "pref-lo-01",
      text: "identify the direction and limits of a displayed weak-preference statement.",
      sourceReferenceIds: ["pref-claims", "pref-outline"],
    },
    {
      id: "pref-lo-02",
      text: "distinguish weak preference, strict preference, and indifference by their defining conditions.",
      sourceReferenceIds: ["pref-claims", "pref-outline"],
    },
    {
      id: "pref-lo-03",
      text: "classify small relation records for completeness, transitivity, and technical rationality.",
      sourceReferenceIds: ["pref-claims", "pref-outline"],
    },
    {
      id: "pref-lo-04",
      text: "derive why strict preference and indifference cannot both hold for the same ordered pair.",
      sourceReferenceIds: ["pref-claims", "pref-outline"],
    },
  ],
  exerciseMappings: [
    {
      objectiveId: "pref-lo-01",
      exerciseId: "pref-practice-01" satisfies Mikro1PreferenceExerciseId,
      mode: "self-review",
    },
    {
      objectiveId: "pref-lo-02",
      exerciseId: "pref-practice-02" satisfies Mikro1PreferenceExerciseId,
      mode: "deterministic",
    },
    {
      objectiveId: "pref-lo-02",
      exerciseId: "pref-practice-03" satisfies Mikro1PreferenceExerciseId,
      mode: "deterministic",
    },
    {
      objectiveId: "pref-lo-02",
      exerciseId: "pref-practice-04" satisfies Mikro1PreferenceExerciseId,
      mode: "deterministic",
    },
    {
      objectiveId: "pref-lo-03",
      exerciseId: "pref-practice-05" satisfies Mikro1PreferenceExerciseId,
      mode: "deterministic",
    },
    {
      objectiveId: "pref-lo-03",
      exerciseId: "pref-practice-06" satisfies Mikro1PreferenceExerciseId,
      mode: "deterministic",
    },
    {
      objectiveId: "pref-lo-03",
      exerciseId: "pref-practice-07" satisfies Mikro1PreferenceExerciseId,
      mode: "deterministic",
    },
    {
      objectiveId: "pref-lo-03",
      exerciseId: "pref-practice-08" satisfies Mikro1PreferenceExerciseId,
      mode: "deterministic",
    },
    {
      objectiveId: "pref-lo-03",
      exerciseId: "pref-practice-09" satisfies Mikro1PreferenceExerciseId,
      mode: "deterministic",
    },
    {
      objectiveId: "pref-lo-03",
      exerciseId: "pref-practice-10" satisfies Mikro1PreferenceExerciseId,
      mode: "deterministic",
    },
    {
      objectiveId: "pref-lo-04",
      exerciseId: "pref-practice-11" satisfies Mikro1PreferenceExerciseId,
      mode: "self-review",
    },
    {
      objectiveId: "pref-lo-04",
      exerciseId: "pref-practice-12" satisfies Mikro1PreferenceExerciseId,
      mode: "self-review",
    },
  ],
} as const satisfies Mikro1TopicOrientation;

export const mikro1SubstitutionOrientation = {
  id: "substitution",
  title: "Substitutionselastizität und homothetische Nutzenfunktionen",
  shortIntroduction:
    "Diese Orientierung beschreibt den freigegebenen Übungsumfang zu Steigung, GRS, CES-Parametern und homothetischen Darstellungen. Sie ist bewusst keine vollständige Herleitungssammlung.",
  prerequisites: [
    "Du solltest partielle Ableitungen als lokale Änderungsraten lesen können.",
    "Du solltest Brüche, einfache Dezimalzahlen und Parameter wie rho und sigma sicher unterscheiden können.",
  ],
  notationAndTerminology: [
    "Die kursbezogene GRS_12-Konvention trennt die vorzeichenbehaftete Steigung von der positiven marginalen Austauschrate.",
    "Die Relation zwischen rho und sigma wird nur im freigegebenen CES-Parameterbereich verwendet.",
    "Lineare Homogenität ist eine Eigenschaft einer Darstellung; Homothetie beschreibt die dargestellten Präferenzen.",
  ],
  workflow: {
    before:
      "Beginne nach den Präferenzrelationen, wenn du gerichtete Aussagen und Modellannahmen sorgfältig trennen kannst.",
    during:
      "Prüfe Auswahl- und Zahlenaufgaben direkt. Bei Reflexionsaufgaben formulierst du zuerst deine eigene Begründung und öffnest erst dann die Modellhinweise.",
    after:
      "Eine abgeschlossene Aufgabe zeigt Bearbeitung im freigegebenen Umfang; sie ist keine Note, kein Score und kein Nachweis vollständiger Beherrschung.",
  },
  nextStep:
    "Nach diesem Set bleiben breitere CES-Rechnung, Optimierung, Randfälle und Graphinteraktion ausdrücklich außerhalb des aktuellen Umfangs.",
  sourceReferences: [
    {
      id: "sub-claims",
      title: "Mikro I substitution claims audit",
      path: "docs/mikro1-substitution-claims-audit.md",
      status: "source-backed",
    },
    {
      id: "sub-production-spec",
      title: "Mikro I substitution production specification",
      path: "docs/mikro1-substitution-production-spec.md",
      status: "implementation-spec",
    },
    {
      id: "sub-readiness",
      title: "Mikro I substitution exercise readiness",
      path: "docs/mikro1-substitution-readiness.md",
      status: "readiness-record",
    },
  ],
  learningObjectives: [
    {
      id: "sub-lo-01",
      text: "distinguish the signed indifference-curve slope from the positive course GRS_12 convention.",
      sourceReferenceIds: ["sub-claims", "sub-production-spec"],
    },
    {
      id: "sub-lo-02",
      text: "identify the required local assumptions for the derivative-based GRS statement.",
      sourceReferenceIds: ["sub-claims", "sub-production-spec"],
    },
    {
      id: "sub-lo-03",
      text: "calculate sigma from rho and rho from finite positive sigma in the authorized CES conversion tasks.",
      sourceReferenceIds: ["sub-claims", "sub-production-spec"],
    },
    {
      id: "sub-lo-04",
      text: "explain the difference between degree-one homogeneous representations and homothetic preferences.",
      sourceReferenceIds: ["sub-claims", "sub-production-spec"],
    },
    {
      id: "sub-lo-05",
      text: "interpret the qualified CES limiting cases without treating excluded endpoints as ordinary parameters.",
      sourceReferenceIds: ["sub-readiness", "sub-production-spec"],
    },
  ],
  exerciseMappings: [
    {
      objectiveId: "sub-lo-01",
      exerciseId: "sub-practice-01" satisfies Mikro1SubstitutionExerciseId,
      mode: "deterministic",
    },
    {
      objectiveId: "sub-lo-01",
      exerciseId: "sub-practice-02" satisfies Mikro1SubstitutionExerciseId,
      mode: "deterministic",
    },
    {
      objectiveId: "sub-lo-02",
      exerciseId: "sub-practice-03" satisfies Mikro1SubstitutionExerciseId,
      mode: "deterministic",
    },
    {
      objectiveId: "sub-lo-03",
      exerciseId: "sub-practice-08" satisfies Mikro1SubstitutionExerciseId,
      mode: "deterministic",
    },
    {
      objectiveId: "sub-lo-03",
      exerciseId: "sub-practice-09" satisfies Mikro1SubstitutionExerciseId,
      mode: "deterministic",
    },
    {
      objectiveId: "sub-lo-04",
      exerciseId: "sub-practice-10" satisfies Mikro1SubstitutionExerciseId,
      mode: "deterministic",
    },
    {
      objectiveId: "sub-lo-04",
      exerciseId: "sub-practice-11" satisfies Mikro1SubstitutionExerciseId,
      mode: "self-review",
    },
    {
      objectiveId: "sub-lo-05",
      exerciseId: "sub-practice-12" satisfies Mikro1SubstitutionExerciseId,
      mode: "self-review",
    },
  ],
} as const satisfies Mikro1TopicOrientation;

export const mikro1TopicOrientations = [
  mikro1PreferenceOrientation,
  mikro1SubstitutionOrientation,
] as const;

const orientationErrors = [
  ...validateMikro1TopicOrientation(
    mikro1PreferenceOrientation,
    approvedMikro1PreferenceExerciseIds,
  ),
  ...validateMikro1TopicOrientation(
    mikro1SubstitutionOrientation,
    authorizedMikro1SubstitutionExerciseIds,
  ),
];

if (orientationErrors.length) {
  throw new Error(orientationErrors.join("\n"));
}
