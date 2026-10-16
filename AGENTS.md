# HNUDAO-site

Static website for HNUDAO (河南师范大学区块链协会).

## Tech Stack

- Astro 5, TypeScript, Tailwind CSS
- Static output, Vercel deployment
- i18n: Chinese (zh-CN, default at `/`) + English (en at `/en/`)

## Key Architecture

- **Pages**: `src/pages/` (Chinese) + `src/pages/en/` (English)
- **Content**: `src/content/` Markdown files. English versions use `.en.md` suffix.
- **Translations**: `src/i18n/zh-CN.json` + `src/i18n/en.json`, accessed via `t("key.subkey")`
- **Data**: `src/data/departments.ts`, `members.ts`, `timeline.ts` — all use `Record<Locale, T>`
- **Site config**: `src/lib/site.ts` — locale-keyed records for nav, social links, contact info
- **i18n utils**: `src/lib/i18n.ts` — `useTranslations()`, `getLocaleFromPath()`
- **Content filtering**: `src/lib/content.ts` — `filterByLocale()` filters by `.en.md` suffix

## Commands

```bash
npm install
npm run dev        # dev server at localhost:4321
npm run build      # static build to dist/
npm run preview    # preview build
```

## i18n Rules

- Chinese pages: `src/pages/*.astro`, use `getLocaleFromPath(Astro.url.pathname)` for locale
- English pages: `src/pages/en/*.astro`, hardcode `const locale = "en" as const`
- All UI text goes through translation files, no hardcoded strings in pages
- Data exports are `Record<Locale, T>`, always index with `[locale]`
- Content collections filtered by `filterByLocale(entries, locale)`
- Links in English pages must have `/en/` prefix

## Docs

See `docs/README.md` for full maintenance documentation index.