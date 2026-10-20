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
};

export type LearnPartCopy = {
  id: string;
  label: string;
  text: string;
};

export type LearnScene = {
  id: string;
  title: string;
  textAlternative: string;
  paragraphs: readonly LearnText[];
  stages?: readonly LearnStageCopy[];
  parts?: readonly LearnPartCopy[];
};

export type LearnQuestion = {
  id: string;
  afterSceneId: string;
  prompt: string;
  options: readonly { id: string; label: string }[];
  correctId: string;
  feedback: string;
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

export type LearnLessonContent = {
  slug: string;
  locales: readonly Locale[];
  title: string;
  description: string;
  cardDescription: string;
  metaTitle: string;
  intro: readonly LearnText[];
  scenes: readonly LearnScene[];
  questions: readonly LearnQuestion[];
  deepen: readonly LearnDeepen[];
  sources: readonly LearnSource[];
  originalPostUrl?: string;
};
