import AboutSection from "@/components/home/aboutSection";
import HeroSection from "@/components/home/heroSection";
import OurServices from "@/components/home/OurServices";
import Testimonials from "@/components/home/Testimonials";
import WhyUs from "@/components/home/WhyUs";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="space-y-12">
          <HeroSection />
          <AboutSection />
          <OurServices />
          <WhyUs />
          <Testimonials />
      </div>
    </>
  );
};

export default HomePage;
