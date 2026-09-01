import { ServiceCard } from "@/components/service-card"
import {
  RiFileSearchLine,
  RiSpeedUpLine,
  RiShieldKeyholeLine,
  RiCodeLine,
  RiAccessibilityLine,
} from "@remixicon/react"
import { Meteors } from "./ui/meteors"

export function ServicesSection() {
  return (
    <div id="services" className="relative grid grid-cols-1 @lg:grid-cols-12 py-16 @lg:py-24 bg-secondary text-secondary-foreground px-6 @lg:px-0">
      <div className="col-span-1 @lg:col-start-3 @lg:col-span-8 mb-6 @lg:mb-8">
        <h2 className="text-4xl @sm:text-5xl @lg:text-6xl">
          What we <span className="text-primary">offer</span>
        </h2>
      </div>

      <div className="col-span-1 @lg:col-start-3 @lg:col-span-4">
        <p className="text-lg @lg:text-xl mb-2 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          tempore earum, fugit ab ut explicabo in ipsa, aliquid modi est odit!
          Distinctio voluptates, magnam in quo veniam eum optio repudiandae?
          fugit ab ut
        </p>
      </div>

      <div className="col-span-1 @lg:col-start-3 @lg:col-span-8 @lg:grid @lg:grid-cols-subgrid py-8 grid grid-cols-1 gap-4">
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
  )
}
