import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { EnhancedChatbot } from "@/components/enhanced-chatbot";
import { FloatingActionButtons } from "@/components/floating-action-buttons";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { ConfettiProvider } from "@/app/contexts/ConfettiContext"; 
import GlobalConfettiOverlay from "@/components/GlobalConfettiOverlay"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Furniture - Premium Furniture for Your Home",
  description: "Discover premium furniture designed for comfort, style, and durability at Star Furniture.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ConfettiProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <EnhancedChatbot />
            <FloatingActionButtons />
            <Toaster />
            <GlobalConfettiOverlay /> {/* ✅ always rendered at root */}
          </ConfettiProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
