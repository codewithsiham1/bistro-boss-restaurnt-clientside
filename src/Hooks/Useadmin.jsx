import { useQuery } from "@tanstack/react-query";
import Useauth from "./Useauth";
import UseAxiosSecure from "./UseAxiosSecure";


const Useadmin = () => {
    const {user}=Useauth();
    const axiossecure=UseAxiosSecure();
   const {data:isAdmin,isPending:isAdminloading}=useQuery({
    queryKey:[user?.email,'isAdmin'],
    queryFn:async()=>{
const res=await axiossecure.get(`/user/admin/${user.email}`)
console.log(res.data)
return res.data?.admin;
    }
   })
   return [isAdmin,isAdminloading]
};

export default Useadmin;