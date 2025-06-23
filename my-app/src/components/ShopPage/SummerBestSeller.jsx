import React from "react";
import TiggleNavbar from "../Navbar/tiggleNavbar";
const SummerBestSeller = () => {
  const imageUrl = "../src/assets/bulkorderheader.png";

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Floating Navbar */}
    
 <TiggleNavbar/>
      {/* Content & Image Section */}
      <div className="pt-20 pb-10 px-4 sm:px-6 md:px-10 lg:px-16 max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left min-h-[400px] flex flex-col justify-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange-600 mb-6 leading-tight tracking-wide"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Summer Best-Seller <br />
            55% Dark Iced Chocolate
          </h1>

          <p className="text-gray-700 italic text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
            “Tastes like you spent hours making it. <br />
            Only you didn’t. We did.”
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg text-lg md:text-xl transition duration-300 w-fit mx-auto lg:mx-0">
            Read More
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full flex justify-center min-h-[400px]">
          <img
            src={imageUrl}
            alt="Best Seller"
            className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-full max-w-[550px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SummerBestSeller;
