"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionBadge } from "@/components/ui/section-badge";
import { ImageLightbox } from "@/components/ui/image-lightbox";

const stayImages = [
  { src: "/images/stay/stay-1.jpeg", alt: "Ponta do Sol coastline" },
  { src: "/images/stay/stay-2.png", alt: "Village view" },
  { src: "/images/stay/stay-3.png", alt: "Madeira landscape" },
  { src: "/images/stay/stay-4.jpeg", alt: "Anjos Waterfall" },
];

const PREVIEW_COUNT = 2;

export function LocationSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      {lightboxIndex !== null && (
        <ImageLightbox
          images={stayImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
      <section className="bg-(--beige) grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-7.5 px-6 md:px-20 xl:px-44 py-16 md:py-24">
        {/* Image gauche */}
        <div
          className="relative rounded-3xl overflow-hidden cursor-pointer h-80 lg:h-128"
          onClick={() => setLightboxIndex(0)}
        >
          <Image
            src={stayImages[0].src}
            alt={stayImages[0].alt}
            fill
            sizes="45vw"
            className="object-cover"
          />
        </div>

        {/* Colonne texte + images */}
        <div className="h-full flex flex-col gap-6">
          <SectionBadge label="Location" />
          <h2 className="serif font-bold text-4xl md:text-5xl lg:text-6xl text-(--green) leading-[1.05] tracking-tighter">
            Where you will stay
          </h2>
          <p className="text-sm text-(--blue)/70 leading-relaxed max-w-md">
            Ponta do Sol is the sunniest village on the island — where dramatic cliffs meet the
            Atlantic Ocean. Around Ponta do Sol, you can find small villages, terraced fields, and
            hiking trails along the coastline and hills. Nearby natural attractions include the
            Anjos Waterfall.
          </p>

          {/* 2 petites images */}
          <div className="mt-4 lg:mt-auto flex gap-4 lg:gap-7.5">
            <div
              className="relative flex-1 rounded-2xl overflow-hidden cursor-pointer"
              style={{ height: 180 }}
              onClick={() => setLightboxIndex(1)}
            >
              <Image
                src={stayImages[1].src}
                alt={stayImages[1].alt}
                fill
                sizes="(max-width: 1024px) 45vw, 295px"
                className="object-cover"
              />
            </div>
            <div
              className="relative flex-1 rounded-2xl overflow-hidden cursor-pointer"
              style={{ height: 180 }}
              onClick={() => setLightboxIndex(PREVIEW_COUNT)}
            >
              <Image
                src={stayImages[2].src}
                alt={stayImages[2].alt}
                fill
                sizes="(max-width: 1024px) 45vw, 295px"
                className="object-cover"
              />
              {stayImages.length > PREVIEW_COUNT + 1 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    +{stayImages.length - PREVIEW_COUNT - 1} more
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
