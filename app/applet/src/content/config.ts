import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    author: z.string().optional(),
  }),
});

const courses = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    duration: z.string().optional(),
    modality: z.string().optional(),
    price: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { blog, courses };
