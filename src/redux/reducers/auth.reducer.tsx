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

const initialStateRegister = {
  dataLogin: null,
  loading: false,
  success: false,
  error: false,
  message: "",
};

const initialStateLogin = {
  dataLogin: null,
  loading: false,
  success: false,
  error: false,
  message: "",
};

const initialStateLogout = {
  dataLogin: null,
  loading: false,
  success: false,
  error: false,
  message: "",
};

// Register Auth Reducer
export const RegisterAuthReducer = (
  state = initialStateRegister,
  action: any
) => {
  //   console.log("register auth data action", action);
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
        message: action.error,
      };
    case REGISTER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        dataLogin: action.dataLogin,
      };
    case "CLEAR_STATE_AUTH":
      return initialStateRegister;
    default:
      return state;
  }
};

// Login Auth Reducer
export const LoginAuthReducer = (state = initialStateLogin, action: any) => {
  // console.log("login auth data action", action);
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
        message: action.payload.message,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        dataLogin: action.payload.data,
        message: action.payload.message,
      };
    case "CLEAR_STATE_AUTH":
      return initialStateLogin;
    default:
      return state;
  }
};

// Logout Auth Reducer
export const LogoutAuthReducer = (state = initialStateLogout, action: any) => {
  // console.log("login auth data action", action);
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
        message: action.payload.message,
      };
    case LOGOUT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        dataLogin: action.payload.data,
        message: action.payload.message,
      };
    case "CLEAR_STATE_AUTH":
      return initialStateLogout;
    default:
      return state;
  }
};
