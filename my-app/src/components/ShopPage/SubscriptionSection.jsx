import React from "react";

const SubscriptionSection = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center mt-0 pt-0 min-h-screen px-4 sm:px-6 lg:px-12 bg-[#f9f9f9]"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
        <img
          src="../src/assets/bulkorder3.png"
          alt="Tiggle Subscription"
          className="w-full max-w-[90%] md:max-w-[600px] lg:max-w-[700px] h-auto object-contain"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center space-y-5 sm:space-y-6 md:space-y-8 px-4 sm:px-6 lg:px-12">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black max-w-md leading-relaxed">
          Get our best hot chocolate mixes delivered to your door every month.
        </p>

        <ul className="text-base sm:text-lg md:text-xl lg:text-2xl text-black space-y-2 md:space-y-3 leading-relaxed">
          <li>✨ Always fresh</li>
          <li>✨ Exclusive flavors</li>
          <li>✨ Big savings</li>
        </ul>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed">
          Sip, smile, repeat — cancel anytime!
        </p>

        <button className="bg-black text-white rounded-xl px-8 py-3 text-base sm:text-lg md:text-xl hover:bg-gray-800 transition duration-300">
          Subscribe us!
        </button>
      </div>
    </div>
  );
};

export default SubscriptionSection;
