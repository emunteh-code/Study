import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const showcasePath = "/Study/dev/components/";

test("component showcase loads with one h1 and noindex robots", async ({
  page,
}) => {
  await page.goto(showcasePath);

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Study component showcase",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  );
});

test("component showcase contents links reach each section", async ({
  page,
}) => {
  await page.goto(showcasePath);

  for (const section of [
    "Foundation components",
    "States",
    "Learning components",
    "Long content",
  ]) {
    await page.getByRole("link", { name: section }).click();
    await expect(page.getByRole("heading", { name: section })).toBeVisible();
  }
});

test("skip link moves focus to the main content", async ({ page }) => {
  await page.goto(showcasePath);
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Zum Inhalt springen" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});

test("keyboard focus is visible on links and buttons", async ({ page }) => {
  await page.goto(showcasePath);

  await page.keyboard.press("Tab");
  const focusedOutline = await page.evaluate(() => {
    const focused = document.activeElement;
    return focused ? getComputedStyle(focused).outlineStyle : "";
  });
  expect(focusedOutline).not.toBe("none");

  await page.getByRole("button", { name: "Quiet action" }).focus();
  const buttonOutline = await page.evaluate(() => {
    const focused = document.activeElement;
    return focused ? getComputedStyle(focused).outlineStyle : "";
  });
  expect(buttonOutline).not.toBe("none");
});

test("links and buttons have accessible names", async ({ page }) => {
  await page.goto(showcasePath);

  const unnamed = await page.evaluate(() => {
    const controls = Array.from(document.querySelectorAll("a, button"));
    return controls.filter((control) => !control.textContent?.trim()).length;
  });
  expect(unnamed).toBe(0);
});

test("disabled action is a disabled button and no disabled links exist", async ({
  page,
}) => {
  await page.goto(showcasePath);

  await expect(
    page.getByRole("button", { name: "Unavailable action" }),
  ).toBeDisabled();
  const disabledLinks = await page
    .locator("a[aria-disabled], a[disabled]")
    .count();
  expect(disabledLinks).toBe(0);
});

test("breadcrumbs expose navigation semantics and current page", async ({
  page,
}) => {
  await page.goto(showcasePath);

  const breadcrumbs = page.getByRole("navigation", {
    name: "Brotkrümelnavigation",
  });
  await expect(breadcrumbs.getByRole("list")).toBeVisible();
  await expect(
    breadcrumbs.getByRole("link", { name: "Startseite" }),
  ).toHaveAttribute("href", "/Study/");
  await expect(breadcrumbs.locator('[aria-current="page"]')).toHaveText(
    "Development component showcase",
  );
});

test("solution disclosure works without custom JavaScript", async ({
  page,
}) => {
  await page.goto(showcasePath);

  const disclosure = page.getByRole("group").filter({
    has: page.getByText(
      "The next step after understanding is guided practice.",
    ),
  });
  await expect(
    page.getByText("The next step after understanding is guided practice."),
  ).not.toBeVisible();
  await page.getByText("Lösung anzeigen").click();
  await expect(
    page.getByText("The next step after understanding is guided practice."),
  ).toBeVisible();
  await expect(disclosure).toBeVisible();
});

test("component showcase has no obvious accessibility violations", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name.includes("no-js"),
    "axe requires JavaScript execution.",
  );

  await page.goto(showcasePath);
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

for (const width of [320, 768, 1440]) {
  test(`component showcase has no horizontal overflow at ${width} CSS pixels`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(showcasePath);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
  });

  test(`component showcase has no horizontal overflow in dark mode at ${width} CSS pixels`, async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.setViewportSize({ width, height: 900 });
    await page.goto(showcasePath);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
  });
}

test("component showcase remains usable with JavaScript disabled", async ({
  page,
}) => {
  await page.goto(showcasePath);

  await expect(
    page.getByRole("heading", { name: "Study component showcase" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Learning components" }),
  ).toBeVisible();
  await expect(page.getByText("Lösung anzeigen")).toBeVisible();
});
