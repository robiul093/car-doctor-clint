import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registation from "../Pages/Registation/Registation";
import Login from "../Pages/Login/Login";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [

            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/registation",
                element: <Registation></Registation>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: `/checkout/:id`,
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <Bookings></Bookings>
            }
        ]
    },
]);


export default router;