// Permanent ES Module compatibility polyfill for __dirname
// This file provides __dirname globally for vite.config.ts in ES module projects

const path = require('path');

// Ensure __dirname is available globally for vite configuration
if (typeof global !== 'undefined' && typeof global.__dirname === 'undefined') {
  global.__dirname = __dirname;
  global.__filename = __filename;
  
  // Also set for any modules that might need it
  if (typeof process !== 'undefined' && process.env) {
    process.env.PROJECT_ROOT = __dirname;
  }
  
  console.log('[ES Module Fix] __dirname polyfill applied for project root:', __dirname);
}

module.exports = {
  dirname: __dirname,
  filename: __filename
};