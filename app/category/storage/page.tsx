"use client";

import { useState } from "react";
import Image from "next/image";

export default function StoragePage() {
  const product = {
    name: "Spacious Almirah",
    desc:
      "Spacious and elegant almirah with sturdy shelves and secure lock — keeps your clothes and essentials organized beautifully. Crafted with high-quality engineered wood, this almirah combines durability with timeless style.",
    price: 1350,
    unit: "sqft",
    images: [
      "/products/storage/st1.jpg",
      "/products/storage/st2.jpg",
      "/products/storage/st4.jpg",
      "/products/storage/st5.jpg",
    ],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-4 text-center">{product.name}</h1>
      <p className="mb-8 text-gray-600 max-w-2xl mx-auto text-center">
        Keep your home neat and organized with our premium storage options —
        crafted for both durability and style.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ✅ Left: Images */}
        <div>
          <div className="w-full aspect-[4/5] relative mb-4 overflow-hidden rounded-xl shadow-md bg-white">
            <Image
              src={mainImage}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                  mainImage === img ? "border-green-600" : "border-gray-200"
                } hover:border-gray-400`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* ✅ Right: Details */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Product Details</h2>

          <ul className="mb-4 space-y-1 text-gray-700 text-sm">
            <li>
              ✅ <strong>Type:</strong> Spacious Wooden Almirah
            </li>
            <li>
              ✅ <strong>Material:</strong> High-Quality Engineered Wood
            </li>
            <li>
              ✅ <strong>Shelves:</strong> Multiple Sturdy Shelves
            </li>
            <li>
              ✅ <strong>Lock:</strong> Secure Locking System
            </li>
            <li>
              ✅ <strong>Finish:</strong> Smooth Premium Polish
            </li>
            <li>
              ✅ <strong>Warranty:</strong> 5 Years
            </li>
          </ul>

          <p className="text-base font-bold mb-3">
            Price: ₹{product.price.toLocaleString()}/{product.unit}
          </p>

          <a
            href={`https://wa.me/917651847029?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
              product.name
            )}%20priced%20at%20₹${product.price.toLocaleString()}/${product.unit}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition mb-6 text-sm"
          >
            Order on WhatsApp
          </a>

          <div>
            <h3 className="text-lg font-semibold mb-1">Product Description</h3>
            <p className="text-gray-700 text-sm leading-tight">
              {product.desc}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
