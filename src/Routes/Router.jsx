import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Footer from "../Shared/Footer/Footer";
import Menu from "../Pages/Menu/Menu";
import Orderfood from "../Pages/Order/Orderfood";
  const router=createBrowserRouter([
   {
    path:"/",
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
        path:"/menu",
        element:<Menu></Menu>
        },
        {
        path:"/order-food/:category",
        element:<Orderfood></Orderfood>
        },
        {
            path:"/",
            element:<Footer></Footer>
        }
    ]
   }
  ])
  export default router;