import axios from "axios";

export const axiossecure=axios.create({
baseURL:"http://localhost:5000"
})
const UseAxiosSecure = () => {
   return axiossecure;
};

export default UseAxiosSecure;