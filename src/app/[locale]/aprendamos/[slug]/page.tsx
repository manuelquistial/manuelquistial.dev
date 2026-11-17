import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getLearnLesson } from "@/content/learn/catalog";
import { learnRoutes } from "@/content/learn/routes";
import { parseLocale } from "@/i18n/parseLocale";
import type { Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/metadata";
import { localizedPath } from "@/lib/localizedPath";
import { LearnLesson } from "@/components/learn/LearnLesson";

interface LearnLessonPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return learnRoutes.flatMap((route) =>
    route.locales.map((locale) => ({
      locale,
      slug: route.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: LearnLessonPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = parseLocale(localeParam);
  const lesson = getLearnLesson(slug, locale) ?? getLearnLesson(slug);
  const published = lesson?.locales.includes(locale)
    ? locale
    : lesson?.locales[0];

  if (!lesson || !published) {
    return {};
  }

  const localized = getLearnLesson(slug, published) ?? lesson;

  return buildPageMetadata({
    title: localized.metaTitle,
    description: localized.description,
    path: `/aprendamos/${localized.slug}`,
    fullTitle: true,
    locale: published,
    availableLocales: learnRoutes.find((route) => route.slug === slug)?.locales ?? lesson.locales,
  });
}

export default async function LearnLessonPage({ params }: LearnLessonPageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = parseLocale(localeParam);
  const lesson = getLearnLesson(slug, locale);

  if (!lesson) {
    const fallback = getLearnLesson(slug);
    if (!fallback) notFound();
    const available = fallback.locales[0] as Locale;
    redirect(localizedPath(available, `/aprendamos/${fallback.slug}`));
  }

  return <LearnLesson lesson={lesson} locale={locale} />;
}
