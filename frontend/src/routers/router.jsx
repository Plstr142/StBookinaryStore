import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute.jsx";
import App from "../App";
import Home from "../pages/home/Home.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import CartPage from "../pages/books/CartPage.jsx";
import CheckoutPage from "../pages/books/CheckoutPage.jsx";
import SingleBook from "../pages/books/SingleBook.jsx";
import OrderPage from "../pages/Orders.jsx";

import Contact from "../pages/Contact.jsx";
import Fiction from "../pages/Fiction.jsx";
import NonFiction from "../pages/Nonfiction.jsx";
import Highlights from "../pages/Highlights.jsx";
import About from "../pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/nonfiction",
        element: <NonFiction />
      },
      {
        path: "/hightlights",
        element: <Highlights />
      },
      {
        path: "/fiction",
        element: <Fiction />
      },
    
    ],
  },
]);

export default router;



// import React from "react";
// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import About from "../pages/About.jsx";
// import Contact from "../pages/Contact.jsx";
// import Home from "../pages/home/Home.jsx";
// import Fiction from "../pages/Fiction.jsx";
// import NonFiction from "../pages/Nonfiction.jsx";
// import Highlights from "../pages/Highlights.jsx";
// import Orders from "../pages/Orders.jsx";
// import Login from "../components/Login.jsx";
// import Register from "../components/Register.jsx";
// import CartPage from "../pages/books/CartPage.jsx";
// import CheckOutPage from "../pages/books/CheckoutPage.jsx";
// import { routeDefs } from "./showRoutes.js";
// import SingleBook from "../pages/books/SingleBook.jsx";

// const componentsMap = {
//   Home,
//   About,
//   Contact,
//   Orders,
//   Fiction,
//   NonFiction,
//   Highlights,
//   Login,
//   Register,
//   CartPage,
//   CheckOutPage,
//   SingleBook
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: routeDefs.map((r) => ({
//       path: r.path,
//       element: React.createElement(componentsMap[r.componentName]),
//     })),
//   },
// ]);

// export default router;
