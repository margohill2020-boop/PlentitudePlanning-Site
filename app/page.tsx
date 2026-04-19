import { Header, Hero, TrustRow, WhySection, ProofSection, LifeMomentsSection, PricingSection, CtaSection, Footer } from './components/Site'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustRow />
        <WhySection />
        <ProofSection />
        <LifeMomentsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
