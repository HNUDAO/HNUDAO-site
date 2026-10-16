import type { CollectionEntry } from "astro:content";

type SortableEntry =
  | CollectionEntry<"news">
  | CollectionEntry<"activities">
  | CollectionEntry<"projects">
  | CollectionEntry<"notices">;

type LinkableEntry =
  | CollectionEntry<"news">
  | CollectionEntry<"activities">
  | CollectionEntry<"projects">;

export function isPublished<T extends SortableEntry>(entry: T) {
  return !entry.data.draft;
}

/** 按日期倒序排列（新→旧）。只允许实际存在的三个日期字段，避免 keyof 联合体索引不可靠 */
export function sortEntriesByDate<T extends SortableEntry>(
  entries: T[],
  field: "pubDate" | "startDate" | "date",
) {
  const toTime = (value: unknown) =>
    value instanceof Date ? value.getTime() : value ? new Date(value as string).getTime() : 0;

  return [...entries].sort((a, b) => {
    const first = toTime((a.data as Record<string, unknown>)[field]);
    const second = toTime((b.data as Record<string, unknown>)[field]);

    return second - first;
  });
}

export function getFeaturedEntries<T extends { data: { featured?: boolean } }>(
  entries: T[],
  limit = 3,
) {
  return entries.filter((entry) => entry.data.featured).slice(0, limit);
}

export function takeEntries<T>(entries: T[], limit: number) {
  return entries.slice(0, limit);
}

export function getEntryHref(entry: LinkableEntry, fallback = "#") {
  if ("externalUrl" in entry.data && entry.data.externalUrl) {
    return entry.data.externalUrl;
  }

  if ("registrationUrl" in entry.data && entry.data.registrationUrl) {
    return entry.data.registrationUrl;
  }

  if ("demo" in entry.data && entry.data.demo) {
    return entry.data.demo;
  }

  if ("repo" in entry.data && entry.data.repo) {
    return entry.data.repo;
  }

  return fallback;
}

export function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}

export function filterByLocale<T extends { filePath: string }>(
  entries: T[],
  locale: "zh-CN" | "en",
): T[] {
  // Astro normalizes dots out of entry.id, so the .en.md convention is only reliable in filePath.
  const isEnglishEntry = (entry: T) => entry.filePath.endsWith(".en.md");

  if (locale === "zh-CN") {
    return entries.filter((entry) => !isEnglishEntry(entry));
  }
  return entries.filter(isEnglishEntry);
}
