"use client"

import { useState } from "react"
import { Paintbrush } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const themes = [
  {
    name: "green",
    label: "Forest Green",
    primaryColor: "hsl(142, 76%, 36%)",
  },
  {
    name: "blue",
    label: "Ocean Blue",
    primaryColor: "hsl(221, 83%, 53%)",
  },
  {
    name: "purple",
    label: "Royal Purple",
    primaryColor: "hsl(262, 80%, 50%)",
  },
  {
    name: "amber",
    label: "Amber Gold",
    primaryColor: "hsl(43, 96%, 56%)",
  },
  {
    name: "rose",
    label: "Rose Pink",
    primaryColor: "hsl(330, 81%, 60%)",
  },
]

export function ColorThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState("green")

  const handleThemeChange = (theme: string) => {
    // Remove all existing theme classes
    document.documentElement.classList.remove("theme-green", "theme-blue", "theme-purple", "theme-amber", "theme-rose")

    // Add the new theme class
    document.documentElement.classList.add(`theme-${theme}`)
    setCurrentTheme(theme)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Paintbrush className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change color theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="p-2">
          <p className="text-sm font-medium mb-2">Color Theme</p>
          <Tabs defaultValue={currentTheme} onValueChange={handleThemeChange} className="w-full">
            <TabsList className="grid grid-cols-5 w-full h-auto">
              {themes.map((theme) => (
                <TabsTrigger
                  key={theme.name}
                  value={theme.name}
                  className="p-0 h-8 w-8 rounded-full data-[state=active]:border-2 data-[state=active]:border-primary"
                  style={{ backgroundColor: theme.primaryColor }}
                  title={theme.label}
                />
              ))}
            </TabsList>
          </Tabs>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
