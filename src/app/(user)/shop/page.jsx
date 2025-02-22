import ProductCard from '@/components/productCard/ProductCard'
import React from 'react'

const page = () => {
  const arr = [2,3,4,5,6,7,8,9,10]
  return (
    <div className='mt-20'>
      {
        arr.map((data, index) =>(
          <ProductCard key={data} img={data}/>
        ))
      }
    </div>
  )
}

export default page