"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Filter, SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PriceRangeSlider } from "@/components/price-range-slider"
import { SearchBar } from "@/components/search-bar"
import { getSearchResults, getSearchCategories } from "@/lib/search"
import type { SearchResults, SearchFilters, ProductSearchResult } from "@/types/search"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const categoryParam = searchParams.get("category")
  const sortParam = searchParams.get("sort") || "relevance"

  const [searchResults, setSearchResults] = useState<SearchResults | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState<SearchFilters>({
    category: categoryParam || undefined,
    sort: sortParam as SearchFilters["sort"],
    priceRange: [5000, 50000],
  })

  const categories = getSearchCategories()

  // Fetch search results
  useEffect(() => {
    if (!query.trim()) return

    const fetchResults = async () => {
      setIsLoading(true)
      try {
        const results = await getSearchResults(query, {
          page: currentPage,
          limit: 12,
          filters,
        })
        setSearchResults(results)
      } catch (error) {
        console.error("Error fetching search results:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchResults()
  }, [query, currentPage, filters])

  // Handle filter changes
  const handleCategoryChange = (category: string) => {
    setFilters((prev) => ({ ...prev, category: category === "all" ? undefined : category }))
    setCurrentPage(1)
  }

  const handleSortChange = (sort: string) => {
    setFilters((prev) => ({ ...prev, sort: sort as SearchFilters["sort"] }))
    setCurrentPage(1)
  }

  const handlePriceRangeChange = (range: [number, number]) => {
    setFilters((prev) => ({ ...prev, priceRange: range }))
    setCurrentPage(1)
  }

  const clearAllFilters = () => {
    setFilters({
      sort: "relevance",
      priceRange: [5000, 50000],
    })
    setCurrentPage(1)
  }

  // Format price in Indian Rupees
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-2 md:py-4 text-xs md:text-sm">
        <div className="flex items-center">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 md:h-4 md:w-4 mx-1 md:mx-2 text-muted-foreground" />
          <span className="text-foreground font-medium">Search Results</span>
        </div>
      </div>

      {/* Search Header */}
      <section className="bg-muted py-4 md:py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
            {query ? `Search Results for "${query}"` : "Search Our Products"}
          </h1>

          <div className="max-w-2xl">
            <SearchBar
              variant="full"
              placeholder="Search for products, categories, or keywords..."
              className="w-full"
              autoFocus={!query}
            />
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        {query ? (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-20">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <Button variant="ghost" size="sm" className="h-8 text-sm" onClick={clearAllFilters}>
                    Clear All
                  </Button>
                </div>

                <Accordion type="multiple" defaultValue={["category", "price"]}>
                  <AccordionItem value="category">
                    <AccordionTrigger>Category</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant={!filters.category ? "secondary" : "outline"}
                            size="sm"
                            className="w-full justify-start text-sm"
                            onClick={() => handleCategoryChange("all")}
                          >
                            All Categories
                          </Button>
                        </div>
                        {categories.map((category) => (
                          <div key={category.value} className="flex items-center space-x-2">
                            <Button
                              variant={filters.category === category.value ? "secondary" : "outline"}
                              size="sm"
                              className="w-full justify-start text-sm"
                              onClick={() => handleCategoryChange(category.value)}
                            >
                              {category.label}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="price">
                    <AccordionTrigger>Price Range</AccordionTrigger>
                    <AccordionContent>
                      <PriceRangeSlider
                        min={5000}
                        max={50000}
                        step={1000}
                        defaultValue={filters.priceRange}
                        onChange={handlePriceRangeChange}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Results */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-3 md:gap-4">
                <div>
                  {searchResults && (
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Found {searchResults.pagination.total} results
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 md:gap-4 w-full sm:w-auto">
                  {/* Mobile Filter Button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="text-xs md:text-sm h-8 md:h-9 lg:hidden">
                        <Filter className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[80vw] max-w-[300px] sm:max-w-[400px] p-0">
                      <div className="flex flex-col h-full">
                        <div className="p-4 border-b flex items-center justify-between">
                          <h2 className="font-semibold text-base md:text-lg">Filters</h2>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 text-xs md:text-sm"
                            onClick={clearAllFilters}
                          >
                            Clear All
                          </Button>
                        </div>

                        <div className="flex-1 overflow-auto p-4">
                          <Accordion type="multiple" defaultValue={["category", "price"]}>
                            <AccordionItem value="category">
                              <AccordionTrigger className="text-sm md:text-base">Category</AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-2">
                                  <div className="flex items-center space-x-2">
                                    <Button
                                      variant={!filters.category ? "secondary" : "outline"}
                                      size="sm"
                                      className="w-full justify-start text-sm"
                                      onClick={() => handleCategoryChange("all")}
                                    >
                                      All Categories
                                    </Button>
                                  </div>
                                  {categories.map((category) => (
                                    <div key={category.value} className="flex items-center space-x-2">
                                      <Button
                                        variant={filters.category === category.value ? "secondary" : "outline"}
                                        size="sm"
                                        className="w-full justify-start text-sm"
                                        onClick={() => handleCategoryChange(category.value)}
                                      >
                                        {category.label}
                                      </Button>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="price">
                              <AccordionTrigger className="text-sm md:text-base">Price Range</AccordionTrigger>
                              <AccordionContent>
                                <PriceRangeSlider
                                  min={5000}
                                  max={50000}
                                  step={1000}
                                  defaultValue={filters.priceRange}
                                  onChange={handlePriceRangeChange}
                                />
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>

                        <div className="p-4 border-t mt-auto">
                          <div className="flex gap-3">
                            <SheetClose asChild>
                              <Button className="flex-1 text-xs md:text-sm">Apply Filters</Button>
                            </SheetClose>
                            <SheetClose asChild>
                              <Button variant="outline" className="flex-1 text-xs md:text-sm">
                                Cancel
                              </Button>
                            </SheetClose>
                          </div>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Select value={filters.sort || "relevance"} onValueChange={handleSortChange}>
                    <SelectTrigger className="w-full sm:w-[150px] md:w-[180px] h-8 md:h-9 text-xs md:text-sm">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="name-asc">Name: A to Z</SelectItem>
                      <SelectItem value="name-desc">Name: Z to A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {isLoading ? (
                <div className="py-12 text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  <p className="mt-4 text-muted-foreground">Searching for products...</p>
                </div>
              ) : searchResults?.results.length ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {searchResults.results.map((product) => (
                      <SearchResultCard key={product.id} product={product} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {searchResults.pagination.totalPages > 1 && (
                    <div className="mt-8 flex justify-center">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={!searchResults.pagination.hasPrevPage}
                          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                        >
                          Previous
                        </Button>

                        {Array.from({ length: searchResults.pagination.totalPages }, (_, i) => i + 1).map((page) => (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                          >
                            {page}
                          </Button>
                        ))}

                        <Button
                          variant="outline"
                          size="sm"
                          disabled={!searchResults.pagination.hasNextPage}
                          onClick={() =>
                            setCurrentPage((prev) => Math.min(searchResults.pagination.totalPages, prev + 1))
                          }
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="py-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                    <SearchIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    We couldn't find any products matching "{query}". Try adjusting your search or filters.
                  </p>
                  <Button onClick={clearAllFilters}>Clear All Filters</Button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <SearchIcon className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">Enter a search term</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Type in the search box above to find products, categories, and more.
            </p>
          </div>
        )}
      </section>
    </>
  )
}

// Search Result Card Component
function SearchResultCard({ product }: { product: ProductSearchResult }) {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(product.price)

  return (
    <Link href={`/product/${product.slug}`} className="group">
      <div className="border rounded-lg overflow-hidden transition-all hover:shadow-md">
        <div className="relative aspect-square w-full overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
        <div className="p-4">
          <div className="text-xs text-muted-foreground mb-1 capitalize">{product.category}</div>
          <h3 className="font-medium text-base mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{product.description}</p>
          <div className="font-bold">{formattedPrice}</div>
        </div>
      </div>
    </Link>
  )
}
