"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Camera, 
  Download,
  Link,
  Sparkles,
  Check,
  Play,
  FileVideo,
  Image as ImageIcon,
  Film,
  Heart,
  Grid,
  AlertCircle
} from "lucide-react";

export default function InstagramDownloaderPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mediaInfo, setMediaInfo] = useState<any>(null);

  const features = [
    "Download Instagram photos in original quality",
    "Save Instagram videos and Reels",
    "Download Instagram Stories before they expire",
    "Batch download from Instagram posts",
    "Extract images from carousel posts",
    "Download IGTV videos in HD",
    "Save profile pictures in full resolution",
    "No login or password required"
  ];

  const handleDownload = () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setMediaInfo({
        type: "reel",
        caption: "Amazing sunset view 🌅 #nature #photography",
        author: "@photographer",
        likes: "12.5K",
        thumbnail: "https://via.placeholder.com/400x500",
        mediaItems: [
          { type: "video", quality: "1080p HD", format: "MP4", size: "25 MB" },
          { type: "video", quality: "720p", format: "MP4", size: "15 MB" },
          { type: "image", quality: "Original", format: "JPG", size: "3.2 MB" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50/50 to-orange-50 dark:from-pink-950/20 dark:via-purple-950/10 dark:to-orange-950/20" />
          <div className="absolute right-0 top-0 h-96 w-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-gradient-to-tr from-orange-500/20 to-pink-500/20 blur-3xl" />
          
          <div className="container relative py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 shadow-2xl">
                <Camera className="h-10 w-10 text-white" />
              </div>
              
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Photos, Videos, Reels & Stories
              </Badge>
              
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Instagram Downloader
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Download Instagram photos, videos, Reels, Stories, and IGTV content 
                in original quality. Fast, free, and anonymous.
              </p>
            </div>
          </div>
        </section>

        <div className="container py-8">
          <div className="mx-auto max-w-4xl">
            {/* Download Section */}
            <Card className="mb-8 overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-orange-500/10">
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5" />
                  Enter Instagram URL
                </CardTitle>
                <CardDescription>
                  Paste any Instagram post, Reel, Story, or IGTV link
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      placeholder="https://www.instagram.com/p/... or /reel/..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleDownload}
                      disabled={!url || isLoading}
                      className="min-w-[120px] bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
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
                  
                  <div className="rounded-lg bg-amber-50 dark:bg-amber-950/20 p-3 text-sm text-amber-800 dark:text-amber-200">
                    <AlertCircle className="inline h-4 w-4 mr-2" />
                    Works with public accounts only. Private content requires login.
                  </div>
                </div>

                {/* Media Info & Download Options */}
                {mediaInfo && (
                  <div className="mt-8 space-y-6">
                    {/* Media Preview */}
                    <div className="flex gap-4 rounded-lg border bg-muted/30 p-4">
                      <img 
                        src={mediaInfo.thumbnail} 
                        alt="Media thumbnail"
                        className="h-32 w-24 rounded object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {mediaInfo.type.toUpperCase()}
                          </Badge>
                          <span className="text-sm text-muted-foreground">by {mediaInfo.author}</span>
                        </div>
                        <p className="text-sm mb-2 line-clamp-2">{mediaInfo.caption}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {mediaInfo.likes} likes
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Download Options */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-sm">Available Downloads:</h3>
                      {mediaInfo.mediaItems.map((item: any, index: number) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center gap-3">
                            {item.type === "video" ? (
                              <FileVideo className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <ImageIcon className="h-5 w-5 text-muted-foreground" />
                            )}
                            <div>
                              <p className="font-medium">
                                {item.type === "video" ? "Video" : "Photo"} - {item.quality}
                              </p>
                              <p className="text-sm text-muted-foreground">{item.format} • {item.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
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
                  <ImageIcon className="mx-auto mb-2 h-8 w-8 text-pink-600" />
                  <p className="font-semibold">Photos</p>
                  <p className="text-xs text-muted-foreground">Original quality</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Film className="mx-auto mb-2 h-8 w-8 text-purple-600" />
                  <p className="font-semibold">Reels</p>
                  <p className="text-xs text-muted-foreground">HD videos</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Play className="mx-auto mb-2 h-8 w-8 text-orange-600" />
                  <p className="font-semibold">Stories</p>
                  <p className="text-xs text-muted-foreground">Before expiry</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Grid className="mx-auto mb-2 h-8 w-8 text-indigo-600" />
                  <p className="font-semibold">Carousel</p>
                  <p className="text-xs text-muted-foreground">All images</p>
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
                    <Camera className="h-5 w-5 text-primary" />
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
                <CardTitle>How to Download from Instagram</CardTitle>
                <CardDescription>
                  Simple steps to save any Instagram content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20">
                      <span className="text-lg font-bold bg-gradient-to-br from-pink-600 to-purple-600 bg-clip-text text-transparent">1</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Copy Post URL</h3>
                    <p className="text-sm text-muted-foreground">
                      Open Instagram and copy the link of any post
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-orange-100 dark:from-purple-900/20 dark:to-orange-900/20">
                      <span className="text-lg font-bold bg-gradient-to-br from-purple-600 to-orange-600 bg-clip-text text-transparent">2</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Paste & Analyze</h3>
                    <p className="text-sm text-muted-foreground">
                      Paste the URL here and we&apos;ll fetch the content
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/20 dark:to-pink-900/20">
                      <span className="text-lg font-bold bg-gradient-to-br from-orange-600 to-pink-600 bg-clip-text text-transparent">3</span>
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
                  <h3 className="font-semibold">Can I download private Instagram content?</h3>
                  <p className="text-sm text-muted-foreground">
                    No, our downloader only works with public Instagram content. Private accounts 
                    require authentication which we don&apos;t support for privacy and security reasons.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">What types of Instagram content can I download?</h3>
                  <p className="text-sm text-muted-foreground">
                    You can download photos, videos, Reels, Stories, IGTV videos, and carousel posts 
                    (multiple images). Profile pictures can also be downloaded in full resolution.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Is there a limit to how many downloads?</h3>
                  <p className="text-sm text-muted-foreground">
                    No, there are no download limits. You can download as much content as you need, 
                    completely free of charge.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Do I need to log in to Instagram?</h3>
                  <p className="text-sm text-muted-foreground">
                    No login required! Just paste the URL of any public Instagram post and download. 
                    We never ask for your Instagram credentials.
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