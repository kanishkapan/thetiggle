import React from "react";
import { motion } from "framer-motion";
const articles = [
  {
    id: 1,
    title: "Beat the Heat with this Iced Chocolate Drink Recipe",
    author: "Shreya",
    image: "https://images.unsplash.com/photo-1613136057250-0f5d3f7f74c3?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "5 Delicious Ways To Enjoy Hot Chocolate",
    author: "Sramana Giri",
    image: "https://images.unsplash.com/photo-1608032077018-76d68fe62c5e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "6 Steps To Make The Best Hot Chocolate Bombs",
    author: "Suman Sekhar Sarangi",
    image: "https://images.unsplash.com/photo-1609951651739-cd66e5e0a6fc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "The Ultimate Chocolate Milkshake Guide",
    author: "Aarav Singh",
    image: "https://images.unsplash.com/photo-1618411546304-5a8f0d2dfe3c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    title: "Easy Homemade Mocha in Minutes",
    author: "Riya Mehta",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    title: "5 Cozy Winter Hot Cocoa Recipes",
    author: "Ishaan Verma",
    image: "https://images.unsplash.com/photo-1587732407402-b1d198dd5f89?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    title: "DIY Chocolate Frappe Like a Pro",
    author: "Megha Joshi",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    title: "The Secret to Thick Hot Chocolate",
    author: "Kabir Das",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    title: "Frozen Chocolate Smoothie Bowl",
    author: "Ananya Rao",
    image: "https://images.unsplash.com/photo-1601924638867-3ec5d57bbba5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    title: "Vegan Hot Chocolate Hacks",
    author: "Sarthak Jain",
    image: "https://images.unsplash.com/photo-1613758947300-72a9dd36bfa6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    title: "Dark Chocolate Elixirs to Try",
    author: "Divya Kapoor",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    title: "Refreshing Iced Mocha Magic",
    author: "Raghav Sharma",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=500&q=80",
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