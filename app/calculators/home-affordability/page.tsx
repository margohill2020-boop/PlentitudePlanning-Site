import { Header, SimpleHero, CalculatorPage, Footer } from '../../components/Site'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="Home Affordability Calculator" intro="Estimate a comfortable home price range based on income, debt, down payment, taxes, insurance, and monthly budget." /><CalculatorPage title="Home Affordability Calculator" description="Use this shell to capture the exact inputs needed for a live affordability calculator." fields={[{ label: 'Annual income', placeholder: 'Annual household income' }, { label: 'Monthly debt', placeholder: 'Monthly debt payments' }, { label: 'Down payment', placeholder: 'Down payment amount' }, { label: 'Interest rate', placeholder: 'Estimated mortgage rate' }]} /></main><Footer /></>
}
