"use client"

import { useState, useMemo } from "react"
import type { Product } from "@/lib/products"
import ProductCard from "@/components/product-card"

interface CategoryProductsProps {
  products: Product[]
  initialFilters?: {
    priceRange?: [number, number]
    categories?: string[]
    materials?: string[]
    colors?: string[]
    sizes?: string[]
  }
}

export default function CategoryProducts({ products, initialFilters }: CategoryProductsProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>(
    initialFilters?.priceRange || [
      Math.min(...products.map((p) => p.price)),
      Math.max(...products.map((p) => p.price)),
    ],
  )

  const [materialFilters, setMaterialFilters] = useState<Record<string, boolean>>({})
  const [colorFilters, setColorFilters] = useState<Record<string, boolean>>({})
  const [sizeFilters, setSizeFilters] = useState<Record<string, boolean>>({})

  // Get all unique materials, colors, and sizes
  const allMaterials = useMemo(() => {
    const materials = new Set<string>()
    products.forEach((product) => {
      if (product.specifications.material) {
        const materialParts = product.specifications.material.split(" with ")
        materialParts.forEach((part) => materials.add(part.trim()))
      }
    })
    return Array.from(materials)
  }, [products])

  const allColors = useMemo(() => {
    const colors = new Set<string>()
    products.forEach((product) => {
      if (product.colors) {
        product.colors.forEach((color) => colors.add(color))
      }
    })
    return Array.from(colors)
  }, [products])

  const allSizes = useMemo(() => {
    const sizes = new Set<string>()
    products.forEach((product) => {
      if (product.sizes) {
        product.sizes.forEach((size) => sizes.add(size))
      }
    })
    return Array.from(sizes)
  }, [products])

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Apply price filter
      const finalPrice = product.discount ? product.price - (product.price * product.discount) / 100 : product.price

      if (finalPrice < priceRange[0] || finalPrice > priceRange[1]) {
        return false
      }

      // Apply material filters if any are selected
      const activeMaterialFilters = Object.entries(materialFilters)
        .filter(([_, isActive]) => isActive)
        .map(([material]) => material)

      if (activeMaterialFilters.length > 0) {
        const productMaterial = product.specifications.material
        if (!activeMaterialFilters.some((material) => productMaterial.includes(material))) {
          return false
        }
      }

      // Apply color filters if any are selected
      const activeColorFilters = Object.entries(colorFilters)
        .filter(([_, isActive]) => isActive)
        .map(([color]) => color)

      if (activeColorFilters.length > 0 && product.colors) {
        if (!product.colors.some((color) => activeColorFilters.includes(color))) {
          return false
        }
      }

      // Apply size filters if any are selected
      const activeSizeFilters = Object.entries(sizeFilters)
        .filter(([_, isActive]) => isActive)
        .map(([size]) => size)

      if (activeSizeFilters.length > 0 && product.sizes) {
        if (!product.sizes.some((size) => activeSizeFilters.includes(size))) {
          return false
        }
      }

      return true
    })
  }, [products, priceRange, materialFilters, colorFilters, sizeFilters])

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
      {filteredProducts.map((product) => (
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
      ))}
      {filteredProducts.length === 0 && (
        <div className="col-span-full py-12 text-center">
          <p className="text-lg font-medium">No products found</p>
          <p className="text-muted-foreground mt-2">Try adjusting your filters</p>
        </div>
      )}
    </div>
  )
}
