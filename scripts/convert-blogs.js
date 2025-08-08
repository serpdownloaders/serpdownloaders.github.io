import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsDir = path.join(__dirname, 'src/pages/blog');
const contentDir = path.join(__dirname, 'src/content/blog');

// Ensure content directory exists
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

// Read all .astro files from blog directory
const files = fs.readdirSync(blogsDir).filter(file => 
  file.endsWith('.astro') && file !== '[slug].astro'
);

files.forEach(file => {
  const filePath = path.join(blogsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Skip if file doesn't have the expected structure
  if (!content.includes('const title =') || !content.includes('const markdownContent =')) {
    console.log(`Skipping ${file} - doesn't match expected structure`);
    return;
  }
  
  // Extract metadata
  const titleMatch = content.match(/const title = ["'`](.+?)["'`]/);
  const descriptionMatch = content.match(/const description = ["'`](.+?)["'`]/);
  const publishDateMatch = content.match(/const publishDate = ["'`](.+?)["'`]/);
  const tagsMatch = content.match(/const tags = \[(.+?)\]/s);
  const featuredMatch = content.match(/const featured = (true|false)/);
  
  if (!titleMatch || !descriptionMatch) {
    console.log(`Skipping ${file} - missing required metadata`);
    return;
  }
  
  // Extract markdown content
  const markdownMatch = content.match(/const markdownContent = `([\s\S]+?)`;/);
  if (!markdownMatch) {
    console.log(`Skipping ${file} - no markdown content found`);
    return;
  }
  
  // Parse tags
  let tags = [];
  if (tagsMatch) {
    tags = tagsMatch[1]
      .split(',')
      .map(tag => tag.trim().replace(/["']/g, ''))
      .filter(tag => tag.length > 0);
  }
  
  // Determine category based on content and tags
  let category = 'video'; // default
  const tagsString = tags.join(' ').toLowerCase();
  const titleLower = titleMatch[1].toLowerCase();
  
  if (tagsString.includes('pdf') || tagsString.includes('document') || 
      titleLower.includes('pdf') || titleLower.includes('document')) {
    category = 'document';
  } else if (tagsString.includes('image') || tagsString.includes('photo') || 
             tagsString.includes('pinterest') || tagsString.includes('instagram')) {
    category = 'image';
  } else if (tagsString.includes('education') || tagsString.includes('course') || 
             tagsString.includes('udemy') || tagsString.includes('skool') || 
             titleLower.includes('udemy') || titleLower.includes('skool')) {
    category = 'educational';
  }
  
  // Check if VideoEmbed is used
  const hasVideoEmbed = content.includes('<VideoEmbed');
  let markdownContent = markdownMatch[1].trim();
  
  // If VideoEmbed is used, we need to handle it differently
  // For now, we'll add a note about videos in the content
  if (hasVideoEmbed) {
    console.log(`Note: ${file} uses VideoEmbed component - may need manual adjustment`);
  }
  
  // Create MDX content
  const mdxContent = `---
title: "${titleMatch[1]}"
description: "${descriptionMatch[1]}"
publishDate: ${publishDateMatch ? publishDateMatch[1] : '2024-12-01'}
tags: [${tags.map(tag => `"${tag}"`).join(', ')}]
featured: ${featuredMatch ? featuredMatch[1] : 'false'}
category: "${category}"
---

${markdownContent}`;
  
  // Generate output filename
  const outputFile = file.replace('.astro', '.mdx');
  const outputPath = path.join(contentDir, outputFile);
  
  // Write MDX file
  fs.writeFileSync(outputPath, mdxContent);
  console.log(`✅ Converted ${file} -> ${outputFile}`);
});

console.log(`\n✨ Conversion complete! Converted ${files.length} files.`);