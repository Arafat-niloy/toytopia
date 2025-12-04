import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard'; 

const PopularToys = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/toys.json')
      .then(res => res.json())
      .then(data => {
        // রিকোয়ারমেন্ট: এক রো-তে ৪টি কার্ড। তাই এখানে ৪টি বা ৮টি ডাটা নেওয়া ভালো।
        setToys(data.slice(0, 4)); 
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching toys data:", error);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return (
      <div className="text-center my-10">
        <span className="loading loading-lg loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className='container mx-auto my-20 px-4'>
      <div className="text-center mb-12">
        <h2 className='text-4xl font-bold text-primary mb-3'>Popular Toys</h2>
        <p className="text-gray-500">Discover the most trending toys loved by kids everywhere!</p>
      </div>
      
      {/* রিকোয়ারমেন্ট: lg:grid-cols-4 (এক লাইনে ৪টি কার্ড) */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {
          toys.map(toy => (
            <ToyCard
              key={toy.toyId} 
              toy={toy}
            />
          ))
        }
      </div>
    </div>
  );
};

export default PopularToys;