
import React from 'react'
import BlogData from '../BlogData'

const Page = async ({ params }) => {
  const { detailblog } = await params

  const blog = BlogData.find(
    (item) => item.extension === detailblog
  )

  if (!blog) {
    return <h1 className="mt-20 text-center">Blog Not Found</h1>
  }

  return (
    <div>
      <div className="max-w-3xl mt-20 mx-auto px-4 md:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {blog.title}
        </h1>

        <p className="text-gray-500 text-sm">
          By {blog.author} • {blog.date} • {blog.category}
        </p>

        <img
          src={`/${blog.id}.png`}
          alt={blog.title}
          className="w-full mt-6 rounded-lg"
        />

        <div className="text-lg text-gray-800 leading-relaxed mt-6">
          <p>{blog.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Page
