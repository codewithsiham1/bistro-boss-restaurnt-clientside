import React from 'react';
import { FaCalendar, FaHome, FaShoppingCart, FaPhoneAlt, FaStore, FaTachometerAlt, FaPlusSquare, FaClipboardCheck, FaUsersCog } from 'react-icons/fa';
import { MdEventAvailable, MdPayments, MdReviews, MdMenuBook, MdManageAccounts } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import Usecart from '../../Hooks/Usecart';
import Useadmin from '../../Hooks/Useadmin';

const Dashboard = () => {
    const [cart]=Usecart();
    // TODO:get isAdmin value  from the database
    const [isAdmin]=Useadmin();
  return (
    <div className='flex min-h-screen bg-gray-100'>
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-red-500 to-red-700 p-6 shadow-lg">
        <h2 className="text-white text-2xl font-extrabold mb-6">User Dashboard</h2>
        
        {/* User Dashboard Links */}
       {
        isAdmin ?<>
       <ul className="space-y-3 mb-8">
          <li>
            <NavLink
              to="/dashboard/adminHome"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-white text-red-600 font-bold shadow' : 'text-white hover:bg-white/20'
                }`
              }
            >
               <FaTachometerAlt /> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/additems"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-white text-red-600 font-bold shadow' : 'text-white hover:bg-white/20'
                }`
              }
            >
              <FaPlusSquare /> Add Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manageitens"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-white text-red-600 font-bold shadow' : 'text-white hover:bg-white/20'
                }`
              }
            >
               <MdManageAccounts /> Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manageboking"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-white text-red-600 font-bold shadow' : 'text-white hover:bg-white/20'
                }`
              }
            >
               <FaClipboardCheck />Manage Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/alluser"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-white text-red-600 font-bold shadow' : 'text-white hover:bg-white/20'
                }`
              }
            >
              <FaUsersCog /> All Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/paymenthistory"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-white text-red-600 font-bold shadow' : 'text-white hover:bg-white/20'
                }`
              }
            >
              <FaUsersCog /> payment History
            </NavLink>
          </li>
         
        </ul>
        </>
        :

        <>
       <ul className="space-y-3 mb-8">
          <li>
            <NavLink
              to="/dashboard/userHome"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-white text-red-600 font-bold shadow' : 'text-white hover:bg-white/20'
                }`
              }
            >
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reservation"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-white text-red-600 font-bold shadow' : 'text-white hover:bg-white/20'
                }`
              }
            >
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/payment"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-white text-red-600 font-bold shadow' : 'text-white hover:bg-white/20'
                }`
              }
            >
              <MdPayments /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-white text-red-600 font-bold shadow' : 'text-white hover:bg-white/20'
                }`
              }
            >
              <FaShoppingCart /> My Cart   {cart.length}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/addreview"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-white text-red-600 font-bold shadow' : 'text-white hover:bg-white/20'
                }`
              }
            >
              <MdReviews /> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/mybooking"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-white text-red-600 font-bold shadow' : 'text-white hover:bg-white/20'
                }`
              }
            >
              <MdEventAvailable /> My Booking
            </NavLink>
          </li>
        </ul>
        </>
       }

        {/* Divider */}
        <hr className="border-white opacity-40 mb-4" />

        {/* General Navigation */}
        <ul className="space-y-3 text-sm">
          <li>
            <NavLink
              to="/"
              className="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all"
            >
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all"
            >
              <MdMenuBook /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all"
            >
              <FaStore /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all"
            >
              <FaPhoneAlt /> Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className='flex-1 p-8'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
