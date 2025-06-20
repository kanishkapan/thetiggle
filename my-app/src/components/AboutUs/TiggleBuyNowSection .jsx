import React from "react";

const TiggleBuyNowSection = () => {
  return (
    <section
      className="w-full bg-white px-4 mb-16 flex flex-col items-center justify-center text-center "
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-3xl mb-8 animate-fade-in-up">
        <p className="text-base md:text-lg font-medium text-gray-800 leading-relaxed">
          Food made with good intention improves food pleasure. We partnered
          with good folks of a small farm to source one of India’s best cocoa.
          We hired two good women at our manufacturing unit. We have the rule to
          work with people with good energy. And that reflects in Tiggle hot
          chocolate. Those who tried will agree!
        </p>
      </div>

      <button className="bg-[#16161D] text-white w-[400px] sm:w-[320px] md:w-[360px] lg:w-[400px] py-4 rounded-xl text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up delay-150">
        Buy Now
      </button>
    </section>
  );
};

export default TiggleBuyNowSection;
