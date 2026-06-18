import { describe, expect, it } from "vitest";

import {
  homepageModules,
  isReturningHomepageFixture,
  learningGoals,
  parseHomepageFixtureMode,
} from "../../src/fixtures/homepage";

describe("homepage fixture mode selection", () => {
  it("defaults to the new learner state", () => {
    expect(parseHomepageFixtureMode(null)).toBe("new");
    expect(parseHomepageFixtureMode(undefined)).toBe("new");
    expect(parseHomepageFixtureMode("unexpected")).toBe("new");
    expect(isReturningHomepageFixture("new")).toBe(false);
  });

  it("selects the returning learner fixture explicitly", () => {
    const mode = parseHomepageFixtureMode("returning");

    expect(mode).toBe("returning");
    expect(isReturningHomepageFixture(mode)).toBe(true);
  });
});

describe("homepage fixture data", () => {
  it("keeps goal links as real public routes", () => {
    expect(learningGoals.map((goal) => goal.href)).toEqual([
      "/lernen/",
      "/ueben/",
      "/probeklausuren/",
    ]);
  });

  it("uses stable neutral module identifiers and visible statuses", () => {
    expect(homepageModules.map((module) => module.id)).toEqual([
      "pilot-module-a",
      "pilot-module-b",
      "pilot-module-c",
    ]);
    expect(homepageModules.map((module) => module.status)).toEqual([
      "verfügbar",
      "in Prüfung",
      "geplant",
    ]);
  });
});
