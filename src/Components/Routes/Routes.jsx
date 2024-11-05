import { createBrowserRouter } from "react-router-dom";
import Allpages from "../Allpages/Allpages";
import Home from "../Allpages/Home/Home";
import Statistics from "../Allpages/Statistics/Statistics";
import Dashboard from "../Allpages/Dashboard/Dashboard";
import GadgetCards from "../GadgetCards/GadgetCards";
import ProductDetails from "../ProductDetails/ProductDetails";
// import Dash from "../Dash/Dash";
import Error from "../Error/Error";
import ContactUs from "../Allpages/ContactUs/ContactUs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Allpages></Allpages>,
        
        errorElement: <Error></Error>,
       
        children:([
            {
                path: "/",
                element: <Home></Home>,
               loader: ()=>fetch("../categories.json"),
               children:([
                {
                    path: "/",
                    element: <GadgetCards></GadgetCards>,
                    loader: ()=>fetch("../gadget.json"),
                },
                {
                    path: "category/:category",
                    element: <GadgetCards></GadgetCards>,
                    loader: ()=>fetch("../gadget.json"),
                }
               ])
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path:"/dashboard",
                element: <Dashboard></Dashboard>,
                loader: ()=>fetch("../gadget.json"),
            },
            {
                path:"/contact",
                element:<ContactUs></ContactUs>
            },
           
            {
                path:"/productdetails/:id",
                element:<ProductDetails></ProductDetails>,
                loader: ()=>fetch("../gadget.json"),
            },
        ])
    }
])
export {router}