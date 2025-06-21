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
      <Footer />





    </div>
  )
}

export default OrderPage