export type Partner = {
  name: string
  src: string
  alt: string
  w: number
  h: number
}

// Project partners (logos supplied by the S33 team). Note: CAUBF Consulting
// was attached only as a PDF with no usable image, so it's not yet included.
export const partners: Partner[] = [
  { name: 'Grace', src: '/images/partners/grace.png', alt: 'Grace — development, construction & procurement', w: 241, h: 260 },
  { name: 'Pape-Dawson', src: '/images/partners/pape.png', alt: 'Pape-Dawson', w: 1999, h: 260 },
  { name: 'Franklin Architects', src: '/images/partners/franklin.png', alt: 'Franklin Architects', w: 337, h: 260 },
  { name: 'River Street', src: '/images/partners/river.png', alt: 'River Street Architecture + Interiors', w: 1149, h: 260 },
  { name: 'Kinsey Company', src: '/images/partners/kinsey.png', alt: 'Kinsey Company Real Estate', w: 201, h: 260 },
  { name: 'Collier', src: '/images/partners/collier.png', alt: 'Collier', w: 660, h: 260 },
  { name: 'SouthEast Bank', src: '/images/partners/southeast.png', alt: 'SouthEast Bank, Member FDIC', w: 478, h: 260 },
  { name: 'Aloft by Marriott', src: '/images/partners/aloft.png', alt: 'Aloft Hotels', w: 336, h: 260 },
]
