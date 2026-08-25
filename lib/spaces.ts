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
    'Ground-floor storefronts on South Broad, from 400 to 8,000 square feet, with high ceilings, deep glass lines, and steady traffic from the residences and offices above.',
  heroImage: '/images/img212.jpg',
  heroImageAlt: 'Ground-floor retail storefronts at Station33 on South Broad',
  metaTitle: 'Retail Space | Station33',
  metaDescription:
    'Ground-floor retail at Station33 on South Broad, Chattanooga — 400 to 8,000 sq ft storefronts with plaza frontage. Join the pre-leasing interest list for first look at floor plates and pricing.',
  stats: [
    { value: '400–8,000', label: 'Sq ft per storefront' },
    { value: '91', label: 'Residences above' },
    { value: '46,000', label: 'Sq ft of offices on site' },
    { value: '4–5', label: 'Restaurants on the block' },
  ],
  sectionHeading: 'A storefront with a neighborhood already in it',
  sectionBody:
    'Station33 brings residents, office tenants, and restaurant traffic to the same block. Retail sits at street level, where all of it passes by.',
  highlights: [
    {
      title: 'Traffic that lives here',
      body: '91 residences and 46,000 square feet of Class-A office sit directly above the storefronts, with restaurants pulling the neighborhood in after five.',
    },
    {
      title: 'Room to build out',
      body: 'High ceilings and wide glass give you the volume and daylight to make the space yours, with loading access at the back of house.',
    },
    {
      title: 'The South Broad moment',
      body: "Station33 anchors the district's redevelopment, steps from the Tennessee Riverwalk and minutes from downtown.",
    },
  ],
  formHeading: 'Join the retail interest list',
  formIntro: 'Only your name and email are required. The rest helps us match you to the right storefront.',
  submitLabel: 'Join the list',
  successMessage: "You're on the list. We'll be in touch as retail floor plates are released.",
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
    'Elevated Class-A workspace above the plaza — efficient floor plates, daylight on every side, and premium finishes throughout 46,000 square feet.',
  heroImage: '/images/aerial-classa.jpg',
  heroImageAlt: 'Aerial view of the Class-A office building at Station33',
  metaTitle: 'Class-A Office Space | Station33',
  metaDescription:
    'Class-A office space at Station33 on South Broad, Chattanooga — 46,000 sq ft with efficient floor plates, on-site parking, and fiber. Join the pre-leasing interest list.',
  stats: [
    { value: '46,000', label: 'Sq ft total' },
    { value: 'Class-A', label: 'Finishes throughout' },
    { value: 'Fiber', label: 'High-speed internet' },
    { value: 'On site', label: 'Parking and dining' },
  ],
  sectionHeading: 'Built for teams who expect more',
  sectionBody:
    'Full floors and suites with the light, the finishes, and the amenities your people would otherwise commute downtown for.',
  highlights: [
    {
      title: 'Floor plates that work',
      body: 'Efficient layouts with daylight on every side, ready to divide for a growing team or hold as a full floor.',
    },
    {
      title: 'Everything downstairs',
      body: 'Restaurants, a fitness center, and the plaza are an elevator ride away, with parking on site and the Riverwalk out front.',
    },
    {
      title: 'Terms built around you',
      body: 'Suites and full floors, with lease structures we shape around where your team is headed.',
    },
  ],
  formHeading: 'Join the office interest list',
  formIntro: 'Only your name and email are required. The rest helps us bring you the right floor plate.',
  submitLabel: 'Join the list',
  successMessage: "You're on the list. We'll be in touch as office floor plates are released.",
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
    'Four to five full-service restaurants anchor Station33, with patios opening onto the plaza, full bar capability, and back-of-house infrastructure designed in from the start.',
  heroImage: '/images/rendering-food-hall.jpg',
  heroImageAlt: 'Rendering of the dining and gathering space at Station33',
  metaTitle: 'Restaurant Space | Station33',
  metaDescription:
    'Restaurant and bar space at Station33 on South Broad, Chattanooga — four to five full-service spaces with patios, full bar capability, and grease trap and ventilation built in. Join the pre-leasing interest list.',
  stats: [
    { value: '4–5', label: 'Restaurant spaces' },
    { value: 'Patios', label: 'Facing the plaza' },
    { value: '91', label: 'Residences above' },
    { value: '46,000', label: 'Sq ft of offices on site' },
  ],
  sectionHeading: 'A room with covers from open to close',
  sectionBody:
    'Residents upstairs, offices next door, and events on the plaza put people at your door across every daypart.',
  highlights: [
    {
      title: 'Infrastructure from day one',
      body: 'Grease trap and ventilation systems designed in, so your build-out starts ahead instead of catching up.',
    },
    {
      title: 'Patios on the plaza',
      body: 'Indoor and outdoor seating facing the gathering space at the center of the district.',
    },
    {
      title: 'Neighbors who show up',
      body: '91 residences, 46,000 square feet of office, and a programmed plaza feeding lunch, dinner, and late service.',
    },
  ],
  formHeading: 'Join the restaurant interest list',
  formIntro: 'Only your name and email are required. The rest helps us match your concept to the right space.',
  submitLabel: 'Join the list',
  successMessage: "You're on the list. We'll be in touch as restaurant spaces are released.",
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
