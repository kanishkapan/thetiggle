import React from 'react'
import TiggleNavbar from '../src/components/Navbar/tiggleNavbar'
import TiggleHeroSection from './components/Landing Page/TiggleHeroSection'
import ComicStrip from './components/Landing Page/ComicStrip'
import WeHearYou from './components/Landing Page/WeHearYou'
import HotChocolateFeatures from './components/Landing Page/HotChocolateFeatures'
import PutYourHandsUp from './components/Landing Page/PutYourHandsUp'
import BrandLogos from './components/Landing Page/BrandLogos'
import ChocolateGallery from './components/Landing Page/ChocolateGallery'
import StoryCards from './components/Landing Page/StoryCards'
import Para from './components/Landing Page/Para'
import ImageGalleryScroll from './components/Landing Page/ImageGalleryScroll'
import TiggleImage from './components/AboutUs/TiggleImage'
import Storycard2 from './components/AboutUs/storycard2'
import TiggleCocoaSection from './components/AboutUs/TiggleCocoaSection'
import TiggleBuyNowSection from './components/AboutUs/TiggleBuyNowSection '
const App = () => {
  return (
   <div>
   <TiggleNavbar/>
   <TiggleHeroSection/>
   <ComicStrip/>
   <WeHearYou/>
   <HotChocolateFeatures/>
    <WeHearYou/>
   <PutYourHandsUp/>
    <WeHearYou/>
   <BrandLogos/>
    <WeHearYou/>
   <ChocolateGallery/>
    <WeHearYou/>
      <StoryCards/>
      <WeHearYou/>
      <Para/>
      <WeHearYou/>
      
   {/* our story page  */}


      <TiggleNavbar/>
      <TiggleImage/>
      <WeHearYou/>
      <Storycard2/>
       <WeHearYou/>
       <TiggleCocoaSection/>
       <WeHearYou/>
       <TiggleBuyNowSection/>


   </div>
  )
}

export default App