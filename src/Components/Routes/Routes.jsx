import { createBrowserRouter } from "react-router-dom";
import Allpages from "../Allpages/Allpages";
import Home from "../Allpages/Home/Home";
import Statistics from "../Allpages/Statistics/Statistics";
import Dashboard from "../Allpages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Allpages></Allpages>,
        children:([
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path:"/dashboard",
                element: <Dashboard></Dashboard>
            }
        ])
    }
])
export {router}