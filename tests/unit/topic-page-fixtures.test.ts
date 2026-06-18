import { describe, expect, it } from "vitest";

import {
  buildTopicTableOfContents,
  getRecommendedTopicAction,
  getTopicContentStatePresentation,
  getTopicNavigation,
  isStableSectionId,
  mandatoryTopicSectionIds,
  pilotTopicFixture,
  validateMandatoryTopicSections,
  validateTopicPageViewModel,
  type TopicPageViewModel,
} from "../../src/fixtures/topic-page";

describe("topic page fixture view model", () => {
  it("contains stable neutral fixture identifiers", () => {
    expect(pilotTopicFixture.topicId).toBe("topic-alpha");
    expect(pilotTopicFixture.moduleId).toBe("pilot-module");
    expect(pilotTopicFixture.moduleVersionId).toBe(
      "pilot-module-version-alpha",
    );
    expect(pilotTopicFixture.slug).toBe("beispielthema-alpha");
    expect(validateTopicPageViewModel(pilotTopicFixture)).toBe(true);
  });

  it("generates a table of contents with stable ASCII section IDs", () => {
    const entries = buildTopicTableOfContents(pilotTopicFixture);

    expect(entries.map((entry) => entry.id)).toEqual(
      expect.arrayContaining([...mandatoryTopicSectionIds]),
    );
    expect(entries.every((entry) => isStableSectionId(entry.id))).toBe(true);
  });

  it("validates mandatory topic sections", () => {
    expect(validateMandatoryTopicSections(pilotTopicFixture)).toBe(true);
  });

  it("maps content states to German labels and explanations", () => {
    const presentation = getTopicContentStatePresentation(
      "structurally-complete",
    );

    expect(presentation.label).toBe("Strukturell vollständig");
    expect(presentation.explanation).toContain("Pflichtabschnitte");
  });

  it("does not recommend planned or archived next content", () => {
    const action = getRecommendedTopicAction(pilotTopicFixture);

    expect(pilotTopicFixture.nextTopic?.state).toBe("planned");
    expect(action.href).toBe("#gefuehrte-uebung");
  });

  it("uses available next content only when it has a meaningful route", () => {
    const topic: TopicPageViewModel = {
      ...pilotTopicFixture,
      nextTopic: {
        id: "topic-next",
        title: "Beispielthema Folgend",
        state: "available",
        href: "/lernen/pilot-modul/beispielthema-folgend/",
        explanation: "Verfügbares neutrales Folgethema.",
      },
    };

    expect(getRecommendedTopicAction(topic)).toEqual({
      label: "Weiter zu Beispielthema Folgend",
      href: "/lernen/pilot-modul/beispielthema-folgend/",
      explanation: "Verfügbares neutrales Folgethema.",
    });
  });

  it("returns previous, next, and module navigation behavior", () => {
    const navigation = getTopicNavigation(pilotTopicFixture);

    expect(navigation.previous).toBeUndefined();
    expect(navigation.next?.title).toBe("Beispielthema Beta");
    expect(navigation.backToModule.href).toBe("/lernen/pilot-modul/");
  });

  it("rejects incomplete topic view models", () => {
    const incomplete: TopicPageViewModel = {
      ...pilotTopicFixture,
      learningObjectives: [],
    };

    expect(validateTopicPageViewModel(incomplete)).toBe(false);
  });
});
