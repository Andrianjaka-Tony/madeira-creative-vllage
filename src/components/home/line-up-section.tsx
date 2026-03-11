"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";

type ScheduleItem = { time: string; title: string; description: string };
type Day = { number: number; days: string; title: string; items: ScheduleItem[] };

const lineup: Day[] = [
  {
    number: 1,
    days: "DAY 1",
    title: "Arrive & Train",
    items: [
      {
        time: "CHECK-IN",
        title: "Check-in from 2pm",
        description:
          "Arrival + Welcome Brief. If your flight is earlier, you can relax at the villa.",
      },
      {
        time: "AFTERNOON",
        title: "Grouping",
        description: "Pool / Free Time",
      },
      {
        time: "EVENING",
        title: "Social Welcome Dinner",
        description: "Included in the price.",
      },
    ],
  },
  {
    number: 2,
    days: "DAY 2",
    title: "Island Exploration & Training",
    items: [
      {
        time: "MORNING",
        title: "Breakfast, Trip to Fanal Forest, Grocery Shopping Stop",
        description: "",
      },
      {
        time: "AFTERNOON",
        title: "Pole Dance Class, Relaxing",
        description: "",
      },
      {
        time: "EVENING",
        title: "Second Social Dinner",
        description: "Included in the price.",
      },
    ],
  },
  {
    number: 3,
    days: "DAY 3",
    title: "Tea Ceremony, Training, Boat Trip",
    items: [
      {
        time: "MORNING",
        title: "Breakfast, Tea Ceremony",
        description: "",
      },
      {
        time: "AFTERNOON",
        title: "Pole Dance Class, Relaxing",
        description: "",
      },
      {
        time: "EVENING",
        title: "Boat Trip with Hanging Pole",
        description: "There will be two groups for the boat trip. Dinner in Funchal.",
      },
    ],
  },
  {
    number: 4,
    days: "DAY 4",
    title: "Island Exploration & Training",
    items: [
      {
        time: "MORNING",
        title: "Photoshoot at Seixal Black Sand Beach",
        description: "There will be two groups for the photoshoot.",
      },
      {
        time: "AFTERNOON",
        title: "Relax on the beach / pool, lessons",
        description: "Planning depends on the group.",
      },
      {
        time: "EVENING",
        title: "Sunset Boat Trip with Hanging Pole",
        description:
          "For the second group. Dinner in Funchal / Relaxing in the villa and free time for the first group.",
      },
    ],
  },
  {
    number: 5,
    days: "DAY 5",
    title: "Photoshoot / Violin Concert",
    items: [
      {
        time: "MORNING",
        title: "Breakfast, Photoshooting in the villa",
        description: "Depending on the group.",
      },
      {
        time: "AFTERNOON",
        title: "Pole Dance Class, Relaxing",
        description: "",
      },
      {
        time: "EVENING",
        title: "Violin Concert Performance",
        description: "",
      },
    ],
  },
  {
    number: 6,
    days: "DAY 6",
    title: "Hiking / Farewell Drinks",
    items: [
      {
        time: "MORNING",
        title: "Pico do Arieiro Hiking",
        description: "",
      },
      {
        time: "AFTERNOON",
        title: "Pole Dance Class, Relaxing",
        description: "",
      },
      {
        time: "EVENING",
        title: "Farewell Drinks",
        description: "",
      },
    ],
  },
  {
    number: 7,
    days: "DAY 7",
    title: "Hiking / Farewell Drinks",
    items: [
      {
        time: "MORNING",
        title: "Breakfast, Checkouts",
        description: "",
      },
    ],
  },
];

const ScheduleRow = ({ item }: { item: ScheduleItem }) => (
  <div className="flex gap-4 py-4">
    <span className="text-[#888] text-[14px] w-24 flex-shrink-0 pt-0.5">{item.time}</span>
    <div className="w-px bg-[#e0e0e0] flex-shrink-0" />
    <div>
      <p className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] text-[16px] font-semibold">
        {item.title}
      </p>
      <p className="text-[#888] text-[14px] mt-1 leading-relaxed">{item.description}</p>
    </div>
  </div>
);

const DayAccordion = ({
  day,
  isOpen,
  onToggle,
}: {
  day: Day;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div
    className={`rounded-[16px] border transition-colors duration-200 ${isOpen ? "border-[#1a3328] bg-white" : "border-[#e5e5e5] bg-white/80"}`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center gap-4 px-6 py-5 text-left cursor-pointer"
    >
      <span
        className={`w-8 h-8 rounded-lg flex items-center justify-center text-[14px] font-bold flex-shrink-0 transition-colors duration-200 ${isOpen ? "bg-[#1a3328] text-white" : "bg-[#f0ede6] text-[#888]"}`}
      >
        {day.number}
      </span>
      <div className="flex-1">
        <p className="text-[#888] text-[11px] tracking-widest uppercase mb-0.5">{day.days}</p>
        <p className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] text-[20px] font-bold">
          {day.title}
        </p>
      </div>
      {isOpen ? (
        <ChevronUp size={18} className="text-[#888] flex-shrink-0" />
      ) : (
        <ChevronDown size={18} className="text-[#888] flex-shrink-0" />
      )}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
    >
      <div className="px-6 pb-4 divide-y divide-[#f0ede6]">
        {day.items.map((item, i) => (
          <ScheduleRow key={i} item={item} />
        ))}
      </div>
    </div>
  </div>
);

export function LineUpSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative py-[80px] overflow-hidden bg-stone-100">
      <Image src="/images/line-up-3.jpg" alt="Pole dance and wellness retreat programme — Madeira island" fill className="object-cover object-top" />
      <div className="absolute inset-0 bg-white/20" />

      <div className="relative px-6 md:px-20 xl:px-36.5">
        <div className="mb-10">
          <SectionBadge label="The Programme" bg="rgba(255,255,255,0.8)" className="mb-4" />
          <h2 className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] text-[32px] md:text-[48px] font-bold leading-tight mt-2 mb-3">
            Your Daily Line-Up
          </h2>
          <div className="w-8 h-[2px] bg-[#1a1a1a] mb-4" />
          <p className="text-[#555] text-[15px] leading-relaxed max-w-[420px]">
            Every day is structured to maximise both training progress and island enjoyment. Nothing
            is rushed. Nothing is missed.
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
