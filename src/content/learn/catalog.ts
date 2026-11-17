import type { Locale } from "@/i18n/config";
import { neuronsLesson as neuronsLessonEn } from "@/content/learn/en/neurons";
import { neuronsLesson as neuronsLessonEs } from "@/content/learn/es/neurons";
import type { LearnLessonContent } from "@/content/learn/types";

export const learnLessons = [
  neuronsLessonEs,
  neuronsLessonEn,
] satisfies readonly LearnLessonContent[];

export function getLearnLesson(
  slug: string,
  locale?: Locale,
): LearnLessonContent | undefined {
  if (locale) {
    return learnLessons.find(
      (lesson) =>
        lesson.slug === slug && lesson.locales.some((item) => item === locale),
    );
  }

  return learnLessons.find((lesson) => lesson.slug === slug);
}

export function getLearnLessonsForLocale(locale: Locale): LearnLessonContent[] {
  return learnLessons.filter((lesson) =>
    lesson.locales.some((item) => item === locale),
  );
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
