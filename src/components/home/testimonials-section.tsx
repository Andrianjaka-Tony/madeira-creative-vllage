import Image from "next/image";
import { Play } from "lucide-react";
import Tagline from "@/components/home/tagline";

const testimonials = [
  {
    id: 1,
    image: "/images/testimonial/testimonial-1.jpg",
    gridArea: "a",
    link: "https://www.instagram.com/reel/DJpakBmuurC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  }, // Tall left (2x2)
  {
    id: 2,
    image: "/images/testimonial/testimonial-2.jpg",
    gridArea: "b",
    link: "https://www.instagram.com/reel/DJ8stC9IdML/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    objectPosition: "center top",
  }, // Small top
  { id: 3, image: "/images/testimonial/testimonial-3.jpeg", gridArea: "c", link: "" }, // Wide top (2 cols)
  { id: 4, image: "/images/testimonial/testimonial-4.jpg", gridArea: "d", link: "" }, // Medium top right
  { id: 5, image: "/images/testimonial/testimonial-5.jpeg", gridArea: "e", link: "" }, // Wide bottom (2 cols)
  {
    id: 6,
    image: "/images/testimonial/testimonial-6.png",
    gridArea: "f",
    link: "https://www.instagram.com/reel/DALuABzo-dv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  }, // Small bottom
  { id: 7, image: "/images/testimonial/testimonial-7.png", gridArea: "g", link: "" }, // Medium bottom right
];

interface TestimonialCardProps {
  item: (typeof testimonials)[0];
  className: string;
  style?: React.CSSProperties;
}

const TestimonialCard = ({ item, className, style }: TestimonialCardProps) => {
  const imageStyle = item.objectPosition ? { objectPosition: item.objectPosition } : undefined;

  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} group transition-transform duration-300 ease-out hover:scale-[1.02]`}
        style={style}
      >
        <Image
          src={item.image}
          alt={`Testimonial ${item.id}`}
          fill
          className="object-cover"
          style={imageStyle}
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110">
            <Play size={26} color="#374151" />
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className={className} style={style}>
      <Image
        src={item.image}
        alt={`Testimonial ${item.id}`}
        fill
        className="object-cover"
        style={imageStyle}
      />
    </div>
  );
};

interface TestimonialsProps {
  tag?: string;
  title?: string;
}

export default function Testimonials({
  tag = "PREVIOUS EXPERIENCES",
  title = "Explore Previous Experiences and Testimonials",
}: TestimonialsProps) {
  return (
    <section className="py-[60px] md:py-[100px] bg-black">
      <div className="mx-auto px-4 md:px-5 w-full">
        <div className="mx-auto w-full max-w-[1170px]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-8">
            <div className="flex flex-col items-start">
              <h2 className="-translate-y-4 font-[family-name:var(--font-playfair)] text-white text-left text-[32px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1] max-w-[500px]">
                {title}
              </h2>
            </div>

            {/* Quote card */}
            <div className="flex-shrink-0 w-full md:w-[340px] lg:w-[380px] rounded-[16px] p-6 flex flex-col justify-between">
              <span className="text-white text-3xl font-serif leading-none mb-4">&ldquo;</span>
              <p className="font-[family-name:var(--font-playfair)] text-white text-[16px] italic leading-relaxed mb-6">
                I came home a different dancer and a different person. Madeira gave me something I
                didn&apos;t even know I needed.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0 bg-gray-600">
                  <Image
                    src="/images/testimonial/testimonial-1.jpg"
                    alt="Ana G."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Ana G. — Berlin</p>
                  <p className="text-gray-400 text-xs">Pole Retreat 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: 1 column */}
          <div className="grid grid-cols-1 gap-3 md:hidden">
            {testimonials.map((item) => (
              <TestimonialCard
                key={item.id}
                item={item}
                className="relative aspect-square rounded-[12px] overflow-hidden bg-gray-200"
              />
            ))}
          </div>

          {/* Tablet: 3 columns */}
          <div className="hidden md:grid lg:hidden grid-cols-3 gap-4">
            {testimonials.map((item, index) => {
              const isLast = index === testimonials.length - 1;
              const remainder = testimonials.length % 3;
              const isOrphan = remainder === 1 && isLast;
              return (
                <TestimonialCard
                  key={item.id}
                  item={item}
                  className={`relative rounded-[16px] overflow-hidden bg-gray-200 ${
                    isOrphan ? "col-span-3 aspect-[3/1]" : "aspect-[4/5]"
                  }`}
                />
              );
            })}
          </div>

          {/* Desktop: Bento grid */}
          <div
            className="hidden lg:grid gap-4"
            style={{
              gridTemplateColumns: "repeat(6, 1fr)",
              gridTemplateRows: "repeat(2, 260px)",
              gridTemplateAreas: `
                "a a b c c d"
                "a a e e f g"
              `,
            }}
          >
            {testimonials.map((item) => (
              <TestimonialCard
                key={item.id}
                item={item}
                className="relative rounded-[16px] overflow-hidden bg-gray-200"
                style={{ gridArea: item.gridArea }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
