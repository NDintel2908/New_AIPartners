#!/bin/bash

echo "Building AIPartners platform for Vercel deployment..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build client (frontend)
echo "Building client..."
cd client
npm run build

# Return to root
cd ..

echo "Build completed successfully!"
echo "Client built to: client/dist"
echo "Ready for Vercel deployment"