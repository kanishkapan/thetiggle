import React from "react";

export default function PutYourHandsUp() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 pb-2 bg-white w-full gap-8">
      {/* Left - Chocolate Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="../src/assets/Homeimage22.png"
          alt="Chocolate Packets"
          className="w-[280px] sm:w-[400px] md:w-[420px] lg:w-[500px] h-auto object-contain"
        />
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl text-black"
          style={{ fontFamily: "'Give You Glory', 'Caveat', cursive" }}
        >
          Put your hands up if :
        </h2>

        <div
          className="text-sm sm:text-base md:text-lg text-black space-y-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
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
          className="text-sm sm:text-base md:text-lg text-black flex items-center justify-center md:justify-start gap-2 pt-4"
          style={{ fontFamily: "'Give You Glory', cursive" }}
        >
          Oops ! we see your hands up <span className="text-2xl">🙃</span>
        </p>
      </div>
    </div>
  );
}
