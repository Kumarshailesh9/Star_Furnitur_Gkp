"use client";

import { useState } from "react";

export default function PremiumBedPage() {
  // const images = [
  //   "/products/shaku/saku1.jpg",
  //   "/products/shaku/saku2.jpg",
  //   "/products/shaku/saku3.jpg",
  //   "/products/shaku/dressing.jpg",
  // ];

  // const [mainImage, setMainImage] = useState(images[0]);

  return (
    // <main className="max-w-6xl mx-auto px-4 py-12">
    //   <h1 className="text-3xl font-bold mb-8 text-center">
    //     Premium Bed with Shaku Wood
    //   </h1>

    //   {/* ✅ Make grid stack on mobile, side-by-side on md+ */}
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    //     {/* ✅ Left: Main Image + Thumbnails */}
    //     <div className="flex flex-col">
    //       <div className="w-full flex justify-center items-center mb-4 overflow-hidden rounded-xl shadow-md bg-white">
    //         <img
    //           src={mainImage}
    //           alt="Premium Bed with Shaku Wood"
    //           className="w-full h-auto max-h-[500px] object-contain"
    //         />
    //       </div>

    //       <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
    //         {images.map((img, idx) => (
    //           <div
    //             key={idx}
    //             className={`w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden border-2 cursor-pointer transition-all duration-200 ${
    //               mainImage === img ? "border-green-600" : "border-transparent"
    //             } hover:border-gray-400`}
    //             onClick={() => setMainImage(img)}
    //           >
    //             <img
    //               src={img}
    //               alt={`Thumbnail ${idx + 1}`}
    //               className="w-full h-full object-cover"
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* ✅ Right: Product Details & Description */}
    //     <div>
    //       <h2 className="text-xl font-semibold mb-3">Product Details</h2>

    //       <ul className="mb-4 space-y-1 text-gray-700 text-sm leading-tight">
    //         <li>✅ <strong>Type:</strong> Bed with Storage</li>
    //         <li>✅ <strong>Material:</strong> Sakhu Wood & Premium Fabric</li>
    //         <li>✅ <strong>Size:</strong> King Size (6×6 feet)</li>
    //         <li>✅ <strong>Mattress:</strong> Not included — Recommended Size: 72×70 inches</li>
    //         <li>✅ <strong>Headboard:</strong> Upholstered, Soft & Stylish</li>
    //         <li>✅ <strong>Finish Color:</strong> White Cassius</li>
    //       </ul>

    //       <p className="text-base font-bold mb-3">
    //         Price: ₹28,000 & with Dressing Table ₹38,000
    //       </p>

    //       <a
    //         href="https://wa.me/917651847029?text=I%20am%20interested%20in%20ordering%20the%20Premium%20Bed%20with%20Shaku%20Wood"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="inline-block px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition mb-6 text-sm"
    //       >
    //         Order on WhatsApp
    //       </a>

    //       <div>
    //         <h3 className="text-lg font-semibold mb-1">Product Description</h3>
    //         <p className="text-gray-700 mb-2 text-sm leading-tight">
    //           Experience the perfect blend of elegance, comfort, and durability with
    //           the Premium Luxury Bed by Saku. Designed to transform your bedroom into
    //           a haven of relaxation and style, this bed is crafted using high-quality
    //           engineered wood and premium upholstery that adds a touch of sophistication
    //           to any space.
    //         </p>
    //         <p className="text-gray-700 mb-2 text-sm leading-tight">
    //           With its modern yet timeless design, this bed features a beautifully cushioned
    //           headboard for added comfort and aesthetic appeal. The sturdy frame ensures
    //           long-lasting support, while the smooth, high-finish polish gives it a sleek,
    //           luxurious look. Whether you're unwinding after a long day or enjoying a lazy
    //           weekend, this bed provides the ultimate sleeping experience.
    //         </p>
    //         <p className="text-gray-700 mb-2 text-sm leading-tight">
    //           The Saku Premium Bed not only enhances your interior but also promises
    //           exceptional comfort and functionality. Its spacious design offers ample room
    //           for restful sleep, and it complements a wide range of bedroom styles – 
    //           from minimalist to modern luxury.
    //         </p>
    //         <p className="text-gray-700 mb-2 text-sm leading-tight">
    //           At just ₹28,000, it’s a perfect investment for those who value quality and
    //           refined living. Elevate your bedroom today with this stunning piece from Saku –
    //           where craftsmanship meets class.
    //         </p>
    //         <p className="text-gray-700 text-sm leading-tight">
    //           Upgrade your sleep, upgrade your lifestyle.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </main>
    <>
    <div className="flex h-96 justify-center items-center">
         <p className="font-bold ">Beds Available Soon</p>
    </div>
    </>
  );
}
