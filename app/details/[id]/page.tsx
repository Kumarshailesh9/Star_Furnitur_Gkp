"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import products from "@/data/productData";

export default function ProductDetails() {
  const params = useParams<{ id: string }>()!;
  const id = params.id; // now id is string

  const [product, setProduct] = useState<null | (typeof products)[0]>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const found = products.find((p) => p.id === id);
    if (found) {
      setProduct(found);
      setMainImage(found.image || found.gallery?.[0] || "");
    }
  }, [id]);

  if (!product) {
    return (
      <p className="text-center p-6 text-gray-700">
        {id ? "Product not found" : "Loading..."}
      </p>
    );
  }

  const whatsappLink = `https://wa.me/917651847029?text=${encodeURIComponent(
    `Hello, I want to order the product:\nModel Id: ${product.code}\nTitle: ${product.title}`
  )}`;

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-8 text-center">{product.title}</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT */}
        <div className="lg:w-1/2 flex flex-col">
          <div className="w-full flex justify-center items-center mb-4 overflow-hidden rounded-xl shadow-md bg-gray-50">
            {mainImage && (
              <Image
                src={mainImage}
                alt={product.title}
                width={500}
                height={400}
                className="max-w-full h-auto object-contain"
                priority
              />
            )}
          </div>

          <div className="flex gap-4 overflow-x-auto hide-scrollbar">
            {(product.gallery || [product.image]).map((img, idx) => (
              <div
                key={idx}
                className={`w-24 h-24 flex-shrink-0 rounded-md overflow-hidden border-2 cursor-pointer transition-all duration-200 ${
                  mainImage === img
                    ? "border-green-600"
                    : "border-transparent"
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

        {/* RIGHT */}
        <div className="lg:w-1/2 text-gray-800">
          <div className="space-y-2 text-lg mb-4">
            <p><strong>Model Id:</strong> {product.code}</p>
            <p><strong>Material:</strong> {product.material}</p>
            <p><strong>Availability:</strong> {product.availability}</p>
            <p><strong>Size:</strong> {product.size}</p>
          </div>

          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-2">
            {product.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
          {product.note && (
            <p className="italic text-sm mb-4">{product.note}</p>
          )}

          <h2 className="text-xl font-bold mb-2">
            WARRANTY :- {product.warranty.years}*
          </h2>

          <h3 className="font-semibold mt-2">Covered:</h3>
          <ul className="list-disc pl-5 text-gray-700 mb-2">
            {product.warranty.covered.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h3 className="font-semibold mt-2">Not Covered:</h3>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            {product.warranty.notCovered.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <p className="text-sm italic mb-6">*T&C Apply</p>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold text-lg"
          >
            🛒 Order on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
