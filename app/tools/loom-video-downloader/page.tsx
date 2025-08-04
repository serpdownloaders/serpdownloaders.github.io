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
  Play,
  FileVideo,
  Users,
  Clock,
  Share2,
  Monitor,
  AlertCircle
} from "lucide-react";

export default function LoomDownloaderPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoInfo, setVideoInfo] = useState<any>(null);

  const features = [
    "Download Loom videos in original HD quality",
    "Save screen recordings and webcam videos",
    "Extract audio from Loom recordings as MP3",
    "Download both public and shared Loom videos",
    "Preserve video metadata and timestamps",
    "No Loom account required for public videos",
    "Fast downloads directly to your device",
    "Works with all Loom video formats"
  ];

  const handleDownload = () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setVideoInfo({
        title: "Team Meeting Recording - Q4 Planning",
        author: "Sarah Johnson",
        duration: "45:30",
        thumbnail: "https://via.placeholder.com/640x360",
        recordingType: "Screen + Camera",
        formats: [
          { quality: "1080p HD", format: "MP4", size: "450 MB" },
          { quality: "720p", format: "MP4", size: "280 MB" },
          { quality: "480p", format: "MP4", size: "180 MB" },
        ],
        audioFormats: [
          { quality: "High Quality", format: "MP3", size: "45 MB" },
          { quality: "Standard", format: "MP3", size: "22 MB" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20" />
          <div className="absolute right-0 top-0 h-96 w-96 bg-purple-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-blue-600/10 blur-3xl" />
          
          <div className="container relative py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-2xl">
                <Video className="h-10 w-10 text-white" />
              </div>
              
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Screen Recording Specialist
              </Badge>
              
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Loom Video Downloader
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Download Loom screen recordings and webcam videos in HD quality. 
                Save important presentations, tutorials, and meetings offline.
              </p>
            </div>
          </div>
        </section>

        <div className="container py-8">
          <div className="mx-auto max-w-4xl">
            {/* Download Section */}
            <Card className="mb-8 overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500/10 to-blue-600/10">
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5" />
                  Enter Loom Video URL
                </CardTitle>
                <CardDescription>
                  Paste the Loom video link to download the recording
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      placeholder="https://www.loom.com/share/..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleDownload}
                      disabled={!url || isLoading}
                      className="min-w-[120px] bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
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
                    Works with public Loom videos and shared private videos. Respects creator rights and privacy settings.
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
                        <p className="text-sm text-muted-foreground">By {videoInfo.author}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {videoInfo.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Monitor className="h-3 w-3" />
                            {videoInfo.recordingType}
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
                          <Users className="mr-2 h-4 w-4" />
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
                              <Users className="h-5 w-5 text-muted-foreground" />
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
                    Why Choose Our Loom Downloader?
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
                    <Video className="h-5 w-5 text-primary" />
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
                <CardTitle>How to Download Loom Videos</CardTitle>
                <CardDescription>
                  Save important screen recordings and presentations in 3 easy steps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">1</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Copy Loom URL</h3>
                    <p className="text-sm text-muted-foreground">
                      Get the share link from any Loom video
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">2</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Paste & Process</h3>
                    <p className="text-sm text-muted-foreground">
                      Paste the URL and analyze the video content
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">3</span>
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
                  <h3 className="font-semibold">Can I download private Loom videos?</h3>
                  <p className="text-sm text-muted-foreground">
                    You can download Loom videos that have been shared with you via link. However, you cannot 
                    download completely private videos that require special permissions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">What video qualities are available?</h3>
                  <p className="text-sm text-muted-foreground">
                    We support all Loom video qualities including 1080p HD, 720p, and 480p. The available 
                    qualities depend on how the original video was recorded.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Can I extract just the audio from Loom recordings?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! You can download just the audio portion of any Loom recording as an MP3 file. 
                    Perfect for meetings, lectures, or presentations where you only need the audio.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Is it legal to download Loom videos?</h3>
                  <p className="text-sm text-muted-foreground">
                    Downloading Loom videos is legal for personal use and when you have permission from the creator. 
                    Always respect copyright and creator rights when downloading content.
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