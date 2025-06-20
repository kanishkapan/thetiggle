import React from "react";

const Login = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-[#f9f9f9] px-4 sm:px-6"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md p-6 sm:p-8 md:p-10 max-w-6xl w-full gap-6 md:gap-0">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="../src/assets/signinscreen.png"
            alt="Tiggle Flow Chart"
            className="max-w-[90%] md:max-w-[80%] h-auto object-contain"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-6">
          <img
            src="../src/assets/tigglelogo.png"
            alt="Tiggle Logo"
            className="w-20 h-auto mb-2"
          />

          <h2 className="text-2xl font-semibold text-black text-center">
            Welcome Back!
          </h2>
          <p className="text-sm text-gray-600 text-center px-2">
            Sign up to get started with Tiggle.
          </p>

          {/* Form */}
          <form className="w-full max-w-sm space-y-4">
            <div className="space-y-1">
              <label className="text-sm text-black">Name</label>
              <input
                type="text"
                placeholder="What should we call you?"
                className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-black">Email</label>
              <input
                type="email"
                placeholder="Where should we mail you?"
                className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-black">Tell Us About Yourself</label>
              <textarea
                placeholder="Something interesting!"
                rows="3"
                className="w-full border border-gray-300 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white rounded-xl py-3 text-sm font-medium hover:bg-gray-800 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
