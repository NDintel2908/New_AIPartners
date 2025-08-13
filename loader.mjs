// ES Module loader that provides __dirname polyfill
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Set up the polyfill immediately when the loader is used
const projectRoot = dirname(fileURLToPath(import.meta.url));

// Apply polyfills globally
globalThis.__dirname = projectRoot;
globalThis.__filename = fileURLToPath(import.meta.url);

if (typeof global !== 'undefined') {
  global.__dirname = projectRoot;
  global.__filename = globalThis.__filename;
}

console.log('[Loader] ES Module polyfill applied for project root:', projectRoot);

// Default loader behavior
export async function resolve(specifier, context, defaultResolve) {
  return defaultResolve(specifier, context);
}

export async function load(url, context, defaultLoad) {
  return defaultLoad(url, context);
}