import React from "react";
import { motion } from "framer-motion";
const articles = [
  {
    id: 1,
    title: "Beat the Heat with this Iced Chocolate Drink Recipe",
    author: "Shreya",
    image: "../src/assets/blog1.jpg",
  },
  {
    id: 2,
    title: "5 Delicious Ways To Enjoy Hot Chocolate",
    author: "Sramana Giri",
    image: "../src/assets/blog2.jpg",
  },
  {
    id: 3,
    title: "6 Steps To Make The Best Hot Chocolate Bombs",
    author: "Suman Sekhar Sarangi",
      image: "../src/assets/blog3.jpeg",
  },
  {
    id: 4,
    title: "The Ultimate Chocolate Milkshake Guide",
    author: "Aarav Singh",
     image: "../src/assets/blog4.jpg",
  },
  {
    id: 5,
    title: "Easy Homemade Mocha in Minutes",
    author: "Riya Mehta",
     image: "../src/assets/blog5.jpg",
  },
  {
    id: 6,
    title: "5 Cozy Winter Hot Cocoa Recipes",
    author: "Ishaan Verma",
      image: "../src/assets/blog6.jpg",
  },
  {
    id: 7,
    title: "DIY Chocolate Frappe Like a Pro",
    author: "Megha Joshi",
     image: "../src/assets/blog7.jpg",
  },
  {
    id: 8,
    title: "The Secret to Thick Hot Chocolate",
    author: "Kabir Das",
      image: "../src/assets/blog9.jpg",
  },
  {
    id: 9,
    title: "Frozen Chocolate Smoothie Bowl",
    author: "Ananya Rao",
     image: "../src/assets/blog1.jpg",
  },
  
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ChocolateArticles = () => {
  return (
    <div className="w-full bg-white py-10 px-4 md:px-10">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {articles.map((article) => (
          <motion.div
            key={article.id}
            className="bg-white border border-gray-200 rounded shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            <motion.img
              src={article.image}
              alt={article.title}
              className="w-full h-60 object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div className="p-4 flex flex-col justify-between flex-1">
              <h3 className="text-md font-semibold text-gray-900 mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-700 mb-4">By {article.author}</p>
              <span className="text-orange-500 text-sm font-medium cursor-pointer hover:underline">
                CONTINUE READING
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ChocolateArticles;