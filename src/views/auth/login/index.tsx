import React, { useState, useEffect, useCallback } from "react";
import {
  Link,
  NavLink,
  useMatch,
  useResolvedPath,
  useNavigate,
} from "react-router-dom";
import { connect } from "react-redux";
import { loginRequest } from "../../../redux/actions/auth.action";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const LoginAuthViews = ({ formChange, loginAuthModel, dispatch }: any) => {
  let navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const [btnLoading, setBtnLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    setBtnLoading(true);
    dispatch(loginRequest(data));
  };

  useEffect(() => {
    if (loginAuthModel.success) {
      Swal.fire({
        toast: true,
        position: "top-end",
        title: "Success!",
        text: "Access accepted!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        // console.log("result", res);
        setCookie("access_token", loginAuthModel.dataLogin.access_token, {
          path: "/",
        });
        navigate("/");
      });
      setBtnLoading(false);
      dispatch({ type: "CLEAR_STATE_AUTH" });
    }

    if (loginAuthModel.error) {
      Swal.fire({
        toast: true,
        position: "top-end",
        title: "Failed!",
        text: "Login rejected, please check again your username and password!",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
      setBtnLoading(false);
      dispatch({ type: "CLEAR_STATE_AUTH" });
    }
  }, [loginAuthModel.success, loginAuthModel.error]);

  const [termAndConditionChecked, setTermAndConditionChecked] = useState(false);
  return (
    <div>
      <div className="flex flex-row justify-evenly w-full h-full my-10 py-10">
        <div className="lg:w-1/4">
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
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div className="form-control w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">Your email*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email..."
                  className="input input-md input-bordered w-full max-w-xs"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="form-control w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">Your password*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password..."
                  className="input input-md input-bordered w-full max-w-xs"
                  {...register("password", { required: true, minLength: 3 })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <NavLink
                to="/auth/reset"
                className="label-text-alt text-secondary float-right"
              >
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
              {/* <NavLink
                to="/auth/login"
                className="btn btn-secondary text-neutral font-semibold mt-2 min-w-full"
              >
                Sign In
              </NavLink> */}
              <button
                type="submit"
                className={`btn btn-secondary text-neutral ${
                  btnLoading ? "loading" : ""
                } font-semibold mt-2 min-w-full`}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
        <div className="bg-accent w-0.5 min-h-full hidden lg:block"></div>
        <div className="w-1/4 hidden lg:block">
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

const mapStateToProps = (state: any) => {
  return {
    loginAuthModel: state.login,
  };
};

export default connect(mapStateToProps)(LoginAuthViews);
