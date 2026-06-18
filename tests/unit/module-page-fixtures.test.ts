import { describe, expect, it } from "vitest";

import {
  getAvailableTopics,
  getOrderedTopics,
  getRecommendedNextTopic,
  getTopicStatusLabel,
  pilotModuleFixture,
  validateModulePageViewModel,
} from "../../src/fixtures/module-page";

describe("module page fixture view model", () => {
  it("contains the required stable fixture identifiers", () => {
    expect(pilotModuleFixture.moduleId).toBe("pilot-module");
    expect(pilotModuleFixture.versionId).toBe("pilot-module-version-alpha");
    expect(pilotModuleFixture.slug).toBe("pilot-modul");
    expect(validateModulePageViewModel(pilotModuleFixture)).toBe(true);
  });

  it("orders topics by their explicit learning-path order", () => {
    expect(
      getOrderedTopics(pilotModuleFixture).map((topic) => topic.title),
    ).toEqual([
      "Beispielthema Alpha",
      "Beispielthema Beta",
      "Beispielthema Gamma",
      "Beispielthema Delta",
    ]);
  });

  it("separates available topics from unavailable states", () => {
    expect(
      getAvailableTopics(pilotModuleFixture).map((topic) => topic.id),
    ).toEqual(["pilot-topic-alpha"]);
  });

  it("does not recommend archived or planned topics by default", () => {
    const recommended = getRecommendedNextTopic(pilotModuleFixture);

    expect(recommended?.id).toBe("pilot-topic-alpha");
    expect(recommended?.availability).toBe("available");
    expect(recommended?.availability).not.toBe("planned");
    expect(recommended?.availability).not.toBe("archived");
  });

  it("links available practice modes to real fixture routes", () => {
    const practiceLinks = pilotModuleFixture.practiceLinks.filter(
      (option) => option.availability === "available",
    );

    expect(practiceLinks.map((option) => option.action?.href)).toEqual([
      "/ueben/pilot-modul/gefuehrte-uebung-alpha/",
      "/ueben/pilot-modul/themenuebung-alpha/",
    ]);
  });

  it("maps availability states to German visible labels", () => {
    expect(getTopicStatusLabel("available")).toBe("Verfügbar");
    expect(getTopicStatusLabel("in-review")).toBe("In Prüfung");
    expect(getTopicStatusLabel("planned")).toBe("Geplant");
    expect(getTopicStatusLabel("archived")).toBe("Archiviert");
  });
});
