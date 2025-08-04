"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Youtube,
  Music,
  Camera,
  Video,
  FileText,
  Download,
  Sparkles,
  ArrowRight,
  Filter,
  Play,
  Image,
  Film,
  Tv,
  BookOpen,
  Globe
} from "lucide-react";
import Link from "next/link";

// Define tool categories
const categories = [
  { id: "all", name: "All Downloaders", count: 0 },
  { id: "video", name: "Video Platforms", count: 0 },
  { id: "social", name: "Social Media", count: 0 },
  { id: "education", name: "Education", count: 0 },
  { id: "streaming", name: "Streaming", count: 0 },
  { id: "other", name: "Other Tools", count: 0 },
];

// Define tools data
const tools = [
  {
    id: "youtube-downloader",
    name: "YouTube Downloader",
    description: "Download YouTube videos in HD quality, 4K, or extract audio as MP3.",
    category: "video",
    icon: Youtube,
    href: "/tools/youtube-downloader",
    tags: ["youtube", "video", "mp3", "4k"],
    isNew: false,
    isPopular: true,
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/20"
  },
  {
    id: "tiktok-downloader",
    name: "TikTok Downloader",
    description: "Save TikTok videos without watermark in HD quality.",
    category: "social",
    icon: Music,
    href: "/tools/tiktok-downloader",
    tags: ["tiktok", "video", "no-watermark"],
    isNew: false,
    isPopular: true,
    color: "text-black dark:text-white",
    bgColor: "bg-gray-50 dark:bg-gray-950/20"
  },
  {
    id: "instagram-downloader",
    name: "Instagram Downloader",
    description: "Download Instagram photos, videos, reels, and stories.",
    category: "social",
    icon: Camera,
    href: "/tools/instagram-downloader",
    tags: ["instagram", "photo", "video", "reels"],
    isNew: false,
    isPopular: true,
    color: "text-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-950/20"
  },
  {
    id: "vimeo-downloader",
    name: "Vimeo Downloader",
    description: "Download Vimeo videos in high quality with subtitles support.",
    category: "video",
    icon: Video,
    href: "/tools/vimeo-video-downloader",
    tags: ["vimeo", "video", "hd"],
    isNew: false,
    isPopular: false,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    id: "skool-downloader",
    name: "Skool Downloader",
    description: "Download Skool videos and course content for offline viewing.",
    category: "education",
    icon: BookOpen,
    href: "/tools/skool-video-downloader",
    tags: ["skool", "course", "education"],
    isNew: true,
    isPopular: true,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20"
  },
  {
    id: "loom-downloader",
    name: "Loom Downloader",
    description: "Save Loom screen recordings and video messages.",
    category: "video",
    icon: Film,
    href: "/tools/loom-video-downloader",
    tags: ["loom", "screen-recording", "video"],
    isNew: false,
    isPopular: true,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    id: "twitch-downloader",
    name: "Twitch Downloader",
    description: "Download Twitch clips, VODs, and highlights.",
    category: "streaming",
    icon: Tv,
    href: "/tools/twitch-downloader",
    tags: ["twitch", "streaming", "clips"],
    isNew: false,
    isPopular: false,
    color: "text-violet-600",
    bgColor: "bg-violet-50 dark:bg-violet-950/20"
  },
  {
    id: "twitter-downloader",
    name: "Twitter/X Downloader",
    description: "Download videos and GIFs from Twitter/X posts.",
    category: "social",
    icon: Globe,
    href: "/tools/twitter-downloader",
    tags: ["twitter", "x", "video", "gif"],
    isNew: false,
    isPopular: false,
    color: "text-sky-600",
    bgColor: "bg-sky-50 dark:bg-sky-950/20"
  },
  {
    id: "facebook-downloader",
    name: "Facebook Downloader",
    description: "Download Facebook videos, reels, and live streams.",
    category: "social",
    icon: Play,
    href: "/tools/facebook-downloader",
    tags: ["facebook", "video", "reels"],
    isNew: false,
    isPopular: false,
    color: "text-blue-700",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    id: "pinterest-downloader",
    name: "Pinterest Downloader",
    description: "Save Pinterest images, videos, and GIFs in high quality.",
    category: "social",
    icon: Image,
    href: "/tools/pinterest-downloader",
    tags: ["pinterest", "image", "video"],
    isNew: false,
    isPopular: false,
    color: "text-red-700",
    bgColor: "bg-red-50 dark:bg-red-950/20"
  },
  {
    id: "pdf-downloader",
    name: "PDF Downloader",
    description: "Download PDFs from any website quickly and easily.",
    category: "other",
    icon: FileText,
    href: "/tools/pdf-downloader",
    tags: ["pdf", "document", "download"],
    isNew: false,
    isPopular: false,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  },
];

// Update category counts
categories.forEach(category => {
  if (category.id === "all") {
    category.count = tools.length;
  } else {
    category.count = tools.filter(tool => tool.category === category.id).length;
  }
});

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter tools based on category and search
  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
          <div className="container relative py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                SERP Downloaders
              </Badge>
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Download Anything
              </h1>

              
              {/* Search Bar */}
              <div className="relative mx-auto max-w-xl">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search downloaders..."
                  className="w-full pl-10 pr-4 py-6 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container py-12">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sidebar Categories */}
            <aside className="w-full lg:w-64">
              <div className="sticky top-20 space-y-2">
                <h2 className="mb-4 text-sm font-semibold text-muted-foreground">CATEGORIES</h2>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={`text-xs ${
                      selectedCategory === category.id ? "opacity-70" : "text-muted-foreground"
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Tools Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredTools.length} of {tools.length} downloaders
                </p>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredTools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link key={tool.id} href={tool.href}>
                      <Card className="group h-full transition-all hover:shadow-lg hover:-translate-y-1">
                        <CardHeader>
                          <div className="mb-4 flex items-center justify-between">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${tool.bgColor}`}>
                              <Icon className={`h-6 w-6 ${tool.color}`} />
                            </div>
                            <div className="flex gap-2">
                              {tool.isNew && (
                                <Badge variant="secondary" className="text-xs">
                                  New
                                </Badge>
                              )}
                              {tool.isPopular && (
                                <Badge variant="outline" className="text-xs">
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </div>
                          <CardTitle className="group-hover:text-primary">
                            {tool.name}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {tool.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {tool.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>

              {filteredTools.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-lg text-muted-foreground">
                    No downloaders found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t bg-muted/30">
          <div className="container py-16">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Why Choose Our Downloaders?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Download content in seconds with our optimized servers
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">No Software Required</h3>
                <p className="text-muted-foreground">
                  Works directly in your browser - no downloads or installations
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">50+ Platforms</h3>
                <p className="text-muted-foreground">
                  Support for all major platforms and social media sites
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}