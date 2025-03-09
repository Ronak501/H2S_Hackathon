"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { SendIcon, BotIcon, UserIcon } from "lucide-react"
import { generateText } from "ai" // Import from AI SDK [^1]
import { openai } from "@ai-sdk/openai" // Import from AI SDK OpenAI integration [^1]

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

// Sample financial questions for suggestions
const sampleQuestions = [
  "What is Reliance's current P/E ratio?",
  "How to analyze Reliance's financial health?",
  "Explain Reliance's dividend history",
  "Should I invest in Reliance now?",
  "Compare Reliance with other oil companies",
]

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I'm your financial assistant. How can I help you understand Reliance Industries or any other investment questions you have?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Function to handle sending a message
  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Using AI SDK to generate response [^1]
      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: input,
        system:
          "You are a helpful financial assistant specializing in stock market analysis and investment advice for Reliance Industries. Provide concise, accurate information about financial metrics, market trends, and investment strategies. Always clarify that you're providing educational information, not financial advice. Keep responses under 150 words and focus on facts.",
      })

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: text,
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error generating response:", error)

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm sorry, I couldn't process your request. Please try again later.",
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Handle pressing Enter to send message
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Handle clicking a sample question
  const handleSampleQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-lg">
          <BotIcon className="h-5 w-5 mr-2 text-blue-600" />
          Financial Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col p-0">
        <div className="flex-grow overflow-y-auto px-4 py-2 max-h-[500px]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex mb-4 ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
            >
              <div className={`flex max-w-[80%] ${message.role === "assistant" ? "flex-row" : "flex-row-reverse"}`}>
                <Avatar
                  className={`h-8 w-8 ${
                    message.role === "assistant" ? "bg-blue-100 text-blue-600 mr-2" : "bg-gray-100 text-gray-600 ml-2"
                  }`}
                >
                  {message.role === "assistant" ? <BotIcon className="h-4 w-4" /> : <UserIcon className="h-4 w-4" />}
                </Avatar>
                <div
                  className={`rounded-lg px-3 py-2 ${
                    message.role === "assistant" ? "bg-blue-50 text-gray-800" : "bg-blue-600 text-white"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="flex max-w-[80%]">
                <Avatar className="h-8 w-8 bg-blue-100 text-blue-600 mr-2">
                  <BotIcon className="h-4 w-4" />
                </Avatar>
                <div className="rounded-lg px-3 py-2 bg-blue-50 text-gray-800">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                    <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {messages.length === 1 && (
          <div className="px-4 py-3">
            <p className="text-xs text-gray-500 mb-2">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {sampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSampleQuestion(question)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="border-t p-4">
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Reliance or investment strategies..."
              className="flex-grow"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <SendIcon className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            This assistant provides educational information, not financial advice.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

