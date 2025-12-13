"use client";

import { useTranslation as useTranslationContext } from "@/contexts/TranslationContext";
import { supportedLocales } from "@/lib/translations";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslationContext();

  return (
    <div className="flex items-center gap-2">
      {supportedLocales.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLocale(lang)}
          className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
            locale === lang
              ? "bg-white/20 text-white"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }`}
          aria-label={`Cambiar idioma a ${lang}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
