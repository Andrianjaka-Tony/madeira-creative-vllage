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
    <div className="relative w-screen h-[80vh] flex flex-col items-center justify-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/coverImg.jpg"
        className="absolute h-full w-full -z-2 object-cover"
      >
        <source src="/trimmed.mov" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-1 bg-black/60"></div>

      <h1 className="mt-[28vh] w-2/5 text-7xl text-(--beige) text-center font-bold serif tracking-tighter leading-[1.1]">
        Pole Dance Retreat in Madeira Island
      </h1>
      <Button
        text="Book My Spot"
        icon={ArrowUpRight}
        className="px-10 mt-10"
        variant="hero"
        href="https://forms.gle/RKq6z77pzecVbxxT9"
      />

      <div className="px-10 mb-12 mt-auto w-4/5 bg-(--green)/70 rounded-2xl border border-white/10 grid grid-cols-6 divide-x divide-white/20">
        {infos.map((info, key) => (
          <Info key={key} {...info} />
        ))}
      </div>
    </div>
  );
}

type InfoProps = {
  label: string;
  value: string;
};
function Info({ label, value }: InfoProps) {
  return (
    <div className="py-6 flex flex-col justify-center gap-1 px-6 first:pl-0 last:pr-0">
      <span className="text-xs uppercase tracking-widest text-white/50">{label}</span>
      <span className="text-xs text-white/90">{value}</span>
    </div>
  );
}
