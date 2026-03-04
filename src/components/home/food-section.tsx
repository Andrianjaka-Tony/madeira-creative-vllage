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
  { alt: "Dinner table with guests" },
  { alt: "Outdoor picnic setup" },
  { alt: "Buffet spread" },
  { alt: "Community dinner" },
  { alt: "Honesty bar" },
];

export function FoodSection() {
  return (
    <section className="bg-white flex items-start gap-7.5 px-44 py-24">
      <div className="w-1/2 flex flex-col">
        <SectionBadge label="Food" />
        <h2 className="mt-6 serif font-bold text-6xl text-(--green) leading-[1.05] tracking-tighter mb-6">
          Meals &amp; Dining
        </h2>
        <p className="text-sm text-(--green)/70 leading-relaxed mb-2">
          All breakfasts are fully included in your retreat experience.
          <br />
          Each morning, you will enjoy a full continental buffet breakfast served at the hotel.
        </p>
        <p className="text-sm text-(--green)/70 leading-relaxed mt-4 mb-3">
          The buffet includes:
        </p>
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

      <div
        className="w-1/2"
        style={{
          display: "grid",
          gridTemplateColumns: "324px 271px",
          gridTemplateRows: "350px 206px 225px",
          gap: "24px",
        }}
      >
        {/* Image 1 : C1-C2, L1-L2 */}
        <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "1", gridRow: "1 / 3" }}>
          <img src="/images/hero.png" alt={gridImages[0].alt} className="w-full h-full object-cover" />
        </div>
        {/* Image 2 : C3, L1 */}
        <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "2", gridRow: "1" }}>
          <img src="/images/hero.png" alt={gridImages[1].alt} className="w-full h-full object-cover" />
        </div>
        {/* Image 3 : C3, L2 */}
        <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "2", gridRow: "2" }}>
          <img src="/images/hero.png" alt={gridImages[2].alt} className="w-full h-full object-cover" />
        </div>
        {/* Image 4 : C1-C2, L3 */}
        <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "1", gridRow: "3" }}>
          <img src="/images/hero.png" alt={gridImages[3].alt} className="w-full h-full object-cover" />
        </div>
        {/* Image 5 : C3, L3 */}
        <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "2", gridRow: "3" }}>
          <img src="/images/hero.png" alt={gridImages[4].alt} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
