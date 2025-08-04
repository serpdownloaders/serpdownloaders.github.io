import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://serpdownloaders.com';
  
  // Tool pages
  const tools = [
    'youtube-downloader',
    'tiktok-downloader',
    'instagram-downloader',
    'vimeo-video-downloader',
    'skool-video-downloader',
    'loom-video-downloader',
    'twitch-downloader',
    'twitter-downloader',
    'facebook-downloader',
    'pinterest-downloader',
    'pdf-downloader',
  ];

  // Blog posts
  const blogPosts = [
    'how-to-download-youtube-videos',
    'how-to-download-tiktok-videos',
    'how-to-download-instagram-content',
    'how-to-download-vimeo-videos',
    'how-to-download-skool-videos',
    'how-to-download-loom-videos',
    'how-to-download-pdf-files',
  ];

  // Static pages
  const staticPages = [
    '',
    'blog',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add static pages
  staticPages.forEach(page => {
    sitemap.push({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'daily' : 'weekly',
      priority: page === '' ? 1 : 0.8,
    });
  });

  // Add tool pages
  tools.forEach(tool => {
    sitemap.push({
      url: `${baseUrl}/tools/${tool}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // Add blog posts
  blogPosts.forEach(post => {
    sitemap.push({
      url: `${baseUrl}/blog/${post}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  return sitemap;
}