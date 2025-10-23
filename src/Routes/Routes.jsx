// src/Routes/Routes.jsx

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    errorElement: <NotFound />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forget-password", element: <ForgetPassword /> },
      {
        path: "toy/:id", 
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ), 
        loader: () => fetch("/toys.json").then((res) => res.json()),
      },
      {
        path: "my-profile", 
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "add-toy", 
        element: (
          <PrivateRoute>
            <AddAToy />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
