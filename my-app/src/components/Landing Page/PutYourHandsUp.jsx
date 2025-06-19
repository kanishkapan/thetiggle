import React from "react";

export default function PutYourHandsUp() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10 bg-white w-full gap-8">
      {/* Left - Chocolate Image */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
        <img
          src="https://via.placeholder.com/300x400" // 🔁 Replace with your image URL
          alt="Chocolate Packets"
          className="max-w-[280px] w-full h-auto object-contain"
        />
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-1/2 text-left space-y-6">
        <h2
          className="text-3xl md:text-4xl text-black"
          style={{ fontFamily: "'Give You Glory', 'Caveat', cursive" }}
        >
          Put your hands up if :
        </h2>

        <div className="text-base md:text-lg text-black space-y-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <p>
            Been betrayed by a watery “hot chocolate” that tastes like cocoa-flavored regret.
          </p>
          <p>
            Wanted to make real hot chocolate but realized effort isn’t your strongest flavor.
          </p>
          <p>
            Craved thicc, dreamy hot chocolate but don’t want it to taste like melted candy floss.
          </p>
        </div>

        <p
          className="text-md md:text-lg text-black flex items-center gap-2 pt-4"
          style={{ fontFamily: "'Give You Glory', cursive" }}
        >
          Oops ! we see your hands up{" "}
          <span className="text-2xl">🙃</span>
        </p>
      </div>
    </div>
  );
}
