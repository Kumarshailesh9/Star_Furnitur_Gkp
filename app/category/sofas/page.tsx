import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Sofas | Star Furniture",
  description: "Shop our stylish and comfortable sofa sets at great prices.",
}

export default function SofasPage() {
  const product = {
    name: "5 Seater Sofa",
    desc:
      "Comfortable and elegant 5-seater sofa with plush cushions and a sturdy wooden frame — perfect for modern living rooms.",
    price: 18999,
    image: "/images/sofa-set.png", // Make sure you have this image in your public/images folder
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Sofas</h1>
      <p className="mb-8 text-gray-600">
        Upgrade your living room with our stylish and cozy sofa sets.
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
