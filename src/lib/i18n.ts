import zhCN from "../i18n/zh-CN.json";
import en from "../i18n/en.json";

export const locales = ["zh-CN", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh-CN";

const translations: Record<Locale, Record<string, unknown>> = {
  "zh-CN": zhCN,
  en,
};

export function useTranslations(locale: Locale) {
  return function t(key: string): string {
    const result = key.split(".").reduce((obj: unknown, k) => {
      if (obj && typeof obj === "object" && k in obj) {
        return (obj as Record<string, unknown>)[k];
      }
      return undefined;
    }, translations[locale]);
    return typeof result === "string" ? result : key;
  };
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "zh-CN";
}

