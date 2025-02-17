import React from 'react'
import Secondheader from "../../components/header/SecondHeader"
import Footer from "../../components/footer/Footer"

const layout = ({children}) => {
  return (
    <div>
        <Secondheader/>
        <div className='min-h-screen'>
          {children}
        </div>
        <Footer/>
    </div>
  )
}

export default layout