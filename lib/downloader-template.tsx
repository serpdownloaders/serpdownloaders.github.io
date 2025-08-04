"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import * as Icons from "lucide-react";

export interface DownloaderConfig {
  name: string;
  title: string;
  description: string;
  iconName: string; // Changed from icon component to string
  gradientFrom: string;
  gradientTo: string;
  primaryColor: string;
  features: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  badge?: string;
  inputPlaceholder: string;
  category: string;
}

export function DownloaderPageTemplate({ config }: { config: DownloaderConfig }) {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mediaInfo, setMediaInfo] = useState<any>(null);
  
  // Get icon component from string name
  const Icon = (Icons as any)[config.iconName] || Icons.Download;

  const handleDownload = () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setMediaInfo({
        title: `Sample ${config.name} Content`,
        author: "@sampleuser",
        duration: "5:30",
        thumbnail: "https://via.placeholder.com/640x360",
        formats: [
          { quality: "1080p HD", format: "MP4", size: "125 MB" },
          { quality: "720p", format: "MP4", size: "65 MB" },
          { quality: "480p", format: "MP4", size: "35 MB" },
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
          <div className={`absolute inset-0 bg-gradient-to-br ${config.gradientFrom} via-transparent ${config.gradientTo}`} />
          <div className={`absolute right-0 top-0 h-96 w-96 ${config.primaryColor}/10 blur-3xl`} />
          <div className={`absolute bottom-0 left-0 h-96 w-96 ${config.primaryColor}/10 blur-3xl`} />
          
          <div className="container relative py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className={`mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${config.gradientFrom} ${config.gradientTo} shadow-2xl`}>
                <Icon className="h-10 w-10 text-white" />
              </div>
              
              {config.badge && (
                <Badge className="mb-4" variant="secondary">
                  <Icons.Sparkles className="mr-1 h-3 w-3" />
                  {config.badge}
                </Badge>
              )}
              
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {config.title}
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {config.description}
              </p>
            </div>
          </div>
        </section>

        <div className="container py-8">
          <div className="mx-auto max-w-4xl">
            {/* Download Section */}
            <Card className="mb-8 overflow-hidden shadow-lg">
              <CardHeader className={`bg-gradient-to-r ${config.gradientFrom}/10 ${config.gradientTo}/10`}>
                <CardTitle className="flex items-center gap-2">
                  <Icons.Link className="h-5 w-5" />
                  Enter {config.name} URL
                </CardTitle>
                <CardDescription>
                  Paste the link to download content from {config.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      placeholder={config.inputPlaceholder}
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
                          <Icons.Download className="mr-2 h-4 w-4" />
                          Download
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-6 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icons.Shield className="h-3 w-3" />
                      <span>100% Safe</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icons.Zap className="h-3 w-3" />
                      <span>Fast Downloads</span>
                    </div>
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
                        className="h-24 w-40 rounded object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{mediaInfo.title}</h3>
                        <p className="text-sm text-muted-foreground">By {mediaInfo.author}</p>
                        <p className="text-sm text-muted-foreground">Duration: {mediaInfo.duration}</p>
                      </div>
                    </div>

                    {/* Download Options */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-sm">Available Formats:</h3>
                      {mediaInfo.formats.map((format: any, index: number) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center gap-3">
                            <Icons.FileVideo className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{format.quality}</p>
                              <p className="text-sm text-muted-foreground">{format.format} • {format.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant={index === 0 ? "default" : "outline"}>
                            <Icons.Download className="mr-2 h-3 w-3" />
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icons.Sparkles className="h-5 w-5 text-primary" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {config.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icons.Check className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icons.Shield className="h-5 w-5 text-primary" />
                    Advanced Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {config.features.slice(4).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icons.Check className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" />
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
                <CardTitle>How to Download from {config.name}</CardTitle>
                <CardDescription>
                  Three simple steps to download content
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
                      Copy the {config.name} content link
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">2</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Paste & Process</h3>
                    <p className="text-sm text-muted-foreground">
                      Paste the URL in our downloader
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-lg font-bold text-primary">3</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Download</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose format and save
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
                {config.faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}