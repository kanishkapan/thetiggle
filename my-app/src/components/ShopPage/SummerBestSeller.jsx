import React from "react";

const SummerBestSeller = ({ imageUrl }) => {
  return (
    <div className="w-full py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="text-center lg:text-left flex-1 flex flex-col justify-center h-full">
          <h1
            className="text-3xl md:text-5xl font-bold text-orange-600 mb-6 leading-relaxed md:leading-[1.5] tracking-wide"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Summer Best-Seller <br />
            55% Dark Iced Chocolate
          </h1>

          <p className="text-gray-700 italic text-sm md:text-base mb-8 leading-loose">
            “Tastes like you spent hours making it. <br />
            Only you didn’t. We did.”
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 w-fit mx-auto lg:mx-0">
            Read More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full flex justify-center">
          <img
            src={imageUrl}
            alt="Best Seller"
            className="max-w-xs md:max-w-sm lg:max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SummerBestSeller;
