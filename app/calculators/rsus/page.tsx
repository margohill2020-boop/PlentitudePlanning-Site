import { Header, SimpleHero, CalculatorPage, Footer } from '../../components/Site'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="RSUs Calculator" intro="Estimate vesting value, taxes withheld, and net proceeds from restricted stock units." /><CalculatorPage title="RSUs Calculator" description="Use this shell for RSU tax and cash-flow planning." fields={[{ label: 'Shares vesting', placeholder: 'Number of RSUs vesting' }, { label: 'Current price', placeholder: 'Current stock price' }, { label: 'Withholding rate', placeholder: 'Estimated withholding %' }, { label: 'Additional tax rate', placeholder: 'Estimated marginal tax rate' }]} /></main><Footer /></>
}
