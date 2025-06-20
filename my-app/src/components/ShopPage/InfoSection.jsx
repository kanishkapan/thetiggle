import React from "react";

const InfoSection = () => {
  return (
    <section className="w-full px-4 mb-16 bg-white font-grotesk">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 animate-fade-in-up">
        {/* Text Section */}
        <div className="text-center lg:text-left flex-1 space-y-6">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
           Whether you're looking to serve Tiggle in your cafe,
            that believed in us from the very start.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
           Stock it in your retail store,
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Add it to your distribution network, or use it for gifting — we’ve got you covered.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          Just drop your details here and we'll swiftly get back to you.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
           Alternatively, feel free to reach out to us via WhatsApp or the email address given below — we can’t wait to make something amazing happen with you!
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
           Email – partnership@thetiggle.com
Click here to directly message us on WhatsApp – 7002154245 (WhatsApp Only)
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
            src="../src/assets/bulkorderpage2.png" // 🔁 Replace with actual image
            alt="Anuva at cocoa farm"
            className="w-full h-auto rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
