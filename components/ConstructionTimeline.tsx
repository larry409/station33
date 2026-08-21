'use client'

import { BrandName } from './BrandName'

type Milestone = {
  date: string
  title: string
  description: string
  /** 'current' is the milestone the project has just reached; everything else is ahead of us. */
  status: 'current' | 'upcoming'
}

const milestones: Milestone[] = [
  {
    date: 'August 20, 2026',
    title: 'Groundbreaking',
    description: 'Ground broken on the South Broad block.',
    status: 'current',
  },
  {
    date: 'Summer 2026',
    title: 'Sitework begins',
    description: 'Site preparation gets underway across the block.',
    status: 'upcoming',
  },
  {
    date: 'November 2026',
    title: 'Vertical construction begins',
    description: 'The buildings begin rising above grade.',
    status: 'upcoming',
  },
  {
    date: 'Fall 2028',
    title: 'Four main buildings complete',
    description: 'The four main buildings reach completion.',
    status: 'upcoming',
  },
]

/**
 * Construction timeline — an ordered list of project milestones that reads
 * vertically on small screens and horizontally from `md` up. The milestone the
 * project has just reached is styled distinctly (filled marker, gold border,
 * status pill) so the current phase is legible at a glance.
 */
export default function ConstructionTimeline() {
  return (
    <section id="construction" className="section-standard bg-bg-dark">
      <div className="container">
        <div className="max-w-3xl mb-10 md:mb-14">
          <span className="inline-block text-station-gold text-xs md:text-sm font-semibold uppercase tracking-[0.22em] mb-4">
            Under Construction
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text mb-5 md:mb-6 leading-tight">
            Building <BrandName />
          </h2>
          <p className="text-lg md:text-xl text-body-text leading-relaxed">
            Ground is broken on South Broad. Here is where the project stands and what comes next.
          </p>
        </div>

        <ol className="grid gap-0 md:grid-cols-4 md:gap-x-6">
          {milestones.map((milestone, index) => {
            const isCurrent = milestone.status === 'current'
            const isLast = index === milestones.length - 1

            return (
              <li
                key={milestone.title}
                aria-current={isCurrent ? 'step' : undefined}
                className="relative pl-10 pb-8 last:pb-0 md:flex md:flex-col md:pl-0 md:pt-10 md:pb-0"
              >
                {/* Rail — vertical on mobile, horizontal from md up. Omitted after the last marker. */}
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[9px] top-6 bottom-0 w-px bg-divider-gray md:left-[10px] md:right-[-1.5rem] md:top-[10px] md:bottom-auto md:h-px md:w-auto"
                  />
                )}

                {/* Marker */}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1 z-10 flex h-5 w-5 items-center justify-center rounded-full md:top-0 ${
                    isCurrent
                      ? 'bg-station-gold ring-4 ring-station-gold/25'
                      : 'border-2 border-divider-gray bg-bg-dark'
                  }`}
                >
                  {isCurrent && (
                    <span className="absolute inset-0 rounded-full bg-station-gold/40 motion-safe:animate-pulse motion-reduce:hidden" />
                  )}
                </span>

                <div
                  className={`rounded-2xl border p-5 md:flex-1 md:p-6 transition-colors duration-300 ${
                    isCurrent
                      ? 'bg-card-bg border-station-gold'
                      : 'bg-card-bg/50 border-station-gold/25'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2">
                    <span
                      className={`text-sm font-semibold uppercase tracking-[0.16em] ${
                        isCurrent ? 'text-station-gold' : 'text-body-text/70'
                      }`}
                    >
                      {milestone.date}
                    </span>
                    {isCurrent && (
                      <span className="inline-block rounded-full bg-station-gold/15 border border-station-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-station-gold">
                        Complete
                      </span>
                    )}
                  </div>

                  <h3
                    className={`text-xl md:text-2xl font-semibold mb-2 leading-snug ${
                      isCurrent ? 'text-primary-text' : 'text-primary-text/80'
                    }`}
                  >
                    {milestone.title}
                    <span className="sr-only">
                      {isCurrent ? ' — current milestone' : ' — upcoming milestone'}
                    </span>
                  </h3>

                  <p className={`text-sm md:text-base leading-relaxed ${isCurrent ? 'text-body-text' : 'text-body-text/70'}`}>
                    {milestone.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
