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
    <div className="card bg-base-100 shadow-xl border h-full flex flex-col">
      <figure className="px-10 pt-10 h-64">
        <img
          src={pictureURL}
          alt={toyName}
          className="rounded-xl object-cover h-full w-full"
        />
      </figure>

      <div className="card-body ">
        <h2 className="card-title">{toyName}</h2>
        <p>{description}</p>

        <div className="flex justify-between my-2">
          <div className="badge badge-outline">Price: ${price}</div>
          <div className="badge badge-outline">Rating: {rating} ★</div>
        </div>

        <p>Available: {availableQuantity} pcs</p>

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
