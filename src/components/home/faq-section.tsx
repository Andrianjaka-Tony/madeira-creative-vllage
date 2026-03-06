"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What pole level do I need to join?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What's included in the price?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How do I secure my spot?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How many people will be in my group?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the cancellation policy?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What should I bring?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#F0EDE6] py-[80px]">
      <div className="px-[80px] xl:px-[146px] flex flex-row gap-16 xl:gap-24">
        {/* Left side */}
        <div className="w-[320px] flex-shrink-0">
          <h2 className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] text-[48px] font-bold leading-[1.1] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-8 h-[2px] bg-[#1a1a1a] mb-6" />
          <p className="text-[#1a1a1a] text-[14px] leading-relaxed">
            Still have questions? Email us at{" "}
            <a
              href="mailto:madeiravillage@gmail.com"
              className="underline underline-offset-2"
            >
              madeiravillage@gmail.com
            </a>
          </p>
        </div>

        {/* Right side — accordion */}
        <div className="flex-1 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white rounded-[12px] px-6">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer"
                >
                  <span className="font-inter text-[#1a1a1a] text-[16px] font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-[#1a1a1a] transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-inter text-[#555] text-[15px] leading-relaxed pb-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
