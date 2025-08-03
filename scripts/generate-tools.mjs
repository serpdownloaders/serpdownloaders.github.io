import fs from 'fs';
import path from 'path';

// Read the sitemap CSV
const sitemapPath = './sitemap.csv';
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

// Parse the sitemap
const lines = sitemapContent.split('\n').slice(1); // Skip header
const tools = lines
  .filter(line => line.startsWith('"tools"'))
  .map(line => {
    const matches = line.match(/"([^"]+)","([^"]+)","([^"]+)"/);
    if (matches) {
      return {
        type: matches[1],
        name: matches[2],
        url: matches[3]
      };
    }
    return null;
  })
  .filter(Boolean)
  .filter(tool => tool.url !== '/tools/'); // Remove the main tools page

// Helper function to generate tool content
function generateToolContent(toolName, toolUrl) {
  const platformName = toolName.replace(' Downloader', '').replace(' downloader', '');
  const filename = toolUrl.replace('/tools/', '') + '.astro';
  
  // Create platform-specific content
  const platformData = getPlatformData(platformName);
  
  return `---
import ToolTemplate from '../../layouts/ToolTemplate.astro';

const platform = "${platformName}";
const description = "${platformData.description}";

const features = ${JSON.stringify(platformData.features, null, 2)};

const instructions = ${JSON.stringify(platformData.instructions, null, 2)};

const faqs = ${JSON.stringify(platformData.faqs, null, 2)};

const relatedTools = ${JSON.stringify(platformData.relatedTools, null, 2)};
---

<ToolTemplate 
  platform={platform}
  description={description}
  features={features}
  instructions={instructions}
  faqs={faqs}
  relatedTools={relatedTools}
/>`;
}

// Platform-specific data generator
function getPlatformData(platformName) {
  const defaultData = {
    description: `Download ${platformName} content quickly and easily. Free, secure, and no software installation required.`,
    features: [
      `Download ${platformName} content in high quality`,
      "No software installation required - works in your browser",
      "Completely free with no registration needed",
      "Fast download speeds and reliable service",
      "Mobile-friendly interface",
      "Privacy-focused - no data stored",
      "Support for multiple formats",
      "Secure downloads with HTTPS encryption"
    ],
    instructions: [
      { step: 1, text: `Copy the ${platformName} URL from your browser` },
      { step: 2, text: "Paste the URL in the input field above" },
      { step: 3, text: "Click the 'Download' button" },
      { step: 4, text: "Choose your preferred quality and format" },
      { step: 5, text: "Your download will start automatically" }
    ],
    faqs: [
      {
        question: `Is it legal to download ${platformName} content?`,
        answer: `Downloading ${platformName} content for personal use is generally acceptable, but always respect copyright laws and platform terms of service.`
      },
      {
        question: "Do I need to install any software?",
        answer: `No! Our ${platformName} downloader works entirely in your web browser. No software installation required.`
      },
      {
        question: "Is this service free?",
        answer: "Yes, our downloader is completely free with no hidden costs or premium features."
      },
      {
        question: "Is my data safe?",
        answer: "Yes, we don't store your downloads or personal information. All downloads are processed securely."
      }
    ],
    relatedTools: ["YouTube", "TikTok", "Instagram", "PDF", "Twitter"]
  };

  // Customize for specific platforms
  const customizations = {
    'YouTube': {
      description: "Download YouTube videos in HD, 4K, and audio formats. Fast, free, and no software installation required.",
      features: [
        "Download videos in multiple quality options (HD, 4K, 1080p, 720p, 480p)",
        "Extract audio in MP3, WAV, and other formats",
        "No software installation required - works in your browser",
        "Completely free with no registration needed",
        "Fast download speeds and reliable service",
        "Support for playlists and channels",
        "Mobile-friendly interface",
        "No watermarks on downloaded content"
      ],
      relatedTools: ["TikTok", "Instagram", "Vimeo", "Twitter", "Facebook"]
    },
    'TikTok': {
      description: "Download TikTok videos without watermark in HD quality. Save TikTok content to your device instantly.",
      features: [
        "Download TikTok videos without watermark",
        "HD quality downloads (up to 1080p)",
        "Save TikTok audio as MP3 files",
        "No app installation required",
        "Works on all devices (mobile, desktop, tablet)",
        "Completely free and unlimited downloads",
        "Fast processing and download speeds",
        "Privacy-focused - no data stored"
      ],
      relatedTools: ["YouTube", "Instagram", "Twitter", "Snapchat", "Facebook"]
    },
    'Instagram': {
      description: "Download Instagram photos, videos, stories, and reels. Save Instagram content in original quality.",
      features: [
        "Download Instagram photos and videos",
        "Save Instagram Stories and Reels",
        "Original quality preservation",
        "No watermarks added",
        "Works with public posts",
        "Batch download support",
        "Mobile and desktop compatible",
        "No Instagram login required"
      ],
      relatedTools: ["TikTok", "YouTube", "Twitter", "Facebook", "Snapchat"]
    },
    'PDF': {
      description: "Download PDFs from any website instantly. Extract and save PDF documents with one click.",
      features: [
        "Download PDFs from any website or URL",
        "Preserve original PDF quality and formatting",
        "No file size limitations",
        "Works with password-protected PDFs (if publicly accessible)",
        "Batch download multiple PDFs",
        "Mobile and desktop compatible",
        "No registration or software required",
        "Secure and private downloads"
      ],
      relatedTools: ["Scribd", "Academic Papers", "Udemy", "Coursera", "Khan Academy"]
    }
  };

  return { ...defaultData, ...customizations[platformName] };
}

// Generate tool pages
const toolsDir = './src/pages/tools';
if (!fs.existsSync(toolsDir)) {
  fs.mkdirSync(toolsDir, { recursive: true });
}

let generatedCount = 0;
let skippedCount = 0;

tools.forEach(tool => {
  const filename = tool.url.replace('/tools/', '') + '.astro';
  const filePath = path.join(toolsDir, filename);
  
  // Skip if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`⏭️  Skipped ${filename} (already exists)`);
    skippedCount++;
    return;
  }
  
  const content = generateToolContent(tool.name, tool.url);
  fs.writeFileSync(filePath, content);
  console.log(`✅ Generated ${filename}`);
  generatedCount++;
});

console.log(`\n📊 Summary:`);
console.log(`Generated: ${generatedCount} new tool pages`);
console.log(`Skipped: ${skippedCount} existing pages`);
console.log(`Total tools in sitemap: ${tools.length}`);

// Generate a list of all tools for reference
const toolsList = tools.map(tool => `- ${tool.name}: ${tool.url}`).join('\n');
fs.writeFileSync('./tools-list.txt', toolsList);
console.log(`📝 Created tools-list.txt with all ${tools.length} tools`);

export default {};
