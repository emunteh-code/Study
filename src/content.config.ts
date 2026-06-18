import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const idSchema = z
  .string()
  .regex(/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/, "Use stable lowercase ASCII IDs.");

const slugSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase ASCII route slugs.");

const contentStateSchema = z.enum([
  "planned",
  "drafting",
  "structurally-complete",
  "source-checked",
  "exercise-checked",
  "published",
  "archived",
]);

const sourceVerificationStateSchema = z.enum([
  "unverified",
  "located",
  "checked",
  "superseded",
]);

const provenanceSchema = z.enum(["official", "adapted", "original"]);
const publicationVisibilitySchema = z.enum([
  "hidden",
  "listed",
  "public",
  "withdrawn",
]);
const semesterStatusSchema = z.enum([
  "current",
  "archived",
  "superseded",
  "unknown",
]);
const reviewStatusSchema = z.enum([
  "not-reviewed",
  "in-review",
  "changes-requested",
  "approved",
  "expired",
]);
const difficultySchema = z.enum([
  "introductory",
  "standard",
  "advanced",
  "exam-transfer",
]);
const questionTypeSchema = z.enum([
  "single-choice",
  "multiple-choice",
  "numeric-response",
  "short-text",
  "structured-calculation",
  "ordering",
  "matching",
  "graph-interpretation",
  "open-response",
]);
const practiceModeSchema = z.enum([
  "guided-practice",
  "topic-practice",
  "mixed-practice",
  "timed-exam-practice",
  "mistake-review",
  "due-review",
]);
const sourceTypeSchema = z.enum([
  "lecture-slides",
  "exercise-sheet",
  "official-solution",
  "syllabus",
  "textbook",
  "journal-article",
  "statute",
  "court-decision",
  "dataset",
  "official-web-source",
  "instructor-announcement",
  "original-platform-material",
]);

const sourceReferenceSchema = z.object({
  sourceId: idSchema,
  locatorId: idSchema.optional(),
});

const baseEditorialSchema = {
  publicationStatus: publicationVisibilitySchema,
  contentState: contentStateSchema,
  reviewStatus: reviewStatusSchema,
};

const modules = defineCollection({
  type: "data",
  schema: z.object({
    id: idSchema,
    slug: slugSchema,
    title: z.string().min(1),
    shortTitle: z.string().min(1).optional(),
    summary: z.string().min(1),
    discipline: z.string().min(1),
    degreeProgramme: z.string().min(1),
    institutionContext: z.string().min(1),
    officialAffiliationDisclaimer: z.string().min(1),
    availableVersions: z.array(idSchema).default([]),
    currentVersion: idSchema.optional(),
    availableLearningModes: z.array(practiceModeSchema).default([]),
    publicationStatus: publicationVisibilitySchema,
    searchMetadata: z
      .object({
        keywords: z.array(z.string().min(1)).default([]),
        aliases: z.array(z.string().min(1)).default([]),
      })
      .default({ keywords: [], aliases: [] }),
  }),
});

const moduleVersions = defineCollection({
  type: "data",
  schema: z.object({
    id: idSchema,
    moduleId: idSchema,
    semesterLabel: z.string().min(1).optional(),
    semesterStart: z.coerce.date().optional(),
    semesterEnd: z.coerce.date().optional(),
    semesterStatus: semesterStatusSchema,
    lecturerOrAuthor: z.string().min(1).optional(),
    sourceSet: z.array(idSchema).default([]),
    topicOrder: z.array(idSchema).default([]),
    assessmentMetadata: z.record(z.string(), z.unknown()).optional(),
    reviewStatus: reviewStatusSchema,
    lastReviewedDate: z.coerce.date().optional(),
    supersededBy: idSchema.optional(),
    publicationStatus: publicationVisibilitySchema,
  }),
});

const topics = defineCollection({
  type: "content",
  schema: z.object({
    id: idSchema,
    moduleIds: z.array(idSchema).min(1),
    moduleVersionIds: z.array(idSchema).min(1),
    slug: slugSchema,
    title: z.string().min(1),
    summary: z.string().min(1),
    order: z.number().int().nonnegative().optional(),
    estimatedLearningTimeMinutes: z.number().int().positive().optional(),
    learningObjectiveIds: z.array(idSchema).default([]),
    prerequisiteIds: z.array(idSchema).default([]),
    ...baseEditorialSchema,
    sourceRefs: z.array(sourceReferenceSchema).default([]),
    previousTopicId: idSchema.optional(),
    nextTopicId: idSchema.optional(),
    recommendedNextAction: z
      .object({
        reason: z.enum([
          "continue-last",
          "review-due",
          "next-topic",
          "prerequisite-gap",
          "practice-needed",
          "mistake-review",
          "exam-prep",
          "fallback-start",
        ]),
        targetId: idSchema.optional(),
        href: z.string().min(1).optional(),
      })
      .optional(),
    searchTerms: z.array(z.string().min(1)).default([]),
    archival: z
      .object({
        semesterStatus: semesterStatusSchema,
        supersededBy: idSchema.optional(),
      })
      .optional(),
  }),
});

const questions = defineCollection({
  type: "data",
  schema: z.object({
    id: idSchema,
    provenance: provenanceSchema,
    sourceLocatorId: idSchema.optional(),
    moduleId: idSchema,
    topicIds: z.array(idSchema).min(1),
    objectiveIds: z.array(idSchema).default([]),
    questionType: questionTypeSchema,
    difficulty: difficultySchema,
    prompt: z.string().min(1),
    answerFormat: z.record(z.string(), z.unknown()),
    hints: z.array(z.object({ text: z.string().min(1) })).default([]),
    solution: z.object({
      status: z.enum(["unavailable", "outline", "available"]),
      text: z.string().min(1).optional(),
    }),
    estimatedTimeMinutes: z.number().int().positive().optional(),
    reviewEligible: z.boolean().default(false),
    ...baseEditorialSchema,
  }),
});

const practiceSets = defineCollection({
  type: "data",
  schema: z.object({
    id: idSchema,
    title: z.string().min(1),
    moduleId: idSchema,
    topicScope: z.array(idSchema).default([]),
    practiceMode: practiceModeSchema,
    questionList: z.object({
      type: z.enum(["explicit", "filter"]),
      ids: z.array(idSchema).default([]),
    }),
    estimatedDurationMinutes: z.number().int().positive().optional(),
    completionCriteria: z.record(z.string(), z.unknown()),
    ...baseEditorialSchema,
  }),
});

const exams = defineCollection({
  type: "data",
  schema: z.object({
    id: idSchema,
    title: z.string().min(1),
    moduleVersionId: idSchema,
    provenance: provenanceSchema,
    legalPublicationStatus: z.enum([
      "verified",
      "not-verified",
      "restricted",
      "not-publishable",
    ]),
    timeLimitMinutes: z.number().int().positive().optional(),
    totalPoints: z.number().nonnegative().optional(),
    sections: z
      .array(z.object({ id: idSchema, title: z.string().min(1) }))
      .default([]),
    orderedQuestionIds: z.array(idSchema).default([]),
    instructions: z.string().min(1),
    solutionAvailability: z.enum(["none", "outline", "full"]),
    ...baseEditorialSchema,
  }),
});

const sources = defineCollection({
  type: "data",
  schema: z.object({
    id: idSchema,
    sourceType: sourceTypeSchema,
    title: z.string().min(1),
    authorOrLecturer: z.string().min(1).optional(),
    institutionOrPublisher: z.string().min(1).optional(),
    semester: z.string().min(1).optional(),
    fileOrExternalRef: z.string().min(1).optional(),
    accessRestrictions: z.string().min(1).optional(),
    copyrightOrReuseNote: z.string().min(1),
    verificationStatus: sourceVerificationStateSchema,
    notes: z.string().optional(),
  }),
});

const reviews = defineCollection({
  type: "data",
  schema: z.object({
    id: idSchema,
    contentId: idSchema,
    reviewerIdentityOrRole: z.string().min(1),
    reviewType: z.enum([
      "structural-review",
      "source-verification",
      "formula-verification",
      "exercise-verification",
      "accessibility-review",
      "publication-review",
    ]),
    date: z.coerce.date(),
    sourceSetChecked: z.array(idSchema).default([]),
    result: reviewStatusSchema,
    issuesFound: z.array(z.string().min(1)).default([]),
    unresolvedConcerns: z.array(z.string().min(1)).default([]),
    nextReviewDate: z.coerce.date().optional(),
    supersedingReviewRecord: idSchema.optional(),
  }),
});

export const collections = {
  modules,
  "module-versions": moduleVersions,
  topics,
  questions,
  "practice-sets": practiceSets,
  exams,
  sources,
  reviews,
};
