import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const practiceIndex = "/Study/ueben/pilot-modul/";
const guidedPractice = "/Study/ueben/pilot-modul/gefuehrte-uebung-alpha/";
const topicPractice = "/Study/ueben/pilot-modul/themenuebung-alpha/";
const topicPath = "/Study/lernen/pilot-modul/beispielthema-alpha/";
const modulePath = "/Study/lernen/pilot-modul/";

test("practice index exposes available and planned modes honestly", async ({
  page,
}) => {
  await page.goto(practiceIndex);

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Üben in Pilotmodul A",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(page.getByText("Fixture-Hinweis")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Geführte Übung öffnen" }).first(),
  ).toHaveAttribute("href", guidedPractice);
  await expect(
    page.getByRole("link", { name: "Themenübung öffnen" }),
  ).toHaveAttribute("href", topicPractice);
  await expect(
    page.getByRole("heading", { name: "Gemischte Übung" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Zeittraining" }),
  ).toBeVisible();
  await expect(
    page.getByText("Geplant. Für diese Vorschau gibt es keine Aktion."),
  ).toHaveCount(2);
  await expect(page.getByText("Provenienz und Vertrauen")).toBeVisible();
  await expect(
    page
      .getByRole("navigation", { name: "Hauptnavigation" })
      .getByRole("link", { name: "Üben" }),
  ).toHaveAttribute("aria-current", "page");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  );
});

test("guided practice route renders static question flow", async ({ page }) => {
  await page.goto(guidedPractice);

  const breadcrumbs = page.getByRole("navigation", {
    name: "Brotkrümelnavigation",
  });
  await expect(
    breadcrumbs.getByRole("link", { name: "Startseite" }),
  ).toHaveAttribute("href", "/Study/");
  await expect(breadcrumbs.getByRole("link", { name: "Üben" })).toHaveAttribute(
    "href",
    "/Study/ueben/",
  );
  await expect(
    breadcrumbs.getByRole("link", { name: "Pilotmodul A" }),
  ).toHaveAttribute("href", practiceIndex);
  await expect(breadcrumbs.locator('[aria-current="page"]')).toHaveText(
    "Geführte Übung Alpha",
  );

  for (const text of [
    "Geführte Übung Alpha",
    "Geführte Übung",
    "10 Minuten",
    "2",
    "objective-alpha-01",
    "Frage Alpha 01",
    "Hinweis 1 öffnen",
    "Vollständige Lösung anzeigen",
    "Häufige Fehler und Feedback",
    "Technische Originalaufgabe",
    "Keine offizielle Kurs- oder Klausuraufgabe",
  ]) {
    await expect(page.getByText(text).first()).toBeVisible();
  }

  await expect(page.locator("form")).toHaveCount(0);
  await expect(page.locator('button[type="submit"]')).toHaveCount(0);
  await expect(page.getByText("Punktzahl")).toHaveCount(0);
  await expect(page.getByText("Versuch gespeichert")).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "Themenübung Alpha öffnen" }),
  ).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  );
});

test("topic practice route renders independent numeric and open-response fixtures", async ({
  page,
}) => {
  await page.goto(topicPractice);

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Themenübung Alpha",
  );
  await expect(page.getByText("Themenübung").first()).toBeVisible();
  await expect(page.getByText("Numerische Antwort")).toBeVisible();
  await expect(page.getByText("Offene Antwort", { exact: true })).toBeVisible();
  await expect(page.getByText("c = 13 neutrale Einheiten")).not.toBeVisible();
  await page.getByText("Vollständige Lösung anzeigen").first().click();
  await expect(page.getByText("c = 13 neutrale Einheiten")).toBeVisible();
  await expect(page.getByText("Erwartete Kernpunkte")).not.toBeVisible();
  await page.getByText("Vollständige Lösung anzeigen").nth(1).click();
  await expect(page.getByText("Erwartete Kernpunkte")).toBeVisible();
  await expect(page.getByText("Ohne Hilfe gelöst").first()).toBeVisible();
  await expect(
    page.getByText(
      "Du hast das Ende dieser technischen Übungsvorschau erreicht.",
    ),
  ).toBeVisible();
  await expect(page.getByText("Versuch gespeichert")).toHaveCount(0);
  await expect(page.getByText("Punktzahl")).toHaveCount(0);
});

test("practice integrity constraints are visible in generated pages", async ({
  page,
}) => {
  for (const route of [guidedPractice, topicPractice]) {
    await page.goto(route);
    await expect(page.getByText("Original").first()).toBeVisible();
    await expect(
      page.getByText("offizielle Kursaufgabe mit Semesterbezug"),
    ).toHaveCount(0);
    await expect(page.getByText("Quellenlocator")).toBeVisible();
    await expect(page.locator("a[disabled], a[aria-disabled]")).toHaveCount(0);
    await expect(page.locator(".question-card details")).toHaveCount(6);
    await expect(page.locator("script[src]")).toHaveCount(0);
  }

  await page.goto(practiceIndex);
  await expect(page.locator(`a[href="${practiceIndex}planned/"]`)).toHaveCount(
    0,
  );
});

test("topic and module pages link to the practice fixtures", async ({
  page,
}) => {
  await page.goto(topicPath);
  await expect(
    page.getByRole("link", { name: "Geführte Übung bearbeiten" }),
  ).toHaveAttribute("href", guidedPractice);
  await expect(
    page.getByRole("link", { name: "Themenübung öffnen" }),
  ).toHaveAttribute("href", topicPractice);

  await page.goto(modulePath);
  await expect(
    page.getByRole("link", { name: "Geführte Übungen öffnen" }),
  ).toHaveAttribute("href", guidedPractice);
  await expect(
    page.getByRole("link", { name: "Themenübung öffnen" }),
  ).toHaveAttribute("href", topicPractice);
});

for (const route of [practiceIndex, guidedPractice, topicPractice]) {
  test(`${route} has no obvious accessibility violations`, async ({
    page,
  }, testInfo) => {
    test.skip(
      testInfo.project.name.includes("no-js"),
      "axe requires JavaScript execution.",
    );

    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test(`${route} remains usable without JavaScript`, async ({ page }) => {
    await page.goto(route);
    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByText("Fixture").first()).toBeVisible();

    const solution = page.getByText("Vollständige Lösung anzeigen").first();
    if ((await solution.count()) > 0) {
      await solution.click();
      await expect(page.getByText("Endergebnis").first()).toBeVisible();
    }
  });
}

for (const width of [320, 768, 1440]) {
  for (const route of [practiceIndex, guidedPractice, topicPractice]) {
    test(`${route} has no horizontal overflow at ${width}px`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      expect(overflow).toBe(false);
    });

    test(`${route} has no dark-mode overflow at ${width}px`, async ({
      page,
    }) => {
      await page.emulateMedia({ colorScheme: "dark" });
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      expect(overflow).toBe(false);
    });
  }
}

test("practice questions keep important content in print media", async ({
  page,
}) => {
  await page.emulateMedia({ media: "print" });
  await page.goto(guidedPractice);

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Aufgabe" }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Gegebene Daten" }).first(),
  ).toBeVisible();
  await expect(
    page.getByText("Vollständige Lösung anzeigen").first(),
  ).toBeVisible();
  await expect(page.getByText("Quellen und Prüfstand")).toBeVisible();
});
