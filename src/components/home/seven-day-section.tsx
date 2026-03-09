"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { VideoModal } from "@/components/ui/video-modal";

const features = [
  { title: "Daily Pole Workshops", description: "Mixed groups" },
  { title: "Small Group", description: "Max 10 dancers · 2 per pole" },
  { title: "Breathtaking Nature", description: "Many outdoor activities included" },
  { title: "Artistic Expression", description: "Lyrical Pole — 5 Classes · 90 Min Each" },
];

export function SevenDaySection() {
  return (
    <section className="bg-(--beige) flex justify-between items-center gap-8 xl:gap-16 px-20 xl:px-32 py-24">
      <div className="w-1/2 flex flex-col">
        <p className="text-xs uppercase tracking-widest text-(--green)/50 mb-2">
          Madeira, Portugal · Lyrical Pole Dancing
        </p>
        <h2 className="w-3/4 serif font-bold text-6xl text-(--green) leading-[1.05] tracking-tighter mb-6">
          A 7-day pole dance retreat in <br /> Madeira Island
        </h2>
        <Tagline text="This is not a vacation. It's a reset for your body and soul." />
        <LetterCard />
        <div className="grid grid-cols-2 gap-4 mb-10">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
        <Button
          text="Reserve Your Spot"
          icon={ArrowRight}
          variant="default"
          className="self-start px-8"
          href="https://forms.gle/RKq6z77pzecVbxxT9"
        />
      </div>
      <SideImage />
    </section>
  );
}

function Tagline({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-10 h-px bg-(--green)/30" />
      <p className="text-sm italic text-(--green)/60">{text}</p>
    </div>
  );
}

function LetterCard() {
  return (
    <div className="bg-white rounded-2xl py-6 px-8 mb-4 text-sm text-(--green)/70 leading-relaxed space-y-4 shadow-lg shadow-black/5">
      <p className="serif italic text-(--green) text-base">Dear Guest,</p>
      <p>
        Imagine waking up in a historic Madeiran villa, surrounded by the lush green of the
        island&apos;s hills, with the Atlantic glittering beyond the terrace. This is where your
        retreat begins — not at the studio, but at the soul.
      </p>
      <p>
        For seven days, you will move with intention. Our coaches will guide you through lyrical
        pole sessions designed to build strength, fluency, and expression — not just technique.
        Every class is intimate (max 10 dancers) because we believe depth only comes in small
        groups.
      </p>
      <p>
        Between sessions: a boat trip with a hanging pole over the ocean. A photoshoot at the black
        sand beach. A hike through Fanal Forest. A tea ceremony at sunset. These are the moments
        that will stay with you far longer than any class.
      </p>
      <p className="italic text-(--green)/60">We cannot wait to host you. — The MCV Team</p>
    </div>
  );
}

type FeatureCardProps = { title: string; description: string };
function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-white border border-(--green)/10 rounded-xl px-5 py-4 flex items-center gap-4 shadow shadow-black/10">
      <span className="text-(--green)/30 text-lg">✦</span>
      <div>
        <p className="text-sm font-semibold text-(--green)">{title}</p>
        <p className="mt-1 text-xs text-(--green)/50">{description}</p>
      </div>
    </div>
  );
}

function SideImage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && (
        <VideoModal
          src="/images/7-days-video.mov"
          onClose={() => setModalOpen(false)}
        />
      )}
      <div
        className="relative flex-none w-96 xl:w-125 aspect-3/4 rounded-3xl overflow-hidden cursor-pointer group"
        onClick={() => setModalOpen(true)}
      >
        <img
          src="/images/7-days-cover.JPG"
          alt="7-day retreat preview"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <Play size={24} className="text-white ml-1" />
          </div>
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-white/80 text-sm italic">Feel what training in paradise is like.</p>
        </div>
      </div>
    </>
  );
}
