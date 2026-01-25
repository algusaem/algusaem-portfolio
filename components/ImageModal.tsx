"use client";

import { useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { slideVariants } from "@/lib/animations";

interface ImageModalProps {
  images: string[];
  currentImage: number;
  direction: number;
  alt: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export function ImageModal({
  images,
  currentImage,
  direction,
  alt,
  onClose,
  onPrev,
  onNext,
  onSelect,
}: ImageModalProps) {
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        aria-label="Close modal"
      >
        <X className="size-8" />
      </button>

      <div
        className="relative w-[90vw] h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.div
            key={currentImage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt={`${alt} ${currentImage + 1}`}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {hasMultipleImages && (
        <>
          <ChevronLeft
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 size-10 text-white/80 hover:text-white cursor-pointer transition-colors"
            aria-label="Previous image"
          />
          <ChevronRight
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 size-10 text-white/80 hover:text-white cursor-pointer transition-colors"
            aria-label="Next image"
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(i);
                }}
                className={clsx(
                  "size-2.5 rounded-full transition-colors",
                  i === currentImage
                    ? "bg-primary"
                    : "bg-white/40 hover:bg-white/60"
                )}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}
