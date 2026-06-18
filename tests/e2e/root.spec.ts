import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const rootPath = "/Study/";

test("root page loads and exposes the main heading", async ({ page }) => {
  await page.goto(rootPath);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Die Anwendungsbasis wird aufgebaut.",
  );
});

test("skip link moves focus to the main content", async ({ page }) => {
  await page.goto(rootPath);
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Zum Inhalt springen" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});

test("root page has no obvious accessibility violations", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name.includes("no-js"),
    "axe requires JavaScript execution.",
  );

  await page.goto(rootPath);
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("root page does not horizontally overflow at 320 CSS pixels", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto(rootPath);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  );
  expect(overflow).toBe(false);
});

test("root page remains usable with JavaScript disabled", async ({ page }) => {
  await page.goto(rootPath);
  await expect(page.getByRole("main")).toContainText(
    "Diese temporäre Startseite",
  );
  await expect(
    page.getByText("Kein offizielles Universitätsangebot"),
  ).toBeVisible();
});
