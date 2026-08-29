import { ContactForm } from "@/components/contact-form";
import { MainNav } from "@/components/main-nav";
import { ServiceCard } from "@/components/service-card";
import {
  RiFileSearchLine,
  RiSpeedUpLine,
  RiShieldKeyholeLine,
  RiCodeLine,
  RiAccessibilityLine,
  RiMailLine,
  RiFacebookBoxLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiTwitterXLine,
} from "@remixicon/react";

export default function Home() {
  return (
    <main className="w-full @container">
      {/* Sticky/Fixed Header with Glassmorphism */}
      <header className="fixed top-0 z-50 w-full bg-secondary/10 shadow backdrop-blur-md border-b border-black/5 transition-all duration-300">
        <div className="grid grid-cols-1 @lg:grid-cols-12 py-4 px-6 @lg:px-0">
          <div className="col-span-1 @lg:col-span-12 flex justify-end @lg:grid @lg:grid-cols-subgrid">
            <div className="@lg:col-end-10 flex justify-center @lg:justify-start">
              <MainNav />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative grid grid-cols-1 @lg:grid-cols-12 bg-secondary pt-20 @lg:pt-28">
        {/* Background Image Layer (Spans full height from top to bottom of hero) */}
        <div className="absolute inset-y-0 right-0 w-full @lg:w-1/2 opacity-20 pointer-events-none z-0">
          <img 
            src={"/assets/header-bg-3.jpg"} 
            alt="" 
            className="w-full h-full object-cover @lg:max-h-none"
          />
        </div>

        <div className="col-span-1 @lg:col-span-12 grid grid-cols-subgrid">
          <div className="col-span-1 px-6 pb-12 pt-4 @lg:col-start-3 @lg:col-span-4 @lg:pb-24 @lg:pt-12 @lg:px-0">
            <h1 className="text-5xl @sm:text-6xl @4xl:text-7xl leading-tight">Transforming <span className="text-primary">Ideas</span> into Digital Space</h1>
            <p className="text-xs py-4 tracking-wider">Development with <span className="text-primary">QUALITY & INTELLIGENCE</span></p>
          </div>
        </div>
      </div>
      
      {/* About Us Section */}
      <div className="grid grid-cols-1 @lg:grid-cols-12 py-16 @lg:py-24 px-6 @lg:px-0">
        <div className="col-span-1 @lg:col-start-3 @lg:col-span-8 mb-6 @lg:mb-8">
          <h2 className="text-4xl @sm:text-5xl @lg:text-6xl">Who are <span className="text-primary">we</span></h2>
        </div>

        <div className="col-span-1 @lg:col-start-3 @lg:col-span-8">
          <p className="text-lg @lg:text-xl mb-4 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tempore earum, fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut explicabo in ipsa, aliquid Error tempore earum, fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut explicabo in ipsa, aliquid modi est odit! modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae?</p>
          <p className="text-lg @lg:text-xl mb-2 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tempore earum,</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 @lg:grid-cols-12 py-16 @lg:py-24 bg-background px-6 @lg:px-0">
        <div className="col-span-1 @lg:col-start-3 @lg:col-span-8 mb-6 @lg:mb-8">
          <h2 className="text-4xl @sm:text-5xl @lg:text-6xl text-white">What <span className="text-green">we offer</span></h2>
        </div>

        <div className="col-span-1 @lg:col-start-3 @lg:col-span-4">
          <p className="text-lg @lg:text-xl mb-2 leading-relaxed text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tempore earum, fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut</p>
        </div>

        <div className="col-span-1 @lg:col-start-3 @lg:col-span-8 @lg:grid @lg:grid-cols-subgrid py-8 grid grid-cols-1 gap-4 text-white">

          <ServiceCard
            className="@lg:col-span-8"
            icon={<RiFileSearchLine className="size-6" />}
            title="Full Site Audit"
            description="Complete technical evaluation of your codebase, performance metrics, search engine visibility, and user-experience issues."
          />

          <ServiceCard
            className="@lg:col-span-4"
            icon={<RiSpeedUpLine className="size-6" />}
            title="Performance Optimization"
            description="Elevate page loading speeds, optimize assets, and achieve perfect Lighthouse/Web Vital scores for your site."
          />

          <ServiceCard
            className="@lg:col-span-4"
            icon={<RiShieldKeyholeLine className="size-6" />}
            title="Security Assessment"
            description="Vulnerability analysis, security headers review, and dependency auditing to safeguard your sensitive business data."
          />

          <ServiceCard
            className="@lg:col-span-4"
            icon={<RiCodeLine className="size-6" />}
            title="API Verification"
            description="Performance testing, integration assertions, and detailed schema validation of your application endpoints."
          />

          <ServiceCard
            className="@lg:col-span-4"
            icon={<RiAccessibilityLine className="size-6" />}
            title="Accessibility Audit"
            description="Comprehensive WCAG 2.2 checklist verification to ensure inclusive, compliant usage for all users and assistive tools."
          />

        </div>
      </div>

      {/* Contact Us Section */}
      <div className="grid grid-cols-1 @lg:grid-cols-12 @lg:gap-4 py-16 @lg:py-4 px-6 @lg:px-0">
        <div className="col-span-1 @lg:col-start-3 @lg:col-span-4 @lg:pt-20">
          <h2 className="text-4xl @sm:text-5xl @lg:text-6xl mb-4">Contact <span className="text-primary">Us</span></h2>
          <p className="mb-2">Let's build something together...</p>
          <p className="p-4 mb-4 bg-background text-white flex gap-2 items-center">
            <RiMailLine /> <span>Email us at <a href="mailto://help@domain.com" className="text-secondary hover:text-primary">help@domain.com</a></span>
          </p>
        </div>
        <div className="col-span-1 @lg:col-start-3 @lg:col-span-4">
        </div>
        <div className="col-span-1 @lg:col-start-7 @lg:row-start-1 @lg:col-span-4 @lg:row-span-2 bg-background">
          <ContactForm />
        </div>
      </div>

      {/* Footer Section */}
      <div className="grid grid-cols-1 @lg:grid-cols-12 @lg:gap-4 py-8 @lg:py-8 px-6 @lg:px-0 bg-background text-white">
        <div className="col-span-1 @lg:col-start-3 @lg:col-span-4">
          <p className="text-xl">LOGO</p>
          <p className="text-xl">Kolkata, India</p>
        </div>
        <div className="col-span-1 @lg:col-start-7 @lg:col-span-4 flex gap-4 justify-end items-center">
          <RiFacebookBoxLine />
          <RiInstagramLine />
          <RiYoutubeLine />
          <RiTwitterXLine />
        </div>

        <hr className="col-span-1 @lg:col-start-3 @lg:col-span-8" />

        <div className="col-span-1 @lg:col-start-3 @lg:col-span-8 flex justify-center">
          <p className="text-xl">Copyright © 2026 Kavprist Technologies. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
