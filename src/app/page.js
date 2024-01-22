
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1 className='text-4xl text-center mt-5'>Next level data fetching</h1>
    <div className='flex justify-center mt-20'>
    <Link href={'/post'}><button className='btn btn-primary'>See All Post</button></Link>
 
    </div>
    </div>
  );
};

export default HomePage;