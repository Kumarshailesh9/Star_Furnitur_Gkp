"use client";

import { useState } from "react";
import Image from "next/image";

export default function SofasPage() {
  const product = {
    name: "5 Seater Sofa",
    desc:
      "Comfortable and elegant 5-seater sofa with plush cushions and a sturdy wooden frame — perfect for modern living rooms.",
    longDesc: `
      Transform your living room into a haven of comfort and sophistication with our beautifully crafted 5-seater sofa. Designed to suit modern interiors, this sofa combines plush, high-density cushions with a sturdy wooden frame to deliver both durability and luxurious seating comfort for your entire family.

      Upholstered in premium fabric that is soft to the touch yet easy to maintain, this sofa adds a touch of timeless elegance to any space. The generously padded seats and backrest provide optimal support, making it ideal for long hours of lounging, movie nights, or entertaining guests in style.

      The strong wooden frame ensures long-lasting strength and stability, while the thoughtfully designed armrests and spacious seating arrangement allow everyone to relax and unwind with ease. Its neutral color tone and contemporary design blend seamlessly with a variety of décor styles — from minimalistic to classic modern.

      Whether you’re furnishing a new home or upgrading your existing living area, this 5-seater sofa is the perfect choice for those who value both functionality and aesthetics. It’s more than just furniture — it’s a statement piece that brings people together and elevates your living space.

      Experience true relaxation and create lasting memories with family and friends on this elegant, comfortable sofa that’s built to stand the test of time.
    `,
    price: 27999,
    images: [
      "/images/sofa-set.png",
      "/images/sofa1.jpg",
      "/images/sofa2.jpg",
    ],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Sofas</h1>
      <p className="mb-8 text-gray-600 max-w-2xl">
        Upgrade your living room with our stylish and cozy sofa sets.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* ✅ Left: Main Image + Thumbnails */}
        <div>
          <div className="w-full flex justify-center items-center mb-4 overflow-hidden rounded-xl shadow-md bg-white">
            <Image
              src={mainImage}
              alt={product.name}
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>

          {product.images.length > 1 && (
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
          )}
        </div>

        {/* ✅ Right: Details */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Product Details</h2>

          <ul className="mb-4 space-y-1 text-gray-700 text-sm leading-tight">
            <li>✅ <strong>Type:</strong> 5-Seater Sofa Set</li>
            <li>✅ <strong>Material:</strong> Premium Fabric Upholstery</li>
            <li>✅ <strong>Cushion:</strong> Plush, High-Comfort Cushions</li>
            <li>✅ <strong>Frame:</strong> Sturdy Wooden Frame</li>
            <li>✅ <strong>Design:</strong> Modern & Elegant Design</li>
            <li>✅ <strong>Warranty:</strong> 1 Years</li>
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
            <p className="text-gray-700 text-sm leading-tight mb-2">{product.desc}</p>
            {product.longDesc.trim().split("\n").map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 text-sm leading-tight mb-2">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
