import {
  assertValidMikro1PreferenceExercises,
  toStaticMikro1PreferenceExercise,
  type Mikro1PreferenceExercise,
} from "../lib/mikro1-preferences-practice";

const notation = [
  { symbol: "≽" as const, text: "is weakly preferred to" },
  { symbol: "≻" as const, text: "is strictly preferred to" },
  { symbol: "∼" as const, text: "is indifferent to" },
];
const domain = ["x", "y", "z"];
const relationKeys = domain.flatMap((from) =>
  domain.map((to) => `${from}:${to}`),
);

function exhaustiveRelation(holds: string[]) {
  return {
    domain,
    nonReflexiveListing: "exhaustive" as const,
    reflexivePairTreatment: "included-not-listed" as const,
    accessibleDescription:
      "The domain is x, y, and z. All reflexive comparisons hold but are not listed. The displayed non-reflexive comparison list is exhaustive.",
    orderedPairs: domain.flatMap((from) =>
      domain.map((to) => {
        const key = `${from}:${to}`;
        const isReflexive = from === to;
        const status =
          isReflexive || holds.includes(key) ? "holds" : "does-not-hold";

        return {
          from,
          to,
          status,
          display: !isReflexive && status === "holds",
        } as const;
      }),
    ),
  };
}

const yesNoOptions = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
];
const alternatives = domain.map((alternative) => ({
  id: alternative,
  label: alternative,
}));

export const mikro1PreferencesPracticeExercises = [
  {
    id: "pref-practice-01",
    version: 1,
    status: "approved",
    title: "Read a weak comparison",
    interactionType: "structured-short-answer",
    claimIds: ["claim-pref-01", "claim-pref-02"],
    difficulty: "foundational",
    prerequisites: [],
    misconceptionIds: ["mis-pref-01"],
    learnerVisibleContent: {
      prompt: [
        "What does x ≽ y state? State only what follows from this displayed relation.",
      ],
      instructions: [
        "State the meaning of the comparison and separately state what is not established about the reverse comparison.",
      ],
    },
    responseDefinition: {
      responseSummary: "Two short written responses are expected.",
      fields: [
        {
          id: "meaning",
          kind: "textarea",
          label: "What does x ≽ y state?",
          required: true,
        },
        {
          id: "reverse",
          kind: "textarea",
          label: "What does the displayed relation establish about y ≽ x?",
          required: true,
        },
      ],
    },
    evaluationMetadata: {
      acceptedAnswerStructure: [
        "Names weak preference from x to y.",
        "Does not infer or deny the reverse comparison.",
      ],
    },
    feedbackMetadata: {
      misconceptionIds: ["mis-pref-01"],
      conceptualFocus:
        "Weak preference does not rule out the reverse comparison.",
    },
    solutionMetadata: {
      summary:
        "x is weakly preferred to y; the reverse relation is not established.",
      steps: [
        "Read the direction from x to y.",
        "Do not add a condition about y ≽ x.",
      ],
    },
    accessibility: {
      notation,
      responseDescription:
        "Two labelled text areas ask for the meaning and the reverse-comparison conclusion.",
    },
    implementationNotes: ["Self-review only; no exact-string evaluator."],
    audit: {
      provenance: "original",
      sourceVerificationState: "checked",
      reviewStatus: "approved",
      implementationNotes: ["Approved in the independent practice-set review."],
    },
  },
  {
    id: "pref-practice-02",
    version: 1,
    status: "approved",
    title: "Read the derived relations",
    interactionType: "single-choice",
    claimIds: ["claim-pref-02"],
    difficulty: "foundational",
    prerequisites: ["pref-practice-01"],
    misconceptionIds: ["mis-pref-02"],
    learnerVisibleContent: {
      prompt: ["Which statement is correct?"],
      instructions: ["Choose one statement."],
    },
    options: [
      { id: "a", label: "x ≻ y means x ≽ y and y ≽ x." },
      { id: "b", label: "x ∼ y means x ≽ y and y ≽ x." },
      { id: "c", label: "x ∼ y means that neither x ≽ y nor y ≽ x holds." },
      { id: "d", label: "x ≻ y means only that x ≽ y holds." },
    ],
    responseDefinition: {
      responseSummary: "Choose one statement from the four options.",
      fields: [
        {
          id: "answer",
          kind: "radio",
          label: "Which statement is correct?",
          options: [
            { id: "a", label: "x ≻ y means x ≽ y and y ≽ x." },
            { id: "b", label: "x ∼ y means x ≽ y and y ≽ x." },
            {
              id: "c",
              label: "x ∼ y means that neither x ≽ y nor y ≽ x holds.",
            },
            { id: "d", label: "x ≻ y means only that x ≽ y holds." },
          ],
          required: true,
        },
      ],
    },
    evaluationMetadata: {
      correctOptionIds: ["b"],
      acceptedAnswerStructure: ["One selected option."],
    },
    feedbackMetadata: {
      misconceptionIds: ["mis-pref-02"],
      conceptualFocus: "Indifference requires both weak-comparison directions.",
      correctExplanation:
        "Indifference requires both weak-comparison directions to hold.",
      incorrectExplanation:
        "This selection may be treating one weak comparison as sufficient. Check whether both directions are required.",
    },
    solutionMetadata: {
      summary:
        "The indifference statement requires both weak-comparison directions.",
      steps: ["Compare each option with the two derived definitions."],
    },
    accessibility: {
      notation,
      responseDescription: "One native radio group contains four statements.",
    },
    implementationNotes: ["Keep option order stable."],
    audit: {
      provenance: "original",
      sourceVerificationState: "checked",
      reviewStatus: "approved",
      implementationNotes: [],
    },
  },
  {
    id: "pref-practice-03",
    version: 1,
    status: "approved",
    title: "Classify a stated pair",
    interactionType: "true-false-with-justification",
    claimIds: ["claim-pref-02"],
    difficulty: "foundational",
    prerequisites: ["pref-practice-01", "pref-practice-02"],
    misconceptionIds: ["mis-pref-01"],
    learnerVisibleContent: {
      prompt: [
        "True or false: if both x ≽ y and y ≽ x hold, then x ≻ y holds.",
      ],
      instructions: [
        "Choose true or false, then justify in one or two sentences.",
      ],
    },
    responseDefinition: {
      responseSummary:
        "A true-or-false selection and a written justification are expected.",
      fields: [
        {
          id: "truth-value",
          kind: "radio",
          label: "Is the statement true or false?",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          required: true,
        },
        {
          id: "justification",
          kind: "textarea",
          label: "Justification",
          required: true,
        },
      ],
    },
    evaluationMetadata: {
      correctOptionIds: ["false"],
      acceptedAnswerStructure: [
        "False",
        "Explains indifference and the reverse condition for strict preference.",
      ],
    },
    feedbackMetadata: {
      misconceptionIds: ["mis-pref-01"],
      conceptualFocus:
        "Mutual weak preference establishes indifference, not strict preference.",
      correctExplanation:
        "Mutual weak preference establishes indifference; strict preference requires the reverse weak comparison not to hold.",
      incorrectExplanation:
        "This selection may be overlooking the reverse weak comparison. Compare the conditions for indifference and strict preference.",
    },
    solutionMetadata: {
      summary:
        "False: both directions establish indifference and contradict strict preference's reverse negation.",
      steps: [
        "Apply the indifference definition.",
        "Compare it with the strict-preference definition.",
      ],
    },
    accessibility: {
      notation,
      responseDescription:
        "A native true-or-false radio group is followed by a labelled text area.",
    },
    implementationNotes: ["Justification remains self-review only."],
    audit: {
      provenance: "original",
      sourceVerificationState: "checked",
      reviewStatus: "approved",
      implementationNotes: [],
    },
  },
  {
    id: "pref-practice-04",
    version: 1,
    status: "approved",
    title: "Match conditions to relations",
    interactionType: "classification",
    claimIds: ["claim-pref-02"],
    difficulty: "foundational",
    prerequisites: ["pref-practice-01", "pref-practice-02", "pref-practice-03"],
    misconceptionIds: ["mis-pref-02"],
    learnerVisibleContent: {
      prompt: ["Match each condition to the relation it defines."],
      instructions: [
        "Select one relation for each condition. Do not use drag and drop.",
      ],
    },
    responseDefinition: {
      responseSummary: "Three relation classifications are expected.",
      fields: [
        {
          id: "strict",
          kind: "select",
          label: "x ≽ y and not y ≽ x",
          options: [
            { id: "strict", label: "x ≻ y" },
            { id: "indifference", label: "x ∼ y" },
            { id: "weak", label: "x ≽ y" },
          ],
          required: true,
        },
        {
          id: "indifference",
          kind: "select",
          label: "x ≽ y and y ≽ x",
          options: [
            { id: "strict", label: "x ≻ y" },
            { id: "indifference", label: "x ∼ y" },
            { id: "weak", label: "x ≽ y" },
          ],
          required: true,
        },
        {
          id: "weak",
          kind: "select",
          label: "The primitive relation used for pairwise comparison",
          options: [
            { id: "strict", label: "x ≻ y" },
            { id: "indifference", label: "x ∼ y" },
            { id: "weak", label: "x ≽ y" },
          ],
          required: true,
        },
      ],
    },
    evaluationMetadata: {
      classificationMappings: [
        { itemId: "strict", classificationId: "strict" },
        { itemId: "indifference", classificationId: "indifference" },
        { itemId: "weak", classificationId: "weak" },
      ],
      acceptedAnswerStructure: [
        "strict -> strict",
        "indifference -> indifference",
        "weak -> weak",
      ],
    },
    feedbackMetadata: {
      misconceptionIds: ["mis-pref-02"],
      conceptualFocus:
        "Strict preference and indifference are derived from the primitive weak relation.",
      correctExplanation:
        "All three classifications correctly distinguish the derived relations from the primitive weak relation.",
      partialExplanation:
        "Reconsider which condition negates the reverse weak comparison, which includes it, and which relation is primitive.",
      incorrectExplanation:
        "This set may be treating the derived and primitive relations as interchangeable. Compare the role of the reverse weak comparison in each condition.",
    },
    solutionMetadata: {
      summary:
        "The reverse relation is negated for strict preference and included for indifference.",
      steps: [
        "Match the two derived definitions.",
        "Identify weak preference as primitive.",
      ],
    },
    accessibility: {
      notation,
      responseDescription:
        "Three labelled native select controls provide keyboard-safe matching.",
    },
    implementationNotes: ["Do not replace native selects with drag-and-drop."],
    audit: {
      provenance: "original",
      sourceVerificationState: "checked",
      reviewStatus: "approved",
      implementationNotes: [],
    },
  },
  {
    id: "pref-practice-05",
    version: 1,
    status: "approved",
    title: "Check a complete relation",
    interactionType: "relation-table-analysis",
    claimIds: ["claim-pref-03"],
    difficulty: "intermediate",
    prerequisites: [
      "pref-practice-01",
      "pref-practice-02",
      "pref-practice-03",
      "pref-practice-04",
    ],
    misconceptionIds: ["mis-pref-03"],
    learnerVisibleContent: {
      prompt: [
        "The domain is {x, y, z}. The following exhaustive list gives all weak comparisons between distinct alternatives that hold: x ≽ y, y ≽ x, x ≽ z, z ≽ y. All reflexive comparisons are included but omitted from the display.",
        "Is the relation complete over this domain? List the unordered pairs you checked.",
      ],
      instructions: [
        "For each unordered pair, record the available comparison direction or directions, then state whether the relation is complete.",
      ],
    },
    relationData: exhaustiveRelation(["x:y", "y:x", "x:z", "z:y"]),
    responseDefinition: {
      responseSummary:
        "Three pair assessments and one completeness classification are expected.",
      fields: [
        {
          id: "pair-xy",
          kind: "select",
          label:
            "For {x, y}, which comparison direction or directions are present?",
          options: [
            { id: "x-y", label: "x ≽ y" },
            { id: "y-x", label: "y ≽ x" },
            { id: "both", label: "Both directions" },
            { id: "neither", label: "Neither direction" },
          ],
          required: true,
        },
        {
          id: "pair-xz",
          kind: "select",
          label:
            "For {x, z}, which comparison direction or directions are present?",
          options: [
            { id: "x-z", label: "x ≽ z" },
            { id: "z-x", label: "z ≽ x" },
            { id: "both", label: "Both directions" },
            { id: "neither", label: "Neither direction" },
          ],
          required: true,
        },
        {
          id: "pair-yz",
          kind: "select",
          label:
            "For {y, z}, which comparison direction or directions are present?",
          options: [
            { id: "y-z", label: "y ≽ z" },
            { id: "z-y", label: "z ≽ y" },
            { id: "both", label: "Both directions" },
            { id: "neither", label: "Neither direction" },
          ],
          required: true,
        },
        {
          id: "complete",
          kind: "radio",
          label: "Is the relation complete?",
          options: yesNoOptions,
          required: true,
        },
      ],
    },
    evaluationMetadata: {
      acceptedAnswerStructure: [
        "{x,y}: both",
        "{x,z}: x ≽ z",
        "{y,z}: z ≽ y",
        "complete: yes",
      ],
      approvedRelationPairKeys: relationKeys,
    },
    feedbackMetadata: {
      misconceptionIds: ["mis-pref-03"],
      conceptualFocus:
        "Completeness needs at least one direction for each distinct unordered pair; both directions are allowed.",
    },
    solutionMetadata: {
      summary:
        "The relation is complete because every distinct unordered pair has at least one direction.",
      steps: [
        "Check {x,y}, {x,z}, and {y,z}.",
        "Do not require exactly one direction.",
      ],
    },
    accessibility: {
      notation,
      responseDescription:
        "A semantic relation table is followed by labelled controls for each unordered pair and completeness.",
    },
    implementationNotes: [
      "The structured pair controls preserve the required exhaustive check.",
    ],
    audit: {
      provenance: "original",
      sourceVerificationState: "checked",
      reviewStatus: "approved",
      implementationNotes: [],
    },
  },
  {
    id: "pref-practice-06",
    version: 1,
    status: "approved",
    title: "Identify an incomplete relation",
    interactionType: "single-choice",
    claimIds: ["claim-pref-03"],
    difficulty: "intermediate",
    prerequisites: ["pref-practice-05"],
    misconceptionIds: ["mis-pref-04", "mis-pref-07"],
    learnerVisibleContent: {
      prompt: [
        "The domain is {x, y, z}. The following exhaustive list gives all weak comparisons between distinct alternatives that hold: x ≽ y, z ≽ y. All reflexive comparisons are included but omitted from the display.",
        "Which conclusion is supported?",
      ],
      instructions: [
        "Choose one conclusion and justify the chosen pair or chain in writing.",
      ],
    },
    options: [
      {
        id: "a",
        label: "Complete, because every alternative appears in a comparison.",
      },
      { id: "b", label: "Complete, because neither pair has both directions." },
      {
        id: "c",
        label: "Not complete, because neither x ≽ z nor z ≽ x holds.",
      },
      { id: "d", label: "Not transitive, because x ≽ z is missing." },
    ],
    relationData: exhaustiveRelation(["x:y", "z:y"]),
    responseDefinition: {
      responseSummary:
        "One selected conclusion and one written justification are expected.",
      fields: [
        {
          id: "answer",
          kind: "radio",
          label: "Which conclusion is supported?",
          options: [
            {
              id: "a",
              label:
                "Complete, because every alternative appears in a comparison.",
            },
            {
              id: "b",
              label: "Complete, because neither pair has both directions.",
            },
            {
              id: "c",
              label: "Not complete, because neither x ≽ z nor z ≽ x holds.",
            },
            { id: "d", label: "Not transitive, because x ≽ z is missing." },
          ],
          required: true,
        },
        {
          id: "justification",
          kind: "textarea",
          label: "Justification",
          required: true,
        },
      ],
    },
    evaluationMetadata: {
      correctOptionIds: ["c"],
      acceptedAnswerStructure: [
        "Selects the missing {x,z} pair.",
        "Justification remains self-review.",
      ],
      approvedRelationPairKeys: relationKeys,
    },
    feedbackMetadata: {
      misconceptionIds: ["mis-pref-04", "mis-pref-07"],
      conceptualFocus:
        "A missing comparison is a completeness failure only when the required pair is exhaustive; it is not automatically a transitivity failure.",
      correctExplanation:
        "Completeness fails because neither direction is supplied for the pair x and z in the exhaustive list.",
      incorrectExplanation:
        "This selection may be confusing a missing pair with a missing transitivity consequence. Check the pair x and z under the exhaustive-list condition.",
    },
    solutionMetadata: {
      summary: "The pair {x,z} has no direction, so completeness fails.",
      steps: [
        "Check all three unordered pairs.",
        "Do not infer a transitivity failure without a chain.",
      ],
    },
    accessibility: {
      notation,
      responseDescription:
        "A semantic relation table precedes a native radio group and labelled justification area.",
    },
    implementationNotes: [
      "Keep the word exhaustive in visible relation context.",
    ],
    audit: {
      provenance: "original",
      sourceVerificationState: "checked",
      reviewStatus: "approved",
      implementationNotes: [],
    },
  },
  {
    id: "pref-practice-07",
    version: 1,
    status: "approved",
    title: "Check transitivity through all chains",
    interactionType: "relation-table-analysis",
    claimIds: ["claim-pref-04"],
    difficulty: "intermediate",
    prerequisites: ["pref-practice-05"],
    misconceptionIds: ["mis-pref-07"],
    learnerVisibleContent: {
      prompt: [
        "The domain is {x, y, z}. The relation contains every reflexive comparison and exactly these non-reflexive weak comparisons: x ≽ y, y ≽ z, x ≽ z.",
        "Is it transitive? Identify every non-reflexive two-step chain and its required conclusion.",
      ],
      instructions: [
        "State whether the relation is transitive. Record the first premise, second premise, and required conclusion for the non-reflexive chain.",
      ],
    },
    relationData: exhaustiveRelation(["x:y", "y:z", "x:z"]),
    responseDefinition: {
      responseSummary:
        "A transitivity classification and a chain description are expected.",
      fields: [
        {
          id: "transitive",
          kind: "radio",
          label: "Is the relation transitive?",
          options: yesNoOptions,
          required: true,
        },
        {
          id: "first-premise",
          kind: "text",
          label: "First premise in the non-reflexive chain",
          required: true,
        },
        {
          id: "second-premise",
          kind: "text",
          label: "Second premise in the non-reflexive chain",
          required: true,
        },
        {
          id: "conclusion",
          kind: "text",
          label: "Required conclusion",
          required: true,
        },
      ],
    },
    evaluationMetadata: {
      acceptedAnswerStructure: ["Transitive: yes", "x ≽ y", "y ≽ z", "x ≽ z"],
      approvedRelationPairKeys: relationKeys,
    },
    feedbackMetadata: {
      misconceptionIds: ["mis-pref-07"],
      conceptualFocus:
        "A missing reverse comparison is not a transitivity violation without an applicable chain.",
    },
    solutionMetadata: {
      summary:
        "The only non-reflexive chain closes with x ≽ z; reflexive chains also close.",
      steps: [
        "Find x ≽ y and y ≽ z.",
        "Check x ≽ z.",
        "Confirm reflexive chains use already stated comparisons.",
      ],
    },
    accessibility: {
      notation,
      responseDescription:
        "A semantic relation table is followed by one radio group and three labelled text inputs.",
    },
    implementationNotes: [
      "No exact-string evaluation is included in this static slice.",
    ],
    audit: {
      provenance: "original",
      sourceVerificationState: "checked",
      reviewStatus: "approved",
      implementationNotes: [],
    },
  },
  {
    id: "pref-practice-08",
    version: 1,
    status: "approved",
    title: "Find a transitivity violation",
    interactionType: "relation-table-analysis",
    claimIds: ["claim-pref-04"],
    difficulty: "intermediate",
    prerequisites: ["pref-practice-07"],
    misconceptionIds: ["mis-pref-04"],
    learnerVisibleContent: {
      prompt: [
        "The domain is {x, y, z}. The relation contains every reflexive comparison and exactly these non-reflexive weak comparisons: x ≽ y, y ≽ z.",
        "Is it transitive? Give a concrete violating triple.",
      ],
      instructions: [
        "State whether the relation is transitive, then identify the ordered triple with first, middle, and final alternative.",
      ],
    },
    relationData: exhaustiveRelation(["x:y", "y:z"]),
    responseDefinition: {
      responseSummary:
        "A transitivity classification and an ordered triple are expected.",
      fields: [
        {
          id: "transitive",
          kind: "radio",
          label: "Is the relation transitive?",
          options: yesNoOptions,
          required: true,
        },
        {
          id: "first",
          kind: "select",
          label: "First alternative in the triple",
          options: alternatives,
          required: true,
        },
        {
          id: "middle",
          kind: "select",
          label: "Middle alternative in the triple",
          options: alternatives,
          required: true,
        },
        {
          id: "last",
          kind: "select",
          label: "Final alternative in the triple",
          options: alternatives,
          required: true,
        },
      ],
    },
    evaluationMetadata: {
      acceptedAnswerStructure: ["Transitive: no", "Ordered triple: (x, y, z)"],
      approvedRelationPairKeys: relationKeys,
    },
    feedbackMetadata: {
      misconceptionIds: ["mis-pref-04"],
      conceptualFocus:
        "A transitivity failure needs a concrete weak-preference chain with an absent endpoint.",
    },
    solutionMetadata: {
      summary:
        "x ≽ y and y ≽ z hold, but x ≽ z does not; (x,y,z) violates transitivity.",
      steps: ["State the chain.", "Identify the missing endpoint."],
    },
    accessibility: {
      notation,
      responseDescription:
        "A semantic relation table is followed by a radio group and three labelled native selects for an ordered triple.",
    },
    implementationNotes: ["Triple order must remain visible and textual."],
    audit: {
      provenance: "original",
      sourceVerificationState: "checked",
      reviewStatus: "approved",
      implementationNotes: [],
    },
  },
  {
    id: "pref-practice-09",
    version: 1,
    status: "approved",
    title: "Separate the two rationality checks",
    interactionType: "true-false-with-justification",
    claimIds: ["claim-pref-03", "claim-pref-04", "claim-pref-05"],
    difficulty: "intermediate",
    prerequisites: [
      "pref-practice-05",
      "pref-practice-06",
      "pref-practice-07",
      "pref-practice-08",
    ],
    misconceptionIds: ["mis-pref-05"],
    learnerVisibleContent: {
      prompt: [
        "True or false: a relation is rational whenever it is complete.",
      ],
      instructions: [
        "Choose true or false, then name the additional condition if one is required.",
      ],
    },
    responseDefinition: {
      responseSummary:
        "A true-or-false selection and a justification are expected.",
      fields: [
        {
          id: "truth-value",
          kind: "radio",
          label: "Is the statement true or false?",
          options: [
            { id: "true", label: "True" },
            { id: "false", label: "False" },
          ],
          required: true,
        },
        {
          id: "justification",
          kind: "textarea",
          label: "Justification",
          required: true,
        },
      ],
    },
    evaluationMetadata: {
      correctOptionIds: ["false"],
      acceptedAnswerStructure: [
        "False",
        "Names transitivity as the additional condition.",
      ],
    },
    feedbackMetadata: {
      misconceptionIds: ["mis-pref-05"],
      conceptualFocus:
        "Rationality is the technical conjunction of completeness and transitivity.",
      correctExplanation:
        "Rationality requires both completeness and transitivity, so completeness alone is insufficient.",
      incorrectExplanation:
        "This selection may be treating completeness as the whole rationality condition. Check the additional axiom required for rationality.",
    },
    solutionMetadata: {
      summary:
        "False: completeness alone does not establish transitivity or rationality.",
      steps: [
        "Name completeness.",
        "Name transitivity.",
        "Apply the conjunction.",
      ],
    },
    accessibility: {
      notation,
      responseDescription:
        "A native true-or-false radio group is followed by a labelled justification text area.",
    },
    implementationNotes: [
      "Keep the technical meaning of rationality explicit.",
    ],
    audit: {
      provenance: "original",
      sourceVerificationState: "checked",
      reviewStatus: "approved",
      implementationNotes: [],
    },
  },
  {
    id: "pref-practice-10",
    version: 1,
    status: "approved",
    title: "Classify a relation on both axioms",
    interactionType: "classification",
    claimIds: ["claim-pref-03", "claim-pref-04", "claim-pref-05"],
    difficulty: "intermediate",
    prerequisites: [
      "pref-practice-05",
      "pref-practice-06",
      "pref-practice-07",
      "pref-practice-08",
      "pref-practice-09",
    ],
    misconceptionIds: ["mis-pref-03", "mis-pref-05"],
    learnerVisibleContent: {
      prompt: [
        "The domain is {x, y, z}. The relation contains every reflexive comparison and exactly these non-reflexive weak comparisons: x ≽ y, y ≽ x, x ≽ z, z ≽ x, y ≽ z, z ≽ y.",
        "Which classification is correct?",
      ],
      instructions: [
        "Assess completeness and transitivity separately before selecting the final classification.",
      ],
    },
    options: [
      { id: "a", label: "Complete and transitive; therefore rational." },
      {
        id: "b",
        label: "Complete but not transitive; therefore not rational.",
      },
      {
        id: "c",
        label: "Transitive but not complete; therefore not rational.",
      },
      { id: "d", label: "Neither complete nor transitive." },
    ],
    relationData: exhaustiveRelation([
      "x:y",
      "y:x",
      "x:z",
      "z:x",
      "y:z",
      "z:y",
    ]),
    responseDefinition: {
      responseSummary:
        "Separate completeness and transitivity classifications, then select one final classification.",
      fields: [
        {
          id: "complete",
          kind: "radio",
          label: "Is the relation complete?",
          options: yesNoOptions,
          required: true,
        },
        {
          id: "transitive",
          kind: "radio",
          label: "Is the relation transitive?",
          options: yesNoOptions,
          required: true,
        },
        {
          id: "classification",
          kind: "radio",
          label: "Which final classification is correct?",
          options: [
            { id: "a", label: "Complete and transitive; therefore rational." },
            {
              id: "b",
              label: "Complete but not transitive; therefore not rational.",
            },
            {
              id: "c",
              label: "Transitive but not complete; therefore not rational.",
            },
            { id: "d", label: "Neither complete nor transitive." },
          ],
          required: true,
        },
      ],
    },
    evaluationMetadata: {
      acceptedAnswerStructure: [
        "Complete: yes",
        "Transitive: yes",
        "Classification: a",
      ],
      approvedRelationPairKeys: relationKeys,
    },
    feedbackMetadata: {
      misconceptionIds: ["mis-pref-03", "mis-pref-05"],
      conceptualFocus:
        "Mutual comparisons are allowed; rationality follows only after both axioms are checked.",
    },
    solutionMetadata: {
      summary:
        "Every ordered pair holds, so the relation is complete and transitive, hence rational.",
      steps: [
        "Check all distinct pairs.",
        "Check chain closure.",
        "Apply the technical rationality definition.",
      ],
    },
    accessibility: {
      notation,
      responseDescription:
        "A relation table is followed by three separately labelled native radio groups.",
    },
    implementationNotes: [
      "Do not collapse the task into final classification only.",
    ],
    audit: {
      provenance: "original",
      sourceVerificationState: "checked",
      reviewStatus: "approved",
      implementationNotes: [],
    },
  },
  {
    id: "pref-practice-11",
    version: 1,
    status: "approved",
    title: "Diagnose an overconfident classification",
    interactionType: "error-diagnosis",
    claimIds: ["claim-pref-03", "claim-pref-04", "claim-pref-05"],
    difficulty: "transfer",
    prerequisites: [
      "pref-practice-05",
      "pref-practice-06",
      "pref-practice-07",
      "pref-practice-08",
      "pref-practice-09",
      "pref-practice-10",
    ],
    misconceptionIds: ["mis-pref-04", "mis-pref-05", "mis-pref-07"],
    learnerVisibleContent: {
      prompt: [
        "The domain is {x, y, z}. The relation contains every reflexive comparison and exactly these non-reflexive weak comparisons: x ≽ y, y ≽ z, x ≽ z, z ≽ x, z ≽ y.",
        "A learner writes: “The relation is rational because every distinct pair is comparable.”",
        "Diagnose the conclusion. State whether completeness holds, whether transitivity holds, and the smallest repair to the learner’s reasoning.",
      ],
      instructions: [
        "Assess the learner’s claim in separate completeness, transitivity, violating-triple, and repair fields.",
      ],
      learnerClaim:
        "The relation is rational because every distinct pair is comparable.",
    },
    relationData: exhaustiveRelation(["x:y", "y:z", "x:z", "z:x", "z:y"]),
    responseDefinition: {
      responseSummary:
        "Four responses are expected: completeness, transitivity, a violating triple, and a repair explanation.",
      fields: [
        {
          id: "complete",
          kind: "radio",
          label: "Does completeness hold?",
          options: yesNoOptions,
          required: true,
        },
        {
          id: "transitive",
          kind: "radio",
          label: "Does transitivity hold?",
          options: yesNoOptions,
          required: true,
        },
        {
          id: "first",
          kind: "select",
          label: "First alternative in a violating triple",
          options: alternatives,
          required: true,
        },
        {
          id: "middle",
          kind: "select",
          label: "Middle alternative in a violating triple",
          options: alternatives,
          required: true,
        },
        {
          id: "last",
          kind: "select",
          label: "Final alternative in a violating triple",
          options: alternatives,
          required: true,
        },
        {
          id: "repair",
          kind: "textarea",
          label: "Smallest repair to the learner’s reasoning",
          required: true,
        },
      ],
    },
    evaluationMetadata: {
      acceptedAnswerStructure: [
        "Complete: yes",
        "Transitive: no",
        "Ordered triple: (y, z, x)",
        "Repair explanation is self-review.",
      ],
      approvedRelationPairKeys: relationKeys,
    },
    feedbackMetadata: {
      misconceptionIds: ["mis-pref-04", "mis-pref-05", "mis-pref-07"],
      conceptualFocus:
        "Completeness must be tested separately from transitivity before applying the technical rationality label.",
    },
    solutionMetadata: {
      summary:
        "The relation is complete but not transitive because y ≽ z and z ≽ x do not yield y ≽ x.",
      steps: [
        "Check every unordered pair.",
        "Find the chain (y,z,x).",
        "Repair the learner claim by requiring transitivity too.",
      ],
    },
    accessibility: {
      notation,
      responseDescription:
        "The learner claim is displayed before separately labelled diagnosis controls and a repair text area.",
    },
    implementationNotes: ["Repair explanation remains self-review only."],
    audit: {
      provenance: "original",
      sourceVerificationState: "checked",
      reviewStatus: "approved",
      implementationNotes: [],
    },
  },
  {
    id: "pref-practice-12",
    version: 1,
    status: "approved",
    title: "Derive the incompatibility",
    interactionType: "ordered-derivation",
    claimIds: ["claim-pref-02", "claim-pref-15"],
    difficulty: "transfer",
    prerequisites: ["pref-practice-02", "pref-practice-03", "pref-practice-04"],
    misconceptionIds: ["mis-pref-08"],
    learnerVisibleContent: {
      prompt: [
        "Prove that x ≻ y and x ∼ y cannot both hold for the same ordered pair.",
        "Use only these definitions: x ≻ y if and only if x ≽ y and not y ≽ x. x ∼ y if and only if x ≽ y and y ≽ x.",
      ],
      instructions: [
        "Write a five-part derivation: assumption, strict-preference consequence, indifference consequence, contradiction, and conclusion.",
      ],
    },
    responseDefinition: {
      responseSummary:
        "Five labelled derivation steps are expected. This activity does not automatically grade the proof.",
      fields: [
        {
          id: "assumption",
          kind: "textarea",
          label: "1. Assumption for contradiction",
          required: true,
        },
        {
          id: "strict-consequence",
          kind: "textarea",
          label: "2. Consequence of x ≻ y",
          required: true,
        },
        {
          id: "indifference-consequence",
          kind: "textarea",
          label: "3. Consequence of x ∼ y",
          required: true,
        },
        {
          id: "contradiction",
          kind: "textarea",
          label: "4. Contradiction",
          required: true,
        },
        {
          id: "conclusion",
          kind: "textarea",
          label: "5. Conclusion",
          required: true,
        },
      ],
    },
    derivationSteps: [
      {
        id: "assumption",
        label: "Assumption",
        prompt: "Assume both relations hold for the same ordered pair.",
      },
      {
        id: "strict-consequence",
        label: "Strict-preference consequence",
        prompt: "State what x ≻ y implies.",
      },
      {
        id: "indifference-consequence",
        label: "Indifference consequence",
        prompt: "State what x ∼ y implies.",
      },
      {
        id: "contradiction",
        label: "Contradiction",
        prompt: "Identify the opposed statements about y ≽ x.",
      },
      {
        id: "conclusion",
        label: "Conclusion",
        prompt: "State what cannot both hold.",
      },
    ],
    evaluationMetadata: {
      acceptedAnswerStructure: [
        "x ≻ y implies x ≽ y and not y ≽ x",
        "x ∼ y implies x ≽ y and y ≽ x",
        "Contradiction: y ≽ x and not y ≽ x",
      ],
    },
    feedbackMetadata: {
      misconceptionIds: ["mis-pref-08"],
      conceptualFocus:
        "The result is derived from definitions and is not a geometric claim.",
    },
    solutionMetadata: {
      summary:
        "The two definitions require both y ≽ x and not y ≽ x, which is a contradiction.",
      steps: [
        "Assume both relations.",
        "Apply strict preference.",
        "Apply indifference.",
        "State the contradiction.",
        "Conclude incompatibility.",
      ],
    },
    accessibility: {
      notation,
      responseDescription:
        "Five labelled text areas support a keyboard-safe derivation without dragging or automatic grading.",
    },
    implementationNotes: [
      "Model solution stays unrendered in this static foundation.",
    ],
    audit: {
      provenance: "original",
      sourceVerificationState: "checked",
      reviewStatus: "approved",
      implementationNotes: [],
    },
  },
] satisfies Mikro1PreferenceExercise[];

assertValidMikro1PreferenceExercises(mikro1PreferencesPracticeExercises);

export const staticMikro1PreferencesPracticeExercises =
  mikro1PreferencesPracticeExercises.map(toStaticMikro1PreferenceExercise);
