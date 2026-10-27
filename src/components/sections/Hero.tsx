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
import { Button } from "@/components/ui/Button";

interface HeroProps {
  locale: Locale;
  content: SiteContent["hero"];
}

export function Hero({ locale, content }: HeroProps) {
  const learn = localizedPathForAvailableContent(locale, "/aprendamos");

  return (
    <section className="bg-background">
      <Container className="pb-10 pt-14 md:pb-12 md:pt-16 lg:pb-16 lg:pt-20">
        <p className="text-base font-semibold text-foreground" translate="no">
          {profile.shortName}
        </p>
        <h1 className="mt-6 max-w-[16ch] text-balance text-[clamp(2.375rem,5vw,3.75rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
          {content.title}
        </h1>
        <p className="mt-6 max-w-[65ch] text-[clamp(1.125rem,1.6vw,1.25rem)] leading-[1.5] text-muted">
          {content.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button
            href={localizedSectionPath(
              locale,
              "",
              pageSections.selectedProjects,
            )}
            size="lg"
          >
            {content.viewProjects}
          </Button>
          <Button
            href={localizedPath(locale, "/about")}
            variant="outline"
            size="lg"
          >
            {content.viewExperience}
          </Button>
        </div>
        <p className="mt-6 max-w-[65ch] text-sm leading-relaxed text-muted">
          <Link
            href={learn.href}
            lang={learn.lang}
            hrefLang={learn.lang}
            className="font-semibold text-accent transition-colors duration-150 hover:text-accent-hover"
          >
            {content.learnLabel}
          </Link>
          <span> {content.learnNote}</span>
        </p>
      </Container>
    </section>
  );
}
