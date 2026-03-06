import { Fragment } from "react/jsx-runtime";
import { Hero } from "@/components/home/hero";
import { SevenDaySection } from "@/components/home/seven-day-section";
import { ExploreSection } from "@/components/home/explore-section";
import { TrainingSpace } from "@/components/home/traning-space";
import { FoodSection } from "@/components/home/food-section";
import { LocationSection } from "@/components/home/location-section";
import { CharmSection } from "@/components/home/charm-section";
import { TrainersSection } from "@/components/home/trainers-section";
import { LineUpSection } from "@/components/home/line-up-section";
import { TravelSection } from "@/components/home/travel-section";
import Footer from "@/layout/footer";
import Testimonials from "@/components/home/testimonials-section";
import { FaqSection } from "@/components/home/faq-section";
import { BookSpotSection } from "@/components/home/book-spot-section";

export function HomeView() {
  return (
    <Fragment>
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
    </Fragment>
  );
}
