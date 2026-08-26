import Image from "next/image";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#242812] py-16 md:py-24 select-none">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Brand Logo (inverted to white) */}
        <div className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="kavprist logo"
            width={130}
            height={32}
            className="h-8 md:h-10 w-auto object-contain invert brightness-200"
          />
        </div>

        {/* Right Side: Social Media Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors"
            aria-label="Facebook"
          >
            <RiFacebookFill className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors"
            aria-label="Instagram"
          >
            <RiInstagramFill className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors"
            aria-label="LinkedIn"
          >
            <RiLinkedinFill className="h-6 w-6" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors"
            aria-label="YouTube"
          >
            <RiYoutubeFill className="h-6 w-6" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export { Footer };
