"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface MeteorStyle {
  left: string;
  animationDelay: string;
  animationDuration: string;
}

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<MeteorStyle[]>([]);

  useEffect(() => {
    const width = window.innerWidth;
    const styles = Array.from({ length: number }).map((_, idx) => ({
      left: `${idx * (width / number)}px`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.floor(Math.random() * 5 + 5)}s`,
    }));

    setMeteorStyles(styles);
  }, [number]);

  // Don't render until mounted on the client
  if (meteorStyles.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-45 rounded-[9999px] bg-primary shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-px before:w-12.5 before:translate-y-[50%] before:transform before:bg-linear-to-r before:from-primary/20 before:to-transparent before:content-['']",
            className,
          )}
          style={{
            top: "-50px",
            left: style.left,
            animationDelay: style.animationDelay,
            animationDuration: style.animationDuration,
          }}
        />
      ))}
    </motion.div>
  );
};