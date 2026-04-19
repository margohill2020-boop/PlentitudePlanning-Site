import { Header, SimpleHero, Footer } from '../../components/Site'
import CalculatorClient from '../../components/CalculatorClient'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="Home Equity Calculator" intro="Estimate current home equity based on property value, mortgage balance, and appreciation assumptions." /><CalculatorClient type="home-equity" title="Home Equity Calculator" description="Estimate current and projected home equity." fields={[{ key: 'value', label: 'Current home value', placeholder: '650000', defaultValue: 650000 }, { key: 'balance', label: 'Mortgage balance', placeholder: '420000', defaultValue: 420000 }, { key: 'appreciation', label: 'Annual appreciation (%)', placeholder: '3', defaultValue: 3 }, { key: 'years', label: 'Projection years', placeholder: '5', defaultValue: 5 }]} /></main><Footer /></>
}
