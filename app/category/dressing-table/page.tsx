"use client";

import { useState } from "react";

export default function DressingTablePage() {
  const images = [
    "/products/dressing/tab1.jpg",
    "/products/dressing/tab2.jpg",
    "/products/dressing/tab3.jpg",
    "/products/dressing/tab4.jpg",
    "/products/dressing/tab5.jpg",
    "/products/dressing/tab6.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Elegant Wooden Dressing Table
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* ✅ Left: Main Image + Thumbnails */}
        <div className="flex flex-col">
          <div className="w-full flex justify-center items-center mb-4 overflow-hidden rounded-xl shadow-md bg-white">
            <img
              src={mainImage}
              alt="Elegant Wooden Dressing Table"
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
            <li>
              ✅ <strong>Type:</strong> Dressing Table with Mirror & Storage
            </li>
            <li>
              ✅ <strong>Material:</strong> High-Quality Engineered Wood
            </li>
            <li>
              ✅ <strong>Finish:</strong> Premium Polish, Smooth Surface
            </li>
            <li>
              ✅ <strong>Mirror:</strong> Large Premium Mirror
            </li>
            <li>
              ✅ <strong>Storage:</strong> Drawers, Open Shelf & Compact Stool
            </li>
            <li>
              ✅ <strong>Warranty:</strong> 5 Years
            </li>
          </ul>

          <p className="text-base font-bold mb-3">Price: ₹11,500</p>

          <a
            href="https://wa.me/917651847029?text=I%20am%20interested%20in%20ordering%20the%20Elegant%20Wooden%20Dressing%20Table"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition mb-6 text-sm"
          >
            Order on WhatsApp
          </a>

          <div>
            <h3 className="text-lg font-semibold mb-1">Product Description</h3>
            <p className="text-gray-700 mb-2 text-sm leading-tight">
              Upgrade your bedroom with our beautifully crafted wooden dressing table that blends functionality
              with timeless elegance. Designed to meet modern lifestyle needs, this dressing table features
              a large mirror, spacious drawers, and an open shelf for easy access to your everyday essentials.
              Whether you're getting ready for work or a special occasion, this unit helps you stay organized in style.
            </p>
            <p className="text-gray-700 mb-2 text-sm leading-tight">
              Constructed from high-quality engineered wood with a premium finish, the dressing table is both
              durable and visually appealing. Its smooth surface is easy to clean, while the ample storage allows
              you to neatly arrange cosmetics, jewelry, and grooming items. The sturdy stool and compact design
              make it perfect for both large and small bedrooms.
            </p>
            <p className="text-gray-700 text-sm leading-tight">
              Its minimalist design and neutral color tone complement any interior décor, adding charm and utility
              to your space. Whether you are redecorating or setting up a new home, this dressing table is a
              practical and stylish choice.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
