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
        "inline-flex shrink-0 items-center rounded-[6px] border border-border bg-surface p-0.5",
        className,
      )}
    >
      {locales.map((item) => {
        const isActive = item === locale;
        const target = switchLocaleHref(pathname, item);
        const ariaLabel = target.fallback
          ? `${localeLabels[item]}. ${labels.unavailableHere}`
          : localeLabels[item];

        return (
          <Link
            key={item}
            href={target.href}
            hrefLang={item}
            lang={item}
            aria-label={ariaLabel}
            title={target.fallback ? labels.unavailableHere : undefined}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center rounded-[6px] px-2.5 text-sm font-semibold uppercase tracking-wide transition-colors duration-150",
              isActive
                ? "bg-surface-soft text-foreground"
                : "text-muted hover:bg-surface-soft hover:text-foreground",
            )}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
