import { notFound } from "next/navigation";
import { DownloaderPageTemplate } from "@/lib/downloader-template";
import { downloaderConfigs } from "@/lib/downloader-configs";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  // Get all downloader slugs from configs
  const slugs = Object.keys(downloaderConfigs);
  
  // Add the existing custom pages
  const customPages = [
    "youtube-downloader",
    "tiktok-downloader", 
    "instagram-downloader",
    "vimeo-video-downloader",
    "skool-video-downloader",
    "loom-video-downloader",
    "twitch-downloader",
    "twitter-downloader",
    "facebook-downloader",
    "pinterest-downloader",
    "pdf-downloader",
    "csv-combiner",
    "json-to-csv",
    "character-counter"
  ];
  
  // Filter out custom pages from dynamic generation
  const dynamicSlugs = slugs.filter(slug => !customPages.includes(slug));
  
  return dynamicSlugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function DynamicDownloaderPage({ params }: PageProps) {
  const { slug } = await params;
  const config = downloaderConfigs[slug];
  
  if (!config) {
    notFound();
  }
  
  return <DownloaderPageTemplate config={config} />;
}