import React from 'react';
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import UseMenu from '../../../Hooks/UseMenu';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { Link } from 'react-router-dom';


const ManageItem = () => {
  const [menu,refetch] = UseMenu();
  const axiosSecure=UseAxiosSecure();

  const handledeleteItem=async(item)=>{
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
  if (result.isConfirmed) {
    const res=await axiosSecure.delete(`/menu/${item._id}`)
    console.log(res.data)
    if(res.data.deletedCount>0){
        // refetch updated to ui
        refetch()
  Swal.fire({
      title: "Deleted!",
      text: `${item.name} has ben deleted`,
      icon: "success"
    });
    }
  
  }
});
  }

  return (
    <div>
      <Sectiontitle heading="Manage All Items" subHeading="Hurry Up" />
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Number</th>
              <th>Image</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id || index}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image || 'https://img.daisyui.com/images/profile/demo/2@94.webp'}
                        alt={item.name || 'Item Image'}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <span className="font-semibold">${item.price || 'N/A'}</span>
                </td>
                <td>
                  <Link to={`/dashboard/updateitem/${item._id}`}>
                  <button className="btn btn-warning btn-xs">Update</button>
                  </Link>
                </td>
                <td>
                  <button onClick={()=>handledeleteItem(item)} className="btn btn-error btn-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
