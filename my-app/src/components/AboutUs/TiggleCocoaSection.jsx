import React from "react";

const TiggleCocoaSection = () => {
  return (
    <section className="w-full px-2 mb-16 bg-white flex flex-col items-center justify-center text-center " >
      {/* Paragraph */}
      <div className="max-w-5xl mb-10 animate-fade-in-up">
        <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed"  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          We have partnered with the farmers of a small farm in Pollachi, Tamil Nadu
          to source one of India’s best cocoa to prepare the most delicious hot
          chocolate you’ll ever have! It’s vegan <br/>and we do not add any chemicals what so ever.
          <br />
          The feeling of having melted chocolate from a freshly made hot chocolate
          mix is the most calming, and delicious experience ever.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl w-full animate-fade-in-up delay-200">
        <img
          src="../src/assets/farmtomug.png"
          alt="Cocoa 1"
          className="w-full h-auto object-cover rounded-md shadow-md"
        />
        <img
          src="../src/assets/farmtomug1.png"
          alt="Cocoa 2"
          className="w-full h-auto object-cover rounded-md shadow-md"
        />
        <img
          src="../src/assets/farmtomug3.png"
          alt="Cocoa 3"
          className="w-full h-auto object-cover rounded-md shadow-md"
        />
      </div>
    </section>
  );
};

export default TiggleCocoaSection;
