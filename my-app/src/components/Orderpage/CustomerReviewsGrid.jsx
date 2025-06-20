import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Vanshika",
    date: "January 5, 2024",
    rating: 5,
    text: `It is so delicious and so f addictive.\nI just ordered it randomly but noww I need it daily and it has successfully replaced my coffee. WOW.\nAnd last but not least\nSo tasty , so elegant just tasting like a WOW 🧋 okay don’t block me for this!\nAlso on my way for order another pack 🤭`,
    avatar: "V",
  },
  {
    name: "Sudeshna",
    date: "January 3, 2024",
    rating: 5,
    text: `I am sipping my perfect dark hot chocolate as I am writing this review.\nI never thought any hot chocolate can be made this yum at home.\nHonestly, I can drink it everyday. I have been a regular customer at Tiggle and I love it so much.`,
    avatar: "S",
  },
  {
    name: "Nipunika",
    date: "January 3, 2024",
    rating: 5,
    text: `Bought the jaggery hot chocolate and absolutely loved it\nSo simple to make and hella tasty 🙈🙈🙈`,
    avatar: "N",
  },
  {
    name: "Shreya",
    date: "December 30, 2023",
    rating: 4,
    text: `Loved the hot chocolate\nIts dark and thick and very tasty\nNo floury aftertaste like others.\nHowever, i didn’t receive the free marshmallows as mentioned in the invoice. Was looking forward to them`,
    avatar: "S",
  },
];

const stars = (count) => {
  return Array.from({ length: count }).map((_, i) => (
    <span key={i}>⭐</span>
  ));
};

export default function CustomerReviewsGrid() {
  return (
    <div className="px-4 py-10 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center">
                {review.avatar}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{review.name}</p>
                <p className="text-sm text-gray-500 italic">{review.date}</p>
              </div>
            </div>
            <div className="text-yellow-500 text-sm mb-3">{stars(review.rating)}</div>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {review.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
