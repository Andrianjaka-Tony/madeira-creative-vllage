import Image from "next/image";
import { SectionBadge } from "@/components/ui/section-badge";

const buffetItems = [
  "Bread and pastries",
  "Butter, local jams, and honey",
  "A selection of regional cheeses and cold cuts",
  "Eggs",
  "Seasonal fruits",
  "Yogurts and Sereles",
  "Coffee and a variety of teas",
  "Fresh juices",
];

const gridImages = [
  { src: "/images/meal/meal-1.jpg", alt: "Dinner table with guests" },
  { src: "/images/meal/meal-2.jpg", alt: "Outdoor picnic setup" },
  { src: "/images/meal/meal-3.jpg", alt: "Buffet spread" },
  { src: "/images/meal/meal-4.jpg", alt: "Community dinner" },
  { src: "/images/meal/meal-5.png", alt: "Honesty bar" },
];

export function FoodSection() {
  return (
    <section className="bg-white flex flex-col lg:grid lg:grid-cols-2 items-center gap-7.5 px-6 md:px-20 xl:px-44 py-16 md:py-24">
      <div className="w-full flex flex-col">
        <SectionBadge label="Food" />
        <h2 className="mt-6 serif font-bold text-4xl md:text-5xl lg:text-6xl text-(--green) leading-[1.05] tracking-tighter mb-6">
          Meals &amp; Dining
        </h2>
        <p className="text-sm text-(--green)/70 leading-relaxed mb-2">
          All breakfasts are fully included in your retreat experience.
          <br />
          Each morning, you will enjoy a full continental buffet breakfast served at the hotel.
        </p>
        <p className="text-sm text-(--green)/70 leading-relaxed mt-4 mb-3">The buffet includes:</p>
        <ul className="space-y-1.5 mb-8">
          {buffetItems.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-(--green)/70">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-(--green)/40 flex-none" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-(--green)/70 leading-relaxed mb-8">
          The hotel follows a farm-to-table approach whenever possible,
          <br />
          sourcing ingredients locally and seasonally to ensure freshness and quality.
        </p>
        <h3 className="text-sm font-semibold text-(--green) mb-3">
          Social Community Dinner &amp; Picnic
        </h3>
        <p className="text-sm text-(--green)/70 leading-relaxed mb-8">
          You will have two dinners included in your ticket: one at a restaurant with an ocean view,
          and another in the form of a carefully prepared boho-style picnic. This will be our first
          time offering this type of picnic experience, and we are truly excited to include this
          beautiful social gathering in nature as part of the retreat.
        </p>
        <h3 className="text-sm font-semibold text-(--green) mb-3">Honesty Bar</h3>
        <p className="text-sm text-(--green)/70 leading-relaxed">
          We offer guests a unique and trust-based experience where you pour your own drinks and
          keep a tally of what you&apos;ve consumed.
        </p>
      </div>

      {/* Mobile image grid */}
      <div className="lg:hidden grid grid-cols-2 gap-3 w-full">
        {gridImages.map((img) => (
          <div
            key={img.alt}
            className="relative rounded-2xl overflow-hidden group"
            style={{ height: 180 }}
          >
            <Image src={img.src} alt={img.alt} fill sizes="50vw" className="object-cover transition-transform duration-500 group-hover:scale-115" />
          </div>
        ))}
      </div>

      <div
        className="hidden lg:grid w-full ml-auto translate-x-1/8 translate-y-4"
        style={{
          gridTemplateColumns: "55% 45%",
          gridTemplateRows: "21vw 13vw 14vw",
          gap: "16px",
        }}
      >
        {/* Image 1 : C1, L1-L2 */}
        <div
          className="relative rounded-2xl overflow-hidden group"
          style={{ gridColumn: "1", gridRow: "1 / 3" }}
        >
          <Image
            src={gridImages[0].src}
            alt={gridImages[0].alt}
            fill
            sizes="(max-width: 1280px) 27vw, 324px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-115"
          />
        </div>
        {/* Image 2 : C2, L1 */}
        <div
          className="relative rounded-2xl overflow-hidden group"
          style={{ gridColumn: "2", gridRow: "1" }}
        >
          <Image
            src={gridImages[1].src}
            alt={gridImages[1].alt}
            fill
            sizes="22vw"
            className="object-cover transition-transform duration-500 group-hover:scale-115"
          />
        </div>
        {/* Image 3 : C2, L2 */}
        <div
          className="relative rounded-2xl overflow-hidden group"
          style={{ gridColumn: "2", gridRow: "2" }}
        >
          <Image
            src={gridImages[2].src}
            alt={gridImages[2].alt}
            fill
            sizes="22vw"
            className="object-cover transition-transform duration-500 group-hover:scale-115"
          />
        </div>
        {/* Image 4 : C1, L3 */}
        <div
          className="relative rounded-2xl overflow-hidden group"
          style={{ gridColumn: "1", gridRow: "3" }}
        >
          <Image
            src={gridImages[3].src}
            alt={gridImages[3].alt}
            fill
            sizes="27vw"
            className="object-cover transition-transform duration-500 group-hover:scale-115"
          />
        </div>
        {/* Image 5 : C2, L3 */}
        <div
          className="relative rounded-2xl overflow-hidden group"
          style={{ gridColumn: "2", gridRow: "3" }}
        >
          <Image
            src={gridImages[4].src}
            alt={gridImages[4].alt}
            fill
            sizes="22vw"
            className="object-cover transition-transform duration-500 group-hover:scale-115"
          />
        </div>
      </div>
    </section>
  );
}
