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
        const isActive =
          pathname === href || pathname.startsWith(`${href}/`);
        const label = nav[item.key];

        return (
          <Link
            key={item.key}
            href={href}
            lang={lang}
            hrefLang={lang}
            aria-label={
              lang && lang !== locale ? `${label} (${localeLabels[lang]})` : undefined
            }
            aria-current={isActive ? "page" : undefined}
            onClick={onNavigate}
            className={cn(
              "text-overline transition-colors duration-200",
              linkClassName,
              isActive
                ? "text-accent"
                : "text-foreground hover:text-accent",
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
