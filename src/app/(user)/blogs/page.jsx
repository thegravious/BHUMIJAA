import React from 'react';
import Blogcard from '../../../components/blogCard/Blogcard';

const Page = () => {
  const arr = [2, 3, 4, 5, 6,7];
  
  return (
    <div className="my-20 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-center mb-8">Latest Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-40 gap-y-20 justify-center">
        {arr.map((data, index) => (
          <Blogcard img={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Page;
