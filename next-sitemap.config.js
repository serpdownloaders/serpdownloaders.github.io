/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://serpdownloaders.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './out',
  // Generate sitemap for static export
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}