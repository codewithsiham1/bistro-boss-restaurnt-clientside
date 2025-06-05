import React, { useEffect, useState } from 'react';
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import Menuitem from '../../../Shared/Menuitem/Menuitem';

const Popularmenu = () => {
    const [menu,setmenu]=useState([])
    useEffect(()=>{
        fetch('/Menu.json')
        .then((res)=>res.json())
        .then((data)=>{
            const popularitems=data.filter(item=>item.category==='popular')
                setmenu(popularitems)
        })
    },[])
    return (
    <section className='mb-12'> 
        <Sectiontitle heading={'Check it Out'} subHeading={"FROM OUR MENU"}>
        </Sectiontitle>
        <div className='grid md:grid-cols-2 gap-10'>
            {
                menu.map((item)=><Menuitem key={item._id} item={item}></Menuitem>)
            }
        </div>
         <div className='flex items-center justify-center mt-10 gap-4r'>
                <button className='btn btn-outline border-0 border-b-4 uppercase'>VIEW FULL MENU</button>
            </div>
    </section>
    );
};

export default Popularmenu;