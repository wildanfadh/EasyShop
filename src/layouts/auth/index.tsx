import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div>
      <div className="navbar bg-base-100 px-5 lg:px-24">
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
            <NavLink
              to="/auth/register"
              className="btn btn-sm btn-secondary text-neutral"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/auth/login"
              className="btn btn-sm btn-outline btn-secondary"
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
            <NavLink
              to="/auth/register"
              className="btn btn-sm btn-secondary text-neutral"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/auth/login"
              className="btn btn-sm btn-outline btn-secondary"
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
