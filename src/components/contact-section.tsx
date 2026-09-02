import { ContactForm } from "@/components/contact-form"
import { RiMailLine } from "@remixicon/react"
import { Globe } from "./ui/globe"

export function ContactSection() {
  return (
    <div id="contact" className="relative grid grid-cols-1 @lg:grid-cols-12 @lg:gap-4 py-16 @lg:py-12 px-6 @lg:px-0 text-black">
      <div className="col-span-1 @lg:col-start-3 @lg:col-span-4 @lg:pt-20">
        <h2 className="text-4xl @sm:text-5xl @lg:text-6xl mb-4">
          Contact <span className="text-primary">Us</span>
        </h2>
        <p className="mb-2">Let&apos;s build something together...</p>
        <p className="py-4 mb-4 inset-shadow-sm flex gap-2 items-center">
          <RiMailLine />{" "}
          <span className="text-black">
            Email us at{" "}
            <a
              href="mailto://help@domain.com"
              className="text-primary hover:text-primary/80"
            >
              help@domain.com
            </a>
          </span>
        </p>
        <div className="relative mb-4 w-full px-40 pt-8 pb-40 md:pb-60 overflow-hidden">
          <Globe className="top-0" />
        </div>
      </div>
      <div className="col-span-1 @lg:col-start-3 @lg:col-span-4"></div>
      <div className="col-span-1 @lg:col-start-7 @lg:row-start-1 @lg:col-span-4 @lg:row-span-2 bg-secondary p-6 @lg:p-8 shadow-lg">
        <ContactForm />
      </div>
    </div>
  )
}
