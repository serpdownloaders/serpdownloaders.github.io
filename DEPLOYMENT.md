# 🚀 Deployment Guide

This guide covers different deployment options for your SERP Downloaders website.

## GitHub Pages (Recommended)

The easiest way to deploy your site is using GitHub Pages with automatic deployment:

### Setup:
1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as source
   - The workflow in `.github/workflows/deploy.yml` will automatically deploy your site

3. **Access your site:**
   - Your site will be available at: `https://yourusername.github.io/repositoryname`
   - Or set up a custom domain in the Pages settings

### Automatic Updates:
- Every time you push to the `main` branch, the site automatically rebuilds and deploys
- Tool pages are regenerated from your `sitemap.csv` on each deployment

## Other Deployment Options

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Vercel
1. Import your GitHub repository in Vercel
2. Framework preset: "Astro"
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

### Traditional Web Hosting
1. Build your site: `npm run build`
2. Upload the `dist/` folder contents to your web server
3. Point your domain to the uploaded files

## Custom Domain Setup

### For GitHub Pages:
1. Add a `CNAME` file to your `public/` folder with your domain name
2. Configure DNS to point to GitHub Pages
3. Enable "Enforce HTTPS" in repository settings

### DNS Configuration:
- **Apex domain (example.com):** A record pointing to GitHub Pages IPs
- **Subdomain (www.example.com):** CNAME record pointing to `yourusername.github.io`

## Environment Setup

### Prerequisites:
- Node.js 18+ installed
- Git for version control
- Text editor (VS Code recommended)

### Local Development:
```bash
# Clone your repository
git clone https://github.com/yourusername/repositoryname.git
cd repositoryname

# Install dependencies
npm install

# Generate tool pages
node scripts/generate-tools.mjs

# Start development server
npm run dev
```

### Production Build:
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Management

### Adding New Tools:
1. Add entry to `sitemap.csv`:
   ```csv
   "tools","Platform Downloader","/tools/platform-downloader"
   ```

2. Regenerate tool pages:
   ```bash
   node scripts/generate-tools.mjs
   ```

3. Customize the generated page if needed

### Adding Blog Posts:
1. Create new `.astro` file in `src/pages/`
2. Use the `BlogPost` layout
3. Update blog index page if needed

### Updating Content:
- Tool pages: Modify templates or regenerate from sitemap
- Blog posts: Edit individual `.astro` files
- Site-wide changes: Update layouts in `src/layouts/`

## Performance Optimization

### Built-in Optimizations:
- Static site generation for maximum speed
- Automatic code splitting
- Image optimization
- CSS and JS minification
- Sitemap generation

### Additional Optimizations:
- Enable CDN through your hosting provider
- Configure caching headers
- Monitor Core Web Vitals
- Optimize images before uploading to `public/`

## SEO Configuration

### Automatic SEO Features:
- Meta tags on all pages
- Structured data (JSON-LD)
- Sitemap generation
- Clean URLs
- OpenGraph and Twitter Card support

### Manual SEO Tasks:
- Submit sitemap to Google Search Console
- Verify site ownership
- Monitor search performance
- Update meta descriptions for better CTR

## Monitoring and Analytics

### Recommended Tools:
- Google Analytics 4
- Google Search Console
- Lighthouse for performance monitoring
- Web Vitals extension

### Integration:
Add tracking code to `src/layouts/Layout.astro` before closing `</head>` tag.

## Troubleshooting

### Common Issues:

**Build Errors:**
- Check Node.js version (18+ required)
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Verify all import paths are correct

**Missing Tool Pages:**
- Run tool generator: `node scripts/generate-tools.mjs`
- Check sitemap.csv format
- Verify no syntax errors in generated files

**Deployment Issues:**
- Check GitHub Actions logs
- Verify repository settings
- Ensure all dependencies are in package.json

### Getting Help:
- Check the repository issues
- Review Astro documentation
- Verify hosting provider status

## Maintenance

### Regular Tasks:
- Update dependencies monthly: `npm update`
- Monitor site performance
- Review and update content
- Check for broken links
- Update sitemap as needed

### Security:
- Keep dependencies updated
- Monitor for security vulnerabilities: `npm audit`
- Use HTTPS (automatic with GitHub Pages)
- Review and update access permissions

---

Your SERP Downloaders website is now ready for deployment! 🎉
