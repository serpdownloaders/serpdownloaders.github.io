"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Facebook, 
  Download,
  Link,
  Sparkles,
  Check,
  Play,
  FileVideo,
  Image as ImageIcon,
  Users,
  ThumbsUp,
  Share2,
  MessageCircle,
  Clock,
  AlertCircle
} from "lucide-react";

export default function FacebookDownloaderPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [postInfo, setPostInfo] = useState<any>(null);

  const features = [
    "Download Facebook videos in HD quality",
    "Save Facebook photos in original resolution",
    "Download Facebook Reels and Stories",
    "Extract videos from Facebook Watch",
    "Support for Facebook Live recordings",
    "Download videos from Facebook groups",
    "Save Facebook Marketplace images",
    "No Facebook account required for public content"
  ];

  const handleDownload = () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setPostInfo({
        content: "Amazing travel experience! Just returned from an incredible adventure. Check out this stunning sunset video from our last day 🌅✈️",
        author: "Travel Adventures",
        timestamp: "3 hours ago",
        likes: "2.1K",
        comments: "87",
        shares: "234",
        thumbnail: "https://via.placeholder.com/600x400",
        mediaItems: [
          { type: "video", quality: "1080p HD", format: "MP4", size: "45 MB" },
          { type: "video", quality: "720p", format: "MP4", size: "28 MB" },
          { type: "video", quality: "480p", format: "MP4", size: "18 MB" },
          { type: "image", quality: "Original", format: "JPG", size: "3.5 MB" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-blue-50 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-blue-950/20" />
          <div className="absolute right-0 top-0 h-96 w-96 bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-indigo-600/10 blur-3xl" />
          
          <div className="container relative py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl">
                <Facebook className="h-10 w-10 text-white" />
              </div>
              
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Social Media Content Saver
              </Badge>
              
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Facebook Downloader
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Download Facebook videos, photos, Reels, and Stories in original quality. 
                Save memorable moments and viral content from Facebook.
              </p>
            </div>
          </div>
        </section>

        <div className="container py-8">
          <div className="mx-auto max-w-4xl">
            {/* Download Section */}
            <Card className="mb-8 overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500/10 to-indigo-600/10">
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5" />
                  Enter Facebook URL
                </CardTitle>
                <CardDescription>
                  Paste any Facebook post, video, Reel, or Story link
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      placeholder="https://www.facebook.com/username/videos/... or facebook.com/..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleDownload}
                      disabled={!url || isLoading}
                      className="min-w-[120px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
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
                    Only works with public Facebook content. Private posts and profiles are not supported.
                  </div>
                </div>

                {/* Post Info & Download Options */}
                {postInfo && (
                  <div className="mt-8 space-y-6">
                    {/* Post Preview */}
                    <div className="rounded-lg border bg-muted/30 p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{postInfo.author}</span>
                            <span className="text-sm text-muted-foreground">{postInfo.timestamp}</span>
                          </div>
                          <p className="text-sm mt-1">{postInfo.content}</p>
                        </div>
                      </div>
                      
                      <img 
                        src={postInfo.thumbnail} 
                        alt="Post media"
                        className="w-full h-48 rounded object-cover mb-3"
                      />
                      
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {postInfo.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {postInfo.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <Share2 className="h-4 w-4" />
                          {postInfo.shares}
                        </span>
                      </div>
                    </div>

                    {/* Download Options */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-sm">Available Downloads:</h3>
                      {postInfo.mediaItems.map((item: any, index: number) => (
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
                  <ImageIcon className="mx-auto mb-2 h-8 w-8 text-indigo-600" />
                  <p className="font-semibold">Photos</p>
                  <p className="text-xs text-muted-foreground">Original size</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Play className="mx-auto mb-2 h-8 w-8 text-purple-600" />
                  <p className="font-semibold">Reels</p>
                  <p className="text-xs text-muted-foreground">Short videos</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="mx-auto mb-2 h-8 w-8 text-cyan-600" />
                  <p className="font-semibold">Stories</p>
                  <p className="text-xs text-muted-foreground">24h content</p>
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
                    <Facebook className="h-5 w-5 text-primary" />
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
                <CardTitle>How to Download from Facebook</CardTitle>
                <CardDescription>
                  Save Facebook content in three simple steps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
                      <span className="text-lg font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">1</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Copy Facebook URL</h3>
                    <p className="text-sm text-muted-foreground">
                      Copy the link of any public Facebook post with media
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20">
                      <span className="text-lg font-bold bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent">2</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Paste & Process</h3>
                    <p className="text-sm text-muted-foreground">
                      Paste the URL and let us extract the content
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20">
                      <span className="text-lg font-bold bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent">3</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Download</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose quality and save to your device
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
                  <h3 className="font-semibold">Can I download videos from private Facebook accounts?</h3>
                  <p className="text-sm text-muted-foreground">
                    No, our downloader only works with public Facebook content. Private posts, profiles, 
                    and groups require authentication which we don&apos;t support for privacy and security reasons.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Does this work with Facebook Watch videos?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Our tool supports Facebook Watch videos, including both short-form and long-form 
                    content. Simply paste the Facebook Watch URL and download in your preferred quality.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Can I download Facebook Live recordings?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, once a Facebook Live stream has ended and been saved as a video post, you can 
                    download it using our tool. Active live streams cannot be downloaded while broadcasting.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Are there any download limits?</h3>
                  <p className="text-sm text-muted-foreground">
                    No, there are no limits on the number of downloads. You can save as much Facebook 
                    content as you need, completely free of charge.
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