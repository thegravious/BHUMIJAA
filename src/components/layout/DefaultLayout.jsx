import React from 'react'
import FirstHeader from '../header/FirstHeader'
import SecondHeader from '../header/SecondHeader'
import HeroSection from '../herosection/HeroSection'
import OurProduct from '../ourproducts/OurProduct'
import Video from "../Video/Video"

const DefaultLayout = () => {
  return (
    <div>
        {/* <FirstHeader/> */}
        <SecondHeader/>
        <HeroSection/>
        <OurProduct/>
        <Video/>
    </div>
  )
}

export default DefaultLayout