import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgetPassword from "../Pages/ForgetPassword";
import PrivateRoute from "./PrivateRoute"; 
import ToyDetails from "../Pages/ToyDetails";
import MyProfile from "../Pages/MyProfile";
import AddAToy from "../Pages/AddAToy"; 
import AllToys from "../Pages/AllToys"; // Import করুণ

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    errorElement: <NotFound />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "all-toys", element: <AllToys /> }, // নতুন রাউট
      { path: "blogs", element: <div className="text-center py-20 text-2xl font-bold">Blogs Coming Soon...</div> }, // ৫ম রাউট পুরনের জন্য
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forget-password", element: <ForgetPassword /> },
      {
        path: "toy/:id", 
        element: <ToyDetails />, // PrivateRoute সরিয়ে দেওয়া হয়েছে (Instruction অনুযায়ী)
        loader: () => fetch("/toys.json").then((res) => res.json()),
      },
      {
        path: "my-profile", 
        element: <PrivateRoute><MyProfile /></PrivateRoute>,
      },
      {
        path: "add-toy", 
        element: <PrivateRoute><AddAToy /></PrivateRoute>,
      },
    ],
  },
]);

export default router;