import React from "react";
import TiggleNavbar from "../../components/Navbar/tiggleNavbar";

const TiggleImage = () => {
  return (
    <div className="relative w-full">
      {/* Floating Transparent Navbar */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <TiggleNavbar />
      </div>

      {/* Background Image */}
      <img
        src="../src/assets/image.png"
        alt="Tiggle Hot Chocolate"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default TiggleImage;
