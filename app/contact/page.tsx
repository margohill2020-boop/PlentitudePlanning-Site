import { Header, ContactForm, ComplianceSection, Footer } from '../components/Site'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section sectionWhite">
          <div className="container">
            <span className="sectionLabel">Book a strategy session</span>
            <h1 className="sectionHeading">Tell us where you are, and we’ll guide you to the right next step.</h1>
            <p className="sectionIntro">This page now routes booking calls to your live Calendly. Visitors can share their details here, then continue into your scheduling flow.</p>
            <div style={{ marginTop: 32 }}>
              <ContactForm />
            </div>
          </div>
        </section>
        <ComplianceSection />
      </main>
      <Footer />
    </>
  )
}
