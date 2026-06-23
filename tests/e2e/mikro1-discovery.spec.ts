import { expect, test } from "@playwright/test";

const base = "/Study";

test("learning and practice discovery lead to the two implemented Mikro I topics", async ({
  page,
}) => {
  await page.goto(`${base}/lernen/`);
  await expect(page.getByRole("heading", { name: "Lernen" })).toBeVisible();
  await page.getByRole("link", { name: "Mikroökonomik I öffnen" }).click();
  await expect(
    page.getByRole("heading", { name: "Mikroökonomik I" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Übungsset öffnen" }),
  ).toHaveCount(2);
  await expect(page.locator("a[href*='pilot-modul']")).toHaveCount(0);

  await page.goto(`${base}/ueben/`);
  await expect(
    page.getByRole("link", { name: "Übungsset öffnen" }),
  ).toHaveCount(2);
  await expect(page.locator("a[href*='pilot-modul']")).toHaveCount(0);
});

test("Mikro I practice routes expose an accessible shared learning path", async ({
  page,
}) => {
  for (const route of [
    "/ueben/mikrooekonomik-1/praeferenzrelationen/",
    "/ueben/mikrooekonomik-1/substitutionseffekt/",
  ]) {
    await page.goto(`${base}${route}`);
    const navigation = page.getByRole("navigation", {
      name: "Mikroökonomik I Übungsnavigation",
    });
    await expect(navigation).toBeVisible();
    await expect(navigation.locator('a[aria-current="page"]')).toHaveCount(1);
    await expect(
      navigation.getByRole("link", { name: "Kursübersicht" }),
    ).toBeVisible();
  }
});

test("Mikro I discovery remains usable at a narrow keyboard viewport", async ({
  page,
}, testInfo) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto(`${base}/lernen/mikrooekonomik-1/`);
  await page.keyboard.press("Tab");
  await expect(page.locator(":focus")).toBeVisible();
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(320);
  testInfo.annotations.push({
    type: "viewport",
    description: "320 CSS pixels",
  });
});
