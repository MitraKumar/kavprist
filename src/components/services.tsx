"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const Services = () => {
  const [api, setApi] = useState<CarouselApi>();

  const services = [
    {
      title: "Full Site QA Audit",
      icon: "/assets/qa-service-icon.png",
    },
    {
      title: "Performance Optimization",
      icon: "/assets/qa-service-icon.png",
    },
    {
      title: "Security Assessment",
      icon: "/assets/qa-service-icon.png",
    },
    {
      title: "API Verification",
      icon: "/assets/qa-service-icon.png",
    },
    {
      title: "Accessibility Audit",
      icon: "/assets/qa-service-icon.png",
    },
  ];

  // Implement loop-safe auto-scroll
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="services" className="w-full bg-[#242812] py-20 md:py-28 overflow-hidden select-none">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title & Text */}
          <div className="lg:col-span-5 text-left flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              What we offer
            </h2>
            <p className="text-base text-white/80 leading-relaxed font-light mb-8 max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London,
            </p>
            <Button variant="sketchy">All Services</Button>
          </div>

          {/* Right Column: Autoscrolling Slider */}
          <div className="lg:col-span-7 w-full overflow-visible -mr-6 lg:-mr-[calc((100vw-min(100vw,1280px))/2+1.5rem)]">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="overflow-visible -ml-4">
                {services.map((service, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-full sm:basis-1/2"
                  >
                    <div className="flex items-center gap-6 p-8 bg-[#eb7e0a] rounded-2xl h-40 w-full transition-transform active:scale-[0.98]">
                      {/* Shield icon (inverted to match white color from mockup) */}
                      <div className="relative w-16 h-16 shrink-0">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          fill
                          className="object-contain invert brightness-200"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-medium text-white leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export { Services };
