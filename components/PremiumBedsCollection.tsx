"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image"; 

export default function PremiumBedsCollection() {
  const categories = [
    {
      id: 1,
      name: "Premium Bed with Upholstered Headboard",
      description:
        "Elegant beds with plush, upholstered headboards for luxurious comfort.",
      image: "/luxurious-bedroom-retreat.png", // ✅ Use local image
      link: "/category/premium-bed",
    },
    {
      id: 2,
      name: "Premium Orthopedic Mattress",
      description:
        "High-quality orthopedic mattress for superior spine support and restful sleep.",
      image: "/comfortable-mattress.png", // ✅ Same image for now — change as needed
      link: "/category/premium-orthopedic-mattress",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Premium Beds Collection
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative w-full h-56">
              <Image
                src={category.image}
                alt={category.name}
                fill // ✅ This makes the image cover the parent div
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 mb-4 flex-1">{category.description}</p>
              <Link href={category.link}>
                <button className="mt-auto inline-block px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
