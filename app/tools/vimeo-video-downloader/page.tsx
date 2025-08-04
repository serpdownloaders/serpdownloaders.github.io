"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Video, 
  Download,
  Link,
  Sparkles,
  Check,
  FileVideo,
  Settings,
  Shield,
  Zap
} from "lucide-react";

export default function VimeoDownloaderPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoInfo, setVideoInfo] = useState<any>(null);

  const features = [
    "Download Vimeo videos in HD quality (1080p, 720p, 540p)",
    "Save private Vimeo videos with password support",
    "Download embedded Vimeo videos from any website",
    "Batch download multiple videos from channels",
    "Extract subtitles and closed captions",
    "No watermarks or quality loss",
    "Support for Vimeo On Demand content",
    "Works on all devices without software installation"
  ];

  const handleDownload = () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setVideoInfo({
        title: "Professional Video Production",
        author: "Creative Studio",
        duration: "5:42",
        thumbnail: "https://via.placeholder.com/640x360",
        formats: [
          { quality: "1080p", format: "MP4", size: "125 MB" },
          { quality: "720p", format: "MP4", size: "65 MB" },
          { quality: "540p", format: "MP4", size: "35 MB" },
          { quality: "360p", format: "MP4", size: "20 MB" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20" />
          <div className="absolute right-0 top-0 h-96 w-96 bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-cyan-500/10 blur-3xl" />
          
          <div className="container relative py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-2xl">
                <Video className="h-10 w-10 text-white" />
              </div>
              
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Professional Video Downloads
              </Badge>
              
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Vimeo Video Downloader
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Download Vimeo videos in high quality with subtitles support. 
                Works with private videos and embedded content.
              </p>
            </div>
          </div>
        </section>

        <div className="container py-8">
          <div className="mx-auto max-w-4xl">
            {/* Download Section */}
            <Card className="mb-8 overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5" />
                  Enter Vimeo URL
                </CardTitle>
                <CardDescription>
                  Paste any Vimeo video link, including private or embedded videos
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      placeholder="https://vimeo.com/123456789"
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
                      <Shield className="h-3 w-3" />
                      <span>Privacy protected</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      <span>High-speed downloads</span>
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
                        className="h-24 w-40 rounded object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{videoInfo.title}</h3>
                        <p className="text-sm text-muted-foreground">By {videoInfo.author}</p>
                        <p className="text-sm text-muted-foreground">Duration: {videoInfo.duration}</p>
                      </div>
                    </div>

                    {/* Download Options */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-sm">Choose Quality:</h3>
                      {videoInfo.formats.map((format: any, index: number) => (
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
                    </div>
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
                    Premium Features
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
                <CardTitle>How to Download Vimeo Videos</CardTitle>
                <CardDescription>
                  Follow these simple steps to download any Vimeo video
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">1</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Copy Video URL</h3>
                    <p className="text-sm text-muted-foreground">
                      Copy the Vimeo video link from your browser
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">2</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Paste & Analyze</h3>
                    <p className="text-sm text-muted-foreground">
                      Paste the URL and we&apos;ll fetch video details
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">3</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Download</h3>
                    <p className="text-sm text-muted-foreground">
                      Select your preferred quality and download
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
                  <h3 className="font-semibold">Can I download private Vimeo videos?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, our downloader supports password-protected Vimeo videos. You&apos;ll need to 
                    provide the password when prompted to access and download the video.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">What video qualities are available?</h3>
                  <p className="text-sm text-muted-foreground">
                    We support all available Vimeo qualities including 4K, 1080p, 720p, 540p, and 360p. 
                    The available options depend on the original video upload quality.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Can I download Vimeo videos with subtitles?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! If the video has subtitles or closed captions available, you can download them 
                    along with the video in various formats (SRT, VTT).
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Is this service free to use?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, our Vimeo downloader is completely free with no hidden charges or download limits. 
                    No registration or software installation required.
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