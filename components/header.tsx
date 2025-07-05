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
  Hammer,
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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      {/* Marquee */}
      <ScrollingMarquee
        messages={promotionalMessages}
        speed="normal"
        pauseOnHover
        backgroundColor="bg-gradient-to-r from-cyan-800 to-emerald-700"
        textColor="text-white"
        className="py-1.5 text-xs sm:text-sm font-semibold"
      />

      {/* Main Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 md:px-8 md:py-4 flex justify-between items-center">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5 text-black" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80vw] max-w-[300px] p-0 bg-white">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b">
                  <Link href="/" className="flex items-center">
                    <div className="relative h-8 w-8 mr-2">
                      <Image src="/logo-icon.png" alt="Logo" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-lg text-black">GKP</span>
                  </Link>
                </div>

                <nav className="flex-1 overflow-auto p-4 space-y-6 text-black">
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2 py-2 text-base font-medium">
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
                          <Link href={href} className="flex items-center gap-2 py-2">
                            <Icon className="h-4 w-4" /> {label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xs uppercase text-gray-500 tracking-wide">Services</h3>
                    <div className="pl-1 space-y-2">
                      {[
                        { href: "/services/interior-design", label: "Interior Design", icon: Paintbrush },
                        { href: "/services/custom", label: "Custom Furniture", icon: Settings },
                        { href: "/services/rental", label: "Furniture Rental", icon: CalendarClock },
                      ].map(({ href, label, icon: Icon }) => (
                        <SheetClose asChild key={href}>
                          <Link href={href} className="flex items-center gap-2 py-2">
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
                          <Link href={href} className="flex items-center gap-2 py-2">
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

          {/* Logo */}
          <Link href="/" className="flex items-center mx-auto md:mx-0">
            <div className="relative h-12 w-32">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-black">
            <Link href="/" className="text-sm font-medium hover:text-emerald-600 transition">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-emerald-600 transition">
                Shop By Category <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48 bg-white border border-gray-200">
                {[
                  { href: "/category/beds", label: "Beds & Mattresses", icon: Bed },
                  { href: "/category/sofas", label: "Sofas & Sectionals", icon: Sofa },
                  { href: "/category/dining", label: "Dining Sets", icon: Coffee },
                  { href: "/category/storage", label: "Storage Solutions", icon: Package },
                ].map(({ href, label, icon: Icon }) => (
                  <DropdownMenuItem asChild key={href}>
                    <Link href={href} className="flex items-center gap-2">
                      <Icon className="h-4 w-4" /> {label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-emerald-600 transition">
                Other Services <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48 bg-white border border-gray-200">
                {[
                  { href: "/services/custom", label: "Custom Furniture", icon: Settings },
                  { href: "/services/rental", label: "Furniture Rental", icon: CalendarClock },
                  { href: "/services/restoration", label: "Restoration", icon: Hammer },
                ].map(({ href, label, icon: Icon }) => (
                  <DropdownMenuItem asChild key={href}>
                    <Link href={href} className="flex items-center gap-2">
                      <Icon className="h-4 w-4" /> {label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-sm font-medium hover:text-emerald-600 transition">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-emerald-600 transition">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
