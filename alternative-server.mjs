// Alternative server setup that avoids the vite.config import issue
import express from "express";
import { createServer } from "vite";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create Vite server with inline config to avoid the problematic import
const vite = await createServer({
  configFile: false,
  root: resolve(__dirname, 'client'),
  server: { middlewareMode: true },
  plugins: [
    (await import('@vitejs/plugin-react')).default(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "client", "src"),
      "@shared": resolve(__dirname, "shared"),
      "@assets": resolve(__dirname, "attached_assets"),
    },
  },
});

// Use Vite's connect instance as middleware
app.use(vite.ssrFixStacktrace);
app.use(vite.middlewares);

const server = app.listen(5000, '0.0.0.0', () => {
  console.log('Alternative server running on http://0.0.0.0:5000');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});