import { combineReducers } from "redux";
import {
  RegisterAuthReducer,
  LoginAuthReducer,
  LogoutAuthReducer,
} from "./auth.reducer";

export const rootReducer = combineReducers({
  login: LoginAuthReducer,
  register: RegisterAuthReducer,
  logout: LogoutAuthReducer,
});
