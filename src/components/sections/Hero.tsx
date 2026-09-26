import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { profile } from "@/data/profile";
import { localizedPath, localizedSectionPath } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  locale: Locale;
  content: SiteContent["hero"];
}

export function Hero({ locale, content }: HeroProps) {
  return (
    <section className="bg-background">
      <Container className="pb-10 pt-14 md:pb-12 md:pt-16 lg:pb-16 lg:pt-20">
        <p className="text-base font-semibold text-foreground">
          {profile.shortName}
        </p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end lg:gap-12">
          <h1 className="max-w-[16ch] text-[clamp(2.375rem,5vw,3.75rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
            {content.title}
          </h1>
          <p className="max-w-[42ch] text-[clamp(1.125rem,1.6vw,1.25rem)] leading-[1.5] text-muted lg:justify-self-end">
            {content.subtitle}
          </p>
        </div>
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
            href={localizedPath(locale, "/contact")}
            variant="outline"
            size="lg"
          >
            {content.contact}
          </Button>
        </div>
      </Container>
    </section>
  );
}
