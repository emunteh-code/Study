import { describe, expect, it } from "vitest";

import { mikrooekonomik1Module } from "../../src/data/modules/mikrooekonomik-1/module";
import type {
  LearningSession,
  LessonBlock,
  WorkedExampleBlock,
} from "../../src/learning/model";
import {
  getModuleBySlug,
  getModuleSessionsInOrder,
  getPublicLearningModules,
} from "../../src/learning/registry";
import {
  moduleLearningRoute,
  modulePracticeRoute,
  sessionLearningRoute,
} from "../../src/learning/routing";
import {
  COMPLETE_SESSION_BLOCK_ORDER,
  getSessionsInDependencyOrder,
  validateStudyModule,
  validateStudyModules,
} from "../../src/learning/validation";
import { lawFixtureModule } from "../fixtures/learning-modules";

describe("learning module architecture", () => {
  function sessionById(sessionId: string): LearningSession {
    return mikrooekonomik1Module.sessions.find(
      ({ id }) => id === sessionId,
    ) as LearningSession;
  }

  function workedExampleBlocks(
    blocks: readonly LessonBlock[],
  ): WorkedExampleBlock[] {
    return blocks.filter(
      (block): block is WorkedExampleBlock => block.kind === "worked-example",
    );
  }

  it("allows multiple modules to coexist without assuming economics capabilities", () => {
    const errors = validateStudyModules([
      mikrooekonomik1Module,
      lawFixtureModule,
    ]);

    expect(errors).toEqual([]);
    expect(
      lawFixtureModule.sessions[0]!.instructionalRequirements.map(
        ({ kind }) => kind,
      ),
    ).toEqual(["case-analysis", "legal-reasoning"]);
    const lawKinds: string[] =
      lawFixtureModule.sessions[0]!.instructionalRequirements.map(
        ({ kind }) => kind,
      );
    expect(lawKinds).not.toContain("formula");
    expect(lawKinds).not.toContain("graph");
  });

  it("requires unique module IDs and slugs across registered module sets", () => {
    expect(
      validateStudyModules([mikrooekonomik1Module, mikrooekonomik1Module]),
    ).toEqual(
      expect.arrayContaining([
        "Module IDs must be unique.",
        "Module slugs must be unique.",
      ]),
    );
  });

  it("requires session slugs only within the same module", () => {
    const duplicateSlugWithinModule = {
      ...lawFixtureModule,
      sessions: [
        lawFixtureModule.sessions[0]!,
        {
          ...lawFixtureModule.sessions[0]!,
          id: "second-law-session",
        },
      ],
    };

    expect(
      validateStudyModules([mikrooekonomik1Module, lawFixtureModule]),
    ).toEqual([]);
    expect(validateStudyModule(duplicateSlugWithinModule)).toEqual(
      expect.arrayContaining([
        "law-fixture: session slugs must be unique within the module.",
      ]),
    );
  });

  it("rejects unknown cross-module dependency references unless explicitly modeled", () => {
    const invalidDependency = {
      ...lawFixtureModule,
      sessions: [
        {
          ...lawFixtureModule.sessions[0]!,
          prerequisiteSessionIds: ["pref-binary-comparisons"],
        },
      ],
    };

    expect(validateStudyModule(invalidDependency)).toEqual(
      expect.arrayContaining([
        "law-fixture:offer-acceptance: unknown prerequisite session pref-binary-comparisons.",
      ]),
    );
  });

  it("detects dependency cycles per module", () => {
    const cyclicModule = {
      ...lawFixtureModule,
      sessions: [
        {
          ...lawFixtureModule.sessions[0]!,
          prerequisiteSessionIds: ["second-law-session"],
        },
        {
          ...lawFixtureModule.sessions[0]!,
          id: "second-law-session",
          slug: "second-law-session",
          sequence: 2,
          prerequisiteSessionIds: ["offer-acceptance"],
        },
      ],
      units: [
        {
          ...lawFixtureModule.units[0]!,
          sessionIds: ["offer-acceptance", "second-law-session"],
        },
      ],
    };

    expect(validateStudyModule(cyclicModule)).toEqual(
      expect.arrayContaining([
        "law-fixture: dependency graph must not contain cycles.",
      ]),
    );
  });

  it("returns deterministic topological display order per module", () => {
    expect(
      getSessionsInDependencyOrder(mikrooekonomik1Module).map(({ id }) => id),
    ).toEqual([
      "pref-binary-comparisons",
      "pref-derived-relations",
      "pref-completeness",
      "pref-transitivity",
      "pref-rationality-classification",
      "sub-grs-foundations",
      "sub-ces-conversions",
      "sub-homothetic-representations",
    ]);
  });

  it("rejects unsafe source paths", () => {
    const invalidSourceModule = {
      ...lawFixtureModule,
      sourceRecords: [
        {
          ...lawFixtureModule.sourceRecords[0]!,
          path: "/Users/example/private.pdf",
        },
      ],
    };

    expect(validateStudyModule(invalidSourceModule)).toEqual(
      expect.arrayContaining([
        "law-fixture: source law-fixture-source must use a repository-relative path.",
      ]),
    );
  });

  it("keeps availability claims honest for available lesson sessions", () => {
    const invalidAvailability = {
      ...lawFixtureModule,
      sessions: [
        {
          ...lawFixtureModule.sessions[0]!,
          instructionalRequirements: [],
          availability: {
            ...lawFixtureModule.sessions[0]!.availability,
            lesson: "available" as const,
          },
        },
      ],
    };

    expect(validateStudyModule(invalidAvailability)).toEqual(
      expect.arrayContaining([
        "law-fixture:offer-acceptance: available lesson sessions need instructional requirements.",
      ]),
    );
  });

  it("requires complete-session pages to contain the full pedagogical block order", () => {
    for (const sessionId of ["pref-completeness", "pref-transitivity"]) {
      const session = sessionById(sessionId);
      const kinds = session.lessonBlocks!.map(({ kind }) => kind);

      expect(session.availability.lesson).toBe("complete-session");
      expect(validateStudyModule(mikrooekonomik1Module)).toEqual([]);
      let searchStart = 0;
      for (const kind of COMPLETE_SESSION_BLOCK_ORDER) {
        const index = kinds.findIndex(
          (candidate, candidateIndex) =>
            candidateIndex >= searchStart && candidate === kind,
        );
        expect(index).toBeGreaterThanOrEqual(searchStart);
        searchStart = index + 1;
      }
    }
  });

  it("protects complete-session examples, IDs, objectives, and hidden-answer isolation", () => {
    const completenessSession = sessionById("pref-completeness");
    const blocks = completenessSession.lessonBlocks!;
    const blockIds = blocks.map(({ id }) => id);
    const exampleLevels = workedExampleBlocks(blocks).map(({ level }) => level);
    const publicProjection = JSON.stringify(completenessSession);

    expect(new Set(blockIds).size).toBe(blockIds.length);
    expect(
      exampleLevels.filter((level) => level === "foundational"),
    ).toHaveLength(3);
    expect(
      exampleLevels.filter((level) => level === "intermediate"),
    ).toHaveLength(3);
    expect(
      exampleLevels.filter((level) => level === "exam-style"),
    ).toHaveLength(2);
    expect(publicProjection).not.toContain("acceptedAnswer");
    expect(publicProjection).not.toContain("correctOption");
    expect(publicProjection).not.toContain("evaluator");
    expect(completenessSession.practiceMappings[0]!.exerciseIds).toEqual([
      "pref-practice-05",
      "pref-practice-06",
    ]);
    expect(
      completenessSession.instructionalRequirements.map(({ kind }) => kind),
    ).not.toContain("formula");
    expect(
      completenessSession.instructionalRequirements.map(({ kind }) => kind),
    ).not.toContain("graph");
  });

  it("protects the transitivity complete session scope and practice mapping", () => {
    const transitivitySession = sessionById("pref-transitivity");
    const blocks = transitivitySession.lessonBlocks!;
    const blockIds = blocks.map(({ id }) => id);
    const exampleLevels = workedExampleBlocks(blocks).map(({ level }) => level);
    const publicProjection = JSON.stringify(transitivitySession);

    expect(new Set(blockIds).size).toBe(blockIds.length);
    expect(
      exampleLevels.filter((level) => level === "foundational"),
    ).toHaveLength(4);
    expect(
      exampleLevels.filter((level) => level === "intermediate"),
    ).toHaveLength(4);
    expect(
      exampleLevels.filter((level) => level === "exam-style"),
    ).toHaveLength(3);
    expect(publicProjection).toContain("pref-practice-07");
    expect(publicProjection).toContain("pref-practice-08");
    expect(publicProjection).toContain("pref-practice-09");
    expect(publicProjection).not.toContain("acceptedAnswer");
    expect(publicProjection).not.toContain("correctOption");
    expect(publicProjection).not.toContain("evaluator");
    expect(transitivitySession.practiceMappings[0]!.exerciseIds).toEqual([
      "pref-practice-07",
      "pref-practice-08",
      "pref-practice-09",
    ]);
    expect(transitivitySession.practiceMappings[0]!.exerciseIds).not.toContain(
      "pref-practice-10",
    );
    expect(
      transitivitySession.instructionalRequirements.map(({ kind }) => kind),
    ).not.toContain("formula");
    expect(
      transitivitySession.instructionalRequirements.map(({ kind }) => kind),
    ).not.toContain("graph");
  });

  it("validates practice mappings against sessions and objectives", () => {
    const preferenceSession = mikrooekonomik1Module.sessions.find(
      ({ id }) => id === "pref-derived-relations",
    )!;

    expect(preferenceSession.practiceMappings[0]).toMatchObject({
      practiceRoute: "/ueben/mikrooekonomik-1/praeferenzrelationen/",
      objectiveIds: ["pref-lo-02", "pref-lo-04"],
    });
    expect(sessionById("pref-completeness").practiceMappings[0]).toMatchObject({
      practiceRoute: "/ueben/mikrooekonomik-1/praeferenzrelationen/",
      objectiveIds: ["pref-lo-completeness-01", "pref-lo-completeness-02"],
      exerciseIds: ["pref-practice-05", "pref-practice-06"],
    });
    expect(sessionById("pref-transitivity").practiceMappings[0]).toMatchObject({
      practiceRoute: "/ueben/mikrooekonomik-1/praeferenzrelationen/",
      objectiveIds: [
        "pref-lo-transitivity-01",
        "pref-lo-transitivity-02",
        "pref-lo-transitivity-03",
        "pref-lo-transitivity-04",
      ],
      exerciseIds: ["pref-practice-07", "pref-practice-08", "pref-practice-09"],
    });
    expect(validateStudyModule(mikrooekonomik1Module)).toEqual([]);
  });

  it("exposes registry routes without hard-coding Mikro I into route helpers", () => {
    const module = getModuleBySlug("mikrooekonomik-1")!;
    const firstSession = getModuleSessionsInOrder(module)[0]!;

    expect(getPublicLearningModules().map(({ slug }) => slug)).toContain(
      "mikrooekonomik-1",
    );
    expect(moduleLearningRoute(module)).toBe("/lernen/mikrooekonomik-1/");
    expect(modulePracticeRoute(module)).toBe("/ueben/mikrooekonomik-1/");
    expect(sessionLearningRoute(module, firstSession)).toBe(
      "/lernen/mikrooekonomik-1/praeferenzrelationen-grundvergleiche/",
    );
  });
});
