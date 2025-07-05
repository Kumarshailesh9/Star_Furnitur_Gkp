import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Dining Sets | Star Furniture",
  description: "Elegant dining tables at the best price.",
}

export default function DiningPage() {
  const product = {
    name: "Dining Table",
    desc:
      "Elegant dining table made with premium wood and a polished finish — perfect for family meals and gatherings.",
    price: 28999,
    image: "/images/dining-table.jpg", // Make sure you have this image in your public/images folder
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Dining Sets</h1>
      <p className="mb-8 text-gray-600">
        Bring style and comfort to your dining space with our premium dining table.
      </p>

      <div className="border rounded-lg shadow p-6 max-w-md mx-auto">
        <div className="relative w-full h-64 mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.desc}</p>
        <div className="text-lg font-bold mb-4">
          Price: ₹{product.price.toLocaleString()}
        </div>
        <a
          href={`https://wa.me/917651847029?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
            product.name
          )}%20priced%20at%20₹${product.price.toLocaleString()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white text-center font-bold px-4 py-3 rounded-full w-full"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  )
}
