"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import Tagline from "@/components/home/tagline";

type ScheduleItem = { time: string; title: string; description: string };
type Day = { number: number; days: string; title: string; items: ScheduleItem[] };

const lineup: Day[] = [
  {
    number: 1,
    days: "DAY 1 — SUNDAY",
    title: "Arrival & Welcome",
    items: [
      { time: "14:00", title: "Villa Check-in", description: "Private transfer from Funchal Airport included. Settle into your room." },
      { time: "16:00", title: "Welcome Orientation", description: "Meet your coaches and fellow dancers. Tour of the villa space." },
      { time: "20:00", title: "Welcome Dinner", description: "Communal feast on the terrace. Local Madeiran dishes. Wine and connection." },
    ],
  },
  {
    number: 2,
    days: "DAYS 2–5",
    title: "Core Training Days",
    items: [
      { time: "09:00", title: "Morning Movement", description: "Warm-up flow and mobility work to prepare body and mind." },
      { time: "10:30", title: "Pole Training Block", description: "Two focused pole sessions per day with guest teachers and your coaches." },
      { time: "13:00", title: "Lunch Break", description: "Fresh lunches prepared at the villa. Rest, swim, or explore." },
      { time: "16:00", title: "Afternoon Session", description: "Floorwork, conditioning, or choreography depending on the day." },
      { time: "20:00", title: "Evening", description: "Group dinners, island excursions, or free time to recharge." },
    ],
  },
  {
    number: 3,
    days: "DAY 6",
    title: "Showcase Preparation",
    items: [
      { time: "10:00", title: "Rehearsal", description: "Final run-throughs and polish for the closing showcase performance." },
      { time: "14:00", title: "Free Afternoon", description: "Rest, beach, or last Madeiran adventures before the evening." },
      { time: "19:00", title: "Closing Showcase", description: "Celebrate your week on stage. Family, friends, and fellow dancers welcome." },
      { time: "21:30", title: "Farewell Dinner", description: "A final dinner together to close out the retreat in style." },
    ],
  },
  {
    number: 4,
    days: "DAY 7 — SUNDAY",
    title: "Departure",
    items: [
      { time: "09:00", title: "Breakfast", description: "Last breakfast together at the villa before heading home." },
      { time: "11:00", title: "Check-out", description: "Transfers to Funchal Airport arranged based on your flight time." },
    ],
  },
];

const ScheduleRow = ({ item }: { item: ScheduleItem }) => (
  <div className="flex gap-4 py-4">
    <span className="text-[#888] text-[14px] w-12 flex-shrink-0 pt-0.5">{item.time}</span>
    <div className="w-px bg-[#e0e0e0] flex-shrink-0" />
    <div>
      <p className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] text-[16px] font-semibold">{item.title}</p>
      <p className="text-[#888] text-[14px] mt-1 leading-relaxed">{item.description}</p>
    </div>
  </div>
);

const DayAccordion = ({ day, isOpen, onToggle }: { day: Day; isOpen: boolean; onToggle: () => void }) => (
  <div className={`rounded-[16px] border transition-colors duration-200 ${isOpen ? "border-[#1a3328] bg-white" : "border-[#e5e5e5] bg-white/80"}`}>
    <button onClick={onToggle} className="w-full flex items-center gap-4 px-6 py-5 text-left cursor-pointer">
      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-[14px] font-bold flex-shrink-0 transition-colors duration-200 ${isOpen ? "bg-[#1a3328] text-white" : "bg-[#f0ede6] text-[#888]"}`}>
        {day.number}
      </span>
      <div className="flex-1">
        <p className="text-[#888] text-[11px] tracking-widest uppercase mb-0.5">{day.days}</p>
        <p className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] text-[20px] font-bold">{day.title}</p>
      </div>
      {isOpen ? <ChevronUp size={18} className="text-[#888] flex-shrink-0" /> : <ChevronDown size={18} className="text-[#888] flex-shrink-0" />}
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
      <div className="px-6 pb-4 divide-y divide-[#f0ede6]">
        {day.items.map((item) => <ScheduleRow key={item.time} item={item} />)}
      </div>
    </div>
  </div>
);

export function LineUpSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative py-[80px]">
      <Image src="/images/hero.png" alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative px-20 xl:px-[146px]">
        <div className="mb-10">
          <Tagline title="THE PROGRAMME" />
          <h2 className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] text-[48px] font-bold leading-tight mt-2 mb-3">
            Your Daily Line-Up
          </h2>
          <div className="w-8 h-[2px] bg-[#1a1a1a] mb-4" />
          <p className="text-[#555] text-[15px] leading-relaxed max-w-[420px]">
            Every day is structured to maximise both training progress and island enjoyment. Nothing is rushed. Nothing is missed.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {lineup.map((day, index) => (
            <DayAccordion
              key={day.number}
              day={day}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
