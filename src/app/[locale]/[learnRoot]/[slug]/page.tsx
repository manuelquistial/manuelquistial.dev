import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getLearnLesson } from "@/content/learn/catalog";
import {
  findLearnRouteBySlug,
  getLearnBasePath,
  getLearnLessonPath,
  getLearnSlugForLocale,
  isLearnBaseSegment,
  learnRoutes,
  resolveLearnCanonicalRedirect,
} from "@/content/learn/routes";
import { parseLocale } from "@/i18n/parseLocale";
import type { Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/metadata";
import { localizedPath } from "@/lib/localizedPath";
import { LearnLesson } from "@/components/learn/LearnLesson";

interface LearnLessonPageProps {
  params: Promise<{ locale: string; learnRoot: string; slug: string }>;
}

export function generateStaticParams() {
  return learnRoutes.flatMap((route) =>
    route.locales.map((locale) => ({
      locale,
      learnRoot: getLearnBasePath(locale).slice(1),
      slug: route.slugs[locale],
    })),
  );
}

export async function generateMetadata({
  params,
}: LearnLessonPageProps): Promise<Metadata> {
  const { locale: localeParam, learnRoot, slug } = await params;
  if (!isLearnBaseSegment(learnRoot)) return {};

  const locale = parseLocale(localeParam);
  const lesson = getLearnLesson(slug, locale) ?? getLearnLesson(slug);
  const published = lesson?.locales.includes(locale)
    ? locale
    : lesson?.locales[0];

  if (!lesson || !published) {
    return {};
  }

  const localized = getLearnLesson(slug, published) ?? lesson;
  const route = findLearnRouteBySlug(slug);

  return buildPageMetadata({
    title: localized.metaTitle,
    description: localized.description,
    path: getLearnLessonPath(published, localized.slug),
    fullTitle: true,
    locale: published,
    availableLocales: route?.locales ?? lesson.locales,
  });
}

export default async function LearnLessonPage({ params }: LearnLessonPageProps) {
  const { locale: localeParam, learnRoot, slug } = await params;
  if (!isLearnBaseSegment(learnRoot)) notFound();

  const locale = parseLocale(localeParam);
  const canonical = resolveLearnCanonicalRedirect(
    `/${localeParam}/${learnRoot}/${slug}`,
  );
  if (canonical) redirect(canonical);

  const lesson = getLearnLesson(slug, locale);

  if (!lesson) {
    const fallback = getLearnLesson(slug);
    if (!fallback) notFound();
    const available = fallback.locales[0] as Locale;
    redirect(
      localizedPath(available, getLearnLessonPath(available, fallback.slug)),
    );
  }

  const route = findLearnRouteBySlug(slug);
  const expectedSlug = route ? getLearnSlugForLocale(route, locale) : slug;
  if (expectedSlug && expectedSlug !== slug) {
    redirect(localizedPath(locale, getLearnLessonPath(locale, expectedSlug)));
  }

  return <LearnLesson lesson={lesson} locale={locale} />;
}
