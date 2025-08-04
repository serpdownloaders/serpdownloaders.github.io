import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SerpDownloaders - Free Video & Content Downloaders",
  description: "Download videos, images, and content from YouTube, TikTok, Instagram, Vimeo, and 50+ platforms. Fast, free, and no software required.",
  keywords: "video downloader, youtube downloader, tiktok downloader, instagram downloader, free online downloader",
  openGraph: {
    title: "SerpDownloaders - Free Video & Content Downloaders",
    description: "Download videos from 50+ platforms including YouTube, TikTok, Instagram. No watermark, HD quality, completely free.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}