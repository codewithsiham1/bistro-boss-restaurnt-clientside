import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const ManageBooking = () => {
    const {data:message=[]}=useQuery({
        queryKey:['contact-message'],
        queryFn:async()=>{
            const res=await axios.get('http://localhost:5000/contact');
            return res.data
        }
    })
    return (
       <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Messages</h2>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {
            message.map((msg, index) => (
              <tr key={msg._id}>
                <td>{index + 1}</td>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    );
};

export default ManageBooking;