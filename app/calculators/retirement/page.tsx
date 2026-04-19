import { Header, SimpleHero, CalculatorPage, Footer } from '../../components/Site'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="Retirement Calculator" intro="Project retirement readiness based on savings, contributions, timeline, and expected returns." /><CalculatorPage title="Retirement Calculator" description="Estimate whether current savings behavior supports your retirement target." fields={[{ label: 'Current age', placeholder: 'Current age' }, { label: 'Retirement age', placeholder: 'Target retirement age' }, { label: 'Current savings', placeholder: 'Current retirement savings' }, { label: 'Annual contributions', placeholder: 'Annual contribution amount' }]} /></main><Footer /></>
}
