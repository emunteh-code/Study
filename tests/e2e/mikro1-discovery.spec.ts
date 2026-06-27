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
    page.getByRole("heading", {
      name: "Sitzungen in Abhängigkeitsreihenfolge",
    }),
  ).toBeVisible();
  await expect(page.locator("a[href*='pilot-modul']")).toHaveCount(0);

  await page.goto(`${base}/ueben/`);
  await expect(
    page.getByRole("link", { name: "Übungsset öffnen" }),
  ).toHaveCount(2);
  await expect(page.locator("a[href*='pilot-modul']")).toHaveCount(0);
});

test("Mikro I course overview explains current scope and next actions", async ({
  page,
}) => {
  await page.goto(`${base}/lernen/mikrooekonomik-1/`);
  await expect(
    page.getByRole("heading", {
      name: "Sitzungen in Abhängigkeitsreihenfolge",
    }),
  ).toBeVisible();
  await expect(page.getByText("Architekturprinzip")).toBeVisible();
  await expect(page.getByText("identify the direction")).toBeVisible();
  await expect(page.getByText("calculate sigma from rho")).toBeVisible();
  await expect(page.getByText("Praxiszuordnung")).toBeVisible();
  await expect(page.locator("a[href*='sub-practice-04']")).toHaveCount(0);
  await expect(page.locator("a[href*='mikrooekonomik-1/optim']")).toHaveCount(
    0,
  );
});

test("Mikro I sessions render in dependency order through reusable architecture", async ({
  page,
}) => {
  await page.goto(`${base}/lernen/mikrooekonomik-1/`);

  const sessions = page
    .getByRole("heading", {
      name: "Sitzungen in Abhängigkeitsreihenfolge",
    })
    .locator("xpath=ancestor::section[1]")
    .locator(".module-topic-item h3");
  await expect(sessions).toHaveText([
    "Binäre Relationen und schwache Präferenz",
    "Strikte Präferenz und Indifferenz ableiten",
    "Vollständigkeit, Transitivität und Rationalität",
    "GRS, Steigung und lokale Annahmen",
    "CES-Parameter und Substitutionselastizität",
    "Homogene Darstellungen und homothetische Präferenzen",
  ]);
  await expect(
    page.getByRole("link", { name: "Sitzungsarchitektur öffnen" }).first(),
  ).toHaveAttribute(
    "href",
    "/Study/lernen/mikrooekonomik-1/praeferenzrelationen-grundvergleiche/",
  );
});

test("generic Mikro I session page exposes dependencies, capabilities, sources, and practice", async ({
  page,
}) => {
  await page.goto(
    `${base}/lernen/mikrooekonomik-1/vollstaendigkeit-transitivitaet-rationalitaet/`,
  );

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Vollständigkeit, Transitivität und Rationalität",
  );
  for (const heading of [
    "Konzepte und Skills",
    "Lernziele",
    "Abhängigkeiten",
    "Instructional capabilities",
    "Klausurbezug",
    "Typische Denkfehler",
    "Mastery-Evidence",
    "Passende Praxis",
    "Quellen",
  ]) {
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
  }
  await expect(page.getByText("Definition")).toBeVisible();
  await expect(page.getByText("Klausurstrategie")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Übung öffnen" }).first(),
  ).toHaveAttribute(
    "href",
    "/Study/ueben/mikrooekonomik-1/praeferenzrelationen/",
  );
});

test("generic Mikro I session page is keyboard reachable", async ({ page }) => {
  await page.goto(
    `${base}/lernen/mikrooekonomik-1/praeferenzrelationen-grundvergleiche/`,
  );
  await page.keyboard.press("Tab");
  await expect(page.locator(":focus")).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Sitzungsnavigation" }),
  ).toBeVisible();
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

test("topic orientations render source-backed objectives before exercises", async ({
  page,
}) => {
  for (const route of [
    {
      path: "/ueben/mikrooekonomik-1/praeferenzrelationen/",
      heading: "Präferenzrelationen",
      objective: "distinguish weak preference",
      source: "Mikroökonomik I Preferences Claim Evidence Pack",
      exercise: "Read the derived relations",
      overview: "Aufgabenkarten",
    },
    {
      path: "/ueben/mikrooekonomik-1/substitutionseffekt/",
      heading: "Substitutionselastizität und homothetische Nutzenfunktionen",
      objective: "distinguish the signed indifference-curve slope",
      source: "Mikro I substitution production specification",
      exercise: "Orient the GRS ratio",
      overview: "Aufgaben",
    },
  ]) {
    await page.goto(`${base}${route.path}`);
    const orientation = page
      .getByRole("heading", { name: route.heading })
      .locator("xpath=ancestor::section[1]");
    await expect(
      page.getByRole("heading", { name: "Lernziele" }),
    ).toBeVisible();
    await expect(page.getByText(route.objective)).toBeVisible();
    await expect(
      orientation
        .locator("[data-source-references]")
        .getByText(route.source, { exact: true }),
    ).toBeVisible();
    await expect(
      orientation.getByRole("link", { name: route.exercise }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: route.overview }),
    ).toBeVisible();
  }
});

test("topic orientations remain visible without JavaScript", async ({
  page,
}, testInfo) => {
  test.skip(
    !testInfo.project.name.includes("no-js"),
    "No-JavaScript project only.",
  );
  await page.goto(`${base}/ueben/mikrooekonomik-1/praeferenzrelationen/`);
  await expect(page.getByRole("heading", { name: "Lernziele" })).toBeVisible();
  await expect(page.getByText("Präferenzrelationen").first()).toBeVisible();
  await page.goto(`${base}/ueben/mikrooekonomik-1/substitutionseffekt/`);
  await expect(page.getByRole("heading", { name: "Lernziele" })).toBeVisible();
  await expect(
    page.getByText("Substitutionselastizität").first(),
  ).toBeVisible();
});

test("orientation pages keep semantic heading order", async ({ page }) => {
  await page.goto(`${base}/ueben/mikrooekonomik-1/substitutionseffekt/`);
  const headings = await page.locator("h1, h2, h3").evaluateAll((nodes) =>
    nodes.map((node) => ({
      level: Number(node.tagName.slice(1)),
      text: node.textContent?.trim() ?? "",
    })),
  );
  expect(headings[0]).toEqual({
    level: 1,
    text: "Substitutionselastizität und homothetische Nutzenfunktionen",
  });
  for (let index = 1; index < headings.length; index += 1)
    expect(
      headings[index]!.level - headings[index - 1]!.level,
    ).toBeLessThanOrEqual(1);
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

test("topic orientation remains usable at 320 CSS pixels", async ({
  page,
}, testInfo) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto(`${base}/ueben/mikrooekonomik-1/substitutionseffekt/`);
  await expect(page.getByRole("heading", { name: "Lernziele" })).toBeVisible();
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

for (const width of [320, 768, 1440]) {
  test(`generic Mikro I session has no horizontal overflow at ${width} CSS pixels`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(
      `${base}/lernen/mikrooekonomik-1/vollstaendigkeit-transitivitaet-rationalitaet/`,
    );
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(width);
    testInfo.annotations.push({
      type: "viewport",
      description: `${width} CSS pixels`,
    });
  });
}
