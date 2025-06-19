import React, { useState, useEffect } from 'react';

const TiggleNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Load Glory font from Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Glory:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Cleanup: remove the link when component unmounts
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="w-full bg-orange-500 px-3 py-4 sm:px-6 lg:px-8 xl:px-12" style={{ fontFamily: 'Glory, sans-serif' }}>
      <div className="bg-white rounded-xl px-4 py-3 sm:px-6 sm:py-4 shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-orange-500 text-xl sm:text-2xl font-bold">tiggle</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#" className="text-gray-800 hover:text-orange-500 font-medium text-sm xl:text-base transition-colors">
              Shop
            </a>
            <a href="#" className="text-gray-800 hover:text-orange-500 font-medium text-sm xl:text-base transition-colors">
              Our story
            </a>
            <a href="#" className="text-gray-800 hover:text-orange-500 font-medium text-sm xl:text-base transition-colors">
              Read
            </a>
            <a href="#" className="text-gray-800 hover:text-orange-500 font-medium text-sm xl:text-base transition-colors">
              Bulk orders
            </a>
          </nav>
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <button className="bg-orange-500 text-white px-3 py-2 lg:px-6 lg:py-2 rounded-md font-medium text-xs lg:text-sm hover:bg-orange-600 transition-colors">
              Order Now
            </button>
            <button className="bg-orange-500 text-white px-3 py-2 lg:px-6 lg:py-2 rounded-md font-medium text-xs lg:text-sm hover:bg-orange-600 transition-colors">
              Pin Us !
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <div className={`w-5 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-gray-600 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <div className="py-2 space-y-3">
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <a href="#" className="block text-gray-800 hover:text-orange-500 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">
                Shop
              </a>
              <a href="#" className="block text-gray-800 hover:text-orange-500 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">
                Our story
              </a>
              <a href="#" className="block text-gray-800 hover:text-orange-500 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">
                Read
              </a>
              <a href="#" className="block text-gray-800 hover:text-orange-500 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">
                Bulk orders
              </a>
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="pt-3 border-t border-gray-200 space-y-2">
              <button className="w-full bg-orange-500 text-white py-2.5 rounded-md font-medium text-sm hover:bg-orange-600 transition-colors">
                Order Now
              </button>
              <button className="w-full bg-orange-500 text-white py-2.5 rounded-md font-medium text-sm hover:bg-orange-600 transition-colors">
                Pin Us !
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiggleNavbar;