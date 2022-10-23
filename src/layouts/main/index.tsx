import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

const MainLayout = () => {
  let navigate = useNavigate();
  const [cookies] = useCookies(["access_token"]);

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      // protecting router
      if (!cookies.access_token) {
        Swal.fire({
          title: "Unauthorized!",
          text: "Access rejected!",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("auth/login");
      }
    }

    return () => {
      subscribe = false;
    };
  }, [cookies]);

  return (
    <div>
      <div className="navbar bg-base-100 px-5 fixed bg-transparent z-20 lg:px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Shop</a>
              </li>
              <li>
                <a>Order</a>
              </li>
              <li>
                <a>Cart</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-sm btn-ghost normal-case text-xl">EasyShop</a>
        </div>
        <div className="navbar-end lg:hidden">
          <div className="flex-row space-x-3">
            <NavLink to="/auth/register" className="btn btn-sm btn-neutral">
              Sign Up
            </NavLink>
            <NavLink
              to="/auth/login"
              className="btn btn-sm btn-accent border-inherit"
            >
              Login
            </NavLink>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <div className="flex-row space-x-3">
            <ul className="menu menu-horizontal menu-compact p-0">
              <li>
                <a>Shop</a>
              </li>
              <li>
                <a>Order</a>
              </li>
              <li>
                <a>Cart</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
            <NavLink to="/auth/register" className="btn btn-sm btn-neutral">
              Sign Up
            </NavLink>
            <NavLink
              to="/auth/login"
              className="btn btn-sm btn-accent border-inherit"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
