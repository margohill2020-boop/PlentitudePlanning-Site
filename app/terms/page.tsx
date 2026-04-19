import { Header, SimpleHero, Footer } from '../components/Site'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <SimpleHero label="Terms of Use" title="Terms of Use" intro="This terms page is an original placeholder in the style of a financial services website and should be finalized before launch." />
        <section className="section"><div className="container"><div className="disclosure"><p>By accessing this website, you agree to use it for lawful purposes only. The information presented on this website is for general educational and informational purposes and does not constitute financial, investment, legal, or tax advice. Nothing on this website creates an advisory relationship unless and until a formal written agreement is executed.</p><p>Plentitude Planning may update, remove, or modify content, pages, services, or features at any time without notice. We make no guarantee that site content is complete, current, or free from error.</p><p>Any calculators, examples, illustrations, or educational tools on this website are for informational purposes only and may rely on simplified assumptions. They should not be used as the sole basis for financial decisions.</p><p>Before public launch, replace this placeholder with finalized terms that reflect your actual legal structure, service model, state registrations, dispute provisions, and governing law.</p></div></div></section>
      </main>
      <Footer />
    </>
  )
}
