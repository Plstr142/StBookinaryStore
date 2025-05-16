// route เก่า
import { createBrowserRouter } from "react-router-dom"
import App from "../App";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                // outline-1 outline-green-400
                element:  
                    <h1 className="">Home</h1>
            },
            {
                path: "/about",
                element: <h1>Home</h1>
            },
            {
                path: "/contact",
                element: <h1>Contact</h1>
            },
            {
                path: "/fiction",
                element: <h1>Fiction</h1>
            },
            {
                path: "/nonfiction",
                element: <h1>Non-Fiction</h1>
            },
            {
                path: "/hightlights",
                element: <h1>Hightlights</h1>
            },
        ]
    }
])

export default router;
