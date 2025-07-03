"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { SearchIcon, X, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useDebounce } from "@/hooks/use-debounce"
import { searchProducts } from "@/lib/search"
import type { ProductSearchResult } from "@/types/search"

interface SearchBarProps {
  placeholder?: string
  onClose?: () => void
  className?: string
  autoFocus?: boolean
  variant?: "full" | "compact"
}

export function SearchBar({
  placeholder = "Search for products...",
  onClose,
  className = "",
  autoFocus = false,
  variant = "compact",
}: SearchBarProps) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [suggestions, setSuggestions] = useState<ProductSearchResult[]>([])
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)
  const debouncedQuery = useDebounce(query, 300)

  // Handle search submission
  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!query.trim()) return

    // Close suggestions
    setIsFocused(false)

    // Navigate to search page with query
    router.push(`/search?q=${encodeURIComponent(query.trim())}`)

    // Close search modal if in header
    if (onClose) onClose()
  }

  // Handle suggestion selection
  const handleSelectSuggestion = (suggestion: ProductSearchResult) => {
    router.push(`/product/${suggestion.slug}`)
    setIsFocused(false)
    if (onClose) onClose()
  }

  // Fetch suggestions when query changes
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!debouncedQuery.trim() || debouncedQuery.length < 2) {
        setSuggestions([])
        return
      }

      setIsLoading(true)
      try {
        const results = await searchProducts(debouncedQuery, { limit: 5 })
        setSuggestions(results)
      } catch (error) {
        console.error("Error fetching suggestions:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSuggestions()
  }, [debouncedQuery])

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Auto focus input if specified
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Input
            ref={inputRef}
            type="search"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            className={`pr-10 ${variant === "full" ? "h-12 text-base" : "h-9 text-sm"}`}
            autoComplete="off"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
            {isLoading ? (
              <Loader2 className={`animate-spin ${variant === "full" ? "h-5 w-5" : "h-4 w-4"} text-muted-foreground`} />
            ) : query ? (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className={`h-6 w-6 p-0.5`}
                onClick={() => setQuery("")}
              >
                <X className={`${variant === "full" ? "h-4 w-4" : "h-3 w-3"}`} />
                <span className="sr-only">Clear search</span>
              </Button>
            ) : (
              <SearchIcon className={`${variant === "full" ? "h-5 w-5" : "h-4 w-4"} text-muted-foreground`} />
            )}
          </div>
        </div>
      </form>

      {/* Auto-suggestions dropdown */}
      <AnimatePresence>
        {isFocused && (suggestions.length > 0 || isLoading || (debouncedQuery.trim().length >= 2 && !isLoading)) && (
          <motion.div
            ref={suggestionsRef}
            className="absolute z-50 top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-md overflow-hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >
            {isLoading ? (
              <div className="p-4 text-center">
                <Loader2 className="h-5 w-5 animate-spin mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground mt-2">Searching...</p>
              </div>
            ) : suggestions.length > 0 ? (
              <div>
                <ul className="max-h-[300px] overflow-auto">
                  {suggestions.map((suggestion) => (
                    <li key={suggestion.id}>
                      <button
                        type="button"
                        className="w-full text-left px-4 py-2 hover:bg-muted flex items-center gap-3"
                        onClick={() => handleSelectSuggestion(suggestion)}
                      >
                        {suggestion.image && (
                          <div className="relative h-10 w-10 rounded overflow-hidden bg-muted flex-shrink-0">
                            <img
                              src={suggestion.image || "/placeholder.svg"}
                              alt={suggestion.name}
                              className="object-cover h-full w-full"
                            />
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-medium line-clamp-1">{suggestion.name}</p>
                          {suggestion.price && (
                            <p className="text-xs text-muted-foreground">
                              {new Intl.NumberFormat("en-IN", {
                                style: "currency",
                                currency: "INR",
                                maximumFractionDigits: 0,
                              }).format(suggestion.price)}
                            </p>
                          )}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="p-2 border-t">
                  <Button variant="ghost" size="sm" className="w-full text-xs justify-center" onClick={handleSearch}>
                    See all results for &quot;{debouncedQuery}&quot;
                  </Button>
                </div>
              </div>
            ) : debouncedQuery.trim().length >= 2 ? (
              <div className="p-4 text-center">
                <p className="text-sm text-muted-foreground">No results found for &quot;{debouncedQuery}&quot;</p>
                <Button variant="link" size="sm" className="mt-1 h-auto p-0 text-xs" onClick={handleSearch}>
                  View all search results
                </Button>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
