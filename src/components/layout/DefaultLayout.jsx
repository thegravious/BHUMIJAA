import React from 'react'
import SecondHeader from '../header/SecondHeader'
import HeroSection from '../herosection/HeroSection'
import OurProduct from '../ourproducts/OurProduct'
import Banner from '../Banner/Banner'
import BestSeller from '../BestSeller/BestSeller'
import Testimonials from '../Testimonials/Testimonials'

const DefaultLayout = () => {
  return (
    <div>
        {/* <FirstHeader/> */}
        <SecondHeader/>
        <HeroSection/>
        <OurProduct/>
        <Banner/>
        <BestSeller/>
        <Testimonials/>
    </div>
  )
}

export default DefaultLayout