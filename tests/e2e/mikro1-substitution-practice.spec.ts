import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const path = "/Study/ueben/mikrooekonomik-1/substitutionseffekt/";

test("substitution practice renders the bounded authorized set without answer metadata", async ({
  page,
}, testInfo) => {
  await page.goto(path);
  await expect(page.locator(".static-practice-exercise")).toHaveCount(8);
  await expect(page.locator("#sub-practice-04")).toHaveCount(0);
  await expect(
    page.locator("form[data-substitution-evaluation-form]"),
  ).toHaveCount(6);
  await expect(page.locator("textarea")).toHaveCount(6);
  await expect(
    page.locator("[data-substitution-evaluation-submit]"),
  ).toHaveCount(6);
  await expect(
    page.locator("#sub-practice-11 button, #sub-practice-12 button"),
  ).toHaveCount(0);
  const html = await page.content();
  expect(html).not.toMatch(
    /accepted|tolerance|correctAnswer|solution|guidance|claimId/i,
  );
  if (testInfo.project.name.includes("no-js")) {
    await expect(
      page.getByText("Die Antwortprüfung benötigt JavaScript.").first(),
    ).toBeVisible();
    await expect(page.locator("input[type='radio']").first()).toBeVisible();
  }
});

test("substitution evaluation supports keyboard responses, revision, and isolated feedback", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name.includes("no-js"), "Requires JavaScript.");
  await page.goto(path);
  const first = page.locator("#sub-practice-01");
  await first.getByLabel("u_x1/u_x2", { exact: true }).focus();
  await page.keyboard.press("Space");
  const check = first.getByRole("button", { name: "Antwort prüfen" });
  await expect(check).toBeEnabled();
  await check.press("Enter");
  await expect(first.getByRole("status")).toContainText("Antwort geprüft");
  const second = page.locator("#sub-practice-02");
  await expect(second.getByRole("status")).toBeHidden();
  await first.getByLabel("-u_x1/u_x2").check();
  await check.click();
  await expect(first.getByRole("status")).toContainText("Noch nicht richtig");
});

test("substitution evaluation handles multi-select and numeric input", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name.includes("no-js"), "Requires JavaScript.");
  await page.goto(path);
  const assumptions = page.locator("#sub-practice-03");
  for (const option of [
    "Positive ratio interpretation",
    "u_x2 is not zero",
    "Utility held fixed",
    "Local differentiability",
    "Interior positive bundle",
  ])
    await assumptions.getByLabel(option).check();
  await assumptions.getByRole("button", { name: "Antwort prüfen" }).click();
  await expect(assumptions.getByRole("status")).toContainText(
    "Antwort geprüft",
  );
  const numeric = page.locator("#sub-practice-08");
  await numeric.getByLabel("Sigma").fill("4 / 2");
  await numeric.getByRole("button", { name: "Antwort prüfen" }).click();
  await expect(numeric.getByRole("status")).toContainText("Antwort geprüft");
  await numeric.getByLabel("Sigma").fill("2,0");
  await numeric.getByRole("button", { name: "Antwort prüfen" }).click();
  await expect(numeric.getByRole("status")).toContainText(
    "Antwortformat ungültig",
  );
});

test("substitution practice has no obvious accessibility violations", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name.includes("no-js"),
    "Axe requires JavaScript.",
  );
  await page.goto(path);
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
