import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface PremiumProductCardProps {
  name: string
  price: number
  image: string
  rating: number
  reviewCount: number
  href: string
  discount?: number
  isNew?: boolean
  isPremium?: boolean
}

export default function PremiumProductCard({
  name,
  price,
  image,
  rating,
  reviewCount,
  href,
  discount,
  isNew,
  isPremium = false,
}: PremiumProductCardProps) {
  const discountedPrice = discount ? price - (price * discount) / 100 : price

  return (
    <Link href={href} className="group">
      <div className="relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
        {/* Premium Badge */}
        {isPremium && (
          <div className="absolute top-0 left-0 z-10 w-full">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold text-xs py-1 px-3 shadow-md flex items-center justify-center">
              <span className="mr-1">★</span> PREMIUM PRODUCT <span className="ml-1">★</span>
            </div>
          </div>
        )}

        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-2 right-2 z-10">
            <Badge className="bg-red-500 hover:bg-red-600">{discount}% OFF</Badge>
          </div>
        )}

        {/* New Badge */}
        {isNew && !discount && (
          <div className="absolute top-2 right-2 z-10">
            <Badge className="bg-blue-500 hover:bg-blue-600">NEW</Badge>
          </div>
        )}

        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-medium text-sm sm:text-base line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">{name}</h3>

          <div className="mt-1 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 sm:h-4 sm:w-4 ${
                    i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-1 text-xs text-muted-foreground">({reviewCount})</span>
          </div>

          <div className="mt-2 flex items-center">
            {discount ? (
              <>
                <span className="font-semibold text-sm sm:text-base">₹{discountedPrice.toLocaleString()}</span>
                <span className="ml-1 text-xs text-muted-foreground line-through">₹{price.toLocaleString()}</span>
              </>
            ) : (
              <span className="font-semibold text-sm sm:text-base">₹{price.toLocaleString()}</span>
            )}
          </div>

          {/* Warranty Badge for Premium Products */}
          {isPremium && (
            <div className="mt-2 bg-green-50 text-green-700 text-xs px-2 py-1 rounded-sm inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              7-Year Warranty
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
