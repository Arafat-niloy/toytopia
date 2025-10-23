// src/Pages/MyProfile.jsx

import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photoURL = event.target.photoURL.value;

    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");

        setTimeout(() => {
          window.location.reload();
        }, 1100);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <Helmet>
        <title>ToyTopia | My Profile </title>
      </Helmet>
      <div className="container mx-auto my-12 p-4 max-w-2xl">
        <div className="bg-base-100 shadow-xl rounded-lg p-6 md:p-10">
          <h1 className="text-3xl font-bold text-center mb-8">My Profile</h1>
          {/* profile */}
          <div className="flex flex-col items-center mb-8">
            <div className="avatar mb-4">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} alt={user?.displayName} />
              </div>
            </div>
            <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>

          <div className="divider">Update Info</div>

          {/* Update profilee form */}
          <form onSubmit={handleUpdateProfile}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name :</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="input ml-3 input-bordered"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Photo URL:</span>
              </label>
              <input
                type="text"
                name="photoURL"
                defaultValue={user?.photoURL}
                className="input ml-3"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-full mt-4">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default MyProfile;
