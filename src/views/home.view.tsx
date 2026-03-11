import { Fragment } from "react/jsx-runtime";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";
import { SevenDaySection } from "@/components/home/seven-day-section";
import { StickyBookBar } from "@/components/home/sticky-book-bar";
import { Navbar } from "@/components/home/navbar";

// Sections below-the-fold chargées en lazy
const ExploreSection = dynamic(() => import("@/components/home/explore-section").then(m => ({ default: m.ExploreSection })));
const TrainingSpace = dynamic(() => import("@/components/home/traning-space").then(m => ({ default: m.TrainingSpace })));
const FoodSection = dynamic(() => import("@/components/home/food-section").then(m => ({ default: m.FoodSection })));
const LocationSection = dynamic(() => import("@/components/home/location-section").then(m => ({ default: m.LocationSection })));
const CharmSection = dynamic(() => import("@/components/home/charm-section").then(m => ({ default: m.CharmSection })));
const LineUpSection = dynamic(() => import("@/components/home/line-up-section").then(m => ({ default: m.LineUpSection })));
const TrainersSection = dynamic(() => import("@/components/home/trainers-section").then(m => ({ default: m.TrainersSection })));
const TravelSection = dynamic(() => import("@/components/home/travel-section").then(m => ({ default: m.TravelSection })));
const Testimonials = dynamic(() => import("@/components/home/testimonials-section"));
const BookSpotSection = dynamic(() => import("@/components/home/book-spot-section").then(m => ({ default: m.BookSpotSection })));
const FaqSection = dynamic(() => import("@/components/home/faq-section").then(m => ({ default: m.FaqSection })));
const Footer = dynamic(() => import("@/layout/footer"));

export function HomeView() {
  return (
    <Fragment>
      <Navbar />
      <StickyBookBar />
      <div className="pb-20 md:pb-0">
      <Hero />
      <SevenDaySection />
      <ExploreSection />
      <TrainingSpace />
      <FoodSection />
      <LocationSection />
      <CharmSection />
      <LineUpSection />
      <TrainersSection />
      <TravelSection />
      <Testimonials />
      <BookSpotSection />
      <FaqSection />
      <Footer />
      </div>
    </Fragment>
  );
}
