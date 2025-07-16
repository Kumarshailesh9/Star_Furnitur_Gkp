"use client";

import { useState } from "react";

export default function PremiumOrthopedicMattressPage() {
  const images = [
    "/products/mat/mat1.jpg",
    "/products/mat/mat2.jpg",
    "/products/mat/mat3.jpg",
    "/products/mat/mat4.jpg",
    "/products/mat/mat5.jpg",
    "/products/mat/mat6.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Premium Orthopedic Mattress
      </h1>

      {/* ✅ Mobile: 1 column, MD+: 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* ✅ Left: Images */}
        <div className="flex flex-col">
          <div className="w-full flex justify-center items-center mb-4 overflow-hidden rounded-xl shadow-md bg-white">
            <img
              src={mainImage}
              alt="Premium Orthopedic Mattress"
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden border-2 cursor-pointer transition-all duration-200 ${
                  mainImage === img ? "border-green-600" : "border-transparent"
                } hover:border-gray-400`}
                onClick={() => setMainImage(img)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Right: Details */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Product Details</h2>

          <ul className="mb-4 space-y-1 text-gray-700 text-sm leading-tight">
            <li>✅ <strong>Type:</strong> Premium Orthopedic Mattress</li>
            <li>✅ <strong>Material:</strong> High-Density Foam + Memory Foam Layers</li>
            <li>✅ <strong>Support:</strong> Superior Spine Support & Comfort</li>
            <li>✅ <strong>Size:</strong> 72×70 inches (King Size)</li>
            <li>✅ <strong>Features:</strong> Breathable Fabric, Anti-Sag Technology</li>
            <li>✅ <strong>Warranty:</strong> 5 Years</li>
          </ul>

          <p className="text-base font-bold mb-3">Price: ₹25,000</p>

          <a
            href="https://wa.me/917651847029?text=I%20am%20interested%20in%20ordering%20the%20Premium%20Orthopedic%20Mattress"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition mb-6 text-sm"
          >
            Order on WhatsApp
          </a>

          <div>
            <h3 className="text-lg font-semibold mb-1">Product Description</h3>
            <p className="text-gray-700 mb-2 text-sm leading-tight">
              Introducing our Premium Orthopedic Mattress — crafted with high-density
              foam and advanced memory foam layers for unmatched spine support and
              restful sleep. This mattress adapts to your body shape, relieves
              pressure points, and promotes natural alignment for healthy posture.
            </p>
            <p className="text-gray-700 mb-2 text-sm leading-tight">
              The breathable fabric cover keeps you cool throughout the night,
              while the anti-sag technology ensures the mattress maintains its
              shape and support for years. Whether you suffer from back pain or
              simply want better sleep, this orthopedic mattress is the perfect
              solution.
            </p>
            <p className="text-gray-700 text-sm leading-tight">
              Experience hotel-like comfort at home — backed by a 5-year warranty
              and trusted by thousands of customers. Upgrade your sleep today!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
