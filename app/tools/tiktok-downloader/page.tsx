"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Music, 
  Download,
  Link,
  Sparkles,
  Check,
  Play,
  FileVideo,
  Image,
  AlertCircle,
  Zap,
  Shield
} from "lucide-react";

export default function TikTokDownloaderPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoInfo, setVideoInfo] = useState<any>(null);

  const features = [
    "Download TikTok videos without watermark",
    "Save videos in HD quality (1080p)",
    "Extract audio as MP3 files",
    "Download profile pictures and cover images",
    "Support for TikTok stories and live streams",
    "Batch download multiple videos",
    "No registration or app installation required",
    "Works on all devices - mobile and desktop"
  ];

  const handleDownload = () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setVideoInfo({
        title: "Amazing Dance Challenge #fyp",
        author: "@coolcreator",
        duration: "0:15",
        thumbnail: "https://via.placeholder.com/320x568",
        formats: [
          { quality: "HD (No Watermark)", format: "MP4", size: "12 MB" },
          { quality: "HD (With Watermark)", format: "MP4", size: "12 MB" },
          { quality: "SD", format: "MP4", size: "6 MB" },
        ],
        audioFormats: [
          { quality: "Original", format: "MP3", size: "2 MB" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-pink-50 dark:from-white/5 dark:to-pink-950/20" />
          <div className="absolute right-0 top-0 h-96 w-96 bg-gradient-to-br from-black/10 to-pink-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-gradient-to-tr from-pink-600/10 to-black/10 blur-3xl" />
          
          <div className="container relative py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-black to-gray-800 shadow-2xl">
                <Music className="h-10 w-10 text-white" />
              </div>
              
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                No Watermark Downloads
              </Badge>
              
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                TikTok Video Downloader
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Download TikTok videos without watermark in HD quality. Fast, free, 
                and works with all TikTok content.
              </p>
            </div>
          </div>
        </section>

        <div className="container py-8">
          <div className="mx-auto max-w-4xl">
            {/* Download Section */}
            <Card className="mb-8 overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-black/5 to-pink-500/10">
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5" />
                  Enter TikTok URL
                </CardTitle>
                <CardDescription>
                  Paste the TikTok video, story, or live stream link below
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      placeholder="https://www.tiktok.com/@username/video/..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleDownload}
                      disabled={!url || isLoading}
                      className="min-w-[120px]"
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
                  
                  <div className="flex items-center gap-6 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      <span>Lightning fast downloads</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      <span>100% safe & secure</span>
                    </div>
                  </div>
                </div>

                {/* Video Info & Download Options */}
                {videoInfo && (
                  <div className="mt-8 space-y-6">
                    {/* Video Preview */}
                    <div className="flex gap-4 rounded-lg border bg-muted/30 p-4">
                      <img 
                        src={videoInfo.thumbnail} 
                        alt="Video thumbnail"
                        className="h-32 w-20 rounded object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{videoInfo.title}</h3>
                        <p className="text-sm text-muted-foreground">By {videoInfo.author}</p>
                        <p className="text-sm text-muted-foreground">Duration: {videoInfo.duration}</p>
                      </div>
                    </div>

                    {/* Download Options */}
                    <Tabs defaultValue="video" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="video">
                          <FileVideo className="mr-2 h-4 w-4" />
                          Video
                        </TabsTrigger>
                        <TabsTrigger value="audio">
                          <Music className="mr-2 h-4 w-4" />
                          Audio Only
                        </TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="video" className="space-y-2">
                        {videoInfo.formats.map((format: any, index: number) => (
                          <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                            <div className="flex items-center gap-3">
                              <FileVideo className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">{format.quality}</p>
                                <p className="text-sm text-muted-foreground">{format.format} • {format.size}</p>
                              </div>
                            </div>
                            <Button size="sm" variant={index === 0 ? "default" : "outline"}>
                              <Download className="mr-2 h-3 w-3" />
                              Download
                            </Button>
                          </div>
                        ))}
                      </TabsContent>
                      
                      <TabsContent value="audio" className="space-y-2">
                        {videoInfo.audioFormats.map((format: any, index: number) => (
                          <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                            <div className="flex items-center gap-3">
                              <Music className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">{format.quality} Audio</p>
                                <p className="text-sm text-muted-foreground">{format.format} • {format.size}</p>
                              </div>
                            </div>
                            <Button size="sm" variant="outline">
                              <Download className="mr-2 h-3 w-3" />
                              Download
                            </Button>
                          </div>
                        ))}
                      </TabsContent>
                    </Tabs>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              {/* Features List */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Why Choose Our TikTok Downloader?
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
                    <Shield className="h-5 w-5 text-primary" />
                    Premium Features
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
                <CardTitle>How to Download TikTok Videos Without Watermark</CardTitle>
                <CardDescription>
                  Three simple steps to save any TikTok video
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">1</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Copy Video Link</h3>
                    <p className="text-sm text-muted-foreground">
                      Open TikTok, tap Share and copy the video link
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">2</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Paste URL Here</h3>
                    <p className="text-sm text-muted-foreground">
                      Paste the link in our downloader and click download
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">3</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Save Video</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose quality and download without watermark
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
                  <h3 className="font-semibold">How do I download TikTok videos without watermark?</h3>
                  <p className="text-sm text-muted-foreground">
                    Simply paste the TikTok video URL into our downloader and select the &quot;HD (No Watermark)&quot; 
                    option. Our tool removes the TikTok watermark automatically while preserving video quality.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Can I download TikTok stories and live streams?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Our downloader supports TikTok stories, regular videos, and even live streams. 
                    Just paste the URL and we&apos;ll handle the rest.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Is this TikTok downloader free to use?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! Our TikTok downloader is 100% free with no hidden charges, registration 
                    requirements, or download limits. Use it as much as you want.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Does it work on iPhone and Android?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, our TikTok downloader works on all devices including iPhone, Android, tablets, 
                    and computers. No app installation needed - it works directly in your browser.
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