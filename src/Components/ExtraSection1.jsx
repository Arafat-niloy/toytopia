import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import Aos from "aos";
import "aos/dist/aos.css"; 

const ExtraSection1 = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  
  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
        Aos.refresh(); 
      });
  }, []);

 
  const categories = [...new Set(toys.map((toy) => toy.subCategory))];

  if (loading) {
    return (
      <div className="text-center my-20">
        <span className="loading loading-lg loading-spinner text-primary"></span>
      </div>
    );
  }

  
  const filteredToys = selectedCategory
    ? toys.filter((toy) => toy.subCategory === selectedCategory)
    : [];

  return (
    <div className="container mx-auto my-20 px-4" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center mb-12">
        🧸 Shop by Category
      </h2>

      
      {!selectedCategory && (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10"
          data-aos="zoom-in"
        >
          {categories.map((category) => {
            const categoryToys = toys.filter(
              (toy) => toy.subCategory === category
            );
            const firstToy = categoryToys[0];

            if (!firstToy) return null;

            return (
              <div
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="p-4 rounded-2xl shadow-md bg-base-100 hover:shadow-xl transition-shadow border cursor-pointer"
                data-aos="flip-up"
              >
                <img
                  src={firstToy.pictureURL}
                  alt={category}
                  className="rounded-xl w-full h-48 object-cover mb-3"
                />
                <h3 className="text-xl font-semibold text-center text-gray-700">
                  {category}
                </h3>
                <p className="text-center text-sm text-gray-500 mt-1">
                  {categoryToys.length} Toys Available
                </p>
              </div>
            );
          })}
        </div>
      )}

      
      {selectedCategory && (
        <div data-aos="fade-up">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <h3 className="text-3xl font-bold text-primary">
              🎯 {selectedCategory} Toys
            </h3>
            <button
              onClick={() => setSelectedCategory(null)}
              className="btn btn-outline btn-primary btn-sm"
            >
              Back to All Categories
            </button>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            data-aos="zoom-in-up"
          >
            {filteredToys.map((toy) => (
              <ToyCard key={toy.toyId} toy={toy} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExtraSection1;
