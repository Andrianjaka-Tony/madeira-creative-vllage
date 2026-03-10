"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";

type AssetType = "video" | "image";
type Asset = { source: string; type: AssetType };

const SLIDE_INTERVAL = 3500;

const activities: { title: string; description: string; assets: Asset[] }[] = [
  {
    title: "Boat Trip with Pole",
    description: "Dance above the Atlantic",
    assets: [
      { source: "/images/explore/explore-1-1.jpg", type: "image" },
      { source: "/images/explore/explore-1-2.mov", type: "video" },
      { source: "/images/explore/explore-1-3.jpg", type: "image" },
    ],
  },
  {
    title: "Black Sand Beach Photoshoot",
    description: "Professional shoot at the beach",
    assets: [
      { source: "/images/explore/explore-2-1.jpg", type: "image" },
      { source: "/images/explore/explore-2-2.mov", type: "video" },
      { source: "/images/explore/explore-2-3.jpg", type: "image" },
    ],
  },
  {
    title: "Pole Violin Performance",
    description: "Live music meets aerial art",
    assets: [{ source: "/images/explore/explore-8-1.mp4", type: "video" }],
  },
  {
    title: "Tea Ceremony",
    description: "Mindfulness & island culture",
    assets: [{ source: "/images/explore/explore-3-1.mp4", type: "video" }],
  },
  {
    title: "Fanal Forest Hike",
    description: "Enchanted laurisilva forest",
    assets: [
      { source: "/images/explore/explore-4-1.png", type: "image" },
      { source: "/images/explore/explore-4-2.jpg", type: "image" },
      { source: "/images/explore/explore-4-3.png", type: "image" },
    ],
  },
  {
    title: "Pico do Arieiro Hike",
    description: "Above the clouds at 1818m",
    assets: [{ source: "/images/explore/explore-5-1.mov", type: "video" }],
  },
  {
    title: "Photoshoot in the Villa",
    description: "Capture memories at the manor",
    assets: [
      { source: "/images/explore/explore-6-1.jpg", type: "image" },
      { source: "/images/explore/explore-6-2.jpg", type: "image" },
    ],
  },
  {
    title: "Social Community Dinner",
    description: "Share a meal, make connections",
    assets: [{ source: "/images/explore/explore-7-1.jpg", type: "image" }],
  },
];

export function ExploreSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows);
    return () => el.removeEventListener("scroll", updateArrows);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth / 2;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="px-6 md:px-20 xl:px-32 py-16 md:py-24">
      <SectionHeader />
      <div className="relative mt-12">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm transition-opacity duration-200 cursor-pointer"
          style={{ opacity: canScrollLeft ? 1 : 0, pointerEvents: canScrollLeft ? "auto" : "none" }}
        >
          <ChevronLeft size={18} className="text-(--blue)" />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm transition-opacity duration-200 cursor-pointer"
          style={{ opacity: canScrollRight ? 1 : 0, pointerEvents: canScrollRight ? "auto" : "none" }}
        >
          <ChevronRight size={18} className="text-(--blue)" />
        </button>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {activities.map((a) => (
            <div key={a.title} className="flex-none w-[75vw] md:w-[calc((100%-48px)/3)] lg:w-[calc((100%-48px)/4)]">
              <ActivityCard {...a} />
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-sm text-(--green)/50 mt-12">
        No other pole retreat in Europe combines all of this.
      </p>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
      <div className="w-full lg:w-2/5 flex flex-col gap-6">
        <SectionBadge label="Activities" />
        <h2 className="mt-4 lg:mt-12 serif font-bold text-4xl md:text-5xl lg:text-6xl text-(--blue) leading-[1.05] tracking-tighter">
          Explore the Activities of the Retreat
        </h2>
      </div>
      <div className="w-full lg:w-2/5 flex flex-col justify-between gap-6 mt-auto">
        <p className="text-sm text-(--blue)/80 leading-relaxed">
          The retreat includes several activities centred around pole dancing, as well as island
          exploration — a boat trip with a hanging pole, a photoshoot on a black sand beach, and
          many other exciting experiences. A unique all-in-one event that blends adventure and
          creativity.
        </p>
        <Button
          text="Book Retreat"
          icon={ArrowRight}
          variant="default"
          href="https://forms.gle/RKq6z77pzecVbxxT9"
          className="w-fit"
        />
      </div>
    </div>
  );
}

type ActivityCardProps = { title: string; description: string; assets: Asset[] };

function ActivityCard({ title, description, assets }: ActivityCardProps) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [playingSrc, setPlayingSrc] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const interactedRef = useRef(false);

  const goTo = (index: number) => {
    if (index === current || animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 400);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    interactedRef.current = true;
    goTo((current - 1 + assets.length) % assets.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    interactedRef.current = true;
    goTo((current + 1) % assets.length);
  };

  useEffect(() => {
    if (assets.length <= 1) return;
    if (interactedRef.current) return;
    timeoutRef.current = setTimeout(() => {
      goTo((current + 1) % assets.length);
    }, SLIDE_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const asset = assets[current];

  // Mode player inline — remplace le carousel
  if (playingSrc) {
    return (
      <div className="relative aspect-3/4 rounded-3xl overflow-hidden bg-black">
        <video src={playingSrc} controls autoPlay playsInline className="w-full h-full object-contain" />
        <button
          onClick={() => setPlayingSrc(null)}
          className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer"
        >
          <X size={16} className="text-white" />
        </button>
      </div>
    );
  }

  return (
    <div className="relative aspect-3/4 rounded-3xl overflow-hidden group">
      {/* Assets */}
      {assets.map((a, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-400"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {a.type === "image" ? (
            <Image src={a.source} alt={title} fill sizes="(max-width: 1280px) 50vw, 25vw" className="object-cover" />
          ) : (
            <video src={a.source} className="w-full h-full object-cover" playsInline muted loop />
          )}
        </div>
      ))}

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

      {/* Flèches style Instagram */}
      {assets.length > 1 && current > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(e); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-opacity duration-200 lg:opacity-0 lg:group-hover:opacity-100 cursor-pointer"
        >
          <ChevronLeft size={16} className="text-black" />
        </button>
      )}
      {assets.length > 1 && current < assets.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(e); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-opacity duration-200 lg:opacity-0 lg:group-hover:opacity-100 cursor-pointer"
        >
          <ChevronRight size={16} className="text-black" />
        </button>
      )}

      {/* Play button — visible uniquement sur les vidéos */}
      {asset.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <button
            onClick={(e) => { e.stopPropagation(); interactedRef.current = true; setPlayingSrc(asset.source); }}
            className="w-12 h-12 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center pointer-events-auto cursor-pointer hover:bg-white/35 transition-colors"
          >
            <Play size={18} className="text-white ml-0.5" />
          </button>
        </div>
      )}

      {/* Bottom: title, description + dots */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 z-20 pointer-events-none">
        <p className="serif text-white text-xl leading-tight mb-2">{title}</p>
        <div className="flex items-end justify-between gap-2">
          <p className="text-white/60 text-xs">{description}</p>
          {assets.length > 1 && (
            <div className="-translate-y-1 flex items-center gap-1.5 shrink-0 pointer-events-auto">
              {assets.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    interactedRef.current = true;
                    goTo(i);
                  }}
                  className="rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background: i === current ? "white" : "rgba(255,255,255,0.5)",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
