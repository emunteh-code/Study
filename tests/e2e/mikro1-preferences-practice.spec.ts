import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const practicePath = "/Study/ueben/mikrooekonomik-1/praeferenzrelationen/";

test("static Mikro I preferences practice renders all approved exercises without evaluation", async ({
  page,
}) => {
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
  await expect(page.locator('button[type="submit"]')).toHaveCount(0);
  await expect(page.getByText("Score", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Correct", { exact: true })).toHaveCount(0);
  await expect(page.getByText("The two definitions require both")).toHaveCount(
    0,
  );
  const html = await page.content();
  expect(html).not.toContain("correctOptionIds");
  expect(html).not.toContain("claim-pref-");
  expect(html).not.toContain("The relation is complete because every");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  );
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
  ).toHaveCount(12);
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
