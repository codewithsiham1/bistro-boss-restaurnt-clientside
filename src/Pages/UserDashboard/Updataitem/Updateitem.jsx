import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Updateitem = () => {
  const item = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: item.name || '',
    image: item.image || '',
    price: item.price || '',
    category: item.category || '',
    recipe: item.recipe || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/menu/${item._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('access-token')}`
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (data.modifiedCount > 0) {
      Swal.fire('Updated!', 'Item has been updated.', 'success');
      navigate('/dashboard/manageitens');
    } else {
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Update Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label>Recipe Details:</label>
          <textarea
            name="recipe"
            value={formData.recipe}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">Update Item</button>
      </form>
    </div>
  );
};

export default Updateitem;
