import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { profile, getCvDownloadName, getCvUrl } from "@/data/profile";
import { localizedPath } from "@/lib/localizedPath";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  locale: Locale;
  content: SiteContent["hero"];
}

export function Hero({ locale, content }: HeroProps) {
  return (
    <section className="border-b border-border bg-[radial-gradient(ellipse_at_top,_var(--accent-muted)_0%,_transparent_55%)]">
      <Container as="section" className="py-20 sm:py-28 lg:py-32">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {profile.name}
        </p>
        <p className="mt-3 text-sm text-muted">{profile.location}</p>
        <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
          {content.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/90">
          {content.subtitle}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          {content.secondary}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={localizedPath(locale, "/projects")}>{content.viewProjects}</Button>
          <Button
            href={getCvUrl(locale)}
            download={getCvDownloadName(locale)}
            variant="secondary"
          >
            {content.downloadCv}
          </Button>
          <Button href={profile.linkedin} external variant="outline">
            {content.linkedin}
          </Button>
          <Button href={profile.github} external variant="ghost">
            {content.github}
          </Button>
        </div>
      </Container>
    </section>
  );
}
