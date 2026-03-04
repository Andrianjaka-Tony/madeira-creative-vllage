import { SectionBadge } from "@/components/ui/section-badge";

type CharmFeatureProps = {
  title: string;
  paragraphs: string[];
  images: { alt: string }[];
  reverse?: boolean;
};

function CharmFeature({ title, paragraphs, images, reverse = false }: CharmFeatureProps) {
  const textBlock = (
    <div className="w-1/2 flex flex-col justify-center">
      <h3 className="serif font-bold text-3xl text-(--green) leading-[1.1] tracking-tighter mb-4">
        {title}
      </h3>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-sm text-(--green)/70 leading-relaxed mb-3 last:mb-0">
          {p}
        </p>
      ))}
    </div>
  );

  const imagesBlock = (
    <div className="w-1/2 flex gap-7.5">
      {images.map((img, i) => (
        <div key={i} className="flex-1 rounded-3xl overflow-hidden" style={{ height: "468px" }}>
          <img src="/images/hero.png" alt={img.alt} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );

  return (
    <div className={`flex items-start gap-7.5 ${reverse ? "flex-row-reverse" : ""}`}>
      {textBlock}
      {imagesBlock}
    </div>
  );
}

export function CharmSection() {
  return (
    <section className="bg-white px-44 py-24 flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <SectionBadge className="mx-auto" label="Villa" />
        <h2 className="serif font-bold text-6xl text-(--green) leading-[1.05] tracking-tighter max-w-xl">
          Experience the Charm of Our Historic Villa
        </h2>
      </div>

      {/* Full-width cover image */}
      <div className="rounded-3xl overflow-hidden w-full" style={{ height: "480px" }}>
        <img
          src="/images/hero.png"
          alt="Madeira villa exterior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Feature: text left, 2 images right */}
      <CharmFeature
        title="A Traditional Madeiran Manor at the Top of the Mountain"
        paragraphs={[
          "With an incredible view, a lush green landscape and the turquoise sea coast, at the top of a mountain in Lombo de São João, Ponta do Sol, the Villa is a traditional Madeiran manor house from the late 19th century with a multi-hectare estate.",
          "Preserved and restored in its original architectural style, the house is decorated in a way that evokes traditional Madeiran farmhouses.",
          "You'll have full access to the kitchen, so everyone can enjoy preparing their own meals at the villa.",
        ]}
        images={[{ alt: "Villa living room" }, { alt: "Villa terrace view" }]}
      />

      {/* Feature: 2 images left, text right */}
      <CharmFeature
        reverse
        title="Booking, journaling, relaxing"
        paragraphs={[
          "The villa has a cosy living room where you can spend your time calmly reading books, journaling, or enjoying a drink. We also have a bar in the villa where you can choose from a selection of drinks (honesty bar, not included in the retreat price).",
          "Cats",
          "The villa is home to several resident cats who are a charming addition for animal and nature lovers. These friendly companions love to socialize and spend time with guests, adding to the warm, natural atmosphere. Please note: If you have a cat allergy, this may not be the ideal location for your stay.",
        ]}
        images={[{ alt: "Cat resting on chair" }, { alt: "Villa living room interior" }]}
      />

      {/* Pool section: centered subtitle + text + 3 images */}
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
        <div className="flex gap-7.5 w-full">
          {["Two women by the pool", "Villa swimming pool", "Aerial view of villa and pool"].map(
            (alt) => (
              <div
                key={alt}
                className="flex-1 rounded-3xl overflow-hidden"
                style={{ height: "290px" }}
              >
                <img src="/images/hero.png" alt={alt} className="w-full h-full object-cover" />
              </div>
            ),
          )}
        </div>
      </div>

      {/* Feature: text left, 2 images right */}
      <CharmFeature
        title="Choose a private or shared room"
        paragraphs={[
          "We offer a range of accommodation options, including private rooms and shared rooms with two single beds or two single beds plus a sofa bed.",
          "Prices vary depending on the option selected: the sofa bed is the most affordable choice, while the private room is the most exclusive. However, you are welcome to share a private room with a pole friend, partner, or companion at no additional cost — and breakfast is included for both guests.",
          "The villa features 13 rooms in total, including 7 double rooms (available in superior and standard categories) and 6 twin rooms.",
          "As the price is per room rather than per person, it offers excellent value for those wishing to share. You can choose your preferred room type during the final step of registration.",
        ]}
        images={[{ alt: "Double room with beds" }, { alt: "Room interior detail" }]}
      />
    </section>
  );
}
