import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    const location=useLocation();
    console.log(location)
    const noHeaderfooter=location.pathname.includes('login')||location.pathname.includes("signup")
    return (
        <div>
            {noHeaderfooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderfooter || <Footer></Footer>}
        </div>
    );
};

export default Main;