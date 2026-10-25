import ProductCard from '@/components/productCard/ProductCard'
import React from 'react'

const page = () => {
const shop = [
  {
    id: 2,
    extension: "BH7K2M9X4P",
    title: "The Benefits of a Good Night's Sleep",
    price: "₹2,499",
    description: "Learn why quality sleep matters and how the right mattress can help you build a comfortable bedtime routine."
  },
  {
    id: 3,
    extension: "BH3N8Q5R1T",
    title: "Memory Foam Mattress",
    price: "₹3,499",
    description: "Experience comfortable support with a memory foam mattress designed for restful sleep."
  },
  {
    id: 4,
    extension: "BH9P4W2L6C",
    title: "Premium Mattress",
    price: "₹4,499",
    description: "A comfortable mattress designed to provide everyday support and lasting comfort."
  },
  {
    id: 5,
    extension: "BH5X7D3M8A",
    title: "Comfort Mattress",
    price: "₹2,999",
    description: "Find your ideal balance of comfort and support for a better night's sleep."
  },
  {
    id: 6,
    extension: "BH2R6K9V4N",
    title: "High Density Foam",
    price: "₹1,999",
    description: "Discover supportive high-density foam for comfort and durability."
  },
  {
    id: 7,
    extension: "BH8T1Y5J3Q",
    title: "Bedroom Comfort Mattress",
    price: "₹3,999",
    description: "Create a relaxing sleeping space with a mattress made for everyday comfort."
  },
  {
    id: 8,
    extension: "BH4C9Z2F7L",
    title: "Premium Pillow",
    price: "₹799",
    description: "Enjoy comfortable head and neck support with a premium sleeping pillow."
  },
  {
    id: 9,
    extension: "BH6M3A8P5W",
    title: "Sleep Comfort Mattress",
    price: "₹3,299",
    description: "Make your bedtime routine more comfortable with a supportive sleep surface."
  }
]

  return (
    <div className="mt-20">
      {shop.map((data) => (
        <ProductCard data={data} key={data.id} />
      ))}
    </div>
  )
}

export default page