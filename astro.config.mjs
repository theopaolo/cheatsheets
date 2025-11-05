// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx()],
	markdown: {
		shikiConfig: {
			theme: 'github-light',
			langs: ['javascript', 'typescript', 'php', 'bash', 'python', 'java'],
		},
	},
	prefetch: {
		prefetchAll: false,
		defaultStrategy: 'hover',
	},
});
