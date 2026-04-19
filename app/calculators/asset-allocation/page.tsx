import { Header, SimpleHero, CalculatorPage, Footer } from '../../components/Site'

export default function Page() {
  return <><Header /><main><SimpleHero label="Calculator" title="Asset Allocation Calculator" intro="Explore possible portfolio mixes across stocks, bonds, cash, and alternatives." /><CalculatorPage title="Asset Allocation Calculator" description="A starting shell for an allocation planning tool." fields={[{ label: 'Stocks %', placeholder: 'Stocks allocation %' }, { label: 'Bonds %', placeholder: 'Bonds allocation %' }, { label: 'Cash %', placeholder: 'Cash allocation %' }, { label: 'Alternatives %', placeholder: 'Alternatives allocation %' }]} /></main><Footer /></>
}
