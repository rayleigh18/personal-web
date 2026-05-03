

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/two-year-anniversary/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.63870f7e.js","_app/immutable/chunks/index.6ed00649.js"];
export const stylesheets = ["_app/immutable/assets/6.1f15ccc6.css"];
export const fonts = [];
