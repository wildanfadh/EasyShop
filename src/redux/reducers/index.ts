import { combineReducers } from "redux";

// auth
import {
  RegisterAuthReducer,
  LoginAuthReducer,
  LogoutAuthReducer,
} from "./auth.reducer";

// category
import { getAllCategoriesReducer } from "./category.reducer";

export const rootReducer = combineReducers({
  login: LoginAuthReducer,
  register: RegisterAuthReducer,
  logout: LogoutAuthReducer,
  categories: getAllCategoriesReducer,
});
