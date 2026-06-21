import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const practicePath = "/Study/ueben/mikrooekonomik-1/praeferenzrelationen/";

test("Mikro I preferences practice renders all approved exercises with scoped evaluation controls", async ({
  page,
}, testInfo) => {
  await page.goto(practicePath);

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Preference relations practice",
  );
  await expect(page.locator(".static-practice-exercise")).toHaveCount(12);
  await expect(
    page.getByRole("heading", { name: "Read a weak comparison" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Derive the incompatibility" }),
  ).toBeVisible();
  await expect(page.getByText("Notation used in this set")).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toHaveCount(12);
  await expect(page.locator("form[data-mikro1-evaluation-form]")).toHaveCount(
    9,
  );
  await expect(page.getByText("Score", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Correct", { exact: true })).toHaveCount(0);
  await expect(page.getByText("The two definitions require both")).toHaveCount(
    0,
  );
  const html = await page.content();
  expect(html).not.toContain("correctOptionIds");
  expect(html).not.toContain("acceptedAnswerStructure");
  expect(html).not.toContain("solutionMetadata");
  expect(html).not.toContain("classificationMappings");
  expect(html).not.toContain("relationTableMappings");
  expect(html).not.toContain("transitivityChain");
  expect(html).not.toContain("transitivityViolation");
  expect(html).not.toContain("rationalityClassification");
  expect(html).not.toContain("selfReviewMetadata");
  expect(html).not.toContain("Model basis:");
  expect(html).not.toContain("claim-pref-");
  expect(html).not.toContain("The relation is complete because every");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  );

  if (testInfo.project.name.includes("no-js")) {
    await expect(
      page.getByText("Answer checking requires JavaScript.").first(),
    ).toBeVisible();
  }
});

test("static practice controls and relation tables expose native semantics", async ({
  page,
}) => {
  await page.goto(practicePath);

  await expect(page.locator("fieldset legend")).toHaveCount(12);
  await expect(page.locator("textarea")).toHaveCount(11);
  await expect(page.locator("select")).toHaveCount(12);
  await expect(page.locator("table caption")).toHaveCount(6);
  await expect(page.locator("table thead th[scope='col']")).toHaveCount(24);
  await expect(
    page.getByLabel("x is weakly preferred to y").first(),
  ).toBeVisible();
  await expect(
    page.getByText(
      "Response evaluation is not available in this practice version.",
    ),
  ).toHaveCount(0);
});

test("self-review opens approved comparison material without grading learner text", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name.includes("no-js"), "Requires JavaScript.");
  await page.goto(practicePath);

  const weakComparison = page.locator("#pref-practice-01");
  const compare = weakComparison.getByRole("button", {
    name: "Compare with model solution",
  });
  await expect(compare).toBeDisabled();
  await weakComparison.getByLabel("What does x ≽ y state?").fill("   ");
  await weakComparison
    .getByLabel("What does the displayed relation establish about y ≽ x?")
    .fill("My first attempt");
  await expect(compare).toBeDisabled();
  await weakComparison.getByLabel("What does x ≽ y state?").fill("My response");
  await expect(compare).toBeEnabled();
  await compare.focus();
  await page.keyboard.press("Enter");
  const panel = weakComparison.locator("[data-self-review-panel]");
  await expect(panel).toBeVisible();
  await expect(panel).toContainText("My response");
  await expect(panel).toContainText("Model guidance");
  await expect(weakComparison.getByRole("status")).toContainText(
    "Comparison opened",
  );
  await expect(
    weakComparison.getByText("Correct", { exact: true }),
  ).toHaveCount(0);
  await panel.getByRole("button", { name: "Close comparison" }).click();
  await expect(panel).toBeHidden();
  await expect(compare).toBeFocused();

  const diagnosis = page.locator("#pref-practice-11");
  await diagnosis
    .getByRole("group", { name: "Does completeness hold?" })
    .getByLabel("Yes", { exact: true })
    .check();
  await diagnosis
    .getByRole("group", { name: "Does transitivity hold?" })
    .getByLabel("No", { exact: true })
    .check();
  await diagnosis
    .getByLabel("First alternative in a violating triple")
    .selectOption("y");
  await diagnosis
    .getByLabel("Middle alternative in a violating triple")
    .selectOption("z");
  await diagnosis
    .getByLabel("Final alternative in a violating triple")
    .selectOption("x");
  await expect(
    diagnosis.getByRole("button", { name: "Compare with model solution" }),
  ).toBeDisabled();
  await diagnosis
    .getByLabel("Smallest repair to the learner’s reasoning")
    .fill("Needs another condition.");
  await expect(
    diagnosis.getByRole("button", { name: "Compare with model solution" }),
  ).toBeEnabled();

  const proof = page.locator("#pref-practice-12");
  for (const fieldId of [
    "assumption",
    "strict-consequence",
    "indifference-consequence",
    "contradiction",
    "conclusion",
  ]) {
    await proof
      .locator(`[data-response-field-id="${fieldId}"]`)
      .fill(`Attempt for ${fieldId}`);
  }
  const proofCompare = proof.getByRole("button", {
    name: "Compare with model solution",
  });
  await expect(proofCompare).toBeEnabled();
  await proofCompare.click();
  await expect(proof.locator("[data-self-review-panel]")).toContainText(
    "Attempt for assumption",
  );
});

test("pref-practice-07 and pref-practice-08 evaluate reviewed transitivity reasoning without exposing directions", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name.includes("no-js"), "Requires JavaScript.");
  await page.goto(practicePath);

  const exercise = page.locator("#pref-practice-07");
  const submit = exercise.getByRole("button", { name: "Check answer" });
  await expect(submit).toBeDisabled();
  await exercise.getByLabel("Yes", { exact: true }).check();
  await exercise
    .getByLabel("First premise in the non-reflexive chain")
    .fill("y ≽ x");
  await exercise
    .getByLabel("Second premise in the non-reflexive chain")
    .fill("y ≽ z");
  await exercise.getByLabel("Required conclusion").fill("x ≽ z");
  await expect(submit).toBeEnabled();
  await submit.click();

  const feedback = exercise.locator("[data-evaluation-feedback]");
  await expect(feedback).toContainText("Not yet correct");
  await expect(feedback).not.toContainText("x ≽ y");
  await expect(feedback).not.toContainText("first-premise");
  await expect(submit).toHaveAttribute("aria-disabled", "true");

  await exercise
    .getByLabel("First premise in the non-reflexive chain")
    .fill("x ≽ y");
  await expect(feedback).toBeHidden();
  await expect(submit).toBeEnabled();
  await submit.click();
  await expect(feedback).toContainText("Correct");

  const violationExercise = page.locator("#pref-practice-08");
  const violationSubmit = violationExercise.getByRole("button", {
    name: "Check answer",
  });
  await expect(violationSubmit).toBeDisabled();
  await violationExercise.getByLabel("No", { exact: true }).check();
  await violationExercise
    .getByLabel("First alternative in the triple")
    .selectOption("y");
  await violationExercise
    .getByLabel("Middle alternative in the triple")
    .selectOption("x");
  await violationExercise
    .getByLabel("Final alternative in the triple")
    .selectOption("z");
  await expect(violationSubmit).toBeEnabled();
  await violationSubmit.click();

  const violationFeedback = violationExercise.locator(
    "[data-evaluation-feedback]",
  );
  await expect(violationFeedback).toContainText("Not yet correct");
  await expect(violationFeedback).not.toContainText("x, y, z");
  await expect(violationFeedback).not.toContainText("first");
  await expect(violationSubmit).toHaveAttribute("aria-disabled", "true");
  await expect(violationSubmit).toBeDisabled();

  await violationExercise
    .getByLabel("First alternative in the triple")
    .selectOption("x");
  await violationExercise
    .getByLabel("Middle alternative in the triple")
    .selectOption("y");
  await expect(violationFeedback).toBeHidden();
  await expect(violationSubmit).toBeEnabled();
  await violationSubmit.click();
  await expect(violationFeedback).toContainText("Correct");

  await page.reload();
  await expect(
    page.locator("#pref-practice-08 [data-evaluation-feedback]"),
  ).toBeHidden();
});

test("pref-practice-07 and pref-practice-08 support keyboard completion and submission", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name.includes("no-js"), "Requires JavaScript.");
  await page.goto(practicePath);

  const exercise = page.locator("#pref-practice-07");
  const firstPremise = exercise.getByLabel(
    "First premise in the non-reflexive chain",
  );
  await firstPremise.focus();
  await page.keyboard.insertText("x ≽ y");
  await page.keyboard.press("Tab");
  await page.keyboard.insertText("y ≽ z");
  await page.keyboard.press("Tab");
  await page.keyboard.insertText("x ≽ z");
  await exercise.getByLabel("Yes", { exact: true }).focus();
  await page.keyboard.press("Space");

  const submit = exercise.getByRole("button", { name: "Check answer" });
  await expect(submit).toBeEnabled();
  await submit.focus();
  await page.keyboard.press("Enter");
  await expect(exercise.getByRole("status")).toContainText("Correct");
  await expect(submit).toBeFocused();

  const violationExercise = page.locator("#pref-practice-08");
  const first = violationExercise.getByLabel("First alternative in the triple");
  const middle = violationExercise.getByLabel(
    "Middle alternative in the triple",
  );
  const last = violationExercise.getByLabel("Final alternative in the triple");
  await first.focus();
  await page.keyboard.press("x");
  await expect(first).toHaveValue("x");
  await middle.focus();
  await page.keyboard.press("y");
  await expect(middle).toHaveValue("y");
  await last.focus();
  await page.keyboard.press("z");
  await expect(last).toHaveValue("z");
  await violationExercise.getByLabel("No", { exact: true }).focus();
  await page.keyboard.press("Space");

  const violationSubmit = violationExercise.getByRole("button", {
    name: "Check answer",
  });
  await expect(violationSubmit).toBeEnabled();
  await violationSubmit.focus();
  await page.keyboard.press("Enter");
  await expect(violationExercise.getByRole("status")).toContainText("Correct");
  await expect(violationSubmit).toBeFocused();
});

test("pref-practice-05 evaluates the reviewed relation-table positions and supports revision", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name.includes("no-js"), "Requires JavaScript.");
  await page.goto(practicePath);

  const exercise = page.locator("#pref-practice-05");
  const submit = exercise.getByRole("button", { name: "Check answer" });
  await expect(submit).toBeDisabled();
  await expect(
    exercise.getByLabel(
      "For {x, y}, which comparison direction or directions are present?",
    ),
  ).toBeVisible();
  await expect(
    exercise.getByLabel(
      "For {x, z}, which comparison direction or directions are present?",
    ),
  ).toBeVisible();
  await expect(
    exercise.getByLabel(
      "For {y, z}, which comparison direction or directions are present?",
    ),
  ).toBeVisible();

  await exercise
    .getByLabel(
      "For {x, y}, which comparison direction or directions are present?",
    )
    .selectOption("both");
  await exercise
    .getByLabel(
      "For {x, z}, which comparison direction or directions are present?",
    )
    .selectOption("z-x");
  await exercise
    .getByLabel(
      "For {y, z}, which comparison direction or directions are present?",
    )
    .selectOption("y-z");
  await exercise.getByLabel("No", { exact: true }).check();
  await expect(submit).toBeEnabled();
  await submit.click();

  const feedback = exercise.locator("[data-evaluation-feedback]");
  await expect(feedback).toContainText("Partially correct");
  await expect(feedback).toContainText("1 of 4 responses are correct.");
  await expect(feedback).not.toContainText("pair-xz");
  await expect(submit).toHaveAttribute("aria-disabled", "true");

  await exercise
    .getByLabel(
      "For {x, z}, which comparison direction or directions are present?",
    )
    .selectOption("x-z");
  await exercise
    .getByLabel(
      "For {y, z}, which comparison direction or directions are present?",
    )
    .selectOption("z-y");
  await exercise.getByLabel("Yes", { exact: true }).check();
  await expect(feedback).toBeHidden();
  await expect(submit).toBeEnabled();
  await submit.click();
  await expect(feedback).toContainText("Correct");
});

test("pref-practice-05 supports focused relation controls and keyboard submission", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name.includes("no-js"), "Requires JavaScript.");
  await page.goto(practicePath);

  const exercise = page.locator("#pref-practice-05");
  const pairXy = exercise.getByLabel(
    "For {x, y}, which comparison direction or directions are present?",
  );
  await pairXy.focus();
  await expect(pairXy).toBeFocused();
  await pairXy.selectOption("both");
  await exercise
    .getByLabel(
      "For {x, z}, which comparison direction or directions are present?",
    )
    .selectOption("x-z");
  await exercise
    .getByLabel(
      "For {y, z}, which comparison direction or directions are present?",
    )
    .selectOption("z-y");
  await exercise.getByLabel("Yes", { exact: true }).check();

  const submit = exercise.getByRole("button", { name: "Check answer" });
  await expect(submit).toBeEnabled();
  await submit.focus();
  await page.keyboard.press("Enter");
  await expect(exercise.getByRole("status")).toContainText("Correct");
  await expect(submit).toBeFocused();
});

test("pref-practice-04 and pref-practice-10 evaluate classification responses and support revision", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name.includes("no-js"), "Requires JavaScript.");
  await page.goto(practicePath);

  const exercise = page.locator("#pref-practice-04");
  const submit = exercise.getByRole("button", { name: "Check answer" });
  await expect(submit).toBeDisabled();
  await expect(exercise.getByLabel("x ≽ y and not y ≽ x")).toBeVisible();
  await expect(exercise.getByLabel("x ≽ y and y ≽ x")).toBeVisible();
  await expect(
    exercise.getByLabel("The primitive relation used for pairwise comparison"),
  ).toBeVisible();

  await exercise.getByLabel("x ≽ y and not y ≽ x").selectOption("strict");
  await exercise.getByLabel("x ≽ y and y ≽ x").selectOption("weak");
  await exercise
    .getByLabel("The primitive relation used for pairwise comparison")
    .selectOption("strict");
  await expect(submit).toBeEnabled();
  await submit.click();

  const feedback = exercise.locator("[data-evaluation-feedback]");
  await expect(feedback).toContainText("Partially correct");
  await expect(feedback).toContainText("1 of 3 classifications are correct.");
  await expect(submit).toHaveAttribute("aria-disabled", "true");

  await exercise.getByLabel("x ≽ y and y ≽ x").selectOption("indifference");
  await exercise
    .getByLabel("The primitive relation used for pairwise comparison")
    .selectOption("weak");
  await expect(feedback).toBeHidden();
  await expect(submit).toBeEnabled();
  await submit.click();
  await expect(feedback).toContainText("Correct");

  const rationalityExercise = page.locator("#pref-practice-10");
  const rationalitySubmit = rationalityExercise.getByRole("button", {
    name: "Check answer",
  });
  await expect(rationalitySubmit).toBeDisabled();
  await rationalityExercise
    .getByRole("group", { name: "Is the relation complete?" })
    .getByLabel("Yes", { exact: true })
    .check();
  await rationalityExercise
    .getByRole("group", { name: "Is the relation transitive?" })
    .getByLabel("No", { exact: true })
    .check();
  await rationalityExercise
    .getByLabel("Complete but not transitive; therefore not rational.")
    .check();
  await expect(rationalitySubmit).toBeEnabled();
  await rationalitySubmit.click();

  const rationalityFeedback = rationalityExercise.locator(
    "[data-evaluation-feedback]",
  );
  await expect(rationalityFeedback).toContainText("Not yet correct");
  await expect(rationalityFeedback).not.toContainText(
    "Complete and transitive",
  );
  await expect(rationalityFeedback).not.toContainText("classification");
  await expect(rationalitySubmit).toBeDisabled();

  await rationalityExercise
    .getByRole("group", { name: "Is the relation transitive?" })
    .getByLabel("Yes", { exact: true })
    .check();
  await rationalityExercise
    .getByLabel("Complete and transitive; therefore rational.")
    .check();
  await expect(rationalityFeedback).toBeHidden();
  await expect(rationalitySubmit).toBeEnabled();
  await rationalitySubmit.click();
  await expect(rationalityFeedback).toContainText("Correct");

  await page.reload();
  await expect(
    page.locator("#pref-practice-10 [data-evaluation-feedback]"),
  ).toBeHidden();
});

test("pref-practice-04 and pref-practice-10 support keyboard completion and submission", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name.includes("no-js"), "Requires JavaScript.");
  await page.goto(practicePath);

  const exercise = page.locator("#pref-practice-04");
  const selects = exercise.locator("select");
  await selects.nth(0).focus();
  await expect(selects.nth(0)).toBeFocused();
  await selects.nth(0).selectOption("strict");
  await selects.nth(1).focus();
  await expect(selects.nth(1)).toBeFocused();
  await selects.nth(1).selectOption("indifference");
  await selects.nth(2).focus();
  await expect(selects.nth(2)).toBeFocused();
  await selects.nth(2).selectOption("weak");

  const submit = exercise.getByRole("button", { name: "Check answer" });
  await expect(submit).toBeEnabled();
  await submit.focus();
  await page.keyboard.press("Enter");
  await expect(exercise.getByRole("status")).toContainText("Correct");
  await expect(submit).toBeFocused();

  const rationalityExercise = page.locator("#pref-practice-10");
  const complete = rationalityExercise
    .getByRole("group", { name: "Is the relation complete?" })
    .getByLabel("Yes", { exact: true });
  const transitive = rationalityExercise
    .getByRole("group", { name: "Is the relation transitive?" })
    .getByLabel("Yes", { exact: true });
  const classification = rationalityExercise.getByLabel(
    "Complete and transitive; therefore rational.",
  );
  await complete.focus();
  await page.keyboard.press("Space");
  await transitive.focus();
  await page.keyboard.press("Space");
  await classification.focus();
  await page.keyboard.press("Space");

  const rationalitySubmit = rationalityExercise.getByRole("button", {
    name: "Check answer",
  });
  await expect(rationalitySubmit).toBeEnabled();
  await rationalitySubmit.focus();
  await page.keyboard.press("Enter");
  await expect(rationalityExercise.getByRole("status")).toContainText(
    "Correct",
  );
  await expect(rationalitySubmit).toBeFocused();
});

test("scoped exercises evaluate selected answers without revealing a solution", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name.includes("no-js"), "Requires JavaScript.");
  await page.goto(practicePath);

  const answers = [
    { id: "pref-practice-02", label: "x ∼ y means x ≽ y and y ≽ x." },
    {
      id: "pref-practice-03",
      label: "False",
      justification: "Both directions hold.",
    },
    {
      id: "pref-practice-06",
      label: "Not complete, because neither x ≽ z nor z ≽ x holds.",
      justification: "The x and z pair has no direction.",
    },
    {
      id: "pref-practice-09",
      label: "False",
      justification: "Transitivity is also required.",
    },
  ];

  for (const answer of answers) {
    const exercise = page.locator(`#${answer.id}`);
    await exercise.getByLabel(answer.label, { exact: true }).check();
    if (answer.justification) {
      await exercise.getByLabel("Justification").fill(answer.justification);
    }
    const submit = exercise.getByRole("button", { name: "Check answer" });
    await expect(submit).toBeEnabled();
    await submit.click();
    await expect(exercise.getByRole("status")).toContainText("Correct");
  }

  await expect(page.getByText("Show full solution")).toHaveCount(0);
  await expect(page.getByText("The pair {x,z} has no direction")).toHaveCount(
    0,
  );
});

test("incorrect scoped responses retain keyboard revision and announce feedback", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name.includes("no-js"), "Requires JavaScript.");
  await page.goto(practicePath);

  const exercise = page.locator("#pref-practice-03");
  await exercise.getByLabel("True", { exact: true }).check();
  await exercise.getByLabel("Justification").fill("A first attempt.");
  const submit = exercise.getByRole("button", { name: "Check answer" });
  await submit.focus();
  await page.keyboard.press("Enter");

  const feedback = exercise.locator("[data-evaluation-feedback]");
  await expect(feedback).toHaveAttribute("role", "status");
  await expect(feedback).toHaveAttribute("aria-live", "polite");
  await expect(feedback).toContainText("Not yet correct");
  await expect(submit).toBeFocused();
  await expect(submit).toHaveAttribute("aria-disabled", "true");

  await exercise.getByLabel("False", { exact: true }).check();
  await expect(feedback).toBeHidden();
  await expect(submit).toBeEnabled();
  await submit.click();
  await expect(feedback).toContainText("Correct");
});

test("static Mikro I preferences practice is keyboard reachable and has no obvious accessibility violations", async ({
  page,
}, testInfo) => {
  await page.goto(practicePath);
  await page.keyboard.press("Tab");
  await expect(page.locator(":focus")).toHaveCount(1);

  test.skip(
    testInfo.project.name.includes("no-js"),
    "axe requires JavaScript execution.",
  );
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("static Mikro I preferences practice remains readable without JavaScript", async ({
  page,
}) => {
  await page.goto(practicePath);
  await expect(page.getByRole("main")).toBeVisible();
  await expect(page.locator(".static-practice-exercise")).toHaveCount(12);
  await expect(
    page.getByLabel(
      "For {x, y}, which comparison direction or directions are present?",
    ),
  ).toBeVisible();
  await expect(
    page.getByLabel("First premise in the non-reflexive chain"),
  ).toBeVisible();
  await expect(
    page.getByLabel("First alternative in the triple"),
  ).toBeVisible();
  await expect(page.getByLabel("x ≽ y and not y ≽ x")).toBeVisible();
  await expect(
    page.getByRole("group", { name: "Is the relation complete?" }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("group", { name: "Which final classification is correct?" }),
  ).toBeVisible();
});

for (const width of [320, 768, 1440]) {
  test(`static Mikro I preferences practice has no horizontal overflow at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(practicePath);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
  });
}
