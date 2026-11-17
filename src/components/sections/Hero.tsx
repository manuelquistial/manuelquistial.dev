import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { IconArrowRight } from "@/components/icons";
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
      <Container className="grid items-center gap-10 py-[var(--section-y)] lg:grid-cols-12 lg:gap-8">
        <div className="relative z-[1] lg:col-span-7">
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

        <div
          className="relative hidden min-h-[14rem] lg:col-span-5 lg:block"
          aria-hidden
        >
          <div className="absolute left-[8%] top-[10%] h-48 w-48 rounded-full bg-accent-yellow" />
          <div className="absolute right-[4%] top-[28%] h-40 w-40 rounded-full bg-accent-coral" />
          <div className="absolute bottom-[8%] left-[28%] h-28 w-28 rounded-full bg-accent-violet/40" />
        </div>
      </Container>
    </section>
  );
}
