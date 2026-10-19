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
import { LearnFrame } from "@/components/learn/LearnFrame";
import { NeuronFigure } from "@/components/learn/illustrations/NeuronFigure";

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
      <h1 className="max-w-[16ch] text-[clamp(2.375rem,4vw,3.75rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
        {learnUi.indexTitle}
      </h1>
      <p className="mt-6 max-w-[65ch] leading-relaxed text-muted">{learnUi.indexIntro}</p>
      <div className="mt-12 grid gap-10">
        {lessons.map((lesson) => (
          <article
            key={lesson.slug}
            className="grid gap-6 border-t border-border pt-10 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] md:items-center"
          >
            <LearnFrame>
              <NeuronFigure label={lesson.scenes[0]?.textAlternative ?? lesson.title} />
            </LearnFrame>
            <div className="min-w-0">
              <h2 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-semibold leading-[1.25] text-foreground">
                <Link
                  href={localizedPath(locale, `/aprendamos/${lesson.slug}`)}
                  className="transition-colors duration-150 hover:text-accent"
                >
                  {lesson.title}
                </Link>
              </h2>
              <p className="mt-4 max-w-[65ch] leading-relaxed text-muted">
                {lesson.cardDescription}
              </p>
              <p className="mt-5">
                <Link
                  href={localizedPath(locale, `/aprendamos/${lesson.slug}`)}
                  className="prose-link font-semibold"
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
