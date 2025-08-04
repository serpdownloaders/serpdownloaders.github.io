"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Download,
  Link,
  Sparkles,
  Check,
  FileVideo,
  GraduationCap,
  Lock,
  Unlock
} from "lucide-react";

export default function SkoolDownloaderPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoInfo, setVideoInfo] = useState<any>(null);

  const features = [
    "Download Skool course videos for offline viewing",
    "Save entire modules and lessons in sequence",
    "Preserve video quality without compression",
    "Download course materials and resources",
    "Batch download multiple videos at once",
    "Support for private community content",
    "Resume interrupted downloads",
    "Works on all devices - mobile and desktop"
  ];

  const handleDownload = () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setVideoInfo({
        title: "Advanced Marketing Strategies - Module 3",
        author: "Marketing Mastery Community",
        duration: "45:30",
        thumbnail: "https://via.placeholder.com/640x360",
        formats: [
          { quality: "1080p HD", format: "MP4", size: "850 MB" },
          { quality: "720p", format: "MP4", size: "450 MB" },
          { quality: "480p", format: "MP4", size: "250 MB" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50/50 to-blue-50 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-blue-950/20" />
          <div className="absolute right-0 top-0 h-96 w-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 blur-3xl" />
          
          <div className="container relative py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Educational Content Downloader
              </Badge>
              
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Skool Video Downloader
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Download Skool course videos and community content for offline learning. 
                Save your educational progress and study anywhere.
              </p>
            </div>
          </div>
        </section>

        <div className="container py-8">
          <div className="mx-auto max-w-4xl">
            {/* Download Section */}
            <Card className="mb-8 overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10">
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5" />
                  Enter Skool Video URL
                </CardTitle>
                <CardDescription>
                  Paste the link to any Skool course video or community content
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      placeholder="https://www.skool.com/community/video-link"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleDownload}
                      disabled={!url || isLoading}
                      className="min-w-[120px] bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
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
                    <Lock className="inline h-4 w-4 mr-2" />
                    You must have access to the content to download it. Login to Skool first.
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
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" />
                          {videoInfo.author}
                        </p>
                        <p className="text-sm text-muted-foreground">Duration: {videoInfo.duration}</p>
                      </div>
                    </div>

                    {/* Download Options */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-sm">Available Formats:</h3>
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
                    <Unlock className="h-5 w-5 text-primary" />
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
                <CardTitle>How to Download Skool Videos</CardTitle>
                <CardDescription>
                  Simple steps to save course content for offline learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20">
                      <span className="text-lg font-bold bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent">1</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Login to Skool</h3>
                    <p className="text-sm text-muted-foreground">
                      Access your Skool account and navigate to the video
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20">
                      <span className="text-lg font-bold bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent">2</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Copy Video URL</h3>
                    <p className="text-sm text-muted-foreground">
                      Copy the link and paste it in our downloader
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
                      <span className="text-lg font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">3</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Download</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose quality and save for offline viewing
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
                  <h3 className="font-semibold">Do I need a Skool account to download videos?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, you need to have legitimate access to the content. Our downloader only works 
                    with videos you have permission to view through your Skool membership.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Can I download entire courses at once?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! You can download multiple videos from a course or module. Our batch download 
                    feature lets you save entire sections for comprehensive offline study.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">What video quality is available?</h3>
                  <p className="text-sm text-muted-foreground">
                    We preserve the original video quality uploaded to Skool, typically offering 
                    1080p HD, 720p, and 480p options depending on the source material.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Is this allowed by Skool&apos;s terms?</h3>
                  <p className="text-sm text-muted-foreground">
                    Please check the specific community rules and Skool&apos;s terms of service. Download 
                    content only for personal educational use and respect content creators&apos; rights.
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