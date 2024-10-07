import React from "react";

const HeroAbout = () => {
  return (
    <div className="hero-pages hero-about">
      <div className="container mx-auto p-4">
        <div className="lg:p-20 lg:space-y-4">
          <h1 className="text-4xl md:text-6xl capitalize font-semibold text-white">
            auto sud <span className="text-red-600">about</span>
          </h1>
          <p className="text-white/50 text-xs md:text-base w-96">
            we srtory that will ensure your 
            vehicle is always in top condition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
