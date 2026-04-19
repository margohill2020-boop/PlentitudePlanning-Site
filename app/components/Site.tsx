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
    body: 'For individuals and households who want a clear foundational plan, expert guidance, and a more affordable way to get comprehensive advice started.',
    fit: 'Best for clients with straightforward but important planning needs.',
    features: ['Initial planning year with full roadmap', 'Dedicated CFP® professional', 'Investments, taxes, retirement, and cash flow guidance', 'Ongoing renewal support and plan updates'],
  },
  {
    title: 'Strategic',
    yearOne: '$4,500',
    renewal: '$3,500',
    body: 'For clients with more complexity, including real estate decisions, equity compensation, or a wider mix of planning questions that need deeper coordination.',
    fit: 'Best for clients with several moving parts that benefit from ongoing strategy.',
    features: ['Everything in Essential', 'Expanded strategy support for real estate and complex planning', 'Deeper scenario analysis and implementation guidance', 'Ongoing strategic reviews throughout the year'],
  },
  {
    title: 'Comprehensive',
    yearOne: '$9,000',
    renewal: '$7,000',
    body: 'For high-complexity households, founders, executives, and families who want a more involved planning relationship across multiple major decisions.',
    fit: 'Best for clients who want highly customized guidance across the full picture.',
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
          <Link href="/our-process">Our Process</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/resources">Resources</Link>
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
        <div className="heroPanel heroPanelSimple">
          <div className="heroCopy heroCopyWide">
            <span className="eyebrow">Flat-fee financial planning</span>
            <h1>A cleaner, calmer way to plan your financial life.</h1>
            <p>Plentitude Planning offers flat-fee fiduciary advice across investing, taxes, retirement, real estate, equity compensation, and major life decisions, with one dedicated planner and no AUM fees.</p>
            <div className="heroActions">
              <Link className="btn btnPrimary" href="https://calendly.com/margohill">Book a strategy session</Link>
              <Link className="btn btnSecondary" href="/pricing">View pricing</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function TrustRow() {
  return (
    <section className="trustRow">
      <div className="container">
        <div className="trustGrid trustGridSimple">
          <div className="trustCard"><strong>Flat fee</strong><span>No AUM pricing.</span></div>
          <div className="trustCard"><strong>Fiduciary</strong><span>Objective advice.</span></div>
          <div className="trustCard"><strong>Dedicated planner</strong><span>One relationship.</span></div>
          <div className="trustCard"><strong>Full-life planning</strong><span>More than investments.</span></div>
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  return (
    <section className="section sectionWhite">
      <div className="container">
        <div className="splitIntro">
          <div>
            <span className="sectionLabel">Services</span>
            <h2 className="sectionHeading">Everything your money touches, planned together.</h2>
          </div>
          <div>
            <p className="sectionIntro">Instead of narrow investment-only advice, you get one coordinated strategy for the decisions that actually move your financial life. The service mix is broad because the real world is broad.</p>
            <Link className="btn btnOutline" href="/services">View all services</Link>
          </div>
        </div>
        <div className="servicesGrid">
          {services.map((service) => (
            <article className="card serviceCard" key={service.title}>
              <div className="serviceIcon">•</div>
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
        <h2 className="sectionHeading">Built for clients who want substance, not generic advice.</h2>
        <p className="sectionIntro">Flat-fee pricing, broad planning scope, and a relationship with a real advisor who stays with you over time. This is planning with more ownership and less noise.</p>
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

export function ProofSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="proofPanel">
          <div>
            <span className="sectionLabel">How Plentitude is different</span>
            <h2 className="sectionHeading">What clients want is objective guidance, not pressure, product bias, or asset-gathering incentives.</h2>
            <p className="sectionIntro">This section now leans much closer to the Domain-style comparison framing you asked for, with clearer contrast against traditional advisors and generic advice models.</p>
          </div>
          <div className="proofStats">
            <div className="proofStat"><strong>We don’t require you to move your assets</strong><span>Advice can start with the accounts and structure you already have.</span></div>
            <div className="proofStat"><strong>We don’t push products</strong><span>No sales pressure, no product quotas, and no hidden agenda.</span></div>
            <div className="proofStat"><strong>We don’t charge AUM fees</strong><span>Flat-fee pricing stays cleaner and easier to understand as your wealth grows.</span></div>
            <div className="proofStat"><strong>We don’t get paid based on products</strong><span>That keeps the advice more objective and aligned with your actual goals.</span></div>
            <div className="proofStat"><strong>We don’t have minimums</strong><span>The relationship is based on fit and planning need, not just account size.</span></div>
            <div className="proofStat"><strong>We don’t judge, ever</strong><span>Clients come in with messy situations all the time. The point is progress, not shame.</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function TopicGridSection() {
  const topics = [
    ['Financial Foundations', '/planning/financial-foundations'],
    ['Financial Wellness', '/planning/financial-wellness'],
    ['Financial Planning', '/planning/financial-planning'],
    ['Investment Management', '/planning/investment-management'],
    ['Cash Flow', '/planning/cash-flow'],
    ['Tax Planning', '/planning/tax-planning'],
    ['Insurance Planning', '/planning/insurance-planning'],
    ['Life’s Milestones', '/planning/lifes-milestones'],
    ['Family Planning', '/planning/family-planning'],
    ['Combining Finances', '/planning/combining-finances'],
    ['Education Planning', '/planning/education-planning'],
    ['Retirement Planning', '/planning/retirement-planning'],
    ['Estate Planning', '/planning/estate-planning'],
    ['Real Estate', '/planning/real-estate'],
    ['Planning for a Baby', '/planning/planning-for-a-baby'],
    ['Career', '/planning/career'],
    ['Equity Compensation', '/planning/equity-compensation'],
    ['Career Planning', '/planning/career-planning'],
  ]

  return (
    <section className="section sectionWhite">
      <div className="container">
        <span className="sectionLabel">Planning areas</span>
        <h2 className="sectionHeading">Explore the full range of planning topics we help clients navigate.</h2>
        <p className="sectionIntro">This is the missing depth layer you pointed out. It gives Plentitude a broader content footprint and a clearer view into how planning work is organized across life stages and financial decisions.</p>
        <div className="servicesGrid">
          {topics.map(([title, href]) => (
            <article className="card serviceCard" key={href}>
              <h3>{title}</h3>
              <p>Dedicated page for {title.toLowerCase()} guidance, decisions, and strategy considerations.</p>
              <Link className="btn btnOutline" href={href}>View topic</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialSection() {
  const quotes = [
    ['Busy professionals', 'We wanted one place to think through taxes, investing, home decisions, and long-term planning without feeling sold to.'],
    ['Dual-income families', 'The value is having a real roadmap and someone who can connect all the moving parts, not just manage investments.'],
    ['Equity-comp households', 'For people dealing with RSUs, taxes, and larger planning decisions, coordinated advice matters a lot more than generic portfolio talk.'],
  ]

  return (
    <section className="section sectionWhite">
      <div className="container">
        <span className="sectionLabel">Client perspective</span>
        <h2 className="sectionHeading">The feeling clients are actually buying is clarity.</h2>
        <p className="sectionIntro">These are placeholder-style testimonial blocks for positioning and layout, ready to be replaced with approved real testimonials later.</p>
        <div className="grid3">
          {quotes.map(([title, quote]) => (
            <article className="card testimonialCard" key={title}>
              <div className="quoteMark">“</div>
              <p>{quote}</p>
              <strong>{title}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function MembershipPreviewSection() {
  return (
    <section className="section sectionWhite">
      <div className="container">
        <div className="membershipPanel">
          <div>
            <span className="sectionLabel">Membership model</span>
            <h2 className="sectionHeading">Choose the level of planning depth that matches your complexity.</h2>
            <p className="sectionIntro">Whether you need foundational planning or a more involved strategic relationship, the pricing model stays transparent and easier to trust than traditional AUM arrangements.</p>
          </div>
          <div className="membershipMiniGrid">
            {pricing.map((tier) => (
              <div className="miniTier" key={tier.title}>
                <strong>{tier.title}</strong>
                <span>{tier.yearOne} year 1</span>
                <small>{tier.renewal} renewal</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function LifeMomentsSection() {
  const moments = [
    {
      title: 'Buying or upgrading a home',
      body: 'Work through affordability, mortgage tradeoffs, liquidity, and how a home decision fits into the rest of your plan.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Growing your family',
      body: 'Plan around childcare costs, insurance, savings, parental leave, and the financial changes that come with a new chapter.',
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Navigating career and equity decisions',
      body: 'Model compensation shifts, RSUs, stock options, job transitions, and the tax impact of major professional moves.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <span className="sectionLabel">Life events</span>
        <h2 className="sectionHeading">Financial planning should adapt to the moments that actually change your life.</h2>
        <p className="sectionIntro">The best planning relationships help with real transitions, not just abstract portfolio conversations. This section gives the homepage more of the real-life depth you were asking for.</p>
        <div className="momentGrid">
          {moments.map((moment) => (
            <article className="momentCard" key={moment.title}>
              <div className="momentImage" style={{ backgroundImage: `url('${moment.image}')` }} />
              <div className="momentBody">
                <h3>{moment.title}</h3>
                <p>{moment.body}</p>
              </div>
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
    <section className="section pricingDarkSection">
      <div className="container">
        <span className="sectionLabel">Pricing</span>
        <h2 className="sectionHeading pricingHeading">Choose the membership that matches your planning complexity.</h2>
        <p className="sectionIntro pricingIntro">Plentitude Planning uses flat-fee memberships instead of charging a percentage of your assets. That means pricing is easier to understand, easier to compare, and not tied to gathering your portfolio.</p>
        <div className="pricingGrid pricingGridClean">
          {pricing.map((tier) => (
            <article className="pricingCardDark" key={tier.title}>
              <span className="priceTag">{tier.title}</span>
              <div className="price">{tier.yearOne}</div>
              <p className="small">Year 1 initial planning</p>
              <p className="renewalLine">Renewal <strong>{tier.renewal}</strong></p>
              <p>{tier.body}</p>
              <p className="small"><strong>Who this is for:</strong> {tier.fit}</p>
              <ul className="featureList featureListDark">
                {tier.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <Link className="btn btnPrimary" href="https://calendly.com/margohill">Get started</Link>
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
            <h2>Start with a strategy session, then build a plan that covers more than just investments.</h2>
            <p>Plentitude is designed for people who want one place to think clearly about taxes, investing, retirement, real estate, cash flow, and the bigger financial decisions that shape their lives.</p>
            <div className="heroActions">
              <Link className="btn btnPrimary" href="https://calendly.com/margohill">Book a strategy session</Link>
              <Link className="btn btnSecondary" href="/our-process">See our process</Link>
            </div>
          </div>
          <div className="ctaBox">
            <h3>Where to go next</h3>
            <p><Link href="/services">Explore services</Link></p>
            <p><Link href="/pricing">Review membership pricing</Link></p>
            <p><Link href="/resources">See calculators and planning resources</Link></p>
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
