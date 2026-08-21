/**
 * Newsroom content.
 *
 * Posts live here as typed data rather than in a CMS: the volume is low, the
 * copy is legally reviewed before it ships, and keeping it in the repo means
 * every article is statically rendered and diffable in review.
 *
 * The article body is a discriminated union of blocks so the template can give
 * each kind of content its own treatment (pull quotes especially) without any
 * HTML-in-strings. Add new block kinds to `NewsBlock` and handle them in
 * `app/news/[slug]/page.tsx` — the switch is exhaustive, so TypeScript will
 * point at the render site if you forget.
 */

/** One renderable chunk of article body copy. */
export type NewsBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | {
      type: 'quote'
      /** Quote text WITHOUT surrounding quotation marks — the template adds them. */
      text: string
      attribution: string
      /** Title / affiliation, e.g. "owner and CEO, Barbera Development". */
      role?: string
      /** Sourcing note, e.g. "in a written statement". */
      note?: string
    }
  | { type: 'list'; items: string[]; ordered?: boolean }

/** A figure for the stat strip under the headline. */
export type NewsStat = {
  value: string
  label: string
}

/** One line of the development-team credits. */
export type NewsCredit = {
  /** Discipline, e.g. "Architect". */
  role: string
  /** Firm name. */
  name: string
  /** Firm website. Left undefined until a URL is confirmed — never guessed. */
  url?: string
}

/** Who reporters should call. */
export type MediaContact = {
  name: string
  /** Office line, formatted for display. */
  office?: string
  /** Mobile line, formatted for display. */
  cell?: string
  email?: string
}

/**
 * An "About X" block. Kept separate from `body` because the press kit reuses
 * these verbatim as copy-and-paste boilerplate.
 */
export type BoilerplateSection = {
  heading: string
  paragraphs: string[]
}

export type NewsPost = {
  slug: string
  /** ISO 8601 date (YYYY-MM-DD). Drives sort order and <time dateTime>. */
  date: string
  /** Short label for the card, e.g. "Press release". */
  kind: string
  title: string
  /** Standfirst / subhead. Also used as the meta description. */
  dek: string
  /** Wire-style dateline shown above the headline. */
  dateline?: string
  heroImage: string
  heroAlt: string
  heroWidth: number
  heroHeight: number
  stats: NewsStat[]
  body: NewsBlock[]
  credits: NewsCredit[]
  boilerplate: BoilerplateSection[]
  mediaContact: MediaContact
}

export const mediaContact: MediaContact = {
  name: 'Kelly Allen',
  office: '423.805.3457',
  cell: '423.520.6883',
  email: 'info@station33.co',
}

/**
 * All posts, newest first. Keep this array sorted by `date` descending —
 * `/news` and the homepage render it in array order.
 */
export const newsPosts: NewsPost[] = [
  {
    slug: 'station-33-breaks-ground',
    date: '2026-08-20',
    kind: 'Press release',
    title:
      "Station 33 Breaks Ground on $130 Million Mixed-Use Development on Chattanooga's South Broad Street",
    dek:
      'Aloft Hotel by Marriott to bring 120 rooms to the development, alongside a food hall, restaurants, condos, office, retail and parking garage.',
    dateline: 'CHATTANOOGA, Tenn. (Aug. 20, 2026)',
    heroImage: '/images/rendering-aerial.jpg',
    heroAlt:
      'Aerial rendering of Station 33 on South Broad Street, showing five buildings around a pedestrian plaza with the clock tower at its center',
    heroWidth: 2400,
    heroHeight: 1600,
    stats: [
      { value: '$130M', label: 'Total investment' },
      { value: '500,000', label: 'Square feet' },
      { value: '300+', label: 'Jobs created' },
      { value: '475', label: 'Parking spaces' },
      { value: '120', label: 'Aloft hotel rooms' },
      { value: 'Fall 2028', label: 'Main buildings complete' },
    ],
    body: [
      {
        type: 'paragraph',
        text:
          'Station 33 broke ground today on a mixed-use development featuring an Aloft Hotel by Marriott, dedicated food hall, clock tower, parking garage, and three additional mixed-use buildings with ground-floor retail and a mix of condominiums, townhomes and office space above. The $130 million project is expected to bring more than 300 jobs to the 3300 block of South Broad Street.',
      },
      {
        type: 'quote',
        text:
          "There's nothing like this in Chattanooga. This is Chattanooga's first urban mixed-use community, and it's truly people-centric. Our pedestrian-only plaza, greenspace and splash pad create space for people to live, work, interact, meet, play, shop, and eat; all without leaving this block. Everything about this project complements that goal.",
        attribution: 'Claudia Barbera',
        role: 'owner and CEO, Barbera Development',
      },
      {
        type: 'paragraph',
        text:
          'The development will span five buildings and a parking garage with 475 spaces. Altogether, Station 33 will add 500,000 square feet of new development, including a 120-room Aloft Hotel, office, residential, and ground-floor retail and restaurant space. A curated food hall with stalls for unique food concepts and a shared bar, along with additional space for a full-service restaurant and lounge, is expected to create a major draw to the area.',
      },
      {
        type: 'paragraph',
        text:
          'The buildings are arranged around a shared courtyard with a splash pad and green space. A clock tower rising more than 75 feet will create an iconic landmark for the area.',
      },
      {
        type: 'quote',
        text:
          'This kind of investment on South Broad Street is exactly what our district needs. Station 33 will bring a new destination for visitors and locals alike, driving more economic growth far beyond this single block.',
        attribution: 'Commissioner Joe Graham',
      },
      {
        type: 'paragraph',
        text:
          'The development includes over 100 residential condos and townhomes, as well as six luxury penthouse suites with floor-to-ceiling glass walls and views of Lookout Mountain. Other condo options include one-, two-, and three-bedroom plans featuring single-level living.',
      },
      {
        type: 'quote',
        text:
          'Projects like Station 33 mean real opportunity for our neighborhood, from hospitality and retail jobs to office employment and new places to call home. Transforming this block will create a lasting impact across this area of our city.',
        attribution: 'Raquetta Dotley',
        role: 'City Councilwoman',
        note: 'in a written statement',
      },
      {
        type: 'paragraph',
        text:
          'The Aloft Hotel will be operated by Dynamic Group, a Chattanooga-based hospitality management company. The seven-story hotel will offer guests rooftop amenities, including a patio and bar, along with meeting rooms, a fitness center, and vibrant social spaces.',
      },
      {
        type: 'quote',
        text:
          "Chattanooga is a place where people continually look for ways to make a great city even better. The revitalization of the Southside continues to gain momentum. We've got Erlanger Park, the Riverwalk expansion, Alton Park connector and now Station 33. I want to thank Claudia for bringing her vision to this city and to this block.",
        attribution: 'Tim Kelly',
        role: 'Mayor of Chattanooga',
      },
      {
        type: 'paragraph',
        text:
          'Sitework will start later this summer, with vertical construction planned to begin in November. The four main buildings are slated for completion in the fall of 2028.',
      },
      { type: 'heading', text: 'Construction timeline' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Summer 2026 — sitework begins',
          'November 2026 — vertical construction begins',
          'Fall 2028 — four main buildings complete',
        ],
      },
    ],
    credits: [
      { role: 'Developer', name: 'Barbera Development' },
      { role: 'Development partner', name: 'The Kinsey Company' },
      { role: 'Architect', name: 'Franklin Architects' },
      { role: 'Civil engineer', name: 'Pape-Dawson' },
      { role: 'Commercial builder', name: 'Grace Construction' },
      { role: 'Residential builder', name: 'Collier Construction' },
      { role: 'Financing', name: 'SouthEast Bank' },
      { role: 'Commercial real estate', name: 'SVN | Second Story Real Estate Management' },
      {
        role: 'Residential real estate',
        name: 'Better Homes & Gardens Real Estate Signature Brokers',
      },
      { role: 'Hotel developer', name: 'Dynamic Group' },
      { role: 'Hotel architect', name: 'River Street Architecture' },
    ],
    boilerplate: [
      {
        heading: 'About Station 33',
        paragraphs: [
          "Station 33 is a five-building, $110 million mixed-use development on the 3300 block of South Broad Street in Chattanooga, Tennessee. Anchored by a 120-room Aloft Hotel by Marriott, a curated food hall, and a landmark clock tower, the pedestrian-focused development will bring more than 500,000 square feet of hotel, dining, retail, office, and residential space to the city's Southside, along with a shared courtyard and a car-free plaza designed for community gathering. Station 33 is developed by The Barbera Group, supported by The Kinsey Company.",
        ],
      },
      {
        heading: 'About Barbera Development',
        paragraphs: [
          'Barbera Development is a Chattanooga-based real estate development company dedicated to creating distinctive places that strengthen communities. In 2014, the group launched its first redevelopment in historic St. Elmo and later expanded to nearby properties, including the Veterinary Care and Specialty Group specialty animal hospital. Over the last decade, Barbera Development has transformed more than 100,000 square feet of commercial and mixed-use space. Guided by a long-term investment philosophy and a commitment to quality, the company continues to shape vibrant destinations where businesses thrive and communities connect.',
        ],
      },
      {
        heading: 'About Dynamic Group',
        paragraphs: [
          'Dynamic Group is a Chattanooga, Tennessee-based hospitality management company providing comprehensive management services for hotels across multiple lodging segments. Backed by more than 100 years of combined hospitality leadership experience, the company delivers expertise in operations, accounting, sales and marketing, revenue management, food and beverage, and human resources. Through a performance-driven, owner-focused approach, Dynamic Group helps hotel properties maximize operational efficiency, elevate the guest experience, and achieve long-term financial success.',
        ],
      },
      {
        heading: 'About The Kinsey Company',
        paragraphs: [
          'Based in Chattanooga, The Kinsey Company is a real estate development firm founded in 2026 by Adam Kinsey, whose experience spans two decades and more than $700 million in completed projects that have transformed downtown Chattanooga, including the Chattanooga Choo Choo, River Pier Landing, and Track 29. The firm focuses on urban infill, mixed-use development, and housing across all price points. Every project begins with the community — understanding its history, its people, and its needs before breaking ground. The Kinsey Company is committed to creating places that add lasting value for owners, tenants, neighbors, and the city as a whole.',
        ],
      },
    ],
    mediaContact,
  },
]

/** Look up a post by slug. Returns undefined for unknown slugs. */
export function getPost(slug: string): NewsPost | undefined {
  return newsPosts.find((post) => post.slug === slug)
}

/** Format an ISO date for display, e.g. "August 20, 2026". */
export function formatPostDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
