import { Header, ReferralExplainer, ContactForm, ComplianceSection, Footer } from '../components/Site'

export default function ReferralsPage() {
  return (
    <>
      <Header />
      <main>
        <ReferralExplainer />
        <section className="section">
          <div className="container">
            <ContactForm title="Generate your referral link" referral />
          </div>
        </section>
        <ComplianceSection />
      </main>
      <Footer />
    </>
  )
}
