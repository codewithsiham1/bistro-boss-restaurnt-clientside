// import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from"../Hooks/UseAxiosPublic"
const UseMenu=()=>{
    const axiosPublic=UseAxiosPublic()
    // const [menu,setmenu]=useState([]);
    // const [loading,setloading]=useState(true);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //             setmenu(data)
    //             setloading(false)
    //     })
    // },[])
    // tanctack query
    const {data:menu=[],isPending:loading,refetch}=useQuery({
        queryKey:["menu"],
        queryFn:async()=>{
          const res=await axiosPublic .get('/menu')  
          return res.data;
        }
    })
    return [menu,loading,refetch]
}
export default UseMenu;