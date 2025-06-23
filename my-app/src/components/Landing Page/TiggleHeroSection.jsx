import React, { useEffect } from 'react';

const TiggleHeroSection = () => {
  useEffect(() => {
    const caveatLink = document.createElement('link');
    caveatLink.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap';
    caveatLink.rel = 'stylesheet';
    document.head.appendChild(caveatLink);

    const giveYouGloryLink = document.createElement('link');
    giveYouGloryLink.href = 'https://fonts.googleapis.com/css2?family=Give+You+Glory&display=swap';
    giveYouGloryLink.rel = 'stylesheet';
    document.head.appendChild(giveYouGloryLink);

    return () => {
      if (document.head.contains(caveatLink)) {
        document.head.removeChild(caveatLink);
      }
      if (document.head.contains(giveYouGloryLink)) {
        document.head.removeChild(giveYouGloryLink);
      }
    };
  }, []);

  return (
    <div className="w-full bg-[#F15A29] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16 xl:px-16 xl:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 pt-16">
            <div className="leading-tight" style={{ fontFamily: 'Caveat, cursive' }}>
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[3.8rem] xl:text-[4rem] font-black text-black">
                5 Million Cups & Counting
              </h1>
              <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[3.8rem] xl:text-[4rem] font-black text-black">
                See What the Hype’s About!
              </h2>
            </div>
            <div className="text-black text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] font-medium italic leading-snug" style={{ fontFamily: 'Give You Glory, cursive' }}>
              <p>"Tastes like you spent hours making it.</p>
              <p>Only you didn't. We did."</p>
            </div>
            <button
              className="bg-transparent border-2 border-black text-black px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 lg:px-10 lg:py-3 xl:px-12 xl:py-4 rounded font-semibold text-base sm:text-lg md:text-xl hover:bg-black hover:text-orange-500 transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: 'Give You Glory, cursive' }}
            >
              Taste India's Best Hot Chocolate
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="../src/assets/Homepage header.png"
              alt="Chocolate Hero Section"
              className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[520px] xl:w-[540px] 2xl:w-[580px] object-contain transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Bottom Scrolling Text */}
        <div className="mt-12 overflow-hidden">
          <div className="whitespace-nowrap animate-pulse">
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-black"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              Because adulting deserves a time out too !!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiggleHeroSection;