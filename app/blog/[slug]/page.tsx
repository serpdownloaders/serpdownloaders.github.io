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
  },
  "how-to-download-instagram-content": {
    title: "Instagram Downloader Guide: Photos, Videos, Reels & Stories",
    description: "Complete guide to downloading all types of Instagram content including photos, videos, Reels, and Stories.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Social Media",
    content: `
      <h2>Instagram Content Types</h2>
      <p>Instagram offers various content formats, each with unique characteristics and download methods:</p>
      <ul>
        <li><strong>Photos:</strong> Single images or carousel posts with multiple images</li>
        <li><strong>Videos:</strong> Regular video posts up to 60 seconds</li>
        <li><strong>Reels:</strong> Short-form vertical videos up to 90 seconds</li>
        <li><strong>Stories:</strong> Temporary content that disappears after 24 hours</li>
        <li><strong>IGTV:</strong> Longer video content (now integrated with regular videos)</li>
      </ul>

      <h2>How to Download Instagram Photos</h2>
      <ol>
        <li><strong>Open Instagram:</strong> Navigate to the photo you want to download</li>
        <li><strong>Copy the Link:</strong> Tap the three dots menu and select "Copy Link"</li>
        <li><strong>Visit Our Tool:</strong> Go to our <a href="/tools/instagram-downloader">Instagram Downloader</a></li>
        <li><strong>Download:</strong> Paste the link and click download</li>
      </ol>

      <h2>Downloading Instagram Reels</h2>
      <p>Reels are Instagram's answer to TikTok, and they're incredibly popular. To download Reels:</p>
      <ol>
        <li>Find the Reel you want to save</li>
        <li>Tap the share button (paper airplane icon)</li>
        <li>Select "Copy Link"</li>
        <li>Use our downloader to save the Reel in HD quality</li>
      </ol>

      <h2>Saving Instagram Stories</h2>
      <p>Stories are temporary by design, but you can still save them:</p>
      <ul>
        <li><strong>Public Accounts:</strong> Copy the story URL while it's active</li>
        <li><strong>Time Sensitive:</strong> Must download within 24 hours</li>
        <li><strong>Multiple Slides:</strong> Our tool downloads all slides in a story</li>
      </ul>

      <h2>Carousel Posts (Multiple Photos)</h2>
      <p>For posts with multiple photos or videos:</p>
      <ul>
        <li>Our downloader detects all media in the post</li>
        <li>Choose to download individual items or all at once</li>
        <li>Maintains original quality and order</li>
      </ul>

      <h2>Quality Options</h2>
      <p>Instagram compresses uploads, but our downloader gets the best available quality:</p>
      <ul>
        <li><strong>Photos:</strong> Up to 1080x1080 pixels (or original aspect ratio)</li>
        <li><strong>Videos:</strong> Up to 1080p resolution</li>
        <li><strong>Reels:</strong> Full HD vertical video</li>
        <li><strong>Stories:</strong> 1080x1920 pixels</li>
      </ul>

      <h2>Privacy Considerations</h2>
      <p>Important notes about privacy:</p>
      <ul>
        <li>Only works with public accounts or content you have access to</li>
        <li>Private account content cannot be downloaded without following</li>
        <li>Respect content creators' intellectual property</li>
        <li>Don't use downloaded content for commercial purposes without permission</li>
      </ul>

      <h2>Start Downloading</h2>
      <p>Ready to save your favorite Instagram content? Try our <a href="/tools/instagram-downloader">Instagram Downloader</a> now!</p>
    `,
    relatedPosts: [
      "how-to-download-tiktok-videos",
      "how-to-download-facebook-videos",
      "best-social-media-downloaders"
    ]
  },
  "how-to-download-vimeo-videos": {
    title: "Vimeo Video Downloader: Private & Embedded Videos",
    description: "Learn how to download Vimeo videos including private and password-protected content with our comprehensive guide.",
    date: "2024-01-08",
    readTime: "5 min read",
    category: "Video Platforms",
    content: `
      <h2>Understanding Vimeo</h2>
      <p>Vimeo is a premium video hosting platform favored by professionals, artists, and businesses. Unlike YouTube, Vimeo offers more control over video privacy and embedding options, which can make downloading more complex.</p>

      <h2>Types of Vimeo Videos</h2>
      <ul>
        <li><strong>Public Videos:</strong> Accessible to anyone with the link</li>
        <li><strong>Private Videos:</strong> Require a direct link or invitation</li>
        <li><strong>Password Protected:</strong> Need a password to view</li>
        <li><strong>Domain Restricted:</strong> Only play on specific websites</li>
        <li><strong>Embedded Only:</strong> Can't be viewed on Vimeo directly</li>
      </ul>

      <h2>Downloading Public Vimeo Videos</h2>
      <ol>
        <li><strong>Get the URL:</strong> Copy the video link from your browser</li>
        <li><strong>Open Our Tool:</strong> Visit our <a href="/tools/vimeo-video-downloader">Vimeo Downloader</a></li>
        <li><strong>Choose Quality:</strong> Select from available quality options</li>
        <li><strong>Download:</strong> Save the video to your device</li>
      </ol>

      <h2>Handling Private Videos</h2>
      <p>For private or restricted videos:</p>
      <ul>
        <li>You must have legitimate access to the video</li>
        <li>Some private videos may have download disabled by the owner</li>
        <li>Password-protected videos require the password</li>
      </ul>

      <h2>Quality Options</h2>
      <p>Vimeo videos are often uploaded in high quality. Available options typically include:</p>
      <ul>
        <li><strong>4K (2160p):</strong> Ultra HD for premium content</li>
        <li><strong>1080p:</strong> Full HD standard quality</li>
        <li><strong>720p:</strong> HD quality, smaller file size</li>
        <li><strong>540p/360p:</strong> Lower quality for faster downloads</li>
      </ul>

      <h2>Downloading Embedded Videos</h2>
      <p>Many Vimeo videos are embedded on other websites:</p>
      <ol>
        <li>Right-click the video and select "Copy video URL"</li>
        <li>If that doesn't work, check the page source for the Vimeo ID</li>
        <li>Use the format: vimeo.com/VIDEO_ID</li>
        <li>Paste in our downloader</li>
      </ol>

      <h2>Common Issues</h2>
      <ul>
        <li><strong>"Video not found":</strong> Check if the video is private or deleted</li>
        <li><strong>"Download disabled":</strong> The owner has restricted downloads</li>
        <li><strong>Slow speeds:</strong> Vimeo may throttle downloads during peak times</li>
      </ul>

      <h2>Legal Considerations</h2>
      <p>Vimeo hosts professional content, so be extra careful about:</p>
      <ul>
        <li>Respecting copyright and licensing terms</li>
        <li>Not redistributing paid content</li>
        <li>Following fair use guidelines</li>
        <li>Getting permission for commercial use</li>
      </ul>

      <h2>Try Our Vimeo Downloader</h2>
      <p>Download Vimeo videos quickly and easily with our <a href="/tools/vimeo-video-downloader">Vimeo Downloader</a>. Support for all public videos and many private formats!</p>
    `,
    relatedPosts: [
      "how-to-download-youtube-videos",
      "best-video-quality-settings",
      "downloading-private-videos-guide"
    ]
  },
  "how-to-download-facebook-videos": {
    title: "How to Download Facebook Videos and Photos - Complete Guide 2025",
    description: "Download Facebook videos, photos, and stories easily. Learn the best methods to save Facebook content for offline viewing with step-by-step instructions.",
    date: "2024-12-01",
    readTime: "10 min read",
    category: "Social Media",
    content: `
      <h2>Why Download Facebook Content?</h2>
      <p>Facebook remains one of the world's largest social media platforms, hosting billions of videos, photos, and other media content daily. Users often want to download Facebook content for:</p>
      <ul>
        <li><strong>Preserving family memories</strong> and special moments</li>
        <li><strong>Saving educational content</strong> for offline learning</li>
        <li><strong>Creating backup copies</strong> of important media</li>
        <li><strong>Content curation</strong> for other projects</li>
        <li><strong>Offline viewing</strong> during travel</li>
        <li><strong>Research and documentation</strong> purposes</li>
      </ul>

      <h2>Understanding Facebook Media Types</h2>
      <p>Facebook hosts various types of content:</p>
      
      <h3>Video Content</h3>
      <ul>
        <li><strong>Public videos</strong> - Accessible to everyone</li>
        <li><strong>Private videos</strong> - Shared with friends or specific groups</li>
        <li><strong>Live videos</strong> - Real-time broadcasts and recordings</li>
        <li><strong>Stories</strong> - Temporary 24-hour content</li>
        <li><strong>Reels</strong> - Short-form vertical videos</li>
      </ul>
      
      <h3>Image Content</h3>
      <ul>
        <li><strong>Profile pictures</strong> and cover photos</li>
        <li><strong>Photo albums</strong> and galleries</li>
        <li><strong>Individual posts</strong> with images</li>
        <li><strong>Story images</strong> and highlights</li>
        <li><strong>Shared photos</strong> from other users</li>
      </ul>

      <h2>Best Methods to Download Facebook Videos</h2>
      
      <h3>Method 1: Using Our Facebook Downloader Tool</h3>
      <p>The most reliable and user-friendly approach:</p>
      <ol>
        <li><strong>Navigate to the Facebook video</strong> you want to download</li>
        <li><strong>Click the three dots</strong> (...) on the video post</li>
        <li><strong>Select "Copy link"</strong> from the dropdown menu</li>
        <li><strong>Visit our <a href="/tools/facebook-downloader">Facebook Downloader tool</a></strong></li>
        <li><strong>Paste the link</strong> in the input field</li>
        <li><strong>Choose quality</strong> (HD, SD, or audio only)</li>
        <li><strong>Click download</strong> and save the file</li>
      </ol>

      <h3>Method 2: Browser Developer Tools</h3>
      <p>For more technical users:</p>
      <ol>
        <li>Open the Facebook video in your browser</li>
        <li>Press F12 to open Developer Tools</li>
        <li>Go to the Network tab</li>
        <li>Play the video and look for MP4 files</li>
        <li>Right-click and save the video URL</li>
      </ol>

      <h3>Method 3: Browser Extensions</h3>
      <p>Popular extensions include:</p>
      <ul>
        <li><strong>FB Video Downloader</strong> - Simple one-click downloads</li>
        <li><strong>Social Video Downloader</strong> - Works across multiple platforms</li>
        <li><strong>Video DownloadHelper</strong> - Comprehensive media downloader</li>
      </ul>

      <h2>Downloading Facebook Photos</h2>
      
      <h3>Single Photo Downloads</h3>
      <ol>
        <li><strong>Open the photo</strong> in full resolution</li>
        <li><strong>Right-click</strong> on the image</li>
        <li><strong>Select "Save image as"</strong></li>
        <li><strong>Choose location</strong> and save</li>
      </ol>

      <h3>Album Downloads</h3>
      <p>For downloading entire albums:</p>
      <ol>
        <li>Use our Facebook downloader with album URL</li>
        <li>Select "Download All" option</li>
        <li>Choose image quality preferences</li>
        <li>Download as ZIP file</li>
      </ol>

      <h2>Facebook Stories and Reels</h2>
      
      <h3>Downloading Stories</h3>
      <p>Stories disappear after 24 hours, so act quickly:</p>
      <ul>
        <li>Copy the story URL while viewing</li>
        <li>Use our downloader immediately</li>
        <li>Stories can include multiple slides</li>
        <li>Download each slide individually or as a collection</li>
      </ul>

      <h3>Downloading Reels</h3>
      <p>Facebook Reels are similar to Instagram Reels:</p>
      <ul>
        <li>Copy the Reel URL from the share menu</li>
        <li>Paste in our downloader</li>
        <li>Choose video quality (usually 720p or 1080p)</li>
        <li>Optional: Extract audio only</li>
      </ul>

      <h2>Legal and Ethical Considerations</h2>
      
      <h3>Copyright and Privacy</h3>
      <p>Before downloading Facebook content:</p>
      <ul>
        <li><strong>Respect copyright</strong> - Don't download copyrighted content without permission</li>
        <li><strong>Privacy matters</strong> - Only download content you have access to legitimately</li>
        <li><strong>Personal use</strong> - Keep downloads for personal viewing only</li>
        <li><strong>Creator rights</strong> - Credit original creators when sharing</li>
      </ul>

      <h3>Facebook's Terms of Service</h3>
      <p>Important points to remember:</p>
      <ul>
        <li>Facebook's ToS generally prohibits automated downloading</li>
        <li>Manual downloads for personal use are typically acceptable</li>
        <li>Commercial use of downloaded content requires permission</li>
        <li>Respect intellectual property rights</li>
      </ul>

      <h2>Technical Tips for Better Downloads</h2>
      
      <h3>Video Quality Settings</h3>
      <ul>
        <li><strong>HD (720p/1080p)</strong> - Best for large screens and archiving</li>
        <li><strong>SD (480p)</strong> - Good balance of quality and file size</li>
        <li><strong>Low Quality (360p)</strong> - For slow connections or mobile viewing</li>
      </ul>

      <h3>File Formats</h3>
      <ul>
        <li><strong>MP4</strong> - Most compatible video format</li>
        <li><strong>MP3</strong> - Audio extraction for music or podcasts</li>
        <li><strong>JPG/PNG</strong> - Standard image formats</li>
        <li><strong>WEBM</strong> - Alternative video format with good compression</li>
      </ul>

      <h2>Troubleshooting Common Issues</h2>
      
      <h3>Video Won't Download</h3>
      <ul>
        <li><strong>Check privacy settings</strong> - Ensure the video is publicly accessible</li>
        <li><strong>Verify the URL</strong> - Make sure you copied the complete link</li>
        <li><strong>Try different browser</strong> - Some browsers may have restrictions</li>
        <li><strong>Update downloader</strong> - Facebook frequently changes its structure</li>
      </ul>

      <h3>Poor Quality Downloads</h3>
      <ul>
        <li>Facebook may compress videos during upload</li>
        <li>Choose the highest available quality option</li>
        <li>Download during off-peak hours for better speeds</li>
        <li>Check if HD version is available</li>
      </ul>

      <h2>Alternative Download Methods</h2>
      
      <h3>Screen Recording</h3>
      <p>As a last resort, you can use screen recording:</p>
      <ul>
        <li><strong>Windows</strong> - Use Xbox Game Bar or OBS Studio</li>
        <li><strong>Mac</strong> - QuickTime or built-in screen recording</li>
        <li><strong>Mobile</strong> - Native screen recording features</li>
      </ul>

      <h3>Facebook's Official Download Options</h3>
      <p>Facebook provides some built-in download features:</p>
      <ul>
        <li><strong>Download Your Information</strong> - Bulk download your own content</li>
        <li><strong>Save to Collection</strong> - Facebook's bookmarking feature</li>
        <li><strong>HD Download</strong> - Available for some videos when logged in</li>
      </ul>

      <h2>Privacy and Security Tips</h2>
      <ul>
        <li><strong>Use trusted tools</strong> - Avoid suspicious download sites</li>
        <li><strong>Check permissions</strong> - Don't grant unnecessary access</li>
        <li><strong>Scan downloads</strong> - Use antivirus for downloaded files</li>
        <li><strong>Private browsing</strong> - Use incognito mode when needed</li>
      </ul>

      <h2>Organizing Downloaded Content</h2>
      
      <h3>File Management Tips</h3>
      <ul>
        <li>Create organized folder structures by date or event</li>
        <li>Use descriptive filenames for easy searching</li>
        <li>Keep metadata and captions when possible</li>
        <li>Regular backups of important downloads</li>
      </ul>

      <h3>Storage Recommendations</h3>
      <ul>
        <li><strong>Local storage</strong> - External drives for large collections</li>
        <li><strong>Cloud backup</strong> - Google Drive, Dropbox, or OneDrive</li>
        <li><strong>Media servers</strong> - Plex or similar for streaming</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Downloading Facebook content can help preserve memories, save important information, and enable offline viewing. Our <a href="/tools/facebook-downloader">Facebook Downloader tool</a> makes the process simple and reliable while respecting privacy and copyright considerations.</p>
      <p>Remember to always download responsibly, respect content creators' rights, and use downloaded content appropriately. Whether you're saving family photos, educational videos, or entertaining content, having the right tools and knowledge ensures a smooth downloading experience.</p>
      <p><strong>Ready to start?</strong> Try our <a href="/tools/facebook-downloader">free Facebook downloader</a> now - no registration required, works with all types of Facebook content!</p>
    `,
    relatedPosts: [
      "how-to-download-instagram-content",
      "how-to-download-tiktok-videos",
      "social-media-download-guide"
    ]
  }
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

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