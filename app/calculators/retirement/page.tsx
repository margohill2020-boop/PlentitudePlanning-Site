import { Header, SimpleHero, Footer } from '../../components/Site'
import CalculatorClient from '../../components/CalculatorClient'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="Retirement Calculator" intro="Project retirement readiness based on savings, contributions, timeline, and expected returns." /><CalculatorClient type="retirement" title="Retirement Calculator" description="Estimate future retirement savings using current assets and annual contributions." fields={[{ key: 'age', label: 'Current age', placeholder: '35', defaultValue: 35 }, { key: 'retire', label: 'Retirement age', placeholder: '65', defaultValue: 65 }, { key: 'savings', label: 'Current retirement savings', placeholder: '250000', defaultValue: 250000 }, { key: 'annual', label: 'Annual contributions', placeholder: '24000', defaultValue: 24000 }, { key: 'return', label: 'Expected annual return (%)', placeholder: '7', defaultValue: 7 }]} /></main><Footer /></>
}
