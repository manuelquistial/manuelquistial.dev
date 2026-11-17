"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { localeLabels } from "@/i18n/config";
import { navItems } from "@/config/navigation";
import { localizedPathForAvailableContent } from "@/lib/localizedPath";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  locale: Locale;
  nav: SiteContent["nav"];
  ariaLabel: string;
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
  numbered?: boolean;
}

export function NavLinks({
  locale,
  nav,
  ariaLabel,
  className,
  linkClassName,
  onNavigate,
  numbered = true,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label={ariaLabel}>
      {navItems.map((item) => {
        const { href, lang } = localizedPathForAvailableContent(locale, item.path);
        const hash = "hash" in item ? item.hash : undefined;
        const fullHref = hash ? `${href}#${hash}` : href;
        const isActive =
          pathname === href || pathname.startsWith(`${href}/`);
        const label = nav[item.key];

        return (
          <Link
            key={item.key}
            href={fullHref}
            lang={lang}
            hrefLang={lang}
            aria-label={
              lang && lang !== locale ? `${label} (${localeLabels[lang]})` : undefined
            }
            aria-current={isActive ? "page" : undefined}
            onClick={() => {
              onNavigate?.();
              if (!hash || pathname !== href) return;
              // Same-route hash links: ensure scroll even if the router skips navigation.
              requestAnimationFrame(() => {
                const target = document.getElementById(hash);
                if (!target) return;
                const reduced = window.matchMedia(
                  "(prefers-reduced-motion: reduce)",
                ).matches;
                target.scrollIntoView({
                  behavior: reduced ? "auto" : "smooth",
                  block: "start",
                });
              });
            }}
            className={cn(
              "transition-colors duration-200",
              linkClassName
                ? linkClassName
                : cn(
                    "text-overline",
                    isActive
                      ? "text-brand underline decoration-2 underline-offset-8"
                      : "text-foreground hover:text-accent-violet",
                  ),
            )}
          >
            {numbered ? (
              <span className="inline-flex items-baseline gap-1">
                <span aria-hidden="true" className="text-muted">
                  {item.number}.
                </span>
                <span>{label}</span>
              </span>
            ) : (
              label
            )}
          </Link>
        );
      })}
    </nav>
  );
}
