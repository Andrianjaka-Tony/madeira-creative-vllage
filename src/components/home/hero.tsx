import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const infos = [
    { label: "Duration", value: "7 Days / 6 Nights" },
    { label: "Location", value: "Madeira Island, Portugal" },
    { label: "Airport", value: "Fly into Funchal" },
    { label: "Group Size", value: "18-20 guests, 2 groups" },
    { label: "Price", value: "From 1850€ per person" },
    { label: "Deposit", value: "500 deposit with 3 instalments" },
  ];

  return (
    <div className="relative w-screen flex flex-col items-center justify-center">
      <Image
        src="/images/coverImg.jpg"
        alt=""
        fill
        priority
        className="absolute object-cover"
        style={{ zIndex: -2 }}
        sizes="100vw"
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute h-full w-full object-cover"
        style={{ zIndex: -2 }}
      >
        <source src="/pole-dance-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" style={{ zIndex: -1 }}></div>

      <h1 className="mt-[20vh] md:mt-[28vh] w-4/5 md:w-3/5 lg:w-2/5 text-4xl md:text-5xl lg:text-7xl text-(--beige) text-center font-bold serif tracking-tighter leading-[1.1]">
        Pole Dance Retreat in Madeira Island
      </h1>
      <Button
        text="Book My Spot"
        icon={ArrowUpRight}
        className="px-10 mt-10"
        variant="hero"
        href="#book"
      />

      <div className="px-4 md:px-10 mt-[10vh] md:mt-[20vh] mb-8 md:mb-12 w-[95%] md:w-4/5 bg-(--green)/70 rounded-2xl border border-white/10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {infos.map((info, key) => (
          <Info key={key} index={key} total={6} {...info} />
        ))}
      </div>
    </div>
  );
}

type InfoProps = {
  label: string;
  value: string;
  index: number;
  total: number;
};
function Info({ label, value }: InfoProps) {
  return (
    <div className="py-5 md:py-6 flex flex-col justify-center gap-1 px-4 md:px-6 border-white/20 border-b border-r lg:border-b-0 nth-[2n]:border-r-0 md:nth-[2n]:border-r md:nth-[3n]:border-r-0 lg:nth-[3n]:border-r lg:last:border-r-0">
      <span className="text-xs uppercase tracking-widest text-white/50">{label}</span>
      <span className="text-xs text-white/90">{value}</span>
    </div>
  );
}
