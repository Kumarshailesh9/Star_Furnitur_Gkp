// "use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { useEffect, useState } from "react";
// import { useConfetti } from "@/app/contexts/ConfettiContext";

// interface Product {
//   name: string;
//   desc: string;
//   icon: string;
// }

// export default function ItemDetails() {
//   const { setShowConfetti } = useConfetti();
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   useEffect(() => {
//     setShowConfetti(false);
//   }, [setShowConfetti]);

//   const products: Product[] = [
//     {
//       name: "Double Particle Bed",
//       desc: "Modern double bed (6×6 size) crafted with durable particle board, offering a sleek design, ample support, and premium finish — perfect for a spacious, comfortable sleep experience.",
//       icon: "/images/particle-bed.jpg",
//     },
//     {
//       name: "Sofa Set",
//       desc: "Elegant 5-seater sofa set with plush cushions and sturdy wooden frame, designed for maximum comfort and a stylish modern living room look.",
//       icon: "/images/sofa-set.png",
//     },
//     {
//       name: "Center Table",
//       desc: "Stylish premium center table crafted with high-quality wood and glass top, adding a touch of elegance and practicality to your living room.",
//       icon: "/images/dressing-table.png",
//     },
//     {
//       name: "Dressing Table",
//       desc: "Elegant dressing table with a large mirror, smooth drawers, and premium finish — perfect for daily grooming and adding style to your bedroom.",
//       icon: "/images/dressing.jpg",
//     },
//     {
//       name: "Almirah",
//       desc: "Spacious almirah with sturdy shelves, secure lock, and elegant finish — keeps your clothes and essentials organized in style.",
//       icon: "/images/alhmira.png",
//     },
//     {
//       name: "Cooler",
//       desc: "Energy-saving air cooler with powerful airflow, large water tank, and adjustable speed — keeps your room fresh and cool all season.",
//       icon: "/images/cooler.png",
//     },
//     {
//       name: "Refrigerator",
//       desc: "Spacious double-door refrigerator with frost-free technology, energy-efficient cooling, and ample storage for fresh and frozen items.",
//       icon: "/images/Refrigerator.png",
//     },
//     {
//       name: "Washing Machine",
//       desc: "Fully automatic washing machine with multiple wash programs, efficient water usage, and powerful spin cycle for hassle-free laundry.",
//       icon: "/images/washing-machine.png",
//     },
//     {
//       name: "Mattress",
//       desc: "Orthopedic mattress designed for superior back support, maximum comfort, and restful sleep. Crafted with high-density foam and premium fabric.",
//       icon: "/images/matters11.png",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
//         Your Monsoon Bundle Details
//       </h1>
//       <p className="text-black mb-8">
//         Here’s what you get in this premium bundle — quality items, unbeatable value.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map((product, idx) => (
//           <div
//             key={idx}
//             className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg flex flex-col cursor-pointer"
//             onClick={() => setSelectedImage(product.icon)}
//           >
//             <div className="relative w-full h-48">
//               <Image
//                 src={product.icon}
//                 alt={product.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4 flex flex-col flex-grow">
//               <h3 className="text-lg font-semibold text-black mb-2">
//                 {product.name}
//               </h3>
//               <p className="text-gray-800 text-sm flex-grow">{product.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal Overlay */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative w-11/12 md:w-2/3 lg:w-1/2 h-60">
//             <Image
//               src={selectedImage}
//               alt="Full view"
//               width={1000}
//               height={800}
//               className="object-contain rounded-xl"
//             />
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute top-4 right-4 text-white text-2xl font-bold"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Flexible order bar */}
//       <div className="mt-12 bg-white border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center px-6 py-6 shadow-md rounded-xl">
//         <div className="flex items-center">
//           <span className="text-black text-2xl md:text-3xl font-extrabold">
//             ₹96,428
//           </span>
//           <span className="text-gray-300 text-sm md:text-base line-through ml-3">
//             ₹1,28,570
//           </span>
//           <Badge className="bg-yellow-400 text-black ml-3 px-3">
//             25% OFF
//           </Badge>
//         </div>
//         <Button
//           onClick={() =>
//             window.open(
//               "https://wa.me/917651847029?text=Hi%2C%20I%20want%20to%20order%20the%20Monsoon%20Bundle%20Offer!",
//               "_blank"
//             )
//           }
//           className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full"
//         >
//           Order on WhatsApp
//         </Button>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { useConfetti } from "@/app/contexts/ConfettiContext";

interface Product {
  name: string;
  desc: string;
  icon: string;
}

export default function ItemDetails() {
  const { setShowConfetti } = useConfetti();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    setShowConfetti(false);
  }, [setShowConfetti]);

  const products: Product[] = [
    {
      name: "Double Particle Bed",
      desc: "Modern double bed (6×6 size) crafted with durable particle board, offering a sleek design, ample support, and premium finish — perfect for a spacious, comfortable sleep experience.",
      icon: "/images/particle-bed.jpg",
    },
    {
      name: "Sofa Set",
      desc: "Elegant 5-seater sofa set with plush cushions and sturdy wooden frame, designed for maximum comfort and a stylish modern living room look.",
      icon: "/images/sofa-set.png",
    },
    {
      name: "Center Table",
      desc: "Stylish premium center table crafted with high-quality wood and glass top, adding a touch of elegance and practicality to your living room.",
      icon: "/images/dressing-table.png",
    },
    {
      name: "Dressing Table",
      desc: "Elegant dressing table with a large mirror, smooth drawers, and premium finish — perfect for daily grooming and adding style to your bedroom.",
      icon: "/images/dressing.jpg",
    },
    {
      name: "Almirah",
      desc: "Spacious almirah with sturdy shelves, secure lock, and elegant finish — keeps your clothes and essentials organized in style.",
      icon: "/images/alhmira.png",
    },
    {
      name: "Cooler",
      desc: "Energy-saving air cooler with powerful airflow, large water tank, and adjustable speed — keeps your room fresh and cool all season.",
      icon: "/images/cooler.png",
    },
    {
      name: "Refrigerator",
      desc: "Spacious double-door refrigerator with frost-free technology, energy-efficient cooling, and ample storage for fresh and frozen items.",
      icon: "/images/Refrigerator.png",
    },
    {
      name: "Washing Machine",
      desc: "Fully automatic washing machine with multiple wash programs, efficient water usage, and powerful spin cycle for hassle-free laundry.",
      icon: "/images/washing-machine.png",
    },
    {
      name: "Mattress",
      desc: "Orthopedic mattress designed for superior back support, maximum comfort, and restful sleep. Crafted with high-density foam and premium fabric.",
      icon: "/images/matters11.png",
    },
  ];

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % products.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + products.length) % products.length);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
        Your Monsoon Bundle Details
      </h1>
      <p className="text-black mb-8">
        Here’s what you get in this premium bundle — quality items, unbeatable value.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg flex flex-col cursor-pointer hover:shadow-xl transition"
            onClick={() => setSelectedIndex(idx)}
          >
            <div className="relative w-full h-48">
              <Image
                src={product.icon}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-black mb-2">
                {product.name}
              </h3>
              <p className="text-gray-800 text-sm flex-grow">{product.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] px-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-72 md:h-[450px]">
              <Image
                src={products[selectedIndex].icon}
                alt={products[selectedIndex].name}
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="p-6 text-black">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                {products[selectedIndex].name}
              </h2>
              <p className="text-gray-700">{products[selectedIndex].desc}</p>
            </div>

            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 text-black text-3xl font-bold hover:text-red-600 transition"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={showPrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white text-4xl font-bold px-4 py-2 rounded-r transition"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={showNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white text-4xl font-bold px-4 py-2 rounded-l transition"
            >
              ›
            </button>
          </div>
        </div>
      )}

      {/* Order Bar */}
      <div className="mt-12 bg-white border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center px-6 py-6 shadow-md rounded-xl">
        <div className="flex items-center">
          <span className="text-black text-2xl md:text-3xl font-extrabold">
            ₹96,428
          </span>
          <span className="text-gray-300 text-sm md:text-base line-through ml-3">
            ₹1,28,570
          </span>
          <Badge className="bg-yellow-400 text-black ml-3 px-3">
            25% OFF
          </Badge>
        </div>
        <Button
          onClick={() =>
            window.open(
              "https://wa.me/917651847029?text=Hi%2C%20I%20want%20to%20order%20the%20Monsoon%20Bundle%20Offer!",
              "_blank"
            )
          }
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full mt-4 sm:mt-0"
        >
          Order on WhatsApp
        </Button>
      </div>
    </div>
  );
}
