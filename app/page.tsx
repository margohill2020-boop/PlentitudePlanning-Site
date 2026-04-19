import { Header, Hero, TrustRow, IntroStorySection, WhySection, ProofSection, LifeMomentsSection, PricingSection, CtaSection, Footer } from './components/Site'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustRow />
        <IntroStorySection />
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
