import React from "react";
import SummerBestSeller from "../components/ShopPage/SummerBestSeller";
import WeHearYou from "../components/Landing Page/WeHearYou";
import OrderForm from "../components/ShopPage/OrderForm";
import InfoSection from "../components/ShopPage/InfoSection";
import SubscriptionSection from "../components/ShopPage/SubscriptionSection";
import Footer from "../components/Navbar/Footer";
import TiggleNavbar from "../components/Navbar/tiggleNavbar";

const BulkOrderPage = () => {
  return (
    <div>
     
      <SummerBestSeller />
        <WeHearYou 
           heading="#BulkItUpWithTiggle  " 
           description="Big cravings? Bigger batches? We’re all stirred up and ready to ship." 
         />
      <OrderForm />
        <WeHearYou 
           heading="#Dm_us!  " 
           description="Your wish our duty !" 
         />
      <InfoSection />
        <WeHearYou 
           heading="#Community" 
           description="Get updates prior, feel tiggled " 
         />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default BulkOrderPage;
