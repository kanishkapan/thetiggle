import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2c1200] text-white w-full px-6 md:px-16 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and CTA */}
        <div>
          <div className="mb-4">
            <img
              src="/path-to-your-tiggle-logo.png" // Replace with actual image URL
              alt="Tiggle Logo"
              className="h-10 mb-2"
            />
          </div>
          <p className="text-xl font-semibold mb-4">Hot Chocolate</p>
          <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold py-2 px-6 rounded shadow-lg transform hover:scale-105 transition-transform duration-300">
            I Want This
          </button>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2">USEFUL LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-300 transition-colors">Shop</a></li>
            <li><a href="#" className="hover:text-orange-300 transition-colors">Bulk Orders</a></li>
            <li><a href="#" className="hover:text-orange-300 transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-orange-300 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-orange-300 transition-colors">Read Tiggle Blog</a></li>
            <li><a href="#" className="hover:text-orange-300 transition-colors">How to Make Hot Chocolate</a></li>
          </ul>
        </div>

        {/* Policy Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2">POLICY LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-300 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-orange-300 transition-colors">Delivery & Refund Policy</a></li>
            <li><a href="#" className="hover:text-orange-300 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-300 transition-colors">Message on WhatsApp</a></li>
            <li><a href="#" className="hover:text-orange-300 transition-colors">Upvote your favourite idea</a></li>
          </ul>
        </div>

        {/* Instagram Feed */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2">TIGGLE INSTAGRAM</h3>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <img
                key={i}
                src={`https://source.unsplash.com/random/80x80?sig=${i}`}
                alt={`Instagram ${i}`}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaInstagram className="text-pink-400" /> @thetiggle_
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#5b2c08] mt-10 pt-6 text-sm text-center">
        <p className="text-gray-400">Tiggle (TM) © 2021 | Made by humans, just like you!</p>
        <p className="text-xs text-gray-500 mt-1 italic">The best hot chocolate ever. Period.</p>
      </div>
    </footer>
  );
};

export default Footer;