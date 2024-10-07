import Footer from "@/components/Footer";
import AboutSection from "@/components/home/aboutSection";
import Appointment from "@/components/home/Appointment";
import AskQuestions from "@/components/home/AskQuestions";
import Brands from "@/components/home/Brands";
import HeroSection from "@/components/home/heroSection";
import OurServices from "@/components/home/OurServices";
import Testimonials from "@/components/home/Testimonials";
import WhyUs from "@/components/home/WhyUs";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="">
          <HeroSection />
          <Brands />
          <AboutSection />
          <OurServices />
          <WhyUs />
          <Testimonials />
          <AskQuestions />
          <Appointment />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
