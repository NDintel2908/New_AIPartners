#!/usr/bin/env node

// ES Module startup script that applies the __dirname polyfill before running the server
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { spawn } from 'child_process';

// Polyfill __dirname and __filename for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set global __dirname and __filename for compatibility
globalThis.__dirname = __dirname;
globalThis.__filename = __filename;

console.log('[ES Module Fix] __dirname polyfill applied for project root:', __dirname);

// Set environment variable for the project root
process.env.PROJECT_ROOT = __dirname;

// Now start the server with tsx
const serverProcess = spawn('npx', ['tsx', 'server/index.ts'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'development'
  }
});

serverProcess.on('exit', (code) => {
  process.exit(code);
});

process.on('SIGINT', () => {
  serverProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  serverProcess.kill('SIGTERM');
});