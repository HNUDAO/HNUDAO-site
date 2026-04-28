import { defineCollection, z } from "astro:content";

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    externalUrl: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const activities = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string().optional(),
    status: z.enum(["upcoming", "ongoing", "past"]),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    registrationUrl: z.string().optional(),
    externalUrl: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    status: z.enum(["planning", "active", "archived"]).optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    repo: z.string().optional(),
    demo: z.string().optional(),
    externalUrl: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const notices = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    category: z.string().optional(),
    externalUrl: z.string().optional(),
    important: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  news,
  activities,
  projects,
  notices,
};
