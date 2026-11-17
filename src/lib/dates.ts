const UTC_ISO_PATTERN =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/;

/** Accepts only absolute UTC ISO-8601 strings ending in Z. */
export function isUtcIsoString(value: string): boolean {
  if (!UTC_ISO_PATTERN.test(value)) return false;
  return Number.isFinite(Date.parse(value));
}

export function formatUtcDate(utcIso: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(utcIso));
}

/** Local calendar date for the visitor's timezone. */
export function formatLocalDate(utcIso: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(
    new Date(utcIso),
  );
}
