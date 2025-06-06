import React, { useContext } from 'react';
import { Authcontext } from '../Providers/Authprovider';

const Useauth = () => {
    const Auth=useContext(Authcontext);
    return Auth;
};

export default Useauth;