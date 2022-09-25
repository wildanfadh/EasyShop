import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

export const LoginAuthViews = () => {
  const [termAndConditionChecked, setTermAndConditionChecked] = useState(false);
  return (
    <div>
      <div className="flex flex-row justify-evenly w-full h-full my-10 py-10">
        <div className="w-1/4">
          <div>
            <header className="text-2xl font-semibold">Sign In</header>
            <p className="text-sm">
              New User?{" "}
              <NavLink
                to="/auth/register"
                className="text-secondary font-semibold"
              >
                Create account
              </NavLink>
            </p>
            <form>
              {/* Email */}
              <div className="form-control w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">Your email*</span>
                </label>
                <input
                  type="text"
                  placeholder="Email..."
                  className="input input-md input-bordered w-full max-w-xs"
                />
              </div>
              {/* Email */}
              <div className="form-control w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">Your password*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password..."
                  className="input input-md input-bordered w-full max-w-xs"
                />
              </div>
              <NavLink className="label-text-alt text-secondary float-right">
                Forgot password?
              </NavLink>
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
                to="/auth/login"
                className="btn btn-secondary text-neutral font-semibold mt-2 min-w-full"
              >
                Sign In
              </NavLink>
            </form>
          </div>
        </div>
        <div className="bg-accent w-0.5 min-h-full"></div>
        <div className="w-1/4">
          <header className="text-lg font-semibold">Create Account</header>
          <p className="text-sm font-thin">Create account to manage orders</p>
          <NavLink
            to="/auth/register"
            className="btn btn-secondary text-neutral font-semibold mt-10 min-w-full"
          >
            Create account
          </NavLink>
        </div>
      </div>
    </div>
  );
};
