import React from "react";

const InfoSection = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9f9f9] p-6 md:p-12 font-[\'Space Grotesk\']">
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 max-w-xl">
        <p className="text-sm text-black leading-relaxed">
          Whether you’re looking to serve Tiggle in your cafe, stock it in your retail store, add it to your distribution network, or use it for gifting, we’ve got you covered.
        </p>
        <p className="text-sm text-black leading-relaxed">
          Just drop your details here and we’ll swiftly get back to you. Alternatively, feel free to reach out to us via WhatsApp or Email address given below - we can’t wait to make something amazing happen with you!
        </p>
        <p className="text-sm text-black">Email - partnership@thetiggle.com</p>
        <p className="text-sm text-black">
          <a href="https://wa.me/7002154245" className="underline">Click here</a> to directly message us on Whatsapp - 7002154245 (WhatsApp Only)
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex items-center justify-center">
        <img
          src="/url-to-your-tiggle-image.png"
          alt="Tiggle Product Image"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default InfoSection;
