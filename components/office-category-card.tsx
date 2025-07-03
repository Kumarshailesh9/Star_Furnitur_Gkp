"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

interface OfficeCategoryCardProps {
  title: string
  image: string
  href: string
}

export default function OfficeCategoryCard({ title, image, href }: OfficeCategoryCardProps) {
  return (
    <Link href={href} className="block h-full">
      <motion.div
        className="relative h-full overflow-hidden rounded-lg border bg-background hover:shadow-md transition-all"
        whileHover={{ y: -5 }}
      >
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 w-full p-3 md:p-4">
          <h3 className="font-medium text-base md:text-lg text-white">{title}</h3>
        </div>
      </motion.div>
    </Link>
  )
}
