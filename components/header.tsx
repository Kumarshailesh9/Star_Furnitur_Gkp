"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Search,
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
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColorThemeSelector } from "@/components/color-theme-selector";
import { SearchBar } from "@/components/search-bar";
import { ScrollingMarquee } from "@/components/scrolling-marquee";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const promotionalMessages = [
    "🌧️ Premium Monsoon Bundle Sale - Limited Time Offer!",
    "🏠 Complete Home Package - 9 Essential Items at One Incredible Price!",
    "🛍️ Free Delivery on Orders Above ₹50000",
    "⭐ New Designer Collections Now Available",
    "🔥 Flash Sale - Up to 40% Off on Selected Items",
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
      <div
        className="backdrop-blur bg-white/10 border-b border-white/10 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 py-2 md:px-8 md:py-4 flex justify-between items-center">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80vw] max-w-[300px] p-0 bg-background/80 backdrop-blur-lg">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b">
                  <Link href="/" className="flex items-center">
                    <div className="relative h-8 w-8 mr-2">
                      <Image src="/logo-icon.png" alt="Logo" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-lg">GKP</span>
                  </Link>
                </div>

                <nav className="flex-1 overflow-auto p-4 space-y-6">
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2 py-2 text-base font-medium">
                      <Home className="h-5 w-5" /> Home
                    </Link>
                  </SheetClose>

                  <div className="space-y-4">
                    <h3 className="text-xs uppercase text-muted-foreground tracking-wide">Categories</h3>
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
                    <h3 className="text-xs uppercase text-muted-foreground tracking-wide">Services</h3>
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
                    <h3 className="text-xs uppercase text-muted-foreground tracking-wide">Info</h3>
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
          <nav className="hidden md:flex items-center gap-6 text-white">
            <Link href="/" className="text-sm font-medium hover:text-yellow-300 transition">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-yellow-300 transition">
                Shop By Category <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48 backdrop-blur bg-white/10 border border-white/20">
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
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-yellow-300 transition">
                Other Services <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48 backdrop-blur bg-white/10 border border-white/20">
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

            <Link href="/about" className="text-sm font-medium hover:text-yellow-300 transition">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-yellow-300 transition">
              Contact Us
            </Link>
          </nav>

          {/* Search */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            <div className="hidden md:block">
              <AnimatePresence>
                {isSearchOpen ? (
                  <motion.div
                    className="flex items-center"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SearchBar className="w-[250px]" onClose={() => setIsSearchOpen(false)} autoFocus />
                  </motion.div>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white"
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <AnimatePresence>
          {isMobileSearchOpen && (
            <motion.div
              className="mt-2 md:hidden px-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <SearchBar className="w-full" onClose={() => setIsMobileSearchOpen(false)} autoFocus />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
