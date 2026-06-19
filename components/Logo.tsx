interface LogoProps {
  variant?: 'light' | 'dark'
  tagline?: boolean
  className?: string
}

export default function Logo({ variant = 'light', tagline = false, className = '' }: LogoProps) {
  const stationColor = variant === 'light' ? 'var(--color-cream)' : 'var(--color-dark)'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={tagline ? '0 0 500 132' : '0 0 500 100'}
      className={className}
      aria-label={tagline ? 'Station 33 — Live, Gather, Work, Play' : 'Station 33'}
      role="img"
      style={{ fontFamily: 'var(--font-family-brand)', fontWeight: 800 }}
    >
      <text
        x="250"
        y="78"
        textAnchor="middle"
        fontSize="88"
        letterSpacing="-2"
      >
        <tspan fill={stationColor}>STATION </tspan>
        <tspan fill="var(--color-copper)">33</tspan>
      </text>

      {tagline && (
        <>
          <text
            x="250"
            y="114"
            textAnchor="middle"
            fontSize="24"
            letterSpacing="1.5"
          >
            <tspan fill={stationColor}>LIVE </tspan>
            <tspan fill="var(--color-copper)">+</tspan>
            <tspan fill={stationColor}> GATHER </tspan>
            <tspan fill="var(--color-copper)">+</tspan>
            <tspan fill={stationColor}> WORK </tspan>
            <tspan fill="var(--color-copper)">+</tspan>
            <tspan fill={stationColor}> PLAY</tspan>
          </text>
          <line
            x1="30"
            y1="124"
            x2="470"
            y2="124"
            stroke={stationColor}
            strokeWidth="2.5"
          />
        </>
      )}
    </svg>
  )
}
