import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../pages/Home/Home";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default Router;