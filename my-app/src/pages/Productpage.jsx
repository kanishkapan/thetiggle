import React from "react";
import ProductCards from "../components/ShopPage/ProductCards";
import Footer from "../components/Navbar/Footer";
import IcedPromoSection from "../components/ShopPage/IcedPromoSection ";

const Productpage = () => {
  return (
    <div>
      <IcedPromoSection />
      <ProductCards />
      <Footer />
    </div>
  );
};

export default Productpage;
