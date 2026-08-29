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
                className="hover:underline hover:bg-transparent bg-transparent text-base p-0 cursor-pointer font-normal text-black"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="hover:underline hover:bg-transparent bg-transparent text-base p-0 cursor-pointer font-normal text-black"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="hover:underline hover:bg-transparent bg-transparent text-base p-0 cursor-pointer font-normal text-black"
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="hover:underline hover:bg-transparent bg-transparent text-base p-0 cursor-pointer font-normal text-black"
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
            <div className="flex flex-col gap-6 px-2">
              <a
                href="#"
                className="text-lg font-normal hover:underline text-black transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-lg font-normal hover:underline text-black transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-lg font-normal hover:underline text-black transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-lg font-normal hover:underline text-black transition-colors"
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
