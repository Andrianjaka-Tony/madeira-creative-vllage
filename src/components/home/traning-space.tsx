import Image from "next/image";
import { MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";

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

const galleryImages = [
  { src: "/images/training/training-2.jpg", alt: "Pole dance training session at Madeira retreat" },
  { src: "/images/training/training-3.jpg", alt: "Indoor pole fitness class at Madeira Creative Village" },
  { src: "/images/training/training-4.jpg", alt: "Pole camp training space — sport retreat Madeira" },
];

export function TrainingSpace() {
  return (
    <section className="bg-(--beige) px-6 md:px-20 xl:px-40 py-16 md:py-24 flex flex-col">
      <SectionIntro />
      <TrainingBlock />
      <PhotoGallery />
    </section>
  );
}

function SectionIntro() {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <SectionBadge label="Training Space" className="mx-auto" />
      <h2 className="serif font-bold text-4xl md:text-5xl lg:text-6xl text-(--green) leading-[1.05] tracking-tighter">
        Where You&apos;ll Train
      </h2>
      <p className="text-sm text-(--blue)/70 leading-relaxed w-full md:w-1/2">
        We believe a retreat is a moment to step away from the studio, so we organize pole training
        sessions directly at the villa where we stay — either outdoors or indoors.
      </p>
    </div>
  );
}

function TrainingBlock() {
  return (
    <div className="mt-12 md:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
      <div className="relative w-full lg:flex-none lg:w-[45%] aspect-12/10 lg:aspect-auto rounded-3xl overflow-hidden group">
        <Image
          src="/images/training/training-1.jpg"
          alt="Pole training studio with French windows at Madeira Creative Village"
          fill
          sizes="45vw"
          className="object-cover transition-transform duration-500 group-hover:scale-115"
        />
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
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {galleryImages.map((img, i) => (
        <div key={i} className="relative aspect-3/4 rounded-3xl overflow-hidden group">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="33vw"
            className="object-cover object-bottom transition-transform duration-500 group-hover:scale-115"
          />
        </div>
      ))}
    </div>
  );
}
