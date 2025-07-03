"use client"

import { useState, useMemo, useCallback } from "react"

// Mock data for office furniture products since we're having issues with the data fetching
const officeProducts = [
  {
    id: "office-desk-1",
    name: "Executive Office Desk",
    slug: "executive-office-desk",
    price: 24999,
    discount: 10,
    rating: 4.8,
    isNew: true,
    category: "office",
    subcategory: "desks",
    images: ["/office-table-executive.png"],
    colors: ["Brown", "Black"],
    specifications: {
      material: "Engineered Wood with Veneer Finish",
      dimensions: "160cm x 80cm x 75cm",
      weight: "45kg",
      warranty: "3 years",
    },
    features: ["Spacious work surface", "Built-in cable management", "Premium finish", "Sturdy construction"],
    description:
      "Premium executive desk with ample workspace and elegant design. Perfect for home offices and executive suites.",
  },
  {
    id: "computer-desk-1",
    name: "Modern Computer Workstation",
    slug: "modern-computer-workstation",
    price: 18999,
    discount: 5,
    rating: 4.6,
    isNew: false,
    category: "office",
    subcategory: "workstations",
    images: ["/computer-workstation.png"],
    colors: ["White", "Oak"],
    specifications: {
      material: "Engineered Wood with Laminate Finish",
      dimensions: "120cm x 60cm x 75cm",
      weight: "35kg",
      warranty: "2 years",
    },
    features: ["Keyboard tray", "CPU stand", "Monitor shelf", "Cable organizers"],
    description:
      "Ergonomic computer workstation designed for productivity and comfort. Features multiple storage options and cable management.",
  },
  {
    id: "office-chair-1",
    name: "Ergonomic Office Chair",
    slug: "ergonomic-office-chair",
    price: 12999,
    discount: 0,
    rating: 4.9,
    isNew: true,
    category: "office",
    subcategory: "chairs",
    images: ["/designer-accent-chair.png"],
    colors: ["Black", "Grey", "Blue"],
    specifications: {
      material: "Mesh and High-Quality Fabric",
      dimensions: "65cm x 65cm x 120cm",
      weight: "15kg",
      warranty: "5 years",
    },
    features: ["Adjustable height", "Lumbar support", "Breathable mesh back", "360° swivel", "Armrest adjustment"],
    description:
      "Premium ergonomic chair designed for all-day comfort. Features multiple adjustment options to support proper posture.",
  },
]

export default function OfficeCategoryPage() {
  const categorySlug = "office"
  const categoryTitle = "Office Furniture"
  const categoryDescription =
    "Discover our collection of premium office furniture designed for productivity, comfort, and style. From executive desks to ergonomic chairs, find the perfect pieces to create an inspiring workspace."

  // Use mock data instead of fetching from a service that might require auth
  const products = useMemo(() => {
    return officeProducts
  }, [])

  // Calculate price range bounds
  const { minPrice, maxPrice } = useMemo(() => {
    if (products.length === 0) {
      return { minPrice: 0, maxPrice: 50000 } // Default values if no products
    }
    const min = Math.min(...products.map((p) => p.price))
    const max = Math.max(...products.map((p) => p.price))
    return { minPrice: min, maxPrice: max }
  }, [products])

  // State for filters
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice])
  const [materialFilters, setMaterialFilters] = useState<Record<string, boolean>>({})
  const [colorFilters, setColorFilters] = useState<Record<string, boolean>>({})
  const [sortOption, setSortOption] = useState("featured")

  // Extract unique materials and colors from products
  const materials = useMemo(() => {
    if (products.length === 0) return []
    return Array.from(
      new Set(products.map((product) => product.specifications.material.split(" with ")[0]).filter(Boolean)),
    )
  }, [products])

  const colors = useMemo(() => {
    if (products.length === 0) return []
    return Array.from(new Set(products.flatMap((product) => product.colors || [])))
  }, [products])

  // Filter handlers
  const handlePriceRangeChange = useCallback((range: [number, number]) => {
    setPriceRange(range)
  }, [])

  const handleMaterialFilter = useCallback((material: string, checked: boolean) => {
    setMaterialFilters((prev) => ({ ...prev, [material]: checked }))
  }, [])

  const handleColorFilter = useCallback((color: string, checked: boolean) => {
    setColorFilters((prev) => ({ ...prev, [color]: checked }))
  }, [])

  const handleSortChange = useCallback((value: string) => {
    setSortOption(value)
  }, [])

  // Clear all filters
  const clearAllFilters = useCallback(() => {
    setPriceRange([minPrice, maxPrice])
    setMaterialFilters({})
    setColorFilters({})
    setSortOption("featured")
  }, [minPrice, maxPrice])

  // Apply filters and get filtered products
  const filteredProducts = useMemo(() => {
    if (products.length === 0) {
      return []
    }

    let result = [...products]

    // Apply price filter
    result = result.filter((product) => {
      const finalPrice = product.discount ? product.price - (product.price * product.discount) / 100 : product.price
      return finalPrice >= priceRange[0] && finalPrice <= priceRange[1]
    })

    // Apply material filters if any are selected
    const activeMaterialFilters = Object.entries(materialFilters)
      .filter(([_, isActive]) => isActive)
      .map(([material]) => material)

    if (activeMaterialFilters.length > 0) {
      result = result.filter((product) =>
        activeMaterialFilters.some((material) => product.specifications.material.includes(material)),
      )
    }

    // Apply color filters if any are selected
    const activeColorFilters = Object.entries(colorFilters)
      .filter(([_, isActive]) => isActive)
      .map(([color]) => color)

    if (activeColorFilters.length > 0) {
      result = result.filter(
        (product) => product.colors && activeColorFilters.some((color) => product.colors?.includes(color)),
      )
    }

    // Apply sorting
    if (sortOption === "price-low") {
      result.sort((a, b) => a.price - b.price)
    } else if (sortOption === "price-high") {
      result.sort((a, b) => b.price - a.price)
    } else if (sortOption === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    } else if (sortOption === "newest") {
      result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1))
    }

    return result
  }, [products, priceRange, materialFilters, colorFilters, sortOption])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Office Furniture</h1>
        <p className="text-gray-600">
          Discover our collection of premium office furniture designed for productivity, comfort, and style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Static Product Cards */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="h-64 bg-gray-200 relative">
            {/* Static image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500">Executive Office Desk</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-lg">Executive Office Desk</h3>
            <p className="text-gray-500 text-sm mt-1">Engineered Wood with Veneer Finish</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="font-bold">₹24,999</span>
              <span className="text-green-600 text-sm">10% off</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="h-64 bg-gray-200 relative">
            {/* Static image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500">Modern Computer Workstation</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-lg">Modern Computer Workstation</h3>
            <p className="text-gray-500 text-sm mt-1">Engineered Wood with Laminate Finish</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="font-bold">₹18,999</span>
              <span className="text-green-600 text-sm">5% off</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="h-64 bg-gray-200 relative">
            {/* Static image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500">Ergonomic Office Chair</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-lg">Ergonomic Office Chair</h3>
            <p className="text-gray-500 text-sm mt-1">Mesh and High-Quality Fabric</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="font-bold">₹12,999</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Featured Office Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2">Modern Workstations</h3>
            <p className="text-gray-600 text-sm">
              Ergonomic designs for maximum productivity and comfort during long work hours.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2">Executive Desks</h3>
            <p className="text-gray-600 text-sm">
              Premium desks that make a statement and provide ample workspace for executives.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-medium text-lg mb-2">Ergonomic Seating</h3>
            <p className="text-gray-600 text-sm">Comfortable chairs designed for proper posture and all-day support.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
