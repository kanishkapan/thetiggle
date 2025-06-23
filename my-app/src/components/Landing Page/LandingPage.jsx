import React from "react";
import TiggleNavbar from "../Navbar/tiggleNavbar";
import TiggleHeroSection from "../Landing Page/TiggleHeroSection";

const LandingPage = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <TiggleNavbar />
      </div>

      <div >
        <TiggleHeroSection />
      </div>
    </div>
  );
};

export default LandingPage;
