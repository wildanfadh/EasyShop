import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layouts
import { AuthLayout, MainLayout } from "../layouts";

// auth views
import {
  LoginAuthViews,
  RegisterAuthViews,
  ResetAuthViews,
  SetPasswordAuthViews,
} from "../views";

// main views
import {
  HomeMainViews,
  ProductListMainViews,
  ProductDetailMainViews,
  CartPageMainViews,
  AccountInfoCheckout,
  DeliveryInfoCheckout,
  PaymentCheckout,
} from "../views";

export const CoreRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginAuthViews />} />
          <Route path="register" element={<RegisterAuthViews />} />
          <Route path="reset" element={<ResetAuthViews />} />
          <Route path="set_pass" element={<SetPasswordAuthViews />} />
        </Route>

        {/* Main */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeMainViews />} />
          <Route path="product_list" element={<ProductListMainViews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
