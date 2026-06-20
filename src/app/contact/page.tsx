import type { Metadata } from "next";
import { siteContent } from "@/content";
import { profile, getCvDownloadName, getCvUrl } from "@/data/profile";
import { buildPageMetadata } from "@/lib/metadata";
import { getUrlHost, getUrlPath } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildPageMetadata({
  title: siteContent.meta.pages.contact.title,
  description: siteContent.meta.pages.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  const { contactPage } = siteContent;

  const contactLinks = [
    {
      label: contactPage.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
    },
    {
      label: contactPage.linkedin,
      value: getUrlHost(profile.linkedin),
      href: profile.linkedin,
      external: true,
    },
    {
      label: contactPage.github,
      value: `${getUrlHost(profile.github)}/${getUrlPath(profile.github)}`,
      href: profile.github,
      external: true,
    },
  ];

  return (
    <Section>
      <SectionTitle title={contactPage.title} subtitle={contactPage.subtitle} />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
        <div className="space-y-4">
          {contactLinks.map((link) => (
            <div key={link.label} className="card-surface p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                {link.label}
              </p>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="mt-2 inline-block text-base font-medium text-accent transition-colors hover:text-accent-hover"
              >
                {link.value}
              </a>
            </div>
          ))}
        </div>

        <div className="card-surface p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">
            {contactPage.cv}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {contactPage.availability}
          </p>
          <div className="mt-6">
            <Button href={getCvUrl()} download={getCvDownloadName()}>
              {contactPage.cv}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
