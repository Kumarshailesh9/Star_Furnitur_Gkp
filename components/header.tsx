"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  Search,
  ChevronDown,
  Phone,
  Home,
  Sofa,
  Bed,
  Coffee,
  Package,
  Crown,
  Diamond,
  Sparkles,
  Star,
  Paintbrush,
  Settings,
  CalendarClock,
  Hammer,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { ThemeToggle } from "@/components/theme-toggle"
import { ColorThemeSelector } from "@/components/color-theme-selector"
import { SearchBar } from "@/components/search-bar"
import { ScrollingMarquee } from "@/components/scrolling-marquee"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)

  // Promotional messages for the marquee
  const promotionalMessages = [
    "🌧️ Premium Monsoon Bundle Sale - Limited Time Offer!",
    "🏠 Complete Home Package - 9 Essential Items at One Incredible Price!",
    "🛍️ Free Delivery on Orders Above ₹50000",
    "⭐ New Designer Collections Now Available",
    "🔥 Flash Sale - Up to 40% Off on Selected Items",
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigation items array
  const navigationItems = [
    { name: "Home", href: "/" },
    {
      name: "Furniture",
      href: "#",
      children: [
        { name: "Beds & Mattresses", href: "/category/beds" },
        { name: "Sofas & Sectionals", href: "/category/sofas" },
        { name: "Dining Sets", href: "/category/dining" },
        { name: "Storage Solutions", href: "/category/storage" },
        { name: "Office Furniture", href: "/category/office" },
        { name: "Tables", href: "/category/tables" },
        { name: "Chairs", href: "/category/chairs" },
        { name: "Modular Kitchen", href: "/category/kitchen" },
      ],
    },
    
    {
      name: "Other Services",
      href: "#",
      children: [
        { name: "Interior Design", href: "/services/interior-design" },
        { name: "Custom Furniture", href: "/services/custom" },
        { name: "Furniture Rental", href: "/services/rental" },
        { name: "Restoration", href: "/services/restoration" },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      {/* Promotional Marquee - New Addition */}
      <ScrollingMarquee
        messages={promotionalMessages}
        speed="normal"
        pauseOnHover={true}
        backgroundColor="bg-gradient-to-r from-purple-700 to-pink-600"
        textColor="text-white"
        className="py-1.5 text-sm font-medium"
      />

      {/* Top Bar - Only visible on larger screens */}
      <div className="hidden md:flex justify-between items-center py-2 px-4 md:px-6 text-xs bg-muted">
        <div className="flex items-center">
          <Phone className="h-3 w-3 mr-1" />
          <span>Call us: +91 9876543210</span>
        </div>
        <div>
          <span className="px-2 border-r">Free shipping on orders above ₹50000</span>
          <span className="px-2">30-day returns</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-3 py-2 md:px-6 md:py-4">
        <div className="flex items-center justify-between relative">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80vw] max-w-[300px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b">
                  <Link href="/" className="flex items-center" onClick={() => document.body.click()}>
                    <div className="relative h-8 w-8 mr-2">
                      <Image src="/logo-icon.png" alt="GKP Furniture Logo" fill className="object-contain" />
                    </div>
                    <span className="font-semibold text-lg"></span>
                  </Link>
                </div>

                <nav className="flex-1 overflow-auto p-4">
                  <div className="space-y-6">
                    <SheetClose asChild>
                      <Link href="/" className="flex items-center gap-2 py-2 text-lg font-medium">
                        <Home className="h-5 w-5" />
                        Home
                      </Link>
                    </SheetClose>

                    <div className="space-y-3">
                      <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Categories</h3>
                      <div className="space-y-2 pl-1">
                        <SheetClose asChild>
                          <Link href="/category/beds" className="flex items-center gap-2 py-2">
                            <Bed className="h-4 w-4" />
                            <span>Beds & Mattresses</span>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="/category/sofas" className="flex items-center gap-2 py-2">
                            <Sofa className="h-4 w-4" />
                            <span>Sofas & Sectionals</span>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="/category/dining" className="flex items-center gap-2 py-2">
                            <Coffee className="h-4 w-4" />
                            <span>Dining Sets</span>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="/category/storage" className="flex items-center gap-2 py-2">
                            <Package className="h-4 w-4" />
                            <span>Storage Solutions</span>
                          </Link>
                        </SheetClose>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
                        Other Services
                      </h3>
                      <div className="space-y-2 pl-1">
                        <SheetClose asChild>
                          <Link href="/services/interior-design" className="flex items-center gap-2 py-2">
                            <Paintbrush className="h-4 w-4" />
                            <span>Interior Design</span>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="/services/custom" className="flex items-center gap-2 py-2">
                            <Settings className="h-4 w-4" />
                            <span>Custom Furniture</span>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="/services/rental" className="flex items-center gap-2 py-2">
                            <CalendarClock className="h-4 w-4" />
                            <span>Furniture Rental</span>
                          </Link>
                        </SheetClose>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
                        Information
                      </h3>
                      <div className="space-y-2 pl-1">
                        <SheetClose asChild>
                          <Link href="/best-sellers" className="flex items-center gap-2 py-2">
                            Best Sellers
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="/about" className="flex items-center gap-2 py-2">
                            About Us
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="/contact" className="flex items-center gap-2 py-2">
                            Contact Us
                          </Link>
                        </SheetClose>
                      </div>
                    </div>
                  </div>
                </nav>

                {/* <div className="p-4 border-t">
                  <div className="flex items-center justify-between">
                    <ThemeToggle />
                    <ColorThemeSelector />
                  </div>
                </div> */}
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center mx-auto md:mx-0">
            <div className="relative h-8 w-8 mr-2">
              <Image src="/logo-icon.png" alt="GKP Furniture Logo" fill className="object-contain" />
            </div>
          <span className="inline-block leading-1 ">
            <span className="font-bold text-xl block">Star Furniture</span>
            <span className="font-normal text-sm ">And Electronics</span>
          </span>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                Shop By Category <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-[200px]">
                <DropdownMenuItem asChild>
                  <Link href="/category/beds" className="flex items-center gap-2">
                    <Bed className="h-4 w-4" />
                    Beds & Mattresses
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/category/sofas" className="flex items-center gap-2">
                    <Sofa className="h-4 w-4" />
                    Sofas & Sectionals
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/category/dining" className="flex items-center gap-2">
                    <Coffee className="h-4 w-4" />
                    Dining Sets
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/category/storage" className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Storage Solutions
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                Other Services <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-[200px]">
                
                <DropdownMenuItem asChild>
                  <Link href="/services/custom" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Custom Furniture
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/rental" className="flex items-center gap-2">
                    <CalendarClock className="h-4 w-4" />
                    Furniture Rental
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/restoration" className="flex items-center gap-2">
                    <Hammer className="h-4 w-4" />
                    Restoration
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

           
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Desktop Search */}
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
                    <SearchBar
                      className="w-[250px]"
                      onClose={() => {
                        setIsSearchOpen(false)
                      }}
                      autoFocus
                    />
                  </motion.div>
                ) : (
                  <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Only Controls */}
            {/* <div className="hidden md:flex items-center gap-1">
              <ThemeToggle />
              <ColorThemeSelector />
            </div> */}
          </div>
        </div>

        {/* Mobile Search Bar - Expandable */}
        <AnimatePresence>
          {isMobileSearchOpen && (
            <motion.div
              className="mt-2 md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="pb-2">
                <SearchBar className="w-full" onClose={() => setIsMobileSearchOpen(false)} autoFocus />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
