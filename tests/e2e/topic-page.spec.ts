import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const topicPath = "/Study/lernen/pilot-modul/beispielthema-alpha/";
const modulePath = "/Study/lernen/pilot-modul/";

test("topic page has the required lesson structure", async ({ page }) => {
  await page.goto(topicPath);

  await expect(page).toHaveTitle("Beispielthema Alpha | VWL Lernbegleiter");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Beispielthema Alpha",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);

  const breadcrumbs = page.getByRole("navigation", {
    name: "Brotkrümelnavigation",
  });
  await expect(
    breadcrumbs.getByRole("link", { name: "Startseite" }),
  ).toHaveAttribute("href", "/Study/");
  await expect(
    breadcrumbs.getByRole("link", { name: "Lernen" }),
  ).toHaveAttribute("href", "/Study/lernen/");
  await expect(
    breadcrumbs.getByRole("link", { name: "Pilotmodul A" }),
  ).toHaveAttribute("href", modulePath);
  await expect(breadcrumbs.locator('[aria-current="page"]')).toHaveText(
    "Beispielthema Alpha",
  );

  for (const text of [
    "Pilotmodul A",
    "18 Minuten",
    "Strukturell vollständig",
    "In Prüfung",
    "2026-06-18",
  ]) {
    await expect(page.getByText(text).first()).toBeVisible();
  }
});

test("topic table of contents links to existing section IDs", async ({
  page,
}) => {
  await page.goto(topicPath);

  const toc = page.getByRole("navigation", { name: "Inhalt dieser Lektion" });
  await expect(toc).toBeVisible();

  const hrefs = await toc
    .locator("a")
    .evaluateAll((links) =>
      links.map((link) => link.getAttribute("href") ?? ""),
    );

  expect(hrefs.length).toBeGreaterThan(10);
  for (const href of hrefs) {
    expect(href).toMatch(/^#[a-z][a-z0-9-]*$/);
    await expect(page.locator(href)).toHaveCount(1);
  }
});

test("topic page renders all mandatory learning sections", async ({ page }) => {
  await page.goto(topicPath);

  for (const heading of [
    "Lernziele",
    "Vorwissen",
    "Intuitive Einführung",
    "Kernidee der technischen Vorschau",
    "Formale Struktur",
    "Vollständiges technisches Beispiel",
    "Häufige Fehler",
    "Geführte Übung",
    "Selbstständige Übung",
    "Technische Vorschau der späteren Klausurerkennungsstruktur",
    "Selbstcheck",
    "Wiederholung",
    "Quellen und Prüfstand",
    "Vorheriges und nächstes Thema",
    "Nächster Schritt",
  ]) {
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
  }
});

test("topic page communicates fixture integrity and no fake interactions", async ({
  page,
}) => {
  await page.goto(topicPath);

  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://emunteh-code.github.io/Study/lernen/pilot-modul/beispielthema-alpha/",
  );
  await expect(
    page
      .getByText("Diese Seite enthält ausschließlich neutrale technische")
      .first(),
  ).toBeVisible();
  await expect(page.getByText("structurally-complete")).toHaveCount(0);
  await expect(page.getByLabel("Formel Technische Fixture-Formel")).toHaveText(
    "a + b = c",
  );
  const formulaSection = page.locator("section").filter({
    has: page.locator("#formula-fixture-sum"),
  });
  for (const symbol of ["a", "b", "c"]) {
    await expect(
      formulaSection.locator("dl").getByText(symbol, {
        exact: true,
      }),
    ).toBeVisible();
  }
  await expect(page.locator(".topic-page details summary")).toHaveCount(4);
  await expect(page.locator("form")).toHaveCount(0);
  await expect(page.locator("input, textarea, select")).toHaveCount(0);
  await expect(page.locator("a[disabled], a[aria-disabled]")).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "Beispielthema Beta" }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "Geführte Übung bearbeiten" }),
  ).toHaveAttribute("href", "/Study/ueben/pilot-modul/gefuehrte-uebung-alpha/");
});

test("topic page solution disclosures use native details", async ({ page }) => {
  await page.goto(topicPath);

  await expect(page.getByText("Die Eingabewerte sind a = 4")).not.toBeVisible();
  await page.getByText("Geführte Lösung anzeigen").click();
  await expect(page.getByText("Die Eingabewerte sind a = 4")).toBeVisible();

  await expect(
    page.getByText("Eine mögliche Lösung ist a = 6"),
  ).not.toBeVisible();
  await page.getByText("Mögliche Lösung anzeigen").click();
  await expect(page.getByText("Eine mögliche Lösung ist a = 6")).toBeVisible();
});

test("topic page has no obvious accessibility violations", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name.includes("no-js"),
    "axe requires JavaScript execution.",
  );

  await page.goto(topicPath);
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("topic page exposes semantic landmarks and focusable links", async ({
  page,
}) => {
  await page.goto(topicPath);

  await expect(page.getByRole("main")).toHaveCount(1);
  await expect(
    page.getByRole("navigation", { name: "Inhalt dieser Lektion" }),
  ).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Zum Inhalt springen" }),
  ).toBeFocused();
  const outline = await page.evaluate(() => {
    const focused = document.activeElement;
    return focused ? getComputedStyle(focused).outlineStyle : "";
  });
  expect(outline).not.toBe("none");
});

for (const width of [320, 768, 1440]) {
  test(`topic page has no horizontal overflow at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(topicPath);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
  });

  test(`topic page has no dark-mode overflow at ${width}px`, async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.setViewportSize({ width, height: 900 });
    await page.goto(topicPath);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
  });
}

test("topic page remains usable without JavaScript", async ({ page }) => {
  await page.goto(topicPath);

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Inhalt dieser Lektion" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Zurück zu Pilotmodul A" }),
  ).toHaveAttribute("href", modulePath);
  await page.getByText("Geführte Lösung anzeigen").click();
  await expect(page.getByText("Die Eingabewerte sind a = 4")).toBeVisible();
});

test("topic page keeps core lesson content visible in print media", async ({
  page,
}) => {
  await page.emulateMedia({ media: "print" });
  await page.goto(topicPath);

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Quellen und Prüfstand" }),
  ).toBeVisible();
  await expect(page.getByLabel("Formel Technische Fixture-Formel")).toHaveText(
    "a + b = c",
  );
});
