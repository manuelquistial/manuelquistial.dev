import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { localizedPath } from "@/lib/utils";

interface ContactCTAProps {
  locale: Locale;
  content: Dictionary["contactCta"];
}

export function ContactCTA({ locale, content }: ContactCTAProps) {
  return (
    <section className="border-t border-border">
      <Container className="py-16 sm:py-20">
        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {content.title}
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{content.description}</p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <Button href={localizedPath(locale, "/contact")} size="lg">
              {content.button}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
