import React from "react";

export default function BrandLogos() {
  const logos = [
    "https://via.placeholder.com/100x40?text=Zapier",
    "https://via.placeholder.com/100x40?text=Spotify",
    "https://via.placeholder.com/100x40?text=Zoom",
    "https://via.placeholder.com/100x40?text=Amazon",
    "https://via.placeholder.com/100x40?text=Adobe",
    "https://via.placeholder.com/100x40?text=Notion",
    "https://via.placeholder.com/100x40?text=Netflix",
  ];

  return (
    <div className="w-full px-4 py-8 bg-white">
      <div className="flex flex-col gap-6">
        {[1, 2].map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center w-24 h-14">
                <img
                  src={logo}
                  alt={`Brand ${index}`}
                  className="object-contain max-h-10"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
