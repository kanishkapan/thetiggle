import React from "react";
import IcedChocolatePromo from "../components/ShopPage/IcedChocolatePromo";
import ProductCards from "../components/ShopPage/ProductCards";
import Footer from "../components/Navbar/Footer";

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
