import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Beds & Mattresses | Star Furniture",
  description:
    "Explore our selection of particle beds and orthopedic mattresses at best prices.",
}

export default function BedsPage() {
  const products = [
    {
      id: 1,
      name: "Double Particle Bed",
      desc: "Modern double bed made with durable particle board, 6×6 size.",
      price: 20000,
      image: "/images/particle-bed.jpg",
    },
    {
      id: 2,
      name: "Orthopedic Mattress",
      desc: "High-density foam mattress for superior back support and comfort.",
      price: 18000,
      image: "/images/matters11.png",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Beds & Mattresses</h1>
      <p className="mb-8 text-gray-600">
        Best value beds and mattresses for your comfortable sleep.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow p-4 flex flex-col"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
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
              className="inline-block bg-green-600 hover:bg-green-700 text-white text-center font-bold px-4 py-2 rounded-full"
            >
              Order on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
