import Image from "next/image";
import { SectionBadge } from "@/components/ui/section-badge";

type CharmAsset = { src: string; type: "image" | "video"; alt: string };

type CharmFeatureProps = {
  title: string;
  paragraphs: string[];
  assets: CharmAsset[];
  reverse?: boolean;
};

function AssetBlock({ asset }: { asset: CharmAsset }) {
  if (asset.type === "video") {
    return (
      <div className="flex-1 rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-[352px]">
        <video src={asset.src} controls playsInline className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div className="relative flex-1 rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-[352px]">
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes="(max-width: 1024px) 45vw, 25vw"
        className="object-cover"
      />
    </div>
  );
}

function CharmFeature({ title, paragraphs, assets, reverse = false }: CharmFeatureProps) {
  const textBlock = (
    <div className="w-full lg:w-1/2 flex flex-col justify-center">
      <h3 className="serif font-bold text-2xl md:text-3xl text-(--green) leading-[1.1] tracking-tighter mb-4">
        {title}
      </h3>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-sm text-(--green)/70 leading-relaxed mb-3 last:mb-0">
          {p}
        </p>
      ))}
    </div>
  );

  const assetsBlock = (
    <div className="w-full lg:w-1/2 flex gap-4 md:gap-7.5">
      {assets.map((asset, i) => (
        <AssetBlock key={i} asset={asset} />
      ))}
    </div>
  );

  return (
    <div className={`flex flex-col lg:flex-row items-start gap-7.5 ${reverse ? "lg:flex-row-reverse" : ""}`}>
      {textBlock}
      {assetsBlock}
    </div>
  );
}

export function CharmSection() {
  return (
    <section className="bg-white px-6 md:px-20 xl:px-44 py-16 md:py-24 flex flex-col gap-12 md:gap-16">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <SectionBadge className="mx-auto" label="Villa" />
        <h2 className="serif font-bold text-4xl md:text-5xl lg:text-6xl text-(--green) leading-[1.05] tracking-tighter max-w-xl">
          Experience the Charm of Our Historic Villa
        </h2>
      </div>

      {/* Cover */}
      <div className="relative rounded-3xl overflow-hidden w-full h-48 md:h-80 lg:h-120">
        <Image
          src="/images/charm/charm-1.jpg"
          alt="Madeira villa exterior"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Feature 1: text left, 2 images right */}
      <CharmFeature
        title="A Traditional Madeiran Manor at the Top of the Mountain"
        paragraphs={[
          "With an incredible view, a lush green landscape and the turquoise sea coast, at the top of a mountain in Lombo de São João, Ponta do Sol, the Villa is a traditional Madeiran manor house from the late 19th century with a multi-hectare estate.",
          "Preserved and restored in its original architectural style, the house is decorated in a way that evokes traditional Madeiran farmhouses.",
          "You'll have full access to the kitchen, so everyone can enjoy preparing their own meals at the villa.",
        ]}
        assets={[
          { src: "/images/charm/charm-2.jpg", type: "image", alt: "Villa living room" },
          { src: "/images/charm/charm-3.jpg", type: "image", alt: "Villa terrace view" },
        ]}
      />

      {/* Feature 2: 2 videos, text right */}
      <CharmFeature
        reverse
        title="Booking, journaling, relaxing"
        paragraphs={[
          "The villa has a cosy living room where you can spend your time calmly reading books, journaling, or enjoying a drink. We also have a bar in the villa where you can choose from a selection of drinks (honesty bar, not included in the retreat price).",
          "Cats",
          "The villa is home to several resident cats who are a charming addition for animal and nature lovers. These friendly companions love to socialize and spend time with guests, adding to the warm, natural atmosphere. Please note: If you have a cat allergy, this may not be the ideal location for your stay.",
        ]}
        assets={[
          { src: "/images/charm/charm-4.mov", type: "video", alt: "Villa ambiance" },
          { src: "/images/charm/charm-5.mov", type: "video", alt: "Cat at the villa" },
        ]}
      />

      {/* Pool section */}
      <div className="flex flex-col items-center gap-6 text-center">
        <h3 className="serif font-bold text-3xl text-(--green) leading-[1.1] tracking-tighter">
          Relax, have fun, and take poolside photos
        </h3>
        <p className="text-sm text-(--green)/70 leading-relaxed max-w-2xl">
          The villa features a beautiful outdoor swimming pool and a soothing sauna, offering the
          perfect way to unwind after your lessons. Whether you want to take a leisurely swim, bask
          in the sun, or let the gentle heat of the sauna melt away tension, these spaces provide a
          serene retreat where you can truly relax, recharge, and enjoy a moment of peace.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-7.5 w-full">
          {[
            { src: "/images/charm/charm-6.jpg", alt: "Two women by the pool" },
            { src: "/images/charm/charm-7.jpg", alt: "Villa swimming pool" },
            { src: "/images/charm/charm-8.jpg", alt: "Aerial view of villa and pool" },
          ].map((img) => (
            <div
              key={img.alt}
              className="relative flex-1 rounded-3xl overflow-hidden aspect-[3/2] md:aspect-auto md:h-72.5"
            >
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 90vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Feature 3: text left, 2 images right */}
      <CharmFeature
        title="Choose a private or shared room"
        paragraphs={[
          "We offer a range of accommodation options, including private rooms and shared rooms with two single beds or two single beds plus a sofa bed.",
          "Prices vary depending on the option selected: the sofa bed is the most affordable choice, while the private room is the most exclusive. However, you are welcome to share a private room with a pole friend, partner, or companion at no additional cost — and breakfast is included for both guests.",
          "The villa features 13 rooms in total, including 7 double rooms (available in superior and standard categories) and 6 twin rooms.",
          "As the price is per room rather than per person, it offers excellent value for those wishing to share. You can choose your preferred room type during the final step of registration.",
        ]}
        assets={[
          { src: "/images/charm/charm-9.jpg", type: "image", alt: "Double room with beds" },
          { src: "/images/charm/charm-10.png", type: "image", alt: "Room interior detail" },
        ]}
      />
    </section>
  );
}
