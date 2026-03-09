"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type ImageLightboxProps = {
  images: { src: string; alt: string }[];
  initialIndex?: number;
  onClose: () => void;
};

export function ImageLightbox({ images, initialIndex = 0, onClose }: ImageLightboxProps) {
  const [current, setCurrent] = useState(initialIndex);
  const [visible, setVisible] = useState(false);
  const [imgVisible, setImgVisible] = useState(true);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  const goTo = (index: number) => {
    if (index === current) return;
    setImgVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setImgVisible(true);
    }, 150);
  };

  const prev = () => goTo((current - 1 + images.length) % images.length);
  const next = () => goTo((current + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center transition-opacity duration-200"
      style={{ background: "rgba(0,0,0,0.85)", opacity: visible ? 1 : 0 }}
      onClick={handleClose}
    >
      {/* Close */}
      <button
        onClick={handleClose}
        className="absolute top-5 right-5 w-10 h-10 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer z-10"
      >
        <X size={18} className="text-white" />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer z-10"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer z-10"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      )}

      {/* Main image — fills available space above thumbnails */}
      <div
        className="flex-1 flex items-center justify-center w-full px-20 transition-opacity duration-150"
        style={{ opacity: imgVisible ? 1 : 0, minHeight: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="max-w-full max-h-full object-contain rounded-xl block"
          style={{ maxWidth: "min(80vw, 1000px)", maxHeight: "calc(90vh - 100px)" }}
        />
      </div>

      {/* Thumbnails — always at bottom */}
      {images.length > 1 && (
        <div
          className="flex-none flex gap-3 px-4 pb-8"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="flex-none rounded-lg overflow-hidden cursor-pointer transition-all duration-200"
              style={{
                width: 64,
                height: 48,
                opacity: i === current ? 1 : 0.45,
                outline: i === current ? "2px solid white" : "none",
                outlineOffset: 2,
              }}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
