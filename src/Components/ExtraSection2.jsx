import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard';


const ExtraSection2 = () => {
  const [topToys, setTopToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/toys.json')
      .then(res => res.json())
      .then(data => {
        const sortedByRating = data.sort((a, b) => b.rating - a.rating);
        
        setTopToys(sortedByRating.slice(0, 3));
        setLoading(false);
      })
      .catch(error => console.error("Error fetching top rated toys:", error));
  }, []);

  if (loading) {
    return (
      <div className="text-center my-10">
        <span className="loading loading-lg loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className='container mx-auto my-20 px-4' data-aos="zoom-in">
      <h2 className='text-3xl sm:text-4xl font-bold text-center mb-4 md:mb-6'> ⭐ Our Top Rated Toys ⭐ </h2>
      <p className="text-center text-lg max-w-2xl mx-auto mb-10">
        Check out the toys that kids and parents love the most! These are our highest-rated products.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {topToys.map(toy => (
          <ToyCard key={toy.toyId} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default ExtraSection2;