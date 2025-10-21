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


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />, 
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "forget-password",
                element: <ForgetPassword />
            },
            {
                path: "toy/:id", 
                element: <ToyDetails />,
                
                loader: () => fetch(`/toys.json`) 
            },
            {
                path: "my-profile",
                element: <MyProfile />,
            },
            
        ],
    },
]);

export default router;