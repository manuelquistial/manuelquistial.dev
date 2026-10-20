import type { LearnLessonContent, LearnText } from "@/content/learn/types";

export function citationOrder(
  texts: readonly LearnText[],
  sourceIds: readonly string[],
): string[] {
  const known = new Set(sourceIds);
  const order: string[] = [];

  for (const text of texts) {
    for (const id of text.cites ?? []) {
      if (!known.has(id) || order.includes(id)) continue;
      order.push(id);
    }
  }

  return order;
}

export function lessonTexts(lesson: LearnLessonContent): LearnText[] {
  return [
    ...lesson.intro,
    ...lesson.scenes.flatMap((scene) => scene.paragraphs),
    ...lesson.deepen.flatMap((block) => block.paragraphs),
  ];
}

export function lessonCitationOrder(lesson: LearnLessonContent): string[] {
  return citationOrder(
    lessonTexts(lesson),
    lesson.sources.map((source) => source.id),
  );
}
