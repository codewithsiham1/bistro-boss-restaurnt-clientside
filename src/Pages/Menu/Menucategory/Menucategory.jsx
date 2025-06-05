
import { Link } from "react-router-dom";
import Menuitem from"../../../Shared/Menuitem/Menuitem"
import Menubistro from "../Menubistro/Menubistro";

const Menucategory = ({items,title,img,subtitle}) => {
    return (
        <div className="pt-8">
           {title && <Menubistro img={img} title={title} subtitle={subtitle}></Menubistro> } 
           
             <div className='grid md:grid-cols-2 gap-10 mt-16'>
            {
                items.map((item)=><Menuitem key={item._id} item={item}></Menuitem>)
            }
        </div>
         <div className='flex items-center justify-center mt-10 gap-4r'>
             {title && (
  <Link to={`/order-food/${title.toLowerCase()}`}>
    <button className='btn btn-outline border-0 border-b-4 uppercase'>ORDER YOUR FAVOURITE FOOD</button>
  </Link>
)}
            </div>  
          
        </div>
    );
};

export default Menucategory;