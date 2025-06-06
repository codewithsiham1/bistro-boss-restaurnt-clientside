import React from 'react';
import { ImLocation } from 'react-icons/im';
import { IoMdTime } from 'react-icons/io';
import { MdPhoneInTalk } from 'react-icons/md';

const Card = () => {
  return (
    <div className="max-w-6xl w-full bg-white p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mx-auto">
      
      {/* Phone Section */}
      <div className="flex flex-col items-center text-center bg-slate-100 rounded-lg shadow-md w-full md:w-1/3">
        <div className="bg-[#FFA200] w-full py-4 flex justify-center rounded-t-lg">
          <MdPhoneInTalk className="text-3xl text-white" />
        </div>
        <div className="p-6 bg-slate-200 w-full rounded-b-lg">
          <h3 className="font-bold text-lg text-gray-800 uppercase mb-2">Phone</h3>
          <p className="text-gray-600 text-base leading-relaxed">+38 (012) 34 56 789</p>
        </div>
      </div>

      {/* Address Section */}
      <div className="flex flex-col items-center text-center bg-slate-100 rounded-lg shadow-md w-full md:w-1/3">
        <div className="bg-[#FFA200] w-full py-4 flex justify-center rounded-t-lg">
          <ImLocation className="text-3xl text-white" />
        </div>
        <div className="p-6 bg-slate-200 w-full rounded-b-lg">
          <h3 className="font-bold text-lg text-gray-800 uppercase mb-2">Address</h3>
          <p className="text-gray-600 text-base leading-relaxed">Restaurant Address, City 12345</p>
        </div>
      </div>

      {/* Working Hours Section */}
      <div className="flex flex-col items-center text-center bg-slate-100 rounded-lg shadow-md w-full md:w-1/3">
        <div className="bg-[#FFA200] w-full py-4 flex justify-center rounded-t-lg">
          <IoMdTime className="text-3xl text-white" />
        </div>
        <div className="p-6 bg-slate-200 w-full rounded-b-lg">
          <h3 className="font-bold text-lg text-gray-800 uppercase mb-2">Working Hours</h3>
          <p className="text-gray-600 text-base">Monday-Friday: 11:00 AM - 10:00 PM</p>
          
        </div>
      </div>

    </div>
  );
};

export default Card;
