import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const rootPath = "/Study/";
const publicRoutes = [
  "/Study/lernen/",
  "/Study/ueben/",
  "/Study/probeklausuren/",
  "/Study/fortschritt/",
  "/Study/suche/",
  "/Study/impressum/",
];

test("root page loads with shell landmarks", async ({ page }) => {
  await page.goto(rootPath);

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Verstehen, üben und gezielt für die Klausur lernen.",
    }),
  ).toBeVisible();
  await expect(page.getByRole("banner")).toBeVisible();
  await expect(page.getByRole("contentinfo")).toBeVisible();
  await expect(page.getByRole("main")).toBeVisible();
});

test("skip link moves focus to main content", async ({ page }) => {
  await page.goto(rootPath);
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Zum Inhalt springen" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});

test("desktop navigation exposes all primary items", async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 800 });
  await page.goto(rootPath);

  const nav = page.getByRole("navigation", { name: "Hauptnavigation" });
  for (const label of [
    "Lernen",
    "Üben",
    "Probeklausuren",
    "Fortschritt",
    "Suche",
  ]) {
    await expect(nav.getByRole("link", { name: label })).toBeVisible();
  }
});

test("current route uses aria-current and nested learning marks Lernen", async ({
  page,
}) => {
  await page.goto("/Study/lernen/");
  await expect(
    page
      .getByRole("navigation", { name: "Hauptnavigation" })
      .getByRole("link", { name: "Lernen" }),
  ).toHaveAttribute("aria-current", "page");

  await page.goto("/Study/lernen/pilot-modul/");
  await expect(
    page
      .getByRole("navigation", { name: "Hauptnavigation" })
      .getByRole("link", { name: "Lernen" }),
  ).toHaveAttribute("aria-current", "page");
});

test("development routes do not mark public navigation current", async ({
  page,
}) => {
  await page.goto("/Study/dev/components/");
  const currentVisible = await page
    .getByRole("navigation", { name: "Hauptnavigation" })
    .locator('a[aria-current="page"]')
    .count();
  expect(currentVisible).toBe(0);
});

test("footer links exist", async ({ page }) => {
  await page.goto(rootPath);
  const footer = page.getByRole("contentinfo");

  for (const label of [
    "Über das Portal",
    "Methodik",
    "Quellen",
    "Fehler melden",
    "Datenschutz",
    "Impressum",
  ]) {
    await expect(footer.getByRole("link", { name: label })).toBeVisible();
  }
});

test("mobile navigation opens and closes without custom JavaScript", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto(rootPath);

  const menu = page.locator(".mobile-nav");
  await expect(menu).not.toHaveAttribute("open", "");
  await page.getByText("Menü").click();
  await expect(menu).toHaveAttribute("open", "");
  await expect(
    page
      .getByRole("navigation", { name: "Hauptnavigation mobil" })
      .getByRole("link", { name: "Lernen" }),
  ).toBeVisible();
  await page.getByText("Menü").click();
  await expect(menu).not.toHaveAttribute("open", "");
});

test("mobile navigation links are keyboard accessible", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto(rootPath);

  for (let index = 0; index < 6; index += 1) {
    await page.keyboard.press("Tab");
    if (
      await page
        .getByText("Menü")
        .evaluate((element) => element === document.activeElement)
    ) {
      break;
    }
  }
  await expect(page.getByText("Menü")).toBeFocused();
  await page.keyboard.press("Enter");
  await page.keyboard.press("Tab");
  await expect(
    page
      .getByRole("navigation", { name: "Hauptnavigation mobil" })
      .getByRole("link", { name: "Lernen" }),
  ).toBeFocused();
});

for (const width of [320, 768, 1440]) {
  test(`public shell has no horizontal overflow at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/Study/lernen/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
  });

  test(`public shell has no dark-mode horizontal overflow at ${width}px`, async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/Study/lernen/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
  });
}

test("public routes remain reachable without JavaScript", async ({ page }) => {
  for (const route of publicRoutes) {
    await page.goto(route);
    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }
});

test("breadcrumbs remain usable", async ({ page }) => {
  await page.goto("/Study/lernen/");
  const breadcrumbs = page.getByRole("navigation", {
    name: "Brotkrümelnavigation",
  });
  await expect(
    breadcrumbs.getByRole("link", { name: "Startseite" }),
  ).toHaveAttribute("href", "/Study/");
  await expect(breadcrumbs.locator('[aria-current="page"]')).toHaveText(
    "Lernen",
  );
});

test("metadata is correct for public and development pages", async ({
  page,
}) => {
  await page.goto("/Study/lernen/");
  await expect(page).toHaveTitle("Lernen | VWL Lernbegleiter");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://emunteh-code.github.io/Study/lernen/",
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "index, follow",
  );

  await page.goto("/Study/dev/components/");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  );

  await page.goto("/Study/impressum/");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, follow",
  );
  await expect(page.getByText("Entwicklungsplatzhalter")).toBeVisible();
});

for (const route of [
  "/Study/",
  "/Study/lernen/",
  "/Study/fortschritt/",
  "/Study/suche/",
  "/Study/impressum/",
]) {
  test(`axe passes on ${route}`, async ({ page }, testInfo) => {
    test.skip(
      testInfo.project.name.includes("no-js"),
      "axe requires JavaScript execution.",
    );

    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}

test("links have accessible names and no duplicate IDs", async ({ page }) => {
  await page.goto("/Study/lernen/");

  const issues = await page.evaluate(() => {
    const unnamedLinks = Array.from(document.querySelectorAll("a")).filter(
      (link) => !link.textContent?.trim(),
    ).length;
    const ids = Array.from(document.querySelectorAll("[id]")).map(
      (element) => element.id,
    );
    const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);

    return { unnamedLinks, duplicateIds };
  });

  expect(issues.unnamedLinks).toBe(0);
  expect(issues.duplicateIds).toEqual([]);
});

test("generated internal links include the GitHub Pages base path", async ({
  page,
}) => {
  await page.goto("/Study/");
  const badLinks = await page.evaluate(() =>
    Array.from(document.querySelectorAll("a[href]"))
      .map((link) => link.getAttribute("href") ?? "")
      .filter(
        (href) =>
          href.startsWith("/") &&
          !href.startsWith("/Study/") &&
          !href.startsWith("/_astro/"),
      ),
  );

  expect(badLinks).toEqual([]);
});
