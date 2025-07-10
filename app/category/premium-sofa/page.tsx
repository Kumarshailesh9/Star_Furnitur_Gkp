"use client";

import { useState } from "react";

export default function PremiumCornerSofaPage() {
  const images = [
    "/products/sofa/sofa1.jpg",
    "/products/sofa/sofa2.jpg",
    
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Premium 5-Seater Corner Sofa
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* ✅ Left: Main Image + Thumbnails */}
        <div className="flex flex-col">
          <div className="w-full flex justify-center items-center mb-4 overflow-hidden rounded-xl shadow-md bg-white">
            <img
              src={mainImage}
              alt="Premium 5-Seater Corner Sofa"
              className="max-w-full h-auto object-contain"
            />
          </div>

          <div className="flex gap-4 overflow-x-auto hide-scrollbar">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`w-24 h-24 flex-shrink-0 rounded-md overflow-hidden border-2 cursor-pointer transition-all duration-200 ${
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

        {/* ✅ Right: Details & Long Description */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Product Details</h2>

          <ul className="mb-4 space-y-1 text-gray-700 text-sm leading-tight">
            <li>✅ <strong>Type:</strong> 5-Seater L-Shaped Corner Sofa</li>
            <li>✅ <strong>Material:</strong> Premium Fabric Upholstery</li>
            <li>✅ <strong>Cushion:</strong> High-Density Foam</li>
            <li>✅ <strong>Frame:</strong> Solid Wooden Frame & Sturdy Legs</li>
            <li>✅ <strong>Design:</strong> Modern, Space-Optimizing Corner Layout</li>
            <li>✅ <strong>Warranty:</strong> 5 Years</li>
          </ul>

          <p className="text-base font-bold mb-3">Price: ₹47,000</p>

          <a
            href="https://wa.me/917651847029?text=I%20am%20interested%20in%20ordering%20the%20Premium%205-Seater%20Corner%20Sofa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition mb-6 text-sm"
          >
            Order on WhatsApp
          </a>

          <div>
            <h3 className="text-lg font-semibold mb-1">Product Description</h3>
            <p className="text-gray-700 mb-2 text-sm leading-tight">
              Add a touch of luxury and comfort to your living space with our premium 5-seater corner sofa.
              Designed for modern homes, this L-shaped sofa is crafted with high-density foam cushions for
              lasting comfort and support. Upholstered in rich, soft-touch fabric, it features a sleek
              contemporary design that effortlessly blends with any interior décor.
            </p>
            <p className="text-gray-700 mb-2 text-sm leading-tight">
              The strong wooden frame and durable legs ensure long-lasting stability, while the spacious seating
              makes it perfect for family gatherings, movie nights, or simply relaxing after a long day. The
              sofa’s smart corner design helps optimize your room’s layout, making it ideal for both large and
              compact living areas. Whether placed in a corner or used as a room divider, this sofa adds
              functionality and elegance to your home.
            </p>
            <p className="text-gray-700 mb-2 text-sm leading-tight">
              Available in multiple colors to suit your style preferences. If you're looking for a perfect mix of
              style, space, and comfort, this 5-seater premium corner sofa at just ₹47,000 is the ideal choice.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-1">Key Features</h3>
            <ul className="text-gray-700 text-sm leading-tight list-disc list-inside">
              <li>5-seater spacious comfort</li>
              <li>Premium fabric upholstery</li>
              <li>High-density foam cushions</li>
              <li>Solid wooden frame</li>
              <li>Modern corner design</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
