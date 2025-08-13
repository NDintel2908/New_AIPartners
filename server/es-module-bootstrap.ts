// Bootstrap script to set up ES module compatibility before starting the server
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Polyfill __dirname for ES modules globally
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = dirname(__dirname);

// Set global polyfills
(globalThis as any).__dirname = projectRoot;
(globalThis as any).__filename = __filename;

// Also set on global for Node.js compatibility
(global as any).__dirname = projectRoot;
(global as any).__filename = __filename;

console.log('[ES Module Bootstrap] Setting up __dirname polyfill for project root:', projectRoot);

// Now import and start the actual server
import('./index.js').catch(async (err) => {
  // Fallback to TypeScript if JS version doesn't exist
  const serverModule = await import('./index.ts');
  return serverModule;
}).catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});