

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/valentine/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.4630f04b.js","_app/immutable/chunks/index.6ed00649.js","_app/immutable/chunks/index.ebf62f2d.js"];
export const stylesheets = ["_app/immutable/assets/7.ac7ce518.css"];
export const fonts = [];
