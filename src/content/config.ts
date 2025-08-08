import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().optional().default(false),
    author: z.string().optional().default('SERP Downloaders Team'),
    category: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};