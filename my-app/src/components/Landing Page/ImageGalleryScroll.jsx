import React, { useEffect, useRef } from 'react';

const images = [
  '../src/assets/imagegaleery1.png',
  '../src/assets/imagegallery2.png',
  '../src/assets/imagegallery3.png',
  '../src/assets/imagegrid1.png',
  '../src/assets/imagegrid2.png',
  '../src/assets/imagegrid3.png',
  '../src/assets/imagegrid4.png',
  '../src/assets/imagegrid5.png',
];

const ImageGalleryScroll = () => {
  const scrollRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 300,
          behavior: 'smooth',
        });

        // Optional: loop back to start if near end
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white py-10">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-10 pb-4 scroll-smooth hide-scrollbar"
      >
        {images.map((url, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] md:w-[320px] h-[400px] rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryScroll;
