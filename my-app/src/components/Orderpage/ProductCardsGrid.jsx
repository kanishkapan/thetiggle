import React from "react";
import { motion } from "framer-motion";

const ProductCardsGrid = () => {
  const cards = [
    {
      img: "/url-to-jaggery-hot-chocolate.png",
      label: "Iced chocolate",
    },
    {
      img: "/url-to-spiced-hot-chocolate.png",
      label: "Iced chocolate",
    },
    {
      img: "/url-to-glasses-on-tray.png",
      label: "Iced chocolate",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 bg-[#f9f9f9] pt-0 font-['Space Grotesk'] min-h-screen">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="relative w-[320px] h-[420px] overflow-hidden rounded-xl shadow-md"
        >
          <img
            src={card.img}
            alt="Product"
            className="w-full h-full object-cover brightness-[.55] hover:brightness-100 transition duration-300 ease-in-out"
          />
          <div className="absolute bottom-4 w-full text-center">
            <p className="text-white text-lg tracking-wide font-light drop-shadow-md">
              {card.label}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductCardsGrid;