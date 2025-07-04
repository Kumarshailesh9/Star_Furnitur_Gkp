"use client";

import { useState } from "react";
import Image from "next/image";

interface Product {
  name: string;
  desc: string;
  icon: string;
}

const products: Product[] = [
  { name: "Double Bed", desc: "6×6 Size", icon: "/images/particle-bed.jpg" },
  { name: "Sofa Set", desc: "5 Seater", icon: "/images/sofa-set.png" },
  { name: "Center Table", desc: "Premium", icon: "/images/dressing-table.png" },
  { name: "Dressing Table", desc: "With Mirror", icon: "/images/dressing.jpg" },
  { name: "Almirah", desc: "Spacious", icon: "/images/alhmira.png" },
  { name: "Cooler", desc: "Energy Saving", icon: "/images/cooler.png" },
  { name: "Refrigerator", desc: "Double Door", icon: "/images/Refrigerator.png" },
  { name: "Washing Machine", desc: "Fully Auto", icon: "/images/washing-machine.png" },
  { name: "Mattress", desc: "Orthopedic", icon: "/images/matters11.png" },
];

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <section className="px-4 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {displayedProducts.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-xl p-4 flex flex-col items-center text-center cursor-pointer hover:bg-white/20 transition"
            onClick={() => setSelectedProduct(item)}
          >
            <div className="w-full aspect-square relative mb-3">
              <Image
                src={item.icon}
                alt={item.name}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-white font-semibold text-sm">{item.name}</h3>
            <p className="text-blue-200 text-xs">{item.desc}</p>
          </div>
        ))}
      </div>

      {products.length > 3 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>
            <div className="w-full aspect-square relative mb-4">
              <Image
                src={selectedProduct.icon}
                alt={selectedProduct.name}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
            <p className="text-gray-600">{selectedProduct.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
