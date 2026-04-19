import { Header, SimpleHero, Footer } from '../components/Site'
import Link from 'next/link'

const steps = [
  ['Discovery', 'We learn your goals, constraints, decision points, and what feels most urgent right now.'],
  ['Roadmap design', 'We build an integrated plan across cash flow, taxes, investing, real estate, retirement, and any relevant planning areas.'],
  ['Implementation support', 'You get practical guidance on what to do first, what can wait, and how to make progress without overwhelm.'],
  ['Ongoing refinement', 'As life changes, the plan changes with it. Reviews help keep the strategy coordinated and relevant.'],
]

export default function OurProcessPage() {
  return (
    <>
      <Header />
      <main>
        <SimpleHero label="Our process" title="How Plentitude Planning works" intro="A clearer, more premium view into the planning process, from first conversation through ongoing guidance." />
        <section className="section sectionWhite">
          <div className="container">
            <div className="processGrid">
              {steps.map(([title, body], index) => (
                <article className="processStep" key={title}>
                  <span>Step {index + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <Link className="btn btnPrimary" href="https://calendly.com/margohill">Book a strategy session</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
