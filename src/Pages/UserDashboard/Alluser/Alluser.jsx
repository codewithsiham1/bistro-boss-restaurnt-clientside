import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Alluser = () => {
  const axiossecure = UseAxiosSecure();

  const { data: users = [],refetch} = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await axiossecure.get('/user');
      return res.data;
    },
  });
  const handleuserDelete = (user) => {
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
          axiossecure.delete(`/user/${user._id}`)
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
  const handleMakeadmin=(user)=>{
  axiossecure.patch(`/user/admin/${user._id}`)
  .then((res)=>{
    console.log(res.data)
    if(res.data.modifiedCount>0){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${user.name} is an admin`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
  }

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
        <h2 className="text-xl md:text-2xl font-semibold">All Users</h2>
        <h2 className="text-xl md:text-2xl font-semibold">Total Users: {users.length}</h2>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="bg-base-200 text-sm md:text-base">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td> {
                   user.role==='admin'?"Admin ":<button onClick={()=>handleMakeadmin(user)}  className="btn btn-outline btn-sm"><FaUser></FaUser></button>
                   }
                  </td>
                  <td className="text-center">
                    <button onClick={()=>handleuserDelete(user)} className="btn btn-outline btn-sm">Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;
