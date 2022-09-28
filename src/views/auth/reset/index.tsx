import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

export const ResetAuthViews = () => {
  return (
    <div>
      <div className="flex flex-row justify-evenly w-full h-full my-10 py-10">
        <div className="w-[70%] lg:w-1/4">
          <div className="text-center">
            <header className="text-2xl font-semibold">Reset Password</header>
            <p className="text-xs font-thin my-1">
              Enter your email address and we will send futher instructions on
              how to reset the password
            </p>

            <form className="my-10">
              {/* Email */}
              <div className="form-control w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">Email address*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="input input-md input-bordered w-full max-w-xs"
                />
              </div>
              <NavLink
                to="/auth/reset"
                className="btn btn-secondary text-neutral font-semibold my-10 min-w-full"
              >
                Reset Password
              </NavLink>
            </form>
            <p className="text-xs font-thin mt-5">
              Term of Use. Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
