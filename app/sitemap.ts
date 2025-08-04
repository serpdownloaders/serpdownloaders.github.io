import { MetadataRoute } from 'next';
import { downloaderConfigs } from '@/lib/downloader-configs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || 'https://serpdownloaders.com';

  // Get all tool pages from config
  const toolPages = Object.keys(downloaderConfigs).map(slug => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7
  }));

  // Static tool pages
  const staticToolPages = [
    'character-counter',
    'csv-combiner', 
    'facebook-downloader',
    'instagram-downloader',
    'json-to-csv',
    'loom-video-downloader',
    'pdf-downloader',
    'pinterest-downloader',
    'skool-video-downloader',
    'tiktok-downloader',
    'twitch-downloader',
    'twitter-downloader',
    'vimeo-video-downloader',
    'youtube-downloader'
  ].map(slug => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7
  }));

  // Blog posts
  const blogPosts = [
    'how-to-download-facebook-videos',
    'how-to-download-instagram-content',
    'how-to-download-tiktok-videos',
    'how-to-download-vimeo-videos',
    'how-to-download-youtube-videos'
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8
    },
    ...toolPages,
    ...staticToolPages,
    ...blogPosts
  ];
}