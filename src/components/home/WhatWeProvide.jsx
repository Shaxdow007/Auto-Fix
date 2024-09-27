import React from "react";

const WhatWeProvide = () => {
  const WhatWeProvide = [
    {
      icon: "*",
      title: "competitive pracing",
      text: "We understand that auto repair can be expensive, whitch is why we offer competitive pricing for all of our services. we strive to provide affordable solustion without sacrificing quality.",
    },
    {
      icon: "*",
      title: "fast and efficient service",
      text: "We know that your time is valuable, which is why we work quickly and efficiently to get your car back on the road as soon as possible. our team is dedicated to completing your repairs in a timely manner without compromising quality.",
    },
    {
      icon: "*",
      title: "experienced and certified technicians",
      text: "Our team of technicians is highly trained and experienced in all aspects of auto repair. We only hire certified professionals who have a proven track record of delivering high-quality work.",
    },
    {
      icon: "*",
      title: "use of high-quality parts and equipment",
      text: "We only use highest quality parts and equipment for all of our repairs. We believe that using top-of-the-line components helps to ensure the longevity and reliability of your vehicle",
    },
  ];
  return (
    <div className="my-8">
      {WhatWeProvide.map((item, index) => {
        const { icon, title, text } = item;
        return (
          <div className="flex items-center gap-6 p-4 rounded-md transition-all duration-300 hover:bg-gray-100" key={index}>
            <div className="icon">{icon}</div>
            <div className="space-y-2">
              <h4 className="capitalize text-4xl">{title}</h4>
              <p className="text-gray-400">{text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WhatWeProvide;
