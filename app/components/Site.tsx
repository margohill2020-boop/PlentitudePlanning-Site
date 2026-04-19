import Link from 'next/link'

const services = [
  {
    title: 'Investments',
    body: 'Portfolio design, diversification, risk alignment, tax-aware asset location, rebalancing guidance, and long-term investing strategy tailored to your goals.',
  },
  {
    title: 'Tax planning',
    body: 'Forward-looking tax strategy, withholding reviews, tax-efficient withdrawals, capital gains planning, charitable giving strategy, and coordination with your CPA.',
  },
  {
    title: 'Retirement planning',
    body: 'Retirement readiness, contribution strategy, withdrawal sequencing, Social Security timing, and scenario planning for early or traditional retirement.',
  },
  {
    title: 'Cash flow and budgeting',
    body: 'Intentional spending plans, savings systems, debt payoff strategies, and emergency reserve planning that match your real life.',
  },
  {
    title: 'Real estate planning',
    body: 'Home purchase analysis, mortgage tradeoffs, rental property strategy, refinancing decisions, and property planning aligned to your bigger goals.',
  },
  {
    title: 'More planning areas',
    body: 'Equity compensation, education funding, insurance reviews, estate planning coordination, employee benefits, business-owner planning, and long-term care strategy.',
  },
]

const pricing = [
  {
    title: 'Essential',
    yearOne: '$3,000',
    renewal: '$1,800',
    body: 'Best for professionals and households who want a foundational plan and ongoing accountability.',
    features: ['Initial planning year with full roadmap', 'Dedicated CFP® professional', 'Investments, taxes, retirement, and cash flow guidance', 'Ongoing renewal support and plan updates'],
  },
  {
    title: 'Strategic',
    yearOne: '$4,500',
    renewal: '$3,500',
    body: 'Built for clients with more moving parts, including advanced tax, equity, or real estate decisions.',
    features: ['Everything in Essential', 'Expanded strategy support for real estate and complex planning', 'Deeper scenario analysis and implementation guidance', 'Ongoing strategic reviews throughout the year'],
  },
  {
    title: 'Comprehensive',
    yearOne: '$9,000',
    renewal: '$7,000',
    body: 'For high-complexity households, founders, executives, and families needing white-glove planning.',
    features: ['Everything in Strategic', 'Comprehensive multi-area financial coordination', 'Advanced planning across taxes, entities, and estate coordination', 'Priority support and highly customized strategy work'],
  },
]

const faqs = [
  {
    q: 'How is Plentitude different from a traditional financial advisor?',
    a: 'Traditional advisors often focus mainly on investment management and charge an AUM fee. Plentitude Planning covers your full financial life and uses flat-fee pricing instead.',
  },
  {
    q: 'Do you act as a fiduciary?',
    a: 'Yes. Plentitude is positioned as a fiduciary planning firm, focused on objective advice rather than product sales or commissions.',
  },
  {
    q: 'Can couples or families plan together?',
    a: 'Absolutely. The planning framework is designed for households, shared goals, and major life decisions that affect more than one person.',
  },
  {
    q: 'What planning topics are included?',
    a: 'Investing, taxes, retirement, cash flow, real estate, education funding, equity compensation, insurance, estate planning, and related planning needs.',
  },
]

export function Header() {
  return (
    <nav className="nav">
      <div className="container navInner">
        <Link className="brandWrap" href="/">
          <span className="brandMark">P/P</span>
          <span className="brandText">
            <span className="brandName">Plentitude Planning</span>
            <span className="brandSub">Flat-fee financial planning</span>
          </span>
        </Link>
        <div className="navLinks">
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/referrals">Referrals</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Link className="btn btnPrimary" href="https://calendly.com/margohill">Book a strategy session</Link>
      </div>
    </nav>
  )
}

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="heroPanel">
          <div className="heroCopy">
            <span className="eyebrow">Whole-life financial planning</span>
            <h1>Build a financial plan that actually fits your life.</h1>
            <p>Plentitude Planning gives you flat-fee, fiduciary financial advice across investing, taxes, retirement, real estate, equity compensation, insurance, estate planning, and cash flow. One dedicated CFP® professional, one integrated plan, no AUM fees.</p>
            <div className="heroActions">
              <Link className="btn btnPrimary" href="https://calendly.com/margohill">Start with a free strategy session</Link>
              <Link className="btn btnSecondary" href="/services">Explore services</Link>
            </div>
            <div className="heroPoints">
              <div className="heroPoint"><strong>Flat annual fee</strong><span>Predictable pricing with no commissions or asset-based fees.</span></div>
              <div className="heroPoint"><strong>Dedicated advisor</strong><span>Work with the same planner who knows your goals and history.</span></div>
              <div className="heroPoint"><strong>Full financial picture</strong><span>Investments, taxes, real estate, retirement, benefits, and more.</span></div>
            </div>
          </div>
          <div className="heroMedia" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export function TrustRow() {
  return (
    <section className="trustRow">
      <div className="container">
        <div className="trustGrid">
          <div className="trustCard"><strong>No AUM fees, ever</strong><span>Keep more of your money working for you.</span></div>
          <div className="trustCard"><strong>Fiduciary advice</strong><span>Objective guidance in your best interest.</span></div>
          <div className="trustCard"><strong>Comprehensive planning</strong><span>Not just investments, your whole financial life.</span></div>
          <div className="trustCard"><strong>Clear action plan</strong><span>Know exactly what to do next and why.</span></div>
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  return (
    <section className="section sectionWhite">
      <div className="container">
        <span className="sectionLabel">Services</span>
        <h2 className="sectionHeading">Everything your money touches, planned together.</h2>
        <p className="sectionIntro">Instead of narrow investment-only advice, you get one coordinated strategy for the decisions that actually move your financial life.</p>
        <div className="servicesGrid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhySection() {
  return (
    <section className="section sectionForest">
      <div className="container">
        <span className="sectionLabel">Why Plentitude</span>
        <h2 className="sectionHeading">Planning done with clarity, continuity, and zero product pressure.</h2>
        <p className="sectionIntro">Flat-fee pricing, broad planning scope, and a relationship with a real advisor who stays with you over time.</p>
        <div className="whyGrid">
          {[
            ['1', 'Flat-fee advantage', 'No percentage-of-assets pricing, no commissions, and no incentive to push products.'],
            ['2', 'One dedicated CFP® professional', 'You work with one lead planner who understands your full picture, goals, timeline, and tradeoffs.'],
            ['3', 'Interactive planning experience', 'Get a clear roadmap, progress tracking, and practical next steps instead of vague advice.'],
            ['4', 'Advice for real life', 'From taxes and investing to home buying and family planning, everything works together.'],
          ].map(([n, title, body]) => (
            <article className="whyCard" key={title}>
              <div className="whyNumber">{n}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section className="section">
      <div className="container">
        <span className="sectionLabel">How it works</span>
        <h2 className="sectionHeading">A simple process that turns financial stress into a real plan.</h2>
        <p className="sectionIntro">Start with a no-pressure consultation, build a tailored plan, then stay supported as life changes.</p>
        <div className="processGrid">
          {[
            ['Step 1', 'Free strategy session', 'Share your goals, financial picture, and biggest questions. We’ll identify your priorities and whether Plentitude is the right fit.'],
            ['Step 2', 'Your personal roadmap', 'Your planner builds an integrated action plan covering investments, taxes, retirement, real estate, and any other relevant planning areas.'],
            ['Step 3', 'Ongoing guidance', 'Meet regularly, message your planner, and update the strategy as your income, family, career, and goals evolve.'],
          ].map(([step, title, body]) => (
            <article className="processStep" key={title}>
              <span>{step}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PricingSection() {
  return (
    <section className="section sectionWhite">
      <div className="container">
        <span className="sectionLabel">Pricing</span>
        <h2 className="sectionHeading">Transparent flat-fee memberships.</h2>
        <p className="sectionIntro">Structured to match the membership logic you wanted, with distinct tiers for foundational, strategic, and comprehensive planning.</p>
        <div className="pricingGrid">
          {pricing.map((tier) => (
            <article className="card" key={tier.title}>
              <span className="priceTag">{tier.title}</span>
              <div className="price">{tier.yearOne}</div>
              <p><strong>Year 1 initial planning</strong></p>
              <p className="small">Renewal: {tier.renewal}</p>
              <p>{tier.body}</p>
              <ul className="featureList">
                {tier.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <Link className="btn btnPrimary" href="https://calendly.com/margohill">Book now</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FaqSection() {
  return (
    <section className="section">
      <div className="container">
        <span className="sectionLabel">FAQ</span>
        <h2 className="sectionHeading">The questions people ask before they commit.</h2>
        <div className="faqGrid">
          {faqs.map((item) => (
            <article className="card" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactForm({ title = 'Book a strategy session', referral = false }: { title?: string, referral?: boolean }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{referral ? 'Enter your email to generate a referral link and start sharing Plentitude Planning with friends, family, or clients.' : 'Use this form as the lead capture and booking entry point. Replace the button destination with your live booking integration once you choose it.'}</p>
      <form className="formGrid" action="mailto:margoh4@aol.com" method="post" encType="text/plain">
        <input className="input" name="firstName" placeholder="First name" />
        <input className="input" name="lastName" placeholder="Last name" />
        <input className="input full" type="email" name="email" placeholder="Email address" />
        {!referral && <input className="input full" name="phone" placeholder="Phone" />}
        {!referral && <select className="select full" name="membershipInterest" defaultValue=""><option value="" disabled>Select membership interest</option><option>Essential</option><option>Strategic</option><option>Comprehensive</option></select>}
        {!referral && <textarea className="textarea full" name="details" placeholder="Tell us about your goals, current situation, and what you want help with." />}
        <div className="full">
          {referral ? <button type="submit" className="btn btnPrimary">Generate referral link</button> : <a className="btn btnPrimary" href="https://calendly.com/margohill">Continue to booking</a>}
        </div>
      </form>
    </div>
  )
}

export function ReferralExplainer() {
  return (
    <section className="section sectionWhite">
      <div className="container">
        <span className="sectionLabel">Referral program</span>
        <h2 className="sectionHeading">Refer a friend and reward both sides.</h2>
        <p className="sectionIntro">Modeled on the competitor referral flow you linked, this page gives users a simple way to generate a referral link and understand how rewards work.</p>
        <div className="grid3">
          <article className="card"><h3>1. Share your referral link</h3><p>Enter your email and get a unique referral link to share with friends, family, or coworkers.</p></article>
          <article className="card"><h3>2. Your referral meets with us</h3><p>We learn about their goals, priorities, and planning needs to confirm mutual fit.</p></article>
          <article className="card"><h3>3. Earn the referral reward</h3><p>You can swap in your exact reward terms here once finalized. For now the structure supports the same flow and disclosure style.</p></article>
        </div>
      </div>
    </section>
  )
}

export function ComplianceSection() {
  return (
    <section className="section sectionWhite">
      <div className="container">
        <span className="sectionLabel">Disclosures</span>
        <h2 className="sectionHeading">Compliance and legal language placeholder, written in the style you requested.</h2>
        <div className="disclosure">
          <p>© 2026 Plentitude Planning. All rights reserved. By using this website, you agree to the site’s terms and privacy policy. Financial planning and investment-related guidance described on this website are for informational purposes only and are not an offer to sell or a solicitation of an offer to buy any security, investment product, or advisory service.</p>
          <p>This website’s materials are for general educational and informational purposes only and should not be construed as financial, investment, legal, or tax advice. Any hypothetical examples, illustrations, projections, or expected outcomes are for illustrative purposes only and do not reflect actual results or guarantee future performance. Past performance is not indicative of future returns.</p>
          <p>Investing involves risk, including possible loss of principal. Not all investments or planning strategies are suitable for all investors. You should consider your objectives, financial circumstances, and risk tolerance, and consult appropriate professionals before making financial, tax, or legal decisions.</p>
          <p>CFP®, CERTIFIED FINANCIAL PLANNER®, and related marks are certification marks owned outside this site by their respective holders and are used only where properly authorized. All product names, logos, brands, and trademarks are property of their respective owners. Their use on this site does not imply affiliation or endorsement.</p>
        </div>
      </div>
    </section>
  )
}

export function CtaSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="ctaPanel">
          <div>
            <span className="sectionLabel">Get started</span>
            <h2>Ready to turn Plentitude Planning into a full production website?</h2>
            <p>This app now has the right page structure, pricing tiers, referral page, contact flow, and disclosure sections. The last major missing piece is your actual booking integration and final compliance review.</p>
            <div className="heroActions">
              <Link className="btn btnPrimary" href="https://calendly.com/margohill">Start booking flow</Link>
              <Link className="btn btnSecondary" href="/pricing">See pricing</Link>
            </div>
          </div>
          <div className="ctaBox">
            <h3>Recommended next live-launch steps</h3>
            <p>1. Choose Calendly, SavvyCal, or your preferred scheduler.</p>
            <p>2. Add your final compliance text from counsel or ADV materials.</p>
            <p>3. Replace demo form actions with real CRM, email, and booking integrations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ResourceGrid() {
  const items = [
    ['Blog', '/blog', 'Original articles and planning insights for taxes, investing, retirement, and major life decisions.'],
    ['Webinars', '/webinars', 'On-demand and upcoming educational sessions for prospects and clients.'],
    ['FAQs', '/faqs', 'Answers to common planning, pricing, and membership questions.'],
    ['Home Affordability Calculator', '/calculators/home-affordability', 'Estimate a home price range based on income, debt, down payment, and monthly budget.'],
    ['Cost of Advice Calculator', '/calculators/cost-of-advice', 'Compare flat-fee planning against long-term AUM pricing.'],
    ['Stock Options Calculator', '/calculators/stock-options', 'Model scenarios for exercising stock options and estimate value outcomes.'],
    ['RSUs Calculator', '/calculators/rsus', 'Estimate vesting value, taxes, and take-home outcomes for restricted stock units.'],
    ['Retirement Calculator', '/calculators/retirement', 'Project savings growth and retirement readiness based on timeline and contributions.'],
    ['529 Plan Calculator', '/calculators/529-plan', 'Estimate education savings growth and target funding progress.'],
    ['Roth IRA Calculator', '/calculators/roth-ira', 'Compare ongoing Roth contributions and tax-free growth scenarios.'],
    ['Home Equity Calculator', '/calculators/home-equity', 'Estimate current home equity using value, balance, and appreciation assumptions.'],
    ['Asset Allocation Calculator', '/calculators/asset-allocation', 'Explore portfolio mix scenarios across stocks, bonds, cash, and alternatives.'],
  ]

  return (
    <section className="section sectionWhite">
      <div className="container">
        <span className="sectionLabel">Resources</span>
        <h2 className="sectionHeading">Planning tools, education, and interactive calculators.</h2>
        <p className="sectionIntro">This section mirrors the resource depth you asked for, with a hub for educational content and interactive planning tools.</p>
        <div className="servicesGrid">
          {items.map(([title, href, body]) => (
            <article className="card" key={href}>
              <h3>{title}</h3>
              <p>{body}</p>
              <Link className="btn btnOutline" href={href}>Open</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SimpleHero({ label, title, intro }: { label: string, title: string, intro: string }) {
  return (
    <section className="section sectionWhite">
      <div className="container">
        <span className="sectionLabel">{label}</span>
        <h1 className="sectionHeading">{title}</h1>
        <p className="sectionIntro">{intro}</p>
      </div>
    </section>
  )
}

export function CalculatorPage({ title, description, fields }: { title: string, description: string, fields: { label: string, placeholder: string }[] }) {
  return (
    <section className="section">
      <div className="container">
        <div className="card">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="formGrid">
            {fields.map((field) => (
              <input key={field.label} className="input" placeholder={field.placeholder} aria-label={field.label} />
            ))}
            <div className="full">
              <button type="button" className="btn btnPrimary">Calculate</button>
            </div>
          </div>
          <p className="small">This is a front-end calculator shell ready for live calculation logic in the next pass.</p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <strong>Plentitude Planning</strong>
          <p>Flat-fee financial planning for investing, taxes, retirement, real estate, and more.</p>
          <p><Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms of Use</Link></p>
        </div>
        <div>
          <p>Built as a custom website concept inspired by the structure of leading flat-fee planning firms, with original branding and copy for Plentitude Planning.</p>
        </div>
      </div>
    </footer>
  )
}
