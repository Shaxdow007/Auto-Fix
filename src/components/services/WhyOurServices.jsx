import React from "react";
import { BadgeCheck, DollarSign, Rabbit, ShieldCheck } from 'lucide-react';
const WhyOurServices = () => {
  const WhyOurServices = [
    {
      icon:<DollarSign color="#ffffff"/>,
      title: "competitive pracing",
      text: "We understand that auto repair can be expensive, whitch is why we offer competitive pricing for all of our services. we strive to provide affordable solustion without sacrificing quality.",
    },
    {
      icon: <Rabbit color="#ffffff" />,
      title: "fast and efficient service",
      text: "We know that your time is valuable, which is why we work quickly and efficiently to get your car back on the road as soon as possible. our team is dedicated to completing your repairs in a timely manner without compromising quality.",
    },
    {
      icon:<ShieldCheck color="#ffffff" />,
      title: "experienced and certified technicians",
      text: "Our team of technicians is highly trained and experienced in all aspects of auto repair. We only hire certified professionals who have a proven track record of delivering high-quality work.",
    },
    {
      icon:<BadgeCheck color="#ffffff" />,
      title: "use of high-quality parts and equipment",
      text: "We only use highest quality parts and equipment for all of our repairs. We believe that using top-of-the-line components helps to ensure the longevity and reliability of your vehicle",
    },
  ];
  return (
    <div className="container mx-auto p-4">
      <div className="space-y-2 mb-8 text-center">
        <h2 className="title">why choose us?</h2>
        <h3 className="sous-title">we're here for whatever you need</h3>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {WhyOurServices.map((item, index) => {
        const { icon, title, text } = item;
        return (
          <div className="flex items-center gap-6 p-4 rounded-md transition-all duration-300 hover:bg-gray-400/10" key={index}>
            <div className="icon">{icon}</div>
            <div className="space-y-2">
              <h4 className="capitalize text-xl xl:text-2xl text-white">{title}</h4>
              <p className="text-gray-400 text-xs md:text-sm lg:text-xs">{text}</p>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default WhyOurServices;
