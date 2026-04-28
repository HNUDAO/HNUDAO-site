# Style and conventions
- Use Astro components for pages and UI composition.
- Keep shared site copy and navigation metadata centralized in `src/lib/site.ts`.
- Keep reusable content/data helpers in `src/lib` and structured placeholder data in `src/data`.
- Use Tailwind utility classes plus a few global CSS helper classes from `src/styles/global.css`.
- Maintain a modern-but-formal visual direction: deep blue / ink base, jade accent, restrained gold and red accents, card-based layouts, clear hierarchy.
- Use Chinese-facing copy with selective English labels for tech association brand tone.
- Placeholder content must be explicitly marked as pending or placeholder; do not invent real people, contacts, or events.
- Content collections schemas in `src/content.config.ts` are the source of truth for Markdown frontmatter.
- Prefer semantic HTML and accessible interactions (header, nav, main, section, article, footer, visible focus states, alt text).