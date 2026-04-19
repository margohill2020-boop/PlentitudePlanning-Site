import { Header, Hero, TrustRow, ServicesSection, WhySection, ProcessSection, PricingSection, FaqSection, CtaSection, ComplianceSection, Footer } from './components/Site'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustRow />
        <ServicesSection />
        <WhySection />
        <ProcessSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
        <ComplianceSection />
      </main>
      <Footer />
    </>
  )
}
