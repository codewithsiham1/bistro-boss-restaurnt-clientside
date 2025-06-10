
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import Useauth from '../../Hooks/Useauth';

const Privateroute = ({children}) => {
    const {user,loading}=Useauth();
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