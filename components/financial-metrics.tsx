"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Mock financial data
const quarterlyData = [
  { quarter: "Q1 FY23", revenue: 2350, profit: 160, eps: 23.7 },
  { quarter: "Q2 FY23", revenue: 2410, profit: 172, eps: 25.4 },
  { quarter: "Q3 FY23", revenue: 2480, profit: 185, eps: 27.3 },
  { quarter: "Q4 FY23", revenue: 2520, profit: 195, eps: 28.8 },
  { quarter: "Q1 FY24", revenue: 2580, profit: 205, eps: 30.3 },
  { quarter: "Q2 FY24", revenue: 2650, profit: 218, eps: 32.2 },
  { quarter: "Q3 FY24", revenue: 2720, profit: 230, eps: 34.0 },
  { quarter: "Q4 FY24", revenue: 2790, profit: 245, eps: 36.2 },
]

const ratios = [
  { name: "P/E Ratio", value: 28.5 },
  { name: "P/B Ratio", value: 2.8 },
  { name: "Debt to Equity", value: 0.42 },
  { name: "Return on Equity", value: 9.8 },
  { name: "Return on Capital", value: 12.5 },
  { name: "Operating Margin", value: 14.2 },
  { name: "Net Profit Margin", value: 8.7 },
  { name: "Dividend Yield", value: 0.35 },
]

const shareholdingPattern = [
  { name: "Promoters", value: 50.6 },
  { name: "FIIs", value: 24.8 },
  { name: "DIIs", value: 12.3 },
  { name: "Public", value: 12.3 },
]

export default function FinancialMetrics() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Quarterly Performance (₹ in Billions)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={quarterlyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${value}B`, ""]} />
                <Legend />
                <Bar dataKey="revenue" name="Revenue" fill="#3b82f6" />
                <Bar dataKey="profit" name="Net Profit" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Key Financial Ratios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {ratios.map((ratio, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{ratio.name}</span>
                  <span className="text-sm font-medium">{ratio.value}%</span>
                  <div className="w-1/2 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${Math.min(ratio.value * 5, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Shareholding Pattern</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {shareholdingPattern.map((holder, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{holder.name}</span>
                    <span className="font-medium">{holder.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        index === 0
                          ? "bg-blue-600"
                          : index === 1
                            ? "bg-green-500"
                            : index === 2
                              ? "bg-yellow-500"
                              : "bg-purple-500"
                      }`}
                      style={{ width: `${holder.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Earnings Per Share (₹)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={quarterlyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="quarter" />
                <YAxis domain={[0, "dataMax + 5"]} />
                <Tooltip formatter={(value) => [`₹${value}`, "EPS"]} />
                <Bar dataKey="eps" name="EPS" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

