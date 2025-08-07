"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  ChevronDown,
  Home,
  Bed,
  Sofa,
  Coffee,
  Package,
  Paintbrush,
  Settings,
  CalendarClock,
  Store,
  Armchair,
  TableProperties,
  LayoutGrid,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { ScrollingMarquee } from "@/components/scrolling-marquee";

const productItems = [
  { label: "Double Bed", icon: <Bed className="w-8 h-8" />, href: "/products/double-bed" },
  { label: "Wardrobe", icon: <Store className="w-8 h-8" />, href: "/products/wardrobe" },
  { label: "Dressing", icon: <Paintbrush className="w-8 h-8" />, href: "/products/dressing" },
  { label: "Center Table", icon: <Coffee className="w-8 h-8" />, href: "/products/center-table" },
  { label: "Sofa", icon: <Sofa className="w-8 h-8" />, href: "/products/sofa" },
  { label: "Dining Table", icon: <TableProperties className="w-8 h-8" />, href: "/products/dining-table" },
  { label: "Office Table", icon: <Package className="w-8 h-8" />, href: "/products/office-table" },
  { label: "Office Chair", icon: <Armchair className="w-8 h-8" />, href: "/products/office-chair" },
  { label: "Office Cabinets", icon: <LayoutGrid className="w-8 h-8" />, href: "/products/office-cabinets" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const promotionalMessages = [
    "🌧️ Premium Monsoon Bundle Sale - Limited Time Offer!",
    "🏠 Complete Home Package - 9 Essential Items at One Incredible Price!",
    "🛍️ Free Delivery on Orders Above ₹50000",
    "⭐ New Designer Collections Now Available",
    "🔥 Flash Sale - Up to 20% Off on Selected Items",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      <ScrollingMarquee
        messages={promotionalMessages}
        speed="normal"
        pauseOnHover
        backgroundColor="bg-gradient-to-r from-gray-700 to-gray-950"
        textColor="text-white"
        className="py-1.5 text-xs sm:text-sm font-semibold"
      />

      <div className="bg-gray-900 border-b-2 border-emerald-950">
        <div className="container mx-auto px-4 py-3 md:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.png" alt="Logo" width={50} height={50} className="object-contain" priority />
            <span className="flex flex-col text-white leading-none ">
              <span className="text-lg font-bold">Star Furniture</span>
              <span className="text-sm">And Electronics</span>
            </span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80vw] max-w-[300px] p-0 bg-blue-950">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-gray-200">
                  <Link href="/" className="flex items-center">
                    <div className="relative h-10 w-40">
                      <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
                    </div>
                  </Link>
                </div>
                <nav className="flex-1 overflow-auto p-4 space-y-6 text-white">
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2 py-2 text-base font-medium hover:text-emerald-600 transition">
                      <Home className="h-5 w-5" /> Home
                    </Link>
                  </SheetClose>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          <nav className="hidden md:flex items-center gap-8 text-white">
            <Link href="/" className="text-sm font-medium hover:text-emerald-600 hover:underline underline-offset-4 transition">
              Home
            </Link>

            <div className="relative group">
              <button className="text-sm font-medium flex items-center hover:text-emerald-600 hover:underline underline-offset-4 transition">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 top-full bg-yellow-500 rounded-md shadow-xl z-50 w-64 max-w-[90vw] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="flex flex-col gap-y-3 p-4">
                  {productItems.map(({ label, icon, href }) => (
                    <Link
                      key={label}
                      // href={href}
                      href={'/not-found'}
                      className="flex items-center gap-2 hover:bg-yellow-600 hover:text-white px-2 py-1 rounded transition"
                    >
                      {icon}
                      <span className="text-sm font-medium">{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>




            <Link href="/about" className="text-sm font-medium hover:text-emerald-600 hover:underline underline-offset-4 transition">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-emerald-600 hover:underline underline-offset-4 transition">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}