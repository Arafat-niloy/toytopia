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
    fetch('/toys.json')
      .then(res => res.json())
      .then(data => {
        setFeaturedToys(data.slice(0, 5)); // স্লাইডারের জন্য ৫টি ডাটা নিলাম
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching slider data:", error);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className='container mx-auto my-8 px-4'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}    
        slidesPerView={1}    
        navigation            
        pagination={{ clickable: true }} 
        autoplay={{ delay: 4000, disableOnInteraction: false }} 
        loop={true}   
        className="rounded-xl overflow-hidden shadow-xl"       
      >
        {
          featuredToys.map(toy => (
            <SwiperSlide key={toy.toyId}>
              <div 
                // রিকোয়ারমেন্ট: Height ৬০%-৭০% হতে হবে। 
                // এখানে মোবাইলে 50vh এবং বড় স্ক্রিনে 70vh দেওয়া হয়েছে।
                className="h-[50vh] md:h-[70vh] w-full bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${toy.pictureURL})` }}
              >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 text-center text-white p-6 max-w-3xl mx-auto space-y-4" data-aos="fade-up">
                  <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg leading-tight'>
                    {toy.toyName}
                  </h2>
                  <p className='text-lg md:text-xl text-gray-200 line-clamp-2 md:line-clamp-none'>
                    {toy.description}
                  </p>
                  <div className="pt-4">
                    <Link to={`/toy/${toy.toyId}`} className='btn btn-primary btn-md md:btn-lg border-none text-white px-8'>
                      View Details
                    </Link>
                  </div>
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