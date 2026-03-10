"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What makes a Madeira pole dance retreat special?",
    answer: "A pole dance retreat in Madeira always has an artistic touch. Activities include outdoor photoshoots in scenic locations, special editions with violin concerts combined with pole dancing, and boat trips with a hanging pole — a unique activity exclusive to the retreat. Transfers to all activities are usually included. This retreat is perfect for travelers seeking a creative and active pole dance holiday in Madeira.",
  },
  {
    question: "Are these holidays suitable for solo travelers?",
    answer: "Yes! Many guests join our retreats alone. You'll train alongside other travelers and have plenty of opportunities to socialize during meals, activities, and excursions, making it ideal for solo travelers or groups.",
  },
  {
    question: "What skill level do I need to be?",
    answer: "This retreat is suitable for beginner, intermediate, and advanced pole dancers. However, we do not accept complete beginners who have never tried pole dance before. If you find out about this event in advance, we encourage you to start practicing now and join us once you have at least 5 months of pole experience. We also offer other events for non-polers and absolute beginners — please check our website for more information.",
  },
  {
    question: "Are all breakfasts and dinners included?",
    answer: "All breakfasts are included in the price, as well as two group dinners: one dinner at a local restaurant and one outdoor picnic experience. We will also make a stop at a shopping center during the retreat, and you will have access to a fully equipped kitchen in the villa if you wish to prepare your own meals.",
  },
  {
    question: "How do payment plans work?",
    answer: "You can secure your spot with a €500 deposit and pay the remaining balance in several installments. Payment plans depend on when you book your ticket, but we generally offer flexible payment options. Additionally, if you join with a pole friend, each of you will receive a €50 discount.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You may cancel your booking up to 3 months before the retreat start date. After this period, cancellations are not refundable due to our commitments to on-site suppliers. However, you may transfer your spot to another person if you are able to find a replacement. Refunds are typically processed within 4 to 6 weeks after the request.",
  },
  {
    question: "What should I bring?",
    answer: "We recommend bringing your pole wear, swimsuit, sun protection, sunglasses, mosquito repellent, and comfortable hiking shoes. Please note that some light hiking activities are included in the retreat program.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Breakfasts offer a variety of options that you can choose from according to your dietary needs, including during our community dinners. Other lunches and dinners are not included in the price, but you are welcome to purchase your preferred food and prepare meals in the villa's kitchen.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#F0EDE6] py-12 md:py-[80px]">
      <div className="px-6 md:px-[80px] xl:px-36.5 flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24">
        {/* Left side */}
        <div className="w-full lg:w-[320px] lg:shrink-0">
          <h2 className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] text-[32px] md:text-[48px] font-bold leading-[1.1] mb-4">
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
                    isOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
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
