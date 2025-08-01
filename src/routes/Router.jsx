
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Product from "../pages/Product";
import SellerDashboard from "../pages/SellerDashboard";
import VendorDashboard from "../pages/VendorDashboard";
import App from "../pages/App";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Shiped from "../components/sellerDashboard/Shiped";
import AllOrder from "../components/sellerDashboard/AllOrder";
import Pending from "../components/sellerDashboard/Pending";
import Canceled from "../components/sellerDashboard/Canceled";
import Bid from "../components/sellerDashboard/Bid";
import AddItem from "../components/sellerDashboard/AddItem";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/:productId",
    element: <Product />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/seller/shipped",
    element: <Shiped />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/seller/all-order",
    element: <AllOrder />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/seller/pending",
    element: <Pending />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/seller/canceled",
    element: <Canceled />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/seller/bid",
    element: <Bid />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/seller/add-item",
    element: <AddItem />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/vendor/dashboard",
    element: <VendorDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/SignUp",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
