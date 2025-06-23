import React from "react";
import TiggleNavbar from "../components/Navbar/tiggleNavbar";
import TiggleHeroSection from "../components/Landing Page/TiggleHeroSection";
import ComicStrip from "../components/Landing Page/ComicStrip";
import WeHearYou from "../components/Landing Page/WeHearYou";
import HotChocolateFeatures from "../components/Landing Page/HotChocolateFeatures";
import PutYourHandsUp from "../components/Landing Page/PutYourHandsUp";
import BrandLogos from "../components/Landing Page/BrandLogos";
import ChocolateGallery from "../components/Landing Page/ChocolateGallery";
import StoryCards from "../components/Landing Page/StoryCards";
import Para from "../components/Landing Page/Para";
import Footer from "../components/Navbar/Footer";
import LandingPage from "../components/Landing Page/LandingPage";

const Landingpage = () => {
  return (
    <div>
      <LandingPage/>
      <ComicStrip />
      <WeHearYou heading="#We_hear_you" description="You said we do !!" />
      <HotChocolateFeatures />
      <WeHearYou
        heading="#chocolover_confessions"
        description="You said we do !!"
      />
      <PutYourHandsUp />
      <WeHearYou heading="#Time_to_choose " description="You pick we pack !" />
      <BrandLogos />
      <WeHearYou
        heading="#Roller_coaster_ride  "
        description="From local stalls to doorstep delight — we've stirred up quite the ride."
      />
      <ChocolateGallery />
      <WeHearYou
        heading="#Sip_the_difference"
        description="it's a hug in a mug, minus the drama. "
      />
      <StoryCards />
      <WeHearYou
        heading="#Tiggled_with_soul"
        description="Crafted in small batches with real cocoa, not chemistry."
      />
      <Para />
      <WeHearYou heading="#Science_of_yum" description="You laugh we smile !" />
      <Footer />
    </div>
  );
};

export default Landingpage;
