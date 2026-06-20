import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { localizedPath } from "@/lib/localizedPath";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

interface ContactCTAProps {
  locale: Locale;
  content: SiteContent["contactCta"];
}

export function ContactCTA({ locale, content }: ContactCTAProps) {
  return (
    <Section border>
      <div className="card-surface rounded-2xl p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {content.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{content.description}</p>
        </div>
        <div className="mt-8 shrink-0 lg:mt-0">
          <Button href={localizedPath(locale, "/contact")} size="lg">
            {content.button}
          </Button>
        </div>
      </div>
    </Section>
  );
}
