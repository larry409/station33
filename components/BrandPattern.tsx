{/*
  Station33 Brand Pattern Component

  Pure CSS usage (as background-image):
  background-image: url("data:image/svg+xml,...encoded-svg...");
  background-repeat: repeat;
  background-size: 400px 200px;
*/}

interface BrandPatternProps {
  className?: string
  opacity?: number
}

export default function BrandPattern({ className = '', opacity = 1 }: BrandPatternProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="station33-pattern"
          x="0"
          y="0"
          width="420"
          height="210"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-17)"
        >
          {/* Row 1 - Dark */}
          <text x="0" y="30" fill="#2b2f33" fontSize="24" fontFamily="Metropolis, Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">STATION33</text>
          <text x="210" y="30" fill="#a85f42" fontSize="24" fontFamily="Metropolis, Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">STATION33</text>
          {/* Row 2 - Offset */}
          <text x="105" y="65" fill="#a85f42" fontSize="24" fontFamily="Metropolis, Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">STATION33</text>
          <text x="315" y="65" fill="#2b2f33" fontSize="24" fontFamily="Metropolis, Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">STATION33</text>
          {/* Row 3 - Dark */}
          <text x="0" y="100" fill="#a85f42" fontSize="24" fontFamily="Metropolis, Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">STATION33</text>
          <text x="210" y="100" fill="#2b2f33" fontSize="24" fontFamily="Metropolis, Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">STATION33</text>
          {/* Row 4 - Offset */}
          <text x="105" y="135" fill="#2b2f33" fontSize="24" fontFamily="Metropolis, Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">STATION33</text>
          <text x="315" y="135" fill="#a85f42" fontSize="24" fontFamily="Metropolis, Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">STATION33</text>
          {/* Row 5 - Dark */}
          <text x="0" y="170" fill="#2b2f33" fontSize="24" fontFamily="Metropolis, Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">STATION33</text>
          <text x="210" y="170" fill="#a85f42" fontSize="24" fontFamily="Metropolis, Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">STATION33</text>
          {/* Row 6 - Offset */}
          <text x="105" y="205" fill="#a85f42" fontSize="24" fontFamily="Metropolis, Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">STATION33</text>
          <text x="315" y="205" fill="#2b2f33" fontSize="24" fontFamily="Metropolis, Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.05em">STATION33</text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#ece8e1" />
      <rect width="100%" height="100%" fill="url(#station33-pattern)" />
    </svg>
  )
}
