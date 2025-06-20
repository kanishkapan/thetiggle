import React from "react";

const AnuvaBlogSection = () => {
  return (
    <section className="w-full px-4 py-12 bg-white font-grotesk">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 animate-fade-in-up">
        {/* Text Section */}
        <div className="text-center lg:text-left flex-1 space-y-6">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            At Tiggle, everything we do is shaped by the incredible community
            that believed in us from the very start.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            So we decided to open up our journey — the messy, magical
            behind-the-scenes moments that brought Tiggle to life.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            This is Anuva’s diary. From cacao farms to your cup, she captured
            it all while building Tiggle, one sip at a time.
          </p>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#16161D] text-white px-8 py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Read Blog by Anuva
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="/your-image-url-here.jpg" // 🔁 Replace with actual image
            alt="Anuva at cocoa farm"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AnuvaBlogSection;
