import type { Locale } from "@/i18n/config";

export type LearnText = {
  text: string;
  cites?: readonly string[];
};

export type LearnStageCopy = {
  id: string;
  label: string;
  title: string;
  text: string;
  cites?: readonly string[];
};

export type LearnPartCopy = {
  id: string;
  label: string;
  text: string;
  cites?: readonly string[];
};

export type LearnScene = {
  id: string;
  title: string;
  textAlternative: string;
  paragraphs: readonly LearnText[];
  prompt?: string;
  /** Shown in the scene panel before the user selects a structure or stage. */
  idle?: {
    title?: string;
    text: string;
    cites?: readonly string[];
  };
  badge?: string;
  closing?: readonly LearnText[];
  variantNotes?: Partial<
    Record<"chemical" | "electrical", LearnText>
  >;
  stages?: readonly LearnStageCopy[];
  parts?: readonly LearnPartCopy[];
};

export type LearnQuestionOption = {
  id: string;
  label: string;
  feedback: string;
  cites?: readonly string[];
};

export type LearnQuestion = {
  id: string;
  afterSceneId: string;
  prompt: string;
  options: readonly LearnQuestionOption[];
  correctId: string;
  visibleIn?: "chemical";
};

export type LearnDeepen = {
  afterSceneId: string;
  title: string;
  paragraphs: readonly LearnText[];
};

export type LearnSource = {
  id: string;
  title: string;
  authors: string;
  year: string;
  edition: string;
  href: string;
};

export type LearnLessonCardArt = "neurons" | "skill-security";

export type LearnLessonMeta = {
  slug: string;
  locales: readonly Locale[];
  title: string;
  description: string;
  cardDescription: string;
  metaTitle: string;
  /** Absolute publication instant in UTC (ISO-8601 ending in Z). */
  publishedAt: string;
  cardArt: LearnLessonCardArt;
  cardImageLabel: string;
};

export type LearnSceneLessonContent = LearnLessonMeta & {
  kind: "scenes";
  intro: readonly LearnText[];
  scenes: readonly LearnScene[];
  questions: readonly LearnQuestion[];
  deepen: readonly LearnDeepen[];
  sources: readonly LearnSource[];
};

/** @deprecated Prefer LearnSceneLessonContent; kept as alias for scene lessons. */
export type LearnLessonContent = LearnSceneLessonContent;

export type LearnGuideLink = {
  id: string;
  label: string;
  href: string;
};

export type LearnGuideSource = {
  id: string;
  title: string;
  href: string;
  use: string;
};

export type LearnGuideLessonContent = LearnLessonMeta & {
  kind: "guide";
  guideId: "skill-security";
  category: string;
  subcategory: string;
  author: string;
  contentReviewLabel: string;
  contentReviewDate: string;
};

export type LearnCatalogLesson =
  | LearnSceneLessonContent
  | LearnGuideLessonContent;

export function isSceneLesson(
  lesson: LearnCatalogLesson,
): lesson is LearnSceneLessonContent {
  return lesson.kind === "scenes";
}

export function isGuideLesson(
  lesson: LearnCatalogLesson,
): lesson is LearnGuideLessonContent {
  return lesson.kind === "guide";
}
