// Vercel build script for AIPartners platform
const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting Vercel build process...');

try {
  // Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Run the build command
  console.log('🔨 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('✅ Build completed successfully!');
  console.log('📁 Static files available in: dist/');
  console.log('🔧 Server function ready at: server/index.ts');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}