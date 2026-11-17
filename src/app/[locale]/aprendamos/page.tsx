import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { learnLessons } from "@/content/learn/catalog";
import { learnUi } from "@/content/learn/es/ui";
import { learnIndexLocales } from "@/content/learn/routes";
import { parseLocale } from "@/i18n/parseLocale";
import type { Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/metadata";
import { localizedPath } from "@/lib/localizedPath";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/ui/PageHero";
import { NeuronArt } from "@/components/learn/illustrations/NeuronArt";

interface LearnIndexPageProps {
  params: Promise<{ locale: string }>;
}

function publishedLocale(locale: Locale): Locale {
  return learnIndexLocales.some((item) => item === locale)
    ? locale
    : learnIndexLocales[0];
}

export function generateStaticParams() {
  return learnIndexLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LearnIndexPageProps): Promise<Metadata> {
  const locale = publishedLocale(parseLocale((await params).locale));

  return buildPageMetadata({
    title: learnUi.indexMetaTitle,
    description: learnUi.indexDescription,
    path: "/aprendamos",
    fullTitle: true,
    locale,
    availableLocales: learnIndexLocales,
  });
}

export default async function LearnIndexPage({ params }: LearnIndexPageProps) {
  const locale = parseLocale((await params).locale);

  if (!learnIndexLocales.some((item) => item === locale)) {
    redirect(localizedPath(learnIndexLocales[0], "/aprendamos"));
  }

  const lessons = learnLessons.filter((lesson) =>
    lesson.locales.some((item) => item === locale),
  );

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
              <NeuronArt label={lesson.scenes[0]?.textAlternative ?? lesson.title} />
            </div>
            <div className="min-w-0 md:col-span-7">
              <p className="text-overline text-muted">{learnUi.indexTitle}</p>
              <h2 className="font-display mt-3 max-w-[22ch] text-[length:var(--heading-2)] leading-[1.1] text-brand">
                <Link
                  href={localizedPath(locale, `/aprendamos/${lesson.slug}`)}
                  className="transition-colors duration-200 hover:text-accent-violet"
                >
                  {lesson.title}
                </Link>
              </h2>
              <p className="mt-4 max-w-[48ch] text-[length:var(--body)] leading-relaxed text-muted">
                {lesson.cardDescription}
              </p>
              <p className="mt-5">
                <Link
                  href={localizedPath(locale, `/aprendamos/${lesson.slug}`)}
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
