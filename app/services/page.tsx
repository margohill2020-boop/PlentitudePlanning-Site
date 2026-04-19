import { Header, SimpleHero, ServicesSection, ProcessSection, Footer } from '../components/Site'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <SimpleHero label="Services" title="Planning that covers the decisions traditional advisors often leave fragmented." intro="Plentitude Planning is built around the idea that financial decisions should work together. The services page should feel like a clean extension of the homepage, not a separate visual system." />
        <ServicesSection />
        <ProcessSection />
      </main>
      <Footer />
    </>
  )
}
