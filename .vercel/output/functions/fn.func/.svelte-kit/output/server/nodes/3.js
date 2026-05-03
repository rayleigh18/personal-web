

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dea-invitation/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.04ebb0a3.js","_app/immutable/chunks/index.6ed00649.js","_app/immutable/chunks/good-days.4ea1c2bc.js"];
export const stylesheets = ["_app/immutable/assets/3.e0b92223.css"];
export const fonts = [];
