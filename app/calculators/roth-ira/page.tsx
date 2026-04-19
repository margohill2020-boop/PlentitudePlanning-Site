import { Header, SimpleHero, Footer } from '../../components/Site'
import CalculatorClient from '../../components/CalculatorClient'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="Roth IRA Calculator" intro="Estimate tax-free growth from ongoing Roth contributions over time." /><CalculatorClient type="roth-ira" title="Roth IRA Calculator" description="Project future Roth IRA value with compound growth." fields={[{ key: 'age', label: 'Current age', placeholder: '30', defaultValue: 30 }, { key: 'retire', label: 'Retirement age', placeholder: '65', defaultValue: 65 }, { key: 'balance', label: 'Current Roth IRA balance', placeholder: '40000', defaultValue: 40000 }, { key: 'annual', label: 'Annual contribution', placeholder: '7000', defaultValue: 7000 }, { key: 'return', label: 'Expected annual return (%)', placeholder: '7', defaultValue: 7 }]} /></main><Footer /></>
}
