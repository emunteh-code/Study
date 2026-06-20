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
  await expect(page.locator('button[type="submit"]')).toHaveCount(4);
  await expect(page.locator("form[data-mikro1-evaluation-form]")).toHaveCount(
    4,
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
  ).toHaveCount(8);
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
  await expect(submit).toBeDisabled();

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
