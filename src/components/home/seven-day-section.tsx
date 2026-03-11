import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";

const features = [
  { title: "Daily Pole Workshops", description: "Mixed groups" },
  { title: "Small Group", description: "Max 10 dancers · 2 per pole" },
  { title: "Breathtaking Nature", description: "Many outdoor activities included" },
  { title: "Artistic Expression", description: "Lyrical Pole — 5 Classes · 90 Min Each" },
];

export function SevenDaySection() {
  return (
    <section className="bg-(--beige) flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-8 xl:gap-16 px-6 md:px-20 xl:px-32 py-16 md:py-24">
      <div className="w-full lg:w-1/2 flex flex-col">
        <SectionBadge label="Madeira, Portugal · Lyrical Pole Dancing" className="mb-2" />
        <h2 className="w-full md:w-3/4 serif font-bold text-4xl md:text-5xl lg:text-6xl text-(--green) leading-[1.05] tracking-tighter mb-6">
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
        Wake up in a historic villa in Madeira, surrounded by green hills and the Atlantic Ocean.
      </p>
      <p>
        Learn lyrical pole in small groups (maximum 10 people) and discover how to express yourself
        on the pole like a true artist. Take part in a live violin concert where you are the
        performer — the dancer.
      </p>
      <p>
        Outside the classes, try a pole on a boat over the ocean, take photos on black sand beaches,
        hike Fanal Forest, and end the day with a sunset tea ceremony. These experiences will
        strengthen your body and stay with you long after the retreat ends.
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
  return (
    <div className="w-full lg:flex-none lg:w-96 xl:w-125 aspect-3/4 rounded-3xl overflow-hidden group">
      <video
        src="/images/7-days-video.mov"
        poster="/images/7-days-cover.JPG"
        controls
        playsInline
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
      />
    </div>
  );
}
