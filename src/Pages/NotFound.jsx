import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  

  return (
    <>
      <Helmet>
        <title>ToyTopia | 404 Not Found</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#e9defa] to-[#fbfcdb20] min-h-screen">
        <img src="/src/assets/Oops! 404 Error with a broken robot-cuate.png" alt="" className="w-1/4" />

        
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>

        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Sorry, the page you are looking for does not exist. 
        </p>

        

        <Link to="/" className="btn btn-primary hover:bg-violet-500 border-none">
          <FaArrowLeft className="mr-2" />
          Go Back Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
