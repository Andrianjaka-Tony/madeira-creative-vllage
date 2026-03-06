import { SectionBadge } from "@/components/ui/section-badge";

export function LocationSection() {
  return (
    <section className="bg-(--beige) flex items-center gap-7.5 px-20 xl:px-44 py-24">
      {/* Image gauche */}
      <div className="flex-none w-[45%] rounded-3xl overflow-hidden" style={{ height: 512 }}>
        <img
          src="/images/hero.png"
          alt="Ponta do Sol, Madeira"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Colonne texte + images */}
      <div className="flex flex-col gap-6">
        <SectionBadge label="Location" />
        <h2 className="serif font-bold text-6xl text-(--green) leading-[1.05] tracking-tighter">
          Where you will stay
        </h2>
        <p className="text-sm text-(--blue)/70 leading-relaxed max-w-md">
          Ponta do Sol is the sunniest village on the island — where dramatic cliffs meet the
          Atlantic Ocean. Around Ponta do Sol, you can find small villages, terraced fields, and
          hiking trails along the coastline and hills. Nearby natural attractions include the Anjos
          Waterfall.
        </p>

        {/* 2 petites images : 295 x 221 */}
        <div className="flex gap-7.5">
          <div
            className="flex-none rounded-2xl overflow-hidden"
            style={{ width: 295, height: 221 }}
          >
            <img
              src="/images/hero.png"
              alt="Anjos Waterfall"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="relative flex-none rounded-2xl overflow-hidden"
            style={{ width: 295, height: 221 }}
          >
            <img
              src="/images/hero.png"
              alt="Ponta do Sol coastline"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-sm font-medium">+4 more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
