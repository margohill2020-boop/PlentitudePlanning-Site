import { Header, ServicesSection, ProcessSection, ComplianceSection, Footer } from '../components/Site'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesSection />
        <ProcessSection />
        <ComplianceSection />
      </main>
      <Footer />
    </>
  )
}
