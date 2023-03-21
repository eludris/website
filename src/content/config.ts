import { z, defineCollection } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      pubDate: z.string(),
      updatedDate: z.string().optional(),
      heroImage: z.string().optional(),
      hide: z.boolean()
    })
  })
};
