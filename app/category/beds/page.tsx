"use client";

import { useState } from "react";
import Image from "next/image";

export default function BedsPage() {
  const product = {
    name: "Double Particle Bed",
    desc: "Modern double bed made with durable particle board, 6×6 size.",
    price: 56000,
    images: [
      "/images/particle-bed.jpg",
      "/products/beds/bed1.jpg",
      
    ],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {product.name}
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* ✅ Left: Main Image + Thumbnails */}
        <div className="flex flex-col">
          <div className="w-full flex justify-center items-center mb-4 overflow-hidden rounded-xl shadow-md bg-white">
            <Image
              src={mainImage}
              alt={product.name}
              width={500}
              height={400}
              className="max-w-full h-auto object-contain"
            />
          </div>

          <div className="flex gap-4 overflow-x-auto hide-scrollbar">
            {product.images.map((img, idx) => (
              <div
                key={idx}
                className={`w-24 h-24 flex-shrink-0 rounded-md overflow-hidden border-2 cursor-pointer transition-all duration-200 ${
                  mainImage === img ? "border-green-600" : "border-transparent"
                } hover:border-gray-400`}
                onClick={() => setMainImage(img)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Right: Product Details */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Product Details</h2>

          <ul className="mb-4 space-y-1 text-gray-700 text-sm leading-tight">
            <li>
              ✅ <strong>Type:</strong> Double Particle Board Bed
            </li>
            <li>
              ✅ <strong>Size:</strong> 6×6 Feet
            </li>
            <li>
              ✅ <strong>Material:</strong> High-Quality Engineered Wood
            </li>
            <li>
              ✅ <strong>Finish:</strong> Premium Finish, Smooth Surface
            </li>
            <li>
              ✅ <strong>Warranty:</strong> 1 Years
            </li>
          </ul>

          <p className="text-base font-bold mb-3">
            Price: ₹{product.price.toLocaleString()}
          </p>

          <a
            href={`https://wa.me/917651847029?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
              product.name
            )}%20priced%20at%20₹${product.price.toLocaleString()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition mb-6 text-sm"
          >
            Order on WhatsApp
          </a>

          <div>
            <h3 className="text-lg font-semibold mb-1">Product Description</h3>
            <p className="text-gray-700 mb-2 text-sm leading-tight">
              Bring home comfort and style with our double particle bed,
              crafted from durable engineered wood. Perfect for modern bedrooms,
              this bed features a spacious 6×6 design, premium finish,
              and sturdy build quality.
            </p>
            <p className="text-gray-700 mb-2 text-sm leading-tight">
              Designed to last, the bed comes with a 5-year warranty and blends
              seamlessly with your home décor. Its elegant look and robust
              structure make it an ideal choice for restful nights.
            </p>
            <p className="text-gray-700 text-sm leading-tight">
              Upgrade your bedroom space with this stylish yet practical bed
              that offers great value and comfort at the best price.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
