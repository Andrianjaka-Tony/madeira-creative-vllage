import Image from "next/image";
import { Instagram, Play } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";

type Trainer = {
  name: string;
  role: string;
  description: string;
  instagram: string;
  instagramUrl?: string;
  coverSrc: string;
  youtubeUrl: string;
};

const trainers: Trainer[] = [
  {
    name: "MIGLENA",
    role: "Lyrical Pole Specialist",
    description:
      "Berlin-based creator of ThePoleDancer. Known for fluid storytelling choreography that transforms technique into art. Miglena leads with precision and emotional depth.",
    instagram: "@miglena.thepoledancer",
    instagramUrl: "https://www.instagram.com/miglena.thepoledancer/",
    coverSrc: "/images/trainer/trainer-1.jpg",
    youtubeUrl: "https://youtube.com/shorts/ZEY2TwtPD6k?si=meoDdTToDpwfO4fK",
  },
  {
    name: "VEROLINA",
    role: "Organizer & Spinning Combos",
    description:
      "Based in Madeira, leading the retreat with dynamic spinning combinations and seamless flow. Verolina brings structure and energy, balancing challenge with care.",
    instagram: "@verolina.pole",
    instagramUrl: "https://www.instagram.com/madeiracreativevillage/",
    coverSrc: "/images/trainer/trainer-2.png",
    youtubeUrl: "https://www.youtube.com/watch?v=HDHDfb1qVcQ",
  },
];

function TrainerColumn({ trainer }: { trainer: Trainer }) {
  return (
    <div
      className="flex-1 flex flex-col md:flex-row gap-6 md:gap-7.5 rounded-3xl overflow-hidden p-6 md:p-8"
      style={{ background: "#FAFAFA" }}
    >
      {/* Info */}
      <div className="flex flex-col flex-1 min-w-0 min-h-0">
        <p className="font-bold text-xl text-(--green) tracking-tight mb-1">{trainer.name}</p>
        <p className="text-sm text-(--green)/50 mb-6">{trainer.role}</p>
        <p className="text-sm text-(--green)/80 leading-relaxed">{trainer.description}</p>
        <div className="mt-auto pt-8 flex items-center gap-2 text-sm text-(--green)/40">
          <Instagram className="w-4 h-4" />
          {trainer.instagramUrl ? (
            <a
              href={trainer.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--green)/70 transition-colors"
            >
              {trainer.instagram}
            </a>
          ) : (
            <span>{trainer.instagram}</span>
          )}
        </div>
      </div>
      {/* Cover image linking to YouTube */}
      <a
        href={trainer.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full md:flex-none md:w-60 xl:w-80 rounded-3xl overflow-hidden group"
        style={{ height: 450 }}
      >
        <Image
          src={trainer.coverSrc}
          alt={trainer.name}
          fill
          sizes="(max-width: 1280px) 240px, 320px"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/35 transition-colors">
            <Play size={20} className="text-white ml-0.5" />
          </div>
        </div>
      </a>
    </div>
  );
}

export function TrainersSection() {
  return (
    <section className="bg-(--beige) py-16 md:py-24 px-6 md:px-20 xl:px-35 flex flex-col gap-10 md:gap-14">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <SectionBadge label="Trainers" className="mx-auto" />
        <h2 className="serif font-bold text-4xl md:text-5xl lg:text-6xl text-(--green) leading-[1.05] tracking-tighter">
          Meet Your Pole Trainers
        </h2>
        <p className="text-sm text-(--green)/50">
          Two passionate pole dancers for lyrical and spinning pole
        </p>
      </div>

      {/* Two trainer columns */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-15">
        {trainers.map((trainer) => (
          <TrainerColumn key={trainer.name} trainer={trainer} />
        ))}
      </div>
    </section>
  );
}
