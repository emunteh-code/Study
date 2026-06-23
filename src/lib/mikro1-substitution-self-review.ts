import { mikro1SubstitutionPracticeExercises } from "../data/mikro1-substitution-practice";

type FieldGuidance = { fieldId: string; guidance: string };
type SelfReviewRecord = {
  id: "sub-practice-11" | "sub-practice-12";
  fields: readonly FieldGuidance[];
};

const records: readonly SelfReviewRecord[] = [
  {
    id: "sub-practice-11",
    fields: [
      {
        fieldId: "homogeneity-property",
        guidance:
          "Degree-one homogeneity is a property of a chosen utility representation: scaling all goods by t scales that representation by t.",
      },
      {
        fieldId: "homothetic-preferences",
        guidance:
          "Homotheticity describes represented preferences: proportional expansions preserve the ordering along rays from the origin.",
      },
      {
        fieldId: "monotonic-transformation",
        guidance:
          "A strictly increasing transformation preserves the represented preference ordering, but it need not preserve degree-one homogeneity of a representation.",
      },
    ],
  },
  {
    id: "sub-practice-12",
    fields: [
      {
        fieldId: "limit-rho-one",
        guidance:
          "As rho approaches 1, the excluded endpoint is a weighted-linear limit associated with perfect-substitutes preferences and sigma approaching infinity.",
      },
      {
        fieldId: "limit-rho-zero",
        guidance:
          "Rho equal to 0 is not substituted directly into the displayed form. After normalization or a monotonic transformation, it gives a Cobb-Douglas preference limit with sigma approaching 1.",
      },
      {
        fieldId: "limit-rho-negative-infinity",
        guidance:
          "For fixed positive weights and positive bundles, rho approaching negative infinity gives a pointwise minimum limit associated with perfect-complements preferences and sigma approaching 0; it is not a finite parameter value.",
      },
    ],
  },
];

export function assertInternalSubstitutionSelfReviewRecords(
  value: unknown,
): void {
  if (!Array.isArray(value) || value.length !== 2)
    throw new Error("Invalid self-review records.");
  const ids = ["sub-practice-11", "sub-practice-12"] as const;
  if (
    new Set(value.map((item) => item?.id)).size !== ids.length ||
    ids.some((id) => !value.some((item) => item?.id === id))
  )
    throw new Error("Invalid self-review IDs.");
  for (const record of value) {
    if (
      !record ||
      typeof record !== "object" ||
      !Array.isArray((record as SelfReviewRecord).fields)
    )
      throw new Error("Invalid self-review record.");
    const exercise = mikro1SubstitutionPracticeExercises.find(
      (item) => item.id === record.id,
    );
    if (!exercise || exercise.responseType !== "self-review")
      throw new Error("Invalid self-review response type.");
    const mapped = (record as SelfReviewRecord).fields.map(
      (field) => field.fieldId,
    );
    if (
      new Set(mapped).size !== mapped.length ||
      mapped.length !== exercise.fields.length ||
      mapped.some((id) => !exercise.fields.some((field) => field.id === id)) ||
      (record as SelfReviewRecord).fields.some(
        (field) => !field.guidance.trim(),
      )
    )
      throw new Error("Invalid self-review field mapping.");
  }
}

assertInternalSubstitutionSelfReviewRecords(records);

export function getMikro1SubstitutionSelfReviewRecord(
  id: string,
): SelfReviewRecord | undefined {
  return records.find((record) => record.id === id);
}

export function isMikro1SubstitutionSelfReviewReady(
  fields: ReadonlyMap<string, string>,
  requiredIds: readonly string[],
): boolean {
  return requiredIds.every((id) => fields.get(id)?.trim());
}
