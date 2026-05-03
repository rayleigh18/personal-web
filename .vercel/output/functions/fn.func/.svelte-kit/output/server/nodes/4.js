

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dea-page/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.27f94401.js","_app/immutable/chunks/index.6ed00649.js","_app/immutable/chunks/good-days.4ea1c2bc.js"];
export const stylesheets = ["_app/immutable/assets/4.7710093c.css"];
export const fonts = [];
