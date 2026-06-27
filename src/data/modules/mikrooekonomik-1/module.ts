import type {
  LearningSession,
  PracticeMapping,
  SourceReference,
  StudyModule,
} from "../../../learning/model";

const preferenceSources = [
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
] as const satisfies readonly SourceReference[];

const substitutionSources = [
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
] as const satisfies readonly SourceReference[];

const preferencePracticeRoute = "/ueben/mikrooekonomik-1/praeferenzrelationen/";
const substitutionPracticeRoute =
  "/ueben/mikrooekonomik-1/substitutionseffekt/";

function preferenceMapping(
  id: string,
  sessionIds: readonly string[],
  objectiveIds: readonly string[],
): PracticeMapping {
  return {
    id,
    practiceRoute: preferencePracticeRoute,
    practiceTitle: "Präferenzrelationen üben",
    sessionIds,
    objectiveIds,
    availability: "available",
  };
}

function substitutionMapping(
  id: string,
  sessionIds: readonly string[],
  objectiveIds: readonly string[],
): PracticeMapping {
  return {
    id,
    practiceRoute: substitutionPracticeRoute,
    practiceTitle: "Substitutionselastizität üben",
    sessionIds,
    objectiveIds,
    availability: "available",
  };
}

const sessions = [
  {
    id: "pref-binary-comparisons",
    slug: "praeferenzrelationen-grundvergleiche",
    title: "Binäre Relationen und schwache Präferenz",
    unitId: "preferences",
    sequence: 1,
    whyThisSessionExists:
      "Diese Sitzung legt fest, wie gerichtete Paarvergleiche gelesen werden, bevor daraus strikte Präferenz, Indifferenz oder Rationalität abgeleitet werden.",
    concepts: [
      {
        id: "binary-relation",
        label: "Binäre Relation",
        description:
          "Eine Aussage darüber, welche geordneten Paare von Alternativen in einer Relation stehen.",
      },
      {
        id: "weak-preference",
        label: "Schwache Präferenz",
        description:
          "Die primitive Relation x ≽ y: x wird mindestens so gut wie y eingeordnet.",
      },
    ],
    learningObjectives: [
      {
        id: "pref-lo-01",
        text: "identify the direction and limits of a displayed weak-preference statement.",
        sourceReferenceIds: ["pref-claims", "pref-outline"],
      },
    ],
    prerequisiteSessionIds: [],
    futureSessionIds: [
      "pref-derived-relations",
      "pref-rationality-axioms",
      "sub-grs-foundations",
    ],
    dependencyConnections: [
      {
        fromSessionId: "pref-binary-comparisons",
        toSessionId: "pref-derived-relations",
        explanation:
          "Derived relations use the weak-preference direction as their primitive input.",
      },
    ],
    instructionalRequirements: [
      {
        kind: "definition",
        id: "pref-req-weak-definition",
        title: "Schwache Präferenz definieren",
        description:
          "State notation, symbols, valid and invalid inferences for x ≽ y.",
        conceptIds: ["weak-preference"],
      },
      {
        kind: "mental-model",
        id: "pref-req-direction-model",
        title: "Gerichtete Vergleiche",
        description:
          "Use bundle comparisons to separate x ≽ y from the reverse direction y ≽ x.",
        conceptIds: ["binary-relation", "weak-preference"],
      },
    ],
    examTaskFamilies: [
      {
        id: "pref-exam-read-notation",
        title: "Notation lesen",
        description:
          "Read a displayed relation and state exactly what follows and what does not.",
      },
    ],
    commonMistakes: [
      {
        id: "pref-misread-direction",
        description: "Reversing the direction of a weak-preference statement.",
      },
    ],
    masteryCriteria: [
      {
        id: "pref-mastery-weak-direction",
        description:
          "Learner can read x ≽ y without adding the reverse comparison.",
        evidence:
          "Structured self-review response or related practice attempt.",
      },
    ],
    sourceRecords: preferenceSources,
    practiceMappings: [
      preferenceMapping(
        "pref-practice-map-01",
        ["pref-binary-comparisons"],
        ["pref-lo-01"],
      ),
    ],
    availability: {
      architecture: "available",
      lesson: "available",
      practice: "available",
      sourceStatus: "available",
    },
    reviewState: {
      status: "in-review",
      note: "Automated checks pass; human academic publication approval remains pending.",
    },
  },
  {
    id: "pref-derived-relations",
    slug: "strikte-praeferenz-und-indifferenz",
    title: "Strikte Präferenz und Indifferenz ableiten",
    unitId: "preferences",
    sequence: 2,
    whyThisSessionExists:
      "Diese Sitzung zeigt, wie strikte Präferenz und Indifferenz aus schwacher Präferenz entstehen und warum beide Konzepte nicht vermischt werden dürfen.",
    concepts: [
      {
        id: "strict-preference",
        label: "Strikte Präferenz",
        description: "x ≻ y gilt, wenn x ≽ y gilt und y ≽ x nicht gilt.",
      },
      {
        id: "indifference",
        label: "Indifferenz",
        description: "x ∼ y gilt, wenn x ≽ y und y ≽ x beide gelten.",
      },
    ],
    learningObjectives: [
      {
        id: "pref-lo-02",
        text: "distinguish weak preference, strict preference, and indifference by their defining conditions.",
        sourceReferenceIds: ["pref-claims", "pref-outline"],
      },
      {
        id: "pref-lo-04",
        text: "derive why strict preference and indifference cannot both hold for the same ordered pair.",
        sourceReferenceIds: ["pref-claims", "pref-outline"],
      },
    ],
    prerequisiteSessionIds: ["pref-binary-comparisons"],
    futureSessionIds: ["pref-rationality-axioms"],
    dependencyConnections: [
      {
        fromSessionId: "pref-binary-comparisons",
        toSessionId: "pref-derived-relations",
        explanation:
          "Strict preference and indifference are defined by combinations of weak-preference directions.",
      },
      {
        fromSessionId: "pref-derived-relations",
        toSessionId: "pref-rationality-axioms",
        explanation:
          "Axiom checks use the same weak relation but must be kept separate from derived labels.",
      },
    ],
    instructionalRequirements: [
      {
        kind: "definition",
        id: "pref-req-derived-definitions",
        title: "Abgeleitete Präferenzbegriffe",
        description:
          "Define strict preference and indifference from weak preference with contrasting examples.",
        conceptIds: ["strict-preference", "indifference"],
      },
      {
        kind: "proof",
        id: "pref-req-incompatibility-proof",
        title: "Unvereinbarkeit herleiten",
        description:
          "Derive the contradiction between x ≻ y and x ∼ y from the verified definitions.",
      },
      {
        kind: "active-recall",
        id: "pref-req-derived-recall",
        title: "Definitionen abrufen",
        description:
          "Retrieve the two derived definitions without reading the model solution.",
      },
    ],
    examTaskFamilies: [
      {
        id: "pref-exam-derived-relations",
        title: "Abgeleitete Relationen bestimmen",
        description:
          "Use the two weak-preference directions to classify strict preference and indifference.",
      },
    ],
    commonMistakes: [
      {
        id: "pref-mistake-weak-as-strict",
        description:
          "Treating weak preference as if it already meant strict preference.",
      },
      {
        id: "pref-mistake-no-information-as-indifference",
        description: "Confusing inability to compare with indifference.",
      },
    ],
    masteryCriteria: [
      {
        id: "pref-mastery-derived",
        description:
          "Learner can derive strict preference and indifference from the weak relation.",
        evidence:
          "Correct deterministic attempts or complete self-review derivation.",
      },
    ],
    sourceRecords: preferenceSources,
    practiceMappings: [
      preferenceMapping(
        "pref-practice-map-02",
        ["pref-derived-relations"],
        ["pref-lo-02", "pref-lo-04"],
      ),
    ],
    availability: {
      architecture: "available",
      lesson: "available",
      practice: "available",
      sourceStatus: "available",
    },
    reviewState: {
      status: "in-review",
      note: "Automated checks pass; human academic publication approval remains pending.",
    },
  },
  {
    id: "pref-rationality-axioms",
    slug: "vollstaendigkeit-transitivitaet-rationalitaet",
    title: "Vollständigkeit, Transitivität und Rationalität",
    unitId: "preferences",
    sequence: 3,
    whyThisSessionExists:
      "Diese Sitzung trennt die beiden Axiome von einzelnen Vergleichsaussagen und verbindet sie erst danach zum technischen Rationalitätsbegriff.",
    concepts: [
      {
        id: "completeness",
        label: "Vollständigkeit",
        description:
          "Für jedes Paar gilt mindestens eine der beiden schwachen Richtungen.",
      },
      {
        id: "transitivity",
        label: "Transitivität",
        description: "Wenn x ≽ y und y ≽ z gelten, muss auch x ≽ z gelten.",
      },
      {
        id: "rational-preference",
        label: "Rationale Präferenzrelation",
        description:
          "Technischer Begriff für eine vollständige und transitive Präferenzrelation.",
      },
    ],
    learningObjectives: [
      {
        id: "pref-lo-03",
        text: "classify small relation records for completeness, transitivity, and technical rationality.",
        sourceReferenceIds: ["pref-claims", "pref-outline"],
      },
    ],
    prerequisiteSessionIds: ["pref-derived-relations"],
    futureSessionIds: ["sub-grs-foundations"],
    dependencyConnections: [
      {
        fromSessionId: "pref-derived-relations",
        toSessionId: "pref-rationality-axioms",
        explanation:
          "Axiom checks require reliable interpretation of weak and derived relation statements.",
      },
      {
        fromSessionId: "pref-rationality-axioms",
        toSessionId: "sub-grs-foundations",
        explanation:
          "Later substitution work uses preference language while adding differentiability and local slope assumptions.",
      },
    ],
    instructionalRequirements: [
      {
        kind: "definition",
        id: "pref-req-axiom-definitions",
        title: "Axiome definieren",
        description:
          "State completeness, transitivity, and rationality as technical properties.",
        conceptIds: ["completeness", "transitivity", "rational-preference"],
      },
      {
        kind: "worked-example",
        id: "pref-req-classification-example",
        title: "Relation klassifizieren",
        description:
          "Work through completeness, transitivity, and rationality for a small relation record.",
      },
      {
        kind: "exam-strategy",
        id: "pref-req-axiom-exam-strategy",
        title: "Axiomprüfung in Klausuraufgaben",
        description:
          "Check all pairs and all relevant chains before stating rationality.",
        taskFamilyIds: ["pref-exam-classify-relation"],
      },
    ],
    examTaskFamilies: [
      {
        id: "pref-exam-classify-relation",
        title: "Relation auf Rationalität prüfen",
        description:
          "Test completeness and transitivity separately, then classify the relation.",
      },
    ],
    commonMistakes: [
      {
        id: "pref-mistake-completeness-from-transitivity",
        description: "Assuming completeness from transitivity.",
      },
      {
        id: "pref-mistake-single-chain",
        description: "Checking only one chain when testing transitivity.",
      },
    ],
    masteryCriteria: [
      {
        id: "pref-mastery-rationality",
        description:
          "Learner can classify a finite relation without treating rationality as psychological realism.",
        evidence:
          "Deterministic classification attempts and final topic check.",
      },
    ],
    sourceRecords: preferenceSources,
    practiceMappings: [
      preferenceMapping(
        "pref-practice-map-03",
        ["pref-rationality-axioms"],
        ["pref-lo-03"],
      ),
    ],
    availability: {
      architecture: "available",
      lesson: "available",
      practice: "available",
      sourceStatus: "available",
    },
    reviewState: {
      status: "in-review",
      note: "Automated checks pass; human academic publication approval remains pending.",
    },
  },
  {
    id: "sub-grs-foundations",
    slug: "grs-steigung-und-lokale-annahmen",
    title: "GRS, Steigung und lokale Annahmen",
    unitId: "substitution",
    sequence: 4,
    whyThisSessionExists:
      "Diese Sitzung trennt die kursbezogene positive GRS-Konvention von der vorzeichenbehafteten Indifferenzkurvensteigung.",
    concepts: [
      {
        id: "signed-slope",
        label: "Vorzeichenbehaftete Steigung",
        description: "Die lokale Steigung der Indifferenzkurve mit Vorzeichen.",
      },
      {
        id: "grs12",
        label: "GRS_12",
        description:
          "Die positive marginale Austauschrate nach kursbezogener Orientierung.",
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
    ],
    prerequisiteSessionIds: ["pref-rationality-axioms"],
    futureSessionIds: ["sub-ces-conversions"],
    dependencyConnections: [
      {
        fromSessionId: "pref-rationality-axioms",
        toSessionId: "sub-grs-foundations",
        explanation:
          "GRS work assumes the learner can distinguish notation, relations, and model assumptions.",
      },
    ],
    instructionalRequirements: [
      {
        kind: "definition",
        id: "sub-req-grs-definition",
        title: "GRS-Konvention abgrenzen",
        description:
          "Separate signed slope, positive GRS_12, ratio orientation, and local assumptions.",
        conceptIds: ["signed-slope", "grs12"],
      },
      {
        kind: "formula",
        id: "sub-req-grs-formula",
        title: "GRS_12-Ratio",
        description: "Use the approved local marginal-utility ratio.",
        variableDefinitions: [
          "u_x1: marginal utility with respect to good 1 at the interior bundle.",
          "u_x2: marginal utility with respect to good 2 at the interior bundle.",
        ],
      },
      {
        kind: "graph",
        id: "sub-req-slope-graph",
        title: "Lokale Steigung lesen",
        description:
          "Interpret the local indifference-curve slope without turning it into a graph interaction.",
        axes: ["x1", "x2"],
        interpretation:
          "The graph supports sign and orientation interpretation only in the current restricted scope.",
      },
    ],
    examTaskFamilies: [
      {
        id: "sub-exam-grs-orientation",
        title: "GRS-Orientierung prüfen",
        description:
          "Select the correct ratio and assumptions for a local derivative statement.",
      },
    ],
    commonMistakes: [
      {
        id: "sub-mistake-slope-as-grs",
        description: "Using the signed slope as if it were the positive GRS.",
      },
    ],
    masteryCriteria: [
      {
        id: "sub-mastery-grs",
        description:
          "Learner can state the ratio orientation and required local assumptions.",
        evidence: "Deterministic attempts on the restricted GRS exercises.",
      },
    ],
    sourceRecords: substitutionSources,
    practiceMappings: [
      substitutionMapping(
        "sub-practice-map-01",
        ["sub-grs-foundations"],
        ["sub-lo-01", "sub-lo-02"],
      ),
    ],
    availability: {
      architecture: "available",
      lesson: "planned",
      practice: "available",
      sourceStatus: "available",
    },
    reviewState: {
      status: "in-review",
      note: "Practice is implemented; full lesson content is the next student-facing milestone.",
    },
  },
  {
    id: "sub-ces-conversions",
    slug: "ces-parameter-und-substitutionselastizitaet",
    title: "CES-Parameter und Substitutionselastizität",
    unitId: "substitution",
    sequence: 5,
    whyThisSessionExists:
      "Diese Sitzung hält den freigegebenen numerischen Umfang für rho-sigma-Konversionen getrennt von breiter CES-Rechnung.",
    concepts: [
      {
        id: "rho",
        label: "rho",
        description: "CES-Parameter im freigegebenen Kursumfang.",
      },
      {
        id: "sigma",
        label: "sigma",
        description: "Substitutionselastizität im freigegebenen Kursumfang.",
      },
    ],
    learningObjectives: [
      {
        id: "sub-lo-03",
        text: "calculate sigma from rho and rho from finite positive sigma in the authorized CES conversion tasks.",
        sourceReferenceIds: ["sub-claims", "sub-production-spec"],
      },
    ],
    prerequisiteSessionIds: ["sub-grs-foundations"],
    futureSessionIds: ["sub-homothetic-representations"],
    dependencyConnections: [
      {
        fromSessionId: "sub-grs-foundations",
        toSessionId: "sub-ces-conversions",
        explanation:
          "CES conversion tasks rely on the same restricted source package but shift from local GRS assumptions to parameter interpretation.",
      },
    ],
    instructionalRequirements: [
      {
        kind: "formula",
        id: "sub-req-sigma-rho-formula",
        title: "sigma-rho-Beziehung",
        description:
          "Apply the authorized relation between sigma and rho only under the documented parameter restrictions.",
        variableDefinitions: [
          "sigma: substitution elasticity in the approved finite positive cases.",
          "rho: CES parameter in the approved course parameterization.",
        ],
      },
      {
        kind: "calculation-procedure",
        id: "sub-req-numeric-contract",
        title: "Zahlenantworten normalisieren",
        description:
          "Parse only the approved integer, decimal, and fraction forms from the production specification.",
        steps: [
          "Check that the input is a standalone numeric expression in the approved grammar.",
          "Normalize the value.",
          "Compare with the private accepted value using the approved tolerance.",
        ],
      },
    ],
    examTaskFamilies: [
      {
        id: "sub-exam-ces-conversion",
        title: "CES-Parameter umrechnen",
        description:
          "Convert between rho and sigma in the bounded numeric cases.",
      },
    ],
    commonMistakes: [
      {
        id: "sub-mistake-reciprocal",
        description:
          "Using the reciprocal convention outside the approved mapping.",
      },
    ],
    masteryCriteria: [
      {
        id: "sub-mastery-ces-conversion",
        description:
          "Learner can calculate sigma from rho=1/2 and rho from sigma=4.",
        evidence:
          "Deterministic numeric attempts in the restricted practice set.",
      },
    ],
    sourceRecords: substitutionSources,
    practiceMappings: [
      substitutionMapping(
        "sub-practice-map-02",
        ["sub-ces-conversions"],
        ["sub-lo-03"],
      ),
    ],
    availability: {
      architecture: "available",
      lesson: "planned",
      practice: "available",
      sourceStatus: "available",
    },
    reviewState: {
      status: "in-review",
      note: "Practice is implemented; broader CES arithmetic remains excluded.",
    },
  },
  {
    id: "sub-homothetic-representations",
    slug: "homogene-darstellungen-und-homothetie",
    title: "Homogene Darstellungen und homothetische Präferenzen",
    unitId: "substitution",
    sequence: 6,
    whyThisSessionExists:
      "Diese Sitzung trennt Eigenschaften einer Nutzenrepräsentation von Eigenschaften der dargestellten Präferenzen.",
    concepts: [
      {
        id: "homogeneous-representation",
        label: "Homogene Darstellung",
        description: "Eine Eigenschaft einer konkreten Nutzenfunktion.",
      },
      {
        id: "homothetic-preferences",
        label: "Homothetische Präferenzen",
        description:
          "Eine Eigenschaft der dargestellten Präferenzen, nicht jeder beliebigen Darstellung.",
      },
    ],
    learningObjectives: [
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
    prerequisiteSessionIds: ["sub-ces-conversions"],
    futureSessionIds: [],
    dependencyConnections: [
      {
        fromSessionId: "sub-ces-conversions",
        toSessionId: "sub-homothetic-representations",
        explanation:
          "Limiting-case language should only be used after the bounded CES parameter mapping is clear.",
      },
    ],
    instructionalRequirements: [
      {
        kind: "definition",
        id: "sub-req-homothetic-definition",
        title: "Darstellung und Präferenz trennen",
        description:
          "Distinguish properties of a utility representation from properties of represented preferences.",
        conceptIds: ["homogeneous-representation", "homothetic-preferences"],
      },
      {
        kind: "derivation",
        id: "sub-req-homogeneity-derivation",
        title: "Grad-eins-Homogenität begrenzen",
        description:
          "Use only the bounded production-approved homogeneity item and self-review comparison.",
      },
      {
        kind: "exam-strategy",
        id: "sub-req-limits-strategy",
        title: "Grenzfälle qualifizieren",
        description:
          "State when a limiting case is direct, only a limit, or pedagogical shorthand.",
        taskFamilyIds: ["sub-exam-limit-cases"],
      },
    ],
    examTaskFamilies: [
      {
        id: "sub-exam-limit-cases",
        title: "CES-Grenzfälle einordnen",
        description:
          "Explain qualified limiting cases without expanding the production scope.",
      },
    ],
    commonMistakes: [
      {
        id: "sub-mistake-transformation",
        description:
          "Treating every monotone transformation as preserving linear homogeneity.",
      },
      {
        id: "sub-mistake-endpoints",
        description: "Treating excluded CES endpoints as ordinary parameters.",
      },
    ],
    masteryCriteria: [
      {
        id: "sub-mastery-homothetic",
        description:
          "Learner can compare homogeneous representations and homothetic preferences without overclaiming.",
        evidence:
          "Complete self-review comparison in the restricted practice set.",
      },
    ],
    sourceRecords: substitutionSources,
    practiceMappings: [
      substitutionMapping(
        "sub-practice-map-03",
        ["sub-homothetic-representations"],
        ["sub-lo-04", "sub-lo-05"],
      ),
    ],
    availability: {
      architecture: "available",
      lesson: "planned",
      practice: "available",
      sourceStatus: "available",
    },
    reviewState: {
      status: "in-review",
      note: "Practice is implemented; full lesson content remains future work.",
    },
  },
] as const satisfies readonly LearningSession[];

export const mikrooekonomik1Module = {
  id: "mikrooekonomik-1",
  slug: "mikrooekonomik-1",
  title: "Mikroökonomik I",
  shortTitle: "Mikro I",
  description:
    "Ein dependency-basierter Lernpfad für die aktuell source-gestützten Mikroökonomik-I-Einheiten.",
  subjectArea: "Volkswirtschaftslehre",
  displayOrder: 10,
  units: [
    {
      id: "preferences",
      title: "Präferenzrelationen",
      purpose:
        "Grundbegriffe und Rationalitätsaxiome für spätere mikroökonomische Modelle.",
      sessionIds: [
        "pref-binary-comparisons",
        "pref-derived-relations",
        "pref-rationality-axioms",
      ],
    },
    {
      id: "substitution",
      title: "Substitutionselastizität und homothetische Nutzenfunktionen",
      purpose:
        "Restricted source-backed practice scope for GRS, CES conversions, homogeneity, and limiting cases.",
      sessionIds: [
        "sub-grs-foundations",
        "sub-ces-conversions",
        "sub-homothetic-representations",
      ],
    },
  ],
  sessions,
  sourceRecords: [...preferenceSources, ...substitutionSources],
  availability: {
    architecture: "available",
    lessons: "in-review",
    practice: "available",
    sourceStatus: "available",
  },
} as const satisfies StudyModule;
