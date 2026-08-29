import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiTwitterXLine,
} from "@remixicon/react"

export function Footer() {
  return (
    <div className="grid grid-cols-1 @lg:grid-cols-12 @lg:gap-4 py-8 @lg:py-8 px-6 @lg:px-0 bg-background text-text-contrast">
      <div className="col-span-1 @lg:col-start-3 mb-4 @lg:mb-0">
        <p className="text-xl mb-1 @lg:mb-2 ">
          <span className="font-mono font-bold tracking-tight border-b-2 border-text-contrast">
            &lt;/kavprist&gt;
          </span>
        </p>
        <p className="text-xl">Kolkata, India</p>
      </div>
      <div className="col-span-1 @lg:col-start-7 @lg:col-span-4 mb-8 @lg:mb-0 flex gap-4 @lg:justify-end items-center">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-secondary hover:text-primary"
        >
          <RiFacebookBoxLine />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-secondary hover:text-primary"
        >
          <RiInstagramLine />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-secondary hover:text-primary"
        >
          <RiYoutubeLine />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X / Twitter"
          className="text-secondary hover:text-primary"
        >
          <RiTwitterXLine />
        </a>
      </div>

      <hr className="col-span-1 @lg:col-start-3 @lg:col-span-8 mb-8 @lg:mb-0 border-text-contrast/20" />

      <div className="col-span-1 @lg:col-start-3 @lg:col-span-8 flex @lg:justify-end">
        <p className="text-xl text-text-contrast">
          Copyright © 2026{" "}
          <span className="font-bold underline decoration-secondary">Kavprist Technologies</span>. All rights
          reserved.
        </p>
      </div>
    </div>
  )
}
