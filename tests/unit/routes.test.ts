import { describe, expect, it } from "vitest";

import { buildCanonicalUrl, buildPageTitle } from "../../src/lib/metadata";
import {
  isRouteCurrent,
  normalizeInternalRoute,
  stripBasePath,
  toBasePath,
} from "../../src/lib/routes";

describe("toBasePath", () => {
  it("handles the root route", () => {
    expect(toBasePath("/")).toBe("/Study/");
  });

  it("handles nested routes with trailing slash conventions", () => {
    expect(toBasePath("/lernen")).toBe("/Study/lernen/");
    expect(toBasePath("/lernen/")).toBe("/Study/lernen/");
  });

  it("preserves fragments and query strings", () => {
    expect(toBasePath("/lernen/#start")).toBe("/Study/lernen/#start");
    expect(toBasePath("/suche/?q=alpha")).toBe("/Study/suche/?q=alpha");
    expect(toBasePath("#learning")).toBe("#learning");
  });

  it("does not alter absolute HTTPS URLs", () => {
    expect(toBasePath("https://example.invalid/path")).toBe(
      "https://example.invalid/path",
    );
  });

  it("rejects unsupported relative routes", () => {
    expect(() => toBasePath("lernen")).toThrow("Unsupported internal route");
  });

  it("prevents duplicate base prefixes", () => {
    expect(toBasePath("/Study/lernen/")).toBe("/Study/lernen/");
  });
});

describe("normalizeInternalRoute", () => {
  it("removes duplicate slashes and adds a trailing slash", () => {
    expect(normalizeInternalRoute("/lernen//beispiel")).toBe(
      "/lernen/beispiel/",
    );
  });
});

describe("stripBasePath", () => {
  it("returns internal routes without the configured base path", () => {
    expect(stripBasePath("/Study/lernen/?x=1#y")).toBe("/lernen/");
  });
});

describe("isRouteCurrent", () => {
  it("uses exact matching for the root route", () => {
    expect(isRouteCurrent("/", "/Study/")).toBe(true);
    expect(isRouteCurrent("/", "/Study/lernen/")).toBe(false);
  });

  it("uses section matching for nested routes", () => {
    expect(isRouteCurrent("/lernen/", "/Study/lernen/beispiel/")).toBe(true);
    expect(isRouteCurrent("/ueben/", "/Study/lernen/beispiel/")).toBe(false);
  });

  it("ignores query strings and fragments", () => {
    expect(isRouteCurrent("/suche/", "/Study/suche/?q=alpha#top")).toBe(true);
  });
});

describe("metadata helpers", () => {
  it("builds page titles", () => {
    expect(buildPageTitle("Lernen")).toBe("Lernen | VWL Lernbegleiter");
    expect(buildPageTitle("VWL Lernbegleiter")).toBe("VWL Lernbegleiter");
  });

  it("builds canonical URLs with the base path", () => {
    expect(buildCanonicalUrl("/lernen/")).toBe(
      "https://emunteh-code.github.io/Study/lernen/",
    );
  });
});
