interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
}

export default function Logo({ variant = 'light', className = '' }: LogoProps) {
  const stationColor = variant === 'light' ? 'var(--color-cream)' : 'var(--color-dark)'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 100"
      className={className}
      aria-label="Station 33"
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
    </svg>
  )
}
