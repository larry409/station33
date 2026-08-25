/** @type {import('next').NextConfig} */
const nextConfig = {
  // A stray package-lock.json in the home directory makes Next infer the wrong
  // workspace root, so pin it to this project.
  turbopack: {
    root: __dirname,
  },
  images: {
    // Next only emits WebP by default. AVIF is typically another 20-30% smaller
    // for the photographic renderings that dominate this site; browsers that
    // don't support it fall back down the list.
    formats: ['image/avif', 'image/webp'],
    // The renderings are static assets that only change on redeploy, so let the
    // CDN hold optimized variants for a year instead of the 60s default.
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
