import type { Locale } from "./i18n";

export function formatDate(date: Date | string | undefined, locale: Locale = "zh-CN") {
  if (!date) {
    return locale === "en" ? "TBA" : "日期将后续公布";
  }

  const value = typeof date === "string" ? new Date(date) : date;

  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(value);
}
