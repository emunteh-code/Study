import type { LessonBlock } from "../../../learning/model";

const sourceReferenceIds = ["pref-claims", "pref-outline"] as const;
const objectiveIds = [
  "pref-lo-completeness-01",
  "pref-lo-completeness-02",
] as const;

export const preferenceCompletenessLessonBlocks: readonly LessonBlock[] = [
  {
    id: "pref-complete-why",
    kind: "why-exists",
    title: "Warum diese Sitzung existiert",
    body: [
      "Vollständigkeit beantwortet eine sehr begrenzte, aber klausurrelevante Frage: Gibt es für jedes Paar von Alternativen mindestens eine schwache Präferenzrichtung?",
      "Die Sitzung verhindert, dass du Vollständigkeit mit Transitivität, Indifferenz oder psychologischer Sicherheit verwechselst.",
    ],
    sourceReferenceIds,
    objectiveIds,
  },
  {
    id: "pref-complete-unlocks",
    kind: "unlocks",
    title: "Was diese Sitzung freischaltet",
    body: [
      "Nach dieser Sitzung kannst du kleine Relationen systematisch auf fehlende Paarvergleiche prüfen.",
      "Das ist die Voraussetzung dafür, später Transitivität getrennt zu testen und erst danach den technischen Rationalitätsbegriff zu verwenden.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-complete-prerequisites",
    kind: "prerequisites",
    title: "Voraussetzungen",
    body: [
      "Du musst schwache Präferenz als gerichtete Relation lesen können: x ≽ y ist eine andere Aussage als y ≽ x.",
      "Du musst außerdem unterscheiden können, ob eine Richtung gegeben ist, die Gegenrichtung gegeben ist oder beide Richtungen fehlen.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-complete-objectives",
    kind: "objectives",
    title: "Lernziele",
    body: [
      "Check whether every unordered pair in a stated finite domain has at least one weak-preference direction.",
      "Identify the exact missing pair when a relation is not complete without turning that failure into a transitivity claim.",
    ],
    sourceReferenceIds,
    objectiveIds,
  },
  {
    id: "pref-complete-dependency-position",
    kind: "dependency-position",
    title: "Position im Lernpfad",
    body: [
      "Vollständigkeit kommt nach schwacher Präferenz, strikter Präferenz und Indifferenz, weil sie wieder auf der schwachen Relation ≽ arbeitet.",
      "Sie kommt vor Transitivität und Rationalität, weil Rationalität im hier verwendeten technischen Sinn erst aus Vollständigkeit und Transitivität zusammen entsteht.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-complete-big-picture",
    kind: "big-picture",
    title: "Big Picture",
    body: [
      "Eine Präferenzrelation kann viele Vergleiche enthalten oder viele Vergleiche auslassen. Vollständigkeit ist die Anforderung, dass bei keinem Paar völlige Vergleichslosigkeit bleibt.",
      "Die Forderung ist paarweise: Für x und y reicht x ≽ y, y ≽ x oder beides. Es wird nicht verlangt, dass genau eine Richtung gilt.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-complete-intuition",
    kind: "intuition",
    title: "Intuition vor Notation",
    body: [
      "Stell dir eine Prüfliste für alle Paare vor. Für jedes Paar fragst du: Gibt es mindestens einen Pfeil in irgendeine Richtung?",
      "Wenn ein Paar keinen Pfeil hat, ist die Relation unvollständig. Wenn jedes Paar mindestens einen Pfeil hat, ist sie vollständig, auch wenn einige Paare zwei Pfeile haben.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-complete-definition",
    kind: "definition",
    title: "Formale Definition",
    body: [
      "Eine schwache Präferenzrelation ≽ auf einer betrachteten Alternativenmenge ist vollständig, wenn für jedes x und jedes y aus dieser Menge gilt: x ≽ y oder y ≽ x.",
      "Das Oder ist hier nicht exklusiv. Beide Richtungen dürfen gleichzeitig gelten; dann liegt für dieses Paar nach der abgeleiteten Definition Indifferenz vor.",
    ],
    sourceReferenceIds,
    objectiveIds,
  },
  {
    id: "pref-complete-assumptions",
    kind: "assumptions",
    title: "Annahmen und Umfang",
    body: [
      "Die Domain muss feststehen. Ohne die betrachtete Alternativenmenge kannst du nicht wissen, welche Paare geprüft werden müssen.",
      "In den Übungen wird bei endlichen Mengen mit ausdrücklich vollständigen Listen gearbeitet. Wenn eine Liste nicht als vollständig oder erschöpfend gekennzeichnet ist, darfst du fehlende Richtungen nicht automatisch als nicht geltend behandeln.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-complete-symbols",
    kind: "symbols",
    title: "Symbole",
    body: [
      "x, y und z bezeichnen Alternativen oder Güterbündel aus derselben betrachteten Menge.",
      "x ≽ y bedeutet, dass x mindestens so gut wie y eingeordnet wird. Für Vollständigkeit prüfst du je Paar, ob x ≽ y oder y ≽ x vorhanden ist.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-complete-concept-build",
    kind: "concept-build",
    title: "Konzeptaufbau",
    body: [
      "Baue die Prüfung in drei Schritten auf: Domain notieren, ungeordnete Paare bilden, für jedes Paar mindestens eine schwache Richtung suchen.",
      "Bei drei Alternativen x, y, z sind die relevanten unterschiedlichen Paare {x,y}, {x,z} und {y,z}. Reflexive Vergleiche wie x ≽ x lösen die fehlenden Vergleiche zwischen unterschiedlichen Alternativen nicht.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-complete-reasoning",
    kind: "reasoning",
    title: "Begründungsstruktur",
    body: [
      "Eine vollständige Lösung nennt nicht nur das Ergebnis, sondern zeigt, welche Paare geprüft wurden.",
      "Für ein Gegenbeispiel reicht ein einziges Paar ohne Richtung. Für eine positive Vollständigkeitsaussage musst du alle relevanten Paare der angegebenen Domain abdecken.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-complete-connections",
    kind: "connections",
    title: "Verbindungen zu Nachbarthemen",
    body: [
      "Indifferenz kann bei einem Paar auftreten, wenn beide schwachen Richtungen gelten. Das macht Vollständigkeit nicht kaputt.",
      "Transitivität prüft Ketten wie x ≽ y und y ≽ z. Vollständigkeit prüft dagegen nur, ob jedes Paar überhaupt vergleichbar ist.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-complete-example-01",
    kind: "worked-example",
    title: "Beispiel 1: Zwei Alternativen mit einer Richtung",
    body: [
      "Das kleinste nichttriviale Beispiel zeigt, dass eine Richtung genügt.",
    ],
    sourceReferenceIds,
    objectiveIds,
    level: "foundational",
    problem:
      "Domain {x,y}. Die erschöpfende Liste enthält x ≽ y. Ist die Relation vollständig?",
    testedConcept: "Mindestens eine Richtung pro Paar",
    solutionSteps: [
      "Die Domain enthält nur das Paar {x,y}.",
      "Für dieses Paar ist x ≽ y vorhanden.",
      "Mindestens eine Richtung genügt.",
      "Die Relation ist vollständig auf dieser Domain.",
    ],
    reasoning:
      "Die Definition verlangt x ≽ y oder y ≽ x. Das erste Glied der Disjunktion ist erfüllt.",
    interpretation:
      "Vollständigkeit ist keine Forderung nach Gegenseitigkeit oder Indifferenz.",
    commonWrongApproach:
      "Die Relation als unvollständig einstufen, weil y ≽ x fehlt.",
  },
  {
    id: "pref-complete-example-02",
    kind: "worked-example",
    title: "Beispiel 2: Zwei Alternativen ohne Richtung",
    body: ["Ein fehlendes Paar reicht als Gegenbeispiel."],
    sourceReferenceIds,
    objectiveIds,
    level: "foundational",
    problem:
      "Domain {x,y}. Für unterschiedliche Alternativen ist keine schwache Präferenzrichtung angegeben. Ist die Relation vollständig?",
    testedConcept: "Fehlende Vergleichbarkeit",
    solutionSteps: [
      "Die Domain enthält das Paar {x,y}.",
      "Weder x ≽ y noch y ≽ x ist angegeben.",
      "Die Vollständigkeitsbedingung scheitert an diesem Paar.",
      "Die Relation ist nicht vollständig.",
    ],
    reasoning:
      "Für jedes Paar muss mindestens eine der beiden Richtungen gelten. Hier gilt für {x,y} keine.",
    interpretation: "Nicht vergleichbar ist nicht dasselbe wie indifferent.",
    commonWrongApproach:
      "Aus der fehlenden Information eine Indifferenz x ∼ y machen.",
  },
  {
    id: "pref-complete-example-03",
    kind: "worked-example",
    title: "Beispiel 3: Zwei Richtungen sind erlaubt",
    body: ["Beidseitige schwache Präferenz verletzt Vollständigkeit nicht."],
    sourceReferenceIds,
    objectiveIds,
    level: "foundational",
    problem:
      "Domain {x,y}. Die erschöpfende Liste enthält x ≽ y und y ≽ x. Ist die Relation vollständig?",
    testedConcept: "Nicht-exklusives Oder",
    solutionSteps: [
      "Prüfe das Paar {x,y}.",
      "Beide Richtungen sind vorhanden.",
      "Damit ist mindestens eine Richtung vorhanden.",
      "Die Relation ist vollständig; zusätzlich wäre das Paar indifferent.",
    ],
    reasoning:
      "Das Oder der Vollständigkeitsdefinition erlaubt, dass beide Aussagen wahr sind.",
    interpretation: "Vollständigkeit und Indifferenz schließen sich nicht aus.",
    commonWrongApproach: "Fälschlich genau eine Richtung verlangen.",
  },
  {
    id: "pref-complete-example-04",
    kind: "worked-example",
    title: "Beispiel 4: Drei Alternativen vollständig prüfen",
    body: [
      "Bei drei Alternativen musst du drei unterschiedliche Paare prüfen.",
    ],
    sourceReferenceIds,
    objectiveIds,
    level: "intermediate",
    problem:
      "Domain {x,y,z}. Die erschöpfende Liste enthält x ≽ y, x ≽ z und z ≽ y. Ist die Relation vollständig?",
    testedConcept: "Paarliste für drei Alternativen",
    solutionSteps: [
      "Bilde die Paare {x,y}, {x,z} und {y,z}.",
      "Für {x,y} liegt x ≽ y vor.",
      "Für {x,z} liegt x ≽ z vor.",
      "Für {y,z} liegt z ≽ y vor.",
      "Alle Paare haben mindestens eine Richtung; die Relation ist vollständig.",
    ],
    reasoning:
      "Die Richtung muss nicht alphabetisch oder in der Reihenfolge der Domain laufen.",
    interpretation:
      "Eine ungewohnte Richtung wie z ≽ y zählt für das Paar {y,z}.",
    commonWrongApproach:
      "Nur x ≽ y und x ≽ z prüfen und das Paar {y,z} vergessen.",
  },
  {
    id: "pref-complete-example-05",
    kind: "worked-example",
    title:
      "Beispiel 5: Der fehlende Vergleich liegt nicht bei den sichtbaren Symbolen",
    body: ["Dass jede Alternative irgendwo auftaucht, reicht nicht."],
    sourceReferenceIds,
    objectiveIds,
    level: "intermediate",
    problem:
      "Domain {x,y,z}. Die erschöpfende Liste enthält x ≽ y und z ≽ y. Ist die Relation vollständig?",
    testedConcept: "Jede Alternative erscheint ist nicht genug",
    solutionSteps: [
      "Bilde wieder {x,y}, {x,z} und {y,z}.",
      "Für {x,y} liegt x ≽ y vor.",
      "Für {y,z} liegt z ≽ y vor.",
      "Für {x,z} liegt weder x ≽ z noch z ≽ x vor.",
      "Die Relation ist nicht vollständig.",
    ],
    reasoning:
      "Vollständigkeit ist eine Paarbedingung, keine Zählung, ob jedes Symbol einmal vorkommt.",
    interpretation:
      "Das ist genau der Fehlertyp, den die unabhängige Übung pref-practice-06 trainiert.",
    commonWrongApproach:
      "Die Relation als vollständig ansehen, weil x, y und z alle in irgendeinem Vergleich vorkommen.",
  },
  {
    id: "pref-complete-example-06",
    kind: "worked-example",
    title: "Beispiel 6: Reflexive Vergleiche lösen das Paarproblem nicht",
    body: [
      "Reflexive Angaben sind nicht dasselbe wie Vergleiche zwischen unterschiedlichen Alternativen.",
    ],
    sourceReferenceIds,
    objectiveIds,
    level: "intermediate",
    problem:
      "Domain {x,y,z}. Nur x ≽ x, y ≽ y, z ≽ z sowie x ≽ y sind angegeben. Ist die Relation vollständig?",
    testedConcept: "Reflexivität ersetzt keine Paarvergleiche",
    solutionSteps: [
      "Reflexive Vergleiche betreffen {x,x}, {y,y} und {z,z}.",
      "Für {x,y} liegt x ≽ y vor.",
      "Für {x,z} fehlt jede Richtung.",
      "Für {y,z} fehlt jede Richtung.",
      "Die Relation ist nicht vollständig.",
    ],
    reasoning:
      "Die Vollständigkeitsprüfung für unterschiedliche Alternativen bleibt offen, wenn nur Selbstvergleiche gegeben sind.",
    interpretation:
      "Selbstvergleiche können in formalen Relationen wichtig sein, aber sie decken nicht die fehlenden Paare ab.",
    commonWrongApproach:
      "Alle Alternativen wegen x ≽ x, y ≽ y, z ≽ z als abgedeckt betrachten.",
  },
  {
    id: "pref-complete-example-07",
    kind: "worked-example",
    title: "Exam-style Beispiel 1: Vollständigkeit trotz gemischter Richtungen",
    body: [
      "Klausuraufgaben verstecken Vollständigkeit oft in einer unregelmäßigen Liste.",
    ],
    sourceReferenceIds,
    objectiveIds,
    level: "exam-style",
    problem:
      "Domain {a,b,c,d}. Gegeben sind a ≽ b, c ≽ a, d ≽ a, b ≽ c, b ≽ d und d ≽ c. Prüfe Vollständigkeit.",
    testedConcept: "Systematische Paarabdeckung bei vier Alternativen",
    solutionSteps: [
      "Bei vier Alternativen gibt es sechs unterschiedliche Paare.",
      "{a,b}: a ≽ b ist vorhanden.",
      "{a,c}: c ≽ a ist vorhanden.",
      "{a,d}: d ≽ a ist vorhanden.",
      "{b,c}: b ≽ c ist vorhanden.",
      "{b,d}: b ≽ d ist vorhanden.",
      "{c,d}: d ≽ c ist vorhanden.",
      "Alle sechs Paare sind abgedeckt; die Relation ist vollständig.",
    ],
    reasoning:
      "Die Richtung darf pro Paar wechseln. Entscheidend ist nur, dass keine Paarzeile leer bleibt.",
    interpretation:
      "Eine geordnete Tabelle oder Paarliste verhindert, dass du ein Paar übersiehst.",
    commonWrongApproach:
      "Die Liste nach Muster oder Ranking sortieren wollen, bevor die Paarprüfung abgeschlossen ist.",
  },
  {
    id: "pref-complete-example-08",
    kind: "worked-example",
    title: "Exam-style Beispiel 2: Vollständigkeit getrennt von Transitivität",
    body: [
      "Ein fehlender direkter Schluss ist nicht automatisch der richtige Diagnosegrund.",
    ],
    sourceReferenceIds,
    objectiveIds,
    level: "exam-style",
    problem:
      "Domain {x,y,z}. Die erschöpfende Liste enthält x ≽ y und z ≽ y. Eine Lösung sagt: nicht vollständig, weil x ≽ z als Transitivitätsschluss fehlt. Korrigiere die Begründung.",
    testedConcept: "Fehlerdiagnose ohne Axiomvermischung",
    solutionSteps: [
      "Prüfe Vollständigkeit paarweise: {x,y} ist abgedeckt, {y,z} ist abgedeckt.",
      "Für {x,z} fehlen beide Richtungen.",
      "Die Relation ist nicht vollständig.",
      "Die bessere Begründung lautet: weder x ≽ z noch z ≽ x ist vorhanden.",
      "Transitivität ist hier nicht der zuerst nötige Diagnosegrund.",
    ],
    reasoning:
      "Aus x ≽ y und z ≽ y entsteht keine Kette x ≽ y und y ≽ z. Deshalb ist die fehlende x-z-Richtung als Paarlücke zu begründen.",
    interpretation:
      "Die richtige Sprache in der Lösung zeigt, dass du Axiome getrennt prüfen kannst.",
    commonWrongApproach:
      "Jede fehlende Richtung als Transitivitätsverletzung bezeichnen.",
  },
  {
    id: "pref-complete-guided-01",
    kind: "guided-practice",
    title: "Geführte Übung 1: Paarliste aufbauen",
    body: ["Arbeite erst mit der Struktur, dann mit der Schlussfolgerung."],
    sourceReferenceIds,
    objectiveIds,
    prompt:
      "Domain {x,y,z}. Welche drei unterschiedlichen Paare musst du für Vollständigkeit prüfen?",
    hints: [
      {
        id: "conceptual",
        label: "Konzeptueller Hinweis",
        body: "Vollständigkeit fragt nach Paaren, nicht nach einzelnen Symbolen.",
      },
      {
        id: "structural",
        label: "Struktureller Hinweis",
        body: "Bilde alle ungeordneten Paare aus drei Elementen.",
      },
      {
        id: "next-step",
        label: "Expliziter nächster Schritt",
        body: "Starte mit x: {x,y} und {x,z}. Danach bleibt {y,z}.",
      },
    ],
    fullExplanation:
      "Die drei zu prüfenden Paare sind {x,y}, {x,z} und {y,z}. Erst danach suchst du für jedes Paar mindestens eine schwache Präferenzrichtung.",
  },
  {
    id: "pref-complete-guided-02",
    kind: "guided-practice",
    title: "Geführte Übung 2: Fehlendes Paar finden",
    body: ["Nutze die Paarliste, um die Lücke gezielt zu lokalisieren."],
    sourceReferenceIds,
    objectiveIds,
    prompt:
      "Domain {x,y,z}. Die erschöpfende Liste enthält y ≽ x und y ≽ z. Welche Paarlücke verhindert Vollständigkeit?",
    hints: [
      {
        id: "conceptual",
        label: "Konzeptueller Hinweis",
        body: "Eine Alternative darf mehrfach vorkommen und trotzdem kann ein Paar fehlen.",
      },
      {
        id: "structural",
        label: "Struktureller Hinweis",
        body: "Prüfe {x,y}, {x,z} und {y,z} einzeln.",
      },
      {
        id: "next-step",
        label: "Expliziter nächster Schritt",
        body: "{x,y} ist durch y ≽ x abgedeckt und {y,z} durch y ≽ z.",
      },
    ],
    fullExplanation:
      "Für {x,z} ist weder x ≽ z noch z ≽ x angegeben. Die Relation ist deshalb nicht vollständig.",
  },
  {
    id: "pref-complete-guided-03",
    kind: "guided-practice",
    title: "Geführte Übung 3: Diagnose formulieren",
    body: ["Die Formulierung soll die richtige axiomatische Ursache nennen."],
    sourceReferenceIds,
    objectiveIds,
    prompt:
      "Formuliere eine knappe Diagnose für eine Relation, in der genau für {x,z} beide Richtungen fehlen.",
    hints: [
      {
        id: "conceptual",
        label: "Konzeptueller Hinweis",
        body: "Benenne die betroffene Eigenschaft, nicht nur die fehlende Notation.",
      },
      {
        id: "structural",
        label: "Struktureller Hinweis",
        body: "Eine gute Diagnose hat die Form: nicht vollständig, weil ...",
      },
      {
        id: "next-step",
        label: "Expliziter nächster Schritt",
        body: "Setze das fehlende Paar und beide fehlenden Richtungen in den weil-Satz ein.",
      },
    ],
    fullExplanation:
      "Eine passende Diagnose lautet: Die Relation ist nicht vollständig, weil für das Paar {x,z} weder x ≽ z noch z ≽ x gilt.",
  },
  {
    id: "pref-complete-misconception-01",
    kind: "misconception",
    title: "Denkfehler: Jede Alternative erscheint, also vollständig",
    body: [
      "Dieser Fehler ist plausibel, weil Listen schnell wie Abdeckungslisten wirken.",
    ],
    sourceReferenceIds,
    whyPlausible:
      "Wenn x, y und z alle in irgendeinem Vergleich auftauchen, fühlt sich die Domain vollständig behandelt an.",
    correction:
      "Vollständigkeit prüft Paare. Jede Alternative kann vorkommen, obwohl ein Paar wie {x,z} ohne Richtung bleibt.",
  },
  {
    id: "pref-complete-misconception-02",
    kind: "misconception",
    title: "Denkfehler: Genau eine Richtung ist nötig",
    body: [
      "Dieser Fehler entsteht aus der Alltagssprache von klaren Rangordnungen.",
    ],
    sourceReferenceIds,
    whyPlausible:
      "Viele Ranglisten erlauben für zwei verschiedene Plätze nur eine Richtung.",
    correction:
      "Die Vollständigkeitsdefinition verlangt mindestens eine Richtung. Beide Richtungen sind erlaubt und werden über Indifferenz interpretiert.",
  },
  {
    id: "pref-complete-misconception-03",
    kind: "misconception",
    title: "Denkfehler: Fehlende Richtung gleich Transitivitätsfehler",
    body: [
      "Dieser Fehler ist wahrscheinlich, weil beide Axiome mit fehlenden Aussagen arbeiten können.",
    ],
    sourceReferenceIds,
    whyPlausible:
      "Bei Transitivität kann eine fehlende Schlussrichtung tatsächlich ein Problem sein.",
    correction:
      "Für Vollständigkeit reicht die Paarfrage: Fehlen beide Richtungen für ein Paar? Nur Ketten mit zwei passenden Vorbedingungen gehören zur Transitivitätsprüfung.",
  },
  {
    id: "pref-complete-exam-thinking-01",
    kind: "exam-thinking",
    title: "Klausurdenken: Vollständigkeit in Relationstabellen",
    body: [
      "Prüferinnen und Prüfer testen hier meist Systematik, nicht Rechenkunst.",
    ],
    sourceReferenceIds,
    objectiveIds,
    taskFamilyId: "pref-exam-completeness-check",
    testedConcept: "Paarweise Abdeckung der Domain",
    examinerReasoning: [
      "Kann die Lösung die Domain in relevante Paare zerlegen?",
      "Wird mindestens eine Richtung pro Paar gesucht?",
      "Wird das Ergebnis ohne Transitivitäts- oder Rationalitätsübergriff begründet?",
    ],
  },
  {
    id: "pref-complete-exam-thinking-02",
    kind: "exam-thinking",
    title: "Klausurdenken: Fehler in Musterlösungen erkennen",
    body: ["Eine gute Diagnose benennt den kleinsten tragenden Fehler."],
    sourceReferenceIds,
    objectiveIds,
    taskFamilyId: "pref-exam-completeness-diagnosis",
    testedConcept: "Axiomatische Trennung",
    examinerReasoning: [
      "Ist die angegebene Begründung wirklich eine Vollständigkeitsbegründung?",
      "Wird ein fehlendes Paar von einer fehlenden Kettenfolgerung getrennt?",
      "Wird die fehlende Richtung präzise benannt?",
    ],
  },
  {
    id: "pref-complete-active-recall",
    kind: "active-recall",
    title: "Active Recall",
    body: ["Beantworte diese Fragen ohne in die Definition zu schauen."],
    sourceReferenceIds,
    prompts: [
      "Formuliere Vollständigkeit mit den Symbolen x, y und ≽.",
      "Warum reicht x ≽ y für das Paar {x,y} aus?",
      "Warum reicht es nicht, dass jede Alternative irgendwo in der Liste vorkommt?",
      "Welche Paare prüfst du bei der Domain {x,y,z}?",
      "Was ist der Unterschied zwischen nicht vollständig und nicht transitiv?",
    ],
  },
  {
    id: "pref-complete-feynman",
    kind: "feynman-test",
    title: "Feynman-Fragen",
    body: [
      "Erkläre so einfach, dass eine andere Person die Prüfung nachmachen kann.",
    ],
    sourceReferenceIds,
    prompts: [
      "Erkläre Vollständigkeit ohne das Wort Axiom zu verwenden.",
      "Zeichne gedanklich drei Bündel und beschreibe, wann ein Pfeilpaar fehlt.",
      "Erkläre, warum zwei Pfeile zwischen denselben Bündeln kein Problem sind.",
    ],
  },
  {
    id: "pref-complete-interleaving",
    kind: "interleaving",
    title: "Interleaving",
    body: [
      "Wechsle bewusst zwischen Nachbarbegriffen, damit die Grenzen stabil bleiben.",
    ],
    sourceReferenceIds,
    comparisons: [
      "Schwache Präferenz: einzelne gerichtete Aussage; Vollständigkeit: Bedingung über alle Paare.",
      "Indifferenz: beide Richtungen für ein Paar; Vollständigkeit: mindestens eine Richtung für jedes Paar.",
      "Transitivität: Kettenprüfung; Vollständigkeit: Paarabdeckung.",
      "Rationalität: späterer technischer Begriff aus Vollständigkeit plus Transitivität.",
    ],
  },
  {
    id: "pref-complete-cheat-sheet",
    kind: "cheat-sheet",
    title: "Cheat Sheet",
    body: ["Nutze diese Kurzfassung erst nach der vollständigen Herleitung."],
    sourceReferenceIds,
    entries: [
      {
        term: "Definition",
        description: "Für alle x,y gilt x ≽ y oder y ≽ x.",
      },
      {
        term: "Prüfmethode",
        description:
          "Domain festlegen, Paare bilden, mindestens eine Richtung pro Paar suchen.",
      },
      {
        term: "Gegenbeispiel",
        description:
          "Ein Paar ohne beide Richtungen genügt, um Vollständigkeit zu widerlegen.",
      },
      {
        term: "Nicht verwechseln",
        description:
          "Vollständigkeit ist weder Transitivität noch eine Aussage über psychologische Rationalität.",
      },
    ],
  },
  {
    id: "pref-complete-mastery",
    kind: "mastery-check",
    title: "Beobachtbare Beherrschung",
    body: [
      "Diese Kriterien sind Lernnachweise, keine Note und kein Mastery-Score.",
    ],
    sourceReferenceIds,
    objectiveIds,
    checks: [
      {
        observable: "Du listest alle relevanten Paare einer endlichen Domain.",
        evidence: "Deine Lösung zeigt die Paarliste vor dem Ergebnis.",
      },
      {
        observable: "Du findest ein fehlendes Paar präzise.",
        evidence: "Du benennst beide fehlenden Richtungen für dasselbe Paar.",
      },
      {
        observable: "Du trennst Vollständigkeit von Transitivität.",
        evidence:
          "Deine Diagnose verwendet keine Kettensprache, wenn nur ein Paar fehlt.",
      },
    ],
  },
  {
    id: "pref-complete-remediation",
    kind: "remediation",
    title: "Remediation",
    body: [
      "Wenn du ein Paar übersehen hast, schreibe zuerst alle ungeordneten Paare auf, bevor du die Relation anschaust.",
      "Wenn du zwei Richtungen als Fehler behandelst, wiederhole die Definition mit dem nicht-exklusiven Oder.",
      "Wenn du Transitivitätssprache verwendest, markiere die zwei Vorbedingungen einer echten Kette. Ohne passende Kette bleibst du bei der Vollständigkeitsdiagnose.",
    ],
    sourceReferenceIds,
  },
  {
    id: "pref-complete-practice-handoff",
    kind: "practice-handoff",
    title: "Übergang zur unabhängigen Übung",
    body: [
      "Gehe jetzt in die Praxisroute und bearbeite zuerst die Vollständigkeitsaufgaben. Die Übung zählt Bearbeitung, nicht Korrektheit oder Beherrschung.",
      "Die Praxisroute enthält weitere Präferenzthemen. Für diese Sitzung ist vor allem pref-practice-06 direkt einschlägig; pref-practice-05 enthält eine vorgelagerte Relationstabellenprüfung.",
    ],
    sourceReferenceIds,
    objectiveIds,
    practiceRoute: "/ueben/mikrooekonomik-1/praeferenzrelationen/",
    exerciseIds: ["pref-practice-05", "pref-practice-06"],
    limitations: [
      "pref-practice-05 mischt Paarprüfung und Vollständigkeitsklassifikation.",
      "pref-practice-06 prüft die fehlende Paarvergleichsdiagnose direkt.",
      "Transitivität und Rationalität bleiben in dieser Sitzung nur angrenzende Konzepte.",
    ],
  },
];
