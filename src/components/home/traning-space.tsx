import { MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    label: "Ponta do Sol, Madeira",
  },
  {
    icon: ShieldCheck,
    label: "Professional Equipment",
    description: "Pole stages from renowned brands",
  },
  {
    icon: Sparkles,
    label: "Indoor Space",
    description: 'Convenient training environment right at the villa"',
  },
];

const galleryImages = ["/images/hero.png", "/images/hero.png", "/images/hero.png"];

export function TrainingSpace() {
  return (
    <section className="bg-(--beige) px-40 py-24 flex flex-col">
      <SectionIntro />
      <TrainingBlock />
      <PhotoGallery />
    </section>
  );
}

function SectionIntro() {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <SectionTag label="Training Space" />
      <h2 className="serif font-bold text-6xl text-(--green) leading-[1.05] tracking-tighter">
        Where You&apos;ll Train
      </h2>
      <p className="text-sm text-(--blue)/70 leading-relaxed w-1/2">
        We believe a retreat is a moment to step away from the studio, so we organize pole training
        sessions directly at the villa where we stay — either outdoors or indoors.
      </p>
    </div>
  );
}

function TrainingBlock() {
  return (
    <div className="mt-16 flex gap-12 items-start">
      <div className="flex-none w-150 aspect-12/10 rounded-3xl overflow-hidden">
        <img src="/images/hero.png" alt="Training villa" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-6 pt-2">
        <h3 className="serif font-bold text-3xl text-(--blue) leading-tight">
          Pole Stages for Trainings
        </h3>
        <p className="text-sm text-(--blue)/70 leading-relaxed">
          We offer quality pole stages from renowned brands such as ThePole Italy and Lupit Pole,
          perfect for training. These will be installed in the bright, window-filled room shown on
          the left — a spacious indoor area with large French windows that allow plenty of natural
          light and overlook lush greenery, creating an airy and inspiring atmosphere for practice.
        </p>
        <p className="text-sm text-(--blue)/70 leading-relaxed">
          Many students wonder if the warm and humid climate of Madeira will affect their training.
          In fact, the weather here is mild and pleasant—nothing like the heat found in some regions
          of Asia. This makes Madeira an ideal place for pole training, allowing you to focus on
          your practice comfortably.
        </p>
        <div className="flex flex-col gap-4 mt-2">
          {highlights.map((h) => (
            <HighlightItem key={h.label} {...h} />
          ))}
        </div>
      </div>
    </div>
  );
}

type HighlightItemProps = {
  icon: LucideIcon;
  label: string;
  description?: string;
};
function HighlightItem({ icon: Icon, label, description }: HighlightItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-white p-3 shadow rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-(--green)/40 flex-none" />
      </div>
      <div>
        <p className="text-sm font-semibold text-(--blue)">{label}</p>
        {description && <p className="mt-1 text-xs text-(--blue)/50">{description}</p>}
      </div>
    </div>
  );
}

function PhotoGallery() {
  return (
    <div className="mt-6 grid grid-cols-3 gap-6">
      {galleryImages.map((src, i) => (
        <div key={i} className="aspect-3/4 rounded-3xl overflow-hidden">
          <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}

function SectionTag({ label }: { label: string }) {
  return (
    <div className="bg-white inline-flex items-center gap-2 shadow rounded-full px-4 py-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-(--green)" />
      <span className="text-xs uppercase tracking-widest text-(--green)">{label}</span>
      <span className="w-1.5 h-1.5 rounded-full bg-(--green)" />
    </div>
  );
}
