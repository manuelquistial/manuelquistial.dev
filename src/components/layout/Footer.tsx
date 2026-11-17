import type { SiteContent } from "@/content";
import { profile } from "@/data/profile";
import { Container } from "@/components/layout/Container";
import { pageSections } from "@/lib/pageSections";

interface FooterProps {
  content: Pick<SiteContent, "footer" | "contactPage" | "contactCta">;
}

export function Footer({ content }: FooterProps) {
  const year = new Date().getFullYear();
  const { footer, contactPage, contactCta } = content;

  return (
    <footer
      id={pageSections.contact}
      className="mt-auto bg-footer-background text-footer-text"
    >
      <Container className="grid gap-12 py-[var(--footer-y)] md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5 lg:col-span-4">
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] text-footer-text">
            {contactCta.title}
          </h2>
          <p className="mt-6 max-w-[32ch] text-[length:var(--body)] leading-[1.5] text-footer-muted">
            {contactCta.description}
          </p>
        </div>

        <div className="flex flex-col gap-4 md:col-span-4 md:justify-end lg:col-span-4 lg:col-start-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center text-[length:var(--body)] font-semibold text-footer-text transition-colors duration-200 hover:text-accent-yellow"
          >
            {contactPage.linkedin}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center text-[length:var(--body)] font-semibold text-footer-text transition-colors duration-200 hover:text-accent-yellow"
          >
            {contactPage.github}
          </a>
        </div>

        <div className="flex flex-col justify-end gap-3 border-t border-white/10 pt-8 md:col-span-3 md:border-t-0 md:pt-0 lg:col-span-3 lg:items-end lg:text-right">
          <p className="text-sm text-footer-muted">{profile.location}</p>
          <p className="mt-2 text-sm text-footer-muted">
            © {year} manuelquistial.dev. {footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
