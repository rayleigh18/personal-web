

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/laufey/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.95122d79.js","_app/immutable/chunks/index.6ed00649.js","_app/immutable/chunks/index.ebf62f2d.js"];
export const stylesheets = ["_app/immutable/assets/5.b933fc52.css"];
export const fonts = [];
