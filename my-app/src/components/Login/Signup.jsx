import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9f9f9] p-6 md:p-12 " style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Left Visual Flow Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src="/url-to-your-flow-image.png"
          alt="Tiggle Flow Chart"
          className="max-w-full h-auto object-contain"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center mt-10 md:mt-0 space-y-5">
        <img
          src="/url-to-your-tiggle-logo.png"
          alt="Tiggle Logo"
          className="w-24 h-auto mb-4"
        />

        <div className="w-full max-w-sm space-y-1">
          <label className="text-sm text-black">Name</label>
          <input
            type="text"
            placeholder="What should we call u ?"
            className="w-full border border-black rounded-xl p-3 text-sm focus:outline-none"
          />
        </div>

        <div className="w-full max-w-sm space-y-1">
          <label className="text-sm text-black">Email</label>
          <input
            type="email"
            placeholder="Where to mail ?"
            className="w-full border border-black rounded-xl p-3 text-sm focus:outline-none"
          />
        </div>

        <div className="w-full max-w-sm space-y-1">
          <label className="text-sm text-black">Tell Us About Yourself?</label>
          <textarea
            placeholder="Something Interesting !"
            rows="4"
            className="w-full border border-black rounded-xl p-3 text-sm resize-none focus:outline-none"
          ></textarea>
        </div>

        <button className="bg-black text-white rounded-xl p-3 text-sm w-full max-w-sm hover:bg-gray-800 transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
