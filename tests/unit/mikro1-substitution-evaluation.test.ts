import { describe, expect, it } from "vitest";

import { mikro1SubstitutionPracticeExercises } from "../../src/data/mikro1-substitution-practice";
import * as evaluator from "../../src/lib/mikro1-substitution-evaluation";

const evaluate = evaluator.evaluateMikro1SubstitutionResponse;
const status = (id: string, response: string | readonly string[] | undefined) =>
  evaluate(id, response).status;

describe("Mikro I substitution evaluator", () => {
  it("evaluates every authorized deterministic response", () => {
    expect(status("sub-practice-01", ["positive-ratio"])).toBe("correct");
    expect(status("sub-practice-02", ["ux1"])).toBe("correct");
    expect(
      status("sub-practice-03", [
        "interior",
        "differentiable",
        "fixed-utility",
        "nonzero-denominator",
        "positive-ratio",
      ]),
    ).toBe("correct");
    expect(status("sub-practice-08", "2")).toBe("correct");
    expect(status("sub-practice-09", "3 / 4")).toBe("correct");
    expect(status("sub-practice-10", ["degree-one"])).toBe("correct");
  });

  it("keeps the GRS orientation and assumptions mappings separate", () => {
    expect(status("sub-practice-02", ["ux2"])).toBe("incorrect");
    expect(status("sub-practice-03", ["interior"])).toBe("incorrect");
  });

  it("handles single-choice structural states", () => {
    expect(status("sub-practice-01", undefined)).toBe("incomplete");
    expect(status("sub-practice-01", [])).toBe("incomplete");
    expect(status("sub-practice-01", ["unknown"])).toBe("malformed");
    expect(status("sub-practice-01", "positive-ratio")).toBe("malformed");
    expect(status("sub-practice-01", ["positive-ratio", "signed-slope"])).toBe(
      "malformed",
    );
  });

  it("handles multi-select structure without partial credit", () => {
    const accepted = [
      "interior",
      "differentiable",
      "fixed-utility",
      "nonzero-denominator",
      "positive-ratio",
    ];
    expect(status("sub-practice-03", [...accepted].reverse())).toBe("correct");
    expect(status("sub-practice-03", [])).toBe("incomplete");
    expect(status("sub-practice-03", ["interior", "interior"])).toBe(
      "malformed",
    );
    expect(status("sub-practice-03", ["unknown"])).toBe("malformed");
    expect(status("sub-practice-03", accepted.slice(0, -1))).toBe("incorrect");
    expect(status("sub-practice-03", [...accepted, "budget"])).toBe(
      "incorrect",
    );
    expect(status("sub-practice-03", "interior")).toBe("malformed");
  });

  it("accepts only the approved numeric grammar", () => {
    for (const value of ["2", "2.0", "+2", "4/2", "4 / 2"]) {
      expect(status("sub-practice-08", value)).toBe("correct");
    }
    for (const value of [
      "",
      "2,0",
      "2e0",
      "1+1",
      "sigma is 2",
      "1/0",
      "NaN",
      "Infinity",
      "1/",
      "2/3/4",
    ]) {
      expect(status("sub-practice-08", value)).toBe(
        value === "" ? "incomplete" : "malformed",
      );
    }
    expect(status("sub-practice-08", ["2"])).toBe("malformed");
  });

  it("uses an inclusive numeric tolerance boundary", () => {
    expect(status("sub-practice-08", "2.0000000005")).toBe("correct");
    expect(status("sub-practice-08", "1.9999999995")).toBe("correct");
    expect(status("sub-practice-08", "2.000000002")).toBe("incorrect");
    expect(status("sub-practice-08", "1.999999998")).toBe("incorrect");
  });

  it("rejects unknown and unsupported practice IDs", () => {
    expect(status("unknown", ["positive-ratio"])).toBe("malformed");
    expect(status("sub-practice-11", ["anything"])).toBe("malformed");
    expect(status("sub-practice-04", ["anything"])).toBe("malformed");
  });

  it("validates supplied private rule fixtures without exporting the production map", () => {
    const valid = [
      {
        id: "sub-practice-01",
        kind: "single-choice",
        accepted: ["positive-ratio"],
      },
      { id: "sub-practice-02", kind: "single-choice", accepted: ["ux1"] },
      { id: "sub-practice-03", kind: "multi-select", accepted: ["interior"] },
      { id: "sub-practice-08", kind: "numeric-text", value: 2, tolerance: 0 },
      {
        id: "sub-practice-09",
        kind: "numeric-text",
        value: 0.75,
        tolerance: 0,
      },
      {
        id: "sub-practice-10",
        kind: "single-choice",
        accepted: ["degree-one"],
      },
    ] as const;
    expect(() =>
      evaluator.assertInternalSubstitutionEvaluatorRules(valid),
    ).not.toThrow();
    for (const invalid of [
      valid.slice(1),
      [...valid, { ...valid[0], id: "sub-practice-11" }],
      [...valid.slice(0, 5), { ...valid[5], id: "sub-practice-04" }],
      [...valid.slice(1), valid[0], valid[0]],
      [{ ...valid[0], kind: "multi-select" }, ...valid.slice(1)],
      [{ ...valid[0], accepted: ["unknown"] }, ...valid.slice(1)],
      [...valid.slice(0, 2), { ...valid[2], accepted: [] }, ...valid.slice(3)],
      [
        ...valid.slice(0, 2),
        { ...valid[2], accepted: ["interior", "interior"] },
        ...valid.slice(3),
      ],
      [
        ...valid.slice(0, 2),
        { ...valid[2], accepted: ["unknown"] },
        ...valid.slice(3),
      ],
      [
        ...valid.slice(0, 3),
        { ...valid[3], value: Infinity },
        ...valid.slice(4),
      ],
      [...valid.slice(0, 3), { ...valid[3], tolerance: -1 }, ...valid.slice(4)],
      [
        ...valid.slice(0, 3),
        { ...valid[3], tolerance: Infinity },
        ...valid.slice(4),
      ],
    ]) {
      expect(() =>
        evaluator.assertInternalSubstitutionEvaluatorRules(invalid),
      ).toThrow();
    }
  });

  it("does not disclose evaluator metadata through results or public data", () => {
    const output = JSON.stringify(evaluate("sub-practice-03", ["interior"]));
    expect(Object.keys(evaluator)).not.toContain("rules");
    expect(output).not.toMatch(
      /positive-ratio|accepted|tolerance|solution|formula|source|rule/i,
    );
    expect(JSON.stringify(mikro1SubstitutionPracticeExercises)).not.toMatch(
      /accepted|tolerance|evaluator|correctAnswer|solution|claimId/i,
    );
    expect(Object.keys(mikro1SubstitutionPracticeExercises)).not.toContain(
      "rules",
    );
  });
});
