import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const activities = [
  { title: "Boat Trip with Pole", description: "Dance above the Atlantic" },
  { title: "Black Sand Beach Photoshoot", description: "Professional shoot at the beach" },
  { title: "Tea Ceremony", description: "Mindfulness & island culture" },
  { title: "Fanal Forest Hike", description: "Enchanted laurisilva forest" },
];

export function ExploreSection() {
  return (
    <section className="px-32 py-24">
      <SectionHeader />
      <div className="grid grid-cols-4 gap-4 mt-12">
        {activities.map((a) => (
          <ActivityCard key={a.title} {...a} />
        ))}
      </div>
      <p className="text-center text-sm text-(--green)/50 mt-12">
        No other pole retreat in Europe combines all of this.
      </p>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="flex items-end justify-between">
      <div className="w-2/5 flex flex-col gap-6">
        <SectionTag label="Activities" />
        <h2 className="mt-12 serif font-bold text-6xl text-(--blue) leading-[1.05] tracking-tighter">
          Explore the Activities of the Retreat
        </h2>
      </div>
      <div className="w-2/5 flex flex-col items-start gap-6 mt-auto">
        <p className="text-sm text-(--blue)/80 leading-relaxed">
          The retreat includes several activities centred around pole dancing, as well as island
          exploration — a boat trip with a hanging pole, a photoshoot on a black sand beach, and
          many other exciting experiences. A unique all-in-one event that blends adventure and
          creativity.
        </p>
        <Button text="Book Retreat" icon={ArrowRight} variant="default" />
      </div>
    </div>
  );
}

function SectionTag({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 shadow rounded-full px-4 py-1.5 self-start">
      <span className="w-1.5 h-1.5 rounded-full bg-(--green)" />
      <span className="text-xs uppercase tracking-widest text-(--green)">{label}</span>
      <span className="w-1.5 h-1.5 rounded-full bg-(--green)" />
    </div>
  );
}

type ActivityCardProps = { title: string; description: string };
function ActivityCard({ title, description }: ActivityCardProps) {
  return (
    <div className="relative aspect-3/4 rounded-3xl overflow-hidden">
      <img
        src="/images/hero.png"
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-8 left-8 right-8">
        <p className="serif text-white text-xl leading-tight">{title}</p>
        <p className="text-white/60 text-xs mt-2">{description}</p>
      </div>
    </div>
  );
}
