import { combineReducers } from "redux";

// auth
import {
  RegisterAuthReducer,
  LoginAuthReducer,
  LogoutAuthReducer,
} from "./auth.reducer";

// category
import { getAllCategoriesReducer } from "./category.reducer";

// products
import { getAllProductsReducer } from "./product.reducer";

export const rootReducer = combineReducers({
  login: LoginAuthReducer,
  register: RegisterAuthReducer,
  logout: LogoutAuthReducer,
  categories: getAllCategoriesReducer,
  products: getAllProductsReducer,
});
