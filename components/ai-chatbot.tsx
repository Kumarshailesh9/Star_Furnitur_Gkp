"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Bot, User, X, Send, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export function AIChatbot() {
  // Update the AI assistant introduction text:
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm GKP Furniture's AI assistant. How can I help you today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Update the predefined responses:
  const predefinedResponses: Record<string, string> = {
    hi: "Hello! How can I assist you with our furniture collection today?",
    hello: "Hi there! Welcome to GKP Furniture. How may I help you?",
    delivery:
      "We offer free delivery for orders above ₹5,000 within a 50km radius of our showrooms. For other areas, delivery charges depend on the distance and order value.",
    return:
      "We have a 30-day return policy for most items. Products must be in their original condition and packaging. Custom-made furniture cannot be returned unless there's a manufacturing defect.",
    warranty:
      "All our furniture comes with a 3-year warranty against manufacturing defects. For specific warranty details on a product, please check the product description or contact our customer service.",
    payment:
      "We accept various payment methods including credit/debit cards, UPI, net banking, and cash on delivery for orders under ₹10,000.",
    showroom:
      "Our main showroom is located at Nakaha no.1, Gorakhnath Road, Gorakhpur, Uttar Pradesh, 273004. You can visit us Monday to Saturday from 10:00 AM to 8:00 PM and Sunday from 11:00 AM to 6:00 PM.",
    discount:
      "We regularly offer seasonal discounts and promotions. Currently, we have a 10% discount on dining sets. Sign up for our newsletter to stay updated on our latest offers!",
    material:
      "We primarily use premium quality Sheesham wood, Mango wood, and engineered wood for our furniture. All materials are carefully selected for durability and aesthetic appeal.",
    custom:
      "Yes, we do offer custom furniture services. Please visit our showroom or contact our customer service to discuss your requirements.",
  }

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let responseContent =
        "I'm not sure how to help with that. Could you try asking something about our furniture, delivery, returns, or showroom locations?"

      // Check for keywords in the input
      const lowercaseInput = input.toLowerCase()
      for (const [keyword, response] of Object.entries(predefinedResponses)) {
        if (lowercaseInput.includes(keyword)) {
          responseContent = response
          break
        }
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseContent,
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center bg-primary text-primary-foreground rounded-full w-14 h-14 shadow-lg hover:bg-primary/90 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Bot className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 left-6 z-50 w-[90vw] sm:w-[400px] h-[500px] bg-background rounded-lg shadow-xl border overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
          >
            {/* Chat Header */}
            <div className="p-4 border-b bg-primary text-primary-foreground flex items-center justify-between">
              {/* Update the chatbot header: */}
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/logo-icon.png" alt="GKP Furniture AI" />
                  <AvatarFallback className="bg-primary-foreground text-primary">AI</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">GKP Furniture Assistant</h3>
                  <p className="text-xs opacity-80">Online | Ask me anything about our products</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-primary-foreground">
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Chat Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.role === "assistant" && (
                          <Avatar className="h-6 w-6 mt-0.5">
                            <AvatarFallback className="bg-primary text-primary-foreground text-xs">AI</AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                        {message.role === "user" && (
                          <Avatar className="h-6 w-6 mt-0.5">
                            <AvatarFallback className="bg-primary-foreground text-primary text-xs">
                              <User className="h-3 w-3" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="bg-primary text-primary-foreground text-xs">AI</AvatarFallback>
                        </Avatar>
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
