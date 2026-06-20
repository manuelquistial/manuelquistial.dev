"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

interface SetHtmlLangProps {
  locale: Locale;
}

export function SetHtmlLang({ locale }: SetHtmlLangProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
