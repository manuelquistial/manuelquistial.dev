"use client";

import { useEffect, useState } from "react";
import { formatLocalDate, formatUtcDate, isUtcIsoString } from "@/lib/dates";
import { cn } from "@/lib/utils";

type LocalDateTimeProps = {
  /** Absolute UTC instant as ISO-8601 ending in Z. */
  dateTime: string;
  locale: string;
  label?: string;
  className?: string;
};

/**
 * Keeps the original UTC instant in `datetime` and shows the visitor's local
 * calendar date after hydration. SSR falls back to an explicit UTC date so the
 * first paint does not depend on the server timezone.
 */
export function LocalDateTime({
  dateTime,
  locale,
  label,
  className,
}: LocalDateTimeProps) {
  const valid = isUtcIsoString(dateTime);
  const [text, setText] = useState(() =>
    valid ? formatUtcDate(dateTime, locale) : dateTime,
  );

  useEffect(() => {
    if (!valid) return;
    setText(formatLocalDate(dateTime, locale));
  }, [dateTime, locale, valid]);

  if (!valid) return null;

  return (
    <p className={cn("text-overline text-muted", className)}>
      {label ? <span>{label} </span> : null}
      <time dateTime={dateTime}>{text}</time>
    </p>
  );
}
