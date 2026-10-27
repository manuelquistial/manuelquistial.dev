import type { Locale } from "@/i18n/config";

interface SetHtmlLangProps {
  locale: Locale;
}

/** Sets <html lang> as early as the streamed script runs (before useEffect). */
export function SetHtmlLang({ locale }: SetHtmlLangProps) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.lang=${JSON.stringify(locale)};`,
      }}
    />
  );
}
