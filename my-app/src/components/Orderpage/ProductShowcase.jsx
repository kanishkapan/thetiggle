import React from "react";
import { motion } from "framer-motion";

const ProductShowcase = () => {
  const products = [1, 2, 3, 4];

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen px-4 mt-8 sm:px-8 md:px-12 py-8"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-start">
        <img
          src="../src/assets/orderpageheader.png"
          alt="Chocolate Bar"
          className="w-full max-w-[500px] h-auto object-contain"
        />
      </div>

      {/* Right Product Section */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-start space-y-6 mt-6 md:mt-0">
        {/* Heading */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black">#hot_chocolate_mix</h2>
          <div className="flex items-center space-x-3 mt-2">
            <p className="line-through text-gray-500 text-sm sm:text-base">315RS–777RS</p>
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              only 2 left!!
            </span>
          </div>
        </div>

        {/* Product List */}
        <div className="flex flex-col space-y-4 w-full">
          {products.map((_, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="w-full border-t border-b py-4 flex items-center justify-between"
            >
              {/* Left: Image and Qty */}
              <div className="flex items-center space-x-4">
                <img
                  src="../src/assets/mug.png"
                  alt="Product"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded"
                />
                <div className="flex items-center space-x-2">
                  <button className="w-6 h-6 border border-black rounded-full flex items-center justify-center text-xs">-</button>
                  <span className="text-sm">0</span>
                  <button className="w-6 h-6 border border-black rounded-full flex items-center justify-center text-xs">+</button>
                </div>
              </div>

              {/* Right: Product Info */}
              <div className="flex flex-col items-end">
                <span className="text-sm sm:text-base text-black text-right">
                  Dark Hot Chocolate Mix - 10 Cup Pack
                </span>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="line-through text-gray-400 text-xs">₹329</span>
                  <span className="text-[#e74c3c] text-sm sm:text-base font-semibold">₹319</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
