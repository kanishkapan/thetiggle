import React, { useEffect } from "react";
import bgImage from "../../../src/assets/image.png"; // Make sure the path is correct

const Blogpageheader = () => {
  useEffect(() => {
    // Dynamically load Google Fonts
    const caveatLink = document.createElement("link");
    caveatLink.href =
      "https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap";
    caveatLink.rel = "stylesheet";
    document.head.appendChild(caveatLink);

    const giveYouGloryLink = document.createElement("link");
    giveYouGloryLink.href =
      "https://fonts.googleapis.com/css2?family=Give+You+Glory&display=swap";
    giveYouGloryLink.rel = "stylesheet";
    document.head.appendChild(giveYouGloryLink);

    return () => {
      if (document.head.contains(caveatLink)) {
        document.head.removeChild(caveatLink);
      }
      if (document.head.contains(giveYouGloryLink)) {
        document.head.removeChild(giveYouGloryLink);
      }
    };
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Text and button content */}
      <div
        className="relative z-10 text-center"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Summer Best Seller
        </h1>
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">
          55% Dark Iced Chocolate
        </h2>
        <button className="px-8 py-3 bg-white text-black text-sm md:text-base rounded-md hover:bg-gray-200 transition-all border-2 border-white">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Blogpageheader;
