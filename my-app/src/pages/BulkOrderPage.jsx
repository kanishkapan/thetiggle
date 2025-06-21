import React from "react";
import SummerBestSeller from "../components/ShopPage/SummerBestSeller";
import WeHearYou from "../components/Landing Page/WeHearYou";
import OrderForm from "../components/ShopPage/OrderForm";
import InfoSection from "../components/ShopPage/InfoSection";
import SubscriptionSection from "../components/ShopPage/SubscriptionSection";
import Footer from "../components/Navbar/Footer";

const BulkOrderPage = () => {
  return (
    <div>
      <SummerBestSeller />
      <WeHearYou />

      <OrderForm />
      <WeHearYou />
      <InfoSection />
      <WeHearYou />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default BulkOrderPage;
