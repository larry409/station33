import React from 'react'

/**
 * Brand wordmark treatment for "Station33" in running text.
 * Renders the name in the brand font with the "33" in Station Copper,
 * mirroring the logo lockup so the brand reads consistently everywhere.
 */

const COPPER = 'var(--color-copper)'
const BRAND_FONT = 'var(--font-family-brand)'

export function BrandName({ className = '' }: { className?: string }) {
  return (
    <span className={className} style={{ fontFamily: BRAND_FONT }}>
      Station<span style={{ color: COPPER }}>33</span>
    </span>
  )
}

/**
 * Brandify a plain string for inline rendering: any "Station33" / "Station 33"
 * occurrence is wrapped in the copper wordmark treatment, the rest is untouched.
 * Use at render sites that output string data, e.g. {brandify(item.description)}.
 */
export function brandify(text: string): React.ReactNode {
  const parts = text.split(/(Station\s?33)/g)
  return parts.map((part, i) =>
    /^Station\s?33$/.test(part) ? (
      <span key={i} style={{ fontFamily: BRAND_FONT }}>
        Station<span style={{ color: COPPER }}>33</span>
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  )
}

export default BrandName
