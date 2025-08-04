"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Tv, 
  Download,
  Link,
  Sparkles,
  Check,
  Play,
  FileVideo,
  Radio,
  Clock,
  GamepadIcon,
  Users,
  Archive,
  AlertCircle
} from "lucide-react";

export default function TwitchDownloaderPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamInfo, setStreamInfo] = useState<any>(null);

  const features = [
    "Download Twitch VODs (Video on Demand) in HD",
    "Save Twitch clips and highlights",
    "Extract audio from gaming streams",
    "Support for all video qualities (1080p, 720p, 480p)",
    "Download entire streams or specific segments",
    "Chat replay included with VODs",
    "No Twitch account required for public content",
    "Fast processing and download speeds"
  ];

  const handleDownload = () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setStreamInfo({
        title: "Epic Gaming Marathon - Speedrun Attempts",
        streamer: "ProGamer2024",
        duration: "3:45:22",
        thumbnail: "https://via.placeholder.com/640x360",
        category: "Just Chatting",
        type: "VOD",
        formats: [
          { quality: "Source (1080p60)", format: "MP4", size: "2.1 GB" },
          { quality: "720p60", format: "MP4", size: "1.2 GB" },
          { quality: "720p30", format: "MP4", size: "850 MB" },
          { quality: "480p30", format: "MP4", size: "420 MB" },
        ],
        audioFormats: [
          { quality: "160kbps", format: "MP3", size: "180 MB" },
          { quality: "128kbps", format: "MP3", size: "144 MB" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20" />
          <div className="absolute right-0 top-0 h-96 w-96 bg-purple-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-indigo-600/10 blur-3xl" />
          
          <div className="container relative py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-2xl">
                <Tv className="h-10 w-10 text-white" />
              </div>
              
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Gaming Content Downloader
              </Badge>
              
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Twitch Video Downloader
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Download Twitch VODs, clips, and highlights in HD quality. 
                Save your favorite gaming moments and streams offline.
              </p>
            </div>
          </div>
        </section>

        <div className="container py-8">
          <div className="mx-auto max-w-4xl">
            {/* Download Section */}
            <Card className="mb-8 overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500/10 to-indigo-600/10">
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5" />
                  Enter Twitch URL
                </CardTitle>
                <CardDescription>
                  Paste the Twitch VOD, clip, or highlight link below
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      placeholder="https://www.twitch.tv/videos/... or /clip/..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleDownload}
                      disabled={!url || isLoading}
                      className="min-w-[120px] bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
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
                    Note: Only works with public VODs and clips. Subscriber-only content requires authentication.
                  </div>
                </div>

                {/* Stream Info & Download Options */}
                {streamInfo && (
                  <div className="mt-8 space-y-6">
                    {/* Stream Preview */}
                    <div className="flex gap-4 rounded-lg border bg-muted/30 p-4">
                      <img 
                        src={streamInfo.thumbnail} 
                        alt="Stream thumbnail"
                        className="h-24 w-40 rounded object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {streamInfo.type}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {streamInfo.category}
                          </Badge>
                        </div>
                        <h3 className="font-semibold mb-1">{streamInfo.title}</h3>
                        <p className="text-sm text-muted-foreground">By {streamInfo.streamer}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {streamInfo.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <GamepadIcon className="h-3 w-3" />
                            Gaming
                          </span>
                        </div>
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
                          <Radio className="mr-2 h-4 w-4" />
                          Audio Only
                        </TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="video" className="space-y-2">
                        {streamInfo.formats.map((format: any, index: number) => (
                          <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                            <div className="flex items-center gap-3">
                              <FileVideo className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">{format.quality} - {format.format}</p>
                                <p className="text-sm text-muted-foreground">{format.size}</p>
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
                        {streamInfo.audioFormats.map((format: any, index: number) => (
                          <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                            <div className="flex items-center gap-3">
                              <Radio className="h-5 w-5 text-muted-foreground" />
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

            {/* Content Type Cards */}
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Archive className="mx-auto mb-2 h-8 w-8 text-purple-600" />
                  <p className="font-semibold">VODs</p>
                  <p className="text-xs text-muted-foreground">Full stream recordings</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Play className="mx-auto mb-2 h-8 w-8 text-indigo-600" />
                  <p className="font-semibold">Clips</p>
                  <p className="text-xs text-muted-foreground">Best moments</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Sparkles className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                  <p className="font-semibold">Highlights</p>
                  <p className="text-xs text-muted-foreground">Featured content</p>
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
                    Why Use Our Twitch Downloader?
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
                    <Tv className="h-5 w-5 text-primary" />
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
                <CardTitle>How to Download Twitch Videos</CardTitle>
                <CardDescription>
                  Save gaming content and streams in three simple steps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">1</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Find Your Content</h3>
                    <p className="text-sm text-muted-foreground">
                      Copy the URL of any Twitch VOD, clip, or highlight
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">2</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Paste & Analyze</h3>
                    <p className="text-sm text-muted-foreground">
                      Paste the URL and let us process the stream
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">3</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Download</h3>
                    <p className="text-sm text-muted-foreground">
                      Select quality and save to your device
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
                  <h3 className="font-semibold">Can I download live Twitch streams?</h3>
                  <p className="text-sm text-muted-foreground">
                    No, you can only download VODs (recorded streams), clips, and highlights. Live streams 
                    must first be saved as VODs by the streamer before they can be downloaded.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">What about subscriber-only VODs?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our downloader works with public content only. Subscriber-only or follower-only 
                    content requires special permissions that we don&apos;t support for privacy reasons.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Are chat messages included in downloads?</h3>
                  <p className="text-sm text-muted-foreground">
                    For VODs, chat replay can be included as a separate file. However, the main video 
                    download focuses on the video/audio content without embedded chat overlay.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">How long are Twitch VODs available?</h3>
                  <p className="text-sm text-muted-foreground">
                    Twitch automatically deletes VODs after 14 days (for regular users) or 60 days 
                    (for partners/affiliates). Download important content before it expires!
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