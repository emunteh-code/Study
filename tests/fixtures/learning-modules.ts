import type { StudyModule } from "../../src/learning/model";

export const lawFixtureModule = {
  id: "law-fixture",
  slug: "law-fixture",
  title: "Recht Fixture",
  shortTitle: "Recht",
  description:
    "A test-only module fixture for case analysis and legal reasoning.",
  subjectArea: "Recht",
  displayOrder: 99,
  units: [
    {
      id: "contract-basics",
      title: "Vertragsrechtliche Grundlagen",
      purpose: "Test-only legal reasoning structure.",
      sessionIds: ["offer-acceptance"],
    },
  ],
  sessions: [
    {
      id: "offer-acceptance",
      slug: "angebot-und-annahme",
      title: "Angebot und Annahme",
      unitId: "contract-basics",
      sequence: 1,
      whyThisSessionExists:
        "This fixture proves that sessions can use case analysis without graphs, formulas, or economics terminology.",
      concepts: [
        {
          id: "offer",
          label: "Offer",
          description: "A test-only legal concept placeholder.",
        },
      ],
      learningObjectives: [
        {
          id: "law-lo-01",
          text: "identify the legal issue in a short contract scenario.",
          sourceReferenceIds: ["law-fixture-source"],
        },
      ],
      prerequisiteSessionIds: [],
      futureSessionIds: [],
      dependencyConnections: [],
      instructionalRequirements: [
        {
          kind: "case-analysis",
          id: "law-case-analysis",
          title: "Case analysis",
          description: "Separate issue and rule before applying facts.",
          issue: "Whether a valid offer exists.",
          rule: "Use the source-backed rule once real sources are added.",
        },
        {
          kind: "legal-reasoning",
          id: "law-reasoning",
          title: "Subsumption",
          description: "Apply the rule to the case facts in a bounded way.",
          reasoningMode: "IRAC-style issue and rule separation.",
        },
      ],
      examTaskFamilies: [
        {
          id: "law-exam-case",
          title: "Case issue spotting",
          description: "Find the relevant legal issue in a scenario.",
        },
      ],
      commonMistakes: [
        {
          id: "law-mistake-conclusion-first",
          description: "Jumping to a conclusion before stating the issue.",
        },
      ],
      masteryCriteria: [
        {
          id: "law-mastery-issue",
          description: "Learner can state the issue separately from the rule.",
          evidence: "A structured case-analysis response.",
        },
      ],
      sourceRecords: [
        {
          id: "law-fixture-source",
          title: "Test-only legal fixture source",
          path: "docs/product-specification.md",
          status: "planned",
        },
      ],
      practiceMappings: [],
      availability: {
        architecture: "available",
        lesson: "planned",
        practice: "planned",
        sourceStatus: "planned",
      },
    },
  ],
  sourceRecords: [
    {
      id: "law-fixture-source",
      title: "Test-only legal fixture source",
      path: "docs/product-specification.md",
      status: "planned",
    },
  ],
  availability: {
    architecture: "available",
    lessons: "planned",
    practice: "planned",
    sourceStatus: "planned",
  },
} as const satisfies StudyModule;
