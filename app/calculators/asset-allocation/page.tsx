import { Header, SimpleHero, Footer } from '../../components/Site'
import CalculatorClient from '../../components/CalculatorClient'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="Asset Allocation Calculator" intro="Explore possible portfolio mixes across stocks, bonds, cash, and alternatives." /><CalculatorClient type="asset-allocation" title="Asset Allocation Calculator" description="Check whether your allocation totals 100% and see your mix at a glance." fields={[{ key: 'stocks', label: 'Stocks (%)', placeholder: '70', defaultValue: 70 }, { key: 'bonds', label: 'Bonds (%)', placeholder: '20', defaultValue: 20 }, { key: 'cash', label: 'Cash (%)', placeholder: '5', defaultValue: 5 }, { key: 'alts', label: 'Alternatives (%)', placeholder: '5', defaultValue: 5 }]} /></main><Footer /></>
}
