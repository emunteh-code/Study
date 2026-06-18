import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const homePath = "/Study/";
const returningQueryPath = "/Study/?fixture=returning";
const returningPath = "/Study/fixtures/homepage/returning/";

test("default homepage presents the new learner path", async ({ page }) => {
  await page.goto(homePath);

  await expect(page).toHaveTitle("VWL Lernbegleiter Göttingen");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Verstehen, üben und gezielt für die Klausur lernen.",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(
    page.getByRole("link", { name: "Lernsession starten" }),
  ).toHaveAttribute("href", "/Study/lernen/");
  await expect(
    page.getByRole("link", { name: "Module ansehen" }),
  ).toHaveAttribute("href", "/Study/lernen/");
  await expect(
    page.getByText(
      "Unabhängiges Studentenprojekt. Die offiziellen Kursunterlagen bleiben",
    ),
  ).toBeVisible();
});

test("default homepage exposes goals, modules, process, and trust links", async ({
  page,
}) => {
  await page.goto(homePath);

  await expect(
    page.getByRole("heading", { name: "Was möchtest du heute machen?" }),
  ).toBeVisible();
  for (const label of [
    "Thema auswählen",
    "Aufgaben starten",
    "Prüfungstraining öffnen",
  ]) {
    await expect(page.getByRole("link", { name: label })).toBeVisible();
  }

  await expect(
    page.getByRole("heading", { name: "Verfügbare Lernbereiche" }),
  ).toBeVisible();
  for (const status of ["verfügbar", "in Prüfung", "geplant"]) {
    await expect(page.getByText(status, { exact: true })).toBeVisible();
  }

  await expect(
    page.getByRole("heading", { name: "So lernst du mit dem Portal" }),
  ).toBeVisible();
  await expect(page.locator(".learning-process li")).toHaveCount(5);

  for (const label of [
    "Methodik ansehen",
    "Quellenbasis prüfen",
    "Fehler melden",
  ]) {
    await expect(
      page
        .getByRole("list", { name: "Vertrauenslinks" })
        .getByRole("link", { name: label }),
    ).toBeVisible();
  }
});

test("default homepage metadata has canonical URL without query state", async ({
  page,
}) => {
  await page.goto(homePath);

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://emunteh-code.github.io/Study/",
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "index, follow",
  );
  await expect(page.getByText("3 von 8 Abschnitten bearbeitet")).toHaveCount(0);
});

test("returning fixture shows continuation and due review without persistence claims", async ({
  page,
}) => {
  await page.goto(returningPath);

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Dort weitermachen, wo du aufgehört hast",
  );
  await expect(
    page.getByText("Entwicklungsfixture: keine gespeicherten Nutzerdaten."),
  ).toBeVisible();
  await expect(page.getByText("Pilotmodul A:")).toBeVisible();
  await expect(page.getByText("Beispielthema Alpha")).toBeVisible();
  await expect(page.getByText("3 von 8 Abschnitten bearbeitet")).toBeVisible();
  await expect(page.getByRole("progressbar")).toHaveAttribute("value", "3");
  await expect(
    page.getByRole("heading", { name: "Heute wiederholen" }),
  ).toBeVisible();
  await expect(
    page.getByText("2 Wiederholungen sind in dieser Vorschau fällig."),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Lernen fortsetzen" }),
  ).toHaveAttribute("href", "/Study/lernen/pilot-modul/");
  await expect(
    page.getByRole("link", { name: "Wiederholung öffnen" }),
  ).toHaveAttribute("href", "/Study/fortschritt/");
});

test("returning fixture is noindex and shares the default canonical URL", async ({
  page,
}) => {
  await page.goto(returningPath);

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://emunteh-code.github.io/Study/",
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, follow",
  );
});

test("returning fixture query redirects to the static noindex fixture route", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name.includes("no-js"),
    "query fixture redirect is progressive enhancement.",
  );

  await page.goto(returningQueryPath);
  await expect(page).toHaveURL(/\/Study\/fixtures\/homepage\/returning\/$/);
  await expect(
    page.getByRole("heading", {
      name: "Dort weitermachen, wo du aufgehört hast",
    }),
  ).toBeVisible();
});

test("homepage links remain available without JavaScript", async ({ page }) => {
  await page.goto(homePath);

  await expect(
    page.getByRole("link", { name: "Lernsession starten" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Thema auswählen" }),
  ).toHaveAttribute("href", "/Study/lernen/");
  await expect(
    page.getByRole("link", { name: "Pilotmodul A öffnen" }),
  ).toHaveAttribute("href", "/Study/lernen/pilot-modul/");
});

test("returning fixture remains readable without JavaScript", async ({
  page,
}) => {
  await page.goto(returningPath);

  await expect(
    page.getByRole("heading", {
      name: "Dort weitermachen, wo du aufgehört hast",
    }),
  ).toBeVisible();
  await expect(page.getByText("Heute wiederholen")).toBeVisible();
});

for (const route of [homePath, returningPath]) {
  test(`homepage has no obvious accessibility violations on ${route}`, async ({
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
}

for (const width of [320, 768, 1440]) {
  for (const route of [homePath, returningPath]) {
    test(`homepage has no overflow at ${width}px for ${route}`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      expect(overflow).toBe(false);
    });

    test(`homepage has no dark-mode overflow at ${width}px for ${route}`, async ({
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
