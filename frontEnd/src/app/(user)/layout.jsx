import React from 'react'
import FirstHeader from "../../components/header/FirstHeader"
import SecondHeader from '@/components/header/SecondHeader'
import Footer from "../../components/footer/Footer"

const layout = ({children}) => {
  return (
    <div>
        {/* <FirstHeader/> */}
        <SecondHeader/>
        <div className='min-h-screen'>
          {children}
        </div>
        <Footer/>
    </div>
  )
}

export default layout