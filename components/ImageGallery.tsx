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
  const slideRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const hasMultipleImages = images.length > 1;

  // Return keyboard focus to the image that is showing when the viewer closes
  const closeModal = () => {
    setIsModalOpen(false);
    slideRefs.current[currentImage]?.focus({ preventScroll: true });
  };

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
          currentImage === images.length - 1 ? 0 : currentImage + 1,
        );
      } else {
        setCurrentImage(
          currentImage === 0 ? images.length - 1 : currentImage - 1,
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
          <button
            key={index}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            type="button"
            onClick={() => setIsModalOpen(true)}
            tabIndex={index === currentImage ? 0 : -1}
            aria-label={`Enlarge ${alt} ${index + 1}`}
            className="relative min-w-full h-full shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-primary"
          >
            <Image
              src={src}
              alt={`${alt} ${index + 1}`}
              fill
              sizes="(min-width: 1280px) 680px, (min-width: 1024px) 55vw, 100vw"
              className="object-cover"
              priority={index === 0}
            />
          </button>
        ))}
      </motion.div>

      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-primary cursor-pointer opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 focus-visible:opacity-100 focus-visible:scale-100 [@media(hover:none)]:opacity-100 [@media(hover:none)]:scale-100 drop-shadow-md hover:scale-110! transition-all duration-300 ease-in-out z-20 after:absolute after:-inset-2.5"
          >
            <ChevronLeft className="size-8" />
          </button>
          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-primary cursor-pointer opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 focus-visible:opacity-100 focus-visible:scale-100 [@media(hover:none)]:opacity-100 [@media(hover:none)]:scale-100 drop-shadow-md hover:scale-110! transition-all duration-300 ease-in-out z-20 after:absolute after:-inset-2.5"
          >
            <ChevronRight className="size-8" />
          </button>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex z-20">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToImage(i)}
                className="group/dot flex size-6 items-center justify-center"
                aria-label={`Go to image ${i + 1}`}
              >
                <span
                  className={clsx(
                    "size-2 rounded-full transition-colors",
                    i === currentImage
                      ? "bg-primary"
                      : "bg-background/60 group-hover/dot:bg-background/80",
                  )}
                />
              </button>
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
            onClose={closeModal}
            onPrev={prevImage}
            onNext={nextImage}
            onSelect={goToImage}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
