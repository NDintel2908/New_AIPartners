#!/usr/bin/env node

// Comprehensive ES Module startup with early polyfill application
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Apply comprehensive ES module polyfills globally and early
function applyPolyfills() {
  // Set global polyfills
  globalThis.__dirname = __dirname;
  globalThis.__filename = __filename;
  
  if (typeof global !== 'undefined') {
    global.__dirname = __dirname;
    global.__filename = __filename;
  }
  
  // Also patch the global for module resolution
  if (typeof process !== 'undefined') {
    process.env.__ES_MODULE_DIR = __dirname;
    
    // Ensure NODE_ENV is set
    if (!process.env.NODE_ENV) {
      process.env.NODE_ENV = 'development';
    }
  }
  
  console.log('[Startup] ES Module polyfills applied globally for:', __dirname);
}

// Apply polyfills immediately
applyPolyfills();

// Import and execute the server with polyfills already in place
const { spawn } = await import('child_process');

const serverProcess = spawn('npx', ['tsx', 'server/index.ts'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'development'
  }
});

serverProcess.on('error', (err) => {
  console.error('[Startup] Server process error:', err);
  process.exit(1);
});

serverProcess.on('exit', (code) => {
  console.log('[Startup] Server process exited with code:', code);
  process.exit(code || 0);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('[Startup] Received SIGINT, shutting down...');
  serverProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('[Startup] Received SIGTERM, shutting down...');
  serverProcess.kill('SIGTERM');
});