import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { profile } from "@/data/profile";
import { Container } from "@/components/layout/Container";
import { NavLinks } from "@/components/layout/NavLinks";
import { pageSections } from "@/lib/pageSections";

interface FooterProps {
  locale: Locale;
  content: Pick<
    SiteContent,
    "footer" | "contactPage" | "contactCta" | "nav" | "a11y"
  >;
}

export function Footer({ locale, content }: FooterProps) {
  const year = new Date().getFullYear();
  const { footer, contactPage, contactCta, nav, a11y } = content;

  return (
    <footer
      id={pageSections.contact}
      className="mt-auto bg-footer-background text-footer-text"
    >
      <Container className="pt-[var(--footer-y)] pb-8 md:pb-9">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
          <div className="max-w-[28rem] lg:flex-1">
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.25rem)] leading-[1.05] text-footer-text">
              {contactCta.title}
            </h2>
            <p className="mt-4 text-[length:var(--body)] leading-[1.5] text-footer-muted">
              {contactCta.description}
            </p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center text-[length:var(--body)] font-semibold text-accent-yellow transition-colors duration-200 hover:text-white"
            >
              {contactCta.button}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-14 lg:w-[min(100%,22rem)] lg:shrink-0">
            <div>
              <p className="text-sm font-medium text-footer-muted">{a11y.menu}</p>
              <NavLinks
                locale={locale}
                nav={nav}
                ariaLabel={a11y.mainNav}
                numbered={false}
                className="mt-4 flex flex-col gap-2.5"
                linkClassName="text-[length:var(--body)] font-semibold text-footer-text transition-colors duration-200 hover:text-accent-yellow aria-[current=page]:text-accent-yellow"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-footer-muted">
                {footer.social}
              </p>
              <div className="mt-4 flex flex-col gap-2.5">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[length:var(--body)] font-semibold text-footer-text transition-colors duration-200 hover:text-accent-yellow"
                >
                  {contactPage.linkedin}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[length:var(--body)] font-semibold text-footer-text transition-colors duration-200 hover:text-accent-yellow"
                >
                  {contactPage.github}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5">
          <p className="text-sm text-footer-muted">
            © {year} manuelquistial.dev. {footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
