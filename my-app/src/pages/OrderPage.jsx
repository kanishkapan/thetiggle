import React from 'react'
import TiggleNavbar from '../components/Navbar/tiggleNavbar'

import ProductShowcase from '../components/Orderpage/ProductShowcase'
import ProductCardsGrid from '../components/Orderpage/ProductCardsGrid'
import WeHearYou from '../components/Landing Page/WeHearYou'

import OnDemandSection from '../components/Orderpage/OnDemandSection'
import ReviewForm from '../components/Orderpage/ReviewForm'

import InstagramGrid from '../components/Orderpage/InstagramGrid'
import CustomerReviewsGrid from '../components/Orderpage/CustomerReviewsGrid'
import Orderfeature from '../components/Orderpage/Orderfeature'
import Footer from '../components/Navbar/Footer'



const OrderPage = () => {
  return (
    <div>

       <TiggleNavbar />
      <ProductShowcase />
     
      <ProductCardsGrid />
        <WeHearYou 
                 heading="#On_demand !  " 
                 description="Your wish our duty !" 
               />
      <OnDemandSection />
       <WeHearYou 
                heading="#Spill_the_sip  " 
                description="Loved it? Say it loud. Your mug’s got a story to tell." 
              />
      <ReviewForm />
      <WeHearYou 
               heading="#Mouths_Dont_Lie  " 
               description="Your taste buds know the truth  and they’re screaming more!" 
             />
      <InstagramGrid />
       <WeHearYou 
                heading="#ChocoChecked  " 
                description="Cocoa-lovers approved — read the hype, then sip it." 
              />
      <CustomerReviewsGrid />
       <WeHearYou 
                heading="#Tiggled_with_soul  " 
                description="Crafted in small batches with real cocoa, not chemistry." 
              />
      <Orderfeature />
      <Footer />





    </div>
  )
}

export default OrderPage