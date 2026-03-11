import Image from "next/image";
import { SectionBadge } from "@/components/ui/section-badge";

const notIncluded = [
  "Flights to/from Funchal",
  "Travel insurance (recommended)",
  "Personal spending money",
  "Alcoholic beverages (available at cost)",
];

const gridImages = [
  { src: "/images/travel/travel-1.jpeg", alt: "Pole dancers by the pool at Madeira fitness holiday" },
  { src: "/images/travel/travel-2.jpg", alt: "Madeira Creative Village villa exterior" },
  { src: "/images/travel/travel-3.jpg", alt: "Aerial view of pole dance retreat villa in Madeira" },
  { src: "/images/stay/stay-2.png", alt: "Ponta do Sol coastline — sport retreat Madeira" },
];

export function TravelSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-20 xl:px-44 flex flex-col lg:flex-row gap-10 lg:gap-20">
      {/* Left 2/3 */}
      <div className="flex flex-col gap-6 w-full lg:flex-none" style={{ flex: "0 0 calc(66.666% - 40px)" }}>
        <SectionBadge label="Travel" />
        <h2 className="serif font-bold text-3xl md:text-4xl text-(--green) leading-[1.05] tracking-tighter">
          Travel &amp; Transfers
        </h2>
        <p className="text-sm text-(--green)/50">Getting to the retreat made simple.</p>

        <div className="flex flex-col gap-5 mt-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-(--green)/50 mb-2">Airport</p>
            <p className="text-sm font-semibold text-(--green)">Funchal Airport</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-(--green)/50 mb-3">
              Transfer Options
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-(--green)/70 leading-relaxed">
                Grouped transfer is included in the price.
              </p>
              <p className="text-sm text-(--green)/70 leading-relaxed">
                If you have a late flight or early morning departure and we can&apos;t arrange a
                grouped transfer, you may arrange your own.
              </p>
              <p className="text-sm text-(--green)/70 leading-relaxed">
                You can book your ticket without transfers if you prefer to rent a car.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-(--green)/50 mb-3">Important</p>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-(--green)/70">Arrival day pickup : 2pm – 6pm</p>
              <p className="text-sm text-(--green)/70">Departure day drop-off: 8am – 12pm</p>
            </div>
            <p className="mt-4 text-sm italic text-(--green)/40">
              Full travel details sent upon booking confirmation
            </p>
          </div>
        </div>
      </div>

      {/* Right 1/3 */}
      <div className="flex flex-col gap-5 flex-1">
        {/* Not included card */}
        <div className="rounded-2xl border border-(--green)/8 bg-(--beige)/40 p-6 flex flex-col gap-3">
          <p className="text-xs uppercase tracking-widest text-(--green)/40">Not included</p>
          <div className="flex flex-col gap-2.5">
            {notIncluded.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-6 h-px bg-(--green)/20 flex-none" />
                <span className="text-sm text-(--green)/40">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2×2 image grid */}
        <div className="grid grid-cols-2 gap-3">
          {gridImages.map((img) => (
            <div key={img.alt} className="relative rounded-2xl overflow-hidden group" style={{ height: 140 }}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 200px"
                className="object-cover transition-transform duration-500 group-hover:scale-115"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
