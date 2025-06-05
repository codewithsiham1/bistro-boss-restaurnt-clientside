import { useEffect, useState } from "react"

const UseMenu=()=>{
    const [menu,setmenu]=useState([]);
    const [loading,setloading]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then((res)=>res.json())
        .then((data)=>{
                setmenu(data)
                setloading(false)
        })
    },[])
    return [menu,loading]
}
export default UseMenu;