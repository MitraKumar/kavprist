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
import {
  RiMenu3Line,
  RiMailLine,
  RiFacebookBoxLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from "@remixicon/react"

export function MainNav() {
  return (
    <div className="w-full">
      {/* Desktop Menu */}
      <div className="hidden @lg:flex justify-end">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="relative px-4 py-1.5 text-base cursor-pointer font-normal text-black transition-all duration-300 hover:bg-primary hover:text-white rounded-full bg-transparent"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#about"
                className="relative px-4 py-1.5 text-base cursor-pointer font-normal text-black transition-all duration-300 hover:bg-primary hover:text-white rounded-full bg-transparent"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#services"
                className="relative px-4 py-1.5 text-base cursor-pointer font-normal text-black transition-all duration-300 hover:bg-primary hover:text-white rounded-full bg-transparent"
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#contact"
                className="relative px-4 py-1.5 text-base cursor-pointer font-normal text-black transition-all duration-300 hover:bg-primary hover:text-white rounded-full bg-transparent"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div className="@lg:hidden flex items-center justify-end">
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
          <SheetContent side="right" className="w-[280px] bg-secondary border-l border-black/10 text-black p-6 flex flex-col justify-between">
            <div>
              <SheetHeader className="mb-0">
                <SheetTitle className="text-left font-serif text-2xl border-b border-black/10 pb-4 text-black">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4">
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
            </div>

            {/* Mobile Drawer Footer with Contact Info & Socials */}
            <div className="border-t border-black/10 pt-6 mt-auto flex flex-col gap-4 px-4">
              <div className="text-xs text-black/60 uppercase font-semibold tracking-wider">Contact Info</div>
              <a
                href="mailto:help@domain.com"
                className="text-sm font-normal text-black hover:underline flex items-center gap-2 w-fit transition-colors"
              >
                <RiMailLine className="size-4 shrink-0" /> help@domain.com
              </a>
              <div className="flex gap-4 mt-2 text-black/80">
                <a href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-primary transition-colors">
                  <RiFacebookBoxLine className="size-5" />
                </a>
                <a href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-primary transition-colors">
                  <RiInstagramLine className="size-5" />
                </a>
                <a href="https://x.com" target="_blank" aria-label="X / Twitter" className="hover:text-primary transition-colors">
                  <RiTwitterXLine className="size-5" />
                </a>
                <a href="https://youtube.com" target="_blank" aria-label="YouTube" className="hover:text-primary transition-colors">
                  <RiYoutubeLine className="size-5" />
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
