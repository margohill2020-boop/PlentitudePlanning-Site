import { Header, SimpleHero, Footer } from '../../components/Site'
import CalculatorClient from '../../components/CalculatorClient'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="Cost of Advice Calculator" intro="Compare a flat-fee model against long-term AUM pricing over time." /><CalculatorClient type="cost-of-advice" title="Cost of Advice Calculator" description="Illustrate how advisory fee structures can diverge over time." fields={[{ key: 'portfolio', label: 'Current portfolio size', placeholder: '1000000', defaultValue: 1000000 }, { key: 'growth', label: 'Expected annual growth (%)', placeholder: '7', defaultValue: 7 }, { key: 'aum', label: 'AUM fee (%)', placeholder: '1', defaultValue: 1 }, { key: 'years', label: 'Planning horizon (years)', placeholder: '20', defaultValue: 20 }]} /></main><Footer /></>
}
