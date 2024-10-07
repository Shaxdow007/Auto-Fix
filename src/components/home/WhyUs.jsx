import React from "react";
import WhatWeProvide from "./WhatWeProvide";

const WhyUs = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="space-y-2 mb-8">
        <h2 className="title">why choose us?</h2>
        <h3 className="sous-title">we're here for whatever you need</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:gap-2 xl:gap-4">
        <div className="h-[600px] overflow-hidden rounded-lg">
        <img src="./images/chooseUs.jpg" alt="whyUs image" />
        </div>
        <div>
          {/* list of what we provide */}
          <WhatWeProvide />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 p-4 my-8 gap-4">
        {/* box 1 */}
        <div className="text-center">
          <h5 className="text-4xl font-bold text-white">20</h5>
          <p className="text-secondaryColor">Years of Experience</p>
        </div>
        {/* box 2 */}
        <div className="text-center">
          <h5 className="text-4xl font-bold text-white">3.8</h5>
          <p className="text-secondaryColor">Vehicle Repaired</p>
        </div>
        {/* box 3 */}
        <div className="text-center">
          <h5 className="text-4xl font-bold text-white">30</h5>
          <p className="text-secondaryColor">Technicians and Workers</p>
        </div>
        {/* box 4 */}
        <div className="text-center">
          <h5 className="text-4xl font-bold text-white">100%</h5>
          <p className="text-secondaryColor">Satisfied Customers</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
