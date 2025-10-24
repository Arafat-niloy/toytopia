import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const ForgetPassword = () => {
  const location = useLocation();
  const userEmail = location.state?.email || ""; 

  const handleReset = (e) => {
    e.preventDefault();
    toast.success("Password Reset email is sent to your Gmail! ");
    setTimeout(() => {
      window.location.href = "https://mail.google.com";
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>ToyTopia | Forget Password</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <form
          onSubmit={handleReset}
          className="card w-96 bg-base-100 shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-center mb-4">
            Reset Your Password
          </h2>

          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={userEmail}
            className="input input-bordered w-full mb-4"
            placeholder="Enter your email"
            required
          />

          <button type="submit" className="btn btn-primary w-full">
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
