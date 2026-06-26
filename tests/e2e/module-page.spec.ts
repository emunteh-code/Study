import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const learningIndexPath = "/Study/lernen/";
const modulePath = "/Study/lernen/pilot-modul/";
const topicPath = "/Study/lernen/pilot-modul/beispielthema-alpha/";

test("learning index exposes the Mikro I course journey honestly", async ({
  page,
}) => {
  await page.goto(learningIndexPath);

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Lernen");
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(
    page.getByRole("link", { name: "Mikroökonomik I öffnen" }),
  ).toHaveAttribute("href", "/Study/lernen/mikrooekonomik-1/");
  await expect(
    page.getByText(
      "Originale Übungsinhalte mit nachvollziehbarer Quellenbasis.",
    ),
  ).toBeVisible();
  await expect(page.locator("a[href*='pilot-modul']")).toHaveCount(0);
  await expect(
    page
      .getByRole("navigation", { name: "Hauptnavigation" })
      .getByRole("link", { name: "Lernen" }),
  ).toHaveAttribute("aria-current", "page");
});

test("module page loads with breadcrumbs and noindex metadata", async ({
  page,
}) => {
  await page.goto(modulePath);

  await expect(page).toHaveTitle("Pilotmodul A | VWL Lernbegleiter");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Pilotmodul A",
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
  await expect(breadcrumbs.locator('[aria-current="page"]')).toHaveText(
    "Pilotmodul A",
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://emunteh-code.github.io/Study/lernen/pilot-modul/",
  );
});

test("module page shows metadata, continuation, progress, and learning path", async ({
  page,
}) => {
  await page.goto(modulePath);

  await expect(page.getByText("Fixture-Version Alpha").first()).toBeVisible();
  await expect(
    page.getByText("Technische Vorschau ohne Semesterbezug").first(),
  ).toBeVisible();
  await expect(page.getByText("technical-fixture").first()).toBeVisible();
  await expect(
    page.getByText("Diese Vorschau zeigt die geplante Modulstruktur."),
  ).toBeVisible();
  await expect(
    page.getByText("Fixture-Vorschau, keine echte Lernhistorie."),
  ).toBeVisible();
  for (const text of [
    "3 von 8 Abschnitten bearbeitet",
    "2 geführte Übungen abgeschlossen",
    "1 selbstständige Aufgabe versucht",
    "2 Wiederholungen fällig",
  ]) {
    await expect(page.getByText(text).first()).toBeVisible();
  }

  await expect(page.getByRole("heading", { name: "Lernpfad" })).toBeVisible();
  await expect(page.locator(".module-learning-path")).toHaveJSProperty(
    "tagName",
    "OL",
  );
  await expect(page.locator(".module-topic-item")).toHaveCount(4);
});

test("module topic states have correct actions without disabled links", async ({
  page,
}) => {
  await page.goto(modulePath);

  await expect(
    page.getByRole("link", { name: "Weiterlernen" }),
  ).toHaveAttribute("href", topicPath);
  await expect(
    page.getByText("Dieser Abschnitt wird noch fachlich geprüft."),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Verfügbare Themen ansehen" }),
  ).toHaveAttribute("href", "#lernpfad");
  await expect(
    page.getByText("Für eine spätere Version geplant."),
  ).toBeVisible();
  await expect(page.locator("a[disabled], a[aria-disabled]")).toHaveCount(0);
});

test("module practice, mock-exam, references, and trust sections are honest", async ({
  page,
}) => {
  await page.goto(modulePath);

  for (const heading of [
    "Geführte Übungen",
    "Themenübungen",
    "Gemischte Übung",
    "Formelübersicht",
    "Begriffsübersicht",
    "Graphenübersicht",
  ]) {
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
  }
  await expect(
    page.getByText("Probeklausuren werden erst veröffentlicht"),
  ).toBeVisible();
  await expect(
    page.getByText(
      "Technisches Fixture-Quellenset: 0 reale akademische Quellen veröffentlicht.",
    ),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Geführte Übungen öffnen" }),
  ).toHaveAttribute("href", "/Study/ueben/pilot-modul/gefuehrte-uebung-alpha/");
  await expect(
    page.getByRole("link", { name: "Themenübung öffnen" }),
  ).toHaveAttribute("href", "/Study/ueben/pilot-modul/themenuebung-alpha/");
  await expect(
    page.getByRole("link", { name: "Mehr über Probeklausuren erfahren" }),
  ).toHaveAttribute("href", "/Study/probeklausuren/");
  const trustSection = page.getByLabel("Quellen und Prüfstand");
  for (const label of [
    "Methodik ansehen",
    "Quellenbasis prüfen",
    "Fehler melden",
  ]) {
    await expect(trustSection.getByRole("link", { name: label })).toBeVisible();
  }
});

test("fixture topic route opens the generic noindex topic template", async ({
  page,
}) => {
  await page.goto(topicPath);

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Beispielthema Alpha",
  );
  await expect(
    page.getByRole("navigation", { name: "Inhalt dieser Lektion" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Geführte Übung" }),
  ).toBeVisible();
  await expect(
    page.getByText("neutrale technische Beispieldaten").first(),
  ).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  );
});

test("homepage fixture module points to the module page", async ({ page }) => {
  await page.goto("/Study/");

  await expect(
    page.getByRole("link", { name: "Pilotmodul A öffnen" }),
  ).toHaveAttribute("href", modulePath);
});

for (const route of [learningIndexPath, modulePath, topicPath]) {
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
    await expect(page.locator("a[href]").first()).toBeVisible();
  });
}

for (const width of [320, 768, 1440]) {
  for (const route of [learningIndexPath, modulePath, topicPath]) {
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
  }
}
