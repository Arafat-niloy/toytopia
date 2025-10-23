import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProvider";

const ToyDetails = () => {
  const { user } = useContext(AuthContext);
  const allToys = useLoaderData();
  const { id } = useParams();

  const toy = allToys.find((t) => t.toyId.toString() === id);

  if (!toy) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        <span className="loading loading-spinner loading-lg"></span>
        <h1 className="text-2xl ml-4">Toy not found...</h1>
      </div>
    );
  }

  const {
    pictureURL,
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    subCategory,
  
  } = toy;

  const handleTryNow = (event) => {
    event.preventDefault();
    toast.success("Your trial request is submitted successfully!");
    event.target.reset();
  };

  return (
    <>
      <Helmet>
        <title>ToyTopia | Details: {toyName}</title>
      </Helmet>
      <div className="container mx-auto my-12 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div data-aos="fade-right">
            <img
              src={pictureURL}
              alt={toyName}
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>

          <div data-aos="fade-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{toyName}</h1>
            <p className="text-lg text-gray-600 mb-6">{description}</p>
            <div className="divider"></div>
            <p className="mb-2">
              <strong>Seller:</strong> {sellerName} ({sellerEmail})
            </p>
            <p className="mb-2">
              <strong>Rating:</strong>{" "}
              <span className="text-yellow-500 font-bold">{rating} ★</span>
            </p>
            <p className="mb-2">
              <strong>Available:</strong> {availableQuantity} pcs
            </p>
            <p className="mb-2">
              <strong>Sub-Category:</strong> {subCategory}
            </p>
            <div className="mt-4">
              <strong>Price:</strong> <br /><span className="text-primary font-bold text-3xl">${price}</span>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Try Now form */}
        <div
          className="max-w-lg mx-auto p-6 bg-base-200 rounded-lg shadow-md"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center mb-6">
            Try This Toy Now!
          </h2>
          <form onSubmit={handleTryNow}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Your Name :</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="input ml-3"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Your Email :</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="input ml-3"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-full mt-4">
              Try Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ToyDetails;
