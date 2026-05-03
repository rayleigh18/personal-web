

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b9d07e7f.js","_app/immutable/chunks/index.6ed00649.js"];
export const stylesheets = [];
export const fonts = [];
