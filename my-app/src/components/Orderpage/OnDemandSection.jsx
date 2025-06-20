import React from "react";
import { motion } from "framer-motion";

const OnDemandSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-[#f9f9f9] p-6 md:p-12 font-['Space Grotesk']">
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 text-center md:text-left space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-black">#On_demand !</h2>
        <p className="text-sm md:text-base text-black">
          Been betrayed by a watery “hot chocolate” that tastes like cocoa-flavored regret.
        </p>
        <p className="text-sm md:text-base text-black">
          Wanted to make real hot chocolate but realized effort isn’t your strongest flavor.
        </p>
        <p className="text-sm md:text-base text-black">
          Craved thicc, dreamy hot chocolate but don’t want it to taste like melted candy floss.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white font-medium px-6 py-2 rounded">
          Read More
        </button>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <img
          src="/url-to-your-right-image.png"
          alt="What's inside the box"
          className="w-full max-w-md object-contain"
        />
      </motion.div>
    </div>
  );
};

export default OnDemandSection;
