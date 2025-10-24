import React from "react";
import { FaFacebook, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-t from-[#ace0f930] to-[#fff1eb20] space-y-4">
      <div className="mt-10 flex justify-center mr-8 text-center font-bold text-3xl">
        
        <img src="/letter-t.png" className="w-10 h-10" alt="" /><span className="text-violet-500">ToyTopia</span>
        
      </div>
      <p className="text-center text-lg text-gray-500 font-semibold px-2 md:px-4 lg:flex lg:flex-col">
        A vibrant and playful online marketplace for kids' toys. <span className="">Encouraging families to discover local sellers.</span>
        
      </p>

      <div className="flex justify-between  py-4 w-11/12 mx-auto">
        <div className="flex flex-col">
          <h2 className="text-gray-600 font-bold  lg:text-2xl">Quick Links</h2>
          <Link to="/" className="link link-hover text-gray-500 font-medium">
            Home
          </Link>

          <Link
            to="/my-profile"
            className="link link-hover text-gray-500 font-medium"
          >
            My Profile
          </Link>
          <Link
            to="/add-toy"
            className="link link-hover text-gray-500 font-medium"
          >
            Add a Toy
          </Link>
        </div>

        <div>
          <h2 className="text-gray-600 font-bold lg:text-2xl text-center">
            Social
          </h2>
          <p className="flex justify-between md:text-4xl space-x-4 text-2xl md:space-x-8 mt-3">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaSquareXTwitter />
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-gray-600 font-bold lg:text-2xl">Legal</h2>
          <p className="mt-1 text-gray-500 font-medium link link-hover">
            Privacy policy
          </p>
          <p className=" text-gray-500 font-medium link link-hover">
            Cookie policy
          </p>
          <p className=" text-gray-500 font-medium link link-hover">
            Terms and conditions
          </p>
        </div>
      </div>
      <hr className="text-gray-300" />
      <p className="text-center mb-8">
        Copyright © 2025 ToyTopia - All right reserved.
      </p>
    </div>
  );
};

export default Footer;


