import type { LearnLessonContent, LearnText } from "@/content/learn/types";

export function citationOrder(
  texts: readonly LearnText[],
  sourceIds: readonly string[],
): string[] {
  const known = new Set(sourceIds);
  const cited = new Set<string>();

  for (const text of texts) {
    for (const id of text.cites ?? []) {
      if (known.has(id)) cited.add(id);
    }
  }

  return sourceIds.filter((id) => cited.has(id));
}

export function lessonTexts(lesson: LearnLessonContent): LearnText[] {
  const fromScenes = lesson.scenes.flatMap((scene) => [
    ...scene.paragraphs,
    ...(scene.closing ?? []),
    ...Object.values(scene.variantNotes ?? {}),
    ...(scene.stages ?? []).map((stage) => ({
      text: stage.text,
      cites: stage.cites,
    })),
    ...(scene.parts ?? []).map((part) => ({
      text: part.text,
      cites: part.cites,
    })),
  ]);

  const fromQuestions = lesson.questions.flatMap((question) =>
    question.options.map((option) => ({
      text: option.feedback,
      cites: option.cites,
    })),
  );

  return [
    ...lesson.intro,
    ...fromScenes,
    ...lesson.deepen.flatMap((block) => block.paragraphs),
    ...fromQuestions,
  ];
}

export function lessonCitationOrder(lesson: LearnLessonContent): string[] {
  return citationOrder(
    lessonTexts(lesson),
    lesson.sources.map((source) => source.id),
  );
}
