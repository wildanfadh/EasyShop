import { configureStore } from "@reduxjs/toolkit";
import {
  RegisterAuthReducer,
  LoginAuthReducer,
} from "../reducers/auth.reducer";

export default configureStore({
  reducer: {
    login: LoginAuthReducer,
    register: RegisterAuthReducer,
  },
});
