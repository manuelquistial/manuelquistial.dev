"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/i18n/config";
import { cn, localizedPath, stripLocale } from "@/lib/utils";

interface LocaleSwitcherProps {
  locale: Locale;
}

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const pathWithoutLocale = stripLocale(pathname);

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <Link
          key={loc}
          href={localizedPath(loc, pathWithoutLocale)}
          className={cn(
            "rounded-md px-2 py-1 text-xs font-medium uppercase tracking-wide transition-colors",
            loc === locale
              ? "bg-accent/10 text-accent"
              : "text-muted hover:text-foreground",
          )}
          aria-label={localeLabels[loc]}
          aria-current={loc === locale ? "true" : undefined}
        >
          {loc}
        </Link>
      ))}
    </div>
  );
}
