# HNUDAO-site project overview
- Purpose: static official-style website for HNUDAO, a Henan Normal University student technology association / DAO.
- Stack: Astro 5, TypeScript, Tailwind CSS, Markdown/MDX, Astro Content Collections, static output, Vercel-friendly deployment.
- Main content areas: homepage, about, departments, members, news, activities, projects, join, contact, docs, custom 404.
- Content lives in src/content with collections for news, activities, projects, notices.
- Shared configuration lives in src/lib/site.ts and shared UI in src/components and src/layouts.
- Root docs folder contains handover and maintenance documentation for future maintainers.
- No backend, no database, no login system, no environment variables required.