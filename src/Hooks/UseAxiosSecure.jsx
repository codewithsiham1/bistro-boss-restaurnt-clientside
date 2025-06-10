import axios from "axios";
import { useNavigate } from "react-router-dom";
import Useauth from "./Useauth";

export const axiossecure=axios.create({
baseURL:"http://localhost:5000"
})
const UseAxiosSecure = () => {
   const navigate=useNavigate();
   const {logout}=Useauth()
   // request interceptor to add authorization header for every secqre call to the api

   axiossecure.interceptors.request.use(function(config){
      const token=localStorage.getItem('access-token')
      console.log('requst stop by interceptor',token)
      config.headers.authorization=`Bearer ${token}`
      return config;
   },function (error) {
      // Do something with request error
      return Promise.reject(error);
    })
   //  intercepts 401 and 403
   axiossecure.interceptors.response.use(function(response){
      return response;
   },async(error)=>{
      const status=error.response.status
      console.log('status code error in the interceptor',error)
      // for 401 and 403 logout the user and move the user login
      if(status===401 || status===403){
         await logout();
         navigate('/login')
      }
      return Promise.reject(error);
   },[navigate])
   return axiossecure;
};

export default UseAxiosSecure;