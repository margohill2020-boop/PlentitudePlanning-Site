import { Header, SimpleHero, CalculatorPage, Footer } from '../../components/Site'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="Home Equity Calculator" intro="Estimate current home equity based on property value, mortgage balance, and appreciation assumptions." /><CalculatorPage title="Home Equity Calculator" description="Use this shell to estimate available home equity." fields={[{ label: 'Home value', placeholder: 'Estimated home value' }, { label: 'Mortgage balance', placeholder: 'Current mortgage balance' }, { label: 'Annual appreciation', placeholder: 'Estimated appreciation %' }, { label: 'Years ahead', placeholder: 'Projection years' }]} /></main><Footer /></>
}
