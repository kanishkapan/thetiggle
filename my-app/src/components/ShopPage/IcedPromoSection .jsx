import React from "react";
import TiggleNavbar from "../Navbar/tiggleNavbar";
import IcedChocolatePromo from "../ShopPage/IcedChocolatePromo";

const IcedPromoSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Floating Navbar */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <TiggleNavbar />
      </div>

      {/* Background Promo Section */}
      <IcedChocolatePromo />
    </div>
  );
};

export default IcedPromoSection;
