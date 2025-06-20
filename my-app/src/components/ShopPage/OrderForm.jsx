import React from "react";

const OrderForm = () => {
  return (
    <div className="flex flex-col mb-16 md:flex-row min-h-screen bg-[#f9f9f9] font-['Space_Grotesk']">
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 sm:p-8 md:p-12">
        <div className="w-full max-w-lg space-y-6">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-800 text-sm mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-full px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          {/* Contact Number */}
          <div className="flex flex-col">
            <label htmlFor="contact" className="text-gray-800 text-sm mb-1">
              Contact Number
            </label>
            <input
              id="contact"
              type="text"
              placeholder="What to dial to reach you?"
              className="w-full border border-gray-300 rounded-full px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label htmlFor="company" className="text-gray-800 text-sm mb-1">
              Company Name
            </label>
            <input
              id="company"
              type="text"
              placeholder="Company Name"
              className="w-full border border-gray-300 rounded-full px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          {/* What defines you best? */}
          <div className="flex flex-col">
            <label htmlFor="define" className="text-gray-800 text-sm mb-1">
              What defines you best?
            </label>
            <input
              id="define"
              type="text"
              placeholder="Hotel, Cafe, Retail, Distributor, Gifting Firm?"
              className="w-full border border-gray-300 rounded-full px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          {/* Requirements */}
          <div className="flex flex-col">
            <label htmlFor="requirements" className="text-gray-800 text-sm mb-1">
              Share your requirements
            </label>
            <textarea
              id="requirements"
              placeholder="Describe order, any customization you need from us?"
              rows={4}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-orange-300"
            ></textarea>
          </div>

          {/* Confirm Order Button */}
          <button
            type="button"
            className="w-full bg-black text-white rounded-full py-3 text-sm font-medium hover:bg-gray-800 transition duration-300"
          >
            Confirm Order
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="../src/assets/anuvablog.png"
          alt="Promo Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default OrderForm;
