import React from "react";

export default function ChocolateGallery() {
  const chocolates = [
    {
      img: "https://via.placeholder.com/300x400?text=Iced+Chocolate",
      label: "Iced chocolate",
    },
    {
      img: "https://via.placeholder.com/300x400?text=Dark+Mix",
      label: "Dark mix",
    },
    {
      img: "https://via.placeholder.com/300x400?text=Dark+Mix",
      label: "Dark mix",
    },
    {
      img: "https://via.placeholder.com/300x400?text=Iced+Chocolate",
      label: "Iced chocolate",
    },
  ];

  return (
    <div className="w-full px-4 py-10 bg-white flex flex-wrap justify-center gap-6">
      {chocolates.map((item, index) => (
        <div
          key={index}
          className="relative w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[500px] overflow-hidden rounded-md shadow-md"
        >
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-full object-cover brightness-90"
          />
          <div
            className="absolute bottom-2 w-full text-center text-white text-base font-light"
            style={{ fontFamily: "'Give You Glory', cursive" }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
