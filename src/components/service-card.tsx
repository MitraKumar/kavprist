"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  title: string
  description: string
}

export function ServiceCard({
  icon,
  title,
  description,
  className,
  ...props
}: ServiceCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty("--mouse-x", `${x}px`)
    cardRef.current.style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "col-span-1 p-6 bg-green shadow-inner relative overflow-hidden group select-none transition-colors duration-500 cursor-pointer",
        className
      )}
      {...props}
    >
      {/* Radial gradient overlay that fades in on hover, centered at the cursor position */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle 300px at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--color-primary) 0%, var(--color-primary) 60%, transparent 100%)",
        }}
      />

      {/* Card Content layered above the hover overlay */}
      <div className="relative z-10 pointer-events-none">
        <div className="p-2.5 bg-white/10 rounded-full w-fit mb-4 text-white">
          {icon}
        </div>
        <h3 className="text-2xl mb-2 font-serif text-white">{title}</h3>
        <p className="text-base leading-relaxed text-white/90">{description}</p>
      </div>
    </div>
  )
}
