import type { Locale } from "@/i18n/config";
import { neuronsLesson as neuronsLessonEn } from "@/content/learn/en/neurons";
import { neuronsLesson as neuronsLessonEs } from "@/content/learn/es/neurons";
import { skillSecurityLesson } from "@/content/learn/es/skill-security";
import {
  findLearnRouteBySlug,
  getLearnSlugForLocale,
} from "@/content/learn/routes";
import type {
  LearnCatalogLesson,
  LearnGuideLessonContent,
  LearnSceneLessonContent,
} from "@/content/learn/types";
import { isGuideLesson, isSceneLesson } from "@/content/learn/types";

export const learnLessons = [
  neuronsLessonEs,
  neuronsLessonEn,
  skillSecurityLesson,
] satisfies readonly LearnCatalogLesson[];

export function getLearnLesson(
  slug: string,
  locale?: Locale,
): LearnCatalogLesson | undefined {
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

export function getLearnLessonsForLocale(locale: Locale): LearnCatalogLesson[] {
  return learnLessons.filter((lesson) =>
    lesson.locales.some((item) => item === locale),
  );
}

export function getSceneLesson(
  slug: string,
  locale?: Locale,
): LearnSceneLessonContent | undefined {
  const lesson = getLearnLesson(slug, locale);
  return lesson && isSceneLesson(lesson) ? lesson : undefined;
}

export function getGuideLesson(
  slug: string,
  locale?: Locale,
): LearnGuideLessonContent | undefined {
  const lesson = getLearnLesson(slug, locale);
  return lesson && isGuideLesson(lesson) ? lesson : undefined;
}

export { isGuideLesson, isSceneLesson };
