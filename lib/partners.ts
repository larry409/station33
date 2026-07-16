export type Partner = {
  name: string
  src: string
  alt: string
  w: number
  h: number
}

// Project partners. Each logo is pre-normalized to a uniform 780×300 white
// canvas (see scripts/notes) so they render at a consistent optical size in
// the partner walls. Note: CAUBF Consulting was attached only as a PDF with
// no usable image, so it's not yet included.
export const partners: Partner[] = [
  { name: 'Grace', src: '/images/partners/grace.png', alt: 'Grace — development, construction & procurement', w: 780, h: 300 },
  { name: 'Pape-Dawson', src: '/images/partners/pape.png', alt: 'Pape-Dawson', w: 780, h: 300 },
  { name: 'Franklin Architects', src: '/images/partners/franklin.png', alt: 'Franklin Architects', w: 780, h: 300 },
  { name: 'River Street', src: '/images/partners/river.png', alt: 'River Street Architecture + Interiors', w: 780, h: 300 },
  { name: 'Kinsey Company', src: '/images/partners/kinsey.png', alt: 'Kinsey Company Real Estate', w: 780, h: 300 },
  { name: 'Collier', src: '/images/partners/collier.png', alt: 'Collier', w: 780, h: 300 },
  { name: 'SouthEast Bank', src: '/images/partners/southeast.png', alt: 'SouthEast Bank, Member FDIC', w: 780, h: 300 },
  { name: 'Aloft by Marriott', src: '/images/partners/aloft.png', alt: 'Aloft Hotels', w: 780, h: 300 },
]
