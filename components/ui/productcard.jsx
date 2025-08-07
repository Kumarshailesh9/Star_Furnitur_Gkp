import Image from "next/image";

export default function ProductCard({ title, image, alt, badgeText}) {
  return (
    <div className="relative bg-white rounded-xl shadow-md p-2 w-[500px] h-[250px] flex items-center justify-center overflow-hidden">
      
      {/* 🔹 Badge */}
       {badgeText && (
        <div className="absolute top-2 left-2 z-20 bg-black text-white text-xs font-semibold px-3 py-1 rounded">
          {badgeText}
        </div>
      )}

      {/* 🖼️ Image */}
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
