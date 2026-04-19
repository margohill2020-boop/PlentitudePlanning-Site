import { Header, SimpleHero, CalculatorPage, Footer } from '../../components/Site'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="Stock Options Calculator" intro="Model exercise cost, spread, tax assumptions, and potential value outcomes for stock options." /><CalculatorPage title="Stock Options Calculator" description="A starter shell for employee equity planning scenarios." fields={[{ label: 'Number of options', placeholder: 'Options granted' }, { label: 'Strike price', placeholder: 'Strike price per share' }, { label: 'Current FMV', placeholder: 'Current share value' }, { label: 'Tax rate', placeholder: 'Estimated tax rate' }]} /></main><Footer /></>
}
