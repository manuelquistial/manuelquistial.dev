import type { Metadata } from "next";
import { getSiteContent } from "@/content/getSiteContent";
import { profile, getCvDownloadName, getCvUrl } from "@/data/profile";
import { parseLocale } from "@/i18n/parseLocale";
import { buildPageMetadata } from "@/lib/metadata";
import { getUrlHost, getUrlPath } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const content = getSiteContent(locale);

  return buildPageMetadata({
    title: content.meta.pages.contact.title,
    description: content.meta.pages.contact.description,
    path: "/contact",
    fullTitle: true,
    locale,
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const locale = parseLocale((await params).locale);
  const content = getSiteContent(locale);
  const { contactPage, contactCta } = content;

  return (
    <Section>
      <SectionTitle
        as="h1"
        title={contactPage.title}
        subtitle={contactPage.subtitle}
      />

      <div className="mt-2 max-w-[40rem] space-y-8">
        <Button href={profile.linkedin} external size="lg">
          {contactCta.button}
        </Button>

        <div>
          <Button
            href={getCvUrl(locale)}
            download={getCvDownloadName(locale)}
            variant="outline"
          >
            {contactPage.cv}
          </Button>
        </div>

        <div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-accent transition-colors duration-150 hover:text-accent-hover"
          >
            {contactPage.github}
          </a>
          <p className="mt-1 break-all text-sm text-muted">
            {`${getUrlHost(profile.github)}/${getUrlPath(profile.github)}`}
          </p>
        </div>
      </div>
    </Section>
  );
}
