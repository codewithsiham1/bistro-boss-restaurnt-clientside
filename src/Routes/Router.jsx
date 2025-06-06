import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Footer from "../Shared/Footer/Footer";
import Menu from "../Pages/Menu/Menu";
import Orderfood from "../Pages/Order/Orderfood";
import Contact from "../Pages/Contact/Contact";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Cart from "../Pages/UserDashboard/Cart/Cart";
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
         path:"/contact",
         element:<Contact></Contact>
        },
        {
        path:"/login",
        element:<Login></Login>
        },
        {
         path:"/signup",
         element:<Signup></Signup>
        },
        {
            path:"/",
            element:<Footer></Footer>
        }
    ]
   },
// dashboard
{
    path:"dashboard",
    element:<Dashboard></Dashboard>,
    children:[
        {
            path:"cart",
            element:<Cart></Cart>
        }
    ]
}
  ])
  export default router;