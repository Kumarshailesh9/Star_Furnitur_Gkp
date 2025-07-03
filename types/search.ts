export interface ProductSearchResult {
  id: string
  name: string
  slug: string
  description: string
  price: number
  category: string
  image: string
  tags: string[]
}

export interface SearchFilters {
  category?: string
  priceRange?: [number, number]
  sort?: "relevance" | "price-asc" | "price-desc" | "name-asc" | "name-desc"
}

export interface SearchPagination {
  total: number
  page: number
  limit: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export interface SearchResults {
  results: ProductSearchResult[]
  pagination: SearchPagination
  query: string
  filters: SearchFilters
}
