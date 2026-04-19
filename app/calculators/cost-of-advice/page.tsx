import { Header, SimpleHero, CalculatorPage, Footer } from '../../components/Site'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="Cost of Advice Calculator" intro="Compare a flat-fee model against long-term AUM pricing over time." /><CalculatorPage title="Cost of Advice Calculator" description="Illustrate how advisory fee structures compound over time." fields={[{ label: 'Portfolio size', placeholder: 'Current investable assets' }, { label: 'Annual growth', placeholder: 'Expected annual growth %' }, { label: 'AUM fee', placeholder: 'AUM fee %' }, { label: 'Planning horizon', placeholder: 'Years' }]} /></main><Footer /></>
}
