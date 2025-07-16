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
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollingMarquee } from "@/components/scrolling-marquee";

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
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""
        }`}
    >
      {/* Marquee */}
      <ScrollingMarquee
        messages={promotionalMessages}
        speed="normal"
        pauseOnHover
        backgroundColor="bg-gradient-to-r from-gray-700 to-gray-950"
        textColor="text-white"
        className="py-1.5 text-xs sm:text-sm font-semibold"
      />

      {/* Main Bar */}
      <div className="bg-gray-900 border-b-2 border-emerald-950">
        <div className="container mx-auto px-4 py-3 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50} // Adjust width as needed
              height={50} // Adjust height as needed
              className="object-contain"
              priority
            />
            <span className="flex flex-col text-white leading-none ">
              <span className="text-lg font-bold">Star Furniture</span>
              <span className="text-sm">And Electronics</span>
            </span>
          </Link>



          {/* Mobile menu */}
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
                    <Link
                      href="/"
                      className="flex items-center gap-2 py-2 text-base font-medium  hover:text-emerald-600 transition"
                    >
                      <Home className="h-5 w-5" /> Home
                    </Link>
                  </SheetClose>

                  <div className="space-y-4">
                    <h3 className="text-xs uppercase text-gray-500 tracking-wide">Categories</h3>
                    <div className="pl-1 space-y-2">
                      {[
                        { href: "/category/beds", label: "Beds & Mattresses", icon: Bed },
                        { href: "/category/sofas", label: "Sofas & Sectionals", icon: Sofa },
                        { href: "/category/dining", label: "Dining Sets", icon: Coffee },
                        { href: "/category/storage", label: "Storage Solutions", icon: Package },
                      ].map(({ href, label, icon: Icon }) => (
                        <SheetClose asChild key={href}>
                          <Link
                            href={href}
                            className="flex items-center gap-2 py-2 hover:text-emerald-600 transition"
                          >
                            <Icon className="h-4 w-4" /> {label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>

                  

                  <div className="space-y-4">
                    <h3 className="text-xs uppercase text-gray-500 tracking-wide">Info</h3>
                    <div className="pl-1 space-y-2">
                      {[
                        { href: "/about", label: "About Us" },
                        { href: "/contact", label: "Contact Us" },
                      ].map(({ href, label }) => (
                        <SheetClose asChild key={href}>
                          <Link
                            href={href}
                            className="flex items-center gap-2 py-2 hover:text-emerald-600 transition"
                          >
                            {label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-white">
            <Link
              href="/"
              className="text-sm font-medium hover:text-emerald-600 hover:underline underline-offset-4 transition"
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-emerald-600 hover:underline underline-offset-4 transition">
                Shop By Category <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-56 bg-white border border-emerald-600 rounded-lg shadow-xl p-2"
              >
                {[
                  { href: "/category/beds", label: "Beds & Mattresses", icon: Bed },
                  { href: "/category/sofas", label: "Sofas & Sectionals", icon: Sofa },
                  { href: "/category/dining", label: "Dining Sets", icon: Coffee },
                  { href: "/category/storage", label: "Storage Solutions", icon: Package },
                ].map(({ href, label, icon: Icon }) => (
                  <DropdownMenuItem asChild key={href}>
                    <Link
                      href={href}
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-emerald-50 transition"
                    >
                      <Icon className="h-4 w-4" /> {label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className="text-sm font-medium hover:text-emerald-600 hover:underline underline-offset-4 transition"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-emerald-600 hover:underline underline-offset-4 transition"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
