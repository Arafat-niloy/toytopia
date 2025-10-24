import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch((error) => toast.error(error.message));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-lg font-semibold border-b-2 "
              : "hover:text-primary text-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-profile"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-lg font-semibold border-b-2 "
              : "hover:text-primary text-lg"
          }
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-toy"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-lg font-semibold border-b-2 "
              : "hover:text-primary text-lg"
          }
        >
          Add a Toy
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-md px-4  ">
      
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className=" text-violet-400 text-xl md:text-2xl font-bold lg:pl-8 flex items-center gap-2"
        >
          <span>
        <img src="/letter-t.png" className="w-10 h-10" alt="" />
          </span>
          ToyTopia
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end lg:pr-8">
        {loading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : user ? (
          <div className="flex items-center gap-2">
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <Link
                to="/my-profile"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </Link>
            </div>

            <button
              onClick={handleLogOut}
              className="btn btn-sm btn-outline btn-primary"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
