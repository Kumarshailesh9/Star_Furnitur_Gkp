"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import CategoryCard from "@/components/category-card";

export default function ExploreCollections() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
      return () =>
        container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatedSection className="py-10 sm:py-14 md:py-16 lg:py-20 px-4 md:px-6 max-w-7xl mx-auto bg-gray-900">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 text-white">
          <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
            Explore Our Collections
          </span>
        </h2>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
          Discover premium furniture collections designed for comfort, style,
          and lasting durability.
        </p>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white text-gray-900 shadow rounded-full transition ${
            canScrollLeft ? "opacity-100" : "opacity-30 pointer-events-none"
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white text-gray-900 shadow rounded-full transition ${
            canScrollRight ? "opacity-100" : "opacity-30 pointer-events-none"
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 py-4 scroll-smooth hide-scrollbar"
        >
          {[
            {
              title: "Beds & Mattresses",
              image: "/minimalist-platform-bed.png",
              href: "/category/beds",
              delay: 0.1,
            },
            {
              title: "Sofas & Sectionals",
              image: "/luxurious-living-room-sofa.png",
              href: "/category/sofas",
              delay: 0.2,
            },
            {
              title: "Dining Sets",
              image: "/rustic-dining-set.png",
              href: "/category/dining",
              delay: 0.3,
            },
            {
              title: "Storage Solutions",
              image: "/minimalist-wooden-wardrobe.png",
              href: "/category/storage",
              delay: 0.4,
            },
            {
              title: "Dressing Table",
              image: "/tab3.jpg",
              href: "/category/dressing-table",
              delay: 0.5,
            },
          ].map((item) => (
            <AnimatedSection
              key={item.title}
              delay={item.delay}
              direction="up"
              className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] flex-shrink-0"
            >
              <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full bg-white">
                <CategoryCard {...item} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
