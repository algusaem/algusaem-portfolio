"use client";

import { useState, useRef } from "react";
import clsx from "clsx";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { ImageModal } from "./ImageModal";

const SWIPE_THRESHOLD_PX = 50;

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const touchStartX = useRef(0);
  const hasMultipleImages = images.length > 1;

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!hasMultipleImages) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > SWIPE_THRESHOLD_PX) {
      if (diff > 0) {
        setCurrentImage(
          currentImage === images.length - 1 ? 0 : currentImage + 1
        );
      } else {
        setCurrentImage(
          currentImage === 0 ? images.length - 1 : currentImage - 1
        );
      }
    }
  };

  if (images.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
        <ImageIcon className="size-16" />
      </div>
    );
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-md"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image strip - all images rendered, translated to show current */}
      <motion.div
        className="absolute inset-0 flex"
        animate={{ x: `${-currentImage * 100}%` }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative min-w-full h-full flex-shrink-0">
            <Image
              src={src}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-cover cursor-pointer"
              onClick={() => setIsModalOpen(true)}
              priority={index === 0}
            />
          </div>
        ))}
      </motion.div>

      {hasMultipleImages && (
        <>
          <ChevronLeft
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 size-8 text-primary cursor-pointer opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 drop-shadow-md hover:scale-110! transition-all duration-300 ease-in-out z-20"
            aria-label="Previous image"
          />
          <ChevronRight
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 size-8 text-primary cursor-pointer opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 drop-shadow-md hover:scale-110! transition-all duration-300 ease-in-out z-20"
            aria-label="Next image"
          />

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goToImage(i)}
                className={clsx(
                  "size-2 rounded-full transition-colors",
                  i === currentImage
                    ? "bg-primary"
                    : "bg-background/60 hover:bg-background/80"
                )}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <AnimatePresence>
        {isModalOpen && (
          <ImageModal
            key="image-modal"
            images={images}
            currentImage={currentImage}
            alt={alt}
            onClose={() => setIsModalOpen(false)}
            onPrev={prevImage}
            onNext={nextImage}
            onSelect={goToImage}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
