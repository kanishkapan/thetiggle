import React from "react";

const OnDemandSection = () => {
  return (
    <section className="w-full px-4 mb-16 bg-white font-grotesk">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 animate-fade-in-up">
        {/* Text Section */}
        <div className="text-center lg:text-left flex-1 space-y-6">
          
         
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            This is Anuva’s diary. From cacao farms to your cup, she captured
            it all while building Tiggle, one sip at a time.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            This is Anuva’s diary. From cacao farms to your cup, she captured
            it all while building Tiggle, one sip at a time.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            This is Anuva’s diary. From cacao farms to your cup, she captured
            it all while building Tiggle, one sip at a time.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            This is Anuva’s diary. From cacao farms to your cup, she captured
            it all while building Tiggle, one sip at a time.
          </p>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Read Blog by Anuva
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="../src/assets/orderpage2.png" // 🔁 Replace with actual image
            alt="Anuva at cocoa farm"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OnDemandSection;
