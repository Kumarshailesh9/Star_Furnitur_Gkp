import { type ChatbotQA, searchQuestions, findRelatedQuestions } from "./chatbot-data"

export interface ChatMessage {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export interface ConversationContext {
  lastQuestionId?: string
  lastTopic?: string
  followUpCount: number
  mentionedProducts: string[]
  mentionedCategories: string[]
}

// Extract keywords from user message
export function extractKeywords(message: string): string[] {
  // Remove common stop words and punctuation
  const stopWords = [
    "a",
    "an",
    "the",
    "and",
    "or",
    "but",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "have",
    "has",
    "had",
    "do",
    "does",
    "did",
    "to",
    "at",
    "by",
    "for",
    "with",
    "about",
    "against",
    "between",
    "into",
    "through",
    "during",
    "before",
    "after",
    "above",
    "below",
    "from",
    "up",
    "down",
    "in",
    "out",
    "on",
    "off",
    "over",
    "under",
    "again",
    "further",
    "then",
    "once",
    "here",
    "there",
    "when",
    "where",
    "why",
    "how",
    "all",
    "any",
    "both",
    "each",
    "few",
    "more",
    "most",
    "other",
    "some",
    "such",
    "no",
    "nor",
    "not",
    "only",
    "own",
    "same",
    "so",
    "than",
    "too",
    "very",
    "can",
    "will",
    "just",
    "should",
    "now",
  ]

  const cleanedMessage = message
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ")

  const words = cleanedMessage.split(" ")
  const keywords = words.filter((word) => !stopWords.includes(word) && word.length > 2)

  return [...new Set(keywords)] // Remove duplicates
}

// Determine if a message is a follow-up question
export function isFollowUpQuestion(message: string, context: ConversationContext): boolean {
  const followUpIndicators = [
    "what about",
    "how about",
    "and",
    "also",
    "what if",
    "how does",
    "can i",
    "is it",
    "are they",
    "do they",
    "will it",
    "does it",
    "can it",
    "what's",
    "what is",
    "how is",
    "why is",
    "when is",
    "where is",
    "who is",
    "which is",
  ]

  const lowercaseMessage = message.toLowerCase()

  // Check for pronouns that might indicate a follow-up
  const hasPronouns = /\b(it|this|that|these|those|they|them)\b/i.test(lowercaseMessage)

  // Check for follow-up indicators
  const hasFollowUpIndicator = followUpIndicators.some((indicator) => lowercaseMessage.includes(indicator))

  // Short questions are often follow-ups
  const isShortQuestion = message.split(" ").length < 5

  return (hasPronouns || hasFollowUpIndicator || isShortQuestion) && context.followUpCount < 3
}

// Process user message and find the best response
export function processUserMessage(
  message: string,
  conversationHistory: ChatMessage[],
  context: ConversationContext,
): { response: string; updatedContext: ConversationContext; relatedQuestions?: ChatbotQA[] } {
  // Check if it's a follow-up question
  const isFollowUp = isFollowUpQuestion(message, context)

  let matchedQA: ChatbotQA | undefined
  let relatedQuestions: ChatbotQA[] = []

  // For follow-up questions, use context to improve matching
  if (isFollowUp && context.lastQuestionId) {
    // Try to find related questions based on the last question
    const lastQA = findRelatedQuestions(context.lastQuestionId, 10)

    // Search within these related questions first
    const keywords = extractKeywords(message)
    const potentialMatches = lastQA.filter((qa) =>
      keywords.some(
        (keyword) =>
          qa.question.toLowerCase().includes(keyword) || qa.keywords.some((k) => k.toLowerCase().includes(keyword)),
      ),
    )

    if (potentialMatches.length > 0) {
      matchedQA = potentialMatches[0] // Take the best match
    }
  }

  // If no match found as follow-up or not a follow-up, do a regular search
  if (!matchedQA) {
    const searchResults = searchQuestions(message)
    if (searchResults.length > 0) {
      matchedQA = searchResults[0]
      // Get other search results as related questions
      relatedQuestions = searchResults.slice(1, 4)
    }
  }

  // Update context
  const updatedContext: ConversationContext = {
    lastQuestionId: matchedQA?.id || context.lastQuestionId,
    lastTopic: matchedQA?.category || context.lastTopic,
    followUpCount: isFollowUp ? context.followUpCount + 1 : 0,
    mentionedProducts: [...context.mentionedProducts, ...(matchedQA?.productLinks?.map((link) => link.text) || [])],
    mentionedCategories: [...context.mentionedCategories, ...(matchedQA?.category ? [matchedQA.category] : [])],
  }

  // If we found a matching question, return its answer
  if (matchedQA) {
    let response = matchedQA.answer

    // Add product links if available
    if (matchedQA.productLinks && matchedQA.productLinks.length > 0) {
      response += "\n\nYou might want to check out:"
      matchedQA.productLinks.forEach((link) => {
        response += `\n- [${link.text}](${link.url})`
      })
    }

    // Find related questions if we don't already have them
    if (relatedQuestions.length === 0 && matchedQA.id) {
      relatedQuestions = findRelatedQuestions(matchedQA.id)
    }

    return { response, updatedContext, relatedQuestions }
  }

  // If no match found, provide a fallback response
  return {
    response:
      "I'm not sure I understand your question. Could you please rephrase it or ask about our furniture products, delivery options, or services?",
    updatedContext,
    relatedQuestions: [],
  }
}

// Generate a greeting based on time of day
export function generateGreeting(): string {
  const hour = new Date().getHours()

  if (hour < 12) {
    return "Good morning! I'm GKP Furniture's AI assistant. How can I help you today?"
  } else if (hour < 17) {
    return "Good afternoon! I'm GKP Furniture's AI assistant. How can I help you today?"
  } else {
    return "Good evening! I'm GKP Furniture's AI assistant. How can I help you today?"
  }
}

// Suggest questions based on conversation context
export function suggestQuestions(context: ConversationContext): string[] {
  const suggestions: string[] = []

  // Suggest based on mentioned categories
  if (context.mentionedCategories.includes("product_specifications")) {
    suggestions.push("What materials are used in your furniture?")
    suggestions.push("Do you offer custom size options?")
  }

  if (context.mentionedCategories.includes("delivery_installation")) {
    suggestions.push("How much does delivery cost?")
    suggestions.push("Do you assemble the furniture?")
  }

  if (context.mentionedCategories.includes("warranty_information")) {
    suggestions.push("What does your warranty cover?")
    suggestions.push("How do I make a warranty claim?")
  }

  // If no specific suggestions based on context, offer general ones
  if (suggestions.length === 0) {
    suggestions.push("What are your best-selling furniture items?")
    suggestions.push("Do you offer financing options?")
    suggestions.push("How can I care for wooden furniture?")
    suggestions.push("What's your return policy?")
  }

  // Return a subset of suggestions (max 3)
  return suggestions.slice(0, 3)
}
