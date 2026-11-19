import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getLearnLessonsForLocale } from "@/content/learn/catalog";
import { getLearnUi } from "@/content/learn/ui";
import {
  getLearnBasePath,
  getLearnLessonPath,
  isLearnBaseSegment,
  learnIndexLocales,
  resolveLearnCanonicalRedirect,
} from "@/content/learn/routes";
import { parseLocale } from "@/i18n/parseLocale";
import type { Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/metadata";
import { localizedPath } from "@/lib/localizedPath";
import { Section } from "@/components/layout/Section";
import { LocalDateTime } from "@/components/ui/LocalDateTime";
import { PageHero } from "@/components/ui/PageHero";
import { NeuronArt } from "@/components/learn/illustrations/NeuronArt";
import { SkillSecurityArt } from "@/components/learn/skill-security/SkillSecurityArt";

interface LearnIndexPageProps {
  params: Promise<{ locale: string; learnRoot: string }>;
}

function publishedLocale(locale: Locale): Locale {
  return learnIndexLocales.some((item) => item === locale)
    ? locale
    : learnIndexLocales[0];
}

export function generateStaticParams() {
  return learnIndexLocales.map((locale) => ({
    locale,
    learnRoot: getLearnBasePath(locale).slice(1),
  }));
}

export async function generateMetadata({
  params,
}: LearnIndexPageProps): Promise<Metadata> {
  const { locale: localeParam, learnRoot } = await params;
  if (!isLearnBaseSegment(learnRoot)) return {};

  const locale = publishedLocale(parseLocale(localeParam));
  const learnUi = getLearnUi(locale);

  return buildPageMetadata({
    title: learnUi.indexMetaTitle,
    description: learnUi.indexDescription,
    path: getLearnBasePath(locale),
    fullTitle: true,
    locale,
    availableLocales: learnIndexLocales,
  });
}

export default async function LearnIndexPage({ params }: LearnIndexPageProps) {
  const { locale: localeParam, learnRoot } = await params;
  if (!isLearnBaseSegment(learnRoot)) notFound();

  const locale = parseLocale(localeParam);
  const canonical = resolveLearnCanonicalRedirect(
    `/${localeParam}/${learnRoot}`,
  );
  if (canonical) redirect(canonical);

  if (!learnIndexLocales.some((item) => item === locale)) {
    redirect(localizedPath(learnIndexLocales[0], getLearnBasePath(learnIndexLocales[0])));
  }

  const learnUi = getLearnUi(locale);
  const lessons = getLearnLessonsForLocale(locale);

  return (
    <Section containerClassName="overflow-x-clip">
      <PageHero
        tone="learn"
        title={learnUi.indexTitle}
        description={learnUi.indexIntro}
        illustration="learn"
      />
      <div className="mt-[var(--section-y)]">
        {lessons.map((lesson, index) => (
          <article
            key={lesson.slug}
            className="grid gap-6 border-t border-border py-[var(--section-y)] md:grid-cols-12 md:items-center md:gap-8"
          >
            <div className="md:col-span-1">
              <span
                className="font-display text-[clamp(2rem,4vw,3rem)] text-brand"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="gp-module overflow-hidden border border-border bg-surface-soft md:col-span-4">
              {lesson.cardArt === "skill-security" ? (
                <SkillSecurityArt label={lesson.cardImageLabel} />
              ) : (
                <NeuronArt label={lesson.cardImageLabel} />
              )}
            </div>
            <div className="min-w-0 md:col-span-7">
              <p className="text-overline text-muted">{learnUi.indexTitle}</p>
              <h2 className="font-display mt-3 max-w-[22ch] text-[length:var(--heading-2)] leading-[1.1] text-brand">
                <Link
                  href={localizedPath(locale, getLearnLessonPath(locale, lesson.slug))}
                  className="transition-colors duration-200 hover:text-accent-violet"
                >
                  {lesson.title}
                </Link>
              </h2>
              <LocalDateTime
                className="mt-3"
                dateTime={lesson.publishedAt}
                locale={locale}
                label={`${learnUi.publishedLabel}:`}
              />
              <p className="mt-4 max-w-[48ch] text-[length:var(--body)] leading-relaxed text-muted">
                {lesson.cardDescription}
              </p>
              <p className="mt-5">
                <Link
                  href={localizedPath(locale, getLearnLessonPath(locale, lesson.slug))}
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-brand transition-colors duration-200 hover:text-accent-violet"
                >
                  {learnUi.explore}
                </Link>
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
