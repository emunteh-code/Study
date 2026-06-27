import type { LessonBlock } from "../../../learning/model";

const sourceReferenceIds = ["pref-claims", "pref-outline"] as const;
const objectiveIds = [
  "pref-lo-transitivity-01",
  "pref-lo-transitivity-02",
  "pref-lo-transitivity-03",
  "pref-lo-transitivity-04",
] as const;

export const preferenceTransitivityLessonBlocks: readonly LessonBlock[] = [
  {
    id: "pref-trans-why",
    kind: "why-exists",
    title: "Warum diese Sitzung existiert",
    body: [
      "Transitivitaet beantwortet eine andere Frage als Vollstaendigkeit: Wenn zwei schwache Praeferenzvergleiche eine Kette bilden, muss der direkte Vergleich vom Anfang zum Ende ebenfalls gelten?",
      "Die Sitzung trainiert genau diese Kettenpruefung, damit du spaeter Rationalitaet nicht aus einem Bauchgefuehl, sondern aus zwei getrennten Axiomchecks begruendest.",
    ],
    sourceReferenceIds,
    objectiveIds,
  },
  {
    id: "pref-trans-unlocks",
    kind: "unlocks",
    title: "Was diese Sitzung freischaltet",
    body: [
      "Nach dieser Sitzung kannst du kleine Relationstabellen auf geschlossene und verletzte schwache-Praeferenz-Ketten pruefen.",
      "Das schaltet die naechste Sitzung frei: Dort werden Vollstaendigkeit und Transitivitaet gemeinsam zum technischen Rationalitaetsbegriff verbunden.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-trans-prerequisites",
    kind: "prerequisites",
    title: "Voraussetzungen",
    body: [
      "Du musst x ≽ y als gerichtete schwache Praeferenz lesen koennen: x steht links, y steht rechts, und die Aussage laeuft nicht automatisch rueckwaerts.",
      "Du solltest Vollstaendigkeit als Paarabdeckung kennen. Diese Sitzung nutzt das als Kontrast, aber Transitivitaet selbst ist eine eigene Kettenbedingung.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-trans-objectives",
    kind: "objectives",
    title: "Lernziele",
    body: [
      "Check whether stated weak-preference chains include the required direct consequence.",
      "Identify a concrete ordered triple that violates transitivity when a required endpoint is missing.",
      "Distinguish transitivity from completeness in finite relation records.",
      "Justify a transitivity classification using the formal chain notation.",
    ],
    sourceReferenceIds,
    objectiveIds,
  },
  {
    id: "pref-trans-dependency-position",
    kind: "dependency-position",
    title: "Position im Lernpfad",
    body: [
      "Transitivitaet steht nach Vollstaendigkeit, weil du zuerst gelernt hast, Paare ueberhaupt abzudecken.",
      "Sie steht vor Rationalitaet, weil der technische Rationalitaetsbegriff in diesem Kursumfang erst entsteht, wenn Vollstaendigkeit und Transitivitaet beide geprueft wurden.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-trans-big-picture",
    kind: "big-picture",
    title: "Big Picture",
    body: [
      "Vollstaendigkeit fragt: Ist jedes Paar vergleichbar? Transitivitaet fragt: Bleiben die gerichteten Vergleiche ueber eine Kette konsistent?",
      "Eine Relation kann vollstaendig und trotzdem nicht transitiv sein. Sie kann auch transitiv sein, obwohl nicht jedes Paar vergleichbar ist. Darum werden die Checks getrennt.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-trans-intuition",
    kind: "intuition",
    title: "Intuition vor Notation",
    body: [
      "Stell dir die Relation als Pfeile vor. Wenn ein Pfeil von x nach y und ein Pfeil von y nach z geht, verlangt Transitivitaet auch einen Pfeil von x nach z.",
      "Die Richtung ist entscheidend: x ≽ y und z ≽ y treffen sich bei y, bilden aber keine Kette von x ueber y nach z.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-trans-definition",
    kind: "definition",
    title: "Formale Definition",
    body: [
      "Eine schwache Praeferenzrelation ≽ ist transitiv, wenn fuer alle x, y und z in der betrachteten Menge gilt: Wenn x ≽ y und y ≽ z, dann x ≽ z.",
      "Das ist eine Bedingung an die schwache Relation. Sie darf nicht jeder Relation unterstellt werden, sondern muss im jeweiligen Relationseintrag geprueft werden.",
    ],
    sourceReferenceIds,
    objectiveIds,
  },
  {
    id: "pref-trans-assumptions",
    kind: "assumptions",
    title: "Annahmen und Umfang",
    body: [
      "Die betrachtete Alternativenmenge muss feststehen, und die Relation muss als die relevante Liste der geltenden schwachen Vergleiche gelesen werden.",
      "Die Sitzung beweist keine Aussagen ueber Nutzenfunktionen, Nachfrage, Graphen oder reale Psychologie. Sie verwendet nur die source-backed Relationsebene.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-trans-symbols",
    kind: "symbols",
    title: "Symbole",
    body: [
      "x, y und z bezeichnen Alternativen oder Buendel aus derselben betrachteten Menge.",
      "x ≽ y bedeutet: x wird mindestens so gut wie y eingeordnet. Eine Kette hat die Form x ≽ y und y ≽ z; der geforderte Endpunkt ist x ≽ z.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-trans-concept-build",
    kind: "concept-build",
    title: "Konzeptaufbau",
    body: [
      "Baue die Pruefung in vier Schritten auf: Praemisse 1 finden, passende Praemisse 2 mit gleichem Mittelglied finden, geforderten Endpunkt bilden, Endpunkt in der Relation suchen.",
      "Bei einer positiven Transitivitaetsaussage muessen alle anwendbaren Ketten geschlossen sein. Bei einer negativen Aussage reicht eine einzige konkrete verletzte Kette.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-trans-reasoning",
    kind: "reasoning",
    title: "Begruendungsstruktur",
    body: [
      "Eine gute Loesung nennt nicht nur transitiv oder nicht transitiv. Sie zeigt mindestens eine relevante Kette und den geforderten direkten Vergleich.",
      "Bei einer Verletzung ist die vollstaendige Kurzform: x ≽ y gilt, y ≽ z gilt, aber x ≽ z gilt nicht; also verletzt das geordnete Tripel (x,y,z) die Transitivitaet.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-trans-connections",
    kind: "connections",
    title: "Verbindungen zu Nachbarthemen",
    body: [
      "Zur Vollstaendigkeit: Ein vollstaendiger Paarcheck sagt noch nicht, dass alle Ketten geschlossen sind.",
      "Zur Rationalitaet: Erst die Kombination aus Vollstaendigkeit und Transitivitaet wird spaeter als technischer Rationalitaetscheck verwendet.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-trans-example-01",
    kind: "worked-example",
    title: "Beispiel 1: Eine geschlossene Kette",
    body: ["Der Grundfall zeigt die direkte Kettenlogik."],
    sourceReferenceIds,
    objectiveIds,
    level: "foundational",
    problem:
      "Domain {x,y,z}. Die Relation enthaelt x ≽ y, y ≽ z und x ≽ z. Ist die sichtbare nicht-reflexive Kette geschlossen?",
    testedConcept: "Kette x ≽ y und y ≽ z",
    solutionSteps: [
      "Finde die Praemissen x ≽ y und y ≽ z.",
      "Bestimme den geforderten Endpunkt: x ≽ z.",
      "Pruefe, ob x ≽ z in der Relation enthalten ist.",
      "Der Endpunkt ist vorhanden; diese Kette ist geschlossen.",
    ],
    reasoning:
      "Die Definition verlangt genau den direkten Vergleich vom Anfang der ersten Praemisse zum Ende der zweiten Praemisse.",
    interpretation:
      "Eine geschlossene Kette ist noch kein Beweis fuer alle denkbaren Ketten, aber sie zeigt den richtigen Mechanismus.",
    commonWrongApproach:
      "Nur die beiden Praemissen anschauen und den Endpunkt nicht pruefen.",
  },
  {
    id: "pref-trans-example-02",
    kind: "worked-example",
    title: "Beispiel 2: Eine verletzte Kette",
    body: ["Ein fehlender Endpunkt reicht als Gegenbeispiel."],
    sourceReferenceIds,
    objectiveIds,
    level: "foundational",
    problem:
      "Domain {x,y,z}. Die Relation enthaelt x ≽ y und y ≽ z, aber nicht x ≽ z. Ist sie transitiv?",
    testedConcept: "Konkrete Transitivitaetsverletzung",
    solutionSteps: [
      "x ≽ y ist die erste Praemisse.",
      "y ≽ z ist die zweite Praemisse.",
      "Transitivitaet verlangt x ≽ z.",
      "x ≽ z fehlt; die Relation ist nicht transitiv.",
    ],
    reasoning:
      "Die universelle Aussage der Transitivitaet scheitert an einem einzigen Tripel, naemlich (x,y,z).",
    interpretation:
      "Fuer eine negative Klassifikation musst du nicht alle anderen Ketten auswerten, sobald ein gueltiges Gegenbeispiel gefunden ist.",
    commonWrongApproach:
      "Die Relation als unvollstaendig beschreiben, obwohl hier die verletzte Kette die entscheidende Diagnose ist.",
  },
  {
    id: "pref-trans-example-03",
    kind: "worked-example",
    title: "Beispiel 3: Keine passende Kette",
    body: [
      "Nicht jede Paarung von Vergleichen bildet eine Transitivitaetskette.",
    ],
    sourceReferenceIds,
    objectiveIds,
    level: "foundational",
    problem:
      "Gegeben sind x ≽ y und z ≽ y. Welche direkte Konsequenz fordert Transitivitaet aus genau diesen beiden Aussagen?",
    testedConcept: "Mittelglied erkennen",
    solutionSteps: [
      "Vergleiche die rechte Seite der ersten Aussage mit der linken Seite der zweiten Aussage.",
      "Bei x ≽ y und z ≽ y ist das Mittelglied nicht gleich angeordnet.",
      "Diese beiden Aussagen bilden keine Kette der Form x ≽ y und y ≽ z.",
      "Aus genau diesen beiden Aussagen folgt daher keine direkte Transitivitaetsforderung.",
    ],
    reasoning:
      "Transitivitaet braucht ein gemeinsames Mittelglied, das rechts in der ersten und links in der zweiten Praemisse steht.",
    interpretation:
      "Die Richtung der Symbole ist nicht kosmetisch; sie bestimmt, ob eine Kette existiert.",
    commonWrongApproach:
      "Aus jedem Paar von Vergleichen automatisch irgendeinen dritten Vergleich ableiten.",
  },
  {
    id: "pref-trans-example-04",
    kind: "worked-example",
    title: "Beispiel 4: Indifferenz als beidseitige schwache Praeferenz",
    body: [
      "Mutualitaet kann Ketten erzeugen, ohne eine neue Regel einzufuehren.",
    ],
    sourceReferenceIds,
    objectiveIds,
    level: "foundational",
    problem:
      "Gegeben sind x ≽ y, y ≽ x und y ≽ z. Welche Endpunkte koennen in Ketten auftreten?",
    testedConcept: "Beidseitige schwache Praeferenz in Ketten",
    solutionSteps: [
      "Aus x ≽ y und y ≽ z entsteht die Forderung x ≽ z.",
      "Aus y ≽ x und x ≽ y entsteht die Forderung y ≽ y, die reflexiv ist, wenn reflexive Vergleiche enthalten sind.",
      "Aus x ≽ y und y ≽ x entsteht die Forderung x ≽ x.",
      "Die Kettenlogik bleibt dieselbe; Indifferenz wird nicht als eigene Transitivitaetsdefinition benutzt.",
    ],
    reasoning:
      "Indifferenz ist auf dieser Ebene nur beidseitige schwache Praeferenz. Transitivitaet prueft weiter schwache Vergleiche.",
    interpretation:
      "Du musst die Relationsebene sauber halten: erst schwache Ketten, danach abgeleitete Begriffe.",
    commonWrongApproach:
      "Sobald ein indifferentes Paar vorkommt, die Kettenpruefung abbrechen.",
  },
  {
    id: "pref-trans-example-05",
    kind: "worked-example",
    title: "Beispiel 5: Mehrere Ketten systematisch pruefen",
    body: ["Bei groesseren Listen brauchst du eine Methode."],
    sourceReferenceIds,
    objectiveIds,
    level: "intermediate",
    problem:
      "Domain {w,x,y,z}. Die nicht-reflexiven Vergleiche sind w ≽ x, x ≽ y, y ≽ z, w ≽ y und x ≽ z. Welche noch fehlende Konsequenz faellt auf?",
    testedConcept: "Kettenabschluss ueber mehrere Schritte",
    solutionSteps: [
      "w ≽ x und x ≽ y verlangen w ≽ y; dieser Endpunkt ist vorhanden.",
      "x ≽ y und y ≽ z verlangen x ≽ z; dieser Endpunkt ist vorhanden.",
      "w ≽ y und y ≽ z verlangen w ≽ z.",
      "w ≽ z fehlt in der Liste; damit gibt es eine Transitivitaetsverletzung.",
    ],
    reasoning:
      "Auch wenn die naheliegenden kurzen Ketten geschlossen sind, koennen spaeter sichtbar werdende Ketten einen weiteren Endpunkt verlangen.",
    interpretation:
      "Eine geordnete Pruefliste verhindert, dass du nach der ersten geschlossenen Kette zu frueh aufhoerst.",
    commonWrongApproach:
      "Nur benachbarte Eintraege in der Aufgabenliste pruefen.",
  },
  {
    id: "pref-trans-example-06",
    kind: "worked-example",
    title: "Beispiel 6: Zyklus als Verletzung",
    body: [
      "Zyklen werden nicht wegen ihrer Form verboten, sondern wegen der Ketten, die sie verletzen.",
    ],
    sourceReferenceIds,
    objectiveIds,
    level: "intermediate",
    problem:
      "Die Relation enthaelt x ≽ y, y ≽ z und z ≻ x. Warum ist das fuer Transitivitaet problematisch?",
    testedConcept: "Zyklus mit strikter Rueckrichtung",
    solutionSteps: [
      "Aus x ≽ y und y ≽ z verlangt Transitivitaet x ≽ z.",
      "z ≻ x bedeutet nach der abgeleiteten Definition z ≽ x und nicht x ≽ z.",
      "Damit wird der geforderte Endpunkt x ≽ z ausgeschlossen.",
      "Die Relation kann unter diesen Aussagen nicht transitiv sein.",
    ],
    reasoning:
      "Die Verletzung entsteht aus der Kette und dem fehlenden beziehungsweise ausgeschlossenen Endpunkt, nicht aus einem unspezifischen Gefuehl von Kreisfoermigkeit.",
    interpretation:
      "In Klausuren solltest du den verletzten Endpunkt explizit nennen.",
    commonWrongApproach:
      "Nur schreiben, ein Kreis sei immer irrational, ohne die schwache Kette zu zeigen.",
  },
  {
    id: "pref-trans-example-07",
    kind: "worked-example",
    title: "Beispiel 7: Vollstaendig, aber nicht transitiv",
    body: ["Das ist die wichtigste Abgrenzung zur vorigen Sitzung."],
    sourceReferenceIds,
    objectiveIds,
    level: "intermediate",
    problem:
      "Domain {x,y,z}. Genau eine Richtung je Paar gilt: x ≽ y, y ≽ z und z ≽ x. Ist die Relation vollstaendig? Ist sie transitiv?",
    testedConcept: "Unabhaengigkeit von Vollstaendigkeit und Transitivitaet",
    solutionSteps: [
      "Jedes Paar hat eine Richtung: {x,y}, {y,z} und {x,z} sind abgedeckt.",
      "Die Relation ist daher vollstaendig.",
      "Aus x ≽ y und y ≽ z verlangt Transitivitaet x ≽ z.",
      "Stattdessen gilt fuer dieses Paar nur z ≽ x; x ≽ z fehlt.",
      "Die Relation ist vollstaendig, aber nicht transitiv.",
    ],
    reasoning:
      "Vollstaendigkeit deckt Paare ab; Transitivitaet verlangt Kettenabschluss.",
    interpretation:
      "Dieses Beispiel ist der Standardtest gegen die falsche Gleichsetzung beider Axiome.",
    commonWrongApproach:
      "Aus der Vollstaendigkeit sofort Rationalitaet oder Transitivitaet folgern.",
  },
  {
    id: "pref-trans-example-08",
    kind: "worked-example",
    title: "Beispiel 8: Transitiv, aber unvollstaendig",
    body: ["Auch die Gegenrichtung der Abgrenzung ist moeglich."],
    sourceReferenceIds,
    objectiveIds,
    level: "intermediate",
    problem:
      "Domain {x,y,z}. Die Relation enthaelt alle reflexiven Vergleiche und zusaetzlich x ≽ y. Es gibt keine Vergleiche zwischen x und z oder y und z. Was zeigt das?",
    testedConcept: "Transitivitaet ohne Vollstaendigkeit",
    solutionSteps: [
      "Die Relation ist nicht vollstaendig, weil fuer {x,z} und {y,z} keine Richtung vorliegt.",
      "Pruefe die vorhandenen Ketten: Reflexive Vergleiche erzeugen nur bereits vorhandene Endpunkte.",
      "x ≽ y zusammen mit y ≽ y verlangt x ≽ y, das vorhanden ist.",
      "x ≽ x zusammen mit x ≽ y verlangt x ≽ y, das vorhanden ist.",
      "Keine vorhandene Kette verlangt einen fehlenden Vergleich mit z.",
    ],
    reasoning:
      "Transitivitaet kann in einer spaerlichen Relation erfuellt sein, wenn keine vorhandene Kette einen fehlenden Endpunkt erzwingt.",
    interpretation:
      "Unvollstaendigkeit ist also nicht automatisch eine Transitivitaetsverletzung.",
    commonWrongApproach:
      "Jede fehlende Paarabdeckung als Transitivitaetsfehler einstufen.",
  },
  {
    id: "pref-trans-example-09",
    kind: "worked-example",
    title: "Klausurbeispiel 1: Relationstabelle auswerten",
    body: [
      "Exam-style Aufgaben verlangen meist eine knappe, nachvollziehbare Diagnose.",
    ],
    sourceReferenceIds,
    objectiveIds,
    level: "exam-style",
    problem:
      "Eine Aufgabe gibt die nicht-reflexiven Vergleiche a ≽ b, b ≽ c, a ≽ c, c ≽ d und b ≽ d an. Formuliere die beste Transitivitaetsdiagnose.",
    testedConcept: "Klausurdiagnose mit fehlendem Endpunkt",
    solutionSteps: [
      "a ≽ b und b ≽ c verlangen a ≽ c; vorhanden.",
      "b ≽ c und c ≽ d verlangen b ≽ d; vorhanden.",
      "a ≽ c und c ≽ d verlangen a ≽ d; fehlt.",
      "Die Relation ist nicht transitiv; ein verletzendes Tripel ist (a,c,d).",
    ],
    reasoning:
      "Die Diagnose ist stark, weil sie den konkreten Fehler nennt und nicht bei einer vagen Klassifikation stehen bleibt.",
    interpretation:
      "In einer Klausur reicht ein korrektes Gegenbeispiel fuer die negative Aussage, solange es wirklich eine vorhandene Kette nutzt.",
    commonWrongApproach:
      "Alle sichtbaren Dreier alphabetisch pruefen, ohne auf die tatsaechlich vorhandenen Praemissen zu achten.",
  },
  {
    id: "pref-trans-example-10",
    kind: "worked-example",
    title: "Klausurbeispiel 2: Gegenbeispiel konstruieren",
    body: ["Manchmal musst du selbst eine Relation bauen."],
    sourceReferenceIds,
    objectiveIds,
    level: "exam-style",
    problem:
      "Konstruiere auf {x,y,z} eine Relation, die vollstaendig, aber nicht transitiv ist.",
    testedConcept: "Konstruktion eines Gegenbeispiels",
    solutionSteps: [
      "Decke jedes Paar mit genau einer Richtung ab.",
      "Waehle x ≽ y, y ≽ z und z ≽ x.",
      "Damit sind {x,y}, {y,z} und {x,z} abgedeckt; Vollstaendigkeit ist erfuellt.",
      "Die Kette x ≽ y und y ≽ z verlangt x ≽ z, aber gewaehlt wurde z ≽ x.",
      "Das Beispiel ist vollstaendig, aber nicht transitiv.",
    ],
    reasoning:
      "Der dreigliedrige Zyklus trennt Paarabdeckung von Kettenabschluss.",
    interpretation:
      "Das Gegenbeispiel widerlegt jede Behauptung, Vollstaendigkeit allein reiche fuer Rationalitaet.",
    commonWrongApproach:
      "Ein unvollstaendiges Beispiel bauen und damit die falsche Eigenschaft widerlegen.",
  },
  {
    id: "pref-trans-example-11",
    kind: "worked-example",
    title: "Klausurbeispiel 3: Warum ein Gegenbeispiel genuegt",
    body: [
      "Die Definition ist universell; deshalb ist ein gueltiger Bruch entscheidend.",
    ],
    sourceReferenceIds,
    objectiveIds,
    level: "exam-style",
    problem:
      "Begruende formal, warum aus einer verletzten Kette die Aussage nicht transitiv folgt.",
    testedConcept: "Universelle Aussage und Gegenbeispiel",
    solutionSteps: [
      "Transitivitaet fordert fuer alle x, y, z: Wenn x ≽ y und y ≽ z, dann x ≽ z.",
      "Ein Gegenbeispiel waehlt konkrete Alternativen, fuer die die beiden Praemissen gelten.",
      "Beim selben Tripel fehlt der geforderte Endpunkt.",
      "Damit ist die universelle Aussage falsch.",
    ],
    reasoning:
      "Eine Fuer-alle-Aussage ist bereits widerlegt, wenn ein einziges Element ihrer behaupteten Menge die Bedingung verletzt.",
    interpretation: "Diese Begruendung ist kurz, aber mathematisch sauber.",
    commonWrongApproach:
      "Nach dem ersten Gegenbeispiel weiterrechnen und die klare Widerlegung verwischen.",
  },
  {
    id: "pref-trans-guided-a",
    kind: "guided-practice",
    title: "Gefuehrte Aufgabe A: Endpunkt bestimmen",
    body: ["Beginne mit der kleinsten Kettenhandlung."],
    sourceReferenceIds,
    objectiveIds,
    prompt:
      "Gegeben sind m ≽ n und n ≽ p. Welchen direkten Vergleich fordert Transitivitaet?",
    hints: [
      {
        id: "pref-trans-guided-a-h1",
        label: "Hinweis 1",
        body: "Suche das Mittelglied, das rechts in der ersten und links in der zweiten Aussage steht.",
      },
      {
        id: "pref-trans-guided-a-h2",
        label: "Hinweis 2",
        body: "Der Anfang der ersten Aussage bleibt links, das Ende der zweiten Aussage bleibt rechts.",
      },
      {
        id: "pref-trans-guided-a-h3",
        label: "Hinweis 3",
        body: "Die Form ist x ≽ y und y ≽ z, also x ≽ z.",
      },
    ],
    fullExplanation:
      "Hier spielt n die Rolle des Mittelglieds. Aus m ≽ n und n ≽ p fordert Transitivitaet m ≽ p.",
  },
  {
    id: "pref-trans-guided-b",
    kind: "guided-practice",
    title: "Gefuehrte Aufgabe B: Verletzung diagnostizieren",
    body: ["Jetzt pruefst du eine fehlende Konsequenz."],
    sourceReferenceIds,
    objectiveIds,
    prompt:
      "Die Relation enthaelt a ≽ b und b ≽ c, aber nicht a ≽ c. Formuliere die verletzte Kette.",
    hints: [
      {
        id: "pref-trans-guided-b-h1",
        label: "Hinweis 1",
        body: "Nenne zuerst beide Praemissen, die wirklich in der Relation stehen.",
      },
      {
        id: "pref-trans-guided-b-h2",
        label: "Hinweis 2",
        body: "Bestimme danach den Endpunkt, den die Definition verlangt.",
      },
      {
        id: "pref-trans-guided-b-h3",
        label: "Hinweis 3",
        body: "Ein verletzendes Tripel wird in der Reihenfolge Anfang, Mittelglied, Ende notiert.",
      },
    ],
    fullExplanation:
      "a ≽ b und b ≽ c bilden eine Kette. Transitivitaet verlangt a ≽ c. Weil a ≽ c fehlt, verletzt das Tripel (a,b,c) die Transitivitaet.",
  },
  {
    id: "pref-trans-guided-c",
    kind: "guided-practice",
    title: "Gefuehrte Aufgabe C: Gegenbeispiel bauen",
    body: [
      "Diese Aufgabe verbindet Vollstaendigkeit und Transitivitaet ohne sie zu vermischen.",
    ],
    sourceReferenceIds,
    objectiveIds,
    prompt:
      "Baue auf {x,y,z} eine vollstaendige, aber nicht transitive Relation mit genau einer Richtung je Paar.",
    hints: [
      {
        id: "pref-trans-guided-c-h1",
        label: "Hinweis 1",
        body: "Vollstaendigkeit verlangt fuer jedes der drei Paare mindestens eine Richtung.",
      },
      {
        id: "pref-trans-guided-c-h2",
        label: "Hinweis 2",
        body: "Nichttransitivitaet entsteht, wenn zwei Richtungen eine dritte verlangen, die du nicht aufnimmst.",
      },
      {
        id: "pref-trans-guided-c-h3",
        label: "Hinweis 3",
        body: "Ein Zyklus mit x vor y, y vor z und z vor x ist der kanonische Bauplan.",
      },
    ],
    fullExplanation:
      "Eine passende Relation enthaelt x ≽ y, y ≽ z und z ≽ x. Jedes Paar ist abgedeckt, also vollstaendig. Aber x ≽ y und y ≽ z verlangen x ≽ z, das fehlt.",
  },
  {
    id: "pref-trans-guided-d",
    kind: "guided-practice",
    title: "Gefuehrte Aufgabe D: Eigenschaften trennen",
    body: [
      "Zum Schluss entscheidest du, welcher Check wirklich angesprochen ist.",
    ],
    sourceReferenceIds,
    objectiveIds,
    prompt:
      "Eine Relation auf {x,y,z} enthaelt alle reflexiven Vergleiche und x ≽ y, aber keinen Vergleich zwischen z und den anderen Alternativen. Welche Eigenschaft scheitert sicher?",
    hints: [
      {
        id: "pref-trans-guided-d-h1",
        label: "Hinweis 1",
        body: "Frage zuerst, ob jedes Paar vergleichbar ist.",
      },
      {
        id: "pref-trans-guided-d-h2",
        label: "Hinweis 2",
        body: "Danach frage, ob eine vorhandene Kette einen fehlenden Endpunkt erzwingt.",
      },
      {
        id: "pref-trans-guided-d-h3",
        label: "Hinweis 3",
        body: "Fehlende Vergleiche mit z sind zunaechst ein Paarabdeckungsproblem.",
      },
    ],
    fullExplanation:
      "Vollstaendigkeit scheitert sicher, weil {x,z} und {y,z} nicht abgedeckt sind. Transitivitaet scheitert daraus nicht automatisch; sie waere nur verletzt, wenn eine vorhandene Kette einen fehlenden Endpunkt verlangt.",
  },
  {
    id: "pref-trans-mis-01",
    kind: "misconception",
    title: "Denkfehler: Vollstaendig heisst transitiv",
    body: [
      "Dieser Fehler ist beliebt, weil beide Begriffe spaeter zusammen bei Rationalitaet auftauchen.",
    ],
    sourceReferenceIds,
    objectiveIds,
    whyPlausible:
      "Wenn jedes Paar vergleichbar ist, wirkt die Relation auf den ersten Blick ordentlich genug.",
    correction:
      "Vollstaendigkeit prueft Paarabdeckung; Transitivitaet prueft Kettenabschluss. In Klausuren wird dieser Unterschied oft mit einem Dreierzyklus getestet.",
  },
  {
    id: "pref-trans-mis-02",
    kind: "misconception",
    title: "Denkfehler: Eine geschlossene Kette reicht immer",
    body: [
      "Eine positive Transitivitaetsaussage ist staerker als ein einzelner Treffer.",
    ],
    sourceReferenceIds,
    objectiveIds,
    whyPlausible:
      "Die erste gefundene Kette ist oft die sichtbarste und nimmt kognitive Last aus der Aufgabe.",
    correction:
      "Fuer transitiv muessen alle anwendbaren Ketten geschlossen sein. Fuer nicht transitiv reicht dagegen eine einzige verletzte Kette.",
  },
  {
    id: "pref-trans-mis-03",
    kind: "misconception",
    title:
      "Denkfehler: Fehlender Vergleich bedeutet automatisch Transitivitaetsfehler",
    body: ["Dieser Fehler vermischt Unvollstaendigkeit mit Kettenlogik."],
    sourceReferenceIds,
    objectiveIds,
    whyPlausible:
      "Ein fehlender Vergleich sieht wie ein Bruch in der Relation aus.",
    correction:
      "Ein fehlender Vergleich verletzt Transitivitaet nur, wenn zwei vorhandene Praemissen genau diesen Endpunkt erzwingen.",
  },
  {
    id: "pref-trans-mis-04",
    kind: "misconception",
    title: "Denkfehler: Die Richtung ist egal",
    body: ["Bei Ketten ist Richtung die ganze Aufgabe."],
    sourceReferenceIds,
    objectiveIds,
    whyPlausible:
      "Die Alternativennamen sind dieselben, und das Auge erkennt schnell eine Dreiergruppe.",
    correction:
      "Nur x ≽ y zusammen mit y ≽ z fordert x ≽ z. Aussagen wie x ≽ y und z ≽ y bilden keine solche Kette.",
  },
  {
    id: "pref-trans-mis-05",
    kind: "misconception",
    title: "Denkfehler: Reflexive Vergleiche ignorieren oder ueberbewerten",
    body: [
      "Reflexive Vergleiche sind in kleinen Relationstabellen oft enthalten.",
    ],
    sourceReferenceIds,
    objectiveIds,
    whyPlausible:
      "x ≽ x wirkt entweder trivial oder wie eine zusaetzliche komplizierte Kette.",
    correction:
      "Reflexive Ketten bestaetigen meist bereits vorhandene Vergleiche. Sie ersetzen aber keine fehlende nicht-reflexive Konsequenz.",
  },
  {
    id: "pref-trans-mis-06",
    kind: "misconception",
    title: "Denkfehler: Rationalitaet sofort aus Transitivitaet ableiten",
    body: [
      "Die naechste Sitzung kombiniert die Axiome; diese Sitzung tut das noch nicht.",
    ],
    sourceReferenceIds,
    objectiveIds,
    whyPlausible:
      "Transitivitaet klingt nach Konsistenz und damit nach rationalem Verhalten.",
    correction:
      "Im technischen Kursumfang verlangt Rationalitaet Vollstaendigkeit und Transitivitaet. Eine transitive, aber unvollstaendige Relation ist noch nicht rational.",
  },
  {
    id: "pref-trans-exam-01",
    kind: "exam-thinking",
    title: "Klausurdenken: Conceptual Check",
    body: ["Diese Aufgaben fragen nach der Idee hinter der Definition."],
    sourceReferenceIds,
    objectiveIds,
    taskFamilyId: "pref-exam-transitivity-check",
    testedConcept: "Transitivitaet als Kettenkonsistenz",
    examinerReasoning: [
      "Idealer Prozess: Form der Kette nennen, dann den geforderten Endpunkt.",
      "Voller Kredit: x ≽ y und y ≽ z implizieren x ≽ z korrekt paraphrasieren.",
      "Typischer Fehler: Transitivitaet als jedes Paar ist vergleichbar beschreiben.",
      "Effizienter Check: Erst nach einem gemeinsamen Mittelglied suchen.",
    ],
  },
  {
    id: "pref-trans-exam-02",
    kind: "exam-thinking",
    title: "Klausurdenken: Formale Klassifikation",
    body: ["Hier reicht ein Ergebnis ohne Beleg selten aus."],
    sourceReferenceIds,
    objectiveIds,
    taskFamilyId: "pref-exam-transitivity-check",
    testedConcept: "Relation als transitiv oder nicht transitiv klassifizieren",
    examinerReasoning: [
      "Idealer Prozess: Alle anwendbaren Ketten oder ein Gegenbeispiel geordnet dokumentieren.",
      "Voller Kredit: Bei nicht transitiv ein Tripel und den fehlenden Endpunkt nennen.",
      "Typischer Fehler: Nur eine sichtbare Kette pruefen.",
      "Effizienter Check: Sobald ein echtes Gegenbeispiel gefunden ist, die Diagnose klar formulieren.",
    ],
  },
  {
    id: "pref-trans-exam-03",
    kind: "exam-thinking",
    title: "Klausurdenken: Gegenbeispiel konstruieren",
    body: [
      "Konstruktionen zeigen, ob du die Definition aktiv einsetzen kannst.",
    ],
    sourceReferenceIds,
    objectiveIds,
    taskFamilyId: "pref-exam-transitivity-counterexample",
    testedConcept: "Vollstaendig aber nicht transitiv",
    examinerReasoning: [
      "Idealer Prozess: Zielbedingungen getrennt notieren.",
      "Voller Kredit: Paarabdeckung zeigen und dann eine verletzte Kette zeigen.",
      "Typischer Fehler: Ein Beispiel bauen, das schon an Vollstaendigkeit scheitert.",
      "Effizienter Check: Dreierzyklus mit genau einer Richtung je Paar verwenden.",
    ],
  },
  {
    id: "pref-trans-exam-04",
    kind: "exam-thinking",
    title: "Klausurdenken: Proof-style Reasoning",
    body: [
      "Manche Aufgaben fragen nach dem Warum, nicht nur nach der Klassifikation.",
    ],
    sourceReferenceIds,
    objectiveIds,
    taskFamilyId: "pref-exam-transitivity-proof",
    testedConcept: "Universelle Aussage widerlegen",
    examinerReasoning: [
      "Idealer Prozess: Fuer-alle-Struktur der Definition nennen.",
      "Voller Kredit: Ein konkretes Tripel mit gueltigen Praemissen und fehlender Konsequenz angeben.",
      "Typischer Fehler: Allgemein ueber Inkonsistenz schreiben, ohne Tripel.",
      "Effizienter Check: Das Gegenbeispiel als genau eine Instanz der Definition formulieren.",
    ],
  },
  {
    id: "pref-trans-exam-05",
    kind: "exam-thinking",
    title: "Klausurdenken: Multiple-Choice-Fallen",
    body: ["Antwortoptionen testen oft die Grenzen des Begriffs."],
    sourceReferenceIds,
    objectiveIds,
    taskFamilyId: "pref-exam-transitivity-traps",
    testedConcept: "Abgrenzung von Vollstaendigkeit und Rationalitaet",
    examinerReasoning: [
      "Idealer Prozess: Jede Option dem passenden Axiom zuordnen.",
      "Voller Kredit: Keine Rationalitaetsoption waehlen, bevor beide Axiome geprueft sind.",
      "Typischer Fehler: Eine vollstaendige Relation automatisch rational nennen.",
      "Effizienter Check: Erst Kette, dann Paarabdeckung, dann erst Rationalitaetslabel.",
    ],
  },
  {
    id: "pref-trans-active-recall",
    kind: "active-recall",
    title: "Active Recall",
    body: [
      "Schliesse die Seite kurz und beantworte diese Fragen ohne Nachsehen.",
    ],
    sourceReferenceIds,
    objectiveIds,
    prompts: [
      "Welche Form muessen zwei Praemissen haben, damit Transitivitaet einen dritten Vergleich fordert?",
      "Was reicht aus, um eine Relation als nicht transitiv zu klassifizieren?",
      "Warum impliziert Vollstaendigkeit nicht automatisch Transitivitaet?",
      "Welche Aussage darfst du aus x ≽ y und z ≽ y gerade nicht ableiten?",
      "Warum ist Rationalitaet in dieser Sitzung nur ein Ausblick?",
    ],
  },
  {
    id: "pref-trans-feynman",
    kind: "feynman-test",
    title: "Feynman-Test",
    body: [
      "Erklaere den Begriff so, als wuerdest du ihn einer Person ohne Notation beibringen.",
    ],
    sourceReferenceIds,
    objectiveIds,
    prompts: [
      "Erklaere Transitivitaet mit drei Alternativen und einem Pfeilbild.",
      "Erklaere den Unterschied zwischen wenn zwei Vergleiche eine Kette bilden und wenn zwei Vergleiche nur dieselben Alternativen enthalten.",
      "Erfinde ein Beispiel, das vollstaendig, aber nicht transitiv ist, und erklaere es ohne das Wort Rationalitaet.",
    ],
  },
  {
    id: "pref-trans-interleaving",
    kind: "interleaving",
    title: "Interleaving mit Nachbarthemen",
    body: ["Wechsle bewusst zwischen aehnlichen Begriffen."],
    sourceReferenceIds,
    objectiveIds,
    comparisons: [
      "Schwache Praeferenz: einzelne gerichtete Aussage x ≽ y.",
      "Indifferenz: beide schwachen Richtungen fuer dasselbe Paar.",
      "Vollstaendigkeit: jedes Paar hat mindestens eine schwache Richtung.",
      "Transitivitaet: jede vorhandene Kette hat den geforderten Endpunkt.",
      "Rationalitaet: spaeterer technischer Check aus Vollstaendigkeit und Transitivitaet zusammen.",
    ],
  },
  {
    id: "pref-trans-cheat-sheet",
    kind: "cheat-sheet",
    title: "Cheat Sheet",
    body: ["Nutze diese Kurzfassung vor den Aufgaben."],
    sourceReferenceIds,
    objectiveIds,
    entries: [
      {
        term: "Transitivitaet",
        description: "Wenn x ≽ y und y ≽ z, dann muss x ≽ z gelten.",
      },
      {
        term: "Verletzendes Tripel",
        description:
          "Konkretes (x,y,z), bei dem beide Praemissen gelten und der Endpunkt fehlt.",
      },
      {
        term: "Positive Diagnose",
        description:
          "Alle anwendbaren Ketten sind geschlossen; eine einzelne geschlossene Kette reicht nicht.",
      },
      {
        term: "Negative Diagnose",
        description:
          "Eine einzige echte verletzte Kette widerlegt Transitivitaet.",
      },
      {
        term: "Nicht verwechseln",
        description:
          "Vollstaendigkeit ist Paarabdeckung, Transitivitaet ist Kettenabschluss.",
      },
    ],
  },
  {
    id: "pref-trans-mastery",
    kind: "mastery-check",
    title: "Mastery Checklist",
    body: [
      "Du bist bereit fuer die Uebungen, wenn diese beobachtbaren Leistungen sitzen.",
    ],
    sourceReferenceIds,
    objectiveIds,
    checks: [
      {
        observable: "Ketten finden",
        evidence:
          "Du markierst in einer Relation zuerst zwei passende Praemissen mit gemeinsamem Mittelglied.",
      },
      {
        observable: "Endpunkt bilden",
        evidence:
          "Du schreibst den geforderten Vergleich in der Richtung Anfang zu Ende auf.",
      },
      {
        observable: "Gegenbeispiel nennen",
        evidence:
          "Du kannst ein verletzendes Tripel mit Praemissen und fehlender Konsequenz angeben.",
      },
      {
        observable: "Axiome trennen",
        evidence:
          "Du erklaerst, warum Vollstaendigkeit und Transitivitaet getrennte Checks sind.",
      },
      {
        observable: "Rationalitaet begrenzen",
        evidence: "Du verwendest Rationalitaet erst nach beiden Axiomchecks.",
      },
    ],
  },
  {
    id: "pref-trans-remediation",
    kind: "remediation",
    title: "Wenn es noch hakt",
    body: [
      "Wenn du den Endpunkt oft verdrehst, schreibe die Kette mit Platzhaltern: Anfang ≽ Mitte und Mitte ≽ Ende, also Anfang ≽ Ende.",
      "Wenn du Vollstaendigkeit und Transitivitaet vermischst, bearbeite zuerst eine Paarliste und danach getrennt eine Kettenliste fuer dieselbe Relation.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-trans-practice-handoff",
    kind: "practice-handoff",
    title: "Praxis-Handoff",
    body: [
      "Wechsle jetzt zur Praxisroute. Die passenden Aufgaben trainieren geschlossene Ketten, konkrete Transitivitaetsverletzungen und die Abgrenzung zur spaeteren Rationalitaetsklassifikation.",
    ],
    sourceReferenceIds,
    objectiveIds,
    practiceRoute: "/ueben/mikrooekonomik-1/praeferenzrelationen/",
    exerciseIds: ["pref-practice-07", "pref-practice-08", "pref-practice-09"],
    limitations: [
      "pref-practice-07 prueft eine geschlossene schwache-Praeferenz-Kette.",
      "pref-practice-08 prueft eine konkrete Transitivitaetsverletzung.",
      "pref-practice-09 ist ein Uebergang zur Rationalitaet und wird hier nur als Abgrenzungsaufgabe empfohlen.",
      "pref-practice-10 gehoert zur spaeteren Rationalitaetsklassifikation und ist nicht Teil dieser fokussierten Transitivitaetssitzung.",
    ],
  },
];
