import sharp from 'sharp'
import { stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.resolve(__dirname, '..', 'public', 'images')

// Source renderings (3240x2160 PNGs from Franklin Architects) -> web-optimized JPGs.
// Max width 2000px keeps detail for next/image while landing well under 1MB.
const MAX_WIDTH = 2000
const jobs = [
  { src: '25-059 Food Hall.png', out: 'rendering-food-hall.jpg' },
  { src: '25-059 Clock Tower from Hotel Courtyard 2.png', out: 'rendering-clock-tower.jpg' },
  { src: '25-059 Medical Office Building.png', out: 'rendering-medical-office.jpg' },
  { src: '25-059 Aerial Plan View.png', out: 'rendering-site-plan.jpg' },
]

for (const { src, out } of jobs) {
  const outPath = path.join(imagesDir, out)
  await sharp(path.join(imagesDir, src))
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(outPath)
  const { size } = await stat(outPath)
  console.log(`✓ ${out} (${(size / 1024 / 1024).toFixed(2)} MB)`)
}
