import React, { useEffect } from "react";
import bgImage from "../../assets/blogpageheader.png"; // Make sure the path is correct

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
     <div
  className="absolute inset-0 z-0"
  style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }} // adjust opacity here
></div>

      {/* Text and button content */}
      <div
        className="relative z-10 text-center"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        <h1 className="text-white text-6xl md:text-8xl font-bold mb-4">
          Summer Best Seller
        </h1>
        <h2 className="text-white text-6xl md:text-8xl font-bold mb-6">
          55% Dark Iced Chocolate
        </h2>
       <button className="w-[400px] px-10 py-4 bg-white text-black text-xl rounded-md hover:bg-gray-200 transition-all border-2 border-white">
  Buy Now
</button>

      </div>
    </div>
  );
};

export default Blogpageheader;
