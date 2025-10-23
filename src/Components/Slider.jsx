import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  const [featuredToys, setFeaturedToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // JSON থেকে ডেটা fetch
    fetch('/toys.json')
      .then(res => res.json())
      .then(data => {
        
        setFeaturedToys(data.slice(0, 4));
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching slider data:", error);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return (
      <div className="h-[500px] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className='container mx-auto my-12 px-4'>
      <Swiper
        
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}     
        slidesPerView={1}     
        navigation            
        pagination={{ clickable: true }} 
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        loop={true}           
      >
        {
          featuredToys.map(toy => (
            <SwiperSlide key={toy.toyId}>
              
              <div 
                className="h-[550px] w-full bg-cover bg-center rounded-lg relative"
                style={{ backgroundImage: `url(${toy.pictureURL})` }}
              >
                {/* black-bg over bg-img */}
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

                {/* slider info */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-8">
                  <h2 className='text-3xl md:text-5xl font-bold mb-4'>{toy.toyName}</h2>
                  <p className='text-lg max-w-2xl mb-6 line-clamp-3'>
                    {toy.description}
                  </p>
                  <Link to={`/toy/${toy.toyId}`} className='btn btn-primary'>
                    View Details
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default Slider;