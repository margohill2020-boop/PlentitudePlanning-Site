import { Header, SimpleHero, Footer } from '../../components/Site'
import CalculatorClient from '../../components/CalculatorClient'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="Home Affordability Calculator" intro="Estimate a comfortable home price range based on income, debt, down payment, taxes, insurance, and monthly budget." /><CalculatorClient type="home-affordability" title="Home Affordability Calculator" description="A practical estimate based on income, monthly debts, down payment, and mortgage rate." fields={[{ key: 'income', label: 'Annual household income', placeholder: '180000', defaultValue: 180000 }, { key: 'debt', label: 'Monthly debt payments', placeholder: '1200', defaultValue: 1200 }, { key: 'down', label: 'Down payment', placeholder: '80000', defaultValue: 80000 }, { key: 'rate', label: 'Mortgage interest rate (%)', placeholder: '6.5', defaultValue: 6.5 }]} /></main><Footer /></>
}
