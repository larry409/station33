import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { BrandName } from '@/components/BrandName'

export const metadata: Metadata = {
  title: 'Terms of Service | Station33',
  description:
    'The terms that apply to using the Station33 website — acceptable use, ownership of renderings and marketing materials, and the limits of forward-looking development information.',
  alternates: { canonical: '/terms' },
}

const LAST_UPDATED = 'August 21, 2026'

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
    id: 'about-these-terms',
    heading: 'About these terms',
    body: (
      <>
        <P>
          This website is published by South Broad Development (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
          &ldquo;our&rdquo;) to share information about <BrandName />, a mixed-use development at
          3210 Broad Street in Chattanooga, Tennessee. By using the site you agree to these terms. If
          you don&rsquo;t agree with them, please don&rsquo;t use the site.
        </P>
        <P>
          These terms cover the website itself. They are not a lease, a purchase agreement, a
          subscription agreement, or any other contract about the project. Those relationships are
          governed by their own separate, signed documents.
        </P>
      </>
    ),
  },
  {
    id: 'informational-purpose',
    heading: 'The site is informational',
    body: (
      <>
        <P>
          Everything here is provided for general information about a development that is under
          construction. Nothing on this site is an offer to sell or lease anything, a solicitation of
          an offer to buy, an offer or solicitation to invest, or an offer of any security. It is
          also not legal, financial, tax, or investment advice.
        </P>
        <P>
          If you are interested in leasing, purchasing, investing, or partnering, the next step is a
          conversation with our team and, ultimately, a written agreement. Reach us through the{' '}
          <Link href="/contact" className={linkClass}>
            contact page
          </Link>
          .
        </P>
      </>
    ),
  },
  {
    id: 'forward-looking',
    heading: 'Plans, renderings, and forward-looking information',
    body: (
      <>
        <P>
          A development this size changes as it is designed, permitted, financed, and built. Much of
          what appears on this site describes what we intend to build, not what exists today. That
          includes:
        </P>
        <Bullets
          items={[
            'Architectural renderings, site plans, floor plans, and interior visualizations, which are artists’ conceptual depictions — not photographs, not construction documents, and not to scale.',
            'Unit counts, square footages, dimensions, ceiling heights, finishes, amenities, and parking counts, all of which are approximate and subject to change during design and construction.',
            'Construction schedules, phasing, opening dates, and completion targets.',
            'Project cost figures, job-creation estimates, and economic impact projections.',
            'Named or anticipated tenants, operators, brands, restaurants, and partners, whose participation may change.',
          ]}
        />
        <P>
          Statements about future plans, timing, and outcomes are forward-looking. They reflect our
          expectations as of the date shown above and depend on factors outside our control —
          permitting, financing, construction conditions, market conditions, and third-party
          decisions among them. Actual results may differ, and we are not obligated to update any
          statement on this site as circumstances change.
        </P>
        <P>
          Do not rely on anything on this site as a substitute for your own due diligence or for the
          terms of a signed agreement. Where a signed agreement and this site disagree, the signed
          agreement controls.
        </P>
      </>
    ),
  },
  {
    id: 'no-warranty',
    heading: 'No warranty',
    body: (
      <>
        <P>
          The site and its contents are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo;
          without warranties of any kind, express or implied, including any implied warranties of
          merchantability, fitness for a particular purpose, non-infringement, or accuracy. We work
          to keep the information here current and correct, but we do not warrant that it is complete
          or error-free, or that the site will be uninterrupted or free of harmful components.
        </P>
        <P>
          To the fullest extent permitted by law, we are not liable for any indirect, incidental,
          consequential, special, or punitive damages, or for any loss arising out of your use of, or
          inability to use, this site or your reliance on anything published on it.
        </P>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual property',
    body: (
      <>
        <P>
          The <BrandName /> name, logo, wordmark, and the design of this site, along with the
          renderings, site plans, floor plans, photographs, videos, illustrations, and written
          material published here, are owned by South Broad Development or by our architects,
          designers, photographers, and other licensors, and are protected by copyright, trademark,
          and other laws. Some images are licensed from third parties and carry their own
          restrictions.
        </P>
        <P>You may:</P>
        <Bullets
          items={[
            'View, browse, and print pages for your own personal, non-commercial reference.',
            'Share links to pages on this site.',
          ]}
        />
        <P>Without our written permission, please do not:</P>
        <Bullets
          items={[
            'Copy, republish, sell, license, or redistribute renderings, plans, photographs, video, or text from this site.',
            'Use our name, logo, or marks in a way that suggests endorsement, affiliation, or partnership that does not exist.',
            'Create derivative works from our renderings or marketing materials, or remove credits and watermarks.',
          ]}
        />
        <P>
          <strong className="text-primary-text font-semibold">Press and media:</strong> we are glad
          to provide approved renderings, project facts, and quotes. Email <MailLink /> and we will
          send materials along with the credit line the artist or photographer requires.
        </P>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    heading: 'Acceptable use',
    body: (
      <>
        <P>When using this site, please don&rsquo;t:</P>
        <Bullets
          items={[
            'Attempt to gain unauthorized access to the site, its servers, or any connected system.',
            'Interfere with the site’s operation, including by scraping at a volume that burdens it, or by probing, scanning, or testing its security.',
            'Submit false, misleading, or impersonating information through our forms, or use them to send spam or unsolicited commercial messages.',
            'Upload or transmit anything malicious, unlawful, harassing, or infringing.',
            'Use automated systems to harvest email addresses or other contact information from the site.',
          ]}
        />
        <P>
          We may restrict access to the site, or to particular features, if it is being misused.
        </P>
      </>
    ),
  },
  {
    id: 'submissions',
    heading: 'What you send us',
    body: (
      <>
        <P>
          You are responsible for the accuracy of anything you submit through our newsletter, contact
          form, or investor inquiry form, and for having the right to share it. Please don&rsquo;t
          send confidential, proprietary, or sensitive personal information through a web form — a
          submission does not create a confidential relationship, and nothing you send is treated as
          confidential unless we have a signed agreement saying so.
        </P>
        <P>
          If you send us feedback, ideas, or suggestions about the project or the site, we may use
          them without restriction, obligation, or compensation to you.
        </P>
        <P>
          How we handle the information you send is described in our{' '}
          <Link href="/privacy" className={linkClass}>
            Privacy Policy
          </Link>
          .
        </P>
      </>
    ),
  },
  {
    id: 'third-party-links',
    heading: 'Links to other sites',
    body: (
      <>
        <P>
          This site links to third-party websites — project partners, social media profiles, news
          coverage, and others. Those links are provided for convenience. We don&rsquo;t control
          those sites, we don&rsquo;t endorse everything on them, and we are not responsible for
          their content, accuracy, or practices. Once you leave this site, the other site&rsquo;s
          terms and privacy policy apply.
        </P>
      </>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to the site and these terms',
    body: (
      <>
        <P>
          We may change, suspend, or discontinue any part of this site at any time, and we may update
          these terms as the project progresses. The date at the top of this page reflects the current
          version. Continuing to use the site after an update means you accept the revised terms.
        </P>
      </>
    ),
  },
  {
    id: 'governing-law',
    heading: 'Governing law',
    body: (
      <>
        <P>
          These terms are governed by the laws of the State of Tennessee, without regard to its
          conflict-of-laws rules, and any dispute arising out of them or your use of this site will be
          brought in the state or federal courts located in Hamilton County, Tennessee.
        </P>
        <P>
          If any provision of these terms is found unenforceable, the rest remains in effect. Our not
          enforcing a provision at some point does not waive our right to enforce it later.
        </P>
      </>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact us',
    body: (
      <>
        <P>Questions about these terms, permissions requests, or press inquiries:</P>
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

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-body-text leading-relaxed mb-6">
              The ground rules for using this site, and what our renderings and project information
              do — and don&rsquo;t — promise.
            </p>
            <p className="text-sm md:text-base text-body-text/80">
              Last updated{' '}
              <time dateTime="2026-08-21" className="text-primary-text font-medium">
                {LAST_UPDATED}
              </time>
            </p>
          </div>
        </section>

        {/* Draft notice */}
        <section className="container pb-10 md:pb-14">
          <aside
            role="note"
            aria-labelledby="draft-notice-heading"
            className="max-w-[70ch] rounded-2xl border border-station-gold/50 bg-station-gold/10 p-5 md:p-7"
          >
            <h2
              id="draft-notice-heading"
              className="flex items-center gap-3 text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-station-gold mb-3"
            >
              <span aria-hidden="true" className="text-lg leading-none">
                ⚠
              </span>
              Draft — pending legal review
            </h2>
            <p className="text-base md:text-lg text-primary-text/90 leading-relaxed">
              This document is a plain-language draft written to describe how this website currently
              works. It has not been reviewed or approved by an attorney, it is not legal advice, and
              it is not a substitute for counsel. Treat it as a starting point for our lawyers to
              redline before it is relied upon.
            </p>
          </aside>
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
                  <Link href="/privacy" className={linkClass}>
                    Privacy Policy
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
