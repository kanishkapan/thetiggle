import React from "react";
import { motion } from "framer-motion";

const InstagramGrid = () => {
  const images = [
    "/url-to-image-1.png",
    "/url-to-image-2.png",
    "/url-to-image-3.png",
    "/url-to-image-4.png",
    "/url-to-image-5.png",
    "/url-to-image-6.png",
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9] p-4 md:p-8 font-['Space Grotesk']">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-xl shadow-md"
          >
            <img
              src={src}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InstagramGrid;
