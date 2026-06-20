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
  await expect(page.locator('button[type="submit"]')).toHaveCount(6);
  await expect(page.locator("form[data-mikro1-evaluation-form]")).toHaveCount(
    6,
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
  ).toHaveCount(6);
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

test("pref-practice-04 evaluates a complete classification mapping and supports revision", async ({
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
});

test("pref-practice-04 supports focused native selects and keyboard submission", async ({
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
  await expect(page.getByLabel("x ≽ y and not y ≽ x")).toBeVisible();
  await expect(
    page.getByRole("group", { name: "Is the relation complete?" }).first(),
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
