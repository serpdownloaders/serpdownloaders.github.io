"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Twitter, 
  Download,
  Link,
  Sparkles,
  Check,
  Play,
  FileVideo,
  Image as ImageIcon,
  MessageSquare,
  Heart,
  Repeat,
  Share,
  AlertCircle
} from "lucide-react";

export default function TwitterDownloaderPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tweetInfo, setTweetInfo] = useState<any>(null);

  const features = [
    "Download Twitter/X videos in HD quality",
    "Save Twitter images in original resolution",
    "Download GIFs and animated content",
    "Support for Twitter video threads",
    "Extract media from quote tweets",
    "No Twitter account required for public tweets",
    "Batch download from Twitter threads",
    "Preserve original file quality and metadata"
  ];

  const handleDownload = () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setTweetInfo({
        content: "Just launched our new product! Check out this amazing demo video 🚀 #ProductLaunch #Innovation",
        author: "@TechStartup2024",
        timestamp: "2 hours ago",
        likes: "1,234",
        retweets: "567",
        thumbnail: "https://via.placeholder.com/600x340",
        mediaItems: [
          { type: "video", quality: "720p HD", format: "MP4", size: "15 MB" },
          { type: "video", quality: "480p", format: "MP4", size: "8 MB" },
          { type: "image", quality: "Original", format: "JPG", size: "2.1 MB" },
        ]
      });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20" />
          <div className="absolute right-0 top-0 h-96 w-96 bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-sky-600/10 blur-3xl" />
          
          <div className="container relative py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-sky-600 shadow-2xl">
                <Twitter className="h-10 w-10 text-white" />
              </div>
              
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Social Media Content Downloader
              </Badge>
              
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Twitter/X Downloader
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Download Twitter/X videos, images, and GIFs in original quality. 
                Save viral content, memes, and important media from tweets.
              </p>
            </div>
          </div>
        </section>

        <div className="container py-8">
          <div className="mx-auto max-w-4xl">
            {/* Download Section */}
            <Card className="mb-8 overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500/10 to-sky-600/10">
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5" />
                  Enter Twitter/X URL
                </CardTitle>
                <CardDescription>
                  Paste any Twitter or X post link to download media content
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      placeholder="https://twitter.com/username/status/... or https://x.com/..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleDownload}
                      disabled={!url || isLoading}
                      className="min-w-[120px] bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700"
                    >
                      {isLoading ? (
                        <>Loading...</>
                      ) : (
                        <>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 p-3 text-sm text-blue-800 dark:text-blue-200">
                    <AlertCircle className="inline h-4 w-4 mr-2" />
                    Works with both twitter.com and x.com URLs. Only public tweets are supported.
                  </div>
                </div>

                {/* Tweet Info & Download Options */}
                {tweetInfo && (
                  <div className="mt-8 space-y-6">
                    {/* Tweet Preview */}
                    <div className="rounded-lg border bg-muted/30 p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-sky-600"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{tweetInfo.author}</span>
                            <span className="text-sm text-muted-foreground">{tweetInfo.timestamp}</span>
                          </div>
                          <p className="text-sm mt-1">{tweetInfo.content}</p>
                        </div>
                      </div>
                      
                      <img 
                        src={tweetInfo.thumbnail} 
                        alt="Tweet media"
                        className="w-full h-48 rounded object-cover mb-3"
                      />
                      
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          Reply
                        </span>
                        <span className="flex items-center gap-1">
                          <Repeat className="h-4 w-4" />
                          {tweetInfo.retweets}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {tweetInfo.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Share className="h-4 w-4" />
                          Share
                        </span>
                      </div>
                    </div>

                    {/* Download Options */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-sm">Available Downloads:</h3>
                      {tweetInfo.mediaItems.map((item: any, index: number) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center gap-3">
                            {item.type === "video" ? (
                              <FileVideo className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <ImageIcon className="h-5 w-5 text-muted-foreground" />
                            )}
                            <div>
                              <p className="font-medium">
                                {item.type === "video" ? "Video" : "Image"} - {item.quality}
                              </p>
                              <p className="text-sm text-muted-foreground">{item.format} • {item.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant={index === 0 ? "default" : "outline"}>
                            <Download className="mr-2 h-3 w-3" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Content Type Cards */}
            <div className="mb-8 grid gap-4 md:grid-cols-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <FileVideo className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                  <p className="font-semibold">Videos</p>
                  <p className="text-xs text-muted-foreground">HD quality</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <ImageIcon className="mx-auto mb-2 h-8 w-8 text-sky-600" />
                  <p className="font-semibold">Images</p>
                  <p className="text-xs text-muted-foreground">Original size</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Play className="mx-auto mb-2 h-8 w-8 text-indigo-600" />
                  <p className="font-semibold">GIFs</p>
                  <p className="text-xs text-muted-foreground">Animated</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MessageSquare className="mx-auto mb-2 h-8 w-8 text-cyan-600" />
                  <p className="font-semibold">Threads</p>
                  <p className="text-xs text-muted-foreground">Multiple posts</p>
                </CardContent>
              </Card>
            </div>

            {/* Features Grid */}
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              {/* Features List */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Additional Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Twitter className="h-5 w-5 text-primary" />
                    Advanced Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {features.slice(4).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* How It Works */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>How to Download from Twitter/X</CardTitle>
                <CardDescription>
                  Save media content from tweets in just 3 steps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900/20 dark:to-sky-900/20">
                      <span className="text-lg font-bold bg-gradient-to-br from-blue-600 to-sky-600 bg-clip-text text-transparent">1</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Copy Tweet URL</h3>
                    <p className="text-sm text-muted-foreground">
                      Copy the link of any Twitter/X post with media
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-sky-900/20 dark:to-indigo-900/20">
                      <span className="text-lg font-bold bg-gradient-to-br from-sky-600 to-indigo-600 bg-clip-text text-transparent">2</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Paste & Extract</h3>
                    <p className="text-sm text-muted-foreground">
                      Paste the URL and we&apos;ll extract all media content
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/20 dark:to-blue-900/20">
                      <span className="text-lg font-bold bg-gradient-to-br from-indigo-600 to-blue-600 bg-clip-text text-transparent">3</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Download</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose format and save to your device
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Can I download videos from private Twitter accounts?</h3>
                  <p className="text-sm text-muted-foreground">
                    No, our downloader only works with public tweets. Private or protected accounts 
                    require special authentication which we don&apos;t support for privacy reasons.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Does this work with both Twitter and X URLs?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Our tool supports both twitter.com and x.com URLs. Simply paste either format 
                    and we&apos;ll automatically process the content.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Can I download multiple images from a single tweet?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! If a tweet contains multiple images or videos, our tool will detect 
                    all media files and allow you to download each one individually or as a batch.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">What about GIFs and animated content?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, we support downloading GIFs, animated images, and short video loops. The content 
                    will be saved in its original format with animation preserved.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}