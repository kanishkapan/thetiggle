import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  // Add your image URLs below
  'https://your-image-url-1.png',
  'https://your-image-url-2.png',
  'https://your-image-url-3.png',
];

const ImageGalleryScroll = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full bg-white py-10 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <button onClick={() => scroll('left')} className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200">
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <button onClick={() => scroll('right')} className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-10 pb-4 hide-scrollbar"
      >
        {images.map((url, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full max-w-xs rounded-lg shadow-md"
          >
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryScroll;
