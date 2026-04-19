import { Header, SimpleHero, Footer } from '../../components/Site'
import CalculatorClient from '../../components/CalculatorClient'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="529 Plan Calculator" intro="Estimate education savings growth and how close you are to a future funding target." /><CalculatorClient type="529-plan" title="529 Plan Calculator" description="Project education savings growth with ongoing contributions." fields={[{ key: 'age', label: 'Child age', placeholder: '5', defaultValue: 5 }, { key: 'balance', label: 'Current 529 balance', placeholder: '25000', defaultValue: 25000 }, { key: 'monthly', label: 'Monthly contribution', placeholder: '500', defaultValue: 500 }, { key: 'return', label: 'Expected annual return (%)', placeholder: '6', defaultValue: 6 }]} /></main><Footer /></>
}
