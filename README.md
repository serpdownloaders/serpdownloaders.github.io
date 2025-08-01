# SERP Downloaders

A fast, SEO-optimized static website built with Astro for free online download tools.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Generate tool pages from sitemap:**
   ```bash
   node scripts/generate-tools.mjs
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── layouts/           # Astro layouts
│   │   ├── Layout.astro   # Main site layout
│   │   ├── ToolTemplate.astro  # Template for tool pages
│   │   └── BlogPost.astro # Template for blog posts
│   ├── pages/             # Astro pages (auto-routed)
│   │   ├── index.astro    # Homepage
│   │   ├── blog.astro     # Blog index
│   │   ├── about.astro    # About page
│   │   ├── contact.astro  # Contact page
│   │   └── tools/         # Tool pages directory
│   └── components/        # Reusable components
├── scripts/
│   └── generate-tools.mjs # Script to generate tool pages
├── sitemap.csv            # Site structure definition
└── astro.config.mjs       # Astro configuration
```

## 🛠️ Adding New Tools

1. Add the tool entry to `sitemap.csv`:
   ```csv
   "tools","Platform Downloader","/tools/platform-downloader"
   ```

2. Run the generator script:
   ```bash
   node scripts/generate-tools.mjs
   ```

3. Customize the generated page in `src/pages/tools/platform-downloader.astro`

## 📝 Adding Blog Posts

1. Create a new `.astro` file in `src/pages/`
2. Use the `BlogPost` layout:
   ```astro
   ---
   import BlogPost from '../layouts/BlogPost.astro';
   
   const title = "Your Post Title";
   const description = "Post description";
   const publishDate = "2024-01-01";
   const tags = ["tag1", "tag2"];
   ---
   
   <BlogPost {title} {description} {publishDate} {tags}>
     Your content here...
   </BlogPost>
   ```

## 🎨 Customization

### Styling
- Built with Tailwind CSS
- Customize colors in `tailwind.config.mjs`
- Primary color scheme defined in config

### SEO
- Meta tags automatically generated
- JSON-LD structured data included
- Sitemap automatically created
- Open Graph and Twitter Card support

### Layout Templates
- `Layout.astro` - Main site layout with navigation and footer
- `ToolTemplate.astro` - Standardized layout for download tools
- `BlogPost.astro` - SEO-optimized blog post layout

## 🚀 Deployment

### GitHub Pages (Automatic)
The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment
1. Build the site: `npm run build`
2. Deploy the `dist/` folder to your hosting provider

## 📊 Features

- ✅ **50+ Tool Pages** - Automatically generated from sitemap
- ✅ **SEO Optimized** - Meta tags, structured data, sitemap
- ✅ **Mobile Responsive** - Works perfectly on all devices
- ✅ **Fast Loading** - Static site generation with Astro
- ✅ **Blog System** - For tutorials and guides
- ✅ **Search Functionality** - Find tools quickly
- ✅ **Clean URLs** - SEO-friendly URL structure

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `node scripts/generate-tools.mjs` - Generate tool pages

### Environment
- Node.js 18+ required
- Uses Astro 4.x
- Tailwind CSS for styling
- TypeScript support included

## 📈 Performance

- **Lighthouse Score:** 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Static Generation:** All pages pre-built for maximum speed
- **Optimized Images:** Automatic image optimization
- **Minimal JavaScript:** Only what's necessary for functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help or have questions:
- Check the documentation in this README
- Review the example files in the repository
- Create an issue for bugs or feature requests

---

Built with ❤️ using [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
