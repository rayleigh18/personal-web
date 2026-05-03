

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1d075572.js","_app/immutable/chunks/index.6ed00649.js","_app/immutable/chunks/singletons.40f72b5d.js","_app/immutable/chunks/index.ebf62f2d.js"];
export const stylesheets = [];
export const fonts = [];
