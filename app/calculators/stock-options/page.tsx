import { Header, SimpleHero, Footer } from '../../components/Site'
import CalculatorClient from '../../components/CalculatorClient'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="Stock Options Calculator" intro="Model exercise cost, spread, tax assumptions, and potential value outcomes for stock options." /><CalculatorClient type="stock-options" title="Stock Options Calculator" description="Estimate exercise cost and pre-tax value spread." fields={[{ key: 'options', label: 'Number of options', placeholder: '10000', defaultValue: 10000 }, { key: 'strike', label: 'Strike price', placeholder: '3', defaultValue: 3 }, { key: 'value', label: 'Current share value', placeholder: '12', defaultValue: 12 }, { key: 'tax', label: 'Estimated tax rate (%)', placeholder: '35', defaultValue: 35 }]} /></main><Footer /></>
}
