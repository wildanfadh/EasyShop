import React from "react";
import { Link, Outlet } from "react-router-dom";

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
            <a className="btn btn-sm btn-secondary text-neutral">Sign Up</a>
            <a className="btn btn-sm btn-outline btn-secondary">Login</a>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
