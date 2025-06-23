import React from "react";

export default function WeHearYou({ heading, description }) {
  return (
    <div className="w-full flex justify-center items-center py-8 px-4 bg-white">
      <div className="text-center">
        <h1
          className="text-3xl md:text-5xl font-bold text-black"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          {heading}
        </h1>
        <p
          className="text-md md:text-lg mt-2 text-black"
          style={{ fontFamily: "'Give You Glory', cursive" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
