import React from 'react'
import Link from 'next/link'

const Blogcard = ({img}) => {
    return (
        <div>
            <div className="w-full max-w-sm overflow-hidden bg-white">
                <div>
                    <img className="object-cover object-center w-full h-56" src={`${img}.png`} alt="avatar" />
                </div>
                <div className="py-4">
                    <Link href={"#"}>
                        <h1 className="text-3xl font-bold hover:text-secondary-text inline-block cursor-pointer text-gray-800">Blog Title</h1>
                    </Link>

                    <p className="py-2 text-gray-700">Blog Description</p>

                    <div className="flex items-center mt-4 text-gray-700">
                        <h1 className="text-sm">Author : golu</h1>
                    </div>

                    <div className="flex items-center mt-2 text-gray-700">
                        <h1 className="text-sm">Date : xxxxx</h1>
                    </div>

                    <div className="flex items-center mt-2 text-gray-700">
                        <h1 className="text-sm">Category : xxxxx</h1>
                    </div>
                    <div className='mt-2 flex justify-end'>
                        <Link href={`/blogs/${img}`}> 
                            <p className="bg-button-color text-white hover:bg-hover-button hover:text-white inline-block px-10 py-2">Read More</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogcard