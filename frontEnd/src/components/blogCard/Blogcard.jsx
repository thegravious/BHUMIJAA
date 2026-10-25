
import React from 'react'
import Link from 'next/link'

const Blogcard = ({ data }) => {
    return (
        <div className="flex justify-center w-full">
            <div className="w-full max-w-sm h-full overflow-hidden bg-white mx-auto flex flex-col">

                <div>
                    <Link href={`/blogs/${data.extension}`}>
                        <img
                            className="object-cover object-center w-full h-56"
                            src={`/${data.id}.png`}
                            alt={data.title}
                        />
                    </Link>
                </div>

                <div className="py-4 flex flex-col flex-1">
                    <Link href={`/blogs/${data.extension}`}>
                        <h1 className="text-3xl font-bold hover:text-secondary-text cursor-pointer text-gray-800">
                            {data.title}
                        </h1>
                    </Link>

                    <p className="py-2 text-gray-700">
                        {data.description}
                    </p>

                    <div className="flex items-center mt-4 text-gray-700">
                        <p className="text-sm">Author: {data.author}</p>
                    </div>

                    <div className="flex items-center mt-2 text-gray-700">
                        <p className="text-sm">Date: {data.date}</p>
                    </div>

                    <div className="flex items-center mt-2 text-gray-700">
                        <p className="text-sm">Category: {data.category}</p>
                    </div>

                    <div className="mt-auto pt-6 flex justify-end">
                        <Link
                            href={`/blogs/${data.extension}`}
                            className="inline-block bg-button-color px-10 py-2 text-white hover:bg-hover-button"
                        >
                            Read More
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blogcard
