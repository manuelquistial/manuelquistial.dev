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
  const lesson = getLearnLesson(slug);
  const locale = parseLocale(localeParam);
  const published = lesson?.locales.includes(locale)
    ? locale
    : lesson?.locales[0];

  if (!lesson || !published) {
    return {};
  }

  return buildPageMetadata({
    title: lesson.metaTitle,
    description: lesson.description,
    path: `/aprendamos/${lesson.slug}`,
    fullTitle: true,
    locale: published,
    availableLocales: lesson.locales,
  });
}

export default async function LearnLessonPage({ params }: LearnLessonPageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = parseLocale(localeParam);
  const lesson = getLearnLesson(slug);

  if (!lesson) notFound();

  if (!lesson.locales.includes(locale)) {
    const available = lesson.locales[0] as Locale;
    redirect(localizedPath(available, `/aprendamos/${lesson.slug}`));
  }

  return <LearnLesson lesson={lesson} locale={locale} />;
}
