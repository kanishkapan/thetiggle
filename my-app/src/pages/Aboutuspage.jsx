import React from 'react'
import TiggleImage from '../components/AboutUs/TiggleImage'
import WeHearYou from '../components/Landing Page/WeHearYou'
import Storycard2 from './../components/AboutUs/Storycard2'
import TiggleCocoaSection from '../components/AboutUs/TiggleCocoaSection'

import TiggleBuyNowSection from '../components/AboutUs/TiggleBuyNowSection '
import AnuvaBlogSection from '../components/AboutUs/AnuvaBlogSection'
import Footer from '../components/Navbar/Footer'









const Aboutuspage = () => {
  return (
    <div>
        <TiggleImage />
      <WeHearYou 
       heading="#Roller_coaster_ride  " 
       description="From local stalls to doorstep delight — we've stirred up quite the ride." 
     />
      <Storycard2 />
      <WeHearYou 
       heading="#From_farm_to_mug" 
       description="You said we do !!" 
     />
      <TiggleCocoaSection />
    <WeHearYou 
     heading="#BuiltDifferentSippedBetter" 
     description="You said we do !!" 
   />
      <TiggleBuyNowSection />
    <WeHearYou 
     heading="#NotesFromTheMaker" 
     description="From day one to mug one" 
   />
      <AnuvaBlogSection />
      <WeHearYou 
       heading="#TeamTiggle" 
       description="Real people. Real passion. Stirring joy," 
     />
      <Footer /></div>
  )
}

export default Aboutuspage