'use client'

import { useMemo, useState } from 'react'

type Field = {
  key: string
  label: string
  placeholder: string
  defaultValue?: number
}

type CalculatorType =
  | 'home-affordability'
  | 'cost-of-advice'
  | 'stock-options'
  | 'rsus'
  | 'retirement'
  | '529-plan'
  | 'roth-ira'
  | 'home-equity'
  | 'asset-allocation'

type CalculatorClientProps = {
  type: CalculatorType
  title: string
  description: string
  fields: Field[]
}

function calculate(type: CalculatorType, values: Record<string, number>) {
  switch (type) {
    case 'home-affordability': {
      const monthlyIncome = values.income / 12
      const maxPayment = Math.max(monthlyIncome * 0.28 - values.debt, 0)
      const monthlyRate = values.rate / 100 / 12
      const loan = monthlyRate > 0 ? maxPayment * ((1 - Math.pow(1 + monthlyRate, -360)) / monthlyRate) : maxPayment * 360
      const homePrice = loan + values.down
      return {
        summary: `Estimated affordable home price: $${Math.round(homePrice).toLocaleString()}`,
        details: [
          `Estimated max monthly housing payment: $${Math.round(maxPayment).toLocaleString()}`,
          `Estimated loan amount: $${Math.round(loan).toLocaleString()}`,
          'Assumes a 30-year mortgage and a 28% front-end ratio.',
        ],
      }
    }
    case 'cost-of-advice': {
      let portfolio = values.portfolio
      let aumFees = 0
      for (let year = 0; year < values.years; year += 1) {
        portfolio *= 1 + values.growth / 100
        const annualFee = portfolio * (values.aum / 100)
        aumFees += annualFee
        portfolio -= annualFee
      }
      const flatFeeTotal = 3000 + Math.max(values.years - 1, 0) * 1800
      const savings = aumFees - flatFeeTotal
      return {
        summary: `Estimated AUM fees: $${Math.round(aumFees).toLocaleString()} vs flat fees: $${Math.round(flatFeeTotal).toLocaleString()}`,
        details: [
          `Estimated difference: $${Math.round(savings).toLocaleString()}`,
          'Assumes annual compounding and fee deduction once per year.',
          'Flat-fee comparison uses Essential pricing as the baseline.',
        ],
      }
    }
    case 'stock-options': {
      const cost = values.options * values.strike
      const spread = values.options * Math.max(values.value - values.strike, 0)
      const afterTax = spread * (1 - values.tax / 100)
      return {
        summary: `Estimated spread value: $${Math.round(spread).toLocaleString()}`,
        details: [
          `Estimated exercise cost: $${Math.round(cost).toLocaleString()}`,
          `Estimated after-tax spread: $${Math.round(afterTax).toLocaleString()}`,
          'This is a simplified educational estimate, not tax advice.',
        ],
      }
    }
    case 'rsus': {
      const gross = values.shares * values.price
      const withheld = gross * (values.withholding / 100)
      const net = gross * (1 - values.tax / 100)
      return {
        summary: `Estimated gross vest value: $${Math.round(gross).toLocaleString()}`,
        details: [
          `Estimated withholding at vest: $${Math.round(withheld).toLocaleString()}`,
          `Estimated net after total tax: $${Math.round(net).toLocaleString()}`,
          'Actual tax outcomes depend on your full compensation and filing situation.',
        ],
      }
    }
    case 'retirement': {
      const years = Math.max(values.retire - values.age, 0)
      let total = values.savings
      for (let year = 0; year < years; year += 1) {
        total = total * (1 + values.return / 100) + values.annual
      }
      return {
        summary: `Estimated retirement savings at age ${values.retire}: $${Math.round(total).toLocaleString()}`,
        details: [
          `Years until retirement: ${years}`,
          `Current savings: $${Math.round(values.savings).toLocaleString()}`,
          `Annual contributions assumed: $${Math.round(values.annual).toLocaleString()}`,
        ],
      }
    }
    case '529-plan': {
      const years = Math.max(18 - values.age, 0)
      let total = values.balance
      for (let month = 0; month < years * 12; month += 1) {
        total = total * (1 + values.return / 100 / 12) + values.monthly
      }
      return {
        summary: `Estimated 529 balance at age 18: $${Math.round(total).toLocaleString()}`,
        details: [
          `Years remaining: ${years}`,
          `Current balance: $${Math.round(values.balance).toLocaleString()}`,
          `Monthly contribution assumed: $${Math.round(values.monthly).toLocaleString()}`,
        ],
      }
    }
    case 'roth-ira': {
      const years = Math.max(values.retire - values.age, 0)
      let total = values.balance
      for (let year = 0; year < years; year += 1) {
        total = total * (1 + values.return / 100) + values.annual
      }
      return {
        summary: `Estimated Roth IRA balance at age ${values.retire}: $${Math.round(total).toLocaleString()}`,
        details: [
          `Years invested: ${years}`,
          `Current balance: $${Math.round(values.balance).toLocaleString()}`,
          `Annual contribution assumed: $${Math.round(values.annual).toLocaleString()}`,
        ],
      }
    }
    case 'home-equity': {
      const currentEquity = values.value - values.balance
      const futureValue = values.value * Math.pow(1 + values.appreciation / 100, values.years)
      const futureEquity = futureValue - values.balance
      return {
        summary: `Estimated current equity: $${Math.round(currentEquity).toLocaleString()}`,
        details: [
          `Projected home value in ${values.years} years: $${Math.round(futureValue).toLocaleString()}`,
          `Projected equity in ${values.years} years: $${Math.round(futureEquity).toLocaleString()}`,
          'Mortgage balance is assumed constant in this simplified estimate.',
        ],
      }
    }
    case 'asset-allocation': {
      const total = values.stocks + values.bonds + values.cash + values.alts
      return {
        summary: total === 100 ? 'Allocation totals 100%.' : `Allocation totals ${total}%.`,
        details: [
          `Stocks: ${values.stocks}%`,
          `Bonds: ${values.bonds}%`,
          `Cash: ${values.cash}%`,
          `Alternatives: ${values.alts}%`,
        ],
      }
    }
  }
}

export default function CalculatorClient({ type, title, description, fields }: CalculatorClientProps) {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(fields.map((field) => [field.key, field.defaultValue ?? 0]))
  )

  const result = useMemo(() => calculate(type, values), [type, values])

  return (
    <section className="section">
      <div className="container">
        <div className="card">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="formGrid">
            {fields.map((field) => (
              <label key={field.key}>
                <div className="small" style={{ marginBottom: 8 }}>{field.label}</div>
                <input
                  className="input"
                  type="number"
                  placeholder={field.placeholder}
                  value={values[field.key] || ''}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      [field.key]: Number(event.target.value || 0),
                    }))
                  }
                />
              </label>
            ))}
          </div>
          <div className="disclosure" style={{ marginTop: 24 }}>
            <h3>Result</h3>
            <p>{result.summary}</p>
            <ul className="featureList">
              {result.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
