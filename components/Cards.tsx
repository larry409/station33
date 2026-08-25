/**
 * Shared card treatments for the spaces pages.
 *
 * The lit look — a copper bar along the top edge that extends to full width on
 * hover, light spilling in from the top-left corner, and a lift with the border
 * igniting — lives here so all four space pages stay in step: /spaces/residences
 * uses these directly, and retail/offices/restaurants get them via
 * SpaceInterestPage.
 *
 * Note on the palette: the brand copper (`station-gold`, #a85f42) is muted, not
 * a bright gold. At low opacity under a heavy blur it disappears against the
 * card background, so the glow uses `station-gold-light` (#c4876e) at higher
 * opacity and a tighter blur. Reduced-motion users are covered by the global
 * transition override in globals.css.
 */

/** Headline + body card used for the highlight grids. */
export function HighlightCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border-2 border-station-gold/30 bg-card-bg p-6 md:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-station-gold hover:shadow-2xl hover:shadow-station-gold/20">
      {/* Copper light hugging the top-left corner, always faintly on so the
          effect reads on touch devices too. It is deliberately pushed outside the
          padding box: sitting under the body copy dropped that text below the
          WCAG AA 4.5:1 contrast floor at peak hover alpha. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-28 h-40 w-40 rounded-full bg-station-gold-light/25 blur-2xl opacity-60 transition-all duration-500 group-hover:bg-station-gold-light/40 group-hover:opacity-100"
      />
      {/* Accent bar that runs the full top edge on hover. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[3px] w-10 bg-gradient-to-r from-station-gold-light to-transparent transition-all duration-500 group-hover:w-full"
      />
      <div className="relative">
        <h3 className="text-xl md:text-2xl font-semibold text-primary-text mb-3">{title}</h3>
        <p className="text-body-text leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

/** Compact figure card used for the hero stat rows. */
export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-bg-darker/60 border border-station-gold/25 backdrop-blur-sm px-3 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-station-gold/60 hover:bg-bg-darker/80 hover:shadow-lg hover:shadow-station-gold/10">
      <div className="text-xl md:text-2xl font-semibold text-station-gold leading-none">{value}</div>
      <div className="text-xs text-body-text mt-2 leading-tight">{label}</div>
    </div>
  )
}
