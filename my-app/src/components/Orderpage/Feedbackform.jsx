import React from "react";

const FeedbackForm = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9f9f9] p-6 md:p-12 font-[\'Space Grotesk\']">
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-5 max-w-xl">
        <label className="text-black text-sm">Name</label>
        <input
          type="text"
          placeholder="Name"
          className="border border-black rounded-xl p-3 text-sm focus:outline-none"
        />

        <label className="text-black text-sm">Contact Number</label>
        <input
          type="text"
          placeholder="What to dial to reach to u ?"
          className="border border-black rounded-xl p-3 text-sm focus:outline-none"
        />

        <label className="text-black text-sm">Company Name</label>
        <input
          type="text"
          placeholder="Company Name"
          className="border border-black rounded-xl p-3 text-sm focus:outline-none"
        />

        <label className="text-black text-sm">What define your the best ?</label>
        <input
          type="text"
          placeholder="Hotel,Cafe,Retail,Distributor,Gifting Fir ?"
          className="border border-black rounded-xl p-3 text-sm focus:outline-none"
        />

        <label className="text-black text-sm">Share your requirements</label>
        <textarea
          placeholder="Describe order , Any customization you need from us ?"
          rows="4"
          className="border border-black rounded-xl p-3 text-sm resize-none focus:outline-none"
        ></textarea>

        <button className="bg-black text-white rounded-xl p-3 mt-2 text-sm hover:bg-gray-800 transition duration-300">
          Confirm Order
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 flex items-center justify-center">
        <img
          src="/url-to-your-image.png"
          alt="Decorative Graphic"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default FeedbackForm; 

