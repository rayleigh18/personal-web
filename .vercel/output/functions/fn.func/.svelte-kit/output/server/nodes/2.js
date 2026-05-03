

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.63edc263.js","_app/immutable/chunks/index.6ed00649.js","_app/immutable/chunks/index.ebf62f2d.js"];
export const stylesheets = ["_app/immutable/assets/2.d128408d.css"];
export const fonts = [];
