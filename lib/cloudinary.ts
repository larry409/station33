/**
 * Cloudinary video optimization utilities
 * Generates optimized video URLs with proper transformations for web delivery
 */

// Your Cloudinary cloud name (update this with your actual cloud name)
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'your-cloud-name'

interface VideoTransformOptions {
  width?: number
  quality?: number
  format?: string
  crop?: string
  gravity?: string
  effect?: string
}

/**
 * Generate optimized Cloudinary video URL with transformations
 */
export function getOptimizedVideoUrl(
  publicId: string,
  options: VideoTransformOptions = {}
): string {
  const {
    width,
    quality = 70,
    format = 'auto',
    crop = 'fill',
    gravity = 'center',
    effect,
  } = options

  const transformations = [
    width ? `w_${width}` : null,
    `q_${quality}`,
    `f_${format}`,
    crop ? `c_${crop}` : null,
    gravity ? `g_${gravity}` : null,
    effect ? `e_${effect}` : null,
    'vc_auto', // Automatic video codec selection
  ]
    .filter(Boolean)
    .join(',')

  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${transformations}/${publicId}.mp4`
}

/**
 * Generate poster image URL from video (first frame)
 */
export function getVideoPosterUrl(
  publicId: string,
  options: { width?: number; quality?: number } = {}
): string {
  const { width = 1920, quality = 80 } = options

  const transformations = [
    `w_${width}`,
    `q_${quality}`,
    'f_auto',
    'c_fill',
    'g_center',
    'so_0', // Extract frame at 0 seconds (first frame)
  ].join(',')

  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${transformations}/${publicId}.jpg`
}

/**
 * Generate responsive video sources for different screen sizes
 */
export function getResponsiveVideoSources(publicId: string) {
  return {
    mobile: getOptimizedVideoUrl(publicId, { width: 768, quality: 65 }),
    tablet: getOptimizedVideoUrl(publicId, { width: 1280, quality: 70 }),
    desktop: getOptimizedVideoUrl(publicId, { width: 1920, quality: 75 }),
  }
}

/**
 * Hero video configuration with optimal settings
 */
export const HERO_VIDEO = {
  publicId: '4_Turbo_Steady_forward_push_through_urban_plaza_archway_cinematic_dolly_shot_real_estate_video_2749429055_oayeqg',

  // Get optimized URLs for different screen sizes
  getSources() {
    return getResponsiveVideoSources(this.publicId)
  },

  // Get main desktop video URL
  getDesktopUrl() {
    return getOptimizedVideoUrl(this.publicId, {
      width: 1920,
      quality: 75,
      effect: 'sharpen:100', // Slight sharpening for clarity
    })
  },

  // Get poster image for instant loading
  getPosterUrl() {
    return getVideoPosterUrl(this.publicId, {
      width: 1920,
      quality: 85,
    })
  },

  // Get mobile-optimized video
  getMobileUrl() {
    return getOptimizedVideoUrl(this.publicId, {
      width: 768,
      quality: 65,
    })
  },
}

/**
 * Preload video optimization
 * Returns link tags for preloading video and poster
 */
export function getVideoPreloadTags() {
  return {
    poster: HERO_VIDEO.getPosterUrl(),
    mobile: HERO_VIDEO.getMobileUrl(),
    desktop: HERO_VIDEO.getDesktopUrl(),
  }
}
