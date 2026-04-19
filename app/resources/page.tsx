import { Header, SimpleHero, ResourceGrid, ComplianceSection, Footer } from '../components/Site'

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <SimpleHero label="Resources" title="Tools and education for better financial decisions." intro="Explore calculators, blog content, webinars, and practical FAQs designed to support your planning process." />
        <ResourceGrid />
        <ComplianceSection />
      </main>
      <Footer />
    </>
  )
}
