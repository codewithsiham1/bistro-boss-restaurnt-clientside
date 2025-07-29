import axios from "axios";

const axiosPublic=axios.create({
    baseURL:"https://bistro-boss-restaurant-serverside.onrender.com/"
})
const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;