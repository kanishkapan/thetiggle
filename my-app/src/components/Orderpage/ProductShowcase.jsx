import React from "react";
import { motion } from "framer-motion";

const ProductShowcase = () => {
  const products = [1, 2, 3, 4];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9f9f9] p-6 md:p-12 font-['Space Grotesk']">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src="/url-to-your-left-image.png"
          alt="Chocolate Bar"
          className="max-w-full h-auto object-contain"
        />
      </div>

      {/* Right Product List Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col space-y-4 items-start">
        <h2 className="text-2xl font-bold text-black">#hot_chocolate_mix</h2>
        <div className="flex items-center space-x-2">
          <p className="line-through text-gray-500 text-sm">315RS–777RS</p>
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs">only 2 left!!</span>
        </div>

        {products.map((_, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="w-full border-t border-b py-3 flex items-center justify-between space-x-4"
          >
            <div className="flex items-center space-x-3">
              <img
                src="/url-to-product-image.png"
                alt="Product"
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex items-center space-x-2">
                <button className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-xs">-</button>
                <span className="text-sm">0</span>
                <button className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-xs">+</button>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm text-black">Dark Hot Chocolate Mix - 10 Cup Pack</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-gray-400 text-xs">₹329</span>
                <span className="text-[#e74c3c] text-sm font-semibold">₹319</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;