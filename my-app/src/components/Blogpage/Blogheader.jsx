import React from "react";
import TiggleNavbar from "../Navbar/tiggleNavbar";
import Blogpageheader from "./Blogpageheader";
const Blogheader = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Floating Navbar */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <TiggleNavbar />
      </div>

      {/* Background Promo Section */}
      <Blogpageheader />
    </div>
  );
};

export default Blogheader;
