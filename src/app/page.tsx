import Image from "next/image";
import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import TestimonialCarousel from "../components/TestimonialCarousel";
import EngineeringPrograms from "../components/EngineeringPrograms";
import SuperStack from "../components/SuperStack";
import CareerFormSection from "../components/CareerFormSection";
import SkippersAdvantage from "../components/SkippersAdvantage";
import Circle from "../components/Circle";
import LaunchSection from "../components/LaunchSection";
import BackedByBest from "../components/BackedByBest";
import WhyTrustUs from "../components/WhyTrustUs";

export default function Home() {
  return (
   <>


      <Hero />
      <TrustSection />
      <TestimonialCarousel />
      <EngineeringPrograms />  
      <SuperStack />
      <CareerFormSection />
      <SkippersAdvantage />
      <Circle />
      <LaunchSection />
      <BackedByBest />
      <WhyTrustUs />
      

    </>
  );
}
