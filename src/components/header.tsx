"use client";

import { useState } from "react";
import Image from "next/image";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="relative w-full flex flex-col overflow-hidden select-none">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/header-bg.jpg"
          alt="Skyline background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 md:py-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="kavprist logo"
            width={130}
            height={32}
            priority
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    href={link.href}
                    className="text-white font-semibold tracking-wide bg-transparent hover:bg-zinc-900/5 focus:bg-zinc-900/5 px-4 py-2 transition-all"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zinc-900 p-2 focus:outline-none focus:ring-2 focus:ring-zinc-900 rounded-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <RiCloseLine className="h-6 w-6" />
            ) : (
              <RiMenuLine className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 z-30 mx-6 bg-white/95 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col space-y-4 border border-zinc-200 md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-950 font-semibold tracking-wide py-2 border-b border-zinc-100 last:border-0 hover:text-zinc-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Hero Content Area */}
      <div className="relative z-10 flex-1 flex items-center w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="max-w-xl text-left">
          <h1 className="text-5xl md:text-7xl text-white font-bold mb-4 tracking-tight drop-shadow-sm">
            Heading
          </h1>
          <p className="text-base md:text-lg text-white mb-8 max-w-md leading-relaxed drop-shadow-sm font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          </p>
          <div className="inline-block pt-2">
            <Button variant="sketchy">Click Me</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };