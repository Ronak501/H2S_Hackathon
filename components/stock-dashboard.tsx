"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"

// Mock data for the stock chart
const generateChartData = (days: number, startPrice: number) => {
  const data = []
  let currentPrice = startPrice

  const today = new Date()

  for (let i = days; i >= 0; i--) {
    const date = new Date()
    date.setDate(today.getDate() - i)

    // Random price movement
    const change = (Math.random() - 0.48) * 20
    currentPrice = Math.max(currentPrice + change, 2000) // Ensure price doesn't go below 2000

    data.push({
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      price: Number.parseFloat(currentPrice.toFixed(2)),
      volume: Math.floor(Math.random() * 10000000) + 5000000,
    })
  }

  return data
}

const dailyData = generateChartData(30, 2900)
const weeklyData = generateChartData(12, 2800)
const monthlyData = generateChartData(12, 2700)
const yearlyData = generateChartData(12, 2500)

// Market depth data
const marketDepthData = {
  buy: [
    { price: 2944.0, quantity: 1250, orders: 5 },
    { price: 2943.75, quantity: 850, orders: 3 },
    { price: 2943.5, quantity: 1500, orders: 7 },
    { price: 2943.25, quantity: 2000, orders: 10 },
    { price: 2943.0, quantity: 1800, orders: 8 },
  ],
  sell: [
    { price: 2945.5, quantity: 1100, orders: 4 },
    { price: 2945.75, quantity: 900, orders: 3 },
    { price: 2946.0, quantity: 1600, orders: 6 },
    { price: 2946.25, quantity: 1900, orders: 9 },
    { price: 2946.5, quantity: 1700, orders: 7 },
  ],
}

export default function StockDashboard() {
  const [timeframe, setTimeframe] = useState("1D")

  const getChartData = () => {
    switch (timeframe) {
      case "1W":
        return dailyData.slice(-7)
      case "1M":
        return dailyData
      case "3M":
        return weeklyData
      case "1Y":
        return monthlyData
      case "5Y":
        return yearlyData
      default:
        return dailyData.slice(-1)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle>Price Chart</CardTitle>
            <div className="flex space-x-1">
              {["1D", "1W", "1M", "3M", "1Y", "5Y"].map((period) => (
                <button
                  key={period}
                  onClick={() => setTimeframe(period)}
                  className={`px-2 py-1 text-xs rounded ${
                    timeframe === period ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={getChartData()}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" />
                <YAxis domain={["dataMin - 50", "dataMax + 50"]} />
                <Tooltip formatter={(value) => [`₹${value}`, "Price"]} labelFormatter={(label) => `Date: ${label}`} />
                <Area type="monotone" dataKey="price" stroke="#3b82f6" fillOpacity={1} fill="url(#colorPrice)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Market Depth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-green-600 mb-2">Buy Orders</h4>
                <div className="space-y-1">
                  {marketDepthData.buy.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>₹{item.price.toFixed(2)}</span>
                      <span>{item.quantity.toLocaleString()}</span>
                      <span>{item.orders}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-red-600 mb-2">Sell Orders</h4>
                <div className="space-y-1">
                  {marketDepthData.sell.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>₹{item.price.toFixed(2)}</span>
                      <span>{item.quantity.toLocaleString()}</span>
                      <span>{item.orders}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Key Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <div className="text-gray-500">Open</div>
              <div className="text-right">₹2,930.15</div>

              <div className="text-gray-500">Previous Close</div>
              <div className="text-right">₹2,929.95</div>

              <div className="text-gray-500">Day High</div>
              <div className="text-right">₹2,952.80</div>

              <div className="text-gray-500">Day Low</div>
              <div className="text-right">₹2,928.00</div>

              <div className="text-gray-500">52 Week High</div>
              <div className="text-right">₹3,024.45</div>

              <div className="text-gray-500">52 Week Low</div>
              <div className="text-right">₹2,180.10</div>

              <div className="text-gray-500">Volume</div>
              <div className="text-right">3.2M</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

