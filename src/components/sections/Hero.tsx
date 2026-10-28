import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { profile } from "@/data/profile";
import {
  localizedPath,
  localizedPathForAvailableContent,
  localizedSectionPath,
} from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";
import { Container } from "@/components/layout/Container";

interface HeroProps {
  locale: Locale;
  content: SiteContent["hero"];
  imageSrc?: string;
  imageAlt?: string;
}

export function Hero({
  locale,
  content,
  imageSrc = "/images/projects/babel-scores.jpg",
  imageAlt = "",
}: HeroProps) {
  const learn = localizedPathForAvailableContent(locale, "/aprendamos");
  const [firstName, ...restName] = profile.shortName.split(" ");
  const lastName = restName.join(" ");

  return (
    <section className="bg-background">
      <Container className="grid min-h-[min(90vh,56rem)] gap-10 pb-16 pt-10 md:gap-12 md:pb-20 md:pt-12 lg:grid-cols-12 lg:items-stretch lg:gap-12 lg:pb-24 lg:pt-16">
        <div className="flex flex-col justify-center lg:col-span-5">
          <p className="text-overline text-muted">
            <span className="block">{content.overlinePrimary}</span>
            <span className="mt-1 block">{content.overlineSecondary}</span>
          </p>

          <h1
            className="font-display mt-8 text-[clamp(3.25rem,12vw,7.5rem)] uppercase text-foreground md:mt-10"
            translate="no"
          >
            <span className="block">{firstName}</span>
            {lastName ? <span className="block">{lastName}</span> : null}
          </h1>

          <p className="mt-8 max-w-[32rem] text-[length:var(--body)] leading-[1.45] text-muted md:mt-10">
            {content.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href={localizedSectionPath(
                locale,
                "",
                pageSections.selectedProjects,
              )}
              className="group inline-flex items-center gap-3 text-[length:var(--body)] font-semibold text-foreground transition-colors duration-200 hover:text-accent"
            >
              <span
                className="inline-flex size-8 items-center justify-center rounded-full bg-accent text-white transition-colors duration-200 group-hover:bg-accent-hover"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="size-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {content.viewProjects}
            </Link>
            <Link
              href={localizedPath(locale, "/about")}
              className="text-[length:var(--body)] font-semibold text-foreground transition-colors duration-200 hover:text-accent"
            >
              {content.viewExperience}
            </Link>
          </div>

          <p className="mt-8 max-w-[32rem] text-sm leading-relaxed text-muted">
            <Link
              href={learn.href}
              lang={learn.lang}
              hrefLang={learn.lang}
              className="font-semibold text-foreground transition-colors duration-200 hover:text-accent"
            >
              {content.learnLabel}
            </Link>
            <span> {content.learnNote}</span>
          </p>
        </div>

        <div className="relative min-h-[22rem] w-full overflow-hidden bg-surface lg:col-span-7 lg:min-h-[min(72vh,42rem)]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="editorial-image object-cover object-center"
          />
        </div>
      </Container>
    </section>
  );
}
