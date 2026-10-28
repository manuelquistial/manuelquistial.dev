import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedPathForAvailableContent } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { NeuronArt } from "@/components/learn/illustrations/NeuronArt";

interface AprendamosLessonItem {
  slug: string;
  title: string;
  imageLabel: string;
}

interface AprendamosPreviewProps {
  locale: Locale;
  sectionLabel: string;
  intro: string;
  exploreLabel: string;
  lessons: readonly AprendamosLessonItem[];
}

export function AprendamosPreview({
  locale,
  sectionLabel,
  intro,
  exploreLabel,
  lessons,
}: AprendamosPreviewProps) {
  return (
    <Section id={pageSections.learn} variant="bordered">
      <SectionHeader number="03" label={sectionLabel} description={intro} />

      <div className="mt-12 md:mt-16">
        {lessons.slice(0, 3).map((lesson, index) => {
          const href = localizedPathForAvailableContent(
            locale,
            `/aprendamos/${lesson.slug}`,
          );

          return (
            <article
              key={lesson.slug}
              className="grid gap-6 border-t border-border py-8 md:grid-cols-12 md:items-center md:gap-8 md:py-10"
            >
              <div className="md:col-span-1">
                <span
                  className="font-display text-[clamp(2rem,4vw,3rem)] text-foreground"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="overflow-hidden border border-border bg-[#eef3f6] md:col-span-3">
                <NeuronArt label={lesson.imageLabel} />
              </div>
              <div className="min-w-0 md:col-span-8">
                <h3 className="max-w-[22ch] text-[length:var(--heading-2)] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground">
                  <Link
                    href={href.href}
                    lang={href.lang}
                    hrefLang={href.lang}
                    className="transition-colors duration-200 hover:text-accent"
                  >
                    {lesson.title}
                  </Link>
                </h3>
                <p className="mt-4">
                  <Link
                    href={href.href}
                    lang={href.lang}
                    hrefLang={href.lang}
                    className="text-[length:var(--small)] font-semibold text-foreground transition-colors duration-200 hover:text-accent"
                  >
                    {exploreLabel}
                  </Link>
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
