export const authorizedMikro1SubstitutionExerciseIds = [
  "sub-practice-01",
  "sub-practice-02",
  "sub-practice-03",
  "sub-practice-08",
  "sub-practice-09",
  "sub-practice-10",
  "sub-practice-11",
  "sub-practice-12",
] as const;
export type Mikro1SubstitutionExerciseId =
  (typeof authorizedMikro1SubstitutionExerciseIds)[number];
export const rejectedMikro1SubstitutionExerciseIds = [
  "sub-practice-04",
  "sub-practice-05",
  "sub-practice-06",
  "sub-practice-07",
] as const;
type Option = { id: string; label: string };
type Support =
  | { type: "paragraph"; id: string; text: string }
  | { type: "math"; id: string; latex: string; accessibleText: string };
type Base = {
  id: Mikro1SubstitutionExerciseId;
  displayNumber: number;
  title: string;
  objective: string;
  prompt: string;
  assumptions?: { heading: "Annahmen"; items: readonly string[] };
  support: readonly Support[];
};
export type StaticMikro1SubstitutionExercise = Base &
  (
    | {
        responseType: "single-choice" | "multi-select";
        responseId: string;
        label: string;
        options: readonly Option[];
        instruction: string;
      }
    | {
        responseType: "numeric-text";
        responseId: string;
        label: string;
        instruction: string;
        inputMode: "decimal";
      }
    | {
        responseType: "self-review";
        fields: readonly {
          id: string;
          label: string;
          prompt: string;
          control: "textarea";
        }[];
      }
  );

export function assertValidMikro1SubstitutionExercises(
  value: readonly StaticMikro1SubstitutionExercise[],
): void {
  if (value.length !== 8)
    throw new Error("Expected exactly eight substitution exercises.");
  const ids = new Set(value.map((item) => item.id));
  if (
    ids.size !== 8 ||
    authorizedMikro1SubstitutionExerciseIds.some((id, i) => value[i]?.id !== id)
  )
    throw new Error("Invalid authorized exercise ordering.");
  const numbers = new Set(value.map((item) => item.displayNumber));
  if (
    numbers.size !== 8 ||
    value.some(
      (item, i) =>
        item.displayNumber !== i + 1 ||
        !item.title.trim() ||
        !item.objective.trim() ||
        !item.prompt.trim(),
    )
  )
    throw new Error("Invalid display metadata.");
  for (const item of value) {
    if (
      item.assumptions &&
      (item.assumptions.heading !== "Annahmen" ||
        !item.assumptions.items.length ||
        item.assumptions.items.some((text) => !text.trim()))
    )
      throw new Error("Invalid assumptions.");
    const supportIds = new Set(item.support.map((block) => block.id));
    if (
      supportIds.size !== item.support.length ||
      item.support.some(
        (block) =>
          !block.id.trim() ||
          (block.type === "math" && !block.accessibleText.trim()),
      )
    )
      throw new Error("Invalid supporting content.");
    if (item.responseType === "self-review") {
      const fields = new Set(item.fields.map((field) => field.id));
      if (fields.size !== item.fields.length || !fields.size)
        throw new Error("Invalid self-review fields.");
    } else if (item.responseType !== "numeric-text") {
      const options = new Set(item.options.map((option) => option.id));
      if (
        options.size !== item.options.length ||
        item.options.length < 2 ||
        item.options.some((option) => !option.id.trim() || !option.label.trim())
      )
        throw new Error("Invalid options.");
    }
  }
}
