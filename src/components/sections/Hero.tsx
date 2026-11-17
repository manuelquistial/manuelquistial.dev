import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { IconArrowRight } from "@/components/icons";
import { SpotIllustration } from "@/components/ui/SpotIllustration";
import { localizedSectionPath } from "@/lib/localizedPath";
import { pageSections } from "@/lib/pageSections";
import { Container } from "@/components/layout/Container";

interface HeroProps {
  locale: Locale;
  content: SiteContent["hero"];
}

export function Hero({ locale, content }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      <Container className="grid items-center gap-8 py-[var(--section-y)] lg:grid-cols-12 lg:gap-10">
        <div className="relative z-[1] lg:col-span-6">
          <p className="text-[length:var(--body-lg)] font-medium text-muted">
            {content.greeting}
          </p>

          <h1 className="font-display mt-3 text-[length:var(--display-xl)] text-brand">
            {content.headline}
          </h1>

          <p className="mt-5 max-w-[36rem] text-[length:var(--body)] leading-relaxed text-muted">
            {content.descriptor}
          </p>

          <p className="mt-4 text-sm font-semibold text-brand">{content.note}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={localizedSectionPath(
                locale,
                "",
                pageSections.selectedProjects,
              )}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-button)] bg-brand px-6 text-[length:var(--body)] font-semibold text-white transition-colors duration-200 hover:bg-brand-hover"
            >
              {content.viewProjects}
              <IconArrowRight className="size-[1.1em]" />
            </Link>
          </div>
        </div>

        <div className="relative flex min-h-[18rem] items-center justify-center lg:col-span-6 lg:min-h-[24rem] lg:justify-end">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-[6%] top-[8%] h-44 w-44 rounded-full bg-accent-yellow sm:h-52 sm:w-52 lg:left-[4%] lg:top-[4%] lg:h-56 lg:w-56" />
            <div className="absolute right-[2%] top-[22%] h-36 w-36 rounded-full bg-accent-coral sm:h-44 sm:w-44 lg:right-0 lg:top-[18%] lg:h-48 lg:w-48" />
            <div className="absolute bottom-[6%] left-[28%] h-24 w-24 rounded-full bg-accent-violet/45 sm:h-28 sm:w-28 lg:bottom-[8%] lg:left-[24%] lg:h-32 lg:w-32" />
          </div>
          <SpotIllustration
            id="wave"
            alt=""
            priority
            size="hero"
            sizes="(min-width: 1280px) 384px, (min-width: 1024px) 352px, 288px"
            className="relative z-[1] drop-shadow-[0_18px_40px_rgba(26,35,78,0.16)]"
          />
        </div>
      </Container>
    </section>
  );
}
