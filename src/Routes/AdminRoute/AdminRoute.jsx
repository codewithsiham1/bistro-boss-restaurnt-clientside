import React from 'react';
import Useadmin from '../../Hooks/Useadmin';
import Useauth from '../../Hooks/Useauth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';

const AdminRoute = ({children}) => {
    const {user,loading}=Useauth();
    const [isAdmin,isAdminloading]=Useadmin();
    const location=useLocation();
    if(loading ||isAdminloading){
        return <Loader></Loader>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default AdminRoute;