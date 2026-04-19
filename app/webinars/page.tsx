import { Header, SimpleHero, Footer } from '../components/Site'

export default function WebinarsPage() {
  return (
    <>
      <Header />
      <main>
        <SimpleHero label="Webinars" title="Educational sessions that help clients move faster with confidence." intro="Use this page for live events, replays, and educational lead-generation content." />
        <section className="section sectionWhite"><div className="container"><div className="servicesGrid"><article className="card"><h3>Upcoming webinar</h3><p>Add your next session here with registration details.</p></article><article className="card"><h3>On-demand replay</h3><p>Feature your best evergreen webinar here.</p></article><article className="card"><h3>Client education series</h3><p>Build a repeatable library around taxes, investing, retirement, and home buying.</p></article></div></div></section>
      </main>
      <Footer />
    </>
  )
}
