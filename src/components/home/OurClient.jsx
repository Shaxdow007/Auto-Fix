import React, { useState } from "react";

const OurClient = () => {
  const client = [
    {
      message: `consectetur adipisicing elit. Velit eaque repudiandae voluptatem repellendus,
      ex illo esse libero, dolor sit amet consectetur adipisicing elit. Facere 
      sequi repellat molestiae ipsa esse odio quae blanditiis asperiores 
      magni ratione cupiditate  reiciendis impedit hic non inventore ea! 
      Commodi earum, quas voluptatem illum soluta voluptate.`,
      img: "bluebgcar.jpg",
      name: "mohammed tijanni",
      city: "marrakech",
    },
    {
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere 
      sequi repellat molestiae ipsa esse odio quae blanditiis asperiores 
      magni ratione cupiditate veritatis adipisci iste quam, natus debitis 
      quas possimus dicta!`,
      img: "bluebgcar.jpg",
      name: "walid maroki",
      city: "rabat",
    },
    {
      message: `quas voluptatem illum soluta molestiae ipsa esse odio quae blanditiis asperiores 
      magni ratione cupiditate veritatis adipisci iste quam, natus debitis 
      quas possimus dicta!`,
      img: "bluebgcar.jpg",
      name: "youssef alami",
      city: "casablanca",
    },
  ];
  const [currentClient, setCurrentClient] = useState(0);
  const handelChangeTestimonials = (id) => {
    setCurrentClient(id)
  }
  return (
    <div className="my-8">
      <div className="container mx-auto p-4">
        <div className="client">
          {/* box client */}
          <div className="w-full md:mx-auto text-center md:p-6 h-[150px]">
            <p className="text-white/50 capitalize text-sm md:text-base">{client[currentClient].message}</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-4">
            {client.map((item, index) => {
              const { name, img, city } = item;
              return <div className={`${index === currentClient ? "bg-red-600": "bg-white transition-all duration-300 hover:bg-red-100"}  p-4  flex items-center justify-center gap-4 rounded-tl-3xl rounded-br-2xl rounded-tr-xl`} key={index} onClick={() => handelChangeTestimonials(index)}>
                {/* avatar shdcn */}
                <div className="overflow-hidden">
                  <img src={`./images/${img}`} alt="client" className="rounded-full w-[50px] h-[50px]"/>
                </div>
                <div>
                <h3 className={`${index === currentClient ? "text-white": "text-primaryColor"} capitalize md:text-xl font-medium`}>{name}</h3>
                <h6 className={`capitalize ${index === currentClient ? "text-white/50": "text-primaryColor"} text-sm md:text-xl`}>{city}</h6>
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
