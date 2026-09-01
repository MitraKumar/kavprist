/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import * as React from "react"
import { RiSunLine, RiMoonLine } from "@remixicon/react"

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark")

  React.useEffect(() => {
    const syncTheme = () => {
      const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
      if (savedTheme === "light") {
        setTheme("light")
        document.documentElement.classList.add("light")
      } else {
        setTheme("dark")
        document.documentElement.classList.remove("light")
      }
    }

    syncTheme()

    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<"light" | "dark">
      if (customEvent.detail) {
        setTheme(customEvent.detail)
      }
    }

    window.addEventListener("theme-change", handleThemeChange)
    window.addEventListener("storage", syncTheme)

    return () => {
      window.removeEventListener("theme-change", handleThemeChange)
      window.removeEventListener("storage", syncTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("light", newTheme === "light")
    document.documentElement.classList.remove("dark")
    window.dispatchEvent(new CustomEvent("theme-change", { detail: newTheme }))
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-black/10 text-black cursor-pointer transition-colors duration-200 focus:outline-none border-0"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <RiSunLine className="size-5 text-black" />
      ) : (
        <RiMoonLine className="size-5 text-black" />
      )}
    </button>
  )
}
