import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

export const RegisterAuthViews = () => {
  const [termAndConditionChecked, setTermAndConditionChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="flex flex-row justify-evenly w-full h-full my-10 py-10">
        <div className="w-1/4">
          <div>
            <header className="text-2xl font-semibold">Create account</header>
            {/* <p className="text-sm">
              New User?{" "}
              <NavLink
                to="/auth/register"
                className="text-secondary font-semibold"
              >
                Create account
              </NavLink>
            </p> */}
            <form>
              {/* Fullname */}
              <div className="form-control w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">Your fullname*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="input input-md input-bordered w-full max-w-xs"
                />
              </div>
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
              {/* Password */}
              <div className="form-control relative w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">Your password*</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-md input-bordered w-full max-w-xs"
                />
                <div className="absolute right-3 top-12">
                  <span
                    className="text-sm font-semibold hover:cursor-pointer"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? "hide" : "show"}
                  </span>
                </div>
              </div>
              <div className="form-control w-full max-w-xs mt-10">
                <label className="label cursor-pointer justify-start">
                  <input
                    type="checkbox"
                    checked={termAndConditionChecked}
                    className="checkbox checkbox-xs mr-2"
                    onChange={() => {
                      setTermAndConditionChecked(!termAndConditionChecked);
                    }}
                  />
                  <span className="label-text text-xs">
                    I agree to terms & conditions
                  </span>
                </label>
              </div>
              <NavLink
                to="/auth/register"
                className="btn btn-secondary text-neutral font-semibold mt-2 min-w-full"
              >
                Register Account
              </NavLink>
            </form>
          </div>
        </div>
        <div className="bg-accent w-0.5 min-h-full"></div>
        <div className="w-1/4">
          <header className="text-lg font-semibold">Sign In</header>
          <p className="text-sm font-thin">Login to manage orders</p>
          <NavLink
            to="/auth/login"
            className="btn btn-secondary text-neutral font-semibold mt-10 min-w-full"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};
