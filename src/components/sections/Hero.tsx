import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { profile, getCvDownloadName, getCvUrl } from "@/data/profile";
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
    <section className="border-b border-zinc-800 bg-zinc-950">
      <Container as="section" className="py-0">
        <div className="grid lg:grid-cols-[3fr_2fr]">
          <div className="border-b border-zinc-800 py-16 sm:py-20 lg:border-b-0 lg:border-r lg:py-24 lg:pr-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {profile.name}
            </p>
            <p className="mt-3 font-mono text-xs text-zinc-400">
              {profile.location}
            </p>
            <h1 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
              {content.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-50">
              {content.subtitle}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
              {content.secondary}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                href={localizedSectionPath(
                  locale,
                  "/research",
                  pageSections.researchOverview,
                )}
                size="lg"
              >
                {content.exploreResearch}
              </Button>
              <Button
                href={localizedSectionPath(
                  locale,
                  "/projects",
                  pageSections.engineering,
                )}
                variant="outline"
                size="lg"
              >
                {content.viewEngineering}
              </Button>
            </div>
          </div>

          <aside className="flex flex-col justify-between gap-10 bg-zinc-900/40 py-16 sm:py-20 lg:py-24 lg:pl-12">
            <div className="space-y-4 border border-zinc-800 bg-zinc-900 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
                {content.focusLabel}
              </p>
              <ul className="space-y-3 text-sm leading-relaxed text-zinc-400">
                {content.focusItems.map((item, index) => (
                  <li
                    key={item}
                    className={
                      index === 0
                        ? "border-l-2 border-accent/50 pl-3 text-zinc-50"
                        : "border-l-2 border-zinc-700 pl-3"
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                href={getCvUrl(locale)}
                download={getCvDownloadName(locale)}
                variant="secondary"
                size="sm"
              >
                {content.downloadCv}
              </Button>
              <Button href={profile.linkedin} external variant="ghost" size="sm">
                {content.linkedin}
              </Button>
              <Button href={profile.github} external variant="ghost" size="sm">
                {content.github}
              </Button>
              <Button
                href={localizedPath(locale, "/contact")}
                variant="ghost"
                size="sm"
              >
                {content.contact}
              </Button>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
