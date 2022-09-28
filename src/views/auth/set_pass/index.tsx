import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

export const SetPasswordAuthViews = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div>
      <div className="flex flex-row justify-evenly w-full h-full my-10 py-10">
        <div className="w-[70%] lg:w-1/4">
          <div className="text-center">
            <header className="text-2xl font-semibold">Set Password</header>
            <p className="text-xs font-thin my-1">
              Enter new password and confirm
            </p>

            <form className="my-10">
              {/* New Password */}
              <div className="form-control relative w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">New password*</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
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
              {/* Confirm New Password */}
              <div className="form-control relative w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">Confirm password*</span>
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  className="input input-md input-bordered w-full max-w-xs"
                />
                <div className="absolute right-3 top-12">
                  <span
                    className="text-sm font-semibold hover:cursor-pointer"
                    onClick={() => {
                      setShowConfirmPassword(!showConfirmPassword);
                    }}
                  >
                    {showConfirmPassword ? "hide" : "show"}
                  </span>
                </div>
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
