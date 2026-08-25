/**
 * Content and form configuration for the commercial space pages
 * (`/spaces/retail`, `/spaces/offices`, `/spaces/restaurants`).
 *
 * These three spaces are under construction and have no unit renderings yet, so
 * each page is an interest-capture landing page: the facts we can state today,
 * plus a qualifying form. When renderings arrive, add a `gallery` section to
 * SpaceInterestPage the way `/spaces/residences` does — the rest stays put.
 *
 * Every field name here must also appear in `public/__forms.html`, or Netlify's
 * build-time crawler won't register it and the submission will 404.
 */

export type SpaceField =
  | { name: string; label: string; type: 'text' | 'email' | 'tel'; placeholder?: string; required?: boolean; hint?: string }
  | { name: string; label: string; type: 'select'; options: string[]; hint?: string }
  | { name: string; label: string; type: 'textarea'; placeholder?: string; rows?: number; hint?: string }

export type SpaceConfig = {
  /** URL segment under /spaces. */
  slug: string
  /** Netlify form name — must match public/__forms.html. */
  formName: string
  eyebrow: string
  title: string
  lede: string
  heroImage: string
  heroImageAlt: string
  metaTitle: string
  metaDescription: string
  stats: Array<{ value: string; label: string }>
  sectionHeading: string
  sectionBody: string
  highlights: Array<{ title: string; body: string }>
  formHeading: string
  formIntro: string
  submitLabel: string
  successMessage: string
  fields: SpaceField[]
}

const SQ_FT_RETAIL = ['Under 1,000', '1,000 – 2,500', '2,500 – 5,000', '5,000 – 8,000', 'Not sure yet']
const TIMELINE = ['As soon as space delivers', 'Within 12 months', '12 – 24 months', 'Still exploring']

export const retail: SpaceConfig = {
  slug: 'retail',
  formName: 'retail-interest',
  eyebrow: 'Pre-leasing interest',
  title: 'Retail',
  lede:
    'Street-level storefronts on South Broad, from 400 to 8,000 square feet, with tall ceilings, wide front windows, and a steady stream of people living and working in the building above.',
  heroImage: '/images/img212.jpg',
  heroImageAlt: 'Ground-floor retail storefronts at Station33 on South Broad',
  metaTitle: 'Retail Space | Station33',
  metaDescription:
    'Ground-floor retail at Station33 on South Broad, Chattanooga — 400 to 8,000 sq ft storefronts facing the plaza. Join the pre-leasing interest list for a first look at plans and pricing.',
  stats: [
    { value: '400–8,000', label: 'Sq ft per storefront' },
    { value: '91', label: 'Homes above' },
    { value: '46,000', label: 'Sq ft of offices on site' },
    { value: '4–5', label: 'Restaurants on the block' },
  ],
  sectionHeading: 'A storefront with a neighborhood already in it',
  sectionBody:
    'Station33 puts residents, office workers, and restaurant crowds on the same block. Your storefront sits at street level, where all of them walk past.',
  highlights: [
    {
      title: 'Customers who live upstairs',
      body: '91 homes and 46,000 square feet of offices sit directly above the shops. The restaurants bring in the rest of the neighborhood after work.',
    },
    {
      title: 'Room to make it yours',
      body: 'Tall ceilings and wide windows give you height and daylight to work with, and there is a place to take deliveries around back.',
    },
    {
      title: 'A street on the way up',
      body: 'Station33 anchors the rebuilding of South Broad, steps from the Tennessee Riverwalk and minutes from downtown.',
    },
  ],
  formHeading: 'Join the retail interest list',
  formIntro: 'The more you tell us about your concept, the better we can match you to the right storefront.',
  submitLabel: 'Join the list',
  successMessage: "You're on the list. We'll be in touch as retail plans and pricing are released.",
  fields: [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your full name', required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
    { name: 'company', label: 'Business or brand', type: 'text', placeholder: 'What you operate today' },
    { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Your phone number' },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      options: ['Apparel and goods', 'Grab-and-go food', 'Health and fitness', 'Beauty and personal care', 'Home and design', 'Professional services', 'Other'],
    },
    { name: 'square-footage', label: 'Square footage needed', type: 'select', options: SQ_FT_RETAIL },
    { name: 'timeline', label: 'Timeline', type: 'select', options: TIMELINE },
    { name: 'existing-locations', label: 'Existing locations', type: 'text', placeholder: 'Where you operate now, if anywhere' },
    { name: 'message', label: 'Tell us about your concept', type: 'textarea', placeholder: 'What you are building and what the space needs to do…', rows: 5 },
  ],
}

export const offices: SpaceConfig = {
  slug: 'offices',
  formName: 'office-interest',
  eyebrow: 'Pre-leasing interest',
  title: 'Class-A Offices',
  lede:
    '46,000 square feet of offices above the plaza, finished to the standard your team would otherwise drive downtown for — windows on every side, quality materials throughout, and room to grow into.',
  heroImage: '/images/aerial-classa.jpg',
  heroImageAlt: 'Aerial view of the office building at Station33',
  metaTitle: 'Class-A Office Space | Station33',
  metaDescription:
    'Class-A office space at Station33 on South Broad, Chattanooga — 46,000 sq ft, whole floors or single suites, with on-site parking and fiber internet. Join the pre-leasing interest list.',
  stats: [
    { value: '46,000', label: 'Sq ft total' },
    { value: 'Whole floor', label: 'Or a single suite' },
    { value: 'Fiber', label: 'High-speed internet' },
    { value: 'On site', label: 'Parking and dining' },
  ],
  sectionHeading: 'Built for teams who expect more',
  sectionBody:
    'Take a whole floor or a single suite. Either way your team gets the daylight, the finishes, and everything downstairs.',
  highlights: [
    {
      title: 'Space that fits your team',
      body: 'Open, light-filled floors that divide into suites for a small team or stay whole for a large one.',
    },
    {
      title: 'Lunch is one elevator ride',
      body: 'Restaurants, a fitness center, and the plaza are all downstairs. Parking is on site and the Riverwalk is out front.',
    },
    {
      title: 'A lease that bends',
      body: 'Tell us how fast you expect to grow and we will shape the lease around it, instead of locking you into a size that stops fitting.',
    },
  ],
  formHeading: 'Join the office interest list',
  formIntro: 'The more you tell us about your team, the better we can bring you the right space.',
  submitLabel: 'Join the list',
  successMessage: "You're on the list. We'll be in touch as office plans and pricing are released.",
  fields: [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your full name', required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
    { name: 'company', label: 'Company', type: 'text', placeholder: 'Your company name' },
    { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Your phone number' },
    { name: 'team-size', label: 'Team size', type: 'select', options: ['1 – 10', '11 – 25', '26 – 50', '51 – 100', 'More than 100'] },
    {
      name: 'square-footage',
      label: 'Square footage needed',
      type: 'select',
      options: ['Under 2,500', '2,500 – 5,000', '5,000 – 10,000', '10,000 – 20,000', 'More than 20,000', 'Not sure yet'],
    },
    {
      name: 'lease-expiration',
      label: 'Current lease expires',
      type: 'text',
      placeholder: 'Month and year',
      hint: 'Tells us when to follow up. Leave blank if you own or are month-to-month.',
    },
    { name: 'message', label: 'Anything else', type: 'textarea', placeholder: 'What your team needs from a space…', rows: 5 },
  ],
}

export const restaurants: SpaceConfig = {
  slug: 'restaurants',
  formName: 'restaurant-interest',
  eyebrow: 'Pre-leasing interest',
  title: 'Restaurants & Bar',
  lede:
    'Four to five restaurants anchor Station33, with patios opening onto the plaza, room for a full bar, and the kitchen infrastructure already built into the building.',
  heroImage: '/images/rendering-food-hall.jpg',
  heroImageAlt: 'Rendering of the dining and gathering space at Station33',
  metaTitle: 'Restaurant Space | Station33',
  metaDescription:
    'Restaurant and bar space at Station33 on South Broad, Chattanooga — four to five spaces with plaza patios, room for a full bar, and grease traps and ventilation already built in. Join the pre-leasing interest list.',
  stats: [
    { value: '4–5', label: 'Restaurant spaces' },
    { value: 'Patios', label: 'Facing the plaza' },
    { value: '91', label: 'Homes above' },
    { value: '46,000', label: 'Sq ft of offices on site' },
  ],
  sectionHeading: 'A dining room that stays busy',
  sectionBody:
    'Residents upstairs, offices next door, and events on the plaza keep people coming through from lunch to last call.',
  highlights: [
    {
      title: 'The expensive parts are already done',
      body: 'Grease traps and ventilation are designed into the building, so you are not paying to add them later.',
    },
    {
      title: 'Patios on the plaza',
      body: 'Seating indoors and out, facing the open square at the center of the district.',
    },
    {
      title: 'Neighbors who show up',
      body: '91 homes and 46,000 square feet of offices sit right here, and the plaza runs events through the year.',
    },
  ],
  formHeading: 'Join the restaurant interest list',
  formIntro: 'The more you tell us about the food and the room you want, the better we can match your concept to the right space.',
  submitLabel: 'Join the list',
  successMessage: "You're on the list. We'll be in touch as restaurant plans and pricing are released.",
  fields: [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your full name', required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
    { name: 'concept', label: 'Concept', type: 'text', placeholder: 'Name of your concept or group' },
    { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Your phone number' },
    {
      name: 'service-type',
      label: 'Service type',
      type: 'select',
      options: ['Full-service dining', 'Fast casual', 'Bar or cocktail lounge', 'Café or coffee', 'Brewery or taproom', 'Other'],
    },
    { name: 'seats', label: 'Seats needed', type: 'select', options: ['Under 50', '50 – 100', '100 – 150', 'More than 150', 'Not sure yet'] },
    { name: 'patio', label: 'Patio', type: 'select', options: ['Essential', 'Nice to have', 'Not needed'] },
    { name: 'timeline', label: 'Timeline', type: 'select', options: TIMELINE },
    { name: 'existing-locations', label: 'Existing locations', type: 'text', placeholder: 'Where you operate now, if anywhere' },
    { name: 'message', label: 'Tell us about your concept', type: 'textarea', placeholder: 'The food, the room, and what the space needs to do…', rows: 5 },
  ],
}

export const spaceConfigs = [retail, offices, restaurants]
