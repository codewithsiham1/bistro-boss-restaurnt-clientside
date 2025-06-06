import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { axiossecure } from './UseAxiosSecure';
import Useauth from './Useauth';

const Usecart = () => {
    const {user}=Useauth();
//    tenstack query
    const {refetch,data:cart=[]}=useQuery({
   queryKey:["cart",user?.email],
   queryFn:async()=>{
    const res=await axiossecure.get(`/cart?email=${user.email}`)
    return res.data
   }
    })
    return[cart,refetch]
};

export default Usecart;