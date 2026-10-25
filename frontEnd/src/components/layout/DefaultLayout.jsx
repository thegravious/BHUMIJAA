import React from 'react'
import SecondHeader from '../header/SecondHeader'
import HeroSection from '../herosection/HeroSection'
import OurProduct from '../ourproducts/OurProduct'
import Banner from '../Banner/Banner'
import BestSeller from '../BestSeller/BestSeller'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../footer/Footer'
import Video from '../Video/Video'

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
        {/* <Video/> */}
        <Footer/>
    </div>
  )
}

export default DefaultLayout