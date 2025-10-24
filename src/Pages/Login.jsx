import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const emailValue = form.email.value;
    const password = form.password.value;

    signIn(emailValue, password)
      .then(() => {
        toast.success("Login Successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Login Successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <Helmet>
        <title>ToyTopia | Login</title>
      </Helmet>

      <div className="hero min-h-[calc(100vh-100px)]">
        <div className="hero-content flex-col w-full max-w-md">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Login now!</h1>
          </div>

          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email:</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                    className="p-3 w-full border rounded border-gray-300 focus:outline-none focus-within:ring-1 "
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password:</span>
                </label>

                
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Your password"
                    className="p-3 w-full border rounded border-gray-300 focus:outline-none focus-within:ring-1 "
                    required
                  />

                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>

                <label className="label">
                  <Link
                    to="/forget-password"
                    state={{ email: email }}
                    className="label-text-alt link link-hover mt-2"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>

              {/* Login Button */}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>

            <p className="text-center mb-4">
              New to ToyTopia?
              <Link
                to="/register"
                className="text-primary font-bold link-hover ml-1"
              >
                Register Here.
              </Link>
            </p>

            <div className="divider px-8">OR</div>

            {/* Google Login */}
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

export default Login;
