import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RiArrowRightUpLine } from "@remixicon/react";

export function HeroSection() {
  return (
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
          <h1 className="text-5xl @sm:text-6xl @4xl:text-7xl leading-tight">
            Transforming <span className="text-primary">Ideas</span> into Digital
            Space
          </h1>
          <p className="text-xs py-4 tracking-wider">
            Development with{" "}
            <span className="text-primary">QUALITY & INTELLIGENCE</span>
          </p>

          <a href="#contact" className={cn("mt-4", "border-2", "border-primary", buttonVariants({ variant: "link" }))}>
            Let&apos;s Connect <RiArrowRightUpLine />
          </a>
        </div>
      </div>
    </div>
  )
}
