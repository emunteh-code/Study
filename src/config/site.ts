export interface NavigationItem {
  label: string;
  route: `/${string}`;
}

export interface FooterGroup {
  label: string;
  items: NavigationItem[];
}

export const siteConfig = {
  name: "VWL Lernbegleiter",
  shortName: "VWL Lernbegleiter",
  descriptor: "Für Göttinger VWL-Studierende",
  description:
    "Unabhängiger Lernbegleiter im Aufbau für B.Sc. Volkswirtschaftslehre.",
  language: "de",
  siteUrl: "https://emunteh-code.github.io",
  basePath: "/Study",
  repository: {
    owner: "emunteh-code",
    name: "Study",
  },
  universityContext: "Georg-August-Universität Göttingen",
  disclaimer:
    "Unabhängiges Studentenprojekt. Keine offizielle Plattform der Universität Göttingen.",
  defaultMeta: {
    title: "VWL Lernbegleiter",
    description:
      "Unabhängiger Lernbegleiter im Aufbau für Göttinger VWL-Studierende.",
    ogType: "website",
    robots: "index, follow",
  },
  primaryNavigation: [
    { label: "Lernen", route: "/lernen/" },
    { label: "Üben", route: "/ueben/" },
    { label: "Probeklausuren", route: "/probeklausuren/" },
    { label: "Fortschritt", route: "/fortschritt/" },
    { label: "Suche", route: "/suche/" },
  ] satisfies NavigationItem[],
  footerNavigation: [
    {
      label: "Projekt",
      items: [
        { label: "Über das Portal", route: "/ueber-das-portal/" },
        { label: "Methodik", route: "/methodik/" },
        { label: "Quellen", route: "/quellen/" },
        { label: "Fehler melden", route: "/fehler-melden/" },
      ],
    },
    {
      label: "Rechtliches",
      items: [
        { label: "Datenschutz", route: "/datenschutz/" },
        { label: "Impressum", route: "/impressum/" },
      ],
    },
  ] satisfies FooterGroup[],
  errorReportingRoute: "/fehler-melden/",
} as const;
