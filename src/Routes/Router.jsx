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
import Privateroute from "./Privateroute/Privateroute";
import Alluser from "../Pages/UserDashboard/Alluser/Alluser";
import Additem from "../Pages/UserDashboard/Additem/Additem";
import AdminRoute from "./AdminRoute/AdminRoute";
import ManageItem from "../Pages/UserDashboard/ManagrItem/ManageItem";
import Updateitem from "../Pages/UserDashboard/Updataitem/Updateitem";
import Payment from "../Pages/UserDashboard/Payment/Payment";
import Paymenthistory from "../Pages/UserDashboard/Paymenthistory/Paymenthistory";
import Adminhome from "../Pages/UserDashboard/Adminhome/Adminhome";
import Usehome from "../Pages/UserDashboard/Userhome/Usehome";
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
    element:<Privateroute><Dashboard></Dashboard></Privateroute>,
    children:[
      
        {
      path:"userHome",
      element:<Usehome></Usehome>
        },
        {
            path:"cart",
            element:<Cart></Cart>
        },
        {
            path:'payment',
            element:<Payment></Payment>
        },
        {
       path:"paymenthistory",
       element:<Paymenthistory></Paymenthistory>
        },
        // admin route
        {
            path:"adminHome",
            element:<AdminRoute><Adminhome></Adminhome></AdminRoute>
             },
        {
            path:"alluser",
            element:<AdminRoute><Alluser></Alluser></AdminRoute>
        },
        {
            path:"additems",
            element:<AdminRoute><Additem></Additem></AdminRoute>
        },
        {
            path:"manageitens",
            element:<AdminRoute><ManageItem></ManageItem></AdminRoute>,
        }, 
        {
            path:'updateitem/:id',
            element:<AdminRoute><Updateitem></Updateitem></AdminRoute>,
           loader: ({ params }) =>
  fetch(`http://localhost:5000/menu/${params.id}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('access-token')}`
    }
  })
        }

    ]
}
  ])
  export default router;