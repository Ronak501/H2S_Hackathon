import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, ExternalLinkIcon } from "lucide-react"

// Mock news data
const newsItems = [
  {
    id: 1,
    title: "Reliance Industries Reports Strong Q4 Results, Beats Market Expectations",
    source: "Economic Times",
    date: "May 2, 2024",
    summary:
      "Reliance Industries Limited (RIL) reported a 12% year-on-year increase in consolidated net profit for Q4 FY24, surpassing analyst expectations. The company's retail and digital services segments showed robust growth.",
    url: "#",
  },
  {
    id: 2,
    title: "Reliance Jio Launches New 5G Services Across 50 More Cities",
    source: "Business Standard",
    date: "April 28, 2024",
    summary:
      "Reliance Jio has expanded its 5G services to 50 additional cities, taking the total count to over 500 cities across India. The company aims to achieve nationwide coverage by the end of 2024.",
    url: "#",
  },
  {
    id: 3,
    title: "Reliance Retail Acquires Premium Fashion Brand to Strengthen Portfolio",
    source: "Mint",
    date: "April 15, 2024",
    summary:
      "Reliance Retail has acquired a majority stake in a premium fashion brand as part of its strategy to strengthen its presence in the luxury segment. This acquisition is expected to enhance Reliance Retail's offerings in the high-end fashion market.",
    url: "#",
  },
  {
    id: 4,
    title: "Reliance Industries Announces Green Energy Investment Plans",
    source: "Financial Express",
    date: "April 10, 2024",
    summary:
      "Reliance Industries has announced plans to invest ₹75,000 crore in green energy initiatives over the next three years. The company aims to become a net carbon-zero company by 2035.",
    url: "#",
  },
  {
    id: 5,
    title: "Reliance and BP Expand Partnership for Fuel Retail Business",
    source: "CNBC-TV18",
    date: "March 25, 2024",
    summary:
      "Reliance Industries and BP have announced plans to expand their fuel retail partnership in India. The joint venture aims to increase its network of fuel stations to 5,500 by 2025.",
    url: "#",
  },
]

export default function NewsSection() {
  return (
    <div className="space-y-4">
      {newsItems.map((news) => (
        <Card key={news.id} className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-base font-semibold">{news.title}</CardTitle>
                <CardDescription className="flex items-center mt-1 text-xs">
                  <span className="font-medium text-blue-600">{news.source}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center text-gray-500">
                    <CalendarIcon className="h-3 w-3 mr-1" />
                    {news.date}
                  </span>
                </CardDescription>
              </div>
              <a href={news.url} className="text-blue-600 hover:text-blue-800">
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{news.summary}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

