import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StockDashboard from "@/components/stock-dashboard"
import FinancialMetrics from "@/components/financial-metrics"
import NewsSection from "@/components/news-section"
import AIAssistant from "@/components/ai-assistant"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">FinInsight</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                Register
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">RELIANCE</h2>
                  <p className="text-gray-500">Reliance Industries Ltd.</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">₹2,945.25</p>
                  <p className="text-green-600">+15.30 (0.52%)</p>
                </div>
              </div>

              <Tabs defaultValue="overview">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="financials">Financials</TabsTrigger>
                  <TabsTrigger value="news">News</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <StockDashboard />
                </TabsContent>
                <TabsContent value="financials">
                  <FinancialMetrics />
                </TabsContent>
                <TabsContent value="news">
                  <NewsSection />
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="lg:col-span-1">
            <AIAssistant />
          </div>
        </div>
      </div>
    </main>
  )
}

