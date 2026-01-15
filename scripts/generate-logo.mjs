import opentype from 'opentype.js';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

// Load Plus Jakarta Sans Medium font
const fontPath = join(rootDir, 'node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-500-normal.woff');

async function generateLogos() {
  console.log('Loading font from:', fontPath);
  
  const font = await opentype.load(fontPath);
  console.log('Font loaded:', font.names.fontFamily.en);

  const text = 'Martijn van Houten';
  const fontSize = 24; // Larger for better legibility
  
  // Generate the text path with kerning
  const textPath = font.getPath(text, 0, fontSize, fontSize, { kerning: true });
  const pathData = textPath.toPathData(2); // 2 decimal precision
  
  // Get bounding box
  const bbox = textPath.getBoundingBox();
  const textWidth = bbox.x2 - bbox.x1;
  const textHeight = bbox.y2 - bbox.y1;
  
  console.log('Text dimensions:', { width: textWidth, height: textHeight, bbox });

  // Dot placement: right after text with optical spacing
  const dotRadius = 3.2;
  const dotGap = 4; // Optical gap between last letter and dot
  const dotX = bbox.x2 + dotGap + dotRadius;
  const dotY = bbox.y2 - dotRadius; // Baseline aligned
  
  // ViewBox with padding
  const padding = 2;
  const viewBoxWidth = Math.ceil(dotX + dotRadius + padding);
  const viewBoxHeight = Math.ceil(textHeight + padding * 2 + 4);
  const yOffset = padding + 2; // Shift content down slightly
  
  // Create wordmark SVG
  const wordmarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewBoxWidth} ${viewBoxHeight}" fill="none">
  <!--
    Wordmark: Martijn van Houten
    Font: Plus Jakarta Sans Medium (500)
    Converted to vector paths for consistent rendering.
  -->
  <g transform="translate(${-bbox.x1 + padding}, ${yOffset})">
    <path d="${pathData}" fill="currentColor"/>
    <circle cx="${dotX.toFixed(1)}" cy="${dotY.toFixed(1)}" r="${dotRadius}" class="accent" fill="#4B9ECC"/>
  </g>
  <style>
    @media (prefers-color-scheme: dark) { .accent { fill: #8BC4E0; } }
    .dark .accent { fill: #8BC4E0; }
  </style>
</svg>`;

  // Monogram dimensions (refined)
  const markSize = 32;
  
  // Create monogram SVG with cleaner proportions
  const monogramSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${markSize} ${markSize}" fill="none">
  <!--
    MH Monogram - Geometric mark
    M and H share a central vertical stem.
  -->
  <g stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <!-- M: left vertical -->
    <path d="M4 26V6" stroke="currentColor"/>
    <!-- M: left diagonal to peak -->
    <path d="M4 6L12 16" stroke="currentColor"/>
    <!-- M: right diagonal (accent) -->
    <path d="M12 16L20 6" stroke="#4B9ECC" class="accent"/>
    <!-- Shared vertical stem (M-right / H-left) -->
    <path d="M20 6V26" stroke="currentColor"/>
    <!-- H: horizontal bar -->
    <path d="M20 16H28" stroke="currentColor"/>
    <!-- H: right vertical -->
    <path d="M28 6V26" stroke="currentColor"/>
  </g>
  <style>
    @media (prefers-color-scheme: dark) { .accent { stroke: #8BC4E0; } }
    .dark .accent { stroke: #8BC4E0; }
  </style>
</svg>`;

  // Combined logo: mark + wordmark with proper lockup spacing
  const gap = 16; // Optical gap between mark and wordmark
  const markWidth = markSize;
  
  // Calculate combined dimensions
  const wordmarkWidth = viewBoxWidth;
  const combinedWidth = markWidth + gap + wordmarkWidth;
  
  // Vertical alignment: optically center the wordmark with the mark
  const wordmarkVerticalOffset = (markSize - viewBoxHeight) / 2;
  
  const combinedSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Math.ceil(combinedWidth)} ${markSize}" fill="none">
  <!--
    Combined Logo: MH Mark + Wordmark
    Font: Plus Jakarta Sans Medium (500)
    Lockup with proper optical spacing.
  -->
  
  <!-- Monogram -->
  <g stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M4 26V6" stroke="currentColor"/>
    <path d="M4 6L12 16" stroke="currentColor"/>
    <path d="M12 16L20 6" stroke="#4B9ECC" class="accent"/>
    <path d="M20 6V26" stroke="currentColor"/>
    <path d="M20 16H28" stroke="currentColor"/>
    <path d="M28 6V26" stroke="currentColor"/>
  </g>
  
  <!-- Wordmark -->
  <g transform="translate(${markWidth + gap - bbox.x1 + padding}, ${wordmarkVerticalOffset + yOffset})">
    <path d="${pathData}" fill="currentColor"/>
    <circle cx="${dotX.toFixed(1)}" cy="${dotY.toFixed(1)}" r="${dotRadius}" class="accent" fill="#4B9ECC"/>
  </g>
  
  <style>
    @media (prefers-color-scheme: dark) { .accent { fill: #8BC4E0; stroke: #8BC4E0; } }
    .dark .accent { fill: #8BC4E0; stroke: #8BC4E0; }
  </style>
</svg>`;

  // Write files
  writeFileSync(join(rootDir, 'public/logo-wordmark.svg'), wordmarkSvg);
  console.log('Created: public/logo-wordmark.svg');
  
  writeFileSync(join(rootDir, 'public/logo-mark.svg'), monogramSvg);
  console.log('Created: public/logo-mark.svg');
  
  writeFileSync(join(rootDir, 'public/logo.svg'), combinedSvg);
  console.log('Created: public/logo.svg');
  
  console.log('\nDone! Logo files generated with Plus Jakarta Sans Medium font.');
  console.log(`Wordmark viewBox: 0 0 ${viewBoxWidth} ${viewBoxHeight}`);
  console.log(`Combined viewBox: 0 0 ${Math.ceil(combinedWidth)} ${markSize}`);
}

generateLogos().catch(console.error);
