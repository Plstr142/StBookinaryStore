// route เก่า
import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/home/Home.jsx";
import Fiction from "../pages/Fiction.jsx";
import NonFiction from "../pages/Nonfiction.jsx";
import Highlights from "../pages/Highlights.jsx";
import Orders from "../pages/Orders.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                // outline-1 outline-green-400
                element: <Home />
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
                path: "/orders",
                element: <Orders />
            },
            {
                path: "/fiction",
                element: <Fiction />
            },
            {
                path: "/nonfiction",
                element: <NonFiction />
            },
            {
                path: "/hightlights",
                element: <Highlights />
            },
        ]
    }
])

export default router;
