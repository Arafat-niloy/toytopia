import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard'; 

const PopularToys = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/toys.json')
      .then(res => res.json())
      .then(data => {

        setToys(data.slice(0, 6)); 
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
      <h2 className='text-4xl font-bold text-center mb-12'>Popular Toys</h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
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