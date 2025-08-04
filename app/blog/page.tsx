import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Calendar,
  Clock,
  ArrowRight,
  Tag
} from "lucide-react";
import Link from "next/link";

// Blog posts data - in a real app, this would come from a CMS or markdown files
const blogPosts = [
  {
    slug: "how-to-download-youtube-videos",
    title: "How to Download YouTube Videos: Complete Guide 2024",
    description: "Learn the best methods to download YouTube videos legally and safely. Includes step-by-step instructions for various quality options.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Video Platforms",
    tags: ["YouTube", "Video Download", "Tutorial"]
  },
  {
    slug: "how-to-download-tiktok-videos",
    title: "Download TikTok Videos Without Watermark",
    description: "Discover how to save TikTok videos without the watermark. Works for all content types including stories and live streams.",
    date: "2024-01-12",
    readTime: "4 min read",
    category: "Social Media",
    tags: ["TikTok", "No Watermark", "Social Media"]
  },
  {
    slug: "how-to-download-instagram-content",
    title: "Instagram Downloader Guide: Photos, Videos, Reels & Stories",
    description: "Complete guide to downloading all types of Instagram content including photos, videos, Reels, and Stories.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Social Media",
    tags: ["Instagram", "Reels", "Stories"]
  },
  {
    slug: "how-to-download-vimeo-videos",
    title: "Vimeo Video Downloader: Private & Embedded Videos",
    description: "Learn how to download Vimeo videos including private and password-protected content with our comprehensive guide.",
    date: "2024-01-08",
    readTime: "5 min read",
    category: "Video Platforms",
    tags: ["Vimeo", "Private Videos", "Tutorial"]
  },
  {
    slug: "how-to-download-skool-videos",
    title: "Download Skool Course Videos for Offline Learning",
    description: "Step-by-step guide to downloading Skool course videos and community content for offline study.",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Education",
    tags: ["Skool", "Education", "Courses"]
  },
  {
    slug: "how-to-download-loom-videos",
    title: "Loom Video Downloader: Save Screen Recordings",
    description: "Download Loom videos and screen recordings for offline viewing. Includes tips for batch downloads.",
    date: "2024-01-03",
    readTime: "4 min read",
    category: "Video Platforms",
    tags: ["Loom", "Screen Recording", "Business"]
  },
  {
    slug: "how-to-download-pdf-files",
    title: "PDF Downloader Guide: Save Documents from Any Website",
    description: "Learn how to download PDFs from various platforms including Google Drive, Dropbox, and embedded documents.",
    date: "2024-01-01",
    readTime: "5 min read",
    category: "Documents",
    tags: ["PDF", "Documents", "Downloads"]
  }
];

const categories = ["All", "Video Platforms", "Social Media", "Education", "Documents"];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="border-b bg-muted/30">
          <div className="container py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Downloader Guides & Tutorials
              </h1>
              <p className="text-lg text-muted-foreground">
                Learn how to download content from your favorite platforms with our 
                comprehensive guides and tutorials.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b">
          <div className="container py-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="text-sm text-primary flex items-center gap-1">
                        Read more
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}