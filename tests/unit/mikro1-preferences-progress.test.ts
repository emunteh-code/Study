import { describe, expect, it } from "vitest";

import {
  loadMikro1PreferenceCompletionState,
  mikro1PreferenceCompletionStorageKey,
} from "../../src/scripts/mikro1-preferences-progress";

const ids = new Set(["pref-practice-01", "pref-practice-02"]);

describe("Mikro I preference completion storage", () => {
  it("accepts only the versioned allow-listed completion payload", () => {
    expect(
      loadMikro1PreferenceCompletionState(
        JSON.stringify({ version: 1, completed: ["pref-practice-02"] }),
        ids,
      ),
    ).toEqual({ version: 1, completed: ["pref-practice-02"] });
    expect(mikro1PreferenceCompletionStorageKey).toBe(
      "study.mikro1.preference-practice.completion",
    );
  });

  it("recovers to an empty state for malformed, unsupported, unknown, and duplicate payloads", () => {
    for (const raw of [
      "{",
      JSON.stringify({ version: 2, completed: [] }),
      JSON.stringify({ version: 1, completed: ["unknown"] }),
      JSON.stringify({
        version: 1,
        completed: ["pref-practice-01", "pref-practice-01"],
      }),
      JSON.stringify({ version: 1, completed: "pref-practice-01" }),
    ]) {
      expect(loadMikro1PreferenceCompletionState(raw, ids)).toEqual({
        version: 1,
        completed: [],
      });
    }
  });
});
