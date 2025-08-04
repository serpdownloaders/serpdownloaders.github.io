"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PinIcon, 
  Download,
  Link,
  Sparkles,
  Check,
  Play,
  FileVideo,
  Image as ImageIcon,
  Palette,
  Heart,
  Bookmark,
  Share2,
  Grid,
  AlertCircle
} from "lucide-react";

export default function PinterestDownloaderPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pinInfo, setPinInfo] = useState<any>(null);

  const features = [
    "Download Pinterest images in highest quality",
    "Save Pinterest videos and GIFs",
    "Download pins without watermarks",
    "Extract images from Pinterest boards",
    "Support for Pinterest Story Pins",
    "Batch download from Pinterest collections",
    "Preserve original image resolution",
    "No Pinterest account required for public pins"
  ];

  const handleDownload = () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setPinInfo({
        title: "Modern Kitchen Design Ideas - Minimalist Style",
        description: "Beautiful modern kitchen with clean lines, white cabinets, and marble countertops. Perfect inspiration for your home renovation project! #KitchenDesign #ModernHome #InteriorDesign",
        author: "Home Design Pro",
        board: "Kitchen Inspiration",
        saves: "12.3K",
        thumbnail: "https://via.placeholder.com/400x600",
        mediaItems: [
          { type: "image", quality: "Original (4K)", format: "JPG", size: "2.8 MB" },
          { type: "image", quality: "High (1080p)", format: "JPG", size: "1.2 MB" },
          { type: "image", quality: "Medium (720p)", format: "JPG", size: "680 KB" },
          { type: "video", quality: "HD", format: "MP4", size: "8.5 MB" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-pink-50/50 to-rose-50 dark:from-red-950/20 dark:via-pink-950/10 dark:to-rose-950/20" />
          <div className="absolute right-0 top-0 h-96 w-96 bg-gradient-to-br from-red-500/10 to-pink-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-gradient-to-tr from-pink-500/10 to-rose-500/10 blur-3xl" />
          
          <div className="container relative py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-red-600 to-pink-600 shadow-2xl">
                <PinIcon className="h-10 w-10 text-white" />
              </div>
              
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Visual Content Downloader
              </Badge>
              
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Pinterest Downloader
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Download Pinterest images and videos in original quality. 
                Save inspiring pins, boards, and visual content for offline access.
              </p>
            </div>
          </div>
        </section>

        <div className="container py-8">
          <div className="mx-auto max-w-4xl">
            {/* Download Section */}
            <Card className="mb-8 overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-500/10 via-pink-500/10 to-rose-500/10">
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5" />
                  Enter Pinterest URL
                </CardTitle>
                <CardDescription>
                  Paste any Pinterest pin, board, or collection link
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      placeholder="https://www.pinterest.com/pin/... or pinterest.com/..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleDownload}
                      disabled={!url || isLoading}
                      className="min-w-[120px] bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
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
                    Works with public pins and boards. Some content may require Pinterest login for access.
                  </div>
                </div>

                {/* Pin Info & Download Options */}
                {pinInfo && (
                  <div className="mt-8 space-y-6">
                    {/* Pin Preview */}
                    <div className="rounded-lg border bg-muted/30 p-4">
                      <div className="flex gap-4">
                        <img 
                          src={pinInfo.thumbnail} 
                          alt="Pin image"
                          className="h-32 w-24 rounded object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{pinInfo.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{pinInfo.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>By {pinInfo.author}</span>
                            <span className="flex items-center gap-1">
                              <Grid className="h-3 w-3" />
                              {pinInfo.board}
                            </span>
                            <span className="flex items-center gap-1">
                              <Bookmark className="h-3 w-3" />
                              {pinInfo.saves} saves
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Download Options */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-sm">Available Downloads:</h3>
                      {pinInfo.mediaItems.map((item: any, index: number) => (
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
                  <ImageIcon className="mx-auto mb-2 h-8 w-8 text-red-600" />
                  <p className="font-semibold">Images</p>
                  <p className="text-xs text-muted-foreground">High resolution</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <FileVideo className="mx-auto mb-2 h-8 w-8 text-pink-600" />
                  <p className="font-semibold">Videos</p>
                  <p className="text-xs text-muted-foreground">HD quality</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Grid className="mx-auto mb-2 h-8 w-8 text-rose-600" />
                  <p className="font-semibold">Boards</p>
                  <p className="text-xs text-muted-foreground">Collections</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Play className="mx-auto mb-2 h-8 w-8 text-purple-600" />
                  <p className="font-semibold">Story Pins</p>
                  <p className="text-xs text-muted-foreground">Multi-page</p>
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
                    <Palette className="h-5 w-5 text-primary" />
                    Creative Tools
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
                <CardTitle>How to Download from Pinterest</CardTitle>
                <CardDescription>
                  Save inspiring visual content in three easy steps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20">
                      <span className="text-lg font-bold bg-gradient-to-br from-red-600 to-pink-600 bg-clip-text text-transparent">1</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Find Your Pin</h3>
                    <p className="text-sm text-muted-foreground">
                      Copy the URL of any Pinterest pin or board
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20">
                      <span className="text-lg font-bold bg-gradient-to-br from-pink-600 to-rose-600 bg-clip-text text-transparent">2</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Paste & Extract</h3>
                    <p className="text-sm text-muted-foreground">
                      Paste the URL and we&apos;ll fetch the content
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-red-100 dark:from-rose-900/20 dark:to-red-900/20">
                      <span className="text-lg font-bold bg-gradient-to-br from-rose-600 to-red-600 bg-clip-text text-transparent">3</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Save</h3>
                    <p className="text-sm text-muted-foreground">
                      Download in original quality to your device
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
                  <h3 className="font-semibold">Can I download entire Pinterest boards?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! You can download all images and videos from a Pinterest board by pasting the 
                    board URL. Our tool will extract all pins and allow batch downloading.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">What about Pinterest Story Pins?</h3>
                  <p className="text-sm text-muted-foreground">
                    Story Pins with multiple pages are supported. Each page/image in the story will be 
                    available for individual download, preserving the original quality and format.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Do I need a Pinterest account to download?</h3>
                  <p className="text-sm text-muted-foreground">
                    For most public pins, no account is required. However, some content may be restricted 
                    and require Pinterest login for access. Our tool works with publicly available content.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Are there any copyright concerns?</h3>
                  <p className="text-sm text-muted-foreground">
                    Always respect copyright and creator rights. Download content for personal use and 
                    inspiration only. For commercial use, ensure you have proper permissions from the content creator.
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