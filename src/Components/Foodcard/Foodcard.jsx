import Swal from "sweetalert2";
import Useauth from "../../Hooks/Useauth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Usecart from "../../Hooks/Usecart";



const Foodcard = ({ item }) => {
  const navigate=useNavigate();
  const location = useLocation();
  const {user}=Useauth();
  const axiossecure=UseAxiosSecure();
  const [,refetch]=Usecart();
  const { _id,name, image, recipe, price } = item;
 const handleaddfood=(food)=>{
 if(user && user.email){
  // send cart to the database
 console.log(user.email,food)
 const cartitme={
  menuId:_id,
  email:user.email,name,image,price,recipe
 }
 axiossecure.post('/cart',cartitme)
 .then(res=>{
  console.log(res.data)
  if(res.data.insertedId){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${name} add your cart`,
      showConfirmButton: false,
      timer: 1500
    });
    // refetch the card ot update the items now
    refetch();
  }
 })
 }
 else{
  Swal.fire({
    title: "you are not loged in",
    text: "please login add to the cart",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, loged in!"
  }).then((result) => {
    if (result.isConfirmed) {
  //  send to the user login page
  navigate("/login", { state: { from: location } });
    }
  });
 }
 }
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl border relative">
      <figure>
        <img src={image} alt={name} className="h-64 w-full object-cover" />
      </figure>
      
      {/* Price Tag Top Right */}
      <p className="absolute right-4 top-4 bg-black text-white px-3 py-1 rounded font-semibold">${price}</p>
      
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center mt-4">
          <button onClick={handleaddfood} className="btn btn-outline border-0 border-b-4 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
