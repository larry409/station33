import Link from 'next/link'
import { formatPostDate, newsPosts } from '@/lib/news'

/**
 * Slim announcement ribbon for the newest newsroom post.
 *
 * Positioned absolutely so it sits in the gap directly under the floating pill
 * nav without pushing the full-bleed hero down the page — the hero keeps its
 * `min-h-screen` first-viewport treatment. The `top` offsets track the header's
 * own geometry (`pt-4 md:pt-6` + a ~68px pill) plus a small breathing gap.
 *
 * Everything is driven by `newsPosts[0]`, so the ribbon retires itself when the
 * newsroom is empty and re-points automatically when a newer post is added.
 */
export default function AnnouncementBand() {
  const post = newsPosts[0]
  if (!post) return null

  return (
    <div className="pointer-events-none absolute inset-x-0 top-[92px] md:top-[104px] z-30 px-4 md:px-8">
      <Link
        href={`/news/${post.slug}`}
        className="group pointer-events-auto mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-2xl sm:rounded-full border border-white/20 bg-station-gold px-4 sm:px-6 py-2 text-center shadow-lg shadow-black/40 transition-colors duration-300 hover:bg-station-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
      >
        <span className="whitespace-nowrap text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/85">
          {post.kind}
          <span aria-hidden="true"> · </span>
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        </span>
        <span className="text-[13px] sm:text-sm font-semibold leading-snug text-white">
          {post.title}
          <span
            aria-hidden="true"
            className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          >
            →
          </span>
        </span>
      </Link>
    </div>
  )
}
