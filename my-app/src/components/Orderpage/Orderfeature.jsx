import React from "react";

export default function Orderfeature() {
  const features = [
    {
      img: "../src/assets/logo1.png",
      text: "Stone Ground",
      description: "Crafted using traditional methods for bold and rich flavors.",
    },
    {
      img: "../src/assets/logo2.png",
      text: "100% Natural",
      description: "Only clean, natural ingredients – no additives or preservatives.",
    },
    {
      img: "../src/assets/logo3.png",
      text: "No Refined Sugar",
      description: "Naturally sweetened for guilt-free indulgence.",
    },
    {
      img: "../src/assets/logo4.png",
      text: "Vegan & Dairy-Free",
      description: "Satisfy your cravings with no compromise on values.",
    },
  ];

  return (
    <div className="w-full px-6 py-20 bg-white flex flex-wrap justify-center gap-20">
      {features.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center max-w-[280px] text-center space-y-5"
        >
          <div className="bg-orange-100 p-10 rounded-2xl flex items-center justify-center w-[160px] h-[160px] shadow-xl hover:scale-105 transition-transform duration-300">
            <img
              src={item.img}
              alt={`icon-${index}`}
              className="w-20 h-20 object-contain"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-black">{item.text}</h3>
          <p className="text-base md:text-lg text-gray-700 leading-snug px-2">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
