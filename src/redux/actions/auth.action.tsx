import {
  CLEAR_STATE_AUTH,
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED,
  REGISTER_REQUEST,
  REGISTER_REQUEST_SUCCESS,
  REGISTER_REQUEST_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_SUCCESS,
  LOGOUT_REQUEST_FAILED,
} from "../types/auth.types";
import axios from "axios";
import { BASE_URL } from "../../config";

// Login Action
export const loginRequest = (data: any) => {
  return (dispatch: any) => {
    const config = {
      method: "POST",
      url: `${BASE_URL}/auth/login`,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((res) => {
        dispatch({
          type: LOGIN_REQUEST_SUCCESS,
          payload: {
            data: res.data,
            message: res.data.message,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_REQUEST_FAILED,
          payload: {
            data: null,
            message: err.response?.data?.message || "Login failed, please check your connection",
          },
        });
      });
  };
};

// Logout Action
export const LogoutRequest = (data: any) => {
  return (dispatch: any) => {
    const config = {
      method: "PUT",
      url: `${BASE_URL}/logout`,
      headers: {
        Authorization: `Bearer ${data.access_token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((res) => {
        dispatch({
          type: LOGOUT_REQUEST_SUCCESS,
          payload: {
            data: res.data,
            message: res.data.message,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGOUT_REQUEST_FAILED,
          payload: {
            data: null,
            message: err.response?.data?.message || "Logout failed, please check your connection",
          },
        });
      });
  };
};
