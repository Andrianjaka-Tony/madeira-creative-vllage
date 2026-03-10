"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Instagram, Play, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_INTERVAL = 3000;

type TrainerSlide =
  | { type: "image"; src: string }
  | { type: "youtube"; url: string; thumbnailId: string };

type Trainer = {
  name: string;
  role: string;
  description: string;
  instagram: string;
  instagramUrl?: string;
  slides: TrainerSlide[];
};

const trainers: Trainer[] = [
  {
    name: "MIGLENA",
    role: "Lyrical Pole Specialist",
    description:
      "Berlin-based creator of ThePoleDancer. Known for fluid storytelling choreography that transforms technique into art. Miglena leads with precision and emotional depth.",
    instagram: "@miglena.thepoledancer",
    instagramUrl: "https://www.instagram.com/miglena.thepoledancer/",
    slides: [
      { type: "image", src: "/images/trainer/trainer-1.jpg" },
      {
        type: "youtube",
        url: "https://youtube.com/shorts/ZEY2TwtPD6k?si=meoDdTToDpwfO4fK",
        thumbnailId: "ZEY2TwtPD6k",
      },
    ],
  },
  {
    name: "VEROLINA",
    role: "Organizer & Spinning Combos",
    description:
      "Based in Madeira, leading the retreat with dynamic spinning combinations and seamless flow. Verolina brings structure and energy, balancing challenge with care.",
    instagram: "@verolina.pole",
    instagramUrl: "https://www.instagram.com/madeiracreativevillage/",
    slides: [
      { type: "image", src: "/images/trainer/trainer-2.png" },
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=HDHDfb1qVcQ",
        thumbnailId: "HDHDfb1qVcQ",
      },
    ],
  },
];

function TrainerSlider({ slides }: { slides: TrainerSlide[] }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    if (index === current || animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 400);
  };

  useEffect(() => {
    if (slides.length <= 1) return;
    timeoutRef.current = setTimeout(() => {
      goTo((current + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div
      className="relative w-full md:flex-none md:w-60 xl:w-80 rounded-3xl overflow-hidden group"
      style={{ height: 450 }}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-400"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {slide.type === "image" ? (
            <Image
              src={slide.src}
              alt="Trainer"
              fill
              sizes="(max-width: 1280px) 240px, 320px"
              className="object-cover"
            />
          ) : (
            <>
              <Image
                src={`https://img.youtube.com/vi/${slide.thumbnailId}/maxresdefault.jpg`}
                alt="Video thumbnail"
                fill
                sizes="(max-width: 1280px) 240px, 320px"
                className="object-cover"
              />
              <a
                href={slide.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-14 h-14 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/35 transition-colors">
                  <Play size={20} className="text-white ml-0.5" />
                </div>
              </a>
            </>
          )}
        </div>
      ))}

      {/* Flèches style Instagram */}
      {slides.length > 1 && current > 0 && (
        <button
          onClick={() => goTo(current - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-opacity duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          <ChevronLeft size={16} className="text-black" />
        </button>
      )}
      {slides.length > 1 && current < slides.length - 1 && (
        <button
          onClick={() => goTo(current + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-opacity duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          <ChevronRight size={16} className="text-black" />
        </button>
      )}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1.5 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
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
  );
}

function TrainerColumn({ trainer }: { trainer: Trainer }) {
  return (
    <div
      className="flex-1 flex flex-col md:flex-row gap-6 md:gap-7.5 rounded-3xl overflow-hidden p-6 md:p-8"
      style={{ background: "#FAFAFA" }}
    >
      {/* Info */}
      <div className="flex flex-col flex-1 min-w-0 min-h-0">
        <p className="font-bold text-xl text-(--green) tracking-tight mb-1">{trainer.name}</p>
        <p className="text-sm text-(--green)/50 mb-6">{trainer.role}</p>
        <p className="text-sm text-(--green)/80 leading-relaxed">{trainer.description}</p>
        <div className="mt-auto pt-8 flex items-center gap-2 text-sm text-(--green)/40">
          <Instagram className="w-4 h-4" />
          {trainer.instagramUrl ? (
            <a
              href={trainer.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--green)/70 transition-colors"
            >
              {trainer.instagram}
            </a>
          ) : (
            <span>{trainer.instagram}</span>
          )}
        </div>
      </div>
      {/* Slider */}
      <TrainerSlider slides={trainer.slides} />
    </div>
  );
}

export function TrainersSection() {
  return (
    <section className="bg-(--beige) py-16 md:py-24 px-6 md:px-20 xl:px-35 flex flex-col gap-10 md:gap-14">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="serif font-bold text-4xl md:text-5xl lg:text-6xl text-(--green) leading-[1.05] tracking-tighter">
          Meet Your Pole Trainers
        </h2>
        <p className="text-sm text-(--green)/50">
          Two passionate pole dancers for lyrical and spinning pole
        </p>
      </div>

      {/* Two trainer columns */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-15">
        {trainers.map((trainer) => (
          <TrainerColumn key={trainer.name} trainer={trainer} />
        ))}
      </div>
    </section>
  );
}
