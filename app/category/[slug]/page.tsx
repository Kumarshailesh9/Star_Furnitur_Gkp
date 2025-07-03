"use client"

import { useState, useMemo, useCallback } from "react"
import Link from "next/link"
import { ChevronRight, Filter } from "lucide-react"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { PriceRangeSlider } from "@/components/price-range-slider"
import { getProductsByCategory } from "@/lib/products"

const categoryDescriptions: Record<string, string> = {
  beds: "Discover our collection of premium beds and mattresses designed for ultimate comfort and style. From single beds to king-size options, find the perfect match for your bedroom.",
  sofas:
    "Explore our range of elegant sofas and sectionals that combine comfort with style. Perfect for your living room, our sofas are crafted with premium materials for long-lasting durability.",
  dining:
    "Browse our collection of dining sets that bring elegance to your dining experience. From compact 2-seater options to grand 8-seater tables, find the perfect dining set for your home.",
  storage:
    "Discover practical and stylish storage solutions for your home. From wardrobes and bookshelves to TV units and ottomans, our storage furniture helps you organize your space with elegance.",
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categorySlug = params.slug

  // Get products for this category - memoize to prevent unnecessary recalculations
  const products = useMemo(() => {
    const categoryProducts = getProductsByCategory(categorySlug)
    console.log(`Category ${categorySlug}: Found ${categoryProducts.length} products`)
    return categoryProducts
  }, [categorySlug])

  const categoryTitle = useMemo(() => {
    const title = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)
    return title === "Storage" ? "Storage Solutions" : title
  }, [categorySlug])

  const categoryDescription = useMemo(
    () =>
      categoryDescriptions[categorySlug] ||
      "Browse our collection of premium furniture designed for comfort, style, and durability.",
    [categorySlug],
  )

  // Calculate price range bounds once
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
  const [sizeFilters, setSizeFilters] = useState<Record<string, boolean>>({})
  const [sortOption, setSortOption] = useState("featured")

  // Extract unique materials, colors, and sizes from products - memoize to prevent recalculation
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

  const sizes = useMemo(() => {
    if (products.length === 0) return []
    return Array.from(new Set(products.flatMap((product) => product.sizes || [])))
  }, [products])

  // Memoize filter handlers to prevent recreating functions on each render
  const handlePriceRangeChange = useCallback((range: [number, number]) => {
    setPriceRange(range)
  }, [])

  const handleMaterialFilter = useCallback((material: string, checked: boolean) => {
    setMaterialFilters((prev) => ({ ...prev, [material]: checked }))
  }, [])

  const handleColorFilter = useCallback((color: string, checked: boolean) => {
    setColorFilters((prev) => ({ ...prev, [color]: checked }))
  }, [])

  const handleSizeFilter = useCallback((size: string, checked: boolean) => {
    setSizeFilters((prev) => ({ ...prev, [size]: checked }))
  }, [])

  const handleSortChange = useCallback((value: string) => {
    setSortOption(value)
  }, [])

  // Clear all filters
  const clearAllFilters = useCallback(() => {
    setPriceRange([minPrice, maxPrice])
    setMaterialFilters({})
    setColorFilters({})
    setSizeFilters({})
    setSortOption("featured")
  }, [minPrice, maxPrice])

  // Apply filters and get filtered products
  const filteredProducts = useMemo(() => {
    if (products.length === 0) {
      console.log("No products to filter")
      return []
    }

    let result = [...products]

    // Apply price filter
    result = result.filter((product) => {
      const finalPrice = product.discount ? product.price - (product.price * product.discount) / 100 : product.price
      return finalPrice >= priceRange[0] && finalPrice <= priceRange[1]
    })
    console.log(`After price filtering: ${result.length} products remain`)

    // Apply material filters if any are selected
    const activeMaterialFilters = Object.entries(materialFilters)
      .filter(([_, isActive]) => isActive)
      .map(([material]) => material)

    if (activeMaterialFilters.length > 0) {
      result = result.filter((product) =>
        activeMaterialFilters.some((material) => product.specifications.material.includes(material)),
      )
      console.log(`After material filtering: ${result.length} products remain`)
    }

    // Apply color filters if any are selected
    const activeColorFilters = Object.entries(colorFilters)
      .filter(([_, isActive]) => isActive)
      .map(([color]) => color)

    if (activeColorFilters.length > 0) {
      result = result.filter(
        (product) => product.colors && activeColorFilters.some((color) => product.colors?.includes(color)),
      )
      console.log(`After color filtering: ${result.length} products remain`)
    }

    // Apply size filters if any are selected
    const activeSizeFilters = Object.entries(sizeFilters)
      .filter(([_, isActive]) => isActive)
      .map(([size]) => size)

    if (activeSizeFilters.length > 0) {
      result = result.filter(
        (product) => product.sizes && activeSizeFilters.some((size) => product.sizes?.includes(size)),
      )
      console.log(`After size filtering: ${result.length} products remain`)
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

    console.log(`Final filtered products: ${result.length}`)
    return result
  }, [products, priceRange, materialFilters, colorFilters, sizeFilters, sortOption])

  // If no products found, show a message
  if (products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">No products found in {categoryTitle} category</h1>
        <p className="text-muted-foreground mb-6">
          We couldn't find any products in this category. Please check back later or browse other categories.
        </p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      {/* Breadcrumb - Hidden on small screens */}
      <div className="container mx-auto px-4 py-2 md:py-4 text-xs md:text-sm hidden sm:block">
        <div className="flex items-center">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 md:h-4 md:w-4 mx-1 md:mx-2 text-muted-foreground" />
          <span className="text-foreground font-medium">{categoryTitle}</span>
        </div>
      </div>

      {/* Category Header */}
      <section className="bg-muted py-4 md:py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">{categoryTitle}</h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-3xl">{categoryDescription}</p>
        </div>
      </section>

      {/* Products Grid with Filters */}
      <section className="container mx-auto px-4 py-4 md:py-8">
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

              <Accordion
                type="multiple"
                defaultValue={["price", "material", "color", "size"].filter((section) => {
                  if (section === "color") return colors.length > 0
                  if (section === "size") return sizes.length > 0
                  return true
                })}
              >
                {/* <AccordionItem value="price">
                  <AccordionTrigger>Price Range</AccordionTrigger>
                  <AccordionContent>
                    <PriceRangeSlider
                      min={minPrice}
                      max={maxPrice}
                      step={1000}
                      defaultValue={priceRange}
                      onChange={handlePriceRangeChange}
                    />
                  </AccordionContent>
                </AccordionItem> */}

                {materials.length > 0 && (
                  <AccordionItem value="material">
                    <AccordionTrigger>Material</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {materials.map((material, index) => (
                          <div key={material} className="flex items-center space-x-2">
                            <Checkbox
                              id={`material-${index}`}
                              checked={materialFilters[material] || false}
                              onCheckedChange={(checked) => handleMaterialFilter(material, checked === true)}
                            />
                            <Label htmlFor={`material-${index}`}>{material}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )}

                {colors.length > 0 && (
                  <AccordionItem value="color">
                    <AccordionTrigger>Color</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {colors.map((color, index) => (
                          <div key={color} className="flex items-center space-x-2">
                            <Checkbox
                              id={`color-${index}`}
                              checked={colorFilters[color] || false}
                              onCheckedChange={(checked) => handleColorFilter(color, checked === true)}
                            />
                            <Label htmlFor={`color-${index}`}>{color}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )}

                {sizes.length > 0 && (
                  <AccordionItem value="size">
                    <AccordionTrigger>Size</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {sizes.map((size, index) => (
                          <div key={size} className="flex items-center space-x-2">
                            <Checkbox
                              id={`size-${index}`}
                              checked={sizeFilters[size] || false}
                              onCheckedChange={(checked) => handleSizeFilter(size, checked === true)}
                            />
                            <Label htmlFor={`size-${index}`}>{size}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-3 md:gap-4">
              <div>
                <p className="text-xs md:text-sm text-muted-foreground">Showing {filteredProducts.length} products</p>
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
                        <Button variant="ghost" size="sm" className="h-8 text-xs md:text-sm" onClick={clearAllFilters}>
                          Clear All
                        </Button>
                      </div>

                      <div className="flex-1 overflow-auto p-4">
                        <Accordion
                          type="multiple"
                          defaultValue={["price", "material", "color", "size"].filter((section) => {
                            if (section === "color") return colors.length > 0
                            if (section === "size") return sizes.length > 0
                            return true
                          })}
                        >
                          {/* <AccordionItem value="price">
                            <AccordionTrigger className="text-sm md:text-base">Price Range</AccordionTrigger>
                            <AccordionContent>
                              <PriceRangeSlider
                                min={minPrice}
                                max={maxPrice}
                                step={1000}
                                defaultValue={priceRange}
                                onChange={handlePriceRangeChange}
                              />
                            </AccordionContent>
                          </AccordionItem> */}

                          {materials.length > 0 && (
                            <AccordionItem value="material">
                              <AccordionTrigger className="text-sm md:text-base">Material</AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-2">
                                  {materials.map((material, index) => (
                                    <div key={material} className="flex items-center space-x-2">
                                      <Checkbox
                                        id={`m-material-${index}`}
                                        checked={materialFilters[material] || false}
                                        onCheckedChange={(checked) => handleMaterialFilter(material, checked === true)}
                                      />
                                      <Label htmlFor={`m-material-${index}`} className="text-sm">
                                        {material}
                                      </Label>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          )}

                          {colors.length > 0 && (
                            <AccordionItem value="color">
                              <AccordionTrigger className="text-sm md:text-base">Color</AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-2">
                                  {colors.map((color, index) => (
                                    <div key={color} className="flex items-center space-x-2">
                                      <Checkbox
                                        id={`m-color-${index}`}
                                        checked={colorFilters[color] || false}
                                        onCheckedChange={(checked) => handleColorFilter(color, checked === true)}
                                      />
                                      <Label htmlFor={`m-color-${index}`} className="text-sm">
                                        {color}
                                      </Label>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          )}

                          {sizes.length > 0 && (
                            <AccordionItem value="size">
                              <AccordionTrigger className="text-sm md:text-base">Size</AccordionTrigger>
                              <AccordionContent>
                                <div className="space-y-2">
                                  {sizes.map((size, index) => (
                                    <div key={size} className="flex items-center space-x-2">
                                      <Checkbox
                                        id={`m-size-${index}`}
                                        checked={sizeFilters[size] || false}
                                        onCheckedChange={(checked) => handleSizeFilter(size, checked === true)}
                                      />
                                      <Label htmlFor={`m-size-${index}`} className="text-sm">
                                        {size}
                                      </Label>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          )}
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

                {/* Sort Dropdown */}
                <Select value={sortOption} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-full sm:w-[150px] md:w-[180px] h-8 md:h-9 text-xs md:text-sm">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.images[0].src}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    href={`/product/${product.slug}`}
                    discount={product.discount}
                    isNew={product.isNew}
                  />
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <p className="text-lg font-medium">No products found</p>
                  <p className="text-muted-foreground mt-2">Try adjusting your filters</p>
                  <Button variant="outline" className="mt-4" onClick={clearAllFilters}>
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
