// src/Pages/Register.jsx

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    if (password.length < 6)
      return toast.error("Password must be at least 6 characters.");
    if (!/[A-Z]/.test(password))
      return toast.error("Password must have one Uppercase letter.");
    if (!/[a-z]/.test(password))
      return toast.error("Password must have one Lowercase letter.");

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL)
          .then(() => {
            toast.success("Registration Successful!");
            navigate("/");
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Sign-In Successful!");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <Helmet>
        <title>ToyTopia | Register</title>
      </Helmet>
      <div className="hero min-h-[calc(100vh-100px)] ">
        <div className="hero-content flex-col w-full max-w-md">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Create an Account!</h1>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body space-y-3">
              <div className="form-control space-x-1">
                <label className="label">
                  <span className="label-text">Name: </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="p-2 w-full border rounded border-gray-300  focus-within:ring-1  "
                  required
                />
              </div>
              <div className="form-control space-x-1">
                <label className="label">
                  <span className="label-text">Email:</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="p-2 w-full border rounded border-gray-300  focus-within:ring-1  "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL:</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Link to your photo"
                  className="border border-gray-300 rounded p-2 w-full focus-within:ring-1"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password:</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Your password"
                  className="border border-gray-300 p-3 rounded w-full "
                  required
                />
                <span
                  className="absolute top-1/2 right-4 mt-1 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
            <p className="text-center mb-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-bold link-hover ml-1"
              >
                Login Here
              </Link>
            </p>
            <div className="divider px-8">OR</div>
            <div className="form-control p-8 pt-0">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline border-pink-500 text-pink-500 hover:border-none hover:bg-pink-400 hover:text-white flex items-center w-full"
              >
                <FcGoogle size={23} /> <span>Sign-In with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
