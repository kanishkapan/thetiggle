import React from "react";

export default function Storycard2() {
  const cards = [
    {
      title: "On the streets",
      content:
        "The ride started from a simple idea and fire in the belly to do something unconventional. Every evening after office, we stood outside the metro station in Delhi to sell our freshly made hot chocolate. Crazy!",
    },
    {
      title: "First 100 cups",
      content:
        "It was raining and cold, and we didn’t expect anyone to stop. But somehow we sold our first 100 cups in a single day. That was the sign — people wanted this!",
    },
    {
      title: "Our kitchen lab",
      content:
        "We experimented in a tiny rented kitchen with flavors, froth levels, and sweetness. Some mixes flopped, but one day we nailed the dark mix that made everyone go wow.",
    },
    {
      title: "Going online",
      content:
        "Once our DMs exploded with 'how to buy this?', we knew it was time to set up a website. What started on foot was now ready to reach homes across India!",
    },
  ];

  return (
    <div className="w-full px-4 py-10 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border-4 border-black rounded-xl p-6 text-center shadow-md flex flex-col justify-between"
          >
            <h2
              className="text-2xl mb-4"
              style={{ fontFamily: "'Give You Glory', cursive" }}
            >
              {card.title}
            </h2>
            <p
              className="text-base text-gray-800 mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {card.content}
            </p>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition-all duration-300"
              style={{ fontFamily: "'Give You Glory', cursive" }}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
