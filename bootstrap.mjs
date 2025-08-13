// Bootstrap ES Module compatibility
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

// Set global polyfills immediately
globalThis.__dirname = __dirname;
globalThis.__filename = __filename;
globalThis.require = require;

if (typeof global !== 'undefined') {
  global.__dirname = __dirname;
  global.__filename = __filename;
  global.require = require;
}

console.log('[Bootstrap] ES Module compatibility applied for:', __dirname);

// Now dynamically import and run the server
const { spawn } = await import('child_process');

// Start the server with the polyfill already applied
const serverProcess = spawn('npx', ['tsx', 'server/index.ts'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'development',
    __ES_MODULE_DIR: __dirname
  }
});

process.on('SIGINT', () => serverProcess.kill('SIGINT'));
process.on('SIGTERM', () => serverProcess.kill('SIGTERM'));