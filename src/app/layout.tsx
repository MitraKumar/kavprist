import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toast";
import Script from "next/script";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "Kavprist",
  description: "Best software agency one could hope for.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", instrumentSerif.variable, instrumentSans.variable)}
    >
      <head>
        {/* <Script id="theme-loader" strategy="beforeInteractive">
          {`
            try {
              const savedTheme = localStorage.getItem('theme');
              if (savedTheme === 'light') {
                document.documentElement.classList.add('light');
              } else {
                document.documentElement.classList.remove('light');
              }
            } catch (e) {}
          `}
        </Script> */}
      </head>
      <body className="min-h-full flex flex-col bg-page-bg text-text-base transition-colors duration-300">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
