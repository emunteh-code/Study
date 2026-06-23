import { describe, expect, it } from "vitest";
import {
  assertInternalSubstitutionSelfReviewRecords,
  isMikro1SubstitutionSelfReviewReady,
} from "../../src/lib/mikro1-substitution-self-review";

const valid = [
  {
    id: "sub-practice-11",
    fields: [
      { fieldId: "homogeneity-property", guidance: "a" },
      { fieldId: "homothetic-preferences", guidance: "b" },
      { fieldId: "monotonic-transformation", guidance: "c" },
    ],
  },
  {
    id: "sub-practice-12",
    fields: [
      { fieldId: "limit-rho-one", guidance: "a" },
      { fieldId: "limit-rho-zero", guidance: "b" },
      { fieldId: "limit-rho-negative-infinity", guidance: "c" },
    ],
  },
] as const;

describe("substitution self-review metadata", () => {
  it("accepts the exact authorized records and semantic field mappings", () => {
    expect(() =>
      assertInternalSubstitutionSelfReviewRecords(valid),
    ).not.toThrow();
  });

  it("rejects missing, unauthorized, duplicate, unknown, and empty guidance mappings", () => {
    for (const invalid of [
      valid.slice(1),
      [...valid, { ...valid[0], id: "sub-practice-01" }],
      [valid[0], valid[0]],
      [{ ...valid[0], fields: valid[0].fields.slice(1) }, valid[1]],
      [
        {
          ...valid[0],
          fields: [
            { fieldId: "unknown", guidance: "a" },
            ...valid[0].fields.slice(1),
          ],
        },
        valid[1],
      ],
      [
        {
          ...valid[0],
          fields: [
            { fieldId: "homogeneity-property", guidance: "a" },
            { fieldId: "homogeneity-property", guidance: "b" },
            valid[0].fields[2],
          ],
        },
        valid[1],
      ],
      [
        {
          ...valid[0],
          fields: [
            { ...valid[0].fields[0], guidance: "  " },
            ...valid[0].fields.slice(1),
          ],
        },
        valid[1],
      ],
    ])
      expect(() =>
        assertInternalSubstitutionSelfReviewRecords(invalid),
      ).toThrow();
  });

  it("requires every semantic field to have non-whitespace learner text regardless of order", () => {
    const required = ["first", "second"];
    expect(
      isMikro1SubstitutionSelfReviewReady(
        new Map([["first", "text"]]),
        required,
      ),
    ).toBe(false);
    expect(
      isMikro1SubstitutionSelfReviewReady(
        new Map([
          ["first", " "],
          ["second", "text"],
        ]),
        required,
      ),
    ).toBe(false);
    expect(
      isMikro1SubstitutionSelfReviewReady(
        new Map([
          ["second", "b"],
          ["first", "a"],
        ]),
        required,
      ),
    ).toBe(true);
  });
});
