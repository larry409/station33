import sharp from 'sharp'
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const publicDir = path.join(root, 'public')

const DARK = '#2b2f33'
const COPPER = '#a85f42'
const CREAM = '#ece8e1'

// Build a self-contained favicon SVG that doesn't rely on Inter Tight at render time —
// uses a generic sans-serif so librsvg/fontconfig finds a reasonable system match.
const faviconSourceSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="${CREAM}"/>
  <text x="256" y="256"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-weight="900"
    font-size="240"
    text-anchor="middle"
    dominant-baseline="central"
    letter-spacing="-6"><tspan fill="${DARK}">S</tspan><tspan fill="${COPPER}">33</tspan></text>
</svg>`

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
]

const buf = Buffer.from(faviconSourceSvg)
for (const { name, size } of sizes) {
  await sharp(buf, { density: 512 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicDir, name))
  console.log(`✓ ${name}`)
}

// --- OG share image: 1200x630 aerial with brand overlay + wordmark ---
const aerialPath = path.join(publicDir, 'images', 'rendering-aerial.jpg')

const ogOverlaySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${DARK}" stop-opacity="0.15"/>
      <stop offset="55%" stop-color="${DARK}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${DARK}" stop-opacity="0.92"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#fade)"/>
  <text x="600" y="500"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-weight="900"
    font-size="118"
    text-anchor="middle"
    letter-spacing="-3"><tspan fill="${CREAM}">STATION </tspan><tspan fill="${COPPER}">33</tspan></text>
  <text x="600" y="558"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-weight="500"
    font-size="26"
    text-anchor="middle"
    letter-spacing="6"
    fill="${CREAM}"
    opacity="0.85">CHATTANOOGA'S PREMIER MIXED-USE DEVELOPMENT</text>
</svg>`

await sharp(aerialPath)
  .resize(1200, 630, { fit: 'cover', position: 'center' })
  .composite([{ input: Buffer.from(ogOverlaySvg), top: 0, left: 0 }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(publicDir, 'images', 'og-share.jpg'))
console.log('✓ images/og-share.jpg')
