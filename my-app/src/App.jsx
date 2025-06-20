import React from "react";
import TiggleNavbar from "../src/components/Navbar/tiggleNavbar";
import TiggleHeroSection from "./components/Landing Page/TiggleHeroSection";
import ComicStrip from "./components/Landing Page/ComicStrip";
import WeHearYou from "./components/Landing Page/WeHearYou";
import HotChocolateFeatures from "./components/Landing Page/HotChocolateFeatures";
import PutYourHandsUp from "./components/Landing Page/PutYourHandsUp";
import BrandLogos from "./components/Landing Page/BrandLogos";
import ChocolateGallery from "./components/Landing Page/ChocolateGallery";
import StoryCards from "./components/Landing Page/StoryCards";
import Para from "./components/Landing Page/Para";
import ImageGalleryScroll from "./components/Landing Page/ImageGalleryScroll";
import TiggleImage from "./components/AboutUs/TiggleImage";
import Storycard2 from "./components/AboutUs/storycard2";
import TiggleCocoaSection from "./components/AboutUs/TiggleCocoaSection";
import TiggleBuyNowSection from "./components/AboutUs/TiggleBuyNowSection ";
import AnuvaBlogSection from "./components/AboutUs/AnuvaBlogSection";
import IcedChocolatePromo from "./components/ShopPage/IcedChocolatePromo";
import ProductCards from "./components/ShopPage/ProductCards";
import SummerBestSeller from "./components/ShopPage/SummerBestSeller";
import OrderForm from "./components/ShopPage/OrderForm";
import InfoSection from "./components/ShopPage/InfoSection";
import SubscriptionSection from "./components/ShopPage/SubscriptionSection";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import ProductShowcase from "./components/Orderpage/ProductShowcase";
import ProductCardsGrid from "./components/Orderpage/ProductCardsGrid";
import OnDemandSection from "./components/Orderpage/OnDemandSection";
import FeedbackForm from "./components/Orderpage/ReviewForm";
import InstagramGrid from "./components/Orderpage/InstagramGrid";
import CustomerReviewsGrid from "./components/Orderpage/CustomerReviewsGrid";
import Orderfeature from "./components/Orderpage/Orderfeature";
import ChocolateArticles from "./components/Blogpage/ChocolateArticles";
import Blogpageheader from "./components/Blogpage/Blogpageheader";
import Footer from "./components/Navbar/Footer";
import IcedPromoSection from "./components/ShopPage/IcedPromoSection ";
import ReviewForm from "./components/Orderpage/ReviewForm";
const App = () => {
  return (
    <div>
      <TiggleNavbar />
      <TiggleHeroSection />
      <ComicStrip />
      <WeHearYou />
      <HotChocolateFeatures />
      <WeHearYou />
      <PutYourHandsUp />
      <WeHearYou />
      <BrandLogos />
      <WeHearYou />
      <ChocolateGallery />
      <WeHearYou />
      <StoryCards />
      <WeHearYou />
      <Para />
      <WeHearYou />
      <Footer />

      {/* our story page  */}

      <TiggleImage />
      <WeHearYou />
      <Storycard2 />
      <WeHearYou />
      <TiggleCocoaSection />
      <WeHearYou />
      <TiggleBuyNowSection />
      <WeHearYou />
      <AnuvaBlogSection />
      <WeHearYou />
      <Footer />

      {/* Sign up screen   */}

      <IcedPromoSection />
      <ProductCards />
      <Footer />

      {/* Sign up screen   */}

      <SummerBestSeller />
      <WeHearYou />

      <OrderForm />
      <WeHearYou />
      <InfoSection />
      <WeHearYou />
      <SubscriptionSection />
      <Footer />
     

      {/* Sign up screen   */}

      <Signup />
      <Login />
      {/* order page   */}

      <TiggleNavbar />
      <ProductShowcase />
     
      <ProductCardsGrid />
       <WeHearYou />
      <OnDemandSection />
      <WeHearYou />
      <ReviewForm />
      <WeHearYou />
      <InstagramGrid />
       <WeHearYou />
      <CustomerReviewsGrid />
      <WeHearYou />
      <Orderfeature />

      {/* blog page   */}
      <Blogpageheader />
      <ChocolateArticles />
      <Footer />
    </div>
  );
};

export default App;
