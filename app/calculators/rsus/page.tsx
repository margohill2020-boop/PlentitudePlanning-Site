import { Header, SimpleHero, Footer } from '../../components/Site'
import CalculatorClient from '../../components/CalculatorClient'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="RSUs Calculator" intro="Estimate vesting value, taxes withheld, and net proceeds from restricted stock units." /><CalculatorClient type="rsus" title="RSUs Calculator" description="Estimate gross vesting value, withholding, and net value." fields={[{ key: 'shares', label: 'Shares vesting', placeholder: '2000', defaultValue: 2000 }, { key: 'price', label: 'Current stock price', placeholder: '55', defaultValue: 55 }, { key: 'withholding', label: 'Withholding rate (%)', placeholder: '22', defaultValue: 22 }, { key: 'tax', label: 'Estimated total tax rate (%)', placeholder: '37', defaultValue: 37 }]} /></main><Footer /></>
}
