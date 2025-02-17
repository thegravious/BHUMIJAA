"use client"
import React, { use } from 'react'
import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation';

const page = () => {
  // const router = useRouter()
  const {detailblog} = useParams()
  return (
    <div>
      <div className="max-w-3xl mt-20 mx-auto px-4 md:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog Title Goes Here</h1>

        <p className="text-gray-500 text-sm">By Author Name • Date</p>

        {
          detailblog &&  (
          <img src={`/${detailblog}.png`} alt="Blog Title" className="w-full h-64 md:h-80 object-cover my-6" />
        )}


        <div className="text-lg text-gray-800 leading-relaxed">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac feugiat lectus. Nam eget mauris at libero consectetur dapibus.</p>
          <p className="mt-4">Suspendisse potenti. Ut nec tellus eu turpis hendrerit eleifend. Integer tincidunt libero sit amet mauris fringilla, non ultrices lacus placerat.</p>
        </div>
      </div>

    </div>
  )
}

export default page