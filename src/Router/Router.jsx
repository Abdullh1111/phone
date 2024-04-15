import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../pages/Home/Home";
import Favourite from "../pages/Favourites/Favourite";
import Login from "../pages/Login/Login";
import PhonesCard from "../pages/phones/PhonesCard";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () =>fetch("/public/phone.json")
            },
            {
                path:"/favourites",
                element: <Favourite></Favourite>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path: "/phone/:id",
                element: <PhonesCard></PhonesCard>,
                loader: () =>fetch("/public/phone.json")
            }
        ]
    }
])

export default Router;