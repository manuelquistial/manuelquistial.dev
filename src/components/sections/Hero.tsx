import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { profile } from "@/data/profile";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { localizedPath } from "@/lib/utils";

interface HeroProps {
  locale: Locale;
  content: Dictionary["hero"];
  unavailableLabel: string;
}

export function Hero({ locale, content, unavailableLabel }: HeroProps) {
  return (
    <section className="border-b border-border bg-surface/40">
      <Container as="section" className="py-20 sm:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {profile.name}
        </p>
        <p className="mt-2 text-sm text-muted">
          {profile.role} · {profile.location}
        </p>
        <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {content.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/90">
          {content.subtitle}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          {content.secondary}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={localizedPath(locale, "/projects")}>
            {content.viewProjects}
          </Button>
          <Button
            href={profile.cvUrl || undefined}
            external={profile.cvUrl.startsWith("http")}
            variant="secondary"
            disabled={!profile.cvUrl}
            disabledTitle={unavailableLabel}
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
