import { Header, Hero, TrustRow, ServicesSection, WhySection, ProofSection, TopicGridSection, TestimonialSection, MembershipPreviewSection, ProcessSection, PricingSection, FaqSection, CtaSection, ComplianceSection, Footer } from './components/Site'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustRow />
        <ServicesSection />
        <WhySection />
        <ProofSection />
        <TopicGridSection />
        <TestimonialSection />
        <MembershipPreviewSection />
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
