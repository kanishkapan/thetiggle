import React from "react";

export default function HotChocolateFeatures() {
  const features = [
    {
      img: "https://via.placeholder.com/80", // Replace with your icon image URL
      text: "Not an ordinary mass produces hot chocolate",
    },
    {
      img: "https://via.placeholder.com/80",
      text: "Not an ordinary mass produces hot chocolate",
    },
    {
      img: "https://via.placeholder.com/80",
      text: "Not an ordinary mass produces hot chocolate",
    },
    {
      img: "https://via.placeholder.com/80",
      text: "Not an ordinary mass produces hot chocolate",
    },
  ];

  return (
    <div className="w-full px-6 py-12 bg-white flex flex-wrap justify-center gap-12">
      {features.map((item, index) => (
        <div key={index} className="flex flex-col items-center max-w-[200px] text-center">
          <div className="bg-orange-50 p-6 rounded-2xl flex items-center justify-center w-[120px] h-[120px]">
            <img src={item.img} alt={`icon-${index}`} className="w-14 h-14 object-contain" />
          </div>
          <p className="mt-4 text-base text-black leading-snug font-medium">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
