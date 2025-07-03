import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface CategoryCardProps {
  title: string
  image: string
  href: string
}

export default function CategoryCard({ title, image, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group relative overflow-hidden rounded-lg border h-full flex flex-col">
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
      </div>
      <div className="flex flex-col justify-between p-3 md:p-4 flex-grow">
        <h3 className="font-semibold text-base md:text-lg mb-2">{title}</h3>
        <div className="mt-auto">
          <span className="inline-flex items-center text-xs md:text-sm text-primary font-medium group-hover:underline">
            Shop Now <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}
