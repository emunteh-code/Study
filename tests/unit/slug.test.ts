import { describe, expect, it } from "vitest";

import {
  assertLowercaseAsciiSlug,
  isLowercaseAsciiSlug,
} from "../../src/lib/slug";

describe("isLowercaseAsciiSlug", () => {
  it("accepts lowercase ASCII slugs", () => {
    expect(isLowercaseAsciiSlug("pilot-module")).toBe(true);
    expect(isLowercaseAsciiSlug("module-2")).toBe(true);
  });

  it("rejects uppercase, umlauts, spaces, and empty values", () => {
    expect(isLowercaseAsciiSlug("Pilot")).toBe(false);
    expect(isLowercaseAsciiSlug("üben")).toBe(false);
    expect(isLowercaseAsciiSlug("pilot module")).toBe(false);
    expect(isLowercaseAsciiSlug("")).toBe(false);
  });
});

describe("assertLowercaseAsciiSlug", () => {
  it("returns a valid slug unchanged", () => {
    expect(assertLowercaseAsciiSlug("topic-alpha")).toBe("topic-alpha");
  });

  it("throws for invalid slugs", () => {
    expect(() => assertLowercaseAsciiSlug("Topic Alpha")).toThrow(
      "Invalid lowercase ASCII slug",
    );
  });
});
