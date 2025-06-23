import React from "react";

export default function BrandLogos() {
  const logos = [
    "../src/assets/collab2.png",
    "../src/assets/collab3.png",
    "../src/assets/collab4.png",
    "../src/assets/collab12.png",
    "../src/assets/collab6.png",
    "../src/assets/collab7.png",
    "../src/assets/collab9.png",
    "../src/assets/collab13.png",
    
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 lg:gap-12 place-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-36 sm:w-40 md:w-44 lg:w-48 h-24 sm:h-28 md:h-32 lg:h-36 flex items-center justify-center transition-all duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1"
            >
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
