"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Download,
  Link,
  Sparkles,
  Check,
  File,
  Files,
  BookOpen,
  Shield,
  Lock,
  Unlock,
  Image as ImageIcon,
  Zap,
  AlertCircle
} from "lucide-react";

export default function PDFDownloaderPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pdfInfo, setPdfInfo] = useState<any>(null);

  const features = [
    "Download PDFs from any public URL",
    "Extract PDFs from document sharing sites",
    "Download research papers and academic documents",
    "Save PDF files from Google Drive links",
    "Extract PDFs from Dropbox and OneDrive",
    "Support for password-protected PDFs",
    "Preserve original PDF quality and formatting",
    "Batch download multiple PDFs from links"
  ];

  const handleDownload = () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setPdfInfo({
        title: "Machine Learning Fundamentals - Complete Guide",
        author: "Dr. Sarah Chen",
        pages: 125,
        size: "15.7 MB",
        thumbnail: "https://via.placeholder.com/300x400",
        metadata: {
          created: "March 15, 2024",
          modified: "March 18, 2024",
          version: "1.7"
        },
        downloadOptions: [
          { type: "original", quality: "Original PDF", format: "PDF", size: "15.7 MB" },
          { type: "compressed", quality: "Compressed", format: "PDF", size: "8.2 MB" },
          { type: "images", quality: "Extract Images", format: "ZIP", size: "12.1 MB" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50/50 to-zinc-50 dark:from-slate-950/20 dark:via-gray-950/10 dark:to-zinc-950/20" />
          <div className="absolute right-0 top-0 h-96 w-96 bg-gradient-to-br from-slate-500/10 to-gray-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-gradient-to-tr from-gray-500/10 to-zinc-500/10 blur-3xl" />
          
          <div className="container relative py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-700 to-gray-700 shadow-2xl">
                <FileText className="h-10 w-10 text-white" />
              </div>
              
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Document Downloader
              </Badge>
              
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                PDF Downloader
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Download PDF files from any URL or document sharing platform. 
                Extract, save, and organize important documents with ease.
              </p>
            </div>
          </div>
        </section>

        <div className="container py-8">
          <div className="mx-auto max-w-4xl">
            {/* Download Section */}
            <Card className="mb-8 overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-slate-500/10 via-gray-500/10 to-zinc-500/10">
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5" />
                  Enter PDF URL
                </CardTitle>
                <CardDescription>
                  Paste any URL that contains or leads to a PDF document
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      placeholder="https://example.com/document.pdf or Google Drive/Dropbox link..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleDownload}
                      disabled={!url || isLoading}
                      className="min-w-[120px] bg-gradient-to-r from-slate-700 to-gray-700 hover:from-slate-800 hover:to-gray-800"
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
                    Supports direct PDF links, Google Drive, Dropbox, OneDrive, and academic repositories.
                  </div>
                </div>

                {/* PDF Info & Download Options */}
                {pdfInfo && (
                  <div className="mt-8 space-y-6">
                    {/* PDF Preview */}
                    <div className="flex gap-4 rounded-lg border bg-muted/30 p-4">
                      <div className="flex-shrink-0">
                        <div className="h-32 w-24 rounded bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 flex items-center justify-center">
                          <FileText className="h-12 w-12 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{pdfInfo.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">By {pdfInfo.author}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Files className="h-4 w-4" />
                            <span>{pdfInfo.pages} pages</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <File className="h-4 w-4" />
                            <span>{pdfInfo.size}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            <span>Created: {pdfInfo.metadata.created}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4" />
                            <span>Version {pdfInfo.metadata.version}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Download Options */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-sm">Download Options:</h3>
                      {pdfInfo.downloadOptions.map((option: any, index: number) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center gap-3">
                            {option.type === "images" ? (
                              <ImageIcon className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <FileText className="h-5 w-5 text-muted-foreground" />
                            )}
                            <div>
                              <p className="font-medium">{option.quality}</p>
                              <p className="text-sm text-muted-foreground">{option.format} • {option.size}</p>
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

            {/* Supported Platforms */}
            <div className="mb-8 grid gap-4 md:grid-cols-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="mx-auto mb-2 h-8 w-8 text-slate-600" />
                  <p className="font-semibold">Direct URLs</p>
                  <p className="text-xs text-muted-foreground">PDF links</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Files className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                  <p className="font-semibold">Google Drive</p>
                  <p className="text-xs text-muted-foreground">Shared files</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <BookOpen className="mx-auto mb-2 h-8 w-8 text-green-600" />
                  <p className="font-semibold">Academic</p>
                  <p className="text-xs text-muted-foreground">Research papers</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Lock className="mx-auto mb-2 h-8 w-8 text-orange-600" />
                  <p className="font-semibold">Protected</p>
                  <p className="text-xs text-muted-foreground">With permissions</p>
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
                    <FileText className="h-5 w-5 text-primary" />
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
                <CardTitle>How to Download PDFs</CardTitle>
                <CardDescription>
                  Save important documents in three simple steps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                      <span className="text-lg font-bold text-slate-700 dark:text-slate-300">1</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Find PDF URL</h3>
                    <p className="text-sm text-muted-foreground">
                      Copy the URL of any PDF or document link
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                      <span className="text-lg font-bold text-gray-700 dark:text-gray-300">2</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Paste & Analyze</h3>
                    <p className="text-sm text-muted-foreground">
                      Paste the URL and we&apos;ll extract the PDF
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                      <span className="text-lg font-bold text-zinc-700 dark:text-zinc-300">3</span>
                    </div>
                    <h3 className="mb-2 font-semibold">Download</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose format and save to your device
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
                  <h3 className="font-semibold">Can I download PDFs from Google Drive?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! You can download PDFs from Google Drive, Dropbox, OneDrive, and other cloud storage 
                    platforms as long as the file is shared publicly or you have viewing permissions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">What about password-protected PDFs?</h3>
                  <p className="text-sm text-muted-foreground">
                    If you have the password for a protected PDF, you can download it. However, we cannot 
                    bypass password protection or download PDFs without proper authorization.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Can I extract images from PDFs?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Our tool can extract all images from a PDF document and provide them as a ZIP file 
                    containing individual image files in their original quality.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Are there file size limitations?</h3>
                  <p className="text-sm text-muted-foreground">
                    We support PDFs up to 100MB in size. For larger files, the download may take longer 
                    but will still work. Very large files may be automatically compressed for faster transfer.
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