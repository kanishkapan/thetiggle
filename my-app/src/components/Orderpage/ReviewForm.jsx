import React, { useState } from "react";

const ReviewForm = () => {
  const [feedbackType, setFeedbackType] = useState("loved");

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-4 py-10"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-6xl gap-8 md:gap-12">
        {/* Left Form Section */}
        <form className="w-full md:w-1/2 space-y-6">
          {/* Radio Buttons */}
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="feedback"
                value="loved"
                checked={feedbackType === "loved"}
                onChange={() => setFeedbackType("loved")}
                className="appearance-none w-4 h-4 border-2 border-black rounded-full checked:bg-orange-500 checked:border-transparent"
              />
              <span className="text-black">Loved It</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="feedback"
                value="improve"
                checked={feedbackType === "improve"}
                onChange={() => setFeedbackType("improve")}
                className="appearance-none w-4 h-4 border-2 border-black rounded-full checked:bg-orange-500 checked:border-transparent"
              />
              <span className="text-black">Improve</span>
            </label>
          </div>

          {/* Name Field */}
          <div className="space-y-1">
            <label className="text-sm text-black">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-black rounded-lg p-3 text-sm focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-sm text-black">Email</label>
            <input
              type="email"
              placeholder="Where to email"
              className="w-full border border-black rounded-lg p-3 text-sm focus:outline-none"
            />
          </div>

          {/* Review Field */}
          <div className="space-y-1">
            <label className="text-sm text-black">Your review</label>
            <textarea
              placeholder="Review"
              rows="5"
              className="w-full border border-black rounded-lg p-3 text-sm resize-none focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition duration-300"
          >
            Submit Review
          </button>
        </form>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="../src/assets/comic1.png" // Replace with your actual path
            alt="Review"
            className="w-full max-w-md object-contain md:h-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
