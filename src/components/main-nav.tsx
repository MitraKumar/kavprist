"use client"

import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { RiMenu3Line } from "@remixicon/react"

export function MainNav() {
  return (
    <div className="w-full">
      {/* Desktop Menu */}
      <div className="hidden @lg:block">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="relative px-4 py-1.5 text-base cursor-pointer font-normal text-black transition-all duration-300 hover:bg-primary hover:text-white rounded-full bg-transparent"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="relative px-4 py-1.5 text-base cursor-pointer font-normal text-black transition-all duration-300 hover:bg-primary hover:text-white rounded-full bg-transparent"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="relative px-4 py-1.5 text-base cursor-pointer font-normal text-black transition-all duration-300 hover:bg-primary hover:text-white rounded-full bg-transparent"
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="relative px-4 py-1.5 text-base cursor-pointer font-normal text-black transition-all duration-300 hover:bg-primary hover:text-white rounded-full bg-transparent"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div className="@lg:hidden flex items-center">
        <Sheet>
          <SheetTrigger
            render={
              <button
                className="p-2 -mr-2 text-black cursor-pointer focus:outline-none bg-transparent border-0 inline-flex items-center justify-center"
                aria-label="Toggle Menu"
              />
            }
          >
            <RiMenu3Line className="size-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-secondary border-l border-black/10 text-black p-6">
            <SheetHeader className="mb-8">
              <SheetTitle className="text-left font-serif text-2xl border-b border-black/10 pb-4 text-black">
                Menu
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 px-2">
              <a
                href="#"
                className="relative px-4 py-2 w-fit block text-lg font-normal text-black transition-all duration-300 hover:bg-primary hover:text-white rounded-full"
              >
                Home
              </a>
              <a
                href="#"
                className="relative px-4 py-2 w-fit block text-lg font-normal text-black transition-all duration-300 hover:bg-primary hover:text-white rounded-full"
              >
                About
              </a>
              <a
                href="#"
                className="relative px-4 py-2 w-fit block text-lg font-normal text-black transition-all duration-300 hover:bg-primary hover:text-white rounded-full"
              >
                Services
              </a>
              <a
                href="#"
                className="relative px-4 py-2 w-fit block text-lg font-normal text-black transition-all duration-300 hover:bg-primary hover:text-white rounded-full"
              >
                Contact
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
