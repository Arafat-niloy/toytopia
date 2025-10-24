import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const AddAToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const toyName = form.toyName.value;
    const pictureURL = form.pictureURL.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const availableQuantity = parseInt(form.availableQuantity.value);
    const subCategory = form.subCategory.value;
    const description = form.description.value;

    const sellerName = user?.displayName;
    const sellerEmail = user?.email;

    const newToy = {
      toyName,
      pictureURL,
      price,
      rating,
      availableQuantity,
      subCategory,
      description,
      sellerName,
      sellerEmail,
    };

    console.log("New Toy Added:", newToy);

    toast.success("New toy added successfully!");

    form.reset();
  };

  return (
    <>
      <Helmet>
        <title>ToyTopia | Add A Toy</title>
      </Helmet>

      <div className="container mx-auto my-12 p-4" data-aos="fade-up">
        <div className="max-w-4xl mx-auto p-6 md:p-10 bg-base-200 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-8 text-primary">
            Add a New Toy
          </h1>

          <form onSubmit={handleAddToy}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Toy Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Toy Name: </span> 
                </label> <br />
                <input
                  type="text"
                  name="toyName"
                  placeholder="e.g. Lego Classic Bricks"
                  className="input "
                  required
                />
              </div>

              {/* Picture URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Picture URL:</span>
                </label>
                <input
                  type="text"
                  name="pictureURL"
                  placeholder="- Enter the picture url -"
                  className="input "
                  required
                />
              </div>

              {/* Seller Name  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Name:</span>
                </label>
                <input
                  type="text"
                  name="sellerName"
                  defaultValue={user?.displayName}
                  className="input "
                  readOnly
                />
              </div>

              {/* Seller Email  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Email:</span>
                </label>
                <input
                  type="email"
                  name="sellerEmail"
                  defaultValue={user?.email}
                  className="input "
                  readOnly
                />
              </div>

              {/* Sub-Category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub-Category:</span>
                </label>
                <select
                  name="subCategory"
                  className="select "
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Building Blocks">Building Blocks</option>
                  <option value="Action Figures">Action Figures</option>
                  <option value="Dolls">Dolls</option>
                  <option value="Educational">Educational</option>
                  <option value="Vehicles">Vehicles</option>
                </select>
              </div>

              {/* Price */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Price: </span>
                </label> <br />
                <input
                  type="number"
                  name="price"
                  placeholder="$ dollar"
                  min="0"
                  step="1"
                  className="input "
                  required
                />
              </div>

              {/* Rating */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating:</span>
                </label> <br />
                <input
                  type="number"
                  name="rating"
                  placeholder="1.0 - 5.0"
                  min="1"
                  max="5"
                  step="0.1"
                  className="input "
                  required
                />
              </div>

              {/* Available Quantity */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Quantity: (pcs)</span>
                </label>
                <input
                  type="number"
                  name="availableQuantity"
                  placeholder="e.g. 50"
                  min="0"
                  className="input"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="form-control mt-6 space-x-3">
              <label className="label">
                <span className="label-text">Description:</span>
              </label>
              <textarea
                name="description"
                className="textarea h-24"
                placeholder="Write a short description about the toy..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className=" mt-8">
              <button type="submit" className="btn btn-primary btn-lg">
                Add This Toy
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAToy;
