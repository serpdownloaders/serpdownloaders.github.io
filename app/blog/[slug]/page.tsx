import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar,
  Clock,
  ArrowLeft,
  Download,
  Share2,
  BookOpen
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Blog post content - in a real app, this would be fetched based on the slug
const blogPosts: Record<string, any> = {
  "how-to-download-youtube-videos": {
    title: "How to Download YouTube Videos: Complete Guide 2024",
    description: "Learn the best methods to download YouTube videos legally and safely.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Video Platforms",
    content: `
      <h2>Introduction</h2>
      <p>YouTube is the world's largest video platform, hosting billions of videos across every imaginable category. Whether you want to save educational content for offline study, preserve your favorite music videos, or download tutorials for later reference, this guide will show you how to download YouTube videos safely and legally.</p>

      <h2>Is It Legal to Download YouTube Videos?</h2>
      <p>Before diving into the how-to, it's important to understand the legal considerations. YouTube's terms of service generally prohibit downloading videos without permission. However, there are exceptions:</p>
      <ul>
        <li>Content you own or have permission to download</li>
        <li>Videos under Creative Commons license</li>
        <li>YouTube's official offline feature (YouTube Premium)</li>
        <li>Fair use for educational or personal purposes (varies by jurisdiction)</li>
      </ul>

      <h2>Method 1: Using Our YouTube Downloader</h2>
      <p>The easiest way to download YouTube videos is using our free online downloader. Here's how:</p>
      <ol>
        <li><strong>Copy the Video URL:</strong> Go to YouTube and copy the URL of the video you want to download</li>
        <li><strong>Paste in Our Downloader:</strong> Visit our <a href="/tools/youtube-downloader">YouTube Downloader</a> and paste the URL</li>
        <li><strong>Choose Quality:</strong> Select your preferred video quality (4K, 1080p, 720p, etc.)</li>
        <li><strong>Download:</strong> Click the download button and save the file</li>
      </ol>

      <h2>Available Video Qualities</h2>
      <p>Our YouTube downloader supports all available qualities:</p>
      <ul>
        <li><strong>4K (2160p):</strong> Ultra HD quality, large file size</li>
        <li><strong>1080p:</strong> Full HD, excellent quality for most uses</li>
        <li><strong>720p:</strong> HD quality, good balance of quality and size</li>
        <li><strong>480p/360p:</strong> Standard quality, smaller file sizes</li>
        <li><strong>Audio Only (MP3):</strong> Extract just the audio track</li>
      </ul>

      <h2>Tips for Successful Downloads</h2>
      <ul>
        <li>Ensure you have a stable internet connection</li>
        <li>Choose the right quality based on your needs and storage space</li>
        <li>For long videos, be patient as processing may take time</li>
        <li>Use a modern browser for best compatibility</li>
      </ul>

      <h2>Alternative Methods</h2>
      <h3>YouTube Premium</h3>
      <p>YouTube's official solution allows offline downloads within their app. This is the most legitimate method but requires a paid subscription.</p>

      <h3>Browser Extensions</h3>
      <p>Various browser extensions can add download buttons to YouTube, though these may violate YouTube's terms and could pose security risks.</p>

      <h2>Common Issues and Solutions</h2>
      <ul>
        <li><strong>Video not downloading:</strong> Try refreshing the page and ensuring the URL is correct</li>
        <li><strong>Quality not available:</strong> Some videos may not have all quality options</li>
        <li><strong>Slow downloads:</strong> This could be due to your internet speed or server load</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Downloading YouTube videos can be useful for offline viewing, education, and content preservation. Always respect copyright laws and content creators' rights. For the easiest and safest experience, use our <a href="/tools/youtube-downloader">YouTube Downloader tool</a>.</p>
    `,
    relatedPosts: [
      "how-to-download-vimeo-videos",
      "how-to-download-tiktok-videos",
      "how-to-download-instagram-content"
    ]
  },
  "how-to-download-tiktok-videos": {
    title: "Download TikTok Videos Without Watermark",
    description: "Discover how to save TikTok videos without the watermark.",
    date: "2024-01-12",
    readTime: "4 min read",
    category: "Social Media",
    content: `
      <h2>Why Download TikTok Videos?</h2>
      <p>TikTok has become one of the most popular social media platforms, with millions of creative videos shared daily. You might want to download TikTok videos to:</p>
      <ul>
        <li>Save your favorite content for offline viewing</li>
        <li>Create compilations or reaction videos</li>
        <li>Preserve memories before they're deleted</li>
        <li>Share videos on other platforms</li>
      </ul>

      <h2>The Watermark Issue</h2>
      <p>When you download videos directly from TikTok, they come with a watermark that includes the TikTok logo and username. While this credits the creator, it can be distracting for certain uses.</p>

      <h2>How to Download Without Watermark</h2>
      <ol>
        <li><strong>Find the Video:</strong> Open TikTok and locate the video you want to download</li>
        <li><strong>Copy the Link:</strong> Tap the Share button and select "Copy Link"</li>
        <li><strong>Use Our Tool:</strong> Go to our <a href="/tools/tiktok-downloader">TikTok Downloader</a></li>
        <li><strong>Paste and Download:</strong> Paste the link and select "HD (No Watermark)"</li>
      </ol>

      <h2>Download Options</h2>
      <p>Our TikTok downloader offers several options:</p>
      <ul>
        <li><strong>HD (No Watermark):</strong> High quality without TikTok branding</li>
        <li><strong>HD (With Watermark):</strong> Original video with watermark</li>
        <li><strong>Audio Only (MP3):</strong> Extract just the sound</li>
      </ul>

      <h2>Mobile vs Desktop</h2>
      <p>Our downloader works on both mobile devices and desktop computers. The process is the same, but on mobile, you may need to long-press the download button and select "Download" from the menu.</p>

      <h2>Respecting Creators</h2>
      <p>While our tool removes watermarks, we encourage users to:</p>
      <ul>
        <li>Credit the original creator when reposting</li>
        <li>Respect copyright and intellectual property</li>
        <li>Use downloaded content responsibly</li>
      </ul>

      <h2>Try It Now</h2>
      <p>Ready to download your favorite TikTok videos? Visit our <a href="/tools/tiktok-downloader">TikTok Downloader</a> and start saving content without watermarks!</p>
    `,
    relatedPosts: [
      "how-to-download-instagram-content",
      "how-to-download-youtube-videos",
      "how-to-download-facebook-videos"
    ]
  }
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Article Header */}
        <article className="container py-8">
          <div className="mx-auto max-w-4xl">
            {/* Back Button */}
            <Link href="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            {/* Article Meta */}
            <header className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <Badge>{post.category}</Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight">{post.title}</h1>
              <p className="text-xl text-muted-foreground">{post.description}</p>
            </header>

            {/* Share Buttons */}
            <div className="mb-8 flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Related Posts */}
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <section className="border-t pt-8">
                <h2 className="mb-6 text-2xl font-bold">Related Guides</h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {post.relatedPosts.map((relatedSlug: string) => {
                    const relatedPost = blogPosts[relatedSlug];
                    if (!relatedPost) return null;
                    
                    return (
                      <Link key={relatedSlug} href={`/blog/${relatedSlug}`}>
                        <Card className="h-full transition-all hover:shadow-md">
                          <CardContent className="p-4">
                            <Badge variant="secondary" className="mb-2 text-xs">
                              {relatedPost.category}
                            </Badge>
                            <h3 className="font-semibold line-clamp-2 mb-2">
                              {relatedPost.title}
                            </h3>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <BookOpen className="h-3 w-3" />
                              {relatedPost.readTime}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>
    </>
  );
}