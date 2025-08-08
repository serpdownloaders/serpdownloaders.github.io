#!/bin/bash

# SERP Downloaders Setup Script
echo "🚀 Setting up SERP Downloaders website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required but not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js detected: $(node --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Generate tool pages from sitemap
echo "🔧 Generating tool pages from sitemap..."
node scripts/generate-tools.mjs

if [ $? -ne 0 ]; then
    echo "❌ Failed to generate tool pages"
    exit 1
fi

# Build the site
echo "🏗️ Building the website..."
npx astro build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "  • Run 'npm run dev' to start development server"
echo "  • Run 'npm run build' to build for production"
echo "  • Run 'npm run preview' to preview production build"
echo ""
echo "📁 Generated files:"
echo "  • $(ls src/pages/tools/*.astro | wc -l | tr -d ' ') tool pages"
echo "  • dist/ folder with built website"
echo "  • tools-list.txt with all available tools"
echo ""
echo "🌐 Your website is ready for deployment!"
