import type { ProductSearchResult, SearchFilters, SearchResults } from "@/types/search"

// Sample product data for search
const products: ProductSearchResult[] = [
  {
    id: "1",
    name: "Comfort Plus Queen Bed",
    slug: "comfort-plus-bed",
    description: "Experience the perfect blend of comfort and style with our Comfort Plus Queen Bed.",
    price: 24999,
    category: "beds",
    image: "/minimalist-wood-bed.png",
    tags: ["bed", "queen", "wooden", "storage", "bedroom"],
  },
  {
    id: "2",
    name: "Serenity Single Bed",
    slug: "serenity-single-bed",
    description: "A compact and elegant single bed perfect for small spaces.",
    price: 18999,
    category: "beds",
    image: "/simple-wooden-bed.png",
    tags: ["bed", "single", "wooden", "bedroom"],
  },
  {
    id: "3",
    name: "Royal King Size Bed",
    slug: "royal-king-bed",
    description: "Luxurious king size bed with premium craftsmanship.",
    price: 32999,
    category: "beds",
    image: "/luxurious-bedroom-retreat.png",
    tags: ["bed", "king", "wooden", "luxury", "bedroom"],
  },
  {
    id: "4",
    name: "Comfort Mattress (Queen)",
    slug: "comfort-mattress",
    description: "Premium quality mattress for a restful sleep experience.",
    price: 12999,
    category: "mattresses",
    image: "/placeholder.svg?key=yp542",
    tags: ["mattress", "queen", "bedroom", "sleep"],
  },
  {
    id: "5",
    name: "Luxe 3-Seater Sofa",
    slug: "luxe-sofa",
    description: "Elegant 3-seater sofa with premium upholstery.",
    price: 32999,
    category: "sofas",
    image: "/elegant-three-seater-sofa.png",
    tags: ["sofa", "seating", "living room", "3-seater"],
  },
  {
    id: "6",
    name: "Classic Dining Set (6 Seater)",
    slug: "classic-dining-set",
    description: "Beautiful 6-seater dining set for family gatherings.",
    price: 28999,
    category: "dining",
    image: "/wooden-6-seater-dining-set.png",
    tags: ["dining", "table", "chairs", "6-seater", "wooden"],
  },
  {
    id: "7",
    name: "Premium Wardrobe",
    slug: "premium-wardrobe",
    description: "Spacious wardrobe with elegant design and ample storage.",
    price: 18999,
    category: "storage",
    image: "/minimalist-wooden-wardrobe.png",
    tags: ["wardrobe", "storage", "bedroom", "wooden"],
  },
  {
    id: "8",
    name: "Luxe Storage Bed (Queen)",
    slug: "luxe-storage-bed",
    description: "Queen size bed with convenient storage drawers.",
    price: 28999,
    category: "beds",
    image: "/placeholder.svg?key=putna",
    tags: ["bed", "queen", "storage", "bedroom"],
  },
  {
    id: "9",
    name: "Premium Orthopedic Mattress",
    slug: "orthopedic-mattress",
    description: "Orthopedic mattress designed for back support and comfort.",
    price: 15999,
    category: "mattresses",
    image: "/placeholder.svg?key=77zvk",
    tags: ["mattress", "orthopedic", "bedroom", "sleep"],
  },
  {
    id: "10",
    name: "Classic Wooden Bed (King)",
    slug: "classic-wooden-bed",
    description: "Traditional king size wooden bed with timeless design.",
    price: 26999,
    category: "beds",
    image: "/placeholder.svg?key=hyazk",
    tags: ["bed", "king", "wooden", "bedroom"],
  },
  {
    id: "11",
    name: "Kids Single Bed with Storage",
    slug: "kids-bed-storage",
    description: "Compact single bed with storage, perfect for children's rooms.",
    price: 16999,
    category: "beds",
    image: "/placeholder.svg?key=ycxpg",
    tags: ["bed", "single", "kids", "storage", "bedroom"],
  },
  {
    id: "12",
    name: "Luxury Canopy Bed",
    slug: "luxury-canopy-bed",
    description: "Elegant canopy bed for a luxurious bedroom experience.",
    price: 42999,
    category: "beds",
    image: "/placeholder.svg?key=qpzxm",
    tags: ["bed", "canopy", "luxury", "bedroom"],
  },
]

// Search products by query
export async function searchProducts(
  query: string,
  options: { limit?: number; offset?: number; filters?: SearchFilters } = {},
): Promise<ProductSearchResult[]> {
  const { limit = 10, offset = 0, filters } = options

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Normalize query
  const normalizedQuery = query.toLowerCase().trim()

  // Filter products by query
  let results = products.filter((product) => {
    // Search in name, description, and tags
    const matchesName = product.name.toLowerCase().includes(normalizedQuery)
    const matchesDescription = product.description.toLowerCase().includes(normalizedQuery)
    const matchesTags = product.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))

    return matchesName || matchesDescription || matchesTags
  })

  // Apply category filter if provided
  if (filters?.category) {
    results = results.filter((product) => product.category === filters.category)
  }

  // Apply price filter if provided
  if (filters?.priceRange) {
    const [min, max] = filters.priceRange
    results = results.filter((product) => product.price >= min && product.price <= max)
  }

  // Apply sorting
  if (filters?.sort) {
    switch (filters.sort) {
      case "price-asc":
        results.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        results.sort((a, b) => b.price - a.price)
        break
      case "name-asc":
        results.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "name-desc":
        results.sort((a, b) => b.name.localeCompare(a.name))
        break
      // Default is relevance, which is the order we already have
    }
  }

  // Apply pagination
  return results.slice(offset, offset + limit)
}

// Get search results with metadata
export async function getSearchResults(
  query: string,
  options: { limit?: number; page?: number; filters?: SearchFilters } = {},
): Promise<SearchResults> {
  const { limit = 10, page = 1, filters } = options
  const offset = (page - 1) * limit

  // Get all matching products to calculate total
  const allResults = await searchProducts(query, { filters })
  const total = allResults.length

  // Get paginated results
  const results = await searchProducts(query, { limit, offset, filters })

  return {
    results,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasNextPage: page * limit < total,
      hasPrevPage: page > 1,
    },
    query,
    filters: filters || {},
  }
}

// Get category options for filtering
export function getSearchCategories() {
  return [
    { label: "Beds & Mattresses", value: "beds" },
    { label: "Sofas & Sectionals", value: "sofas" },
    { label: "Dining Sets", value: "dining" },
    { label: "Storage Solutions", value: "storage" },
    { label: "Office Furniture", value: "office" },
    { label: "Tables", value: "tables" },
    { label: "Chairs", value: "chairs" },
    { label: "Kitchen", value: "kitchen" },
    { label: "Other Furniture", value: "furniture" },
  ]
}
