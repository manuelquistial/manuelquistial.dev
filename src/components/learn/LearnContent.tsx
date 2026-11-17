"use client";

import { createContext, use, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { LearnLessonContent } from "@/content/learn/types";
import type { LearnUi } from "@/content/learn/ui";
import type { NeuronSceneId } from "@/content/learn/scene-ids";

type LearnContentValue = {
  lesson: LearnLessonContent;
  ui: LearnUi;
  locale: Locale;
};

const LearnContentContext = createContext<LearnContentValue | null>(null);

export function LearnContentProvider({
  lesson,
  ui,
  locale,
  children,
}: {
  lesson: LearnLessonContent;
  ui: LearnUi;
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <LearnContentContext.Provider value={{ lesson, ui, locale }}>
      {children}
    </LearnContentContext.Provider>
  );
}

export function useLearnContent() {
  const value = use(LearnContentContext);
  if (!value) {
    throw new Error("useLearnContent must be used within LearnContentProvider");
  }
  return value;
}

export function useLearnUi() {
  return useLearnContent().ui;
}

export function useNeuronScene(id: NeuronSceneId) {
  const { lesson } = useLearnContent();
  const scene = lesson.scenes.find((item) => item.id === id);
  if (!scene) {
    throw new Error(`Missing neuron scene: ${id}`);
  }
  return scene;
}

export function useNeuronQuestion(id: string) {
  const { lesson } = useLearnContent();
  return lesson.questions.find((item) => item.id === id);
}
