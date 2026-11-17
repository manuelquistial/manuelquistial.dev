import type { Locale } from "@/i18n/config";
import { neuronsLesson as neuronsLessonEn } from "@/content/learn/en/neurons";
import { neuronsLesson as neuronsLessonEs } from "@/content/learn/es/neurons";
import {
  findLearnRouteBySlug,
  getLearnSlugForLocale,
} from "@/content/learn/routes";
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
    const route = findLearnRouteBySlug(slug);
    const localizedSlug = route
      ? getLearnSlugForLocale(route, locale)
      : undefined;
    const targetSlug = localizedSlug ?? slug;
    return learnLessons.find(
      (lesson) =>
        lesson.slug === targetSlug &&
        lesson.locales.some((item) => item === locale),
    );
  }

  return learnLessons.find((lesson) => lesson.slug === slug);
}

export function getLearnLessonsForLocale(locale: Locale): LearnLessonContent[] {
  return learnLessons.filter((lesson) =>
    lesson.locales.some((item) => item === locale),
  );
}
