"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Bot, User, X, Send, Loader2, ThumbsUp, ThumbsDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { nanoid } from "nanoid"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { type ChatMessage, type ConversationContext, processUserMessage, generateGreeting } from "@/lib/chatbot-utils"
import type { ChatbotQA } from "@/lib/chatbot-data"

export function EnhancedChatbot() {
  // Initialize with a greeting message
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: nanoid(),
      content: generateGreeting(),
      role: "assistant",
      timestamp: new Date(),
    },
  ])

  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>([])
  const [relatedQuestions, setRelatedQuestions] = useState<ChatbotQA[]>([])
  const [context, setContext] = useState<ConversationContext>({
    followUpCount: 0,
    mentionedProducts: [],
    mentionedCategories: [],
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // We're no longer generating suggested questions
  useEffect(() => {
    // Always set to empty array to disable suggestions
    setSuggestedQuestions([])
  }, [context, messages.length])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    const userInput = input.trim()
    if (!userInput) return

    // Add user message
    const userMessage: ChatMessage = {
      id: nanoid(),
      content: userInput,
      role: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setRelatedQuestions([])

    // Process the message and generate a response
    setTimeout(() => {
      const {
        response,
        updatedContext,
        relatedQuestions: newRelatedQuestions,
      } = processUserMessage(userInput, messages, context)

      const aiMessage: ChatMessage = {
        id: nanoid(),
        content: response,
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setContext(updatedContext)
      setIsLoading(false)

      if (newRelatedQuestions && newRelatedQuestions.length > 0) {
        setRelatedQuestions(newRelatedQuestions)
      }
    }, 600) // Simulate processing time
  }

  const handleRelatedQuestion = (question: ChatbotQA) => {
    // Add user message with the question
    const userMessage: ChatMessage = {
      id: nanoid(),
      content: question.question,
      role: "user",
      timestamp: new Date(),
    }

    // Add assistant message with the answer
    const aiMessage: ChatMessage = {
      id: nanoid(),
      content: question.answer,
      role: "assistant",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage, aiMessage])
    setRelatedQuestions([])

    // Update context
    setContext((prev) => ({
      lastQuestionId: question.id,
      lastTopic: question.category,
      followUpCount: 0,
      mentionedProducts: [...prev.mentionedProducts, ...(question.productLinks?.map((link) => link.text) || [])],
      mentionedCategories: [...prev.mentionedCategories, question.category],
    }))
  }

  // Format message content to handle links
  const formatMessageContent = (content: string) => {
    // Replace markdown-style links with HTML links
    const formattedContent = content.replace(
      /\[([^\]]+)\]$$([^)]+)$$/g,
      '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>',
    )

    return <div dangerouslySetInnerHTML={{ __html: formattedContent.replace(/\n/g, "<br />") }} />
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
            className="fixed bottom-6 left-6 z-50 w-[70vw] sm:w-[400px] h-[500px] bg-background rounded-lg shadow-xl border overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
          >
            {/* Chat Header */}
            <div className="p-4 border-b bg-primary text-primary-foreground flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/logo-icon.png" alt="GKP Furniture AI" />
                  <AvatarFallback className="bg-primary-foreground text-primary">AI</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">GKP Furniture Assistant</h3>
                  <p className="text-xs opacity-80">Ask me anything about our products & services</p>
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
                        <div className="flex-1">
                          <div className="text-sm">{formatMessageContent(message.content)}</div>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-xs opacity-70">
                              {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </p>

                            {message.role === "assistant" && (
                              <div className="flex items-center space-x-1">
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-6 w-6 p-0 opacity-70 hover:opacity-100"
                                      >
                                        <ThumbsUp className="h-3 w-3" />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="text-xs">Helpful</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>

                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-6 w-6 p-0 opacity-70 hover:opacity-100"
                                      >
                                        <ThumbsDown className="h-3 w-3" />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="text-xs">Not helpful</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                            )}
                          </div>
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

                {/* Related Questions */}
                {relatedQuestions.length > 0 && !isLoading && (
                  <div className="mt-2 mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Related questions:</p>
                    <div className="flex flex-col gap-2">
                      {relatedQuestions.map((question) => (
                        <Button
                          key={question.id}
                          variant="outline"
                          size="sm"
                          className="text-xs justify-start h-auto py-2 text-left"
                          onClick={() => handleRelatedQuestion(question)}
                        >
                          {question.question}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

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
                ref={inputRef}
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
