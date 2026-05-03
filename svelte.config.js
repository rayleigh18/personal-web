import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Pin Vercel function runtime so builds on Node 24 do not use adapter@2's 16/18-only default.
		adapter: adapter({
			runtime: 'nodejs24.x'
		})
	}
};

export default config;
