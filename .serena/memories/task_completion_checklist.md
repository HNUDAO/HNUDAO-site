# When a task is completed
- Run `npm run build` to verify the static site still builds successfully.
- If content schemas were touched, confirm collection frontmatter still passes Astro content sync/build.
- Check whether updates belong in `docs/` maintenance files as well as source files.
- Do not add fabricated real-world member/contact data.
- Preserve static deployment compatibility for Vercel: no server adapter, no backend dependencies, no required env vars.