// Mock data for Reliance Industries

export const companyInfo = {
  name: "Reliance Industries Ltd.",
  ticker: "RELIANCE",
  sector: "Oil & Gas",
  industry: "Integrated Oil & Gas",
  founded: 1966,
  headquarters: "Mumbai, India",
  ceo: "Mukesh Ambani",
  employees: 236000,
  website: "https://www.ril.com/",
  description:
    "Reliance Industries Limited is an Indian multinational conglomerate company, headquartered in Mumbai. It has diverse businesses including energy, petrochemicals, natural gas, retail, telecommunications, mass media, and textiles. Reliance is one of the most profitable companies in India and the largest publicly traded company in India by market capitalization.",
}

export const financialHighlights = {
  marketCap: 19950.25, // in billions INR
  enterpriseValue: 21350.8, // in billions INR
  peRatio: 28.5,
  pbRatio: 2.8,
  evToEbitda: 14.2,
  dividendYield: 0.35, // in percentage
  roe: 9.8, // in percentage
  roa: 5.6, // in percentage
  debtToEquity: 0.42,
  currentRatio: 1.28,
  quickRatio: 0.85,
  interestCoverage: 8.5,
}

export const annualFinancials = [
  {
    year: "FY 2021",
    revenue: 5390.43,
    ebitda: 980.36,
    netIncome: 537.39,
    eps: 79.2,
    freeCashFlow: 420.15,
    dividendPerShare: 7.0,
  },
  {
    year: "FY 2022",
    revenue: 7920.56,
    ebitda: 1250.45,
    netIncome: 670.45,
    eps: 99.0,
    freeCashFlow: 510.25,
    dividendPerShare: 8.0,
  },
  {
    year: "FY 2023",
    revenue: 8760.32,
    ebitda: 1380.65,
    netIncome: 730.8,
    eps: 108.0,
    freeCashFlow: 580.4,
    dividendPerShare: 9.0,
  },
  {
    year: "FY 2024",
    revenue: 9740.5,
    ebitda: 1520.3,
    netIncome: 810.25,
    eps: 119.5,
    freeCashFlow: 650.75,
    dividendPerShare: 10.0,
  },
]

export const businessSegments = [
  {
    name: "Oil to Chemicals (O2C)",
    revenuePercentage: 58.5,
    description: "Includes refining and petrochemicals businesses.",
  },
  {
    name: "Retail",
    revenuePercentage: 22.3,
    description: "Operates in various retail formats including grocery, consumer electronics, fashion, and lifestyle.",
  },
  {
    name: "Digital Services",
    revenuePercentage: 15.8,
    description: "Includes Jio Platforms which offers digital services, telecommunications, and media.",
  },
  {
    name: "Oil & Gas Exploration",
    revenuePercentage: 3.4,
    description: "Exploration and production of oil and gas.",
  },
]

export const stockPriceHistory = {
  "1D": [
    { time: "09:15", price: 2930.15 },
    { time: "10:00", price: 2935.4 },
    { time: "11:00", price: 2940.25 },
    { time: "12:00", price: 2938.75 },
    { time: "13:00", price: 2942.3 },
    { time: "14:00", price: 2945.8 },
    { time: "15:00", price: 2943.5 },
    { time: "15:30", price: 2945.25 },
  ],
  "1W": [
    { date: "Mon", price: 2920.35 },
    { date: "Tue", price: 2915.8 },
    { date: "Wed", price: 2925.45 },
    { date: "Thu", price: 2930.1 },
    { date: "Fri", price: 2945.25 },
  ],
  "1M": [
    { date: "Week 1", price: 2880.25 },
    { date: "Week 2", price: 2905.4 },
    { date: "Week 3", price: 2915.75 },
    { date: "Week 4", price: 2945.25 },
  ],
  "1Y": [
    { date: "Jan", price: 2750.3 },
    { date: "Feb", price: 2780.45 },
    { date: "Mar", price: 2810.2 },
    { date: "Apr", price: 2835.75 },
    { date: "May", price: 2860.3 },
    { date: "Jun", price: 2880.15 },
    { date: "Jul", price: 2900.5 },
    { date: "Aug", price: 2920.25 },
    { date: "Sep", price: 2890.4 },
    { date: "Oct", price: 2910.35 },
    { date: "Nov", price: 2930.8 },
    { date: "Dec", price: 2945.25 },
  ],
}

