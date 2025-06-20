import React from "react";

const SubscriptionSection = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9f9f9] p-6 md:p-12 " style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src="/url-to-your-subscription-image.png"
          alt="Tiggle Subscription Image"
          className="max-w-full h-auto object-contain"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center mt-10 md:mt-0 space-y-4">
        <p className="text-sm text-black max-w-md">
          Get our best hot chocolate mixes delivered to your door every month.
        </p>
        <ul className="text-sm text-black space-y-1">
          <li>✨ Always fresh</li>
          <li>✨ Exclusive flavors</li>
          <li>✨ Big savings</li>
        </ul>
        <p className="text-sm text-black">Sip, smile, repeat — cancel anytime!</p>
        <button className="bg-black text-white rounded-xl p-3 text-sm hover:bg-gray-800 transition duration-300">
          Subcribe us !
        </button>
      </div>
    </div>
  );
};

export default SubscriptionSection;
