import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Registration from "../pages/Registration";
import PrivateRoute from "./private/PrivateRoute";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import AddProducts from "../pages/AddProducts";
import EditProducts from "../pages/EditProducts";
import Shop from "../pages/Shop";
import EditProfile from "../pages/EditProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                // loader: () => fetch("http://localhost:3000/shoes"),
            },
            {
                path: "/products/:id",
                element: <ProductDetails />,
                loader: ({ params }) =>
                    fetch(`https://edu-toys-server-three.vercel.app/shoes/${params.id}`),
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/contact",
                element: <ContactUs />,
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Registration />,
            },
        ]
    },

    {
        path: "dashboard",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>,
            },
            {
                path: "profile/edit/:id",
                element: <PrivateRoute>
                    <EditProfile />
                </PrivateRoute>,
                loader: ({ params }) =>
                    fetch(`https://edu-toys-server-three.vercel.app/user/get/${params.id}`),
            },
            {
                path: "dashboard/all-products",
                element: (<PrivateRoute>
                    <AllProducts />
                </PrivateRoute>)
            },
            {
                path: "dashboard/add-products",
                element: (<PrivateRoute>
                    <AddProducts />
                </PrivateRoute>)
            },
            {
                path: "/dashboard/all-products/edit/:id",
                element: (
                    <PrivateRoute>
                        <EditProducts />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`https://edu-toys-server-three.vercel.app/shoes/${params.id}`),
            },
        ]
    }


]);