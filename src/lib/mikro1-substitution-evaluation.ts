import { mikro1SubstitutionPracticeExercises } from "../data/mikro1-substitution-practice";

export type SubstitutionEvaluationResult = {
  status: "incomplete" | "malformed" | "incorrect" | "correct";
  feedbackId: "incomplete" | "malformed" | "incorrect" | "correct";
};
export type SubstitutionEvaluatorRule =
  | {
      id: string;
      kind: "single-choice" | "multi-select";
      accepted: readonly string[];
    }
  | { id: string; kind: "numeric-text"; value: number; tolerance: number };

function isEvaluatorRule(value: unknown): value is SubstitutionEvaluatorRule {
  if (!value || typeof value !== "object") return false;
  const rule = value as Record<string, unknown>;
  return (
    typeof rule.id === "string" &&
    (rule.kind === "single-choice" || rule.kind === "multi-select"
      ? Array.isArray(rule.accepted) &&
        rule.accepted.every((option) => typeof option === "string")
      : rule.kind === "numeric-text" &&
        typeof rule.value === "number" &&
        typeof rule.tolerance === "number")
  );
}

const rules: readonly SubstitutionEvaluatorRule[] = [
  {
    id: "sub-practice-01",
    kind: "single-choice",
    accepted: ["positive-ratio"],
  },
  { id: "sub-practice-02", kind: "single-choice", accepted: ["ux1"] },
  {
    id: "sub-practice-03",
    kind: "multi-select",
    accepted: [
      "interior",
      "differentiable",
      "fixed-utility",
      "nonzero-denominator",
      "positive-ratio",
    ],
  },
  {
    id: "sub-practice-08",
    kind: "numeric-text",
    value: 2,
    tolerance: 1e-9,
  },
  {
    id: "sub-practice-09",
    kind: "numeric-text",
    value: 0.75,
    tolerance: 1e-9,
  },
  {
    id: "sub-practice-10",
    kind: "single-choice",
    accepted: ["degree-one"],
  },
];
export function assertInternalSubstitutionEvaluatorRules(value: unknown): void {
  const ids = [
    "sub-practice-01",
    "sub-practice-02",
    "sub-practice-03",
    "sub-practice-08",
    "sub-practice-09",
    "sub-practice-10",
  ];
  if (
    !Array.isArray(value) ||
    !value.every(isEvaluatorRule) ||
    value.length !== ids.length ||
    new Set(value.map((rule) => rule.id)).size !== ids.length ||
    ids.some((id) => !value.some((rule) => rule.id === id))
  )
    throw new Error("Invalid evaluator ID set.");
  for (const rule of value) {
    const exercise = mikro1SubstitutionPracticeExercises.find(
      (item) => item.id === rule.id,
    );
    if (
      !exercise ||
      (rule.kind === "numeric-text"
        ? exercise.responseType !== rule.kind ||
          !Number.isFinite(rule.value) ||
          !Number.isFinite(rule.tolerance) ||
          rule.tolerance < 0
        : exercise.responseType !== rule.kind ||
          !("options" in exercise) ||
          !rule.accepted.length ||
          new Set(rule.accepted).size !== rule.accepted.length ||
          rule.accepted.some(
            (id) => !exercise.options.some((option) => option.id === id),
          ))
    )
      throw new Error("Invalid evaluator rule.");
  }
}
assertInternalSubstitutionEvaluatorRules(rules);
function result(
  status: SubstitutionEvaluationResult["status"],
): SubstitutionEvaluationResult {
  return { status, feedbackId: status };
}
function parse(value: string): number | null {
  const text = value.trim();
  if (!text) return null;
  if (/^[+]?(?:\d+(?:\.\d+)?|\d+\s*\/\s*\d+)$/.test(text)) {
    const [a, b] = text.replace(/\s/g, "").split("/");
    const n = b ? Number(a) / Number(b) : Number(a);
    return Number.isFinite(n) && (!b || Number(b) !== 0) ? n : NaN;
  }
  return NaN;
}
export function evaluateMikro1SubstitutionResponse(
  id: string,
  response: string | readonly string[] | undefined,
): SubstitutionEvaluationResult {
  const rule = rules.find((candidate) => candidate.id === id);
  if (!rule) return result("malformed");
  if (response === undefined) return result("incomplete");
  if (rule.kind === "numeric-text") {
    if (typeof response !== "string") return result("malformed");
    const value = parse(response);
    if (value === null) return result("incomplete");
    if (!Number.isFinite(value)) return result("malformed");
    return Math.abs(value - rule.value) <= rule.tolerance
      ? result("correct")
      : result("incorrect");
  }
  if (!Array.isArray(response)) return result("malformed");
  if (!response.length) return result("incomplete");
  if (rule.kind === "single-choice" && response.length !== 1)
    return result("malformed");
  if (new Set(response).size !== response.length) return result("malformed");
  const exercise = mikro1SubstitutionPracticeExercises.find(
    (item) => item.id === id,
  );
  if (
    !exercise ||
    !("options" in exercise) ||
    response.some(
      (item) => !exercise.options.some((option) => option.id === item),
    )
  )
    return result("malformed");
  return response.length === rule.accepted.length &&
    response.every((item) => rule.accepted.includes(item))
    ? result("correct")
    : result("incorrect");
}
