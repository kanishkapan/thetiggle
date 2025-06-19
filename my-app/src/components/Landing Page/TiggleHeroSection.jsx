import React, { useEffect } from 'react';

const TiggleHeroSection = () => {
  useEffect(() => {
    // Load both fonts from Google Fonts
    const caveatLink = document.createElement('link');
    caveatLink.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap';
    caveatLink.rel = 'stylesheet';
    document.head.appendChild(caveatLink);

    const giveYouGloryLink = document.createElement('link');
    giveYouGloryLink.href = 'https://fonts.googleapis.com/css2?family=Give+You+Glory&display=swap';
    giveYouGloryLink.rel = 'stylesheet';
    document.head.appendChild(giveYouGloryLink);

    return () => {
      // Cleanup: remove the links when component unmounts
      if (document.head.contains(caveatLink)) {
        document.head.removeChild(caveatLink);
      }
      if (document.head.contains(giveYouGloryLink)) {
        document.head.removeChild(giveYouGloryLink);
      }
    };
  }, []);

  return (
    <div className="w-full bg-orange-500 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 xl:px-12 xl:py-20" style={{ fontFamily: 'Glory, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-left space-y-6 lg:space-y-8">
            {/* Main Headlines */}
            <div className="space-y-2 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black leading-tight" style={{ fontFamily: 'Caveat, cursive' }}>
                5 Million Cups & Counting  See What the Hype's About!
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal text-black leading-tight" style={{ fontFamily: 'Caveat, cursive' }}>
               
              </h2>
            </div>

            {/* Quote */}
            <div className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium italic leading-relaxed" style={{ fontFamily: 'Give You Glory, cursive' }}>
              <p>"Tastes like you spent hours making it.</p>
              <p>Only you didn't. We did."</p>
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <button className="bg-transparent border-2 border-black text-black px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 xl:px-12 xl:py-5 rounded-md font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hover:bg-black hover:text-orange-500 transition-all duration-300 transform hover:scale-105" style={{ fontFamily: 'Give You Glory, cursive' }}>
                Taste India's Best Hot Chocolate
              </button>
            </div>
          </div>

          {/* Right Content - Three Product Images */}
          <div className="flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              {/* Product Package 1 */}
              <div className="bg-gray-200 rounded-lg shadow-lg aspect-[3/4] flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-center text-gray-500" style={{ fontFamily: 'Give You Glory, cursive' }}>
                  <div className="text-xs sm:text-sm md:text-base font-medium">Product</div>
                  <div className="text-xs sm:text-sm md:text-base font-medium">Image 1</div>
                </div>
              </div>

              {/* Product Package 2 */}
              <div className="bg-gray-200 rounded-lg shadow-lg aspect-[3/4] flex items-center justify-center transform hover:scale-105 transition-transform duration-300 mt-2 sm:mt-4 md:mt-6">
                <div className="text-center text-gray-500" style={{ fontFamily: 'Give You Glory, cursive' }}>
                  <div className="text-xs sm:text-sm md:text-base font-medium">Product</div>
                  <div className="text-xs sm:text-sm md:text-base font-medium">Image 2</div>
                </div>
              </div>

              {/* Product Package 3 */}
              <div className="bg-gray-200 rounded-lg shadow-lg aspect-[3/4] flex items-center justify-center transform hover:scale-105 transition-transform duration-300 col-span-2 sm:col-span-1">
                <div className="text-center text-gray-500" style={{ fontFamily: 'Give You Glory, cursive' }}>
                  <div className="text-xs sm:text-sm md:text-base font-medium">Product</div>
                  <div className="text-xs sm:text-sm md:text-base font-medium">Image 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scrolling Text */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28 overflow-hidden">
          <div className="whitespace-nowrap">
            <div className="inline-block animate-pulse">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-black" style={{ fontFamily: 'Glory, sans-serif' }}>
                Everyone deserves a time out too !! Because adulting deserves a time out too !! Because adulting deserves a time out too !! Because adulting deserves a time out too !!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiggleHeroSection;