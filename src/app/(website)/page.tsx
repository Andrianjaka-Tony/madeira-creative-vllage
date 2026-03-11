import type { Metadata } from "next";
import { HomeView } from "@/views/home.view";

export const metadata: Metadata = {
  title: "Pole Dance Retreat Madeira Island | Madeira Creative Village",
  description:
    "Join a 7-day pole dance and wellness retreat in Madeira Island, Portugal. Small groups of 18–20, breathtaking ocean views, professional coaching from top trainers. From 1,850€. Book your spot.",
  keywords: [
    "pole dance retreat Madeira",
    "pole fitness retreat Portugal",
    "Madeira pole camp",
    "sport retreat Madeira",
    "wellness retreat Madeira",
    "fitness holidays Madeira",
    "active holidays Portugal",
    "Madeira retreat experience",
    "pole dance holiday Madeira",
    "digital nomad sports retreat Madeira",
    "beach pole dance classes Madeira",
    "adventure and wellness retreat Madeira",
    "yoga and pole dance retreat Madeira",
    "pole dance training vacation Portugal",
    "outdoor fitness retreat Madeira",
    "pole camp with boat trips Madeira",
    "group fitness and wellness Madeira",
  ],
  alternates: {
    canonical: "https://madeiracreativevillage.com",
  },
  openGraph: {
    title: "Pole Dance Retreat in Madeira Island, Portugal | 7 Days",
    description:
      "A 7-day pole dance and wellness retreat on Madeira Island. Ocean views, professional coaching, boat trips, and community dining. From 1,850€ per person.",
    url: "https://madeiracreativevillage.com",
    siteName: "Madeira Creative Village",
    images: [
      {
        url: "/images/coverImg.jpg",
        width: 1200,
        height: 630,
        alt: "Pole dance retreat in Madeira Island, Portugal",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pole Dance Retreat Madeira Island | Madeira Creative Village",
    description:
      "7-day pole dance & wellness retreat in Madeira Island, Portugal. Small groups, ocean views, pro coaching. From 1,850€.",
    images: ["/images/coverImg.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      name: "Pole Dance Retreat Madeira Island",
      description:
        "A 7-day lyrical pole dance and wellness retreat in Madeira Island, Portugal. Small groups of 18–20 guests, professional coaching, ocean views, and community experiences.",
      url: "https://madeiracreativevillage.com",
      image: "https://madeiracreativevillage.com/images/coverImg.jpg",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Madeira Creative Village",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ponta do Sol",
          addressRegion: "Madeira",
          addressCountry: "PT",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Madeira Creative Village",
        url: "https://madeiracreativevillage.com",
      },
      offers: {
        "@type": "Offer",
        price: "1850",
        priceCurrency: "EUR",
        availability: "https://schema.org/LimitedAvailability",
        url: "https://madeiracreativevillage.com/#book",
      },
    },
    {
      "@type": "TouristAttraction",
      name: "Madeira Creative Village",
      description:
        "Historic Madeiran manor offering pole dance retreats, wellness programs, and active holidays in Ponta do Sol, Madeira Island, Portugal.",
      url: "https://madeiracreativevillage.com",
      image: "https://madeiracreativevillage.com/images/coverImg.jpg",
      touristType: ["Fitness", "Wellness", "Adventure", "Sports"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ponta do Sol",
        addressRegion: "Madeira",
        addressCountry: "PT",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeView />
    </>
  );
}
