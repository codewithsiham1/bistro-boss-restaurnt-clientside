import React, { useState } from 'react';
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import UseAxiosSecure from"../../../Hooks/UseAxiosSecure"
import Swal from 'sweetalert2';
const IMAGE_HOSTING_KEY = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_KEY}`;

const Additem = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure=UseAxiosSecure()
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        details: '',
    });

    const [imageFile, setImageFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;                                   
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };           

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!imageFile) {
          alert("Please upload an image");
          return;
        }
      
        try {
          // Step 1: Upload image to imgbb
          const imageFormData = new FormData();
          imageFormData.append("image", imageFile);
      
          const res = await axiosPublic.post(image_hosting_API, imageFormData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
      
          if (res.data.success) {
            // Step 2: Create menu item object with image URL
            const menuItem = {
              name: formData.name,
              category: formData.category,
              price: parseFloat(formData.price),
              recipe: formData.details,
              image: res.data.data.display_url,
            };
      
            console.log("Final menu item to send:", menuItem);
      
            // Step 3: Send to your backend (replace URL)
            const response = await axiosSecure.post("/menu", menuItem);
            console.log("Server Response:", response.data);
            if(response.data.insertedId){
                setFormData({
                    name: '',
                    category: '',
                    price: '',
                    details: '',
                  });
                  setImageFile(null);
                e.target.reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  
            }
            
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Something went wrong!");
        }
      };
      
    return (
        <div className="px-4 md:px-8 lg:px-24 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <Sectiontitle subHeading="What's New?" heading="Add Item" />

            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Recipe Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter recipe name"
                            className="w-full border px-4 py-2 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full border px-4 py-2 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Enter price"
                            className="w-full border px-4 py-2 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Recipe Details</label>
                    <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Enter recipe description"
                        className="w-full border px-4 py-3 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        required
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Upload Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        required
                    />
                </div>

                <div className="text-right">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-lg"
                    >
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Additem;
