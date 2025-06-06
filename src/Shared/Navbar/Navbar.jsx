import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from '../../Providers/Authprovider';
import Swal from 'sweetalert2';
import { FaShoppingCart } from 'react-icons/fa';
import Usecart from '../../Hooks/Usecart';

const Navbar = () => {
  const { user, logout } = useContext(Authcontext);
  const [cart]=Usecart()
  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Logout successful',
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Logout failed',
          text: error.message,
        });
      });
  };

  const navbaroptions = (
    <>
      <li><NavLink to="/"   className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "text-white"}>Home</NavLink></li>
      <li><NavLink to="/contact"  className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "text-white"}>Contact Us</NavLink></li>
      <li><NavLink to="/dashboard"  className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "text-white"}>Dashboard</NavLink></li>
      <li><NavLink to="/menu"  className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "text-white"}>Our Menu</NavLink></li>
      <li><NavLink to="/order-food/salad"  className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "text-white"}>Order Food</NavLink></li>
      <li>
        <Link to="/dashboard/cart">
        <button className="btn">
        <FaShoppingCart />
  <div className="badge badge-secondary">+{cart.length}</div>
</button>
        </Link>
      </li>
      {
        user ? (
          <>
            <li><button onClick={handleLogout} className="btn btn-ghost">Logout</button></li>
          </>
        ) : (
          <li><NavLink to="/login">Login Now</NavLink></li>
        )
      }
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
              {navbaroptions}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">Bistro Boss</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navbaroptions}
          </ul>
        </div>

        <div className="navbar-end">
          {user && (
            <div className="flex items-center gap-3">
              <span className="font-semibold hidden sm:inline">{user.displayName}</span>
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
                title={user.displayName}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
