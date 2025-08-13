#!/bin/bash

echo "Building AIPartners platform for Vercel deployment..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project (both client and server)
echo "Building project..."
npm run build

echo "Build completed successfully!"
echo "Files built to: dist/"
echo "Ready for Vercel deployment"