"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Youtube, 
  Download,
  Link,
  Settings,
  Sparkles,
  Check,
  Play,
  Music,
  Film,
  FileVideo,
  Headphones,
  AlertCircle
} from "lucide-react";

export default function YouTubeDownloaderPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoInfo, setVideoInfo] = useState<any>(null);

  const features = [
    "Download videos in multiple quality options (HD, 4K, 1080p, 720p, 480p)",
    "Extract audio in MP3, WAV, and other formats",
    "No software installation required - works in your browser",
    "Completely free with no registration needed",
    "Fast download speeds and reliable service",
    "Support for playlists and channels",
    "Mobile-friendly interface",
    "No watermarks on downloaded content"
  ];

  const handleDownload = () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setVideoInfo({
        title: "Sample Video Title",
        duration: "10:25",
        thumbnail: "https://via.placeholder.com/320x180",
        formats: [
          { quality: "4K", format: "MP4", size: "850 MB" },
          { quality: "1080p", format: "MP4", size: "450 MB" },
          { quality: "720p", format: "MP4", size: "250 MB" },
          { quality: "480p", format: "MP4", size: "150 MB" },
        ],
        audioFormats: [
          { quality: "320kbps", format: "MP3", size: "12 MB" },
          { quality: "128kbps", format: "MP3", size: "5 MB" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-transparent to-red-50 dark:from-red-950/20 dark:to-red-950/20" />
          <div className="absolute right-0 top-0 h-96 w-96 bg-red-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-red-600/10 blur-3xl" />
          
          <div className="container relative py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 to-red-600 shadow-2xl">
                <Youtube className="h-10 w-10 text-white" />
              </div>
              
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Most Popular Downloader
              </Badge>
              
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                YouTube Video Downloader
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Download YouTube videos in HD, 4K, and audio formats. Fast, free, 
                and no software installation required.
              </p>
            </div>
          </div>
        </section>

        <div className="container py-8">
          <div className="mx-auto max-w-4xl">
            {/* Download Section */}
            <Card className="mb-8 overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-500/10 to-red-600/10">
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5" />
                  Enter YouTube URL
                </CardTitle>
                <CardDescription>
                  Paste the YouTube video link below to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      placeholder="https://www.youtube.com/watch?v=..."
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
                  
                  <p className="text-xs text-muted-foreground">
                    By using this service, you agree to our Terms of Service and respect copyright laws.
                  </p>
                </div>

                {/* Video Info & Download Options */}
                {videoInfo && (
                  <div className="mt-8 space-y-6">
                    {/* Video Preview */}
                    <div className="flex gap-4 rounded-lg border bg-muted/30 p-4">
                      <img 
                        src={videoInfo.thumbnail} 
                        alt="Video thumbnail"
                        className="h-24 w-40 rounded object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{videoInfo.title}</h3>
                        <p className="text-sm text-muted-foreground">Duration: {videoInfo.duration}</p>
                      </div>
                    </div>

                    {/* Download Options */}
                    <Tabs defaultValue="video" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="video">
                          <Film className="mr-2 h-4 w-4" />
                          Video
                        </TabsTrigger>
                        <TabsTrigger value="audio">
                          <Headphones className="mr-2 h-4 w-4" />
                          Audio Only
                        </TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="video" className="space-y-2">
                        {videoInfo.formats.map((format: any, index: number) => (
                          <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                            <div className="flex items-center gap-3">
                              <FileVideo className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">{format.quality} - {format.format}</p>
                                <p className="text-sm text-muted-foreground">{format.size}</p>
                              </div>
                            </div>
                            <Button size="sm" variant="outline">
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
                                <p className="font-medium">{format.quality} - {format.format}</p>
                                <p className="text-sm text-muted-foreground">{format.size}</p>
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
                    Why Choose Our YouTube Downloader?
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
                    <Settings className="h-5 w-5 text-primary" />
                    Advanced Features
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
                <CardTitle>How to Download YouTube Videos</CardTitle>
                <CardDescription>
                  Follow these simple steps to download your favorite videos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">1</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Copy URL</h3>
                    <p className="text-sm text-muted-foreground">
                      Copy the YouTube video URL from your browser
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">2</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Paste & Process</h3>
                    <p className="text-sm text-muted-foreground">
                      Paste the URL and click the download button
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">3</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Download</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose your format and quality, then download
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
                  <h3 className="font-semibold">Is it legal to download YouTube videos?</h3>
                  <p className="text-sm text-muted-foreground">
                    Downloading YouTube videos for personal use is generally acceptable, but distributing 
                    copyrighted content is not. Always respect copyright laws and YouTube&apos;s terms of service.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">What video qualities are supported?</h3>
                  <p className="text-sm text-muted-foreground">
                    We support all YouTube video qualities including 4K (2160p), HD (1080p), 720p, 480p, 
                    and 360p. Audio extraction is also available in MP3 and other formats.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Do I need to install any software?</h3>
                  <p className="text-sm text-muted-foreground">
                    No! Our YouTube downloader works entirely in your web browser. No software installation, 
                    registration, or downloads required.
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