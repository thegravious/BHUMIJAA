import Blogcard from '@/components/blogCard/Blogcard'
import React from 'react'

const page = () => {


const blogs = [
  {
    id: 2,
    title: "The Benefits of a Good Night's Sleep",
    extension: "goodnight",
    description: "Learn why quality sleep matters and how the right mattress can help you build a comfortable bedtime.",
    author: "Golu",
    date: "2026-10-01",
    category: "Sleep Health"
  },
  {
    id: 3,
    title: "Memory Foam Mattress",
    extension: "memoryfoam",
    description: "Experience comfortable support with a memory foam mattress designed for restful sleep.",
    author: "Golu",
    date: "2026-10-03",
    category: "Mattress Guide"
  },
  {
    id: 4,
    title: "Premium Mattress",
    extension: "premium",
    description: "A comfortable mattress designed to provide everyday support and lasting comfort.",
    author: "Golu",
    date: "2026-10-05",
    category: "Product Guide"
  },
  {
    id: 5,
    title: "Comfort Mattress",
    extension: "comfort",
    description: "Find your ideal balance of comfort and support for a better night's sleep.",
    author: "Golu",
    date: "2026-10-07",
    category: "Comfort & Support"
  },
  {
    id: 6,
    title: "High Density Foam",
    extension: "highdensity",
    description: "Discover supportive high-density foam for comfort and durability.",
    author: "Golu",
    date: "2026-10-09",
    category: "Foam Guide"
  },
  {
    id: 7,
    title: "Bedroom Comfort Mattress",
    extension: "bedroom",
    description: "Create a relaxing sleeping space with a mattress made for everyday comfort.",
    author: "Golu",
    date: "2026-10-11",
    category: "Bedroom Ideas"
  },
  {
    id: 8,
    title: "Premium Pillow",
    extension: "pillow",
    description: "Enjoy comfortable head and neck support with a premium sleeping pillow.",
    author: "Golu",
    date: "2026-10-13",
    category: "Pillow Guide"
  },
  {
    id: 9,
    title: "Sleep Comfort Mattress",
    extension: "sleepwell",
    description: "Make your bedtime routine more comfortable with a supportive sleep surface.",
    author: "Golu",
    date: "2026-10-15",
    category: "Sleep Health"
  }
];



return (
    <div className="my-20 px-4 md:px-8 lg:px-16 flex flex-col items-around">
        <h1 className='text-6xl text-center font-serif mb-10'>Latest Blogs</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-20 justify-items-center">
            {blogs.map((data) => (
                <Blogcard data={data} key={data.id} />
            ))}
        </div>
    </div>
)
}

export default page