import { neuronsLesson } from "@/content/learn/es/neurons";
import type { LearnLessonContent } from "@/content/learn/types";

export const learnLessons = [neuronsLesson] satisfies readonly LearnLessonContent[];

export function getLearnLesson(slug: string): LearnLessonContent | undefined {
  return learnLessons.find((lesson) => lesson.slug === slug);
}

export function isSafeHttpUrl(value: string | undefined): value is string {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}
