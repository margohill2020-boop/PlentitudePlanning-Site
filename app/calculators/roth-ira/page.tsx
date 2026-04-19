import { Header, SimpleHero, CalculatorPage, Footer } from '../../components/Site'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="Roth IRA Calculator" intro="Estimate tax-free growth from ongoing Roth contributions over time." /><CalculatorPage title="Roth IRA Calculator" description="Model Roth IRA accumulation under different contribution and return assumptions." fields={[{ label: 'Current age', placeholder: 'Current age' }, { label: 'Current balance', placeholder: 'Current Roth IRA balance' }, { label: 'Annual contribution', placeholder: 'Annual contribution' }, { label: 'Expected return', placeholder: 'Expected annual return %' }]} /></main><Footer /></>
}
