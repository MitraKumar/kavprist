import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiTwitterXLine,
} from "@remixicon/react"
import { NoiseTexture } from "./ui/noise-texture"

export function Footer() {
  return (
    <div className="relative grid grid-cols-1 @lg:grid-cols-12 @lg:gap-4 py-8 @lg:py-8 px-6 @lg:px-0 text-black">
      <NoiseTexture noiseOpacity={0.45} />
      <div className="col-span-1 @lg:col-start-3 mb-4 @lg:mb-0">
        <p className="text-xl mb-1 @lg:mb-2 ">
          <span className="font-mono font-bold tracking-tight border-b-2 border-white">
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
          className="text-accent hover:text-primary"
        >
          <RiFacebookBoxLine />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-primary"
        >
          <RiInstagramLine />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-primary"
        >
          <RiYoutubeLine />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-primary"
        >
          <RiTwitterXLine />
        </a>
      </div>

      <hr className="col-span-1 @lg:col-start-3 @lg:col-span-8 mb-8 @lg:mb-0" />

      <div className="col-span-1 @lg:col-start-3 @lg:col-span-8 flex @lg:justify-end">
        <p className="text-xl">
          Copyright © 2026{" "}
          <span className="text-accent">Kavprist Technologies</span>. All rights
          reserved.
        </p>
      </div>
    </div>
  )
}
