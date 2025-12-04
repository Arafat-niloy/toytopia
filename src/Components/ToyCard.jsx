import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

const ToyCard = ({ toy }) => {
  const {
    toyId,
    toyName,
    pictureURL,
    rating,
    availableQuantity,
    price,
    description,
  } = toy;

  return (
    // h-full দেওয়া হয়েছে যাতে সব কার্ডের হাইট সমান হয়
    <div className="card bg-base-100 hover:shadow-2xl shadow-md border border-gray-100 rounded-xl flex flex-col h-full transition-all duration-300 hover:-translate-y-1">
      <figure className="h-56 relative overflow-hidden">
        <img
          src={pictureURL}
          alt={toyName}
          className="object-cover h-full w-full transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg text-xs font-bold shadow text-primary">
            Available: {availableQuantity}
        </div>
      </figure>

      <div className="card-body p-5 flex-grow">
        <h2 className="card-title text-xl font-bold text-gray-800">
            {toyName}
        </h2>
        
        {/* Description limited to 2 lines */}
        <p className="text-gray-500 text-sm line-clamp-2 mb-2">
            {description}
        </p>

        <div className="flex items-center justify-between mt-auto mb-4">
          <div className="text-primary font-bold text-xl">
            ${price}
          </div>
          <div className="flex items-center text-orange-400 font-bold text-sm bg-orange-50 px-2 py-1 rounded">
             <FaStar className="mr-1"/> {rating}
          </div>
        </div>

        <div className="card-actions">
          {/* রিকোয়ারমেন্ট: বাটনে "See More" লেখা থাকতে হবে */}
          <Link to={`/toy/${toyId}`} className="btn btn-primary w-full text-white font-bold">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;