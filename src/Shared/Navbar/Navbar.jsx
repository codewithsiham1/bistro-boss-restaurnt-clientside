import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../Providers/Authprovider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import Usecart from "../../Hooks/Usecart";
import Useadmin from "../../Hooks/Useadmin";

const Navbar = () => {
  const { user, logout } = useContext(Authcontext);
  const [cart] = Usecart();
  const [isAdmin] = Useadmin();

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logout successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Logout failed",
          text: error.message,
        });
      });
  };

  const navbarOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-300 font-semibold" : "text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-yellow-300 font-semibold" : "text-white"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "text-yellow-300 font-semibold" : "text-white"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order-food/salad"
          className={({ isActive }) =>
            isActive ? "text-yellow-300 font-semibold" : "text-white"
          }
        >
          Order Food
        </NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink
            to="/dashboard/adminHome"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "text-white"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink
            to="/dashboard/userHome"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "text-white"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="w-full">
      {/* Navbar container */}
      <div className="navbar fixed top-0 left-0 z-20 bg-opacity-30 bg-black text-white w-full shadow-sm px-4 lg:px-10">
        {/* Left: Logo + Mobile menu */}
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h12M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content w-screen h-screen fixed top-0 left-0 mt-0 p-8 bg-black text-white flex flex-col gap-6 z-50"
            >
              {navbarOptions}
              {user ? (
                <>
                  <li>
                    <Link
                      to="/dashboard/cart"
                      className="flex items-center gap-2"
                    >
                      <FaShoppingCart /> Cart{" "}
                      <span className="badge badge-secondary">
                        +{cart.length}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn btn-ghost text-white"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/login" className="btn btn-ghost text-white">
                    Login Now
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl md:text-2xl font-bold"
          >
            Bistro Boss
          </Link>
        </div>

        {/* Center: Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navbarOptions}</ul>
        </div>

        {/* Right: Cart + User */}
        <div className="navbar-end hidden lg:flex items-center gap-4">
          {user ? (
            <>
              {/* Cart */}
              <Link to="/dashboard/cart" className="btn relative">
                <FaShoppingCart />
                <div className="badge badge-secondary absolute -top-2 -right-2">
                  +{cart.length}
                </div>
              </Link>

              {/* User dropdown */}
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <span className="font-semibold hidden md:inline">
                    {user.displayName || "User"}
                  </span>
                  <img
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/4pDNDk1/avatar.png"
                    }
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    title={user.displayName}
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-40 mt-2"
                >
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn btn-ghost w-full text-black"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <NavLink to="/login" className="btn btn-ghost text-white">
              Login Now
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
