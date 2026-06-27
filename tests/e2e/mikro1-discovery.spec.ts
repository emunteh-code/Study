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
  await expect(
    page.getByText("check whether every unordered pair"),
  ).toBeVisible();
  await expect(page.getByText("calculate sigma from rho")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Praxiszuordnung" }),
  ).toBeVisible();
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
    "Vollständigkeit",
    "Transitivität",
    "Rationale Präferenzrelationen klassifizieren",
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
  await page.goto(`${base}/lernen/mikrooekonomik-1/vollstaendigkeit/`);

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Vollständigkeit",
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
    await expect(
      page.getByRole("heading", { level: 2, name: heading }),
    ).toBeVisible();
  }
  await expect(
    page.getByRole("heading", { name: "Vollständigkeit definieren" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Vollständigkeit in Klausuraufgaben" }),
  ).toBeVisible();
  await expect(page.getByText("Complete learning session")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Übung öffnen" }).first(),
  ).toHaveAttribute(
    "href",
    "/Study/ueben/mikrooekonomik-1/praeferenzrelationen/",
  );
});

test("focused completeness session follows the required learning order", async ({
  page,
}) => {
  await page.goto(`${base}/lernen/mikrooekonomik-1/vollstaendigkeit/`);

  const kinds = await page
    .locator("[data-lesson-block-kind]")
    .evaluateAll((nodes) =>
      nodes.map((node) => node.getAttribute("data-lesson-block-kind")),
    );
  const indexOf = (kind: string) => kinds.indexOf(kind);

  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  expect(indexOf("intuition")).toBeLessThan(indexOf("definition"));
  expect(indexOf("definition")).toBeLessThan(indexOf("worked-example"));
  expect(indexOf("worked-example")).toBeLessThan(indexOf("guided-practice"));
  expect(indexOf("guided-practice")).toBeLessThan(indexOf("practice-handoff"));
  expect(indexOf("exam-thinking")).toBeGreaterThan(indexOf("misconception"));
  expect(indexOf("active-recall")).toBeGreaterThan(indexOf("exam-thinking"));
  expect(indexOf("cheat-sheet")).toBeGreaterThan(indexOf("interleaving"));
  await expect(
    page.getByRole("heading", {
      name: "Denkfehler: Jede Alternative erscheint, also vollständig",
    }),
  ).toBeVisible();
  await expect(
    page
      .getByLabel("Denkfehler: Jede Alternative erscheint, also vollständig")
      .getByText("Korrektur"),
  ).toBeVisible();
  await expect(page.getByText("Beobachtbare Beherrschung")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Zur passenden Übung" }),
  ).toHaveAttribute(
    "href",
    "/Study/ueben/mikrooekonomik-1/praeferenzrelationen/",
  );
});

test("focused transitivity session teaches chain checks before practice handoff", async ({
  page,
}) => {
  await page.goto(`${base}/lernen/mikrooekonomik-1/transitivitaet/`);

  const kinds = await page
    .locator("[data-lesson-block-kind]")
    .evaluateAll((nodes) =>
      nodes.map((node) => node.getAttribute("data-lesson-block-kind")),
    );
  const indexOf = (kind: string) => kinds.indexOf(kind);

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Transitivität",
  );
  await expect(page.getByText("Complete learning session")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Formale Definition" }),
  ).toBeVisible();
  await expect(
    page
      .getByRole("heading", { name: "Formale Definition" })
      .locator("xpath=ancestor::section[1]")
      .getByText("wenn fuer alle x, y und z", { exact: false }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Beispiel 7: Vollstaendig, aber nicht transitiv",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Denkfehler: Vollstaendig heisst transitiv",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Klausurdenken: Gegenbeispiel konstruieren",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Mastery Checklist" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Zur passenden Übung" }),
  ).toHaveAttribute(
    "href",
    "/Study/ueben/mikrooekonomik-1/praeferenzrelationen/",
  );

  expect(indexOf("intuition")).toBeLessThan(indexOf("definition"));
  expect(indexOf("definition")).toBeLessThan(indexOf("worked-example"));
  expect(indexOf("worked-example")).toBeLessThan(indexOf("guided-practice"));
  expect(indexOf("guided-practice")).toBeLessThan(indexOf("practice-handoff"));
  expect(indexOf("exam-thinking")).toBeGreaterThan(indexOf("misconception"));
  expect(indexOf("active-recall")).toBeGreaterThan(indexOf("exam-thinking"));
  expect(indexOf("cheat-sheet")).toBeGreaterThan(indexOf("interleaving"));
});

test("focused transitivity session links backward to completeness and forward to rationality", async ({
  page,
}) => {
  await page.goto(`${base}/lernen/mikrooekonomik-1/transitivitaet/`);
  const navigation = page.getByRole("navigation", {
    name: "Sitzungsnavigation",
  });

  await expect(
    navigation.getByRole("link", { name: "Vorherige Sitzung" }),
  ).toHaveAttribute("href", "/Study/lernen/mikrooekonomik-1/vollstaendigkeit/");
  await expect(
    navigation.getByRole("link", { name: "Nächste Sitzung" }),
  ).toHaveAttribute(
    "href",
    "/Study/lernen/mikrooekonomik-1/rationale-praeferenzrelationen/",
  );
});

test("focused rationality session synthesizes both axioms before practice handoff", async ({
  page,
}) => {
  await page.goto(
    `${base}/lernen/mikrooekonomik-1/rationale-praeferenzrelationen/`,
  );

  const kinds = await page
    .locator("[data-lesson-block-kind]")
    .evaluateAll((nodes) =>
      nodes.map((node) => node.getAttribute("data-lesson-block-kind")),
    );
  const indexOf = (kind: string) => kinds.indexOf(kind);

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Rationale Präferenzrelationen klassifizieren",
  );
  await expect(page.getByText("Complete learning session")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Retrieval Bridge" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Formale Definition" }),
  ).toBeVisible();
  await expect(
    page
      .getByRole("heading", { name: "Formale Definition" })
      .locator("xpath=ancestor::section[1]")
      .getByText("Rationalitaet = Vollstaendigkeit AND Transitivitaet"),
  ).toBeVisible();
  await expect(
    page.getByRole("table", { name: "Property Matrix" }),
  ).toBeVisible();
  await expect(
    page.getByRole("row", { name: /Yes Yes Rational/ }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Klassifikationsalgorithmus" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Denkfehler: Rational bedeutet optimal",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Klausurdenken: Multiple-Choice-Fallen",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Mastery Checklist" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Zur passenden Übung" }),
  ).toHaveAttribute(
    "href",
    "/Study/ueben/mikrooekonomik-1/praeferenzrelationen/",
  );

  expect(indexOf("dependency-position")).toBeLessThan(indexOf("big-picture"));
  expect(indexOf("intuition")).toBeLessThan(indexOf("definition"));
  expect(indexOf("definition")).toBeLessThan(indexOf("classification-matrix"));
  expect(indexOf("classification-matrix")).toBeLessThan(
    indexOf("worked-example"),
  );
  expect(indexOf("worked-example")).toBeLessThan(indexOf("guided-practice"));
  expect(indexOf("guided-practice")).toBeLessThan(indexOf("practice-handoff"));
  expect(indexOf("active-recall")).toBeGreaterThan(indexOf("exam-thinking"));
  expect(indexOf("mastery-check")).toBeGreaterThan(indexOf("cheat-sheet"));
});

test("focused rationality session navigation is honest at both edges", async ({
  page,
}) => {
  await page.goto(
    `${base}/lernen/mikrooekonomik-1/rationale-praeferenzrelationen/`,
  );
  const navigation = page.getByRole("navigation", {
    name: "Sitzungsnavigation",
  });

  await expect(
    navigation.getByRole("link", { name: "Vorherige Sitzung" }),
  ).toHaveAttribute("href", "/Study/lernen/mikrooekonomik-1/transitivitaet/");
  await expect(
    navigation.getByRole("link", { name: "Nächste Sitzung" }),
  ).toHaveAttribute(
    "href",
    "/Study/lernen/mikrooekonomik-1/grs-steigung-und-lokale-annahmen/",
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

test("preference practice route links back to focused learning sessions", async ({
  page,
}) => {
  await page.goto(`${base}/ueben/mikrooekonomik-1/praeferenzrelationen/`);
  await expect(
    page.getByRole("link", { name: "Vollständigkeit lernen" }),
  ).toHaveAttribute("href", "/Study/lernen/mikrooekonomik-1/vollstaendigkeit/");
  await expect(
    page.getByRole("link", { name: "Transitivität lernen" }),
  ).toHaveAttribute("href", "/Study/lernen/mikrooekonomik-1/transitivitaet/");
  await expect(
    page.getByRole("link", { name: "Rationalität klassifizieren" }),
  ).toHaveAttribute(
    "href",
    "/Study/lernen/mikrooekonomik-1/rationale-praeferenzrelationen/",
  );
  await expect(
    page.getByRole("link", { name: "Vorwissen wiederholen" }),
  ).toHaveAttribute(
    "href",
    "/Study/lernen/mikrooekonomik-1/strikte-praeferenz-und-indifferenz/",
  );
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

test("focused completeness session remains visible without JavaScript", async ({
  page,
}, testInfo) => {
  test.skip(
    !testInfo.project.name.includes("no-js"),
    "No-JavaScript project only.",
  );
  await page.goto(`${base}/lernen/mikrooekonomik-1/vollstaendigkeit/`);
  await expect(
    page.getByRole("heading", { level: 1, name: "Vollständigkeit" }),
  ).toBeVisible();
  await expect(page.getByText("Formale Definition")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Zur passenden Übung" }),
  ).toBeVisible();
  await page.goto(
    `${base}/lernen/mikrooekonomik-1/rationale-praeferenzrelationen/`,
  );
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Rationale Präferenzrelationen klassifizieren",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("table", { name: "Property Matrix" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Zur passenden Übung" }),
  ).toBeVisible();
  await page.goto(`${base}/lernen/mikrooekonomik-1/transitivitaet/`);
  await expect(
    page.getByRole("heading", { level: 1, name: "Transitivität" }),
  ).toBeVisible();
  await expect(page.getByText("Formale Definition")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Zur passenden Übung" }),
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

for (const width of [320, 768, 1440]) {
  test(`Mikro I module overview has no horizontal overflow at ${width} CSS pixels`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${base}/lernen/mikrooekonomik-1/`);
    await expect(
      page.getByRole("heading", {
        name: "Sitzungen in Abhängigkeitsreihenfolge",
      }),
    ).toBeVisible();
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(width);
    testInfo.annotations.push({
      type: "viewport",
      description: `${width} CSS pixels`,
    });
  });
}

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
    for (const route of [
      "vollstaendigkeit",
      "transitivitaet",
      "rationale-praeferenzrelationen",
    ]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`${base}/lernen/mikrooekonomik-1/${route}/`);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth),
      ).toBeLessThanOrEqual(width);
    }
    testInfo.annotations.push({
      type: "viewport",
      description: `${width} CSS pixels`,
    });
  });
}
