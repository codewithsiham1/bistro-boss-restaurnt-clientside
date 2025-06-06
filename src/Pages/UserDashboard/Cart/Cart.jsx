import React from 'react';
import Usecart from '../../../Hooks/Usecart';

import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';

const Cart = () => {
  const [cart,refetch] = Usecart();
  const axiossecure=UseAxiosSecure();
  const totalprice = cart.reduce((total, item) => total + item.price, 0);
//   delete button
const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiossecure.delete(`/cart/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) { 
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
      }
    });
  };
  return (
    <div className="p-6">
      {/* Section Title */}
      <Sectiontitle
        subHeading="My Cart"
        heading="add more?"
      />

      {/* Cart summary */}
      <div className='flex flex-col md:flex-row justify-between items-center my-6 gap-4'>
        <h2 className="text-2xl font-semibold">Total Orders: {cart.length}</h2>
        <h2 className="text-2xl font-semibold">Total Price: ৳{totalprice}</h2>
        <button className='btn btn-outline btn-primary'>Pay</button>
      </div>

      {/* Cart Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table">
          {/* Table Head */}
          <thead className='bg-red-500 text-white'>
            <tr>
              <th>Number</th>
              <th>Item Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </td>
                <td className="font-medium">{item.name}</td>
                <td>৳{item.price}</td>
                <td>
                  <button onClick={()=>handleDelete(item._id)} className="btn btn-sm btn-error text-white">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
