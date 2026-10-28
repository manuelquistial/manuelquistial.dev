"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales, localeLabels } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { switchLocaleHref } from "@/lib/localizedPath";
import { cn } from "@/lib/utils";

interface LocaleSwitcherProps {
  locale: Locale;
  labels: SiteContent["languageSwitcher"];
  className?: string;
}

export function LocaleSwitcher({
  locale,
  labels,
  className,
}: LocaleSwitcherProps) {
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={labels.label}
      className={cn(
        "inline-flex shrink-0 items-center gap-1 text-overline",
        className,
      )}
    >
      {locales.map((item, index) => {
        const isActive = item === locale;
        const target = switchLocaleHref(pathname, item);
        const ariaLabel = target.fallback
          ? `${localeLabels[item]}. ${labels.unavailableHere}`
          : localeLabels[item];

        return (
          <span key={item} className="inline-flex items-center gap-1">
            {index > 0 ? (
              <span className="text-muted" aria-hidden="true">
                /
              </span>
            ) : null}
            <Link
              href={target.href}
              hrefLang={item}
              lang={item}
              aria-label={ariaLabel}
              title={target.fallback ? labels.unavailableHere : undefined}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center px-1 uppercase transition-colors duration-200",
                isActive
                  ? "text-accent"
                  : "text-foreground hover:text-accent",
              )}
            >
              {isActive ? (
                <span className="mr-1.5 inline-block size-1.5 rounded-full bg-accent" aria-hidden="true" />
              ) : null}
              {item}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
