import { Header, SimpleHero, Footer } from '../../components/Site'
import Link from 'next/link'

const topicMap: Record<string, { title: string, intro: string }> = {
  'financial-foundations': { title: 'Financial Foundations', intro: 'Build the baseline systems and priorities that support better long-term decisions.' },
  'financial-wellness': { title: 'Financial Wellness', intro: 'Reduce financial stress by improving visibility, priorities, and day-to-day decision confidence.' },
  'financial-planning': { title: 'Financial Planning', intro: 'Coordinate your income, savings, investments, taxes, and life goals into one integrated strategy.' },
  'investment-management': { title: 'Investment Management', intro: 'Align portfolio strategy with goals, risk tolerance, liquidity needs, and tax considerations.' },
  'cash-flow': { title: 'Cash Flow', intro: 'Create a spending and savings system that supports real priorities without constant friction.' },
  'tax-planning': { title: 'Tax Planning', intro: 'Use proactive tax strategy to support better decisions across income, investing, and major life moves.' },
  'insurance-planning': { title: 'Insurance Planning', intro: 'Evaluate protection gaps and tradeoffs across life, disability, umbrella, and related coverage.' },
  'lifes-milestones': { title: 'Life’s Milestones', intro: 'Plan around transitions such as marriage, children, home buying, retirement, and career changes.' },
  'family-planning': { title: 'Family Planning', intro: 'Coordinate financial decisions that shape family life, responsibilities, and future goals.' },
  'combining-finances': { title: 'Combining Finances', intro: 'Create a practical structure for merging financial lives, accounts, goals, and responsibilities.' },
  'education-planning': { title: 'Education Planning', intro: 'Balance education funding with retirement, cash flow, and other long-term priorities.' },
  'retirement-planning': { title: 'Retirement Planning', intro: 'Build a strategy for saving, investing, timing, and withdrawal planning around retirement goals.' },
  'estate-planning': { title: 'Estate Planning', intro: 'Coordinate beneficiary designations, titling, documents, and legacy priorities with your broader plan.' },
  'real-estate': { title: 'Real Estate', intro: 'Evaluate buying, selling, refinancing, and property strategy as part of your total financial picture.' },
  'planning-for-a-baby': { title: 'Planning for a Baby', intro: 'Prepare for the financial impact of growing your family with cash flow, insurance, and savings planning.' },
  'career': { title: 'Career', intro: 'Make career decisions with a clear view of compensation, tradeoffs, and long-term financial impact.' },
  'equity-compensation': { title: 'Equity Compensation', intro: 'Plan around RSUs, options, concentration risk, taxes, and timing decisions.' },
  'career-planning': { title: 'Career Planning', intro: 'Connect career growth decisions to income strategy, lifestyle goals, and longer-term planning.' },
}

export async function generateStaticParams() {
  return Object.keys(topicMap).map((slug) => ({ slug }))
}

export default function PlanningTopicPage({ params }: { params: { slug: string } }) {
  const topic = topicMap[params.slug] ?? { title: 'Planning Topic', intro: 'Detailed planning topic overview.' }

  return (
    <>
      <Header />
      <main>
        <SimpleHero label="Planning topic" title={topic.title} intro={topic.intro} />
        <section className="section sectionWhite">
          <div className="container">
            <div className="card">
              <h2>How Plentitude helps with {topic.title.toLowerCase()}</h2>
              <p>Each topic page is designed to become a richer content destination over time, with FAQs, strategy guidance, examples, and call-to-action placement tailored to that area.</p>
              <p>For now, this page establishes the right architecture and search-friendly footprint while leaving room for deeper copy refinement later.</p>
              <Link className="btn btnPrimary" href="https://calendly.com/margohill">Talk through this topic</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
