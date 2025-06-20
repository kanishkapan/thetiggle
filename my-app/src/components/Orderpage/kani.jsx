import React, { useState } from 'react';

const InstagramGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const posts = [
    {
      id: 1,
      type: 'main',
      title: '16 OMG MOMENTS',
      subtitle: 'Hit 50K on Instagram!',
      emoji: '🤩',
      bgColor: 'bg-orange-200',
      imageUrl: '',
      isLarge: true,
    },
    {
      id: 2,
      type: 'story',
      title: `"But I can't speak in English..."`,
      emoji: '😊',
      bgColor: 'bg-orange-300',
    },
    {
      id: 3,
      type: 'story',
      title: 'We made a tourist try our Iced Chocolate!',
      emoji: '🤩',
      bgColor: 'bg-orange-300',
    },
    {
      id: 4,
      type: 'story',
      title: 'Growing up drinking FALSE promises!?',
      emoji: '😱',
      bgColor: 'bg-orange-300',
    },
    {
      id: 5,
      type: 'story',
      title: 'Gifted Sugar-Free HC to a Stranger! But why?',
      emoji: '🤔',
      bgColor: 'bg-orange-300',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
        {/* Large Post (spans 2 columns and 2 rows) */}
        <div
          className="md:col-span-2 md:row-span-2 relative group cursor-pointer"
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={`h-64 md:h-full w-full rounded-3xl ${posts[0].bgColor} 
              flex flex-col justify-between p-6 overflow-hidden
              transform transition-all duration-500 ease-out
              ${hoveredIndex === 0 ? 'scale-105 shadow-2xl' : 'shadow-lg'}
            `}
          >
            {/* Decorative */}
            <div className="absolute top-4 left-4 text-2xl animate-bounce">{posts[0].emoji}</div>
            <div className="absolute top-8 right-8 w-16 h-16 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-8 h-8 bg-white bg-opacity-30 rounded-full animate-ping"></div>

            {/* Text Content */}
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-black text-orange-800 mb-2 leading-tight flex flex-wrap gap-1">
                {posts[0].title.split(' ').map((word, index) => (
                  <span
                    key={index}
                    className="inline-block transition-opacity duration-500 opacity-100"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {word}
                  </span>
                ))}
              </h1>
              <p className="text-xl md:text-2xl font-bold text-orange-700">
                {posts[0].subtitle}
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="absolute bottom-4 right-4 w-24 h-24 md:w-32 md:h-32 bg-white bg-opacity-30 rounded-2xl flex items-center justify-center border-2 border-dashed border-orange-400">
              <span className="text-orange-600 font-semibold text-sm text-center">
                Image URL Placeholder
              </span>
            </div>
          </div>
        </div>

        {/* Small Story Posts */}
        {posts.slice(1).map((post, index) => (
          <div
            key={post.id}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index + 1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`h-44 md:h-full w-full rounded-2xl ${post.bgColor}
                flex flex-col justify-between p-4 overflow-hidden
                transform transition-all duration-300 ease-out
                ${hoveredIndex === index + 1 ? 'scale-105 shadow-xl rotate-1' : 'shadow-md'}
              `}
            >
              {/* Emoji decoration */}
              <div className="absolute top-2 right-2 text-lg animate-spin-slow">
                {post.emoji}
              </div>
              <div className="absolute bottom-2 left-2 w-4 h-4 bg-white bg-opacity-40 rounded-full animate-pulse"></div>

              {/* Text & Image */}
              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <h3 className="text-sm md:text-base font-bold text-orange-800 leading-tight">
                  {post.title}
                </h3>

                <div className="w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-30 rounded-xl flex items-center justify-center border border-dashed border-orange-400 self-end">
                  <span className="text-orange-600 font-medium text-xs text-center">
                    IMG
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramGrid;
