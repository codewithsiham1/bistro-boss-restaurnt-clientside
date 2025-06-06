import React, { useContext } from 'react';
import { Authcontext } from '../../Providers/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';

const Privateroute = ({children}) => {
    const {user,loading}=useContext(Authcontext);
    const location=useLocation();
    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default Privateroute;