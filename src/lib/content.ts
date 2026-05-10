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

export function sortEntriesByDate<T extends SortableEntry>(
  entries: T[],
  field: keyof T["data"],
) {
  return [...entries].sort((a, b) => {
    const first = a.data[field];
    const second = b.data[field];

    const firstDate = first instanceof Date ? first : first ? new Date(first as string) : new Date(0);
    const secondDate = second instanceof Date ? second : second ? new Date(second as string) : new Date(0);

    return secondDate.getTime() - firstDate.getTime();
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

export function filterByLocale<T extends { id: string }>(
  entries: T[],
  locale: "zh-CN" | "en",
): T[] {
  if (locale === "zh-CN") {
    return entries.filter((e) => !e.id.endsWith(".en"));
  }
  return entries.filter((e) => e.id.endsWith(".en"));
}
