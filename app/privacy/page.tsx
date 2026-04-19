import { Header, SimpleHero, Footer } from '../components/Site'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <SimpleHero label="Privacy Policy" title="Privacy Policy" intro="This privacy policy is an original placeholder modeled on standard financial services website privacy structures. It should be reviewed and finalized before public launch." />
        <section className="section"><div className="container"><div className="disclosure"><p>Plentitude Planning may collect information you voluntarily submit through forms, scheduling requests, referrals, and other interactions on this website. That information may include your name, email address, phone number, and any planning details you choose to share.</p><p>We may use submitted information to respond to inquiries, schedule consultations, evaluate fit for services, improve website functionality, and communicate about services or educational content. We do not promise that this placeholder policy reflects all legal obligations applicable to your business. You should have final policy language reviewed by counsel or compliance professionals before launch.</p><p>Website analytics, cookies, and basic technical logs may also be used to understand traffic patterns and improve user experience. Third-party tools such as scheduling platforms, form handlers, analytics providers, and email platforms may process data according to their own policies.</p><p>If you use this page in production, replace this placeholder with your finalized privacy policy, including your data retention, sharing, security, and contact provisions.</p></div></div></section>
      </main>
      <Footer />
    </>
  )
}
