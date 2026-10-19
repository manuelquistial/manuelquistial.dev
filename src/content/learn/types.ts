import type { Locale } from "@/i18n/config";

export type LearnStageCopy = {
  id: string;
  label: string;
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
  paragraphs: readonly string[];
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
  paragraphs: readonly string[];
};

export type LearnSource = {
  title: string;
  detail: string;
  href: string;
  supports: string;
};

export type LearnLessonContent = {
  slug: string;
  locales: readonly Locale[];
  title: string;
  description: string;
  cardDescription: string;
  metaTitle: string;
  intro: readonly string[];
  disclaimer: string;
  scenes: readonly LearnScene[];
  questions: readonly LearnQuestion[];
  deepen: readonly LearnDeepen[];
  sources: readonly LearnSource[];
  sourcesNote: string;
  closingTitle: string;
  closing: readonly string[];
  originalPostUrl?: string;
};
