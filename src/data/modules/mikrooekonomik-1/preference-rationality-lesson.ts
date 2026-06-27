import type { LessonBlock } from "../../../learning/model";

const sourceReferenceIds = ["pref-claims", "pref-outline"] as const;
const objectiveIds = [
  "pref-lo-rationality-01",
  "pref-lo-rationality-02",
  "pref-lo-rationality-03",
  "pref-lo-rationality-04",
  "pref-lo-rationality-05",
] as const;

export const preferenceRationalityLessonBlocks: readonly LessonBlock[] = [
  {
    id: "pref-rational-why",
    kind: "why-exists",
    title: "Warum diese Sitzung existiert",
    body: [
      "Diese Sitzung verwandelt die getrennt gelernten Checks Vollstaendigkeit und Transitivitaet in eine verlaessliche Klassifikationsroutine.",
      "Rationalitaet bedeutet hier streng technisch: Die betrachtete schwache Praeferenzrelation ist vollstaendig und transitiv.",
    ],
    sourceReferenceIds,
    objectiveIds,
  },
  {
    id: "pref-rational-unlocks",
    kind: "unlocks",
    title: "Was diese Sitzung freischaltet",
    body: [
      "Du kannst eine unbekannte endliche Relation systematisch pruefen, die gescheiterte Bedingung benennen und eine klausurtaugliche Schlussfolgerung formulieren.",
      "Spaetere Darstellung und Wahlmodelle duerfen erst darauf aufbauen, dass der technische Rationalitaetsbegriff sauber von Alltagssprache getrennt ist.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-rational-prerequisites",
    kind: "prerequisites",
    title: "Voraussetzungen",
    body: [
      "Du brauchst schwache Praeferenz als gerichtete Relation, Vollstaendigkeit als Paarabdeckung und Transitivitaet als Kettenabschluss.",
      "Diese Sitzung wiederholt die beiden Axiome nur kompakt. Wenn die Paarliste oder die Kettenpruefung noch unsicher ist, fuehre die vorherigen Sitzungen zuerst erneut aus.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-rational-objectives",
    kind: "objectives",
    title: "Lernziele",
    body: [
      "State the course definition of a rational preference relation as completeness and transitivity.",
      "Explain why each condition is necessary and why either condition alone is insufficient.",
      "Classify unseen finite relations by testing completeness and transitivity separately.",
      "Identify the exact failed condition and justify the conclusion formally and verbally.",
      "Construct and compare examples for all four property combinations without using everyday meanings of rationality.",
    ],
    sourceReferenceIds,
    objectiveIds,
  },
  {
    id: "pref-rational-dependency-position",
    kind: "dependency-position",
    title: "Position im Lernpfad",
    body: [
      "Weak preference relation -> Completeness: Erst die gerichtete schwache Relation macht Paarabdeckung pruefbar.",
      "Completeness -> Transitivity: Nach der Frage, ob jedes Paar vergleichbar ist, folgt die Frage, ob vorhandene Ketten zusammenpassen.",
      "Transitivity -> Rational preference relation: Erst beide Axiome zusammen erzeugen den technischen Rationalitaetsbegriff.",
      "Rational preference relation -> Later representation and choice analysis: Spaetere Themen duerfen diesen Begriff verwenden, werden hier aber noch nicht gelehrt.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-rational-retrieval",
    kind: "big-picture",
    title: "Retrieval Bridge",
    body: [
      "Rekonstruiere vor dem Weiterlesen: Was prueft Vollstaendigkeit? Was prueft Transitivitaet? Welche einzelne Evidenz widerlegt jeweils die Eigenschaft?",
      "Korrekturanker: Vollstaendigkeit scheitert an einem Paar ohne schwache Richtung. Transitivitaet scheitert an einer vorhandenen Kette mit fehlendem Endpunkt. Rationalitaet scheitert, sobald mindestens eine dieser beiden Bedingungen scheitert.",
    ],
    sourceReferenceIds,
    objectiveIds,
  },
  {
    id: "pref-rational-big-picture",
    kind: "big-picture",
    title: "Big Picture",
    body: [
      "Oekonomische Modelle kombinieren die beiden Eigenschaften, weil eine Relation zwei Dinge leisten soll: relevante Paare vergleichen und diese Vergleiche widerspruchsfrei ueber Ketten zusammenhalten.",
      "Rationalitaet ist in dieser Sitzung kein Urteil ueber Intelligenz, Moral, Egoismus, Realismus oder Wohlfahrt. Es ist ein formaler Klassifikationsname fuer Vergleichsabdeckung plus Kettenkonsistenz.",
    ],
    sourceReferenceIds,
    objectiveIds,
  },
  {
    id: "pref-rational-intuition",
    kind: "intuition",
    title: "Intuition: vier Faelle auf derselben Menge",
    body: [
      "Arbeite mit derselben Domain {x,y,z}. Fall 1: Alle Richtungen zwischen allen Alternativen gelten; die Relation ist vollstaendig und transitiv, also rational.",
      "Fall 2: x ≽ y, y ≽ z und z ≽ x decken jedes Paar ab, aber die Kette x ≽ y und y ≽ z verlangt x ≽ z; sie ist vollstaendig, aber nicht transitiv.",
      "Fall 3: Nur reflexive Vergleiche und x ≽ y gelten; vorhandene Ketten schliessen, aber z ist mit anderen Alternativen unvergleichbar. Die Relation ist transitiv, aber nicht vollstaendig.",
      "Fall 4: x ≽ y und y ≽ z gelten, aber x ≽ z fehlt und z ist mit x nicht beidseitig abgedeckt; dann koennen beide Eigenschaften scheitern.",
    ],
    sourceReferenceIds,
    objectiveIds,
  },
  {
    id: "pref-rational-definition",
    kind: "definition",
    title: "Formale Definition",
    body: [
      "Eine schwache Praeferenzrelation ≽ auf einer betrachteten Menge ist rational, wenn sie vollstaendig und transitiv ist.",
      "Vollstaendigkeit bedeutet: Fuer jedes x und y gilt x ≽ y oder y ≽ x. Transitivitaet bedeutet: Fuer alle x, y und z gilt, wenn x ≽ y und y ≽ z, dann x ≽ z.",
      "Die logische Form ist eine Konjunktion: Rationalitaet = Vollstaendigkeit AND Transitivitaet. Ein Oder reicht nicht, und ein einzelner bestandener Check ersetzt den anderen nicht.",
    ],
    sourceReferenceIds,
    objectiveIds,
  },
  {
    id: "pref-rational-matrix",
    kind: "classification-matrix",
    title: "Property Matrix",
    body: [
      "Die Matrix zeigt die vier logischen Kombinationen. Nur die erste Zeile erfuellt die Kursdefinition einer rationalen Praeferenzrelation.",
      "Lies die Tabelle nicht allein: Jede Zeile wird darunter mit Beispiel, Grund und Klausurfalle erklaert.",
    ],
    sourceReferenceIds,
    objectiveIds,
    columns: ["Vollstaendig", "Transitiv", "Klassifikation"],
    rows: [
      {
        id: "rational-matrix-yes-yes",
        complete: "Yes",
        transitive: "Yes",
        classification: "Rational",
        example:
          "Beispiel: alle geordneten Vergleiche zwischen x, y und z sind enthalten.",
        reason: "Jedes Paar ist abgedeckt und jede Kette hat ihren Endpunkt.",
        examTrap:
          "Mutualitaet als Widerspruch deuten, obwohl sie Indifferenz erlaubt.",
      },
      {
        id: "rational-matrix-yes-no",
        complete: "Yes",
        transitive: "No",
        classification: "Not rational",
        example: "Beispiel: x ≽ y, y ≽ z und z ≽ x.",
        reason:
          "Alle Paare sind vergleichbar, aber x ≽ y und y ≽ z verlangen x ≽ z.",
        examTrap:
          "Vollstaendigkeit als hinreichend fuer Rationalitaet behandeln.",
      },
      {
        id: "rational-matrix-no-yes",
        complete: "No",
        transitive: "Yes",
        classification: "Not rational",
        example: "Beispiel: nur reflexive Vergleiche und x ≽ y gelten.",
        reason:
          "Vorhandene Ketten schliessen, aber Paare mit z sind nicht abgedeckt.",
        examTrap:
          "Keine Kettenverletzung als vollen Rationalitaetsbeweis lesen.",
      },
      {
        id: "rational-matrix-no-no",
        complete: "No",
        transitive: "No",
        classification: "Not rational",
        example: "Beispiel: x ≽ y und y ≽ z gelten, x ≽ z fehlt.",
        reason:
          "Ein Paar bleibt ohne Richtung und zugleich ist eine Kette offen.",
        examTrap: "Nur den ersten Fehler nennen und den zweiten uebersehen.",
      },
    ],
  },
  {
    id: "pref-rational-assumptions",
    kind: "assumptions",
    title: "Annahmen und Umfang",
    body: [
      "Die Domain und die Relation muessen als Pruefgegenstand feststehen. Ohne Domain ist die Vollstaendigkeitsfrage offen; ohne erschopfende Relation darf ein fehlender Vergleich nicht automatisch als falsch behandelt werden.",
      "Die Sitzung nutzt keine Nutzenrepresentation, keine Optimierung, keine Nachfrage und keine Wohlfahrtsaussage. Utility representation bleibt ein spaeterer Themenbereich, nicht Teil dieser Klassifikation.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-rational-symbols",
    kind: "symbols",
    title: "Symbole",
    body: [
      "≽ bleibt die primitive schwache Praeferenzrelation. Es wird kein neues Symbol fuer rational eingefuehrt.",
      "Die Klassifikation arbeitet mit zwei booleschen Ergebnissen: vollstaendig ja/nein und transitiv ja/nein. Rational ist nur ja/ja.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-rational-concept-build",
    kind: "concept-build",
    title: "Klassifikationsalgorithmus",
    body: [
      "1. Domain und Relation identifizieren. 2. Vollstaendigkeit ueber alle erforderlichen Paare testen. 3. Jedes unvergleichbare Paar notieren.",
      "4. Transitivitaet ueber alle relevanten Ketten testen. 5. Jede verletzende Kette notieren. 6. Beide Ergebnisse kombinieren. 7. Rational oder nicht rational sagen. 8. Die Antwort mit Evidenz begruenden.",
      "Springe nicht direkt zum Rationalitaetslabel. Die Note steckt in der Evidenz: welches Paar fehlt, welche Kette bricht, oder warum beides bestanden ist.",
    ],
    sourceReferenceIds,
    objectiveIds,
  },
  {
    id: "pref-rational-reasoning",
    kind: "reasoning",
    title: "Full-Credit-Antwortstruktur",
    body: [
      "Die Relation ist [vollstaendig/nicht vollstaendig], weil ... Sie ist [transitiv/nicht transitiv], weil ... Damit ist sie [rational/nicht rational], da eine rationale Praeferenzrelation vollstaendig und transitiv sein muss.",
      "Diese Struktur verhindert zwei typische Fehler: eine Eigenschaft als ausreichend behandeln und eine negative Klassifikation ohne konkreten Beleg behaupten.",
    ],
    sourceReferenceIds,
    objectiveIds,
  },
  {
    id: "pref-rational-connections",
    kind: "connections",
    title: "Verbindungen zu Nachbarthemen",
    body: [
      "Schwache Praeferenz liefert die Relation, Vollstaendigkeit prueft Paarabdeckung, Transitivitaet prueft Ketten, und Rationalitaet kombiniert beide Axiome.",
      "Strikte Praeferenz und Indifferenz bleiben abgeleitete Relationen. Sie koennen helfen, Vergleichsinformationen zu lesen, ersetzen aber nicht die beiden Rationalitaetschecks.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-rational-example-01",
    kind: "worked-example",
    title: "Beispiel 1: Vollstaendig und transitiv",
    body: ["Der Basiskandidat fuer Rationalitaet."],
    sourceReferenceIds,
    objectiveIds,
    level: "foundational",
    problem:
      "Domain {x,y,z}. Jede geordnete schwache Richtung zwischen den Alternativen ist enthalten. Klassifiziere die Relation.",
    testedConcept: "Rationalitaet als bestandene Doppelpruefung",
    solutionSteps: [
      "Vollstaendigkeit: Jedes Paar hat mindestens eine Richtung; sogar beide Richtungen sind enthalten.",
      "Transitivitaet: Jede Kette hat ihren Endpunkt, weil jeder geordnete Vergleich vorhanden ist.",
      "Kombination: Vollstaendig ja, transitiv ja.",
      "Formaler Schluss: Die Relation ist rational.",
    ],
    reasoning:
      "Die Definition verlangt beide Eigenschaften, und beide sind hier erfuellt.",
    interpretation:
      "Mutualitaet ist kein Widerspruch; sie kann Indifferenz ausdruecken.",
    commonWrongApproach:
      "Die vielen beidseitigen Vergleiche als Inkonsistenz behandeln.",
  },
  {
    id: "pref-rational-example-02",
    kind: "worked-example",
    title: "Beispiel 2: Vollstaendig, aber zyklisch",
    body: ["Dieser Fall trennt Rationalitaet von Paarabdeckung."],
    sourceReferenceIds,
    objectiveIds,
    level: "foundational",
    problem:
      "Domain {x,y,z}. Genau x ≽ y, y ≽ z und z ≽ x gelten zwischen verschiedenen Alternativen. Ist die Relation rational?",
    testedConcept: "Complete but not transitive",
    solutionSteps: [
      "Vollstaendigkeit: Jedes Paar {x,y}, {y,z}, {x,z} hat eine Richtung.",
      "Transitivitaet: x ≽ y und y ≽ z verlangen x ≽ z.",
      "x ≽ z fehlt, weil fuer dieses Paar nur z ≽ x angegeben ist.",
      "Kombination: Vollstaendig ja, transitiv nein.",
      "Formaler Schluss: Die Relation ist nicht rational.",
    ],
    reasoning:
      "Eine rationale Relation muss beide Axiome erfuellen; hier scheitert Transitivitaet.",
    interpretation:
      "Der Zyklus ist relevant, weil er eine konkrete Kette bricht.",
    commonWrongApproach: "Vollstaendigkeit allein als Rationalitaet werten.",
  },
  {
    id: "pref-rational-example-03",
    kind: "worked-example",
    title: "Beispiel 3: Transitiv, aber unvollstaendig",
    body: ["Keine Kettenverletzung ist noch kein Rationalitaetsbeweis."],
    sourceReferenceIds,
    objectiveIds,
    level: "foundational",
    problem:
      "Domain {x,y,z}. Alle reflexiven Vergleiche und x ≽ y gelten; keine Vergleiche mit z sind angegeben. Klassifiziere.",
    testedConcept: "Transitive but incomplete",
    solutionSteps: [
      "Vollstaendigkeit: {x,z} und {y,z} haben keine schwache Richtung.",
      "Transitivitaet: Die vorhandenen Ketten erzeugen nur x ≽ y oder reflexive Endpunkte, die vorhanden sind.",
      "Kombination: Vollstaendig nein, transitiv ja.",
      "Formaler Schluss: Die Relation ist nicht rational.",
    ],
    reasoning:
      "Rationalitaet scheitert bereits an der fehlenden Paarabdeckung.",
    interpretation:
      "Transitivitaet kann in einer spaerlichen Relation bestehen.",
    commonWrongApproach:
      "Keine sichtbare Kettenverletzung mit Rationalitaet verwechseln.",
  },
  {
    id: "pref-rational-example-04",
    kind: "worked-example",
    title: "Beispiel 4: Beide Eigenschaften scheitern",
    body: ["Manchmal ist mehr als ein Fehler sichtbar."],
    sourceReferenceIds,
    objectiveIds,
    level: "intermediate",
    problem:
      "Domain {x,y,z}. Die nicht-reflexiven Vergleiche sind x ≽ y und y ≽ z. Klassifiziere.",
    testedConcept: "Neither complete nor transitive",
    solutionSteps: [
      "Vollstaendigkeit: Fuer {x,z} ist keine Richtung angegeben.",
      "Transitivitaet: x ≽ y und y ≽ z verlangen x ≽ z.",
      "x ≽ z fehlt.",
      "Kombination: Vollstaendig nein, transitiv nein.",
      "Formaler Schluss: Nicht rational aus zwei Gruenden.",
    ],
    reasoning:
      "Ein fehlendes Paar und eine offene Kette sind unterschiedliche Belege.",
    interpretation:
      "Eine gute Antwort benennt beide Fehler, statt nur nicht rational zu sagen.",
    commonWrongApproach:
      "Nach dem ersten Fehler die zweite Eigenschaft ignorieren.",
  },
  {
    id: "pref-rational-example-05",
    kind: "worked-example",
    title: "Beispiel 5: Unvollstaendige Evidenz",
    body: ["Nicht jede Aufgabeninformation erlaubt sofort ein finales Urteil."],
    sourceReferenceIds,
    objectiveIds,
    level: "intermediate",
    problem:
      "Eine Aufgabe sagt nur: x ≽ y und y ≽ z wurden beobachtet. Sie sagt nicht, ob die Liste erschoepfend ist. Darfst du die Relation als nicht rational klassifizieren?",
    testedConcept: "Evidenzgrenze",
    solutionSteps: [
      "Vollstaendigkeit: Ohne Domain und erschoepfende Relation ist der Paarcheck nicht abgeschlossen.",
      "Transitivitaet: Ohne Aussage ueber x ≽ z darfst du den Endpunkt nicht als fehlend behandeln.",
      "Kombination: Kein gesichertes Rationalitaetsurteil aus dieser Information.",
      "Formaler Schluss: Fordere die Domain und die vollstaendige Relation an.",
    ],
    reasoning:
      "Fehlende Aufgabeninformation ist nicht dasselbe wie ein falscher Vergleich.",
    interpretation:
      "Klausuraufgaben markieren typischerweise, ob eine Liste genau oder erschoepfend ist.",
    commonWrongApproach:
      "Aus nicht erwaehnt automatisch nicht vorhanden machen.",
  },
  {
    id: "pref-rational-example-06",
    kind: "worked-example",
    title: "Beispiel 6: Relationstabelle lesen",
    body: ["Tabellen pruefst du mit derselben Reihenfolge."],
    sourceReferenceIds,
    objectiveIds,
    level: "intermediate",
    problem:
      "Eine Tabelle auf {a,b,c} hat Ja fuer a≽b, b≽a, b≽c, c≽b, a≽c und c≽a. Klassifiziere.",
    testedConcept: "Relation table synthesis",
    solutionSteps: [
      "Vollstaendigkeit: Jedes Paar hat mindestens eine Richtung; sogar beide.",
      "Transitivitaet: Jeder moegliche Endpunkt ist vorhanden, weil alle Richtungen vorhanden sind.",
      "Kombination: Vollstaendig ja, transitiv ja.",
      "Formaler Schluss: Rational.",
    ],
    reasoning: "Die Tabellenform aendert den Algorithmus nicht.",
    interpretation:
      "Beidseitigkeit in jedem Paar bedeutet hier nicht Chaos, sondern maximale Vergleichsabdeckung.",
    commonWrongApproach:
      "Die Tabelle nur diagonal oder nur zeilenweise ueberfliegen.",
  },
  {
    id: "pref-rational-example-07",
    kind: "worked-example",
    title: "Beispiel 7: Kompakte formale Relation",
    body: ["Formale Mengenangaben brauchen denselben zweistufigen Check."],
    sourceReferenceIds,
    objectiveIds,
    level: "intermediate",
    problem:
      "Auf X={x,y,z} sei R={(x,x),(y,y),(z,z),(x,y),(x,z),(y,z)}. Ist R rational?",
    testedConcept: "Compact formal relation",
    solutionSteps: [
      "Vollstaendigkeit: {x,y} hat xRy, {x,z} hat xRz, {y,z} hat yRz.",
      "Transitivitaet: xRy und yRz verlangen xRz, vorhanden; reflexive Ketten schliessen ebenfalls.",
      "Kombination: Vollstaendig ja, transitiv ja.",
      "Formaler Schluss: R ist rational.",
    ],
    reasoning:
      "Diese Relation ordnet x mindestens so gut wie y und y mindestens so gut wie z, mit geschlossenem Endpunkt xRz.",
    interpretation: "Kompakte Notation spart Platz, nicht Begründung.",
    commonWrongApproach:
      "R als unvollstaendig lesen, weil Rueckrichtungen fehlen.",
  },
  {
    id: "pref-rational-example-08",
    kind: "worked-example",
    title: "Beispiel 8: Strikte Praeferenz vor Klassifikation lesen",
    body: [
      "Manchmal musst du abgeleitete Information erst in schwache Vergleiche uebersetzen.",
    ],
    sourceReferenceIds,
    objectiveIds,
    level: "intermediate",
    problem:
      "Gegeben sind x ≻ y, y ∼ z und x ≽ z; die Liste ist erschoepfend mit den daraus folgenden schwachen Vergleichen. Welche Kette ist fuer Rationalitaet zentral?",
    testedConcept: "Interleaving with derived relations",
    solutionSteps: [
      "x ≻ y liefert x ≽ y und nicht y ≽ x.",
      "y ∼ z liefert y ≽ z und z ≽ y.",
      "Fuer Transitivitaet ist x ≽ y und y ≽ z zentral; der Endpunkt x ≽ z ist gegeben.",
      "Vollstaendigkeit muss danach paarweise separat gelesen werden.",
    ],
    reasoning:
      "Abgeleitete Relationen helfen beim Lesen, aber Rationalitaet bleibt ein Check der schwachen Relation.",
    interpretation:
      "Diese Aufgabe ist eine Bruecke, keine neue Definition von Rationalitaet.",
    commonWrongApproach:
      "Mit ≻ und ∼ direkt eine neue Rationalitaetsregel erfinden.",
  },
  {
    id: "pref-rational-example-09",
    kind: "worked-example",
    title: "Klausurbeispiel 1: Rationale Relation konstruieren",
    body: ["Konstruktion zeigt aktive Beherrschung."],
    sourceReferenceIds,
    objectiveIds,
    level: "exam-style",
    problem:
      "Konstruiere auf {x,y,z} eine rationale Relation mit nicht lauter Indifferenz.",
    testedConcept: "Construct a rational relation",
    solutionSteps: [
      "Waehle eine Ordnung: x ≽ y ≽ z.",
      "Fuer Vollstaendigkeit nimm mindestens x ≽ y, y ≽ z und x ≽ z sowie reflexive Vergleiche auf.",
      "Fuer Transitivitaet ist x ≽ z der wichtige Kettenendpunkt.",
      "Rueckrichtungen sind nicht erforderlich.",
      "Formaler Schluss: Die Relation ist vollstaendig und transitiv, also rational.",
    ],
    reasoning:
      "Eine einfache Rangordnung reicht, solange Paarabdeckung und Kettenabschluss stimmen.",
    interpretation:
      "Rationalitaet verlangt keine Indifferenz zwischen allen Alternativen.",
    commonWrongApproach: "Nur x ≽ y und y ≽ z nennen und x ≽ z vergessen.",
  },
  {
    id: "pref-rational-example-10",
    kind: "worked-example",
    title: "Klausurbeispiel 2: Genau eine Bedingung scheitert",
    body: ["Isoliere den Fehler bewusst."],
    sourceReferenceIds,
    objectiveIds,
    level: "exam-style",
    problem:
      "Konstruiere eine nicht rationale Relation, die vollstaendig ist und genau an Transitivitaet scheitert.",
    testedConcept: "Construct one failed condition",
    solutionSteps: [
      "Nutze {x,y,z} und decke jedes Paar ab: x ≽ y, y ≽ z, z ≽ x.",
      "Vollstaendigkeit haelt, weil jedes Paar eine Richtung hat.",
      "Transitivitaet scheitert, weil x ≽ y und y ≽ z den fehlenden Endpunkt x ≽ z verlangen.",
      "Formaler Schluss: Nicht rational genau wegen Transitivitaet.",
    ],
    reasoning:
      "Der Dreierzyklus ist das sauberste Beispiel fuer complete but not transitive.",
    interpretation:
      "Die Konstruktion widerlegt die Aussage, Vollstaendigkeit allein genuege.",
    commonWrongApproach:
      "Ein Beispiel bauen, das auch unvollstaendig ist, und damit die Zielbedingung verfehlen.",
  },
  {
    id: "pref-rational-example-11",
    kind: "worked-example",
    title: "Klausurbeispiel 3: Falsche Studierendenloesung korrigieren",
    body: [
      "Fehlerdiagnose prueft, ob deine Schlussfolgerung aus Evidenz folgt.",
    ],
    sourceReferenceIds,
    objectiveIds,
    level: "exam-style",
    problem:
      "Ein Student schreibt: Die Relation ist rational, weil alle Alternativen irgendwo in der Liste vorkommen. Die Liste ist x ≽ y, y ≽ z, x ≽ z. Korrigiere.",
    testedConcept: "Repair invalid rationality conclusion",
    solutionSteps: [
      "Vollstaendigkeit: Dass alle Alternativen vorkommen, reicht nicht; pruefe Paare.",
      "Bei {x,y}, {y,z} und {x,z} ist jeweils eine Richtung vorhanden, also vollstaendig.",
      "Transitivitaet: x ≽ y und y ≽ z verlangen x ≽ z; vorhanden.",
      "Die Schlussfolgerung rational kann hier stimmen, aber die Begruendung ist unzureichend.",
      "Reparatur: Beide Axiome separat belegen, dann Rationalitaet folgern.",
    ],
    reasoning:
      "Eine richtige Endklassifikation kann mit falscher oder unvollstaendiger Begruendung Punkte verlieren.",
    interpretation:
      "Klausurantworten werden an der Definition und Evidenz gemessen.",
    commonWrongApproach:
      "Nur das Endergebnis bewerten und die defekte Begruendung uebersehen.",
  },
  {
    id: "pref-rational-guided-a",
    kind: "guided-practice",
    title: "Gefuehrte Aufgabe A: Aus zwei Property-Ergebnissen klassifizieren",
    body: ["Starte mit der Konjunktion."],
    sourceReferenceIds,
    objectiveIds,
    prompt:
      "Eine Relation ist vollstaendig, aber nicht transitiv. Ist sie rational?",
    hints: [
      {
        id: "rga-h1",
        label: "Konzept-Hinweis",
        body: "Rationalitaet ist eine Und-Bedingung.",
      },
      {
        id: "rga-h2",
        label: "Struktur-Hinweis",
        body: "Schreibe beide Property-Ergebnisse nebeneinander.",
      },
      {
        id: "rga-h3",
        label: "Naechster Schritt",
        body: "Pruefe, ob beide Spalten Yes sagen.",
      },
    ],
    fullExplanation:
      "Nicht rational. Vollstaendigkeit ist erfuellt, aber Transitivitaet fehlt; eine rationale Praeferenzrelation muss beide Eigenschaften erfuellen.",
  },
  {
    id: "pref-rational-guided-b",
    kind: "guided-practice",
    title: "Gefuehrte Aufgabe B: Gescheiterte Bedingung finden",
    body: ["Jetzt arbeitest du wieder aus einer Relation heraus."],
    sourceReferenceIds,
    objectiveIds,
    prompt:
      "Auf {x,y,z} gelten x ≽ y, y ≽ z und z ≽ x. Welche Bedingung scheitert?",
    hints: [
      {
        id: "rgb-h1",
        label: "Konzept-Hinweis",
        body: "Pruefe erst Paarabdeckung, dann Kettenabschluss.",
      },
      {
        id: "rgb-h2",
        label: "Struktur-Hinweis",
        body: "{x,y}, {y,z} und {x,z} haben jeweils eine Richtung.",
      },
      {
        id: "rgb-h3",
        label: "Naechster Schritt",
        body: "Nutze die Kette x ≽ y und y ≽ z.",
      },
    ],
    fullExplanation:
      "Vollstaendigkeit haelt, aber Transitivitaet scheitert: x ≽ y und y ≽ z verlangen x ≽ z, doch fuer {x,z} ist nur z ≽ x angegeben. Daher nicht rational.",
  },
  {
    id: "pref-rational-guided-c",
    kind: "guided-practice",
    title: "Gefuehrte Aufgabe C: Proof-Struktur vervollstaendigen",
    body: ["Trainiere die volle Antwortform."],
    sourceReferenceIds,
    objectiveIds,
    prompt:
      "Ergaenze: Die Relation ist nicht vollstaendig, weil ... Sie ist transitiv, weil ... Damit ist sie ...",
    hints: [
      {
        id: "rgc-h1",
        label: "Konzept-Hinweis",
        body: "Ein unvergleichbares Paar widerlegt Vollstaendigkeit.",
      },
      {
        id: "rgc-h2",
        label: "Struktur-Hinweis",
        body: "Eine transitive Relation kann trotzdem nicht rational sein.",
      },
      {
        id: "rgc-h3",
        label: "Naechster Schritt",
        body: "Setze am Ende die Und-Bedingung ein.",
      },
    ],
    fullExplanation:
      "Beispielform: Die Relation ist nicht vollstaendig, weil fuer {y,z} weder y ≽ z noch z ≽ y gilt. Sie ist transitiv, weil jede vorhandene Kette ihren Endpunkt hat. Damit ist sie nicht rational, da Rationalitaet Vollstaendigkeit und Transitivitaet verlangt.",
  },
  {
    id: "pref-rational-guided-d",
    kind: "guided-practice",
    title: "Gefuehrte Aufgabe D: Spezifischen Fall konstruieren",
    body: [
      "Konstruktion zwingt dich, beide Eigenschaften getrennt zu kontrollieren.",
    ],
    sourceReferenceIds,
    objectiveIds,
    prompt:
      "Konstruiere eine transitive, aber unvollstaendige Relation auf {x,y,z}.",
    hints: [
      {
        id: "rgd-h1",
        label: "Konzept-Hinweis",
        body: "Lass ein Paar mit z bewusst unvergleichbar.",
      },
      {
        id: "rgd-h2",
        label: "Struktur-Hinweis",
        body: "Nimm alle reflexiven Vergleiche und nur x ≽ y.",
      },
      {
        id: "rgd-h3",
        label: "Naechster Schritt",
        body: "Pruefe, ob irgendeine vorhandene Kette einen Vergleich mit z erzwingt.",
      },
    ],
    fullExplanation:
      "Alle reflexiven Vergleiche plus x ≽ y ergeben eine unvollstaendige Relation, weil z mit x und y unvergleichbar bleibt. Die vorhandenen Ketten schliessen dennoch; damit ist die Relation transitiv, aber nicht rational.",
  },
  {
    id: "pref-rational-guided-e",
    kind: "guided-practice",
    title: "Gefuehrte Aufgabe E: Ungueltigen Schluss reparieren",
    body: ["Diese Form kommt oft als Multiple-Choice-Falle vor."],
    sourceReferenceIds,
    objectiveIds,
    prompt:
      "Korrigiere: Die Relation ist vollstaendig, daher ist sie rational.",
    hints: [
      {
        id: "rge-h1",
        label: "Konzept-Hinweis",
        body: "Eine Eigenschaft allein reicht nicht.",
      },
      {
        id: "rge-h2",
        label: "Struktur-Hinweis",
        body: "Frage: Was wurde ueber Transitivitaet gezeigt?",
      },
      {
        id: "rge-h3",
        label: "Naechster Schritt",
        body: "Formuliere eine reparierte Schlussregel.",
      },
    ],
    fullExplanation:
      "Korrektur: Vollstaendigkeit ist nur eine notwendige Bedingung. Vor dem Rationalitaetslabel muss auch Transitivitaet geprueft werden. Erst vollstaendig und transitiv zusammen implizieren rational.",
  },
  {
    id: "pref-rational-mis-01",
    kind: "misconception",
    title: "Denkfehler: Vollstaendig bedeutet rational",
    body: [
      "Klausuren nutzen diesen Fehler, weil Vollstaendigkeit zuerst gelernt wurde.",
    ],
    sourceReferenceIds,
    objectiveIds,
    whyPlausible: "Paarabdeckung wirkt bereits wie eine vollstaendige Ordnung.",
    correction:
      "Falsch: Transitivitaet ist weiterhin erforderlich. Exam exploitation: Eine vollstaendige Dreierzyklus-Relation ist nicht rational.",
  },
  {
    id: "pref-rational-mis-02",
    kind: "misconception",
    title: "Denkfehler: Transitiv bedeutet rational",
    body: ["Konsistenz klingt nach Rationalitaet, reicht aber nicht."],
    sourceReferenceIds,
    objectiveIds,
    whyPlausible: "Transitivitaet klingt wie der gesamte Konsistenzbegriff.",
    correction:
      "Falsch: Ohne Vergleichbarkeit aller Paare fehlt Vollstaendigkeit. Exam exploitation: Eine spaerliche transitive Relation kann unvollstaendig sein.",
  },
  {
    id: "pref-rational-mis-03",
    kind: "misconception",
    title: "Denkfehler: Meistens reicht",
    body: ["Formale Eigenschaften sind universal im angegebenen Bereich."],
    sourceReferenceIds,
    objectiveIds,
    whyPlausible:
      "Bei vielen bestandenen Checks fuehlt sich der eine Fehler klein an.",
    correction:
      "Falsch: Ein fehlendes Paar oder eine verletzte Kette reicht. Exam exploitation: Aufgaben verstecken genau einen Bruch.",
  },
  {
    id: "pref-rational-mis-04",
    kind: "misconception",
    title: "Denkfehler: Kein offensichtlicher Zyklus bedeutet transitiv",
    body: ["Transitivitaet ist mehr als Zyklensuche mit dem Auge."],
    sourceReferenceIds,
    objectiveIds,
    whyPlausible: "Zyklen sind visuell auffaellig.",
    correction:
      "Falsch: Alle relevanten Ketten muessen geprueft werden. Exam exploitation: Eine offene Kette ohne schoenes Kreisbild widerlegt Transitivitaet.",
  },
  {
    id: "pref-rational-mis-05",
    kind: "misconception",
    title: "Denkfehler: Fehlender Vergleich bedeutet Indifferenz",
    body: ["Inkomparabilitaet und Indifferenz werden leicht verwechselt."],
    sourceReferenceIds,
    objectiveIds,
    whyPlausible: "Beides wirkt wie keine strikte Entscheidung.",
    correction:
      "Falsch: Indifferenz verlangt beide schwachen Richtungen; ein fehlendes Paar hat keine. Exam exploitation: Fehlende Richtungen widerlegen Vollstaendigkeit.",
  },
  {
    id: "pref-rational-mis-06",
    kind: "misconception",
    title: "Denkfehler: Rational bedeutet optimal",
    body: ["Optimierung ist ein spaeterer Modellschritt."],
    sourceReferenceIds,
    objectiveIds,
    whyPlausible: "Alltagssprache verbindet rational mit cleverem Entscheiden.",
    correction:
      "Falsch: Hier bedeutet rational nur vollstaendig und transitiv. Exam exploitation: Aufgaben fragen nach formaler Relation, nicht nach Nutzenmaximum.",
  },
  {
    id: "pref-rational-mis-07",
    kind: "misconception",
    title: "Denkfehler: Ungewoehnliche Praeferenz ist automatisch irrational",
    body: ["Der Inhalt der Praeferenz ist nicht der formale Check."],
    sourceReferenceIds,
    objectiveIds,
    whyPlausible: "Ungewohnte Rankings wirken alltagssprachlich irrational.",
    correction:
      "Falsch: Eine seltsame Reihenfolge kann vollstaendig und transitiv sein. Exam exploitation: Moralische oder psychologische Deutung ablenken lassen.",
  },
  {
    id: "pref-rational-exam-01",
    kind: "exam-thinking",
    title: "Klausurdenken: Definition Task",
    body: ["Hier wird die exakte Zwei-Teile-Definition getestet."],
    sourceReferenceIds,
    objectiveIds,
    taskFamilyId: "pref-exam-rationality-definition",
    testedConcept: "Rationality definition",
    examinerReasoning: [
      "Ideal: vollstaendig und transitiv nennen.",
      "Full credit: beide Teildefinitionen kurz richtig angeben.",
      "Wrong answer: rational als intelligent oder optimal beschreiben.",
      "Effizient: Rationalitaet = Vollstaendigkeit AND Transitivitaet.",
    ],
  },
  {
    id: "pref-rational-exam-02",
    kind: "exam-thinking",
    title: "Klausurdenken: Property Combination",
    body: ["Hier wird Konjunktion getestet."],
    sourceReferenceIds,
    objectiveIds,
    taskFamilyId: "pref-exam-rationality-combination",
    testedConcept: "Four property combinations",
    examinerReasoning: [
      "Ideal: Matrix im Kopf anwenden.",
      "Full credit: nur yes/yes als rational einordnen.",
      "Wrong answer: eine Eigenschaft als hinreichend behandeln.",
      "Effizient: Sobald eine Spalte No ist, ist nicht rational.",
    ],
  },
  {
    id: "pref-rational-exam-03",
    kind: "exam-thinking",
    title: "Klausurdenken: Full Relation Classification",
    body: ["Hier zaehlt systematische Evidenz."],
    sourceReferenceIds,
    objectiveIds,
    taskFamilyId: "pref-exam-classify-relation",
    testedConcept: "Completeness plus transitivity analysis",
    examinerReasoning: [
      "Ideal: Domain, Paarcheck, Kettencheck, Kombination.",
      "Full credit: fehlendes Paar oder verletzende Kette konkret nennen.",
      "Wrong answer: direkt ein Rationalitaetslabel setzen.",
      "Effizient: erst Paarliste, dann Kettenliste.",
    ],
  },
  {
    id: "pref-rational-exam-04",
    kind: "exam-thinking",
    title: "Klausurdenken: Counterexample Construction",
    body: ["Hier prueft die Aufgabe, ob du eine Eigenschaft isolieren kannst."],
    sourceReferenceIds,
    objectiveIds,
    taskFamilyId: "pref-exam-rationality-counterexample",
    testedConcept: "Construct exact failure",
    examinerReasoning: [
      "Ideal: Zielkombination vor dem Bauen festlegen.",
      "Full credit: zeigen, welche Eigenschaft haelt und welche scheitert.",
      "Wrong answer: Relation bauen, die an beiden Bedingungen scheitert.",
      "Effizient: Dreierzyklus fuer complete but not transitive; spaerliche Relation fuer transitive but incomplete.",
    ],
  },
  {
    id: "pref-rational-exam-05",
    kind: "exam-thinking",
    title: "Klausurdenken: Proof-style Justification",
    body: ["Hier zaehlt, ob der Schluss aus Definitionen folgt."],
    sourceReferenceIds,
    objectiveIds,
    taskFamilyId: "pref-exam-rationality-proof",
    testedConcept: "Formal conclusion",
    examinerReasoning: [
      "Ideal: beide Axiome mit Evidenz nennen und erst dann rational/nicht rational folgern.",
      "Full credit: Konjunktion explizit machen.",
      "Wrong answer: moralische oder psychologische Begruendung geben.",
      "Effizient: Full-credit-Antwortstruktur verwenden.",
    ],
  },
  {
    id: "pref-rational-exam-06",
    kind: "exam-thinking",
    title: "Klausurdenken: Multiple-Choice-Fallen",
    body: ["Antwortoptionen testen meist eine Abkuerzung."],
    sourceReferenceIds,
    objectiveIds,
    taskFamilyId: "pref-exam-rationality-traps",
    testedConcept: "Terminology traps",
    examinerReasoning: [
      "Ideal: Jede Option einer Definition oder einem Axiom zuordnen.",
      "Full credit: Optionen mit nur einer Eigenschaft ablehnen.",
      "Wrong answer: keine sichtbare Kette als Transitivitaetsbeweis lesen.",
      "Effizient: Suche nach Woertern wie daher rational, obwohl nur ein Check gezeigt wurde.",
    ],
  },
  {
    id: "pref-rational-active-recall",
    kind: "active-recall",
    title: "Active Recall",
    body: ["Beantworte ohne Nachsehen und ohne Multiple Choice."],
    sourceReferenceIds,
    objectiveIds,
    prompts: [
      "Definiere eine rationale Praeferenzrelation.",
      "Warum sind beide Eigenschaften erforderlich?",
      "Kann eine Relation vollstaendig, aber nicht rational sein?",
      "Kann eine Relation transitiv, aber nicht rational sein?",
      "Konstruiere ein Beispiel fuer jede Property-Kombination.",
      "Was ist der schnellste Weg, Rationalitaet zu widerlegen?",
      "Warum ist eine ungewoehnliche Praeferenz nicht automatisch irrational?",
      "Erklaere den Unterschied zwischen Indifferenz und Inkomparabilitaet.",
      "Gib eine Full-Credit-Klassifikationsantwort aus dem Gedaechtnis.",
      "Erklaere das Konzept einer zwoelfjaehrigen Person ohne das Wort rational.",
    ],
  },
  {
    id: "pref-rational-feynman",
    kind: "feynman-test",
    title: "Feynman-Test",
    body: ["Diese Fragen decken oberflaechliche Synthese auf."],
    sourceReferenceIds,
    objectiveIds,
    prompts: [
      "Warum scheitert Vollstaendigkeit allein?",
      "Warum scheitert Transitivitaet allein?",
      "Warum ist Rationalitaet eine Und-Bedingung?",
      "Welche exakte Evidenz widerlegt Rationalitaet?",
      "Kann Rationalitaet aus zwei verschiedenen Gruenden scheitern?",
      "Koennen zwei nicht rationale Relationen ganz verschieden scheitern?",
      "Was wuerde kaputtgehen, wenn die Definition oder statt und verwendete?",
      "Warum kann eine seltsame Praeferenz formal rational sein?",
    ],
  },
  {
    id: "pref-rational-interleaving",
    kind: "interleaving",
    title: "Interleaving",
    body: ["Wechsle bewusst zwischen den Grundlagen."],
    sourceReferenceIds,
    objectiveIds,
    comparisons: [
      "Weak preference: x ≽ y ist der Rohstoff der Checks.",
      "Strict preference: x ≻ y liefert x ≽ y und nicht y ≽ x; daraus folgt kein eigener Rationalitaetscheck.",
      "Indifference: x ∼ y liefert beide schwachen Richtungen und kann Paarabdeckung stuetzen.",
      "Completeness: jedes Paar hat mindestens eine Richtung.",
      "Transitivity: jede vorhandene Kette hat ihren Endpunkt.",
      "Relation A kann unvollstaendig und transitiv sein; Relation B kann vollstaendig und nicht transitiv sein. Beide sind nicht rational, aber aus verschiedenen Gruenden.",
    ],
  },
  {
    id: "pref-rational-cheat-sheet",
    kind: "cheat-sheet",
    title: "Cheat Sheet",
    body: [
      "Nur die Rationalitaetsklassifikation, keine Wiederholung der ganzen Einheit.",
    ],
    sourceReferenceIds,
    objectiveIds,
    entries: [
      {
        term: "Definition",
        description: "Rational = vollstaendig und transitiv.",
      },
      {
        term: "Completeness reminder",
        description: "Fuer jedes Paar x,y: x ≽ y oder y ≽ x.",
      },
      {
        term: "Transitivity reminder",
        description: "Wenn x ≽ y und y ≽ z, dann x ≽ z.",
      },
      {
        term: "Matrix",
        description:
          "Yes/Yes rational; jede andere Kombination nicht rational.",
      },
      {
        term: "Algorithmus",
        description: "Domain, Paarcheck, Kettencheck, Kombination, Schluss.",
      },
      {
        term: "Full-credit Satz",
        description: "Die Relation ist ..., weil ... Damit ist sie ..., da ...",
      },
      {
        term: "Schnellste Widerlegung",
        description: "Ein unvergleichbares Paar oder eine verletzte Kette.",
      },
      {
        term: "Terminologie",
        description:
          "Nicht psychologisch, moralisch, optimal oder realistisch gemeint.",
      },
      {
        term: "Fallen",
        description:
          "Eine Eigenschaft reicht nicht; fehlend ist nicht indifferent; ungewoehnlich ist nicht formal irrational.",
      },
    ],
  },
  {
    id: "pref-rational-mastery",
    kind: "mastery-check",
    title: "Mastery Checklist",
    body: [
      "Diese Punkte sind beobachtbar; Anklicken oder Lesen zaehlt nicht als Beherrschung.",
    ],
    sourceReferenceIds,
    objectiveIds,
    checks: [
      {
        observable: "Definition aus dem Gedaechtnis",
        evidence: "Du sagst vollstaendig und transitiv ohne Zusatzbedeutung.",
      },
      {
        observable: "Notwendigkeit beider Eigenschaften",
        evidence:
          "Du erklaerst, warum jede einzelne Eigenschaft allein scheitern kann.",
      },
      {
        observable: "Vier Kombinationen unterscheiden",
        evidence: "Du konstruierst fuer jede Matrixzeile ein Beispiel.",
      },
      {
        observable: "Unbekannte Relation testen",
        evidence: "Du arbeitest Paarcheck und Kettencheck getrennt ab.",
      },
      {
        observable: "Fehler exakt identifizieren",
        evidence: "Du nennst fehlendes Paar oder verletzende Kette.",
      },
      {
        observable: "Formal schliessen",
        evidence: "Du verwendest die Full-Credit-Antwortstruktur.",
      },
      {
        observable: "Falsche Klassifikation reparieren",
        evidence: "Du erkennst eine nur teilweise begruendete Loesung.",
      },
      {
        observable: "Alltagssprache abgrenzen",
        evidence:
          "Du vermeidest moralische, psychologische und optimale Deutungen.",
      },
      {
        observable: "Unseen exam task",
        evidence: "Du loest eine neue Relation ohne Notizen.",
      },
    ],
  },
  {
    id: "pref-rational-remediation",
    kind: "remediation",
    title: "Wenn es noch hakt",
    body: [
      "Wenn du oft zu schnell rational sagst, zwinge dich zu zwei Zeilen: Vollstaendigkeit: ... Transitivitaet: ... Erst danach kommt das Label.",
      "Wenn du Alltagssprache hineinliest, ersetze rational im Kopf durch vollstaendig-und-transitiv. Das nimmt die psychologische Bedeutung heraus.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-rational-practice-handoff",
    kind: "practice-handoff",
    title: "Praxis-Handoff",
    body: [
      "Wechsle jetzt zur Praxisroute. Die passenden Aufgaben trainieren den Uebergang von getrennten Axiomchecks zur technischen Rationalitaetsklassifikation.",
    ],
    sourceReferenceIds,
    objectiveIds,
    practiceRoute: "/ueben/mikrooekonomik-1/praeferenzrelationen/",
    exerciseIds: ["pref-practice-09", "pref-practice-10", "pref-practice-11"],
    limitations: [
      "pref-practice-09 prueft, dass Vollstaendigkeit allein nicht ausreicht.",
      "pref-practice-10 ist die direkte deterministische Rationalitaetsklassifikation.",
      "pref-practice-11 ist eine Selbstreview-Fehlerdiagnose zu einer ueberstarken Rationalitaetsbehauptung.",
      "Die uebrigen Aufgaben der Route gehoeren zu Vorwissen, Vollstaendigkeit, Transitivitaet oder abgeleiteten Relationen.",
    ],
  },
];
