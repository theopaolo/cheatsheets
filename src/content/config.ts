import { defineCollection, z } from 'astro:content';

const sheetsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = {
	sheets: sheetsCollection,
};
