"use client";

import { motion } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ pointerEvents: isLoading ? "auto" : "none" }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.span
          className="text-4xl md:text-6xl font-bold text-foreground"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          AG
        </motion.span>
        <motion.span
          className="text-xs md:text-sm font-mono text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          loading
        </motion.span>
      </motion.div>

      {/* Loading bar */}
      <motion.div
        className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-border"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <motion.div
          className="h-full bg-primary origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 0.3, 0.5, 0.7, 1] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Decorative dots */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 size-2 rounded-full bg-accent"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 size-3 rounded-full bg-primary/30"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 size-1.5 rounded-full bg-accent/50"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
    </motion.div>
  );
}
