import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { profile } from "@/data/profile";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

interface ContactCTAProps {
  locale: Locale;
  content: SiteContent["contactCta"];
}

export function ContactCTA({ content }: ContactCTAProps) {
  return (
    <Section id="contact" variant="muted">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:items-end">
        <div>
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-[1.2] tracking-tight text-foreground">
            {content.title}
          </h2>
          <p className="mt-4 max-w-[65ch] text-[clamp(1.125rem,1.5vw,1.25rem)] leading-[1.5] text-muted">
            {content.description}
          </p>
        </div>
        <Button href={profile.linkedin} external size="lg">
          {content.button}
        </Button>
      </div>
    </Section>
  );
}
