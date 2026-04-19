import { Header, Hero, TrustRow, WhySection, ProofSection, PricingSection, CtaSection, Footer } from './components/Site'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustRow />
        <WhySection />
        <ProofSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
