import { createBrowserRouter } from "react-router-dom";
import Allpages from "../Allpages/Allpages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Allpages></Allpages>
    }
])
export {router}