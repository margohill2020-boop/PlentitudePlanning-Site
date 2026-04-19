import { Header, SimpleHero, PricingSection, Footer } from '../components/Site'

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <SimpleHero label="Pricing" title="Flat-fee planning designed to be easier to trust." intro="No AUM fees, no product pressure, and pricing that stays much cleaner than the traditional advisor model." />
        <PricingSection />
      </main>
      <Footer />
    </>
  )
}
