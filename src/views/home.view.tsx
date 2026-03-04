import { Fragment } from "react/jsx-runtime";
import { Hero } from "@/components/home/hero";
import { SevenDaySection } from "@/components/home/seven-day-section";
import { ExploreSection } from "@/components/home/explore-section";
import { TrainingSpace } from "@/components/home/traning-space";

export function HomeView() {
  return (
    <Fragment>
      <Hero />
      <SevenDaySection />
      <ExploreSection />
      <TrainingSpace />
    </Fragment>
  );
}
