import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch((error) => toast.error(error.message));
  };

  // Active Link Style
  const activeStyle = "text-primary font-bold border-b-2 border-primary pb-1";
  const defaultStyle = "font-medium hover:text-primary transition-all";

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-toys" className={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink to="/blogs" className={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
          Blogs
        </NavLink>
      </li>
      
      {/* User Logged In থাকলেই এই রাউটগুলো দেখাবে */}
      {user && (
        <>
          <li>
            <NavLink to="/my-profile" className={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-toy" className={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
              Add A Toy
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    // রিকোয়ারমেন্ট: Sticky Position & Background Color
    <div className="sticky top-0 z-50 bg-base-100/95 backdrop-blur-sm shadow-md">
      <div className="navbar container mx-auto px-4">
        
        {/* Navbar Start (Logo & Mobile Menu) */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <img src="/letter-t.png" className="w-8 h-8 md:w-10 md:h-10" alt="logo" />
            <span className="text-violet-500">ToyTopia</span>
          </Link>
        </div>

        {/* Navbar Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 text-[16px]">
            {navLinks}
          </ul>
        </div>

        {/* Navbar End (User Profile / Login Button) */}
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-3">
              {/* Tooltip for Username */}
              <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                <div className="avatar online cursor-pointer">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img 
                        src={user.photoURL} 
                        alt={user.displayName} 
                        referrerPolicy="no-referrer" 
                    />
                  </div>
                </div>
              </div>
              <button onClick={handleLogOut} className="btn btn-sm md:btn-md btn-outline btn-error">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm md:btn-md text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;