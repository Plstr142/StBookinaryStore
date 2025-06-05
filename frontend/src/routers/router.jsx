import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/home/Home.jsx";
import Fiction from "../pages/Fiction.jsx";
import NonFiction from "../pages/Nonfiction.jsx";
import Highlights from "../pages/Highlights.jsx";
import Orders from "../pages/Orders.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import CartPage from "../pages/books/CartPage.jsx";
import CheckOutPage from "../pages/books/CheckoutPage.jsx";
import { routeDefs } from "./showRoutes.js";
import SingleBook from "../pages/books/SingleBook.jsx";

const componentsMap = {
  Home,
  About,
  Contact,
  Orders,
  Fiction,
  NonFiction,
  Highlights,
  Login,
  Register,
  CartPage,
  CheckOutPage,
  SingleBook
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeDefs.map((r) => ({
      path: r.path,
      element: React.createElement(componentsMap[r.componentName]),
    })),
  },
]);

export default router;
