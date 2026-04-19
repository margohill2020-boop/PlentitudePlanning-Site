import { Header, SimpleHero, Footer } from '../components/Site'

const posts = [
  'How flat-fee planning compares to the AUM model',
  'What to do before buying a home in a high-rate market',
  'How to think about RSUs, taxes, and vesting decisions',
  'Retirement planning when your income is irregular',
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <SimpleHero label="Blog" title="Financial planning insights for real life." intro="A starter content hub for educational articles, planning tips, and long-form resources." />
        <section className="section sectionWhite"><div className="container"><div className="servicesGrid">{posts.map((post) => <article key={post} className="card"><h3>{post}</h3><p>Draft article placeholder ready for CMS integration or manual publishing.</p></article>)}</div></div></section>
      </main>
      <Footer />
    </>
  )
}
