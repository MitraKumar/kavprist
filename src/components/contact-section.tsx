import { ContactForm } from "@/components/contact-form"
import { RiMailLine } from "@remixicon/react"

export function ContactSection() {
  return (
    <div className="grid grid-cols-1 @lg:grid-cols-12 @lg:gap-4 py-16 @lg:py-4 px-6 @lg:px-0">
      <div className="col-span-1 @lg:col-start-3 @lg:col-span-4 @lg:pt-20">
        <h2 className="text-4xl @sm:text-5xl @lg:text-6xl mb-4">
          Contact <span className="text-primary">Us</span>
        </h2>
        <p className="mb-2">Let&apos;s build something together...</p>
        <p className="p-4 mb-4 bg-background text-white flex gap-2 items-center">
          <RiMailLine />{" "}
          <span>
            Email us at{" "}
            <a
              href="mailto://help@domain.com"
              className="text-secondary hover:text-primary"
            >
              help@domain.com
            </a>
          </span>
        </p>
      </div>
      <div className="col-span-1 @lg:col-start-3 @lg:col-span-4"></div>
      <div className="col-span-1 @lg:col-start-7 @lg:row-start-1 @lg:col-span-4 @lg:row-span-2 bg-background p-6 @lg:p-8 rounded-xl shadow-lg">
        <ContactForm />
      </div>
    </div>
  )
}
