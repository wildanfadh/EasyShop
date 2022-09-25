import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div>
      <div className="navbar bg-base-100 px-24">
        <div className="flex-1">
          <a className="btn btn-sm btn-ghost normal-case text-xl">EasyShop</a>
        </div>
        <div className="navbar-end">
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
