import React from "react";
import { FaFacebook, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-t from-[#fff1eb] to-[#ace0f985] space-y-4">
      <div className="mt-10 flex justify-center mr-8 text-center font-bold text-3xl">
        
        <img src="/src/assets/letter-t.png" className="w-10 h-10" alt="" /><span className="text-violet-500">ToyTopia</span>
        
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

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//     return (
//         <footer className="footer grid grid-cols-2   p-10 bg-neutral text-neutral-content lg:flex justify-between">
//             <div>
//                 <span className="footer-title">ToyTopia</span>
//                 <p>A vibrant and playful online marketplace for kids' toys.<br/>Encouraging families to discover local sellers.</p>
//                 <p>&copy; {new Date().getFullYear()} ToyTopia. All rights reserved.</p>
//             </div>
//             <div>
//                 <span className="footer-title">Quick Links</span>
//                 <Link to="/" className="link link-hover">Home</Link>

//                 <Link to="/my-profile" className="link link-hover">My Profile</Link>
//                 <Link to="/add-toy" className="link link-hover">Add a Toy</Link>
//             </div>
//             <div>
//                 <span className="footer-title">Legal</span>
//                 <a className="link link-hover">Terms and conditions</a>
//                 <a className="link link-hover">Privacy policy</a>
//                 <a className="link link-hover">Cookie policy</a>
//             </div>
//             <div>
//                 <span className="footer-title">Follow Us</span>
//                 <div className="grid grid-flow-col gap-4">
//                     <a></a>
//                     <a></a>
//                     <a></a>

//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
