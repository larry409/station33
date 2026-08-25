import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { BrandName } from '@/components/BrandName'

export const metadata: Metadata = {
  title: 'Privacy Policy | Station33',
  description:
    'How Station33 handles the information you share through this site — newsletter signups, contact, investor, and pre-leasing inquiries, and the limited data our hosting provider records.',
  alternates: { canonical: '/privacy' },
}

const LAST_UPDATED = 'August 25, 2026'

/* ---------- Prose primitives (shared look for long-form legal copy) ---------- */

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base md:text-lg text-body-text leading-relaxed mb-5 last:mb-0">{children}</p>
  )
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mb-5 space-y-3 last:mb-0">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-6 text-base md:text-lg text-body-text leading-relaxed"
        >
          <span
            aria-hidden="true"
            className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-station-gold"
          />
          {item}
        </li>
      ))}
    </ul>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg md:text-xl font-semibold text-primary-text mt-8 first:mt-0 mb-3">
      {children}
    </h3>
  )
}

const linkClass =
  'text-station-gold underline underline-offset-4 decoration-station-gold/40 hover:text-station-gold-light hover:decoration-station-gold-light transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg-darker'

function MailLink() {
  return (
    <a href="mailto:info@station33.co" className={linkClass}>
      info@station33.co
    </a>
  )
}

/* ---------- Content ---------- */

type Section = {
  id: string
  heading: string
  body: React.ReactNode
}

const sections: Section[] = [
  {
    id: 'overview',
    heading: 'Overview',
    body: (
      <>
        <P>
          This site is the marketing and information site for <BrandName />, a mixed-use development
          at 3210 Broad Street in Chattanooga, Tennessee, operated by South Broad Development
          (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;).
        </P>
        <P>
          It is a small site with a simple purpose: tell people about the project and give them a way
          to reach us. We collect only what you type into one of our forms, plus the routine
          technical records our hosting provider keeps in order to serve the pages. There is no
          account to create, nothing to log into, and no advertising or analytics tracking on this
          site.
        </P>
      </>
    ),
  },
  {
    id: 'what-we-collect',
    heading: 'Information we collect',
    body: (
      <>
        <SubHeading>Information you give us</SubHeading>
        <P>There are a few places on this site where you can send us information:</P>
        <Bullets
          items={[
            <>
              <strong className="text-primary-text font-semibold">
                The &ldquo;Stay Updated&rdquo; newsletter form
              </strong>{' '}
              in the footer of every page collects your <em>email address</em> and nothing else.
            </>,
            <>
              <strong className="text-primary-text font-semibold">The contact form</strong> on our{' '}
              <Link href="/contact" className={linkClass}>
                Contact
              </Link>{' '}
              page collects your <em>name</em>, <em>email address</em>, an optional{' '}
              <em>phone number</em>, and the <em>message</em> you write.
            </>,
            <>
              <strong className="text-primary-text font-semibold">
                The investor inquiry form
              </strong>{' '}
              on our{' '}
              <Link href="/investors" className={linkClass}>
                Investors
              </Link>{' '}
              page collects the same four fields: <em>name</em>, <em>email address</em>, optional{' '}
              <em>phone number</em>, and <em>message</em>.
            </>,
            <>
              <strong className="text-primary-text font-semibold">
                The pre-leasing interest forms
              </strong>{' '}
              on our{' '}
              <Link href="/spaces/retail" className={linkClass}>
                Retail
              </Link>
              ,{' '}
              <Link href="/spaces/offices" className={linkClass}>
                Offices
              </Link>
              , and{' '}
              <Link href="/spaces/restaurants" className={linkClass}>
                Restaurants
              </Link>{' '}
              pages require only your <em>name</em> and <em>email address</em>. Everything else is
              optional and up to you: your <em>business, brand, or concept name</em>, a{' '}
              <em>phone number</em>, the <em>size and type of space</em> you are looking for, your{' '}
              <em>timeline</em>, any <em>locations you operate today</em>, and — on the office form
              only — <em>when your current lease expires</em>. We ask so we can send you the right
              plans at the right time, not because any of it is required.
            </>,
          ]}
        />
        <P>
          Every one of these forms is optional. You can read every page of this site without
          submitting anything. Whatever you choose to put in the message field is up to you — please don&rsquo;t
          send sensitive personal information (financial account numbers, government ID numbers,
          health information) through a web form.
        </P>
        <P>
          Every form on this site includes a hidden anti-spam field that people never see and never
          fill in. If it comes back filled in, the submission is treated as automated spam.
        </P>

        <SubHeading>Information collected automatically</SubHeading>
        <P>
          We do not run analytics software on this site. Our hosting provider, like every web host,
          keeps standard server and delivery logs in order to serve pages and defend against abuse.
          Those logs typically include the IP address the request came from, the browser and device
          type reported by your browser, the page requested, and the date and time. We use these
          logs, when we look at them at all, for security and troubleshooting — not to build a
          profile of you.
        </P>
      </>
    ),
  },
  {
    id: 'how-we-use-it',
    heading: 'How we use your information',
    body: (
      <>
        <P>We use what you send us to do the thing you asked us to do:</P>
        <Bullets
          items={[
            <>
              <strong className="text-primary-text font-semibold">Newsletter email addresses</strong>{' '}
              are collected so we can send project updates — construction progress, leasing
              availability, and community events.
            </>,
            <>
              <strong className="text-primary-text font-semibold">
                Contact and investor inquiries
              </strong>{' '}
              are read by our team and used to respond to you, and to follow up about leasing,
              investment, partnership, or press questions you raised.
            </>,
            <>
              <strong className="text-primary-text font-semibold">Server logs</strong> are used to
              keep the site running, secure, and reasonably fast.
            </>,
          ]}
        />
        <P>
          We do not sell the information you submit through this site, and we do not share it with
          advertisers or data brokers.
        </P>
        <P>
          <strong className="text-primary-text font-semibold">
            A note on the newsletter, in the interest of being straight with you:
          </strong>{' '}
          newsletter addresses are delivered to Netlify&rsquo;s forms service along with our other
          submissions, where our team receives them. We are not yet running an automated mailing
          list. When we connect an email marketing platform, we will update this policy and name the
          provider here before sending anything.
        </P>
      </>
    ),
  },
  {
    id: 'who-else-sees-it',
    heading: 'Service providers who handle it',
    body: (
      <>
        <P>
          We keep the list of companies involved as short as we can. As of the date above, it is one:
        </P>
        <Bullets
          items={[
            <>
              <strong className="text-primary-text font-semibold">Netlify</strong> hosts this
              website and processes our form submissions. When you submit any form here — the
              newsletter signup, the contact form, the investor inquiry form, or a pre-leasing
              interest form — the contents are delivered to Netlify&rsquo;s forms service, which
              stores the submission and notifies our team. Netlify also operates the servers
              that deliver these pages and keeps the delivery logs described above. Netlify&rsquo;s
              handling of that data is governed by its own privacy policy and by our agreement with
              them.
            </>,
          ]}
        />
        <P>
          Beyond that, we may share information if we are required to by law, if we need to in order
          to protect our rights or someone&rsquo;s safety, or in connection with a sale or
          reorganization of the business. If we add another provider — an email marketing platform,
          for example, or a CRM for leasing inquiries — we will list it here.
        </P>
      </>
    ),
  },
  {
    id: 'cookies-and-tracking',
    heading: 'Cookies, analytics, and advertising',
    body: (
      <>
        <P>
          This site sets no cookies of its own, runs no analytics package, and contains no
          advertising pixels, retargeting tags, or social media tracking scripts. There is no
          cross-site tracking here, and nothing that follows you to other websites. That is a
          description of how the site is actually built, not an aspiration — there is simply no such
          code on it.
        </P>
        <P>
          If that changes, this section changes with it, and we will say plainly what was added and
          why.
        </P>
      </>
    ),
  },
  {
    id: 'retention',
    heading: 'How long we keep it',
    body: (
      <>
        <P>
          We keep form submissions for as long as they are useful for the conversation you started —
          a leasing or investment inquiry, for instance, may stay with the team through the life of
          the project — and newsletter addresses until you ask to be removed. Hosting and delivery
          logs are retained on our provider&rsquo;s standard schedule.
        </P>
      </>
    ),
  },
  {
    id: 'your-choices',
    heading: 'Your choices',
    body: (
      <>
        <P>
          Write to us at <MailLink /> and we will do the following, at no cost to you:
        </P>
        <Bullets
          items={[
            <>
              <strong className="text-primary-text font-semibold">Remove you from updates.</strong>{' '}
              Ask to unsubscribe and we will take your address off the list.
            </>,
            <>
              <strong className="text-primary-text font-semibold">
                Tell you what we have, or delete it.
              </strong>{' '}
              Ask for a copy of what you sent us, or ask us to delete it, and we will — subject to
              anything we are legally required to keep.
            </>,
            <>
              <strong className="text-primary-text font-semibold">Correct it.</strong> If something
              you sent us is wrong, tell us and we will fix it.
            </>,
          ]}
        />
        <P>
          Please use the same email address you contacted us from, or give us enough detail to find
          your submission.
        </P>
      </>
    ),
  },
  {
    id: 'security',
    heading: 'Security',
    body: (
      <>
        <P>
          This site is served over an encrypted connection, and form submissions travel encrypted to
          our hosting provider. That said, no method of transmitting or storing information over the
          internet is completely secure, and we cannot guarantee absolute security. Please keep
          sensitive details out of web forms and send them another way if we ask for them.
        </P>
      </>
    ),
  },
  {
    id: 'children',
    heading: "Children's privacy",
    body: (
      <>
        <P>
          This site is intended for a general business and community audience. It is not directed to
          children under 13, and we do not knowingly collect information from them. If you believe a
          child has sent us information through this site, email <MailLink /> and we will delete it.
        </P>
      </>
    ),
  },
  {
    id: 'other-sites',
    heading: 'Links to other sites',
    body: (
      <>
        <P>
          Some pages link out to other organizations — project partners, social media profiles, and
          news coverage. Once you follow one of those links you are on someone else&rsquo;s site,
          under their privacy policy, not ours. We do not control what they collect.
        </P>
      </>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    body: (
      <>
        <P>
          As the project moves from construction into leasing and operations, the tools behind this
          site will change, and this policy will be updated to match. The date at the top of this
          page always reflects the current version. Material changes will be noted here.
        </P>
      </>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact us',
    body: (
      <>
        <P>Questions about this policy, or about information you have sent us:</P>
        <Bullets
          items={[
            <>
              Email: <MailLink />
            </>,
            <>South Broad Development, 3210 Broad Street, Chattanooga, TN 37408</>,
            <>
              Or use the{' '}
              <Link href="/contact" className={linkClass}>
                contact form
              </Link>
              .
            </>,
          ]}
        />
      </>
    ),
  },
]

/* ---------- Page ---------- */

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />

      <main className="bg-bg-darker">
        {/* Header — extra top padding clears the fixed floating nav */}
        <section className="container pt-28 md:pt-36 pb-8 md:pb-12">
          <div className="max-w-[70ch]">
            <span className="inline-block text-station-gold text-xs md:text-sm font-semibold uppercase tracking-[0.24em] mb-5">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-primary-text leading-[1.05] tracking-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-body-text leading-relaxed mb-6">
              What <BrandName /> collects through this website, why, and who else touches it.
            </p>
            <p className="text-sm md:text-base text-body-text/80">
              Last updated{' '}
              <time dateTime="2026-08-21" className="text-primary-text font-medium">
                {LAST_UPDATED}
              </time>
            </p>
          </div>
        </section>


        {/* Body — sticky contents on large screens, readable measure for prose */}
        <section className="container pb-20 md:pb-28">
          <div className="grid lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] gap-10 lg:gap-16 xl:gap-20 items-start">
            <nav
              aria-label="On this page"
              className="hidden lg:block lg:sticky lg:top-32 border-l border-divider-gray pl-6"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-station-gold mb-4">
                On this page
              </h2>
              <ol className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block py-1.5 text-sm text-body-text hover:text-primary-text transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="max-w-[70ch]">
              {sections.map((section, i) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  className={`scroll-mt-28 md:scroll-mt-32 ${
                    i === 0 ? '' : 'mt-12 md:mt-16 pt-10 md:pt-12 border-t border-divider-gray'
                  }`}
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="text-2xl md:text-3xl font-semibold text-primary-text tracking-tight mb-5"
                  >
                    {section.heading}
                  </h2>
                  {section.body}
                </section>
              ))}

              <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-divider-gray">
                <p className="text-base md:text-lg text-body-text leading-relaxed">
                  See also our{' '}
                  <Link href="/terms" className={linkClass}>
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
