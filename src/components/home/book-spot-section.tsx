"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";

const FORM_URL = "https://forms.gle/RKq6z77pzecVbxxT9";

const roomOptions = [
  {
    id: "shared-sofa",
    label: "Shared Room / Sofa Bed",
    description: "Room shared with two other participants (economic option)",
    price: "2,550€",
    popular: false,
  },
  {
    id: "private",
    label: "Private Room",
    description: "Your own private bedroom in the villa",
    price: "2,790€",
    popular: true,
  },
  {
    id: "shared-single",
    label: "Shared room / Single Bed",
    description: "Room shared with an other participant",
    price: "2,685€",
    popular: false,
  },
];

const stats = [
  { value: "10", label: "Max Dancers" },
  { value: "7", label: "Days / 6 Nights" },
  { value: "All", label: "Levels" },
];

const includes = ["Stay + Training", "All activities & transfers", "Breakfasts, two dinners"];

export function BookSpotSection() {
  const [selected, setSelected] = useState("private");

  const selectedOption = roomOptions.find((r) => r.id === selected);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="px-6 md:px-20 xl:px-36.5">
        {/* Top header */}
        <div className="flex flex-col items-center mb-10">
          <SectionBadge label="2026 Season — Limited Spots" className="mx-auto mb-3" />
          <h2 className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] text-[32px] md:text-[48px] font-bold leading-tight text-center">
            Reserve Your Spot
          </h2>
          <p className="text-[#888] text-[15px] text-center mt-3 max-w-[380px] leading-relaxed">
            Choose your dates and room type. A 500€ deposit secures your place — balance paid in
            instalments.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6 shadow-[0_4px_40px_rgba(0,0,0,0.08)] rounded-[20px] overflow-hidden">
          {/* Image — 2/5 */}
          <div className="relative w-full md:w-2/5 h-70 md:h-175 shrink-0">
            <Image
              src="/images/book.jpg"
              alt="Pole Retreat Madeira"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-115"
            />
            {/* Green gradient from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3328cc] via-[#1a332844] to-transparent" />

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
              <p className="text-white/70 text-[11px] tracking-widest uppercase">
                Ponta do Sol, Madeira
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-white text-[22px] italic font-bold">
                &ldquo;Heritage meets high-performance.&rdquo;
              </p>

              {/* Stats */}
              <div className="flex gap-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 bg-white/20 backdrop-blur-sm rounded-[10px] px-3 py-3 flex flex-col items-center"
                  >
                    <span className="text-white text-[18px] font-bold leading-none">
                      {stat.value}
                    </span>
                    <span className="text-white/70 text-[11px] mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Includes */}
              <div className="flex flex-col gap-2">
                {includes.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-white" />
                    </div>
                    <span className="text-white text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Choices — 3/5 */}
          <div className="flex-1 p-8 flex flex-col justify-between">
            <div>
              <p className="text-[#888] text-[11px] tracking-[0.15em] uppercase mb-5">Room Type</p>

              <div className="flex flex-col gap-3 mb-8">
                {roomOptions.map((option) => {
                  const isActive = selected === option.id;
                  return (
                    <div key={option.id} className="relative">
                      {option.popular && (
                        <div className="absolute -top-3 left-4 z-10">
                          <span className="bg-[#1a3328] text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <button
                        onClick={() => setSelected(option.id)}
                        className={`w-full flex items-center justify-between px-5 py-4 rounded-[12px] border transition-all duration-200 text-left cursor-pointer ${
                          isActive
                            ? "border-[#1a3328] bg-white"
                            : "border-[#e5e5e5] bg-white hover:border-[#ccc]"
                        }`}
                      >
                        <div>
                          <p className="text-[#1a1a1a] text-[15px] font-medium">{option.label}</p>
                          <p className="text-[#888] text-[13px] mt-0.5">{option.description}</p>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                          <span className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] text-[16px] font-semibold">
                            {option.price}
                          </span>
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                              isActive ? "border-[#1a3328] bg-[#1a3328]" : "border-[#ccc]"
                            }`}
                          >
                            {isActive && <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price + CTA */}
            <div>
              <div className="flex items-end justify-between mb-4">
                <div>
                  <span className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] text-[28px] font-bold">
                    {selectedOption?.price}
                  </span>
                  <span className="text-[#888] text-[14px] ml-2">per person</span>
                </div>
                <div className="text-right">
                  <p className="text-[#888] text-[12px]">Deposit to secure</p>
                  <p className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] text-[18px] font-bold">
                    500€
                  </p>
                </div>
              </div>

              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#1a3328] text-white text-center py-4 rounded-full text-[16px] font-medium hover:bg-[#142a20] transition-colors duration-200"
              >
                Reserve My Spot →
              </a>

              <p className="text-center text-[#aaa] text-[12px] mt-4">
                500€ deposit · Balance in 2 instalments · Free date transfer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
