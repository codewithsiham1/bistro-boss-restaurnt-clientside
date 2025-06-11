import axios from 'axios';
import React from 'react';
import { MdEmail, MdPerson, MdMessage } from 'react-icons/md';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const handleSubmit = async(e) => {
    e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  const contactData = { name, email, message };
    const res=await axios.post("http://localhost:5000/contact",contactData)
    if((res.data.insertedId)){
      Swal.fire('Message Sent!', 'We will get back to you soon.', 'success');
      form.reset(); 
    }
    else{
       Swal.fire('Error!', 'Something went wrong.', 'error');
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-[#FFA200] py-5 flex justify-center">
        <MdMessage className="text-3xl text-white" />
      </div>

      <form onSubmit={handleSubmit} className="bg-slate-200 p-8 flex flex-col gap-6">
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <MdPerson /> Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name='name'
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA200]"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <MdEmail /> Email
          </label>
          <input
            type="email"
            name='email'
            placeholder="Enter your email"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA200]"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <MdMessage /> Message
          </label>
          <textarea
            placeholder="Write your message"
            rows="5"
            name='message'
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA200]"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#FFA200] text-white font-semibold py-3 rounded hover:bg-[#e69400] transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
