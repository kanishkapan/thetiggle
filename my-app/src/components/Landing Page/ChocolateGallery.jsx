import React from "react";

export default function ChocolateGallery() {
  const chocolates = [
    {
      img: "../src/assets/reelsectionimage1.png",
      label: "Iced chocolate",
    },
    {
      img: "../src/assets/reelsectionimage2.png",
      label: "Dark mix",
    },
    {
      img: "../src/assets/reelsectionimage3.png",
      label: "Dark mix",
    },
    {
      img: "../src/assets/reelsectionimage4.png",
      label: "Iced chocolate",
    },
    {
      img: "../src/assets/reelsectionimage4.png",
      label: "Iced chocolate",
    },
    {
      img: "../src/assets/reelsectionimage4.png",
      label: "Iced chocolate",
    },
  ];

  return (
    <div className="w-full px-4 py-10 bg-white flex flex-wrap justify-center gap-6">
      {chocolates.map((item, index) => (
        <div
          key={index}
          className="relative w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[500px] overflow-hidden rounded-md shadow-md group"
        >
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-full object-cover brightness-90 transform group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 ease-in-out"
          />
          <div
            className="absolute bottom-2 w-full text-center text-white text-base font-light opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            style={{ fontFamily: "'Give You Glory', cursive" }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
