import React from "react";
import { Link } from "react-router-dom";

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
    <div className="card bg-base-100 hover:shadow-2xl transform hover:scale-105 transition-all duration-700 ease-in-out shadow rounded-t-xl   flex flex-col">
      <figure className="h-64">
        <img
          src={pictureURL}
          alt={toyName}
          className=" object-cover h-full w-full"
        />
      </figure>

      <div className="card-body ">
        <h2 className="card-title text-2xl">{toyName}</h2>
        <p className="text-lg text-gray-500">{description}</p>

        <div className="flex justify-between my-2">
          <div className="text-violet-500 font-bold text-lg">Price: ${price}</div>
          <div className="text-orange-500 font-bold text-lg">Rating: {rating} ★</div>
        </div>

        <p className=" text-green-500 text-[16px] font-bold ">Available: {availableQuantity} pcs</p>

        <div className="card-actions justify-end mt-4">
          <Link to={`/toy/${toyId}`} className="btn btn-primary">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
