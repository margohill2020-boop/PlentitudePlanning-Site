import { Header, SimpleHero, CalculatorPage, Footer } from '../../components/Site'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="529 Plan Calculator" intro="Estimate education savings growth and how close you are to a future funding target." /><CalculatorPage title="529 Plan Calculator" description="Use this shell to map contributions against future education costs." fields={[{ label: 'Child age', placeholder: 'Current child age' }, { label: 'Current balance', placeholder: 'Current 529 balance' }, { label: 'Monthly contribution', placeholder: 'Monthly contribution' }, { label: 'Expected return', placeholder: 'Expected annual return %' }]} /></main><Footer /></>
}
