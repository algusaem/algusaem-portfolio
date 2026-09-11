"use client";

import { motion, useReducedMotion } from "framer-motion";
import { borderPathVariants } from "@/lib/animations";

interface AnimatedBorderProps {
  isActive: boolean;
}

export function AnimatedBorder({ isActive }: AnimatedBorderProps) {
  const shouldReduceMotion = useReducedMotion();
  const activeVariant = shouldReduceMotion ? "still" : "active";

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      fill="none"
    >
      <motion.rect
        x="1"
        y="1"
        className="w-[calc(100%-2px)] h-[calc(100%-2px)]"
        rx="11"
        ry="11"
        stroke="var(--primary)"
        strokeWidth="2"
        variants={borderPathVariants}
        initial="idle"
        animate={isActive ? activeVariant : "idle"}
      />
    </svg>
  );
}
